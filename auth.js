/** Local account storage — demo auth without a server */
(function (global) {
  const USERS_KEY = 'attentionTrainerUsers';
  const SESSION_KEY = 'attentionTrainerSession';
  const GUEST_KEY = 'attentionTrainerGuest';

  const DEFAULT_USER_DATA = {
    tutorialDone: false,
    tutorialScore: 0,
    tutorialIntroSeen: false,
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
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
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
    return users[name] ? { ...users[name] } : null;
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
