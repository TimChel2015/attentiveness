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
      objectCount: 8,
      cols: 4,
      roundTime: 9,
      diffTypes: ['color', 'shape', 'symbol', 'size'],
      shapes: SIMPLE_SHAPES,
      similarColors: true,
      similarSymbols: true,
      similarChance: 0.48,
    },
    '8-10': {
      objectCount: 12,
      cols: 4,
      roundTime: 7,
      diffTypes: ['color', 'shape', 'symbol', 'size'],
      shapes: SHAPES,
      similarColors: true,
      similarSymbols: true,
      similarChance: 0.68,
    },
    '11-13': {
      objectCount: 16,
      cols: 4,
      roundTime: 5,
      diffTypes: ['color', 'shape', 'symbol', 'size'],
      shapes: SHAPES,
      similarColors: true,
      similarSymbols: true,
      similarChance: 0.82,
    },
    '14-17': {
      objectCount: 20,
      cols: 5,
      roundTime: 4,
      diffTypes: ['color', 'shape', 'symbol', 'size'],
      shapes: SHAPES,
      similarColors: true,
      similarSymbols: true,
      similarChance: 0.88,
    },
    '18+': {
      objectCount: 24,
      cols: 5,
      roundTime: 3,
      diffTypes: ['color', 'shape', 'symbol', 'size'],
      shapes: SHAPES,
      similarColors: true,
      similarSymbols: true,
      similarChance: 0.92,
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
      const scale = diffType === 'size' ? (isOdd ? 0.78 : 1) : 1;
      return {
        color: diffType === 'color' ? (isOdd ? oddColor : baseColor) : baseColor,
        shape: diffType === 'shape' ? (isOdd ? oddShape : baseShape) : baseShape,
        symbol: diffType === 'symbol' ? (isOdd ? oddSymbol : baseSymbol) : baseSymbol,
        showSymbol: diffType === 'symbol',
        scale,
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
