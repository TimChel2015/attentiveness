/**
 * Login — весь скрипт входа, регистрации и аккаунта
 * Папка auth/ — один файл для GitHub Pages
 */
(function (global) {
  const USERS_KEY = 'attentionTrainerUsers';
  const SESSION_KEY = 'attentionTrainerSession';
  const GUEST_KEY = 'attentionTrainerGuest';

  const DEFAULT_USER_DATA = {
    tutorialDone: false,
    tutorialScore: 0,
    tutorialIntroSeen: false,
    totalScore: 0,
    winStreak: 0,
    lang: 'en',
    theme: 'light',
    age: '5-7',
  };

  function readUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
    } catch {
      return {};
    }
  }

  function writeUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  async function hashPassword(password) {
    const data = new TextEncoder().encode(password);
    if (global.crypto?.subtle) {
      const hash = await crypto.subtle.digest('SHA-256', data);
      return Array.from(new Uint8Array(hash))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
    }
    let h = 5381;
    for (let i = 0; i < data.length; i += 1) {
      h = ((h << 5) + h) ^ data[i];
    }
    return `fallback-${(h >>> 0).toString(16)}-${data.length}`;
  }

  function normalizeUsername(username) {
    return String(username || '').trim().toLowerCase();
  }

  function normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function findUserByEmail(email, users) {
    const normalized = normalizeEmail(email);
    if (!normalized) return null;
    return Object.keys(users).find((name) => normalizeEmail(users[name].email) === normalized) || null;
  }

  function getDisplayName(username) {
    return String(username || '').trim();
  }

  function suggestUsernames(rawUsername, users, count = 3) {
    const base = getDisplayName(rawUsername);
    if (!base) return [];
    const suggestions = [];
    for (let i = 1; suggestions.length < count && i < 1000; i += 1) {
      const candidate = normalizeUsername(`${base}${i}`);
      if (!users[candidate]) suggestions.push(`${base}${i}`);
    }
    return suggestions;
  }

  function getCurrentUser() {
    return localStorage.getItem(SESSION_KEY) || null;
  }

  function getUserData(username) {
    const name = normalizeUsername(username || getCurrentUser());
    if (!name) return null;
    const users = readUsers();
    if (!users[name]) return null;
    const user = { ...users[name] };
    if (user.totalScore == null) user.totalScore = 0;
    if (user.winStreak == null) user.winStreak = 0;
    return user;
  }

  function saveUserData(updates, username) {
    const name = normalizeUsername(username || getCurrentUser());
    if (!name) return null;
    const users = readUsers();
    if (!users[name]) return null;
    users[name] = { ...users[name], ...updates };
    writeUsers(users);
    return { ...users[name] };
  }

  function getProgress(username) {
    const user = getUserData(username);
    return {
      totalScore: user?.totalScore || 0,
      winStreak: user?.winStreak || 0,
    };
  }

  function saveProgress(totalScore, winStreak, username) {
    return saveUserData({ totalScore, winStreak }, username);
  }

  function setSession(username) {
    localStorage.setItem(SESSION_KEY, normalizeUsername(username));
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  function isGuestSession() {
    return localStorage.getItem(GUEST_KEY) === '1';
  }

  function setGuestSession() {
    clearSession();
    localStorage.setItem(GUEST_KEY, '1');
  }

  function clearGuestSession() {
    localStorage.removeItem(GUEST_KEY);
  }

  async function register(username, password, email) {
    const name = normalizeUsername(username);
    const mail = normalizeEmail(email);
    const users = readUsers();

    if (!name || !password || !mail) return { ok: false, error: 'empty' };
    if (name.length < 3) return { ok: false, error: 'usernameShort' };
    if (password.length < 4) return { ok: false, error: 'passwordShort' };
    if (!isValidEmail(mail)) return { ok: false, error: 'invalidEmail' };
    if (users[name]) {
      return {
        ok: false,
        error: 'userExists',
        suggestions: suggestUsernames(username, users),
      };
    }
    if (findUserByEmail(mail, users)) return { ok: false, error: 'emailExists' };

    const displayName = getDisplayName(username);
    users[name] = {
      ...DEFAULT_USER_DATA,
      displayName,
      email: mail,
      passwordHash: await hashPassword(password),
      createdAt: Date.now(),
    };
    writeUsers(users);
    clearGuestSession();
    setSession(name);
    return { ok: true, username: name, displayName, isNew: true };
  }

  async function resetPassword(username, email, newPassword) {
    const name = normalizeUsername(username);
    const mail = normalizeEmail(email);
    const users = readUsers();

    if (!name || !mail || !newPassword) return { ok: false, error: 'empty' };
    if (newPassword.length < 4) return { ok: false, error: 'passwordShort' };
    if (!isValidEmail(mail)) return { ok: false, error: 'invalidEmail' };
    if (!users[name]) return { ok: false, error: 'userNotFound' };
    if (!users[name].email) return { ok: false, error: 'noEmail' };
    if (normalizeEmail(users[name].email) !== mail) {
      return { ok: false, error: 'emailMismatch' };
    }

    users[name].passwordHash = await hashPassword(newPassword);
    writeUsers(users);
    return { ok: true, username: name };
  }

  async function loginByEmail(email, password) {
    const username = findUserByEmail(email, readUsers());
    if (!username) return { ok: false, error: 'userNotFound' };
    return login(username, password);
  }

  async function resetPasswordByEmail(email, newPassword) {
    const username = findUserByEmail(email, readUsers());
    if (!username) return { ok: false, error: 'userNotFound' };
    return resetPassword(username, email, newPassword);
  }

  function emailExists(email) {
    return !!findUserByEmail(email, readUsers());
  }

  async function login(username, password) {
    const name = normalizeUsername(username);
    const users = readUsers();

    if (!name || !password) return { ok: false, error: 'empty' };
    if (!users[name]) return { ok: false, error: 'userNotFound' };

    const hash = await hashPassword(password);
    if (users[name].passwordHash !== hash) {
      return { ok: false, error: 'wrongPassword' };
    }

    clearGuestSession();
    setSession(name);
    return {
      ok: true,
      username: name,
      displayName: users[name].displayName || name,
      isNew: !users[name].tutorialDone,
    };
  }

  function getDisplayNameForUser(username) {
    const name = normalizeUsername(username || getCurrentUser());
    if (!name) return '';
    const users = readUsers();
    return users[name]?.displayName || name;
  }

  function logout() {
    clearSession();
    clearGuestSession();
  }

  function deleteAccount(username) {
    const name = normalizeUsername(username || getCurrentUser());
    if (!name) return false;
    const users = readUsers();
    if (!users[name]) return false;
    delete users[name];
    writeUsers(users);
    logout();
    return true;
  }

  global.Auth = {
    getCurrentUser,
    getUserData,
    saveUserData,
    getProgress,
    saveProgress,
    register,
    login,
    loginByEmail,
    resetPassword,
    resetPasswordByEmail,
    emailExists,
    isValidEmail,
    normalizeEmail,
    logout,
    deleteAccount,
    normalizeUsername,
    getDisplayNameForUser,
    isGuestSession,
    setGuestSession,
    clearGuestSession,
  };
})(window);

(function (global) {
  const { t } = global.I18n;

  function $(id) {
    return document.getElementById(id);
  }

  let authMode = 'login';
  let endGameHint = false;

  function showAuthScreen() {
    const overlay = $('authOverlay');
    if (overlay) overlay.hidden = false;
    setAppAuthenticated(false);
  }

  function hideAuthScreen() {
    const overlay = $('authOverlay');
    if (overlay) overlay.hidden = true;
    endGameHint = false;
  }

  function setAppAuthenticated(authenticated) {
    const app = $('app');
    if (app) app.classList.toggle('app--guest', !authenticated);
    const header = $('appHeader');
    if (header) header.hidden = !authenticated;
  }

  function setAuthMode(mode) {
    authMode = mode;
    const isRegister = mode === 'register';
    const isReset = mode === 'reset';
    const needsEmail = isRegister || isReset;
    const needsConfirm = isRegister || isReset;

    const tabs = $('authTabs');
    if (tabs) tabs.hidden = isReset;
    if ($('authTabLogin')) {
      $('authTabLogin').classList.toggle('auth-tabs__btn--active', mode === 'login');
    }
    if ($('authTabRegister')) {
      $('authTabRegister').classList.toggle('auth-tabs__btn--active', isRegister);
    }
    if ($('authEmailWrap')) $('authEmailWrap').hidden = !needsEmail;
    if ($('authEmail')) $('authEmail').required = needsEmail;
    if ($('authConfirmWrap')) $('authConfirmWrap').hidden = !needsConfirm;
    if ($('authPasswordConfirm')) $('authPasswordConfirm').required = needsConfirm;
    if ($('authForgotWrap')) $('authForgotWrap').hidden = mode !== 'login';
    if ($('authBackLoginWrap')) $('authBackLoginWrap').hidden = !isReset;
    if ($('authResetHint')) $('authResetHint').hidden = !isReset;
    if ($('authPassword')) {
      $('authPassword').autocomplete = needsConfirm ? 'new-password' : 'current-password';
    }
    clearAuthError();
    clearAuthSuccess();
  }

  function resetAuth() {
    authMode = 'login';
    const form = $('authForm');
    if (form) form.reset();
    setAuthMode('login');
  }

  function updateAuthFormTexts(lang) {
    const titleKey = authMode === 'register'
      ? 'authRegisterTitle'
      : authMode === 'reset'
        ? 'authResetTitle'
        : 'authLoginTitle';
    const submitKey = authMode === 'register'
      ? 'authSubmitRegister'
      : authMode === 'reset'
        ? 'authSubmitReset'
        : 'authSubmitLogin';
    const passwordLabelKey = authMode === 'reset' ? 'authNewPassword' : 'authPassword';

    const titleEl = $('authTitle');
    const submitEl = $('authSubmit');
    const passwordLabelEl = $('authPasswordLabel');
    if (titleEl) titleEl.textContent = t(lang, titleKey);
    if (submitEl) submitEl.textContent = t(lang, submitKey);
    if (passwordLabelEl) passwordLabelEl.textContent = t(lang, passwordLabelKey);
    if ($('authTabLogin')) $('authTabLogin').textContent = t(lang, 'authLogin');
    if ($('authTabRegister')) $('authTabRegister').textContent = t(lang, 'authRegister');
    document.querySelectorAll('#authOverlay [data-i18n]').forEach((el) => {
      if (['authTitle', 'authSubmit', 'authPasswordLabel', 'authSaveScoreHint'].includes(el.id)) return;
      el.textContent = t(lang, el.dataset.i18n);
    });
    const saveHint = $('authSaveScoreHint');
    if (saveHint) {
      saveHint.hidden = authMode === 'reset';
      if (!saveHint.hidden) {
        const hintKey = endGameHint ? 'authEndGameHint' : 'authSaveScoreHint';
        saveHint.textContent = t(lang, hintKey);
      }
    }
    if ($('authGuestBtn')) {
      $('authGuestBtn').textContent = t(lang, 'authPlayAsGuest');
    }
  }

  function showAuthError(message) {
    const el = $('authError');
    if (!el) return;
    el.textContent = message;
    el.hidden = !message;
  }

  function clearAuthError() {
    const el = $('authError');
    if (!el) return;
    el.hidden = true;
    el.textContent = '';
  }

  function showAuthSuccess(message) {
    const el = $('authSuccess');
    if (!el) return;
    el.textContent = message;
    el.hidden = !message;
  }

  function clearAuthSuccess() {
    const el = $('authSuccess');
    if (!el) return;
    el.hidden = true;
    el.textContent = '';
  }

  function updateAccountChip(displayName, isGuest, lang) {
    const name = displayName || '';
    if ($('accountBtnName')) $('accountBtnName').textContent = name;
    if ($('accountMenuName')) $('accountMenuName').textContent = name;
    if ($('accountDeleteBtn')) $('accountDeleteBtn').hidden = isGuest;
    if (lang) {
      if ($('accountLogoutBtn')) $('accountLogoutBtn').textContent = t(lang, 'authLogout');
      if ($('accountDeleteBtn')) $('accountDeleteBtn').textContent = t(lang, 'authDeleteAccount');
    }
  }

  function showDeleteAccountConfirm(lang, onConfirm, onCancel) {
    const overlay = $('deleteAccountOverlay');
    if ($('deleteAccountText')) $('deleteAccountText').textContent = t(lang, 'authDeleteConfirm');
    if ($('deleteAccountCancel')) $('deleteAccountCancel').textContent = t(lang, 'authDeleteCancel');
    if ($('deleteAccountConfirm')) $('deleteAccountConfirm').textContent = t(lang, 'authDeleteConfirmBtn');
    if (overlay) overlay.hidden = false;

    const confirm = () => {
      if (overlay) overlay.hidden = true;
      $('deleteAccountConfirm')?.removeEventListener('click', confirm);
      $('deleteAccountCancel')?.removeEventListener('click', cancel);
      onConfirm();
    };
    const cancel = () => {
      if (overlay) overlay.hidden = true;
      $('deleteAccountConfirm')?.removeEventListener('click', confirm);
      $('deleteAccountCancel')?.removeEventListener('click', cancel);
      if (onCancel) onCancel();
    };

    $('deleteAccountConfirm')?.addEventListener('click', confirm);
    $('deleteAccountCancel')?.addEventListener('click', cancel);
  }

  function hideDeleteAccountConfirm() {
    const overlay = $('deleteAccountOverlay');
    if (overlay) overlay.hidden = true;
  }

  function bindClick(id, handler) {
    const el = $(id);
    if (el) el.addEventListener('click', handler);
  }

  function initAccountMenu(menuApi, onLogout, onDeleteRequest) {
    const menu = $('accountMenu');
    if (menu && menuApi.bindMenuScroll) menuApi.bindMenuScroll(menu);

    bindClick('accountBtn', (e) => {
      e.stopPropagation();
      menuApi.toggleMenu('accountMenu');
    });

    bindClick('accountLogoutBtn', () => {
      menuApi.closeAllMenus();
      onLogout();
    });

    bindClick('accountDeleteBtn', () => {
      menuApi.closeAllMenus();
      onDeleteRequest();
    });
  }

  function showEndGameAuthHint(show, lang) {
    endGameHint = show;
    updateAuthFormTexts(lang || 'en');
  }

  global.AuthUI = {
    $,
    showAuthScreen,
    hideAuthScreen,
    setAppAuthenticated,
    setAuthMode,
    resetAuth,
    updateAuthFormTexts,
    showEndGameAuthHint,
    showAuthError,
    clearAuthError,
    showAuthSuccess,
    clearAuthSuccess,
    updateAccountChip,
    showDeleteAccountConfirm,
    hideDeleteAccountConfirm,
    initAccountMenu,
    getAuthMode: () => authMode,
  };
})(window);

(function (global) {
  const { t } = global.I18n;
  const Auth = global.Auth;
  const AuthUI = global.AuthUI;

  const AUTH_ERROR_KEYS = {
    empty: 'authErrorEmpty',
    usernameShort: 'authErrorUsernameShort',
    passwordShort: 'authErrorPasswordShort',
    userExists: 'authErrorUserExists',
    userNotFound: 'authErrorUserNotFound',
    wrongPassword: 'authErrorWrongPassword',
    passwordMismatch: 'authErrorPasswordMismatch',
    invalidEmail: 'authErrorInvalidEmail',
    emailExists: 'authErrorEmailExists',
    emailMismatch: 'authErrorEmailMismatch',
    noEmail: 'authErrorNoEmail',
  };

  let hooks = {
    getLang: () => 'en',
    onEnterApp: () => {},
    onEnterGuest: () => {},
    onLeaveApp: () => {},
    onDeleteAccount: () => {},
  };

  let menuApi = null;
  let formBound = false;
  let menuBound = false;

  function bindAuthForm() {
    if (formBound) return;
    formBound = true;

    const lang = () => hooks.getLang();

    bindClick('authTabLogin', () => {
      AuthUI.setAuthMode('login');
      AuthUI.updateAuthFormTexts(lang());
    });
    bindClick('authTabRegister', () => {
      AuthUI.setAuthMode('register');
      AuthUI.updateAuthFormTexts(lang());
    });
    bindSubmit('authForm', handleAuthSubmit);
    bindClick('authForgotBtn', () => {
      AuthUI.clearAuthError();
      AuthUI.clearAuthSuccess();
      AuthUI.setAuthMode('reset');
      AuthUI.updateAuthFormTexts(lang());
    });
    bindClick('authBackLoginBtn', () => {
      AuthUI.clearAuthError();
      AuthUI.clearAuthSuccess();
      AuthUI.$('authForm')?.reset();
      AuthUI.setAuthMode('login');
      AuthUI.updateAuthFormTexts(lang());
    });
    bindClick('authGuestBtn', () => hooks.onEnterGuest());
  }

  function bindAccountMenu() {
    if (menuBound || !menuApi) return;
    menuBound = true;
    AuthUI.initAccountMenu(menuApi, () => hooks.onLeaveApp(), () => hooks.onDeleteAccount());
  }

  function initAuth() {
    bindAuthForm();
    bindAccountMenu();
    if (!formBound) return;
    try {
      AuthUI.resetAuth();
    } catch (err) {
      console.error('resetAuth failed:', err);
    }
  }

  function configure(nextHooks) {
    hooks = { ...hooks, ...nextHooks };
  }

  function setMenuApi(api) {
    menuApi = api;
    bindAccountMenu();
  }

  function showAuthErrorKey(errorKey, extra = {}) {
    const key = AUTH_ERROR_KEYS[errorKey] || 'authErrorEmpty';
    let message = t(hooks.getLang(), key);
    if (errorKey === 'userExists' && extra.suggestions?.length) {
      message += ` ${t(hooks.getLang(), 'authErrorUserExistsTry')}: ${extra.suggestions.join(', ')}`;
    }
    AuthUI.showAuthError(message);
  }

  async function handleAuthSubmit(e) {
    e.preventDefault();
    AuthUI.clearAuthError();
    AuthUI.clearAuthSuccess();

    const username = AuthUI.$('authUsername').value;
    const email = AuthUI.$('authEmail').value;
    const password = AuthUI.$('authPassword').value;
    const confirm = AuthUI.$('authPasswordConfirm').value;
    const mode = AuthUI.getAuthMode();

    if (mode === 'register') {
      if (password !== confirm) {
        showAuthErrorKey('passwordMismatch');
        return;
      }
      const result = await Auth.register(username, password, email);
      if (!result.ok) {
        showAuthErrorKey(result.error, result);
        return;
      }
      hooks.onEnterApp(result.username);
      return;
    }

    if (mode === 'reset') {
      if (password !== confirm) {
        showAuthErrorKey('passwordMismatch');
        return;
      }
      const result = await Auth.resetPassword(username, email, password);
      if (!result.ok) {
        showAuthErrorKey(result.error, result);
        return;
      }
      AuthUI.$('authForm')?.reset();
      AuthUI.setAuthMode('login');
      AuthUI.updateAuthFormTexts(hooks.getLang());
      AuthUI.showAuthSuccess(t(hooks.getLang(), 'authResetSuccess'));
      return;
    }

    const result = await Auth.login(username, password);
    if (!result.ok) {
      showAuthErrorKey(result.error);
      return;
    }
    hooks.onEnterApp(result.username);
  }

  function bindClick(id, handler) {
    const el = AuthUI.$(id);
    if (el) el.addEventListener('click', handler);
  }

  function bindSubmit(id, handler) {
    const el = AuthUI.$(id);
    if (el) el.addEventListener('submit', handler);
  }

  global.AuthController = {
    configure,
    setMenuApi,
    initAuth,
  };

  try {
    initAuth();
  } catch (err) {
    console.error('Early auth bind failed:', err);
  }
})(window);
