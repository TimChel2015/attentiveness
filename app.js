/**
 * Attention Trainer — main application controller
 */
(function () {
  const { isRtl, normalizeLang, TUTORIAL_STEPS, t } = I18n;
  const { createGameState, generateRound, addScore, normalizeAge } = Game;
  const {
    $,
    applyTranslations,
    setDirection,
    showWelcomeScreen,
    showPlayingScreen,
    updateScore,
    updateGameHint,
    renderGameField,
    clearGameField,
    setRoundTime,
    updateTimer,
    showFeedback,
    hideFeedback,
    updateThemeSwitch,
    updateLangButton,
    updateAgeButton,
    populateAgeMenu,
    initPickers,
    showTutorialStep,
    hideTutorialOverlay,
    isTutorialOverlayOpen,
    showTutorialBanner,
    updateTutorialBanner,
    hideTutorialBanner,
    bindTutorialControls,
    refreshTutorialTexts,
    setAgePickerLocked,
    showAuthScreen,
    hideAuthScreen,
    setAppAuthenticated,
    setAuthMode,
    resetAuth,
    updateAuthFormTexts,
    showAuthError,
    clearAuthError,
    showAuthSuccess,
    clearAuthSuccess,
    updateAccountChip,
    initAccountMenu,
    showDeleteAccountConfirm,
    hideDeleteAccountConfirm,
    getAuthMode,
    closeAllMenus,
  } = UI;

  const TUTORIAL_LEVEL = '5-7';
  const TUTORIAL_SCORE_GOAL = 10;
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

  const prefs = {
    theme: 'light',
    lang: 'en',
    age: '5-7',
  };

  const state = createGameState();
  let tutorialActive = false;
  let tutorialStep = 0;
  let appReady = false;
  let isGuest = false;

  function authLang() {
    return appReady ? prefs.lang : 'en';
  }

  function isGuestTutorialDone() {
    return localStorage.getItem('guestTutorialDone') === '1';
  }

  function loadGuestPrefs() {
    prefs.theme = localStorage.getItem('guestTheme') || 'light';
    prefs.lang = normalizeLang(localStorage.getItem('guestLang') || 'en');
    prefs.age = normalizeAge(localStorage.getItem('guestAge') || '5-7');
    const score = parseInt(localStorage.getItem('guestTutorialScore') || '0', 10);
    if (isGuestTutorialDone() || score >= TUTORIAL_SCORE_GOAL) {
      if (!isGuestTutorialDone()) {
        localStorage.setItem('guestTutorialDone', '1');
        localStorage.removeItem('guestTutorialScore');
      }
      tutorialActive = false;
      return;
    }
    tutorialActive = true;
  }

  function accountNeedsTutorial(user, username) {
    if (!user) return true;
    if (user.tutorialDone === true) return false;
    if ((user.tutorialScore || 0) >= TUTORIAL_SCORE_GOAL) {
      Auth.saveUserData(
        { tutorialDone: true, tutorialScore: 0, tutorialIntroSeen: true },
        username
      );
      return false;
    }
    return true;
  }

  function hasTutorialIntroSeen() {
    if (isGuest) return localStorage.getItem('guestTutorialIntroSeen') === '1';
    return Auth.getUserData()?.tutorialIntroSeen === true;
  }

  function saveTutorialIntroSeen() {
    if (isGuest) {
      localStorage.setItem('guestTutorialIntroSeen', '1');
      return;
    }
    Auth.saveUserData({ tutorialIntroSeen: true });
  }

  function saveGuestPrefs() {
    localStorage.setItem('guestTheme', prefs.theme);
    localStorage.setItem('guestLang', prefs.lang);
    localStorage.setItem('guestAge', prefs.age);
  }

  function loadUserPrefs(username) {
    if (isGuest) {
      loadGuestPrefs();
      return;
    }
    const user = Auth.getUserData(username);
    if (!user) {
      tutorialActive = true;
      return;
    }
    prefs.theme = user.theme || 'light';
    prefs.lang = normalizeLang(user.lang || 'en');
    prefs.age = normalizeAge(user.age || '5-7');
    tutorialActive = accountNeedsTutorial(user, username);
  }

  function saveUserPrefs() {
    if (isGuest) {
      saveGuestPrefs();
      return;
    }
    Auth.saveUserData({
      theme: prefs.theme,
      lang: prefs.lang,
      age: prefs.age,
    });
  }

  function getTutorialScore() {
    if (isGuest) {
      return parseInt(localStorage.getItem('guestTutorialScore') || '0', 10);
    }
    return Auth.getUserData()?.tutorialScore || 0;
  }

  function saveTutorialScore(score) {
    if (isGuest) {
      localStorage.setItem('guestTutorialScore', String(score));
      return;
    }
    Auth.saveUserData({ tutorialScore: score });
  }

  function completeTutorial() {
    if (!tutorialActive) return;
    tutorialActive = false;
    if (isGuest) {
      localStorage.setItem('guestTutorialDone', '1');
      localStorage.removeItem('guestTutorialScore');
    } else {
      Auth.saveUserData({
        tutorialDone: true,
        tutorialScore: 0,
        tutorialIntroSeen: true,
      });
    }
    hideTutorialOverlay();
    hideTutorialBanner();
    setAgePickerLocked(false);
  }

  function addTutorialProgress() {
    if (!tutorialActive) return;
    const next = getTutorialScore() + 1;
    saveTutorialScore(next);
    if (next >= TUTORIAL_SCORE_GOAL) {
      completeTutorial();
    }
  }

  function syncTutorialBanner() {
    if (!tutorialActive || !state.isPlaying) return;
    updateTutorialBanner(prefs.lang, getTutorialScore());
  }

  function advanceTutorialStep() {
    tutorialStep += 1;
    if (tutorialStep >= TUTORIAL_STEPS.length) {
      hideTutorialOverlay();
      saveTutorialIntroSeen();
      return;
    }
    showTutorialStep(tutorialStep, prefs.lang);
  }

  function initTutorial() {
    if (!tutorialActive) {
      setAgePickerLocked(false);
      hideTutorialOverlay();
      hideTutorialBanner();
      return;
    }
    prefs.age = TUTORIAL_LEVEL;
    saveUserPrefs();
    updateAgeButton(TUTORIAL_LEVEL, prefs.lang);
    setAgePickerLocked(true);
    if (hasTutorialIntroSeen()) return;
    tutorialStep = 0;
    showTutorialStep(0, prefs.lang);
  }

  function resetGameSession() {
    hideFeedback();
    clearTimer();
    clearGameField();
    hideTutorialOverlay();
    hideTutorialBanner();
    state.score = 0;
    state.isPlaying = false;
    state.answered = false;
    state.round = null;
    updateScore(0, false);
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    updateThemeSwitch(isDark);
    prefs.theme = theme;
    if (appReady) saveUserPrefs();
  }

  function applyLanguage(lang) {
    lang = normalizeLang(lang);
    prefs.lang = lang;
    if (appReady) saveUserPrefs();
    applyTranslations(lang);
    setDirection(isRtl(lang));
    updateThemeSwitch(prefs.theme === 'dark');
    updateLangButton(lang);
    updateAgeButton(prefs.age, lang);
    populateAgeMenu(lang, applyAge);
    if (state.isPlaying && state.round) {
      updateGameHint(state.round.diffType, lang);
    }
    if (tutorialActive) {
      refreshTutorialTexts(
        lang,
        isTutorialOverlayOpen() ? tutorialStep : -1,
        getTutorialScore(),
        state.isPlaying
      );
    }
    if (appReady) {
      const label = isGuest
        ? t(lang, 'authGuestLabel')
        : getAccountLabel(Auth.getCurrentUser());
      updateAccountChip(label, isGuest, lang);
    }
  }

  function applyAge(age) {
    if (tutorialActive) return;
    age = normalizeAge(age);
    prefs.age = age;
    saveUserPrefs();
    updateAgeButton(age, prefs.lang);
    syncTutorialBanner();
    if (state.isPlaying && !state.answered) {
      startRound();
    }
  }

  function clearTimer() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function startTimer() {
    clearTimer();
    state.timeLeft = state.roundTime;
    updateTimer(state.timeLeft);

    state.timerId = setInterval(() => {
      state.timeLeft -= 1;
      updateTimer(state.timeLeft);

      if (state.timeLeft <= 0) {
        clearTimer();
        handleTimeout();
      }
    }, 1000);
  }

  function startRound() {
    state.round = generateRound(prefs.age);
    state.answered = false;
    state.isPlaying = true;
    state.roundTime = state.round.roundTime;
    setRoundTime(state.roundTime);
    updateGameHint(state.round.diffType, prefs.lang);
    renderGameField(
      state.round.objects,
      state.round.cols,
      handleObjectClick
    );
    startTimer();
  }

  function handleObjectClick(index) {
    if (!state.isPlaying || state.answered) return;

    state.answered = true;
    clearTimer();

    const isCorrect = index === state.round.oddIndex;
    renderGameField(
      state.round.objects,
      state.round.cols,
      () => {},
      true,
      isCorrect ? null : state.round.oddIndex
    );

    if (isCorrect) {
      addScore(state);
      updateScore(state.score, true);
      addTutorialProgress();
      syncTutorialBanner();
      showFeedback('correct', prefs.lang, () => startRound());
    } else {
      showFeedback('wrong', prefs.lang, () => startRound());
    }
  }

  function handleTimeout() {
    if (!state.isPlaying || state.answered) return;

    state.answered = true;
    state.isPlaying = false;
    renderGameField(
      state.round.objects,
      state.round.cols,
      () => {},
      true
    );
    showFeedback('timeout', prefs.lang, () => startRound());
  }

  function startGame() {
    hideFeedback();
    clearTimer();
    state.isPlaying = true;
    showPlayingScreen();
    updateScore(state.score, true);
    if (tutorialActive) {
      showTutorialBanner(prefs.lang, getTutorialScore());
    }
    startRound();
  }

  function newGame() {
    hideFeedback();
    clearTimer();
    clearGameField();
    state.score = 0;
    state.isPlaying = false;
    showWelcomeScreen();
    updateScore(0, false);
    if (tutorialActive) {
      hideTutorialBanner();
    }
  }

  function getAccountLabel(username) {
    const displayName = Auth.getDisplayNameForUser(username);
    return `@${displayName || username}`;
  }

  function enterApp(username, asGuest = false) {
    isGuest = asGuest;
    appReady = true;
    setAppAuthenticated(true);
    hideAuthScreen();
    loadUserPrefs(username);
    updateAccountChip(
      asGuest ? t(prefs.lang, 'authGuestLabel') : getAccountLabel(username),
      asGuest,
      prefs.lang
    );
    applyTheme(prefs.theme);
    applyLanguage(prefs.lang);
    updateAgeButton(prefs.age, prefs.lang);
    resetGameSession();
    showWelcomeScreen();
    initTutorial();
  }

  function enterAsGuest() {
    Auth.setGuestSession();
    enterApp(null, true);
  }

  function leaveApp() {
    appReady = false;
    isGuest = false;
    tutorialActive = false;
    tutorialStep = 0;
    resetGameSession();
    setAgePickerLocked(false);
    closeAllMenus();
    Auth.logout();
    updateAccountChip('', false);
    hideDeleteAccountConfirm();
    setAppAuthenticated(false);
    showAuthScreen();
    resetAuth();
    applyTranslations('en');
    setDirection(false);
    updateAuthFormTexts('en');
  }

  function showAuthErrorKey(errorKey, extra = {}) {
    const key = AUTH_ERROR_KEYS[errorKey] || 'authErrorEmpty';
    let message = t(authLang(), key);
    if (errorKey === 'userExists' && extra.suggestions?.length) {
      message += ` ${t(authLang(), 'authErrorUserExistsTry')}: ${extra.suggestions.join(', ')}`;
    }
    showAuthError(message);
  }

  async function handleAuthSubmit(e) {
    e.preventDefault();
    clearAuthError();
    clearAuthSuccess();

    const username = $('authUsername').value;
    const email = $('authEmail').value;
    const password = $('authPassword').value;
    const confirm = $('authPasswordConfirm').value;
    const mode = getAuthMode();

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
      enterApp(result.username);
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
      $('authForm').reset();
      setAuthMode('login');
      updateAuthFormTexts(authLang());
      showAuthSuccess(t(authLang(), 'authResetSuccess'));
      return;
    }

    const result = await Auth.login(username, password);
    if (!result.ok) {
      showAuthErrorKey(result.error);
      return;
    }
    enterApp(result.username);
  }

  function requestDeleteAccount() {
    if (isGuest) return;
    showDeleteAccountConfirm(prefs.lang, () => {
      Auth.deleteAccount();
      leaveApp();
    });
  }

  function bindClick(id, handler) {
    const el = $(id);
    if (el) el.addEventListener('click', handler);
  }

  function bindSubmit(id, handler) {
    const el = $(id);
    if (el) el.addEventListener('submit', handler);
  }

  function initAuth() {
    resetAuth();
    bindClick('authTabLogin', () => {
      setAuthMode('login');
      updateAuthFormTexts(authLang());
    });
    bindClick('authTabRegister', () => {
      setAuthMode('register');
      updateAuthFormTexts(authLang());
    });
    bindSubmit('authForm', handleAuthSubmit);
    bindClick('authForgotBtn', () => {
      clearAuthError();
      clearAuthSuccess();
      setAuthMode('reset');
      updateAuthFormTexts(authLang());
    });
    bindClick('authBackLoginBtn', () => {
      clearAuthError();
      clearAuthSuccess();
      const form = $('authForm');
      if (form) form.reset();
      setAuthMode('login');
      updateAuthFormTexts(authLang());
    });
    bindClick('authGuestBtn', enterAsGuest);
    initAccountMenu(leaveApp, requestDeleteAccount);
  }

  function bindGameControls() {
    bindClick('startBtn', startGame);
    bindClick('newGameBtn', newGame);
    bindClick('themeLightBtn', () => applyTheme('light'));
    bindClick('themeDarkBtn', () => applyTheme('dark'));
  }

  function init() {
    initAuth();
    bindGameControls();

    try {
      bindTutorialControls(advanceTutorialStep);
      initPickers(prefs.lang, applyLanguage, applyAge);

      const username = Auth.getCurrentUser();
      if (username && Auth.getUserData(username)) {
        enterApp(username, false);
      } else if (Auth.isGuestSession()) {
        enterAsGuest();
      } else {
        if (username) Auth.logout();
        showAuthScreen();
        applyTranslations('en');
        setDirection(false);
        updateAuthFormTexts('en');
      }
    } catch (err) {
      console.error('App init failed:', err);
      showAuthScreen();
      setAppAuthenticated(false);
      updateAuthFormTexts('en');
    }
  }

  init();
})();
