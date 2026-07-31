const STORAGE_KEYS = {
  language: "diceRollerLanguage",
  muted: "diceRollerMuted",
};

const MODES = [
  "normal",
  "battle",
  "bigSmall",
  "oddEven",
  "exactTotal",
  "truthDare",
  "drinking",
  "yahtzee",
];

const copy = {
  zh: {
    appTitle: "摇骰子",
    subtitle: "选择玩法，摇出你的运气",
    languageSwitch: "EN",
    soundOn: "声音",
    muted: "静音",
    roll: "开始摇骰",
    rollAgain: "再摇一次",
    rolling: "摇动中...",
    tapToRoll: "点击开始摇骰",
    revealDice: "查看骰子",
    coverDice: "盖上骰盅",
    swipeUpToReveal: "上滑查看骰子",
    swipeDownToCover: "下滑盖上骰盅",
    total: "总点数",
    result: "结果",
    thisRoll: "本轮结果",
    compareWithFriends: "和朋友比一比谁更大",
    entertainmentNote: "随机结果仅供娱乐",
    big: "大",
    small: "小",
    odd: "单",
    even: "双",
    triple: "围骰",
    diceCount: "骰子数量",
    maxThreeDice: "最多 3 颗",
    fixedThreeDice: "固定 3 颗骰子，摇完后直接判定结果。",
    fixedOneDice: "固定 1 颗骰子，点数决定本轮内容。",
    fixedFiveDice: "固定 5 颗骰子，自动识别最佳组合。",
    threeOf: "三个 {value}",
    about: "关于我们",
    contact: "联系我们",
    privacyPolicy: "隐私政策",
    backToRoller: "返回摇骰子",
    modes: {
      normal: "普通摇点数",
      battle: "比大小",
      bigSmall: "大小判定",
      oddEven: "单双判定",
      exactTotal: "点数判定",
      truthDare: "真心话大冒险",
      drinking: "喝酒游戏",
      yahtzee: "快艇骰子",
    },
    truthDare: {
      rollTask: "摇出任务",
      newTask: "重新抽任务",
      types: {
        1: "真心话",
        2: "大冒险",
        3: "指定一人回答",
        4: "跳过一次",
        5: "全员参与",
        6: "自定义问题",
      },
      tasks: {
        1: ["说一件你最近最开心的事。", "分享一个你最近的小目标。"],
        2: ["做一个 10 秒钟的夸张表情。", "用一句话夸奖右手边的人。"],
        3: ["指定一个人回答你的问题。", "请一位朋友说出今天最意外的瞬间。"],
        4: ["本轮安全通过。", "跳过一次，把机会留给下一位。"],
        5: ["所有人轮流说一个秘密爱好。", "每个人说一个最近喜欢的东西。"],
        6: ["由右手边的人出题。", "由大家共同定一个轻松挑战。"],
      },
    },
    drinking: {
      rollRule: "摇出规则",
      notice: "理性饮酒，量力而行。可以用饮料或水代替。",
      rules: {
        1: "自己喝一小口",
        2: "左边的人喝一小口",
        3: "右边的人喝一小口",
        4: "指定一人喝一小口",
        5: "全员喝一小口",
        6: "本轮免罚",
      },
    },
    yahtzee: {
      rollCombo: "摇出组合",
      score: "得分",
      bestCombo: "最佳组合",
      comboNames: {
        yahtzee: "五同号",
        four: "四同号",
        fullHouse: "葫芦",
        largeStraight: "大顺子",
        smallStraight: "小顺子",
        three: "三同号",
        twoPair: "两对",
        onePair: "一对",
        chance: "散牌",
      },
      descriptions: {
        yahtzee: "五颗骰子点数完全相同。",
        four: "有四颗骰子点数相同。",
        fullHouse: "三颗相同加一组对子。",
        largeStraight: "五颗骰子连成完整顺子。",
        smallStraight: "至少有四个连续点数。",
        three: "有三颗骰子点数相同。",
        twoPair: "同时出现两组对子。",
        onePair: "出现一组对子。",
        chance: "没有特殊组合，按总点数计分。",
      },
    },
  },
  en: {
    appTitle: "Dice Roller",
    subtitle: "Pick a mode and roll your luck",
    languageSwitch: "中",
    soundOn: "Sound",
    muted: "Mute",
    roll: "Roll Dice",
    rollAgain: "Roll Again",
    rolling: "Rolling...",
    tapToRoll: "Tap Roll Dice",
    revealDice: "Reveal dice",
    coverDice: "Cover dice",
    swipeUpToReveal: "Swipe up to reveal dice",
    swipeDownToCover: "Swipe down to cover dice",
    total: "Total",
    result: "Result",
    thisRoll: "This Roll",
    compareWithFriends: "Compare totals with your friends",
    entertainmentNote: "Random result for fun only",
    big: "Big",
    small: "Small",
    odd: "Odd",
    even: "Even",
    triple: "Triple",
    diceCount: "Dice",
    maxThreeDice: "Up to 3",
    fixedThreeDice: "Three dice are rolled and judged after the roll.",
    fixedOneDice: "One die decides this round.",
    fixedFiveDice: "Five dice are rolled to find the best combo.",
    threeOf: "Three {value}s",
    about: "About",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    backToRoller: "Back to Roller",
    modes: {
      normal: "Free Roll",
      battle: "Higher Roll",
      bigSmall: "Big or Small",
      oddEven: "Odd or Even",
      exactTotal: "Total Points",
      truthDare: "Truth or Dare",
      drinking: "Drinking Dice",
      yahtzee: "Yahtzee Lite",
    },
    truthDare: {
      rollTask: "Roll Task",
      newTask: "New Task",
      types: {
        1: "Truth",
        2: "Dare",
        3: "Pick Someone",
        4: "Skip",
        5: "Everyone",
        6: "Custom",
      },
      tasks: {
        1: ["Share one thing that made you happy recently.", "Share a small goal you have right now."],
        2: ["Make a funny face for 10 seconds.", "Say one kind thing about the person on your right."],
        3: ["Choose one person to answer your question.", "Ask one friend to name the most surprising moment today."],
        4: ["You are safe this round.", "Skip once and pass the turn along."],
        5: ["Everyone shares a hidden hobby.", "Everyone names something they recently enjoyed."],
        6: ["The person on your right creates a challenge.", "The group creates one light challenge together."],
      },
    },
    drinking: {
      rollRule: "Roll Rule",
      notice: "Drink responsibly. Water or soft drinks can be used instead.",
      rules: {
        1: "Take a small sip",
        2: "Player on your left takes a small sip",
        3: "Player on your right takes a small sip",
        4: "Choose someone to take a small sip",
        5: "Everyone takes a small sip",
        6: "Safe this round",
      },
    },
    yahtzee: {
      rollCombo: "Roll Combo",
      score: "Score",
      bestCombo: "Best Combo",
      comboNames: {
        yahtzee: "Five of a Kind",
        four: "Four of a Kind",
        fullHouse: "Full House",
        largeStraight: "Large Straight",
        smallStraight: "Small Straight",
        three: "Three of a Kind",
        twoPair: "Two Pair",
        onePair: "One Pair",
        chance: "Chance",
      },
      descriptions: {
        yahtzee: "All five dice show the same value.",
        four: "Four dice show the same value.",
        fullHouse: "Three of a kind plus a pair.",
        largeStraight: "Five dice in sequence.",
        smallStraight: "At least four values in sequence.",
        three: "Three dice show the same value.",
        twoPair: "Two separate pairs appear.",
        onePair: "One pair appears.",
        chance: "No special combo, score the total.",
      },
    },
  },
};

const state = {
  language: readPreference(STORAGE_KEYS.language) || "en",
  activeMode: "normal",
  isRolling: false,
  cupState: "closed",
  cupOffsetY: 0,
  muted: readPreference(STORAGE_KEYS.muted) === "true",
  hasResult: false,
  results: [],
  total: 0,
  modeState: {
    normal: { diceCount: 2 },
    battle: { diceCount: 2 },
    bigSmall: {},
    oddEven: {},
    exactTotal: {},
    truthDare: {},
    drinking: {},
    yahtzee: {},
  },
};

const pipMap = {
  1: ["e"],
  2: ["a", "i"],
  3: ["a", "e", "i"],
  4: ["a", "c", "g", "i"],
  5: ["a", "c", "e", "g", "i"],
  6: ["a", "c", "d", "f", "g", "i"],
};

const scoreMap = {
  yahtzee: 50,
  four: 40,
  fullHouse: 35,
  largeStraight: 30,
  smallStraight: 25,
  three: 20,
  twoPair: 15,
  onePair: 10,
};

const elements = {
  languageButton: document.querySelector("#languageButton"),
  soundButton: document.querySelector("#soundButton"),
  modeTabs: document.querySelector("#modeTabs"),
  heroPanel: document.querySelector("#heroPanel"),
  cupWrap: document.querySelector("#cupWrap"),
  trayPreview: document.querySelector("#trayPreview"),
  heroStatus: document.querySelector("#heroStatus"),
  controlsPanel: document.querySelector("#controlsPanel"),
  rollButton: document.querySelector("#rollButton"),
  resultPanel: document.querySelector("#resultPanel"),
  footerNote: document.querySelector("#footerNote"),
};

let audio = null;
let rollingTimer = null;
let dragStartY = 0;
let dragLastY = 0;
let dragStartTime = 0;
let dragging = false;

function readPreference(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writePreference(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Local storage can be unavailable in private or embedded contexts.
  }
}

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], copy[state.language]);
}

function rollDice(count) {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 6) + 1);
}

function getTotal(results) {
  return results.reduce((sum, value) => sum + value, 0);
}

function isTriple(results) {
  return results.length === 3 && results.every((value) => value === results[0]);
}

function diceCountForMode(mode) {
  if (mode === "normal") return state.modeState.normal.diceCount;
  if (mode === "battle") return state.modeState.battle.diceCount;
  if (["bigSmall", "oddEven", "exactTotal"].includes(mode)) return 3;
  if (["truthDare", "drinking"].includes(mode)) return 1;
  return 5;
}

function setLanguage(language) {
  state.language = language;
  writePreference(STORAGE_KEYS.language, language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  render();
}

function setMode(mode) {
  if (state.isRolling || state.activeMode === mode) return;
  state.activeMode = mode;
  state.hasResult = false;
  state.results = [];
  state.total = 0;
  setCupState("closed");
  render();
}

function setCupState(cupState) {
  state.cupState = cupState;
  state.cupOffsetY = cupState === "open" ? -130 : 0;
  renderCupOnly();
}

function playSound() {
  if (state.muted) return;
  try {
    audio ||= new Audio("./assets/dice-shake.mp3");
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch {
    audio = null;
  }
}

function vibrate() {
  if ("vibrate" in navigator) {
    navigator.vibrate(80);
  }
}

function roll() {
  if (state.isRolling) return;
  state.isRolling = true;
  state.cupState = "closed";
  state.cupOffsetY = 0;
  elements.cupWrap.classList.add("is-rolling");
  playSound();
  vibrate();
  render();

  window.clearTimeout(rollingTimer);
  rollingTimer = window.setTimeout(() => {
    const results = rollDice(diceCountForMode(state.activeMode));
    state.results = results;
    state.total = getTotal(results);
    state.hasResult = true;
    state.isRolling = false;
    state.cupState = "closed";
    state.cupOffsetY = 0;
    elements.cupWrap.classList.remove("is-rolling");
    applyModeResult();
    render();
  }, 1500);
}

function rerollTask() {
  if (state.isRolling || state.activeMode !== "truthDare" || !state.hasResult) return;
  const value = state.results[0];
  const tasks = t(`truthDare.tasks.${value}`);
  state.modeState.truthDare.taskIndex = Math.floor(Math.random() * tasks.length);
  renderResult();
}

function applyModeResult() {
  const mode = state.activeMode;
  const results = state.results;

  if (mode === "bigSmall") {
    state.modeState.bigSmall = {
      resultType: isTriple(results) ? "triple" : state.total >= 11 ? "big" : "small",
      isTriple: isTriple(results),
    };
  }

  if (mode === "oddEven") {
    state.modeState.oddEven = {
      resultType: state.total % 2 === 0 ? "even" : "odd",
      isTriple: isTriple(results),
    };
  }

  if (mode === "exactTotal") {
    state.modeState.exactTotal = {
      expression: `${results.join(" + ")} = ${state.total}`,
      isTriple: isTriple(results),
    };
  }

  if (mode === "truthDare") {
    const value = results[0];
    const tasks = t(`truthDare.tasks.${value}`);
    state.modeState.truthDare = {
      value,
      taskIndex: Math.floor(Math.random() * tasks.length),
    };
  }

  if (mode === "drinking") {
    state.modeState.drinking = {
      value: results[0],
    };
  }

  if (mode === "yahtzee") {
    const combo = getYahtzeeCombo(results);
    state.modeState.yahtzee = {
      combo,
      score: combo === "chance" ? state.total : scoreMap[combo],
    };
  }
}

function getYahtzeeCombo(results) {
  const sortedUnique = [...new Set(results)].sort((a, b) => a - b);
  const counts = Object.values(
    results.reduce((map, value) => {
      map[value] = (map[value] || 0) + 1;
      return map;
    }, {}),
  ).sort((a, b) => b - a);

  if (counts[0] === 5) return "yahtzee";
  if (counts[0] === 4) return "four";
  if (counts[0] === 3 && counts[1] === 2) return "fullHouse";
  if (hasSequence(sortedUnique, 5)) return "largeStraight";
  if (hasSequence(sortedUnique, 4)) return "smallStraight";
  if (counts[0] === 3) return "three";
  if (counts[0] === 2 && counts[1] === 2) return "twoPair";
  if (counts[0] === 2) return "onePair";
  return "chance";
}

function hasSequence(values, length) {
  let run = 1;
  for (let index = 1; index < values.length; index += 1) {
    run = values[index] === values[index - 1] + 1 ? run + 1 : 1;
    if (run >= length) return true;
  }
  return false;
}

function createDie(value, size = "large") {
  const die = document.createElement("div");
  die.className = `die ${size}`;
  die.setAttribute("aria-label", String(value));
  pipMap[value].forEach((position) => {
    const pip = document.createElement("span");
    pip.className = `pip ${position}`;
    die.appendChild(pip);
  });
  return die;
}

function renderDiceRow(results, className = "") {
  const row = document.createElement("div");
  row.className = `dice-row ${className}`;
  results.forEach((value) => {
    row.appendChild(createDie(value, className === "yahtzee-row" ? "small" : "large"));
  });
  return row;
}

function renderTabs() {
  elements.modeTabs.innerHTML = "";
  MODES.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mode-tab${mode === state.activeMode ? " is-active" : ""}`;
    button.textContent = t(`modes.${mode}`);
    button.disabled = state.isRolling;
    button.addEventListener("click", () => setMode(mode));
    elements.modeTabs.appendChild(button);
  });
}

function renderControls() {
  const mode = state.activeMode;
  elements.controlsPanel.innerHTML = "";

  if (mode === "normal" || mode === "battle") {
    const max = mode === "normal" ? 6 : 3;
    const selected = state.modeState[mode].diceCount;
    const label = document.createElement("div");
    label.className = "control-label";
    label.innerHTML = `<span>${t("diceCount")}</span>${mode === "battle" ? `<span class="control-hint">${t("maxThreeDice")}</span>` : ""}`;

    const grid = document.createElement("div");
    grid.className = `count-grid${max === 3 ? " three" : ""}`;
    for (let value = 1; value <= max; value += 1) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `count-button${value === selected ? " is-active" : ""}`;
      button.textContent = String(value);
      button.disabled = state.isRolling;
      button.addEventListener("click", () => {
        state.modeState[mode].diceCount = value;
        state.hasResult = false;
        state.results = [];
        setCupState("closed");
        render();
      });
      grid.appendChild(button);
    }

    elements.controlsPanel.append(label, grid);
    return;
  }

  const copyKey = ["bigSmall", "oddEven", "exactTotal"].includes(mode)
    ? "fixedThreeDice"
    : ["truthDare", "drinking"].includes(mode)
      ? "fixedOneDice"
      : "fixedFiveDice";
  const description = document.createElement("p");
  description.className = "fixed-mode-copy";
  description.textContent = t(copyKey);
  elements.controlsPanel.appendChild(description);
}

function renderButton() {
  const mode = state.activeMode;
  let label = state.hasResult ? t("rollAgain") : t("roll");
  if (mode === "truthDare") label = state.hasResult ? t("rollAgain") : t("truthDare.rollTask");
  if (mode === "drinking") label = state.hasResult ? t("rollAgain") : t("drinking.rollRule");
  if (mode === "yahtzee") label = state.hasResult ? t("rollAgain") : t("yahtzee.rollCombo");
  elements.rollButton.textContent = state.isRolling ? t("rolling") : label;
  elements.rollButton.disabled = state.isRolling;
}

function renderTrayPreview() {
  elements.trayPreview.innerHTML = "";
  if (!state.hasResult) return;
  elements.trayPreview.appendChild(renderDiceRow(state.results, state.activeMode === "yahtzee" ? "yahtzee-row" : ""));
}

function renderResult() {
  elements.resultPanel.classList.toggle("is-covered", state.hasResult && state.cupState !== "open");
  elements.resultPanel.innerHTML = "";

  if (!state.hasResult) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <div class="placeholder-dice" aria-hidden="true"></div>
      <div class="placeholder-dice" aria-hidden="true"></div>
      <p>${t("tapToRoll")}</p>
    `;
    elements.resultPanel.appendChild(empty);
    renderFooter();
    return;
  }

  if (state.cupState !== "open") {
    const covered = document.createElement("div");
    covered.className = "covered-result";
    covered.textContent = t("swipeUpToReveal");
    elements.resultPanel.appendChild(covered);
    renderFooter();
    return;
  }

  const mode = state.activeMode;
  if (mode === "normal") renderSimpleResult();
  if (mode === "battle") renderBattleResult();
  if (mode === "bigSmall") renderBigSmallResult();
  if (mode === "oddEven") renderOddEvenResult();
  if (mode === "exactTotal") renderExactTotalResult();
  if (mode === "truthDare") renderTruthDareResult();
  if (mode === "drinking") renderDrinkingResult();
  if (mode === "yahtzee") renderYahtzeeResult();
  renderFooter();
}

function renderSimpleResult() {
  addTitle(t("result"));
  elements.resultPanel.appendChild(renderDiceRow(state.results));
  addTotal();
}

function renderBattleResult() {
  addTitle(t("thisRoll"));
  elements.resultPanel.appendChild(renderDiceRow(state.results));
  addTotal();
  addText("compare-hint", t("compareWithFriends"));
}

function renderBigSmallResult() {
  const modeData = state.modeState.bigSmall;
  addTitle(t("result"));
  elements.resultPanel.appendChild(renderDiceRow(state.results));
  addTotal();
  elements.resultPanel.appendChild(addBadgeRow([t(modeData.resultType)]));
  if (modeData.isTriple) {
    addDetail(t("result"), `${t("threeOf").replace("{value}", state.results[0])} · ${t("total")} ${state.total}`, t("triple"));
  }
}

function renderOddEvenResult() {
  const modeData = state.modeState.oddEven;
  addTitle(t("result"));
  elements.resultPanel.appendChild(renderDiceRow(state.results));
  addTotal();
  const labels = [t(modeData.resultType)];
  if (modeData.isTriple) labels.push(t("triple"));
  elements.resultPanel.appendChild(addBadgeRow(labels));
}

function renderExactTotalResult() {
  const modeData = state.modeState.exactTotal;
  addTitle(t("result"));
  elements.resultPanel.appendChild(renderDiceRow(state.results));
  addTotal();
  addText("expression", modeData.expression);
  if (modeData.isTriple) {
    elements.resultPanel.appendChild(addBadgeRow([t("triple")]));
  }
}

function renderTruthDareResult() {
  const data = state.modeState.truthDare;
  const value = data.value || state.results[0];
  const tasks = t(`truthDare.tasks.${value}`);
  const taskIndex = Math.min(data.taskIndex || 0, tasks.length - 1);
  elements.resultPanel.appendChild(renderDiceRow(state.results));
  const card = document.createElement("div");
  card.className = "task-card";
  card.innerHTML = `
    <p class="label">${value}: <span class="task-type">${t(`truthDare.types.${value}`)}</span></p>
    <p class="task-text">${tasks[taskIndex]}</p>
  `;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "secondary-button";
  button.textContent = t("truthDare.newTask");
  button.addEventListener("click", rerollTask);
  elements.resultPanel.append(card, button);
}

function renderDrinkingResult() {
  const data = state.modeState.drinking;
  const value = data.value || state.results[0];
  elements.resultPanel.appendChild(renderDiceRow(state.results));
  const card = document.createElement("div");
  card.className = "task-card";
  card.innerHTML = `
    <p class="label">${value}</p>
    <p class="task-text">${t(`drinking.rules.${value}`)}</p>
  `;
  elements.resultPanel.append(card, createSafetyNotice());
}

function renderYahtzeeResult() {
  const data = state.modeState.yahtzee;
  const expression = [...state.results].sort((a, b) => a - b).join(" + ");
  addTitle(t("yahtzee.bestCombo"));
  elements.resultPanel.appendChild(renderDiceRow(state.results, "yahtzee-row"));
  const name = document.createElement("p");
  name.className = "result-caption";
  name.textContent = t(`yahtzee.comboNames.${data.combo}`);
  const score = document.createElement("p");
  score.className = "score-number";
  score.textContent = String(data.score);
  const label = document.createElement("p");
  label.className = "result-caption";
  label.textContent = t("yahtzee.score");
  const card = document.createElement("div");
  card.className = "detail-card";
  card.innerHTML = `
    <p class="label">${expression}</p>
    <p class="sub">${t(`yahtzee.descriptions.${data.combo}`)}</p>
  `;
  elements.resultPanel.append(name, score, label, card);
}

function addTitle(text) {
  const title = document.createElement("p");
  title.className = "result-title";
  title.textContent = text;
  elements.resultPanel.appendChild(title);
}

function addTotal() {
  const score = document.createElement("p");
  score.className = "score-number";
  score.textContent = String(state.total);
  const label = document.createElement("p");
  label.className = "result-caption";
  label.textContent = t("total");
  elements.resultPanel.append(score, label);
}

function addText(className, text) {
  const node = document.createElement("p");
  node.className = className;
  node.textContent = text;
  elements.resultPanel.appendChild(node);
}

function addBadgeRow(labels) {
  const row = document.createElement("div");
  row.className = "badge-row";
  labels.forEach((label) => {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = label;
    row.appendChild(badge);
  });
  return row;
}

function addDetail(label, sub, side) {
  const card = document.createElement("div");
  card.className = "detail-card";
  card.innerHTML = `
    <p class="label">${label}</p>
    <p class="sub">${sub}${side ? ` · ${side}` : ""}</p>
  `;
  elements.resultPanel.appendChild(card);
}

function createSafetyNotice() {
  const notice = document.createElement("div");
  notice.className = "safety-notice";
  notice.textContent = t("drinking.notice");
  return notice;
}

function renderFooter() {
  elements.footerNote.innerHTML = `<p>${t("entertainmentNote")}</p>`;
  if (state.activeMode === "drinking") {
    elements.footerNote.appendChild(createSafetyNotice());
  }
}

function renderHero() {
  if (state.isRolling) {
    elements.heroStatus.textContent = t("rolling");
  } else if (!state.hasResult) {
    elements.heroStatus.textContent = t("tapToRoll");
  } else {
    elements.heroStatus.textContent = state.cupState === "open" ? t("swipeDownToCover") : t("swipeUpToReveal");
  }
  renderCupOnly();
}

function renderCupOnly() {
  elements.heroPanel.classList.toggle("has-result", state.hasResult);
  elements.heroPanel.classList.toggle("is-open", state.cupState === "open");
  elements.heroPanel.classList.toggle("is-closed", state.cupState !== "open");
  elements.cupWrap.style.setProperty("--cup-offset", `${state.cupOffsetY}px`);
  elements.cupWrap.setAttribute("aria-label", state.cupState === "open" ? t("coverDice") : t("revealDice"));
}

function renderTopButtons() {
  elements.languageButton.textContent = t("languageSwitch");
  elements.soundButton.textContent = state.muted ? t("muted") : t("soundOn");
}

function render() {
  renderTopButtons();
  renderTabs();
  renderHero();
  renderTrayPreview();
  renderControls();
  renderButton();
  renderResult();
}

function startDrag(event) {
  if (!state.hasResult || state.isRolling) return;
  dragging = true;
  dragStartY = event.clientY;
  dragLastY = event.clientY;
  dragStartTime = Date.now();
  elements.cupWrap.classList.add("is-dragging");
  elements.cupWrap.setPointerCapture?.(event.pointerId);
}

function moveDrag(event) {
  if (!dragging) return;
  dragLastY = event.clientY;
  const delta = dragLastY - dragStartY;
  const base = state.cupState === "open" ? -130 : 0;
  const nextOffset = Math.max(-130, Math.min(0, base + delta));
  state.cupOffsetY = nextOffset;
  renderCupOnly();
}

function endDrag(event) {
  if (!dragging) return;
  dragging = false;
  elements.cupWrap.classList.remove("is-dragging");
  elements.cupWrap.releasePointerCapture?.(event.pointerId);

  const delta = dragLastY - dragStartY;
  const elapsed = Math.max(Date.now() - dragStartTime, 1);
  const velocity = delta / elapsed;

  if (Math.abs(delta) < 10) {
    setCupState(state.cupState === "open" ? "closed" : "open");
  } else if (delta < -80 || velocity < -0.45) {
    setCupState("open");
  } else if (delta > 80 || velocity > 0.45) {
    setCupState("closed");
  } else {
    setCupState(state.cupOffsetY < -65 ? "open" : "closed");
  }
  renderResult();
  renderHero();
}

elements.languageButton.addEventListener("click", () => {
  setLanguage(state.language === "zh" ? "en" : "zh");
});

elements.soundButton.addEventListener("click", () => {
  state.muted = !state.muted;
  writePreference(STORAGE_KEYS.muted, String(state.muted));
  renderTopButtons();
});

elements.rollButton.addEventListener("click", roll);
elements.cupWrap.addEventListener("pointerdown", startDrag);
elements.cupWrap.addEventListener("pointermove", moveDrag);
elements.cupWrap.addEventListener("pointerup", endDrag);
elements.cupWrap.addEventListener("pointercancel", endDrag);
elements.cupWrap.addEventListener("keydown", (event) => {
  if (!state.hasResult || state.isRolling) return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setCupState(state.cupState === "open" ? "closed" : "open");
    render();
  }
});

window.DiceRollerTest = {
  getYahtzeeCombo,
  rollDice,
  getTotal,
  setCupState,
  state,
};

setLanguage(state.language === "zh" ? "zh" : "en");
