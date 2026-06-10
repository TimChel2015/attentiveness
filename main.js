/** Attention Trainer - bundled script (auto-generated)
 *  Edit files in js/ and run: .\build.ps1
 */
/** Internationalization — 15 languages */
(function (global) {
  const LANGUAGE_OPTIONS = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'uk', label: 'Українська', flag: '🇺🇦' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'he', label: 'עברית', flag: '🇮🇱' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
  ];

  const LANGUAGES = LANGUAGE_OPTIONS.map((l) => l.code);
  const RTL_LANGS = new Set(['ar', 'he']);

  const translations = {
    en: {
      title: 'Attention Trainer',
      hint: 'Find the different object',
      start: 'Start',
      newGame: 'End game',
      score: 'Score',
      correct: 'Correct!',
      wrong: 'Try again',
      timeout: "Time's up!",
      tryAgain: 'Try again',
      next: 'Next',
      themeLight: 'Light theme',
      themeDark: 'Dark theme',
      themeBright: 'Light',
      themeDarkSide: 'Dark',
      findColor: 'Find the different color',
      findShape: 'Find the different shape',
      findSymbol: 'Find the different symbol',
      ageTitle: 'Your age',
      age57: 'Level 1',
      age810: 'Level 2',
      age1113: 'Level 3',
      age1417: 'Level 4',
      age18: 'Level 5',
      tutorialStep1Title: 'Welcome!',
      tutorialStep1Text: 'This is an attention trainer. Find the one object that differs from the rest.',
      tutorialStep2Title: 'Levels',
      tutorialStep2Text: 'There are 5 levels — from easiest to hardest. Start with Level 1.',
      tutorialStep3Title: 'How to play',
      tutorialStep3Text: 'Read the hint, find the different color, shape or symbol and tap it. Watch the timer!',
      tutorialStep4Title: "Let's go!",
      tutorialStep4Text: 'Press Start and score 10 points on Level 1 — then the tutorial ends on its own.',
      tutorialSkip: 'Skip tutorial',
      tutorialGotIt: 'Got it',
      tutorialBanner: 'Tutorial: score 10 points on Level 1',
      tutorialBannerWrongLevel: 'Tutorial: switch to Level 1 and score 10 points',
    },
    ru: {
      title: 'Тренажёр внимания',
      hint: 'Найди отличающийся объект',
      start: 'Начать',
      newGame: 'Закончить игру',
      score: 'Счёт',
      correct: 'Верно!',
      wrong: 'Попробуй ещё',
      timeout: 'Время вышло!',
      tryAgain: 'Ещё раз',
      next: 'Далее',
      themeLight: 'Светлая тема',
      themeDark: 'Тёмная тема',
      themeBright: 'Светлая',
      themeDarkSide: 'Тёмная',
      findColor: 'Найди другой цвет',
      findShape: 'Найди другую форму',
      findSymbol: 'Найди другой символ',
      ageTitle: 'Твой возраст',
      age57: 'Уровень 1',
      age810: 'Уровень 2',
      age1113: 'Уровень 3',
      age1417: 'Уровень 4',
      age18: 'Уровень 5',
      tutorialStep1Title: 'Добро пожаловать!',
      tutorialStep1Text: 'Это тренажёр внимания. Нужно найти один объект, который отличается от остальных.',
      tutorialStep2Title: 'Уровни',
      tutorialStep2Text: 'Есть 5 уровней — от самого лёгкого до самого сложного. Для начала выбери Уровень 1.',
      tutorialStep3Title: 'Как играть',
      tutorialStep3Text: 'Смотри на подсказку, найди другой цвет, форму или символ и нажми на него. Следи за таймером!',
      tutorialStep4Title: 'Начнём!',
      tutorialStep4Text: 'Нажми «Начать» и набери 10 очков на Уровне 1 — тогда обучение закончится само.',
      tutorialSkip: 'Прекратить обучение',
      tutorialGotIt: 'Понятно',
      tutorialBanner: 'Обучение: набери 10 очков на Уровне 1',
      tutorialBannerWrongLevel: 'Обучение: перейди на Уровень 1 и набери 10 очков',
    },
    uk: {
      title: 'Тренажер уваги',
      hint: "Знайди об'єкт, що відрізняється",
      start: 'Почати',
      newGame: 'Закінчити гру',
      score: 'Рахунок',
      correct: 'Вірно!',
      wrong: 'Спробуй ще',
      timeout: 'Час вийшов!',
      tryAgain: 'Ще раз',
      next: 'Далі',
      themeLight: 'Світла тема',
      themeDark: 'Темна тема',
      themeBright: 'Світла',
      themeDarkSide: 'Темна',
      findColor: 'Знайди інший колір',
      findShape: 'Знайди іншу форму',
      findSymbol: 'Знайди інший символ',
      ageTitle: 'Твій вік',
      age57: 'Рівень 1',
      age810: 'Рівень 2',
      age1113: 'Рівень 3',
      age1417: 'Рівень 4',
      age18: 'Рівень 5',
      tutorialStep1Title: 'Ласкаво просимо!',
      tutorialStep1Text: 'Це тренажер уваги. Потрібно знайти один об\'єкт, який відрізняється від інших.',
      tutorialStep2Title: 'Рівні',
      tutorialStep2Text: 'Є 5 рівнів — від найлегшого до найскладнішого. Почни з Рівня 1.',
      tutorialStep3Title: 'Як грати',
      tutorialStep3Text: 'Дивись на підказку, знайди інший колір, форму чи символ і натисни на нього. Стеж за таймером!',
      tutorialStep4Title: 'Почнімо!',
      tutorialStep4Text: 'Натисни «Почати» і набери 10 очок на Рівні 1 — тоді навчання закінчиться само.',
      tutorialSkip: 'Припинити навчання',
      tutorialGotIt: 'Зрозуміло',
      tutorialBanner: 'Навчання: набери 10 очок на Рівні 1',
      tutorialBannerWrongLevel: 'Навчання: перейди на Рівень 1 і набери 10 очок',
    },
    de: {
      title: 'Aufmerksamkeitstrainer',
      hint: 'Finde das andere Objekt',
      start: 'Starten',
      newGame: 'Spiel beenden',
      score: 'Punkte',
      correct: 'Richtig!',
      wrong: 'Nochmal',
      timeout: 'Zeit abgelaufen!',
      tryAgain: 'Nochmal',
      next: 'Weiter',
      themeLight: 'Helles Design',
      themeDark: 'Dunkles Design',
      themeBright: 'Hell',
      themeDarkSide: 'Dunkel',
      findColor: 'Finde die andere Farbe',
      findShape: 'Finde die andere Form',
      findSymbol: 'Finde das andere Symbol',
      ageTitle: 'Dein Alter',
      age57: 'Level 1',
      age810: 'Level 2',
      age1113: 'Level 3',
      age1417: 'Level 4',
      age18: 'Level 5',
      tutorialStep1Title: 'Willkommen!',
      tutorialStep1Text: 'Das ist ein Aufmerksamkeitstrainer. Finde das eine Objekt, das sich von den anderen unterscheidet.',
      tutorialStep2Title: 'Level',
      tutorialStep2Text: 'Es gibt 5 Level — vom leichtesten bis zum schwersten. Beginne mit Level 1.',
      tutorialStep3Title: 'So spielst du',
      tutorialStep3Text: 'Lies den Hinweis, finde die andere Farbe, Form oder das Symbol und tippe darauf. Achte auf den Timer!',
      tutorialStep4Title: 'Los geht\'s!',
      tutorialStep4Text: 'Drücke Starten und erreiche 10 Punkte auf Level 1 — dann endet das Tutorial von selbst.',
      tutorialSkip: 'Tutorial beenden',
      tutorialGotIt: 'Verstanden',
      tutorialBanner: 'Tutorial: 10 Punkte auf Level 1 erreichen',
      tutorialBannerWrongLevel: 'Tutorial: wechsle zu Level 1 und erreiche 10 Punkte',
    },
    fr: {
      title: "Entraîneur d'attention",
      hint: "Trouve l'objet différent",
      start: 'Commencer',
      newGame: 'Terminer',
      score: 'Score',
      correct: 'Correct !',
      wrong: 'Réessayer',
      timeout: 'Temps écoulé !',
      tryAgain: 'Réessayer',
      next: 'Suivant',
      themeLight: 'Thème clair',
      themeDark: 'Thème sombre',
      themeBright: 'Clair',
      themeDarkSide: 'Sombre',
      findColor: 'Trouve la couleur différente',
      findShape: 'Trouve la forme différente',
      findSymbol: 'Trouve le symbole différent',
      ageTitle: 'Ton âge',
      age57: 'Niveau 1',
      age810: 'Niveau 2',
      age1113: 'Niveau 3',
      age1417: 'Niveau 4',
      age18: 'Niveau 5',
      tutorialStep1Title: 'Bienvenue !',
      tutorialStep1Text: "C'est un entraîneur d'attention. Trouve l'objet qui diffère des autres.",
      tutorialStep2Title: 'Niveaux',
      tutorialStep2Text: 'Il y a 5 niveaux — du plus facile au plus difficile. Commence par le Niveau 1.',
      tutorialStep3Title: 'Comment jouer',
      tutorialStep3Text: "Lis l'indice, trouve la couleur, la forme ou le symbole différent et appuie dessus. Surveille le chrono !",
      tutorialStep4Title: 'C\'est parti !',
      tutorialStep4Text: 'Appuie sur Commencer et marque 10 points au Niveau 1 — le tutoriel se terminera tout seul.',
      tutorialSkip: 'Arrêter le tutoriel',
      tutorialGotIt: 'Compris',
      tutorialBanner: 'Tutoriel : marque 10 points au Niveau 1',
      tutorialBannerWrongLevel: 'Tutoriel : passe au Niveau 1 et marque 10 points',
    },
    es: {
      title: 'Entrenador de atención',
      hint: 'Encuentra el objeto diferente',
      start: 'Empezar',
      newGame: 'Terminar',
      score: 'Puntuación',
      correct: '¡Correcto!',
      wrong: 'Inténtalo de nuevo',
      timeout: '¡Se acabó el tiempo!',
      tryAgain: 'Otra vez',
      next: 'Siguiente',
      themeLight: 'Tema claro',
      themeDark: 'Tema oscuro',
      themeBright: 'Claro',
      themeDarkSide: 'Oscuro',
      findColor: 'Encuentra el color diferente',
      findShape: 'Encuentra la forma diferente',
      findSymbol: 'Encuentra el símbolo diferente',
      ageTitle: 'Tu edad',
      age57: 'Nivel 1',
      age810: 'Nivel 2',
      age1113: 'Nivel 3',
      age1417: 'Nivel 4',
      age18: 'Nivel 5',
      tutorialStep1Title: '¡Bienvenido!',
      tutorialStep1Text: 'Este es un entrenador de atención. Encuentra el objeto que se diferencia del resto.',
      tutorialStep2Title: 'Niveles',
      tutorialStep2Text: 'Hay 5 niveles — del más fácil al más difícil. Empieza con el Nivel 1.',
      tutorialStep3Title: 'Cómo jugar',
      tutorialStep3Text: 'Lee la pista, encuentra el color, forma o símbolo diferente y pulsa sobre él. ¡Mira el temporizador!',
      tutorialStep4Title: '¡Empecemos!',
      tutorialStep4Text: 'Pulsa Empezar y consigue 10 puntos en el Nivel 1 — el tutorial terminará solo.',
      tutorialSkip: 'Terminar tutorial',
      tutorialGotIt: 'Entendido',
      tutorialBanner: 'Tutorial: consigue 10 puntos en el Nivel 1',
      tutorialBannerWrongLevel: 'Tutorial: cambia al Nivel 1 y consigue 10 puntos',
    },
    it: {
      title: 'Allenatore di attenzione',
      hint: "Trova l'oggetto diverso",
      start: 'Inizia',
      newGame: 'Fine partita',
      score: 'Punteggio',
      correct: 'Corretto!',
      wrong: 'Riprova',
      timeout: 'Tempo scaduto!',
      tryAgain: 'Riprova',
      next: 'Avanti',
      themeLight: 'Tema chiaro',
      themeDark: 'Tema scuro',
      themeBright: 'Chiaro',
      themeDarkSide: 'Scuro',
      findColor: 'Trova il colore diverso',
      findShape: 'Trova la forma diversa',
      findSymbol: 'Trova il simbolo diverso',
      ageTitle: 'La tua età',
      age57: 'Livello 1',
      age810: 'Livello 2',
      age1113: 'Livello 3',
      age1417: 'Livello 4',
      age18: 'Livello 5',
      tutorialStep1Title: 'Benvenuto!',
      tutorialStep1Text: 'Questo è un allenatore di attenzione. Trova l\'oggetto che differisce dagli altri.',
      tutorialStep2Title: 'Livelli',
      tutorialStep2Text: 'Ci sono 5 livelli — dal più facile al più difficile. Inizia con il Livello 1.',
      tutorialStep3Title: 'Come giocare',
      tutorialStep3Text: 'Leggi il suggerimento, trova il colore, la forma o il simbolo diverso e toccalo. Guarda il timer!',
      tutorialStep4Title: 'Iniziamo!',
      tutorialStep4Text: 'Premi Inizia e fai 10 punti al Livello 1 — il tutorial finirà da solo.',
      tutorialSkip: 'Termina tutorial',
      tutorialGotIt: 'Capito',
      tutorialBanner: 'Tutorial: fai 10 punti al Livello 1',
      tutorialBannerWrongLevel: 'Tutorial: passa al Livello 1 e fai 10 punti',
    },
    pt: {
      title: 'Treinador de atenção',
      hint: 'Encontre o objeto diferente',
      start: 'Começar',
      newGame: 'Terminar jogo',
      score: 'Pontuação',
      correct: 'Correto!',
      wrong: 'Tente novamente',
      timeout: 'Tempo esgotado!',
      tryAgain: 'Tentar de novo',
      next: 'Próximo',
      themeLight: 'Tema claro',
      themeDark: 'Tema escuro',
      themeBright: 'Claro',
      themeDarkSide: 'Escuro',
      findColor: 'Encontre a cor diferente',
      findShape: 'Encontre a forma diferente',
      findSymbol: 'Encontre o símbolo diferente',
      ageTitle: 'Sua idade',
      age57: 'Nível 1',
      age810: 'Nível 2',
      age1113: 'Nível 3',
      age1417: 'Nível 4',
      age18: 'Nível 5',
      tutorialStep1Title: 'Bem-vindo!',
      tutorialStep1Text: 'Este é um treinador de atenção. Encontre o objeto que difere dos outros.',
      tutorialStep2Title: 'Níveis',
      tutorialStep2Text: 'Há 5 níveis — do mais fácil ao mais difícil. Comece pelo Nível 1.',
      tutorialStep3Title: 'Como jogar',
      tutorialStep3Text: 'Leia a dica, encontre a cor, forma ou símbolo diferente e toque nele. Observe o cronômetro!',
      tutorialStep4Title: 'Vamos lá!',
      tutorialStep4Text: 'Pressione Começar e faça 10 pontos no Nível 1 — o tutorial terminará sozinho.',
      tutorialSkip: 'Encerrar tutorial',
      tutorialGotIt: 'Entendi',
      tutorialBanner: 'Tutorial: faça 10 pontos no Nível 1',
      tutorialBannerWrongLevel: 'Tutorial: mude para o Nível 1 e faça 10 pontos',
    },
    pl: {
      title: 'Trener uwagi',
      hint: 'Znajdź inny obiekt',
      start: 'Start',
      newGame: 'Zakończ grę',
      score: 'Wynik',
      correct: 'Dobrze!',
      wrong: 'Spróbuj jeszcze',
      timeout: 'Czas minął!',
      tryAgain: 'Jeszcze raz',
      next: 'Dalej',
      themeLight: 'Jasny motyw',
      themeDark: 'Ciemny motyw',
      themeBright: 'Jasno',
      themeDarkSide: 'Ciemno',
      findColor: 'Znajdź inny kolor',
      findShape: 'Znajdź inny kształt',
      findSymbol: 'Znajdź inny symbol',
      ageTitle: 'Twój wiek',
      age57: 'Poziom 1',
      age810: 'Poziom 2',
      age1113: 'Poziom 3',
      age1417: 'Poziom 4',
      age18: 'Poziom 5',
      tutorialStep1Title: 'Witaj!',
      tutorialStep1Text: 'To trener uwagi. Znajdź jeden obiekt, który różni się od pozostałych.',
      tutorialStep2Title: 'Poziomy',
      tutorialStep2Text: 'Jest 5 poziomów — od najłatwiejszego do najtrudniejszego. Zacznij od Poziomu 1.',
      tutorialStep3Title: 'Jak grać',
      tutorialStep3Text: 'Czytaj podpowiedź, znajdź inny kolor, kształt lub symbol i kliknij go. Pilnuj timera!',
      tutorialStep4Title: 'Zaczynajmy!',
      tutorialStep4Text: 'Naciśnij Start i zdobądź 10 punktów na Poziomie 1 — wtedy samouczek się zakończy.',
      tutorialSkip: 'Zakończ samouczek',
      tutorialGotIt: 'Rozumiem',
      tutorialBanner: 'Samouczek: zdobądź 10 punktów na Poziomie 1',
      tutorialBannerWrongLevel: 'Samouczek: przejdź na Poziom 1 i zdobądź 10 punktów',
    },
    tr: {
      title: 'Dikkat Antrenörü',
      hint: 'Farklı nesneyi bul',
      start: 'Başla',
      newGame: 'Oyunu bitir',
      score: 'Skor',
      correct: 'Doğru!',
      wrong: 'Tekrar dene',
      timeout: 'Süre doldu!',
      tryAgain: 'Tekrar dene',
      next: 'İleri',
      themeLight: 'Açık tema',
      themeDark: 'Koyu tema',
      themeBright: 'Açık',
      themeDarkSide: 'Koyu',
      findColor: 'Farklı rengi bul',
      findShape: 'Farklı şekli bul',
      findSymbol: 'Farklı sembolü bul',
      ageTitle: 'Yaşın',
      age57: 'Seviye 1',
      age810: 'Seviye 2',
      age1113: 'Seviye 3',
      age1417: 'Seviye 4',
      age18: 'Seviye 5',
      tutorialStep1Title: 'Hoş geldin!',
      tutorialStep1Text: 'Bu bir dikkat antrenörü. Diğerlerinden farklı olan nesneyi bul.',
      tutorialStep2Title: 'Seviyeler',
      tutorialStep2Text: 'En kolaydan en zora 5 seviye var. Seviye 1 ile başla.',
      tutorialStep3Title: 'Nasıl oynanır',
      tutorialStep3Text: 'İpucunu oku, farklı rengi, şekli veya sembolü bul ve üzerine dokun. Zamanlayıcıyı izle!',
      tutorialStep4Title: 'Hadi başlayalım!',
      tutorialStep4Text: 'Başla\'ya bas ve Seviye 1\'de 10 puan yap — öğretici kendiliğinden bitecek.',
      tutorialSkip: 'Öğreticiyi bitir',
      tutorialGotIt: 'Anladım',
      tutorialBanner: 'Öğretici: Seviye 1\'de 10 puan yap',
      tutorialBannerWrongLevel: 'Öğretici: Seviye 1\'e geç ve 10 puan yap',
    },
    ar: {
      title: 'مدرب الانتباه',
      hint: 'ابحث عن الشكل المختلف',
      start: 'ابدأ',
      newGame: 'إنهاء اللعبة',
      score: 'النقاط',
      correct: 'صحيح!',
      wrong: 'حاول مرة أخرى',
      timeout: 'انتهى الوقت!',
      tryAgain: 'حاول مرة أخرى',
      next: 'التالي',
      themeLight: 'الوضع الفاتح',
      themeDark: 'الوضع الداكن',
      themeBright: 'فاتح',
      themeDarkSide: 'داكن',
      findColor: 'ابحث عن اللون المختلف',
      findShape: 'ابحث عن الشكل المختلف',
      findSymbol: 'ابحث عن الرمز المختلف',
      ageTitle: 'عمرك',
      age57: 'المستوى ١',
      age810: 'المستوى ٢',
      age1113: 'المستوى ٣',
      age1417: 'المستوى ٤',
      age18: 'المستوى ٥',
      tutorialStep1Title: 'مرحباً!',
      tutorialStep1Text: 'هذا مدرب للانتباه. ابحث عن الشكل الواحد الذي يختلف عن البقية.',
      tutorialStep2Title: 'المستويات',
      tutorialStep2Text: 'هناك 5 مستويات — من الأسهل إلى الأصعب. ابدأ بالمستوى ١.',
      tutorialStep3Title: 'كيف تلعب',
      tutorialStep3Text: 'اقرأ التلميح، ابحث عن اللون أو الشكل أو الرمز المختلف واضغط عليه. راقب المؤقت!',
      tutorialStep4Title: 'لنبدأ!',
      tutorialStep4Text: 'اضغط ابدأ واحصل على 10 نقاط في المستوى ١ — سينتهي التدريب تلقائياً.',
      tutorialSkip: 'إيقاف التدريب',
      tutorialGotIt: 'فهمت',
      tutorialBanner: 'التدريب: احصل على 10 نقاط في المستوى ١',
      tutorialBannerWrongLevel: 'التدريب: انتقل إلى المستوى ١ واحصل على 10 نقاط',
    },
    he: {
      title: 'מאמן קשב',
      hint: 'מצא את האובייקט השונה',
      start: 'התחל',
      newGame: 'סיים משחק',
      score: 'ניקוד',
      correct: 'נכון!',
      wrong: 'נסה שוב',
      timeout: 'הזמן נגמר!',
      tryAgain: 'נסה שוב',
      next: 'הבא',
      themeLight: 'ערכת נושא בהירה',
      themeDark: 'ערכת נושא כהה',
      themeBright: 'בהיר',
      themeDarkSide: 'כהה',
      findColor: 'מצא את הצבע השונה',
      findShape: 'מצא את הצורה השונה',
      findSymbol: 'מצא את הסמל השונה',
      ageTitle: 'הגיל שלך',
      age57: 'רמה 1',
      age810: 'רמה 2',
      age1113: 'רמה 3',
      age1417: 'רמה 4',
      age18: 'רמה 5',
      tutorialStep1Title: 'ברוך הבא!',
      tutorialStep1Text: 'זה מאמן קשב. מצא את האובייקט האחד ששונה מהשאר.',
      tutorialStep2Title: 'רמות',
      tutorialStep2Text: 'יש 5 רמות — מהקל לקשה. התחל ברמה 1.',
      tutorialStep3Title: 'איך לשחק',
      tutorialStep3Text: 'קרא את הרמז, מצא את הצבע, הצורה או הסמל השונה ולחץ עליה. שים לב לטיימר!',
      tutorialStep4Title: 'בואו נתחיל!',
      tutorialStep4Text: 'לחץ התחל והשג 10 נקודות ברמה 1 — ההדרכה תסתיים מעצמה.',
      tutorialSkip: 'הפסק הדרכה',
      tutorialGotIt: 'הבנתי',
      tutorialBanner: 'הדרכה: השג 10 נקודות ברמה 1',
      tutorialBannerWrongLevel: 'הדרכה: עבור לרמה 1 והשג 10 נקודות',
    },
    zh: {
      title: '注意力训练器',
      hint: '找出不同的物体',
      start: '开始',
      newGame: '结束游戏',
      score: '得分',
      correct: '正确！',
      wrong: '再试一次',
      timeout: '时间到！',
      tryAgain: '再试一次',
      next: '下一步',
      themeLight: '浅色主题',
      themeDark: '深色主题',
      themeBright: '明亮',
      themeDarkSide: '暗黑',
      findColor: '找出不同的颜色',
      findShape: '找出不同的形状',
      findSymbol: '找出不同的符号',
      ageTitle: '你的年龄',
      age57: '等级 1',
      age810: '等级 2',
      age1113: '等级 3',
      age1417: '等级 4',
      age18: '等级 5',
      tutorialStep1Title: '欢迎！',
      tutorialStep1Text: '这是注意力训练器。找出与其他不同的那个物体。',
      tutorialStep2Title: '等级',
      tutorialStep2Text: '共有5个等级——从最简单到最难。请从等级1开始。',
      tutorialStep3Title: '怎么玩',
      tutorialStep3Text: '看提示，找出不同的颜色、形状或符号并点击它。注意计时器！',
      tutorialStep4Title: '开始吧！',
      tutorialStep4Text: '点击开始，在等级1获得10分——教程会自动结束。',
      tutorialSkip: '结束教程',
      tutorialGotIt: '明白了',
      tutorialBanner: '教程：在等级1获得10分',
      tutorialBannerWrongLevel: '教程：切换到等级1并获得10分',
    },
    ja: {
      title: '注意力トレーナー',
      hint: '違うオブジェクトを見つけよう',
      start: 'スタート',
      newGame: 'ゲーム終了',
      score: 'スコア',
      correct: '正解！',
      wrong: 'もう一度',
      timeout: '時間切れ！',
      tryAgain: 'もう一度',
      next: '次へ',
      themeLight: 'ライトテーマ',
      themeDark: 'ダークテーマ',
      themeBright: '明るい',
      themeDarkSide: 'ダーク',
      findColor: '違う色を見つけよう',
      findShape: '違う形を見つけよう',
      findSymbol: '違う記号を見つけよう',
      ageTitle: 'あなたの年齢',
      age57: 'レベル1',
      age810: 'レベル2',
      age1113: 'レベル3',
      age1417: 'レベル4',
      age18: 'レベル5',
      tutorialStep1Title: 'ようこそ！',
      tutorialStep1Text: 'これは注意力トレーナーです。他と違うオブジェクトを1つ見つけましょう。',
      tutorialStep2Title: 'レベル',
      tutorialStep2Text: 'レベル1から5まであります。まずはレベル1から始めましょう。',
      tutorialStep3Title: '遊び方',
      tutorialStep3Text: 'ヒントを読んで、違う色・形・記号を見つけてタップしてください。タイマーに注意！',
      tutorialStep4Title: 'さあ始めよう！',
      tutorialStep4Text: 'スタートを押してレベル1で10点取ると、チュートリアルは自動で終わります。',
      tutorialSkip: 'チュートリアルを終了',
      tutorialGotIt: 'わかった',
      tutorialBanner: 'チュートリアル：レベル1で10点取ろう',
      tutorialBannerWrongLevel: 'チュートリアル：レベル1に切り替えて10点取ろう',
    },
    ko: {
      title: '주의력 트레이너',
      hint: '다른 객체를 찾으세요',
      start: '시작',
      newGame: '게임 종료',
      score: '점수',
      correct: '정답!',
      wrong: '다시 시도',
      timeout: '시간 종료!',
      tryAgain: '다시 시도',
      next: '다음',
      themeLight: '라이트 테마',
      themeDark: '다크 테마',
      themeBright: '밝게',
      themeDarkSide: '어둡게',
      findColor: '다른 색을 찾으세요',
      findShape: '다른 모양을 찾으세요',
      findSymbol: '다른 기호를 찾으세요',
      ageTitle: '나이',
      age57: '레벨 1',
      age810: '레벨 2',
      age1113: '레벨 3',
      age1417: '레벨 4',
      age18: '레벨 5',
      tutorialStep1Title: '환영합니다!',
      tutorialStep1Text: '주의력 트레이너입니다. 다른 객체 하나를 찾으세요.',
      tutorialStep2Title: '레벨',
      tutorialStep2Text: '레벨 1부터 5까지 있습니다. 레벨 1부터 시작하세요.',
      tutorialStep3Title: '게임 방법',
      tutorialStep3Text: '힌트를 읽고 다른 색, 모양 또는 기호를 찾아 누르세요. 타이머를 확인하세요!',
      tutorialStep4Title: '시작해요!',
      tutorialStep4Text: '시작을 누르고 레벨 1에서 10점을 얻으면 튜토리얼이 자동으로 끝납니다.',
      tutorialSkip: '튜토리얼 종료',
      tutorialGotIt: '알겠습니다',
      tutorialBanner: '튜토리얼: 레벨 1에서 10점 얻기',
      tutorialBannerWrongLevel: '튜토리얼: 레벨 1로 바꾸고 10점 얻기',
    },
  };

  const TUTORIAL_STEPS = [
    { emoji: '👋', titleKey: 'tutorialStep1Title', textKey: 'tutorialStep1Text' },
    { emoji: '🎯', titleKey: 'tutorialStep2Title', textKey: 'tutorialStep2Text' },
    { emoji: '👀', titleKey: 'tutorialStep3Title', textKey: 'tutorialStep3Text' },
    { emoji: '🚀', titleKey: 'tutorialStep4Title', textKey: 'tutorialStep4Text' },
  ];

  const AUTH_I18N = {
    en: {
      authLogin: 'Log in', authRegister: 'Sign up', authLoginTitle: 'Sign in',
      authWelcomeBack: 'Welcome back', authSubtitle: 'Continue to Attention Trainer',
      authPasswordSubtitle: 'Enter your password to continue',
      authRegisterSubtitle: 'Create your account',
      authResetSubtitle: 'Choose a new password',
      authRegisterTitle: 'Create account', authUsername: 'Username', authPassword: 'Password',
      authPasswordConfirm: 'Confirm password', authEmail: 'Email',
      authForgotPassword: 'Forgot password?', authBackToLogin: 'Back to log in',
      authResetTitle: 'Reset password', authResetHint: 'Enter the email from registration. Works on this device only.',
      authNewPassword: 'New password', authNext: 'Next',
      authCreateAccount: 'Create account', authSignInInstead: 'Sign in instead',
      authChangeEmail: 'Change',
      authSignInWithGmail: 'Sign in with Gmail', authBackFromGmail: 'Back to sign in', authOr: 'or',
      authGoogleSignInHint: 'Tap the Google button. Google will ask for your real Gmail password — we never see it.',
      authGoogleSignInSubtitle: 'Sign in with Google',
      authGoogleNotConfigured: 'Google Sign-In is not set up yet. Add GOOGLE_CLIENT_ID in js/config.js (see README).',
      authGoogleLoadFailed: 'Could not load Google Sign-In. Check your internet connection.',
      authGmailRegisterHint: 'Gmail verified. Choose a username for the game.',
      authGmailRegisterSubtitle: 'Create your account',
      authErrorGoogleAccountMismatch: 'This email is linked to a different Google account.',
      authSubmitLogin: 'Sign in', authSubmitRegister: 'Sign up', authSubmitReset: 'Reset password',
      authResetSuccess: 'Password updated. You can log in now.',
      authLogout: 'Log out', authPlayAsGuest: 'No account? Play anyway', authGuestLabel: 'Guest',
      authDeleteAccount: 'Delete account', authDeleteConfirm: 'Delete your account? This cannot be undone.',
      authDeleteConfirmBtn: 'Delete', authDeleteCancel: 'Cancel',
      authErrorUserExists: 'This username is already taken',
      authErrorUserExistsTry: 'Try adding numbers, for example',
      authErrorUserNotFound: 'User not found', authErrorWrongPassword: 'Wrong password',
      authErrorPasswordMismatch: 'Passwords do not match',
      authErrorUsernameShort: 'Username must be at least 3 characters',
      authErrorPasswordShort: 'Password must be at least 4 characters', authErrorEmpty: 'Fill in all fields',
      authErrorInvalidEmail: 'Enter a valid email', authErrorEmailExists: 'This email is already registered',
      authErrorEmailMismatch: 'Email does not match this account',
      authErrorNoEmail: 'This account has no email — recovery is not available',
    },
    ru: {
      authLogin: 'Вход', authRegister: 'Регистрация', authLoginTitle: 'Вход',
      authWelcomeBack: 'С возвращением', authSubtitle: 'Продолжить в Тренажёр внимания',
      authPasswordSubtitle: 'Введите пароль, чтобы продолжить',
      authRegisterSubtitle: 'Создайте аккаунт',
      authResetSubtitle: 'Придумайте новый пароль',
      authRegisterTitle: 'Создать аккаунт', authUsername: 'Имя пользователя', authPassword: 'Пароль',
      authPasswordConfirm: 'Подтвердите пароль', authEmail: 'Email',
      authForgotPassword: 'Забыли пароль?', authBackToLogin: 'Назад ко входу',
      authResetTitle: 'Восстановление пароля', authResetHint: 'Укажите email, который вы указали при регистрации. Работает только на этом устройстве.',
      authNewPassword: 'Новый пароль', authNext: 'Далее',
      authCreateAccount: 'Создать аккаунт', authSignInInstead: 'Уже есть аккаунт? Войти',
      authChangeEmail: 'Изменить',
      authSignInWithGmail: 'Войти через Gmail', authBackFromGmail: 'Назад ко входу', authOr: 'или',
      authGoogleSignInHint: 'Нажмите кнопку Google. Пароль от Gmail вводится только на сайте Google — мы его не видим.',
      authGoogleSignInSubtitle: 'Вход через Google',
      authGoogleNotConfigured: 'Google Sign-In ещё не настроен. Добавьте GOOGLE_CLIENT_ID в js/config.js (см. README).',
      authGoogleLoadFailed: 'Не удалось загрузить Google Sign-In. Проверьте интернет.',
      authGmailRegisterHint: 'Gmail подтверждён. Придумайте имя для игры.',
      authGmailRegisterSubtitle: 'Создание аккаунта',
      authErrorGoogleAccountMismatch: 'Этот email привязан к другому Google-аккаунту.',
      authSubmitLogin: 'Войти', authSubmitRegister: 'Зарегистрироваться', authSubmitReset: 'Сохранить пароль',
      authResetSuccess: 'Пароль изменён. Теперь можно войти.',
      authLogout: 'Выйти', authPlayAsGuest: 'Если не важно — играть без регистрации', authGuestLabel: 'Гость',
      authDeleteAccount: 'Удалить аккаунт', authDeleteConfirm: 'Удалить аккаунт? Это нельзя отменить.',
      authDeleteConfirmBtn: 'Удалить', authDeleteCancel: 'Отмена',
      authErrorUserExists: 'Такое имя уже занято',
      authErrorUserExistsTry: 'Попробуйте добавить цифры, например',
      authErrorUserNotFound: 'Пользователь не найден', authErrorWrongPassword: 'Неверный пароль',
      authErrorPasswordMismatch: 'Пароли не совпадают',
      authErrorUsernameShort: 'Имя — минимум 3 символа',
      authErrorPasswordShort: 'Пароль — минимум 4 символа', authErrorEmpty: 'Заполните все поля',
      authErrorInvalidEmail: 'Введите корректный email', authErrorEmailExists: 'Этот email уже зарегистрирован',
      authErrorEmailMismatch: 'Email не совпадает с аккаунтом',
      authErrorNoEmail: 'У аккаунта нет email — восстановление недоступно',
    },
    uk: {
      authLogin: 'Вхід', authRegister: 'Реєстрація', authLoginTitle: 'Вхід',
      authWelcomeBack: 'З поверненням', authSubtitle: 'Продовжити до Тренажера уваги',
      authPasswordSubtitle: 'Введіть пароль, щоб продовжити',
      authRegisterSubtitle: 'Створіть акаунт',
      authResetSubtitle: 'Придумайте новий пароль',
      authRegisterTitle: 'Створити акаунт', authUsername: "Ім'я користувача", authPassword: 'Пароль',
      authPasswordConfirm: 'Підтвердіть пароль', authEmail: 'Email',
      authForgotPassword: 'Забули пароль?', authBackToLogin: 'Назад до входу',
      authResetTitle: 'Відновлення пароля', authResetHint: 'Вкажіть email з реєстрації. Працює лише на цьому пристрої.',
      authNewPassword: 'Новий пароль', authNext: 'Далі',
      authCreateAccount: 'Створити акаунт', authSignInInstead: 'Уже є акаунт? Увійти',
      authChangeEmail: 'Змінити',
      authSignInWithGmail: 'Увійти через Gmail', authBackFromGmail: 'Назад до входу', authOr: 'або',
      authGoogleSignInHint: 'Натисніть кнопку Google. Пароль від Gmail вводиться лише на сайті Google.',
      authGoogleSignInSubtitle: 'Вхід через Google',
      authGoogleNotConfigured: 'Google Sign-In не налаштовано. Додайте GOOGLE_CLIENT_ID у js/config.js.',
      authGoogleLoadFailed: 'Не вдалося завантажити Google Sign-In.',
      authGmailRegisterHint: 'Gmail підтверджено. Придумайте ім\'я для гри.',
      authGmailRegisterSubtitle: 'Створення акаунта',
      authErrorGoogleAccountMismatch: 'Цей email прив\'язано до іншого Google-акаунта.',
      authSubmitLogin: 'Увійти', authSubmitRegister: 'Зареєструватися', authSubmitReset: 'Зберегти пароль',
      authResetSuccess: 'Пароль змінено. Тепер можна увійти.',
      authLogout: 'Вийти', authPlayAsGuest: 'Якщо не важливо — грати без реєстрації', authGuestLabel: 'Гість',
      authDeleteAccount: 'Видалити акаунт', authDeleteConfirm: 'Видалити акаунт? Це не можна скасувати.',
      authDeleteConfirmBtn: 'Видалити', authDeleteCancel: 'Скасувати',
      authErrorUserExists: "Таке ім'я вже зайняте",
      authErrorUserExistsTry: 'Спробуйте додати цифри, наприклад',
      authErrorUserNotFound: 'Користувача не знайдено', authErrorWrongPassword: 'Невірний пароль',
      authErrorPasswordMismatch: 'Паролі не збігаються',
      authErrorUsernameShort: "Ім'я — мінімум 3 символи",
      authErrorPasswordShort: 'Пароль — мінімум 4 символи', authErrorEmpty: 'Заповніть усі поля',
      authErrorInvalidEmail: 'Введіть коректний email', authErrorEmailExists: 'Цей email уже зареєстровано',
      authErrorEmailMismatch: 'Email не збігається з акаунтом',
      authErrorNoEmail: 'У акаунта немає email — відновлення недоступне',
    },
    de: {
      authLogin: 'Anmelden', authRegister: 'Registrieren', authLoginTitle: 'Anmelden',
      authRegisterTitle: 'Konto erstellen', authUsername: 'Benutzername', authPassword: 'Passwort',
      authPasswordConfirm: 'Passwort bestätigen', authSubmitLogin: 'Anmelden', authSubmitRegister: 'Registrieren',
      authLogout: 'Abmelden', authPlayAsGuest: 'Kein Konto? Einfach spielen', authGuestLabel: 'Gast',
      authDeleteAccount: 'Konto löschen', authDeleteConfirm: 'Konto löschen? Das kann nicht rückgängig gemacht werden.',
      authDeleteConfirmBtn: 'Löschen', authDeleteCancel: 'Abbrechen',
      authErrorUserExists: 'Dieser Benutzername ist bereits vergeben',
      authErrorUserExistsTry: 'Füge Zahlen hinzu, zum Beispiel',
      authErrorUserNotFound: 'Benutzer nicht gefunden', authErrorWrongPassword: 'Falsches Passwort',
      authErrorPasswordMismatch: 'Passwörter stimmen nicht überein',
      authErrorUsernameShort: 'Benutzername: mindestens 3 Zeichen',
      authErrorPasswordShort: 'Passwort: mindestens 4 Zeichen', authErrorEmpty: 'Alle Felder ausfüllen',
    },
    fr: {
      authLogin: 'Connexion', authRegister: 'Inscription', authLoginTitle: 'Connexion',
      authRegisterTitle: 'Créer un compte', authUsername: "Nom d'utilisateur", authPassword: 'Mot de passe',
      authPasswordConfirm: 'Confirmer le mot de passe', authSubmitLogin: 'Se connecter', authSubmitRegister: "S'inscrire",
      authLogout: 'Déconnexion', authPlayAsGuest: 'Pas de compte ? Jouer quand même', authGuestLabel: 'Invité',
      authDeleteAccount: 'Supprimer le compte', authDeleteConfirm: 'Supprimer le compte ? C\'est irréversible.',
      authDeleteConfirmBtn: 'Supprimer', authDeleteCancel: 'Annuler',
      authErrorUserExists: "Ce nom d'utilisateur est déjà pris",
      authErrorUserExistsTry: 'Ajoute des chiffres, par exemple',
      authErrorUserNotFound: 'Utilisateur introuvable', authErrorWrongPassword: 'Mot de passe incorrect',
      authErrorPasswordMismatch: 'Les mots de passe ne correspondent pas',
      authErrorUsernameShort: "Nom d'utilisateur : 3 caractères minimum",
      authErrorPasswordShort: 'Mot de passe : 4 caractères minimum', authErrorEmpty: 'Remplissez tous les champs',
    },
    es: {
      authLogin: 'Iniciar sesión', authRegister: 'Registrarse', authLoginTitle: 'Iniciar sesión',
      authRegisterTitle: 'Crear cuenta', authUsername: 'Usuario', authPassword: 'Contraseña',
      authPasswordConfirm: 'Confirmar contraseña', authSubmitLogin: 'Entrar', authSubmitRegister: 'Registrarse',
      authLogout: 'Cerrar sesión', authPlayAsGuest: '¿Sin cuenta? Jugar igual', authGuestLabel: 'Invitado',
      authDeleteAccount: 'Eliminar cuenta', authDeleteConfirm: '¿Eliminar la cuenta? No se puede deshacer.',
      authDeleteConfirmBtn: 'Eliminar', authDeleteCancel: 'Cancelar',
      authErrorUserExists: 'Este nombre de usuario ya existe',
      authErrorUserExistsTry: 'Prueba añadir números, por ejemplo',
      authErrorUserNotFound: 'Usuario no encontrado', authErrorWrongPassword: 'Contraseña incorrecta',
      authErrorPasswordMismatch: 'Las contraseñas no coinciden',
      authErrorUsernameShort: 'Usuario: mínimo 3 caracteres',
      authErrorPasswordShort: 'Contraseña: mínimo 4 caracteres', authErrorEmpty: 'Completa todos los campos',
    },
    it: {
      authLogin: 'Accedi', authRegister: 'Registrati', authLoginTitle: 'Accedi',
      authRegisterTitle: 'Crea account', authUsername: 'Nome utente', authPassword: 'Password',
      authPasswordConfirm: 'Conferma password', authSubmitLogin: 'Accedi', authSubmitRegister: 'Registrati',
      authLogout: 'Esci', authPlayAsGuest: 'Nessun account? Gioca lo stesso', authGuestLabel: 'Ospite',
      authDeleteAccount: 'Elimina account', authDeleteConfirm: 'Eliminare l\'account? Non si può annullare.',
      authDeleteConfirmBtn: 'Elimina', authDeleteCancel: 'Annulla',
      authErrorUserExists: 'Questo nome utente è già in uso',
      authErrorUserExistsTry: 'Prova ad aggiungere numeri, ad esempio',
      authErrorUserNotFound: 'Utente non trovato', authErrorWrongPassword: 'Password errata',
      authErrorPasswordMismatch: 'Le password non coincidono',
      authErrorUsernameShort: 'Nome utente: minimo 3 caratteri',
      authErrorPasswordShort: 'Password: minimo 4 caratteri', authErrorEmpty: 'Compila tutti i campi',
    },
    pt: {
      authLogin: 'Entrar', authRegister: 'Cadastrar', authLoginTitle: 'Entrar',
      authRegisterTitle: 'Criar conta', authUsername: 'Usuário', authPassword: 'Senha',
      authPasswordConfirm: 'Confirmar senha', authSubmitLogin: 'Entrar', authSubmitRegister: 'Cadastrar',
      authLogout: 'Sair', authPlayAsGuest: 'Sem conta? Jogar mesmo assim', authGuestLabel: 'Convidado',
      authDeleteAccount: 'Excluir conta', authDeleteConfirm: 'Excluir a conta? Isso não pode ser desfeito.',
      authDeleteConfirmBtn: 'Excluir', authDeleteCancel: 'Cancelar',
      authErrorUserExists: 'Este nome de usuário já existe',
      authErrorUserExistsTry: 'Tente adicionar números, por exemplo',
      authErrorUserNotFound: 'Usuário não encontrado', authErrorWrongPassword: 'Senha incorreta',
      authErrorPasswordMismatch: 'As senhas não coincidem',
      authErrorUsernameShort: 'Usuário: mínimo 3 caracteres',
      authErrorPasswordShort: 'Senha: mínimo 4 caracteres', authErrorEmpty: 'Preencha todos os campos',
    },
    pl: {
      authLogin: 'Zaloguj', authRegister: 'Rejestracja', authLoginTitle: 'Logowanie',
      authRegisterTitle: 'Utwórz konto', authUsername: 'Nazwa użytkownika', authPassword: 'Hasło',
      authPasswordConfirm: 'Potwierdź hasło', authSubmitLogin: 'Zaloguj', authSubmitRegister: 'Zarejestruj się',
      authLogout: 'Wyloguj', authPlayAsGuest: 'Bez konta? Zagraj i tak', authGuestLabel: 'Gość',
      authDeleteAccount: 'Usuń konto', authDeleteConfirm: 'Usunąć konto? Tej operacji nie cofniesz.',
      authDeleteConfirmBtn: 'Usuń', authDeleteCancel: 'Anuluj',
      authErrorUserExists: 'Ta nazwa jest już zajęta',
      authErrorUserExistsTry: 'Spróbuj dodać cyfry, na przykład',
      authErrorUserNotFound: 'Nie znaleziono użytkownika', authErrorWrongPassword: 'Błędne hasło',
      authErrorPasswordMismatch: 'Hasła nie pasują',
      authErrorUsernameShort: 'Nazwa: minimum 3 znaki',
      authErrorPasswordShort: 'Hasło: minimum 4 znaki', authErrorEmpty: 'Wypełnij wszystkie pola',
    },
    tr: {
      authLogin: 'Giriş', authRegister: 'Kayıt ol', authLoginTitle: 'Giriş yap',
      authRegisterTitle: 'Hesap oluştur', authUsername: 'Kullanıcı adı', authPassword: 'Şifre',
      authPasswordConfirm: 'Şifreyi onayla', authSubmitLogin: 'Giriş yap', authSubmitRegister: 'Kayıt ol',
      authLogout: 'Çıkış', authPlayAsGuest: 'Hesap yok mu? Yine de oyna', authGuestLabel: 'Misafir',
      authDeleteAccount: 'Hesabı sil', authDeleteConfirm: 'Hesap silinsin mi? Bu geri alınamaz.',
      authDeleteConfirmBtn: 'Sil', authDeleteCancel: 'İptal',
      authErrorUserExists: 'Bu kullanıcı adı zaten alınmış',
      authErrorUserExistsTry: 'Numara eklemeyi dene, örneğin',
      authErrorUserNotFound: 'Kullanıcı bulunamadı', authErrorWrongPassword: 'Yanlış şifre',
      authErrorPasswordMismatch: 'Şifreler eşleşmiyor',
      authErrorUsernameShort: 'Kullanıcı adı: en az 3 karakter',
      authErrorPasswordShort: 'Şifre: en az 4 karakter', authErrorEmpty: 'Tüm alanları doldurun',
    },
    ar: {
      authLogin: 'تسجيل الدخول', authRegister: 'إنشاء حساب', authLoginTitle: 'تسجيل الدخول',
      authRegisterTitle: 'إنشاء حساب', authUsername: 'اسم المستخدم', authPassword: 'كلمة المرور',
      authPasswordConfirm: 'تأكيد كلمة المرور', authSubmitLogin: 'دخول', authSubmitRegister: 'تسجيل',
      authLogout: 'خروج', authPlayAsGuest: 'بدون حساب؟ العب على أي حال', authGuestLabel: 'زائر',
      authDeleteAccount: 'حذف الحساب', authDeleteConfirm: 'حذف الحساب؟ لا يمكن التراجع.',
      authDeleteConfirmBtn: 'حذف', authDeleteCancel: 'إلغاء',
      authErrorUserExists: 'اسم المستخدم هذا مستخدم بالفعل',
      authErrorUserExistsTry: 'جرّب إضافة أرقام، مثلاً',
      authErrorUserNotFound: 'المستخدم غير موجود', authErrorWrongPassword: 'كلمة مرور خاطئة',
      authErrorPasswordMismatch: 'كلمتا المرور غير متطابقتين',
      authErrorUsernameShort: 'اسم المستخدم: 3 أحرف على الأقل',
      authErrorPasswordShort: 'كلمة المرور: 4 أحرف على الأقل', authErrorEmpty: 'املأ جميع الحقول',
    },
    he: {
      authLogin: 'התחברות', authRegister: 'הרשמה', authLoginTitle: 'התחברות',
      authRegisterTitle: 'יצירת חשבון', authUsername: 'שם משתמש', authPassword: 'סיסמה',
      authPasswordConfirm: 'אימות סיסמה', authSubmitLogin: 'התחבר', authSubmitRegister: 'הירשם',
      authLogout: 'התנתק', authPlayAsGuest: 'בלי חשבון? שחק בכל זאת', authGuestLabel: 'אורח',
      authDeleteAccount: 'מחק חשבון', authDeleteConfirm: 'למחוק את החשבון? אי אפשר לבטל.',
      authDeleteConfirmBtn: 'מחק', authDeleteCancel: 'ביטול',
      authErrorUserExists: 'שם המשתמש הזה כבר תפוס',
      authErrorUserExistsTry: 'נסה להוסיף מספרים, למשל',
      authErrorUserNotFound: 'משתמש לא נמצא', authErrorWrongPassword: 'סיסמה שגויה',
      authErrorPasswordMismatch: 'הסיסמאות לא תואמות',
      authErrorUsernameShort: 'שם משתמש: לפחות 3 תווים',
      authErrorPasswordShort: 'סיסמה: לפחות 4 תווים', authErrorEmpty: 'מלא את כל השדות',
    },
    zh: {
      authLogin: '登录', authRegister: '注册', authLoginTitle: '登录',
      authRegisterTitle: '创建账户', authUsername: '用户名', authPassword: '密码',
      authPasswordConfirm: '确认密码', authSubmitLogin: '登录', authSubmitRegister: '注册',
      authLogout: '退出', authPlayAsGuest: '没有账号？照样玩', authGuestLabel: '访客',
      authDeleteAccount: '删除账户', authDeleteConfirm: '确定删除账户？此操作无法撤销。',
      authDeleteConfirmBtn: '删除', authDeleteCancel: '取消',
      authErrorUserExists: '该用户名已被占用',
      authErrorUserExistsTry: '请尝试添加数字，例如',
      authErrorUserNotFound: '用户不存在', authErrorWrongPassword: '密码错误',
      authErrorPasswordMismatch: '两次密码不一致',
      authErrorUsernameShort: '用户名至少3个字符',
      authErrorPasswordShort: '密码至少4个字符', authErrorEmpty: '请填写所有字段',
    },
    ja: {
      authLogin: 'ログイン', authRegister: '新規登録', authLoginTitle: 'ログイン',
      authRegisterTitle: 'アカウント作成', authUsername: 'ユーザー名', authPassword: 'パスワード',
      authPasswordConfirm: 'パスワード確認', authSubmitLogin: 'ログイン', authSubmitRegister: '登録',
      authLogout: 'ログアウト', authPlayAsGuest: 'アカウント不要でプレイ', authGuestLabel: 'ゲスト',
      authDeleteAccount: 'アカウント削除', authDeleteConfirm: 'アカウントを削除しますか？元に戻せません。',
      authDeleteConfirmBtn: '削除', authDeleteCancel: 'キャンセル',
      authErrorUserExists: 'このユーザー名は既に使われています',
      authErrorUserExistsTry: '数字を付けてみてください。例',
      authErrorUserNotFound: 'ユーザーが見つかりません', authErrorWrongPassword: 'パスワードが違います',
      authErrorPasswordMismatch: 'パスワードが一致しません',
      authErrorUsernameShort: 'ユーザー名は3文字以上',
      authErrorPasswordShort: 'パスワードは4文字以上', authErrorEmpty: 'すべて入力してください',
    },
    ko: {
      authLogin: '로그인', authRegister: '회원가입', authLoginTitle: '로그인',
      authRegisterTitle: '계정 만들기', authUsername: '사용자 이름', authPassword: '비밀번호',
      authPasswordConfirm: '비밀번호 확인', authSubmitLogin: '로그인', authSubmitRegister: '가입',
      authLogout: '로그아웃', authGuestLabel: '게스트', authPlayAsGuest: '계정 없이 플레이',
      authDeleteAccount: '계정 삭제', authDeleteConfirm: '계정을 삭제할까요? 되돌릴 수 없습니다.',
      authDeleteConfirmBtn: '삭제', authDeleteCancel: '취소',
      authErrorUserExists: '이미 사용 중인 사용자 이름입니다',
      authErrorUserExistsTry: '숫자를 붙여 보세요. 예',
      authErrorUserNotFound: '사용자를 찾을 수 없습니다', authErrorWrongPassword: '비밀번호가 틀렸습니다',
      authErrorPasswordMismatch: '비밀번호가 일치하지 않습니다',
      authErrorUsernameShort: '이름은 3자 이상',
      authErrorPasswordShort: '비밀번호는 4자 이상', authErrorEmpty: '모든 항목을 입력하세요',
    },
  };

  for (const code of LANGUAGES) {
    Object.assign(translations[code], AUTH_I18N[code] || AUTH_I18N.en);
  }

  const AGE_I18N_KEYS = {
    '5-7': 'age57',
    '8-10': 'age810',
    '11-13': 'age1113',
    '14-17': 'age1417',
    '18+': 'age18',
  };

  global.I18n = {
    LANGUAGE_OPTIONS,
    LANGUAGES,
    AGE_I18N_KEYS,
    TUTORIAL_STEPS,
    translations,
    t(lang, key) {
      return translations[lang]?.[key] ?? translations.en[key] ?? key;
    },
    isRtl(lang) {
      return RTL_LANGS.has(lang);
    },
    normalizeLang(lang) {
      return LANGUAGES.includes(lang) ? lang : 'en';
    },
  };
})(window);

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

/** Game logic — round generation, scoring, difficulty by age */
(function (global) {
  const SHAPES = ['circle', 'square', 'triangle', 'diamond', 'star'];
  const SIMPLE_SHAPES = ['circle', 'square', 'triangle'];
  const COLORS = [
    '#FF6B6B', '#4ECDC4', '#FFE66D', '#A29BFE',
    '#00CEC9', '#FD79A8', '#74B9FF', '#FDCB6E',
  ];
  const SIMILAR_COLOR_PAIRS = [
    ['#FF6B6B', '#FF8E8E'],
    ['#E84393', '#FD79A8'],
    ['#4ECDC4', '#7EDDD6'],
    ['#00CEC9', '#4ECDC4'],
    ['#74B9FF', '#A29BFE'],
    ['#6C5CE7', '#9B8AFB'],
    ['#FDCB6E', '#FFEAA7'],
    ['#E17055', '#FF7675'],
  ];
  const SYMBOLS = ['★', '●', '◆', '▲', '♥', '♦', '✦', '☀'];
  const SIMILAR_SYMBOL_PAIRS = [
    ['●', '◆'],
    ['★', '✦'],
    ['▲', '◆'],
    ['♥', '♦'],
  ];

  const AGE_GROUPS = ['5-7', '8-10', '11-13', '14-17', '18+'];

  const AGE_CONFIG = {
    '5-7': {
      objectCount: 6,
      cols: 3,
      roundTime: 9,
      diffTypes: ['color', 'shape', 'symbol'],
      shapes: SIMPLE_SHAPES,
      similarColors: true,
      similarSymbols: false,
      similarChance: 0.32,
    },
    '8-10': {
      objectCount: 9,
      cols: 3,
      roundTime: 7,
      diffTypes: ['color', 'shape', 'symbol'],
      shapes: SHAPES,
      similarColors: true,
      similarSymbols: true,
      similarChance: 0.55,
    },
    '11-13': {
      objectCount: 12,
      cols: 4,
      roundTime: 5,
      diffTypes: ['color', 'shape', 'symbol'],
      shapes: SHAPES,
      similarColors: true,
      similarSymbols: true,
      similarChance: 0.72,
    },
    '14-17': {
      objectCount: 16,
      cols: 4,
      roundTime: 4,
      diffTypes: ['color', 'shape', 'symbol'],
      shapes: SHAPES,
      similarColors: true,
      similarSymbols: true,
      similarChance: 0.82,
    },
    '18+': {
      objectCount: 20,
      cols: 5,
      roundTime: 3,
      diffTypes: ['color', 'shape', 'symbol'],
      shapes: SHAPES,
      similarColors: true,
      similarSymbols: true,
      similarChance: 0.85,
    },
  };

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function pickRandomExcept(arr, exclude) {
    return pickRandom(arr.filter((item) => item !== exclude));
  }

  function pickColors(config) {
    const chance = config.similarChance ?? 0.5;
    if (config.similarColors && Math.random() < chance) {
      const [base, odd] = pickRandom(SIMILAR_COLOR_PAIRS);
      return { baseColor: base, oddColor: odd };
    }
    const baseColor = pickRandom(COLORS);
    return { baseColor, oddColor: pickRandomExcept(COLORS, baseColor) };
  }

  function pickSymbols(config) {
    const chance = config.similarChance ?? 0.5;
    if (config.similarSymbols && Math.random() < chance) {
      const [base, odd] = pickRandom(SIMILAR_SYMBOL_PAIRS);
      return { baseSymbol: base, oddSymbol: odd };
    }
    const baseSymbol = pickRandom(SYMBOLS);
    return { baseSymbol, oddSymbol: pickRandomExcept(SYMBOLS, baseSymbol) };
  }

  function normalizeAge(age) {
    return AGE_CONFIG[age] ? age : '8-10';
  }

  function getAgeConfig(age) {
    return AGE_CONFIG[normalizeAge(age)];
  }

  function generateRound(age) {
    const config = getAgeConfig(age);
    const { objectCount, diffTypes, shapes } = config;
    const diffType = pickRandom(diffTypes);
    const oddIndex = Math.floor(Math.random() * objectCount);

    const { baseColor, oddColor } = pickColors(config);
    const baseShape = pickRandom(shapes);
    const oddShape = pickRandomExcept(shapes, baseShape);
    const { baseSymbol, oddSymbol } = pickSymbols(config);

    const objects = Array.from({ length: objectCount }, (_, i) => {
      const isOdd = i === oddIndex;
      return {
        color: diffType === 'color' ? (isOdd ? oddColor : baseColor) : baseColor,
        shape: diffType === 'shape' ? (isOdd ? oddShape : baseShape) : baseShape,
        symbol: diffType === 'symbol' ? (isOdd ? oddSymbol : baseSymbol) : baseSymbol,
        showSymbol: diffType === 'symbol',
      };
    });

    return {
      objects,
      oddIndex,
      diffType,
      cols: config.cols,
      roundTime: config.roundTime,
    };
  }

  function createGameState() {
    return {
      score: 0,
      round: null,
      timerId: null,
      timeLeft: 10,
      roundTime: 10,
      isPlaying: false,
      answered: false,
    };
  }

  function addScore(state) {
    state.score += 1;
    return state.score;
  }

  global.Game = {
    AGE_GROUPS,
    normalizeAge,
    getAgeConfig,
    generateRound,
    createGameState,
    addScore,
  };
})(window);

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
      if (el.closest('#authOverlay') && (el.id === 'authTitle' || el.id === 'authSubmit' || el.id === 'authPasswordLabel')) return;
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
    const isReset = mode === 'reset';
    const needsEmail = isRegister || isReset;
    const needsConfirm = isRegister || isReset;

    $('authTabs').hidden = isReset;
    $('authTabLogin').classList.toggle('auth-tabs__btn--active', mode === 'login');
    $('authTabRegister').classList.toggle('auth-tabs__btn--active', isRegister);
    $('authEmailWrap').hidden = !needsEmail;
    $('authEmail').required = needsEmail;
    $('authConfirmWrap').hidden = !needsConfirm;
    $('authPasswordConfirm').required = needsConfirm;
    $('authForgotWrap').hidden = mode !== 'login';
    $('authBackLoginWrap').hidden = !isReset;
    $('authResetHint').hidden = !isReset;
    $('authPassword').autocomplete = needsConfirm ? 'new-password' : 'current-password';
    clearAuthError();
    clearAuthSuccess();
  }

  function resetAuth() {
    authMode = 'login';
    $('authForm').reset();
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

    $('authTitle').textContent = t(lang, titleKey);
    $('authSubmit').textContent = t(lang, submitKey);
    $('authPasswordLabel').textContent = t(lang, passwordLabelKey);
    $('authTabLogin').textContent = t(lang, 'authLogin');
    $('authTabRegister').textContent = t(lang, 'authRegister');
    document.querySelectorAll('#authOverlay [data-i18n]').forEach((el) => {
      if (['authTitle', 'authSubmit', 'authPasswordLabel'].includes(el.id)) return;
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

  function showAuthSuccess(message) {
    const el = $('authSuccess');
    el.textContent = message;
    el.hidden = !message;
  }

  function clearAuthSuccess() {
    $('authSuccess').hidden = true;
    $('authSuccess').textContent = '';
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
    getAuthMode: () => authMode,
  };
})(window);

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
    hideAuthScreen();
    setAppAuthenticated(true);
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

  function initAuth() {
    resetAuth();
    $('authTabLogin').addEventListener('click', () => {
      setAuthMode('login');
      updateAuthFormTexts(authLang());
    });
    $('authTabRegister').addEventListener('click', () => {
      setAuthMode('register');
      updateAuthFormTexts(authLang());
    });
    $('authForm').addEventListener('submit', handleAuthSubmit);
    $('authForgotBtn').addEventListener('click', () => {
      clearAuthError();
      clearAuthSuccess();
      setAuthMode('reset');
      updateAuthFormTexts(authLang());
    });
    $('authBackLoginBtn').addEventListener('click', () => {
      clearAuthError();
      clearAuthSuccess();
      $('authForm').reset();
      setAuthMode('login');
      updateAuthFormTexts(authLang());
    });
    $('authGuestBtn').addEventListener('click', enterAsGuest);
    initAccountMenu(leaveApp, requestDeleteAccount);
  }

  function init() {
    initPickers(prefs.lang, applyLanguage, applyAge);
    bindTutorialControls(advanceTutorialStep);
    initAuth();

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

    $('startBtn').addEventListener('click', startGame);
    $('newGameBtn').addEventListener('click', newGame);
    $('themeLightBtn').addEventListener('click', () => applyTheme('light'));
    $('themeDarkBtn').addEventListener('click', () => applyTheme('dark'));
  }

  init();
})();

