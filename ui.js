/** DOM updates and rendering */
(function (global) {
  const { t, LANGUAGE_OPTIONS, AGE_I18N_KEYS, TUTORIAL_STEPS } = global.I18n;
  const { AGE_GROUPS } = global.Game;

  let currentRoundTime = 10;
  let openMenu = null;

  function $(id) {
    return document.getElementById(id);
  }

  function closeAllMenus() {
    document.querySelectorAll('.picker__menu').forEach((m) => {
      m.hidden = true;
    });
    openMenu = null;
  }

  function onPageScroll(e) {
    if (!openMenu) return;
    if (e.target.closest && e.target.closest('.picker__menu')) return;
    closeAllMenus();
  }

  function bindMenuScroll(menu) {
    menu.addEventListener('click', (e) => e.stopPropagation());
    menu.addEventListener('wheel', (e) => e.stopPropagation(), { passive: true });
    menu.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
    menu.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });
  }

  const MENU_BTN_IDS = {
    langMenu: 'langBtn',
    ageMenu: 'ageBtn',
    accountMenu: 'accountBtn',
  };

  function positionMenu(menuId) {
    const menu = $(menuId);
    const btn = $(MENU_BTN_IDS[menuId]);
    const rect = btn.getBoundingClientRect();
    const gap = 6;
    const menuWidth = menu.offsetWidth || 200;

    menu.style.top = `${rect.bottom + gap}px`;
    menu.style.right = 'auto';

    if (menuId === 'langMenu') {
      let left = rect.left + rect.width / 2 - menuWidth / 2;
      left = Math.max(8, Math.min(left, window.innerWidth - menuWidth - 8));
      menu.style.left = `${left}px`;
    } else if (menuId === 'accountMenu') {
      let left = rect.right - menuWidth;
      left = Math.max(8, Math.min(left, window.innerWidth - menuWidth - 8));
      menu.style.left = `${left}px`;
    } else {
      menu.style.left = `${Math.max(8, rect.left)}px`;
    }
  }

  function toggleMenu(menuId) {
    const menu = $(menuId);
    if (openMenu === menuId) {
      closeAllMenus();
      return;
    }
    closeAllMenus();
    menu.hidden = false;
    openMenu = menuId;
    requestAnimationFrame(() => positionMenu(menuId));
  }

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (el.closest('#authOverlay') && (el.id === 'authTitle' || el.id === 'authSubmit')) return;
      el.textContent = t(lang, el.dataset.i18n);
    });
    document.documentElement.lang = lang;
    refreshPickerLabels(lang);
    if (!$('authOverlay').hidden) {
      updateAuthFormTexts(lang);
    }
  }

  function refreshPickerLabels(lang) {
    document.querySelectorAll('[data-age-id]').forEach((btn) => {
      const id = btn.dataset.ageId;
      const key = AGE_I18N_KEYS[id];
      btn.textContent = t(lang, key);
    });
    document.querySelectorAll('[data-lang]').forEach((btn) => {
      const opt = LANGUAGE_OPTIONS.find((l) => l.code === btn.dataset.lang);
      btn.textContent = `${opt.flag} ${opt.label}`;
    });
  }

  function setDirection(isRtl) {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }

  let authMode = 'login';

  function showAuthScreen() {
    $('authOverlay').hidden = false;
    setAppAuthenticated(false);
  }

  function hideAuthScreen() {
    $('authOverlay').hidden = true;
  }

  function setAppAuthenticated(authenticated) {
    $('app').classList.toggle('app--guest', !authenticated);
    $('appHeader').hidden = !authenticated;
  }

  function setAuthMode(mode) {
    authMode = mode;
    const isRegister = mode === 'register';
    $('authTabLogin').classList.toggle('auth-tabs__btn--active', !isRegister);
    $('authTabRegister').classList.toggle('auth-tabs__btn--active', isRegister);
    $('authConfirmWrap').hidden = !isRegister;
    $('authPasswordConfirm').required = isRegister;
    clearAuthError();
  }

  function updateAuthFormTexts(lang) {
    const titleKey = authMode === 'register' ? 'authRegisterTitle' : 'authLoginTitle';
    const submitKey = authMode === 'register' ? 'authSubmitRegister' : 'authSubmitLogin';
    $('authTitle').textContent = t(lang, titleKey);
    $('authSubmit').textContent = t(lang, submitKey);
    $('authTabLogin').textContent = t(lang, 'authLogin');
    $('authTabRegister').textContent = t(lang, 'authRegister');
    document.querySelectorAll('#authOverlay [data-i18n]').forEach((el) => {
      if (el.id === 'authTitle' || el.id === 'authSubmit') return;
      el.textContent = t(lang, el.dataset.i18n);
    });
    if ($('authGuestBtn')) {
      $('authGuestBtn').textContent = t(lang, 'authPlayAsGuest');
    }
  }

  function showAuthError(message) {
    const el = $('authError');
    el.textContent = message;
    el.hidden = !message;
  }

  function clearAuthError() {
    $('authError').hidden = true;
    $('authError').textContent = '';
  }

  function updateAccountChip(displayName, isGuest, lang) {
    const name = displayName || '';
    $('accountBtnName').textContent = name;
    $('accountMenuName').textContent = name;
    $('accountDeleteBtn').hidden = isGuest;
    if (lang) {
      $('accountLogoutBtn').textContent = t(lang, 'authLogout');
      $('accountDeleteBtn').textContent = t(lang, 'authDeleteAccount');
    }
  }

  function showDeleteAccountConfirm(lang, onConfirm, onCancel) {
    const overlay = $('deleteAccountOverlay');
    $('deleteAccountText').textContent = t(lang, 'authDeleteConfirm');
    $('deleteAccountCancel').textContent = t(lang, 'authDeleteCancel');
    $('deleteAccountConfirm').textContent = t(lang, 'authDeleteConfirmBtn');
    overlay.hidden = false;

    const confirm = () => {
      overlay.hidden = true;
      $('deleteAccountConfirm').removeEventListener('click', confirm);
      $('deleteAccountCancel').removeEventListener('click', cancel);
      onConfirm();
    };
    const cancel = () => {
      overlay.hidden = true;
      $('deleteAccountConfirm').removeEventListener('click', confirm);
      $('deleteAccountCancel').removeEventListener('click', cancel);
      if (onCancel) onCancel();
    };

    $('deleteAccountConfirm').addEventListener('click', confirm);
    $('deleteAccountCancel').addEventListener('click', cancel);
  }

  function hideDeleteAccountConfirm() {
    $('deleteAccountOverlay').hidden = true;
  }

  function initAccountMenu(onLogout, onDeleteRequest) {
    bindMenuScroll($('accountMenu'));

    $('accountBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu('accountMenu');
    });

    $('accountLogoutBtn').addEventListener('click', () => {
      closeAllMenus();
      onLogout();
    });

    $('accountDeleteBtn').addEventListener('click', () => {
      closeAllMenus();
      onDeleteRequest();
    });
  }

  function showWelcomeScreen() {
    $('startOverlay').hidden = false;
    $('gameScreen').hidden = true;
  }

  function showPlayingScreen() {
    $('startOverlay').hidden = true;
    $('gameScreen').hidden = false;
  }

  function updateScore(score, visible) {
    $('scoreRow').hidden = !visible;
    $('scoreValue').textContent = score;
  }

  const HINT_KEYS = { color: 'findColor', shape: 'findShape', symbol: 'findSymbol' };

  function updateGameHint(diffType, lang) {
    const key = HINT_KEYS[diffType];
    $('gameHint').textContent = key ? t(lang, key) : '';
  }

  function renderGameField(objects, cols, onSelect, disabled = false, revealIndex = null) {
    const field = $('gameField');
    field.innerHTML = '';
    field.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    objects.forEach((obj, index) => {
      const el = document.createElement('div');
      el.className = 'game-object';
      el.setAttribute('role', 'button');
      el.tabIndex = disabled ? -1 : 0;
      if (disabled) el.classList.add('game-object--disabled');

      const shape = document.createElement('span');
      shape.className = `game-object__shape shape--${obj.shape}`;
      shape.style.backgroundColor = obj.color;
      if (revealIndex === index) shape.classList.add('game-object__shape--reveal');

      if (obj.showSymbol) {
        const symbol = document.createElement('span');
        symbol.className = 'game-object__symbol';
        symbol.textContent = obj.symbol;
        shape.appendChild(symbol);
      }

      el.appendChild(shape);

      const select = () => onSelect(index);
      el.addEventListener('click', select);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          select();
        }
      });

      field.appendChild(el);
    });
  }

  function clearGameField() {
    $('gameField').innerHTML = '';
  }

  function setRoundTime(seconds) {
    currentRoundTime = seconds;
  }

  function updateTimer(timeLeft) {
    const percent = (timeLeft / currentRoundTime) * 100;
    $('timerFill').style.width = `${percent}%`;
    $('timerSeconds').textContent = timeLeft;
    $('timerFill').classList.toggle('timer__fill--warning', timeLeft <= 3);
  }

  function showFeedback(type, lang, onAction) {
    const overlay = $('feedbackOverlay');
    const config = {
      correct: { emoji: '🎉', key: 'correct', btnKey: 'next' },
      wrong: { emoji: '🔄', key: 'wrong', btnKey: 'tryAgain' },
      timeout: { emoji: '⏰', key: 'timeout', btnKey: 'tryAgain' },
    };

    const { emoji, key, btnKey } = config[type];
    $('feedbackCard').className = `overlay__card overlay__card--${type}`;
    $('feedbackEmoji').textContent = emoji;
    $('feedbackText').textContent = t(lang, key);
    $('feedbackBtn').textContent = t(lang, btnKey);
    overlay.hidden = false;

    const handler = () => {
      overlay.hidden = true;
      $('feedbackBtn').removeEventListener('click', handler);
      onAction();
    };
    $('feedbackBtn').addEventListener('click', handler);
  }

  function hideFeedback() {
    $('feedbackOverlay').hidden = true;
  }

  function updateThemeSwitch(isDark) {
    $('themeLightBtn').classList.toggle('theme-switch__btn--active', !isDark);
    $('themeDarkBtn').classList.toggle('theme-switch__btn--active', isDark);
  }

  function updateLangButton(lang) {
    const opt = LANGUAGE_OPTIONS.find((l) => l.code === lang);
    $('langBtnFlag').textContent = opt ? opt.flag : '🌐';
    $('langBtnText').textContent = opt ? opt.label : '—';
    $('langBtn').setAttribute('aria-label', opt ? opt.label : 'Language');
  }

  function updateAgeButton(ageId, lang) {
    const key = AGE_I18N_KEYS[ageId];
    $('ageBtnText').textContent = key ? t(lang, key) : '—';
    $('ageBtn').setAttribute('aria-label', t(lang, 'ageTitle'));
  }

  function populateLangMenu(onSelect) {
    const menu = $('langMenu');
    menu.innerHTML = LANGUAGE_OPTIONS.map(
      ({ code, flag, label }) =>
        `<button type="button" class="picker__item" data-lang="${code}">${flag} ${label}</button>`
    ).join('');
    bindMenuScroll(menu);

    menu.querySelectorAll('.picker__item').forEach((btn) => {
      btn.addEventListener('click', () => {
        onSelect(btn.dataset.lang);
        closeAllMenus();
      });
    });
  }

  function populateAgeMenu(lang, onSelect) {
    const menu = $('ageMenu');
    menu.innerHTML = AGE_GROUPS.map((id) => {
      const key = AGE_I18N_KEYS[id];
      return `<button type="button" class="picker__item" data-age-id="${id}">${t(lang, key)}</button>`;
    }).join('');
    bindMenuScroll(menu);

    menu.querySelectorAll('.picker__item').forEach((btn) => {
      btn.addEventListener('click', () => {
        onSelect(btn.dataset.ageId);
        closeAllMenus();
      });
    });
  }

  let tutorialOverlayVisible = false;
  let agePickerLocked = false;

  function setAgePickerLocked(locked) {
    agePickerLocked = locked;
    const btn = $('ageBtn');
    const picker = btn.closest('.picker--age');
    btn.disabled = locked;
    picker.classList.toggle('picker--locked', locked);
    if (locked) {
      closeAllMenus();
    }
  }

  function showTutorialStep(stepIndex, lang) {
    const step = TUTORIAL_STEPS[stepIndex];
    if (!step) return;

    $('tutorialEmoji').textContent = step.emoji;
    $('tutorialTitle').textContent = t(lang, step.titleKey);
    $('tutorialText').textContent = t(lang, step.textKey);

    const isLast = stepIndex === TUTORIAL_STEPS.length - 1;
    $('tutorialNextBtn').textContent = isLast ? t(lang, 'tutorialGotIt') : t(lang, 'next');

    $('tutorialDots').innerHTML = TUTORIAL_STEPS.map((_, i) =>
      `<span class="tutorial-card__dot${i === stepIndex ? ' tutorial-card__dot--active' : ''}"></span>`
    ).join('');

    $('tutorialOverlay').hidden = false;
    tutorialOverlayVisible = true;
  }

  function hideTutorialOverlay() {
    $('tutorialOverlay').hidden = true;
    tutorialOverlayVisible = false;
  }

  function isTutorialOverlayOpen() {
    return tutorialOverlayVisible;
  }

  function showTutorialBanner(lang, score) {
    $('tutorialBannerText').textContent = t(lang, 'tutorialBanner');
    $('tutorialBannerProgress').textContent = `${score} / 10`;
    $('tutorialBanner').hidden = false;
  }

  function updateTutorialBanner(lang, score) {
    if ($('tutorialBanner').hidden) return;
    showTutorialBanner(lang, score);
  }

  function hideTutorialBanner() {
    $('tutorialBanner').hidden = true;
  }

  function bindTutorialControls(onNext) {
    $('tutorialNextBtn').addEventListener('click', onNext);
  }

  function refreshTutorialTexts(lang, stepIndex, score, playing) {
    if (tutorialOverlayVisible && stepIndex >= 0) {
      showTutorialStep(stepIndex, lang);
    }
    if (playing && !$('tutorialBanner').hidden) {
      showTutorialBanner(lang, score);
    }
  }

  function initPickers(lang, onLangSelect, onAgeSelect) {
    populateLangMenu(onLangSelect);
    populateAgeMenu(lang, onAgeSelect);

    $('langBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu('langMenu');
    });

    $('ageBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      if (agePickerLocked) return;
      toggleMenu('ageMenu');
    });

    document.addEventListener('click', closeAllMenus);
    window.addEventListener('resize', closeAllMenus);
    window.addEventListener('scroll', onPageScroll, true);
  }

  global.UI = {
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
    closeAllMenus,
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
    updateAuthFormTexts,
    showAuthError,
    clearAuthError,
    updateAccountChip,
    initAccountMenu,
    showDeleteAccountConfirm,
    hideDeleteAccountConfirm,
    getAuthMode: () => authMode,
  };
})(window);
