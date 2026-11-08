// Preset category packs with 105 total game objects
const PRESETS = {
  starter: ['Carrot', 'Blueberry', 'Apple', 'Sofa'],
  food: [
    'Carrot',
    'Blueberry',
    'Apple',
    'Banana',
    'Watermelon',
    'Strawberry',
    'Pineapple',
    'Avocado',
    'Broccoli',
    'Mushroom',
    'Cheese',
    'Croissant',
    'Pizza',
    'Cookie',
    'Donut',
    'Burger',
    'Taco',
    'Sushi',
    'Ice Cream',
    'Honeycomb',
    'Pretzel',
    'Pancakes'
  ],
  furniture: [
    'Sofa',
    'Armchair',
    'Wooden Table',
    'Bookshelf',
    'Bed',
    'Floor Lamp',
    'Television',
    'Refrigerator',
    'Wardrobe',
    'Desk',
    'Mirror',
    'Grandfather Clock',
    'Bathtub',
    'Washing Machine',
    'Potted Plant',
    'Chandelier',
    'Safe',
    'Piano'
  ],
  loot: [
    'Iron Sword',
    'Wooden Shield',
    'Health Potion',
    'Mana Potion',
    'Golden Key',
    'Treasure Chest',
    'Magic Wand',
    'Diamond Gem',
    'Bomb',
    'Royal Crown',
    'Spellbook',
    'Bow & Arrow',
    'Lantern',
    'Gold Coin',
    'Dragon Egg',
    'Crystal Ball',
    'Ancient Scroll',
    'Viking Helmet'
  ],
  nature: [
    'Pine Tree',
    'Cactus',
    'Sunflower',
    'Boulder',
    'Campfire',
    'Glowing Crystal',
    'Frog',
    'Butterfly',
    'Tropical Fish',
    'Turtle',
    'Owl',
    'Fox',
    'Seashell',
    'Volcano Rock',
    'Rainbow Feather'
  ],
  tools: [
    'Pickaxe',
    'Hammer',
    'Wrench',
    'Flashlight',
    'Compass',
    'Binoculars',
    'Magnifying Glass',
    'Fishing Rod',
    'Backpack',
    'Umbrella',
    'Scissors',
    'Paintbrush',
    'Fire Extinguisher',
    'Bucket',
    'Ladder',
    'Stopwatch'
  ],
  tech: [
    'Laptop',
    'Smartphone',
    'Game Controller',
    'Headphones',
    'Camera',
    'Robot',
    'Rocket Ship',
    'Sports Car',
    'Bicycle',
    'Skateboard',
    'Helicopter',
    'Submarine',
    'Hoverboard',
    'Drone',
    'Arcade Cabinet',
    'Battery Pack'
  ]
};

// Default list combines all 105 objects across categories
const DEFAULT_ITEMS = [
  ...PRESETS.food,
  ...PRESETS.furniture,
  ...PRESETS.loot,
  ...PRESETS.nature,
  ...PRESETS.tools,
  ...PRESETS.tech
];

// Emoji lookup for objects
const EMOJI_MAP = {
  carrot: '🥕',
  blueberry: '🫐',
  apple: '🍎',
  banana: '🍌',
  watermelon: '🍉',
  strawberry: '🍓',
  pineapple: '🍍',
  avocado: '🥑',
  broccoli: '🥦',
  mushroom: '🍄',
  cheese: '🧀',
  croissant: '🥐',
  pizza: '🍕',
  cookie: '🍪',
  donut: '🍩',
  burger: '🍔',
  taco: '🌮',
  sushi: '🍣',
  'ice cream': '🍦',
  honeycomb: '🍯',
  pretzel: '🥨',
  pancake: '🥞',
  sofa: '🛋️',
  couch: '🛋️',
  armchair: '🪑',
  chair: '🪑',
  table: '🪵',
  bookshelf: '📚',
  bed: '🛏️',
  lamp: '🏮',
  television: '📺',
  tv: '📺',
  refrigerator: '🧊',
  wardrobe: '🚪',
  desk: '🖥️',
  mirror: '🪞',
  clock: '🕰️',
  bathtub: '🛁',
  washing: '🧺',
  plant: '🪴',
  chandelier: '🕯️',
  safe: '🔐',
  piano: '🎹',
  sword: '⚔️',
  shield: '🛡️',
  potion: '🧪',
  key: '🔑',
  chest: '🧰',
  wand: '🪄',
  diamond: '💎',
  gem: '💎',
  bomb: '💣',
  crown: '👑',
  spellbook: '📖',
  book: '📖',
  bow: '🏹',
  lantern: '🏮',
  coin: '🪙',
  egg: '🥚',
  'crystal ball': '🔮',
  scroll: '📜',
  helmet: '🪖',
  tree: '🌲',
  cactus: '🌵',
  sunflower: '🌻',
  boulder: '🪨',
  rock: '🪨',
  campfire: '🔥',
  crystal: '💎',
  frog: '🐸',
  butterfly: '🦋',
  fish: '🐟',
  turtle: '🐢',
  owl: '🦉',
  fox: '🦊',
  seashell: '🐚',
  feather: '🪶',
  pickaxe: '⛏️',
  hammer: '🔨',
  wrench: '🔧',
  flashlight: '🔦',
  compass: '🧭',
  binoculars: '🔭',
  magnifying: '🔍',
  fishing: '🎣',
  backpack: '🎒',
  umbrella: '☂️',
  scissors: '✂️',
  paintbrush: '🖌️',
  extinguisher: '🧯',
  bucket: '🪣',
  ladder: '🪜',
  stopwatch: '⏱️',
  laptop: '💻',
  smartphone: '📱',
  controller: '🎮',
  headphones: '🎧',
  camera: '📷',
  robot: '🤖',
  rocket: '🚀',
  car: '🏎️',
  bicycle: '🚲',
  skateboard: '🛹',
  helicopter: '🚁',
  submarine: '🚢',
  hoverboard: '🛸',
  drone: '🛸',
  arcade: '🕹️',
  battery: '🔋'
};

function getEmojiFor(name) {
  const lower = name.toLowerCase().trim();
  for (const [key, emoji] of Object.entries(EMOJI_MAP)) {
    if (lower.includes(key)) return emoji;
  }
  return '📦';
}

// Web Audio API Sound Effects
let soundEnabled = true;
let audioCtx = null;

function playTone(freq, durationMs, type = 'sine', volume = 0.08) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durationMs / 1000);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + durationMs / 1000);
  } catch {
    // Ignore audio errors if blocked by browser policy
  }
}

function playTickSound() {
  playTone(320 + Math.random() * 180, 40, 'triangle', 0.06);
}

function playWinSound() {
  playTone(523.25, 110, 'sine', 0.1);
  setTimeout(() => playTone(659.25, 160, 'sine', 0.12), 85);
}

// State
const STORAGE_KEY = 'gameRandomizerItems_v4';
let items;
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  items = Array.isArray(saved) && saved.length > 0 ? saved : [...DEFAULT_ITEMS];
} catch {
  items = [...DEFAULT_ITEMS];
}
let remainingPool = [...items];
let lastPickedSet = new Set();
let lastResultString = '';
let isRolling = false;
let totalRolls = 0;

// DOM Elements
const displayCard = document.getElementById('displayCard');
const resultEmoji = document.getElementById('resultEmoji');
const resultText = document.getElementById('resultText');
const multiResults = document.getElementById('multiResults');
const poolStatus = document.getElementById('poolStatus');
const randomizeBtn = document.getElementById('randomizeBtn');
const hideCardBtn = document.getElementById('hideCardBtn');
const rollDieBtn = document.getElementById('rollDieBtn');
const noRepeatToggle = document.getElementById('noRepeatToggle');
const drawCountSelect = document.getElementById('drawCountSelect');
const speedSelect = document.getElementById('speedSelect');
const copyResultBtn = document.getElementById('copyResultBtn');
const rulesToggleBtn = document.getElementById('rulesToggleBtn');
const closeRulesBtn = document.getElementById('closeRulesBtn');
const rulesPanel = document.getElementById('rulesPanel');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const appendPresetToggle = document.getElementById('appendPresetToggle');
const itemCount = document.getElementById('itemCount');
const itemList = document.getElementById('itemList');
const addItemForm = document.getElementById('addItemForm');
const newItemInput = document.getElementById('newItemInput');
const shufflePoolBtn = document.getElementById('shufflePoolBtn');
const bulkEditBtn = document.getElementById('bulkEditBtn');
const bulkEditContainer = document.getElementById('bulkEditContainer');
const bulkTextarea = document.getElementById('bulkTextarea');
const saveBulkBtn = document.getElementById('saveBulkBtn');
const cancelBulkBtn = document.getElementById('cancelBulkBtn');
const clearPoolBtn = document.getElementById('clearPoolBtn');
const resetDefaultBtn = document.getElementById('resetDefaultBtn');
const historyList = document.getElementById('historyList');
const rollCount = document.getElementById('rollCount');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const presetButtons = document.querySelectorAll('.preset-btn');

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function updatePoolStatus() {
  if (!noRepeatToggle.checked) {
    poolStatus.textContent = '';
    return;
  }
  poolStatus.textContent = `${remainingPool.length} of ${items.length} left before pool reshuffles`;
}

function renderItems() {
  itemCount.textContent = items.length;
  itemList.innerHTML = '';
  updatePoolStatus();

  if (items.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty-msg';
    empty.textContent = 'No objects in the list. Pick a preset pack or add some above!';
    itemList.appendChild(empty);
    randomizeBtn.disabled = true;
    return;
  }

  randomizeBtn.disabled = isRolling;

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'item-chip';
    if (lastPickedSet.has(item)) li.classList.add('active-pick');
    if (noRepeatToggle.checked && !remainingPool.includes(item)) {
      li.classList.add('drawn');
    }

    const span = document.createElement('span');
    span.textContent = `${getEmojiFor(item)} ${item}`;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.title = `Remove ${item}`;
    removeBtn.innerHTML = '&times;';
    removeBtn.addEventListener('click', () => removeItem(index));

    li.appendChild(span);
    li.appendChild(removeBtn);
    itemList.appendChild(li);
  });
}

function addItemsFromString(rawInput) {
  const parts = rawInput
    .split(/[\n,]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length === 0) return;

  parts.forEach((part) => {
    items.push(part);
    remainingPool.push(part);
  });
  saveItems();
  renderItems();
}

function removeItem(index) {
  const removed = items[index];
  items.splice(index, 1);
  const poolIdx = remainingPool.indexOf(removed);
  if (poolIdx !== -1) remainingPool.splice(poolIdx, 1);
  saveItems();
  renderItems();
}

function addHistoryEntry(winners) {
  const emptyMsg = historyList.querySelector('.empty-msg');
  if (emptyMsg) emptyMsg.remove();

  totalRolls++;
  rollCount.textContent = totalRolls;

  const li = document.createElement('li');
  li.className = 'history-item';

  const nameSpan = document.createElement('span');
  const formatted = winners.map((name) => `${getEmojiFor(name)} ${name}`).join(', ');
  nameSpan.textContent = `#${totalRolls} — ${formatted}`;

  const timeSpan = document.createElement('span');
  timeSpan.className = 'history-time';
  timeSpan.textContent = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  li.appendChild(nameSpan);
  li.appendChild(timeSpan);
  historyList.prepend(li);
}

function showFinalWinners(winners) {
  lastPickedSet = new Set(winners);
  lastResultString = winners.join(', ');

  if (winners.length === 1) {
    multiResults.classList.add('hidden');
    resultEmoji.classList.remove('hidden');
    resultText.classList.remove('hidden');
    resultEmoji.textContent = getEmojiFor(winners[0]);
    resultText.textContent = winners[0];
  } else {
    resultEmoji.classList.add('hidden');
    resultText.classList.add('hidden');
    multiResults.classList.remove('hidden');
    multiResults.innerHTML = '';

    winners.forEach((name) => {
      const div = document.createElement('div');
      div.className = 'multi-card';
      div.textContent = `${getEmojiFor(name)} ${name}`;
      multiResults.appendChild(div);
    });
  }

  displayCard.classList.add('pop');
  playWinSound();
  isRolling = false;
  randomizeBtn.disabled = false;
  addHistoryEntry(winners);
  renderItems();
}

function pickRandomObject() {
  if (isRolling || items.length === 0) return;

  const drawCount = Math.min(parseInt(drawCountSelect.value, 10) || 1, items.length);
  const winners = [];

  if (noRepeatToggle.checked) {
    for (let i = 0; i < drawCount; i++) {
      if (remainingPool.length === 0) {
        remainingPool = [...items];
      }
      const idx = Math.floor(Math.random() * remainingPool.length);
      winners.push(remainingPool[idx]);
      remainingPool.splice(idx, 1);
    }
  } else {
    const tempPool = [...items];
    for (let i = 0; i < drawCount; i++) {
      const idx = Math.floor(Math.random() * tempPool.length);
      winners.push(tempPool[idx]);
      tempPool.splice(idx, 1);
    }
  }

  displayCard.classList.remove('pop');
  const speed = speedSelect.value;

  if (speed === 'instant') {
    showFinalWinners(winners);
    return;
  }

  isRolling = true;
  randomizeBtn.disabled = true;
  multiResults.classList.add('hidden');
  resultEmoji.classList.remove('hidden');
  resultText.classList.remove('hidden');

  let ticks = 0;
  const maxTicks = speed === 'fast' ? 5 : 11;
  const tickInterval = speed === 'fast' ? 40 : 55;

  const interval = setInterval(() => {
    const temp = items[Math.floor(Math.random() * items.length)];
    resultEmoji.textContent = getEmojiFor(temp);
    resultText.textContent = temp;
    playTickSound();
    ticks++;

    if (ticks >= maxTicks) {
      clearInterval(interval);
      showFinalWinners(winners);
    }
  }, tickInterval);
}

// Event Listeners
randomizeBtn?.addEventListener('click', () => {
  displayCard?.classList.remove('secret-hidden');
  if (hideCardBtn) hideCardBtn.textContent = '🙈 Hide Card';
  pickRandomObject();
});

hideCardBtn?.addEventListener('click', () => {
  const isHidden = displayCard?.classList.toggle('secret-hidden');
  hideCardBtn.textContent = isHidden ? '👁️ Show Card' : '🙈 Hide Card';
});

rollDieBtn?.addEventListener('click', () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  playTickSound();
  rollDieBtn.textContent = `🎲 Player #${roll}`;
});

window.addEventListener('keydown', (e) => {
  const tag = document.activeElement?.tagName;
  if (e.code === 'Space' && tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'BUTTON' && tag !== 'SELECT') {
    e.preventDefault();
    displayCard?.classList.remove('secret-hidden');
    if (hideCardBtn) hideCardBtn.textContent = '🙈 Hide Card';
    pickRandomObject();
  }
});

copyResultBtn?.addEventListener('click', () => {
  const textToCopy = lastResultString || resultText.textContent;
  navigator.clipboard?.writeText(textToCopy);
  copyResultBtn.textContent = '✅';
  setTimeout(() => {
    copyResultBtn.textContent = '📋';
  }, 1000);
});

rulesToggleBtn?.addEventListener('click', () => {
  rulesPanel?.classList.toggle('hidden');
});

closeRulesBtn?.addEventListener('click', () => {
  rulesPanel?.classList.add('hidden');
});

soundToggleBtn?.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundToggleBtn.textContent = soundEnabled ? '🔊' : '🔇';
});

noRepeatToggle?.addEventListener('change', () => {
  remainingPool = [...items];
  renderItems();
});

presetButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const presetKey = btn.dataset.preset;
    const newPack = presetKey === 'all' ? [...DEFAULT_ITEMS] : [...(PRESETS[presetKey] || [])];

    if (appendPresetToggle?.checked && presetKey !== 'all') {
      const existingSet = new Set(items);
      newPack.forEach((obj) => {
        if (!existingSet.has(obj)) {
          items.push(obj);
          remainingPool.push(obj);
        }
      });
    } else {
      items = newPack;
      remainingPool = [...items];
    }

    lastPickedSet.clear();
    saveItems();
    renderItems();
  });
});

shufflePoolBtn?.addEventListener('click', () => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  saveItems();
  renderItems();
});

addItemForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  addItemsFromString(newItemInput.value);
  newItemInput.value = '';
});

bulkEditBtn?.addEventListener('click', () => {
  bulkTextarea.value = items.join(', ');
  bulkEditContainer.classList.toggle('hidden');
});

saveBulkBtn?.addEventListener('click', () => {
  const updated = bulkTextarea.value
    .split(/[\n,]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  items = updated;
  remainingPool = [...items];
  lastPickedSet.clear();
  saveItems();
  renderItems();
  bulkEditContainer.classList.add('hidden');
});

cancelBulkBtn?.addEventListener('click', () => {
  bulkEditContainer.classList.add('hidden');
});

clearPoolBtn?.addEventListener('click', () => {
  items = [];
  remainingPool = [];
  lastPickedSet.clear();
  saveItems();
  renderItems();
});

resetDefaultBtn?.addEventListener('click', () => {
  items = [...DEFAULT_ITEMS];
  remainingPool = [...items];
  lastPickedSet.clear();
  saveItems();
  renderItems();
});

clearHistoryBtn?.addEventListener('click', () => {
  totalRolls = 0;
  rollCount.textContent = '0';
  historyList.innerHTML = '<li class="empty-msg">No rolls yet.</li>';
});

// Initial render
renderItems();
