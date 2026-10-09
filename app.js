/**
 * Lucky Wheel & Team Generator
 * Enhanced for AC Mart & Educational Workflows
 * Bilingual: Khmer (Kantumruy Pro) & English (Outfit)
 */

// ==========================================================================
// 1. BILINGUAL TRANSLATION DICTIONARY
// ==========================================================================
const TRANSLATIONS = {
  km: {
    appTitle: "បង្វិលកង ចាប់ឆ្នោត",
    appSubtitle: "ជ្រើសរើសឈ្មោះ & ចែកក្រុមដោយចៃដន្យ",
    tabSpinNames: "ចាប់ឈ្មោះ",
    tabSpinGroups: "ចាប់ក្រុម",
    tabTeamMaker: "បែងចែកក្រុម",
    spinBtn: "បង្វិល",
    spinNow: "ចាប់ផ្តើមបង្វិល",
    shuffle: "ច្របល់បញ្ជី",
    sort: "រៀបតាមលំដាប់",
    listTitleNames: "បញ្ជីឈ្មោះចូលរួម",
    listTitleGroups: "បញ្ជីឈ្មោះក្រុម",
    presetPrompt: "⚡ គំរូបញ្ជី (Presets)...",
    presetKhmerStudents: "សិស្ស (គំរូឈ្មោះខ្មែរ)",
    presetTeams: "ក្រុមទី១ ដល់ ក្រុមទី៦",
    presetNumbers: "លេខរង្វាន់ (១ ដល់ ២០)",
    presetPrizes: "រង្វាន់ & ភេសជ្ជៈ",
    defaultClass: "🏫 ថ្នាក់ទូទៅ (Default)",
    saveClassBtn: "រក្សាទុកថ្នាក់រៀន",
    textareaPlaceholder: "បញ្ចូលឈ្មោះមួយក្នុងមួយបន្ទាត់...",
    clearAll: "សម្អាត",
    copyList: "ចម្លងបញ្ជី",
    resetDefaults: "កំណត់ដើម",
    historyTitle: "🏆 ប្រវត្តិអ្នកឈ្នះ",
    clearHistory: "លុបប្រវត្តិ",
    noWinnersYet: "មិនទាន់មានប្រវត្តិទេ",
    teamMakerTitle: "🔀 បែងចែកក្រុមដោយស្វ័យប្រវត្តិ",
    teamMakerSubtitle: "បញ្ចូលឈ្មោះទាំងអស់ រួចជ្រើសរើសចំនួនក្រុមដែលអ្នកចង់បង្កើត",
    teamNamesLabel: "បញ្ជីសមាជិកទាំងអស់",
    teamNamesPlaceholder: "បញ្ចូលឈ្មោះសមាជិក (មួយឈ្មោះក្នុងមួយបន្ទាត់)...",
    syncFromWheel: "ទាញយកពីកង",
    divideMethod: "របៀបបែងចែកក្រុម៖",
    byNumGroups: "តាមចំនួនក្រុម",
    byNumMembers: "តាមចំនួននាក់/ក្រុម",
    numGroupsLabel: "ចំនួនក្រុមដែលចង់បាន៖",
    numMembersLabel: "ចំនួនសមាជិកក្នុងមួយក្រុម៖",
    groupNamingStyle: "ទម្រង់ឈ្មោះក្រុម៖",
    namingKhmerNums: "ក្រុមទី ១, ក្រុមទី ២...",
    namingEnNums: "Group 1, Group 2...",
    namingLetters: "Team A, Team B, Team C...",
    namingColors: "ក្រុមពណ៌ (ក្រហម, ខៀវ, បៃតង...)",
    autoAssignRoles: "👑 បែងចែកតួនាទីក្នុងក្រុមស្វ័យប្រវត្ត (Leader, Secretary...)",
    generateTeamsNow: "បែងចែកក្រុមភ្លាមៗ",
    resultsTitle: "🎉 លទ្ធផលការបែងចែកក្រុម",
    copyResults: "ចម្លងលទ្ធផល",
    reshuffle: "ចែកម្តងទៀត",
    exportCsv: "Excel / CSV",
    winnerAnnounce: "អបអរសាទរ! អ្នកឈ្នះគឺ",
    winnerPrompt: "តើអ្នកចង់ដកឈ្មោះនេះចេញពីកង ឬរក្សាទុក?",
    removeWinner: "ដកឈ្មោះចេញ",
    keepWinner: "រក្សាទុកក្នុងកង",
    thinkingTime: "ពេលគិតពិចារណា៖",
    pauseTimer: "ផ្អាក",
    resumeTimer: "បន្ត",
    challengePrompt: "កិច្ចការ/សំនួរចៃដន្យ៖",
    askFriend: "សុំជំនួយពីមិត្ត (Lifeline)",
    awardStar: "+1 ផ្កាយ ⭐",
    copiedAlert: "បានចម្លងទៅក្ដារតម្បៀតខ្ទាស់ (Clipboard)!",
    needTwoItems: "សូមបញ្ចូលយ៉ាងហោចណាស់ ២ ឈ្មោះដើម្បីបង្វិលកង!",
    needMembersForTeams: "សូមបញ្ចូលឈ្មោះសមាជិកយ៉ាងហោចណាស់ ២ នាក់!",
    groupsSuffix: " ក្រុម",
    membersSuffix: " នាក់",
    promptClassName: "សូមបញ្ចូលឈ្មោះថ្នាក់រៀនថ្មី (ឧ. ថ្នាក់ទី ១០A):",
    classSavedSuccess: "បានរក្សាទុកថ្នាក់រៀនដោយជោគជ័យ!",
    roleLeader: "👑 ប្រធានក្រុម",
    roleSecretary: "✍️ លេខា/កត់ត្រា",
    roleSpeaker: "🎤 អ្នករាយការណ៍",
    roleTimer: "⏱️ មើលម៉ោង",
    roleMember: "🤝 សមាជិក",
    friendHelpNotice: "🤝 មិត្តរួមថ្នាក់ដែលត្រូវបានជ្រើសរើសជួយគឺ៖ ",
    allRightsReserved: "រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ AC Mart · All Rights Reserved",
    shareWinnerTelegram: "ផ្ញើអ្នកឈ្នះទៅ Telegram",
    scanQrTitle: "ស្កេន QR Code ដើម្បីបើកកម្មវិធី",
    scanQrSubtitle: "ប្រើកាមេរ៉ាទូរស័ព្ទដើម្បីបើកលើទូរស័ព្ទ ឬ iPad",
    shareViaTelegram: "ផ្ញើតាម Telegram",
    copyLink: "ចម្លងតំណភ្ជាប់"
  },
  en: {
    appTitle: "Lucky Spin Wheel",
    appSubtitle: "Random Name Picker & Team Generator",
    tabSpinNames: "Spin Names",
    tabSpinGroups: "Spin Groups",
    tabTeamMaker: "Team Maker",
    spinBtn: "SPIN",
    spinNow: "Spin Wheel Now",
    shuffle: "Shuffle",
    sort: "Sort A-Z",
    listTitleNames: "Participants List",
    listTitleGroups: "Groups List",
    presetPrompt: "⚡ Choose Preset...",
    presetKhmerStudents: "Students (Khmer Names)",
    presetTeams: "Group 1 to Group 6",
    presetNumbers: "Lucky Numbers (1 to 20)",
    presetPrizes: "Prizes & Drinks",
    defaultClass: "🏫 General Class (Default)",
    saveClassBtn: "Save Classroom",
    textareaPlaceholder: "Enter one name per line...",
    clearAll: "Clear",
    copyList: "Copy List",
    resetDefaults: "Reset",
    historyTitle: "🏆 Winner History",
    clearHistory: "Clear History",
    noWinnersYet: "No winners yet",
    teamMakerTitle: "🔀 Automatic Team Generator",
    teamMakerSubtitle: "Paste your participant names and quickly split them into random balanced teams",
    teamNamesLabel: "All Members List",
    teamNamesPlaceholder: "Enter member names (one per line)...",
    syncFromWheel: "Import from Wheel",
    divideMethod: "Grouping Method:",
    byNumGroups: "By Number of Groups",
    byNumMembers: "By Members per Group",
    numGroupsLabel: "Target Number of Groups:",
    numMembersLabel: "Target Members per Group:",
    groupNamingStyle: "Team Naming Style:",
    namingKhmerNums: "ក្រុមទី ១, ក្រុមទី ២...",
    namingEnNums: "Group 1, Group 2...",
    namingLetters: "Team A, Team B, Team C...",
    namingColors: "Color Teams (Red, Blue, Green...)",
    autoAssignRoles: "👑 Auto-Assign Roles (Leader, Secretary...)",
    generateTeamsNow: "Generate Teams Now",
    resultsTitle: "🎉 Grouping Results",
    copyResults: "Copy Results",
    reshuffle: "Re-shuffle",
    exportCsv: "Excel / CSV",
    winnerAnnounce: "Congratulations! The Winner Is",
    winnerPrompt: "Would you like to remove or keep this name in the wheel?",
    removeWinner: "Remove Name",
    keepWinner: "Keep in Wheel",
    thinkingTime: "Think Time:",
    pauseTimer: "Pause",
    resumeTimer: "Resume",
    challengePrompt: "Random Task / Question:",
    askFriend: "Ask a Friend (Lifeline)",
    awardStar: "+1 Star ⭐",
    copiedAlert: "Copied to clipboard!",
    needTwoItems: "Please enter at least 2 entries to spin the wheel!",
    needMembersForTeams: "Please enter at least 2 names to generate teams!",
    groupsSuffix: " Groups",
    membersSuffix: " Members",
    promptClassName: "Enter classroom name (e.g. Grade 10A, CS101):",
    classSavedSuccess: "Classroom saved successfully!",
    roleLeader: "👑 Team Leader",
    roleSecretary: "✍️ Secretary",
    roleSpeaker: "🎤 Presenter",
    roleTimer: "⏱️ Timekeeper",
    roleMember: "🤝 Member",
    friendHelpNotice: "🤝 Selected helper peer is: ",
    allRightsReserved: "AC Mart · All Rights Reserved",
    shareWinnerTelegram: "Share Winner to Telegram",
    scanQrTitle: "Scan QR Code to Open App",
    scanQrSubtitle: "Point your phone camera to open on mobile or tablet",
    shareViaTelegram: "Share via Telegram",
    copyLink: "Copy Link"
  }
};

const APP_URL = "https://luckywheel-ac.vercel.app";

// Pedagogical Classroom Challenges
const PEDAGOGICAL_CHALLENGES = {
  km: [
    "📖 សង្ខេបចំណុចសំខាន់នៃមេរៀនដែលទើបតែរៀន",
    "💡 ផ្តល់ឧទាហរណ៍ជាក់ស្តែង ១ ទាក់ទងនឹងមេរៀន",
    "❓ សួរសំនួរ ១ ទៅកាន់មិត្តភក្តិក្នុងថ្នាក់",
    "✨ ពន្យល់ខ្លឹមសារនេះ តាមការយល់ឃើញផ្ទាល់ខ្លួន",
    "🎯 ដោះស្រាយលំហាត់/សំណួរជាជំហានបន្ទាប់",
    "🔍 រកចំណុចខុស និងកែតម្រូវឱ្យត្រូវឡើងវិញ",
    "🗣️ ពិភាក្សាជាមួយមិត្តក្បែរខ្លួន ៣០ វិនាទី រួចឆ្លើយ"
  ],
  en: [
    "📖 Summarize the main key takeaway of the lesson",
    "💡 Provide 1 real-life practical example",
    "❓ Ask a thoughtful question to a classmate",
    "✨ Explain this concept in your own words",
    "🎯 Solve the next problem/step on screen",
    "🔍 Identify what's missing or needs correction",
    "🗣️ Turn & talk to a neighbor for 30s, then share"
  ]
};

// Presets
const PRESETS = {
  "khmer-students": [
    "សុខា (Sokha)", "បូផា (Bopha)", "តារា (Dara)", "ចិន្តា (Chinda)",
    "វិបុល (Vibol)", "កញ្ញា (Kanya)", "រតនា (Rattana)", "ចាន់ណា (Channa)",
    "សុវណ្ណ (Sovann)", "ពិសិដ្ឋ (Piseth)", "ធីតា (Thida)", "មុន្នី (Mony)"
  ],
  "team-alpha": [
    "ក្រុមទី ១ (Group 1)", "ក្រុមទី ២ (Group 2)", "ក្រុមទី ៣ (Group 3)",
    "ក្រុមទី ៤ (Group 4)", "ក្រុមទី ៥ (Group 5)", "ក្រុមទី ៦ (Group 6)"
  ],
  "lucky-numbers": Array.from({ length: 20 }, (_, i) => `លេខ ${i + 1} (#${i + 1})`),
  "prizes": [
    "🎁 រង្វាន់ធំ (Grand Prize)", "☕ កាហ្វេ ១ កែវ (Free Coffee)", "🥤 តែគុជ ១ កែវ (Boba Tea)",
    "💵 លុយសុទ្ធ 50$ (Cash $50)", "🍕 ភីហ្សា ១ ថាស (Pizza Box)", "🍿 បង្វិលម្តងទៀត (Spin Again)"
  ]
};

// Slices colors
const SLICE_COLORS = [
  "#4f46e5", "#06b6d4", "#ec4899", "#f59e0b", 
  "#10b981", "#8b5cf6", "#f43f5e", "#14b8a6", 
  "#3b82f6", "#eab308", "#d946ef", "#0284c7"
];

// Team cards visual themes
const TEAM_COLOR_THEMES = [
  { bg: "linear-gradient(135deg, rgba(79, 70, 229, 0.35), rgba(30, 41, 59, 0.7))", border: "#6366f1", badge: "#818cf8" },
  { bg: "linear-gradient(135deg, rgba(6, 182, 212, 0.35), rgba(30, 41, 59, 0.7))", border: "#06b6d4", badge: "#67e8f9" },
  { bg: "linear-gradient(135deg, rgba(236, 72, 153, 0.35), rgba(30, 41, 59, 0.7))", border: "#ec4899", badge: "#f472b6" },
  { bg: "linear-gradient(135deg, rgba(245, 158, 11, 0.35), rgba(30, 41, 59, 0.7))", border: "#f59e0b", badge: "#fbbf24" },
  { bg: "linear-gradient(135deg, rgba(16, 185, 129, 0.35), rgba(30, 41, 59, 0.7))", border: "#10b981", badge: "#34d399" },
  { bg: "linear-gradient(135deg, rgba(139, 92, 246, 0.35), rgba(30, 41, 59, 0.7))", border: "#8b5cf6", badge: "#a78bfa" }
];

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================
let currentLang = localStorage.getItem("lucky_wheel_lang") || "km";
let currentMode = "spin-names";
let soundEnabled = true;

let savedClasses = JSON.parse(localStorage.getItem("lucky_wheel_classes") || "{}");

let namesList = [
  "តារា (Dara)", "សុខា (Sokha)", "បូផា (Bopha)", "វិបុល (Vibol)", 
  "កញ្ញា (Kanya)", "ចិន្តា (Chinda)", "រតនា (Rattana)", "ពិសិដ្ឋ (Piseth)"
];

let groupsList = [
  "ក្រុមទី ១ (Team Alpha)", "ក្រុមទី ២ (Team Bravo)", "ក្រុមទី ៣ (Team Charlie)", 
  "ក្រុមទី ៤ (Team Delta)", "ក្រុមទី ៥ (Team Echo)", "ក្រុមទី ៦ (Team Foxtrot)"
];

let winnersHistory = [];
let currentWinnerIndex = -1;

// Wheel physics & animation state
let wheelCanvas = null;
let wheelCtx = null;
let currentRotation = 0;
let isSpinning = false;
let lastTickAngle = 0;

// Countdown Timer State
let countdownTimerId = null;
let countdownRemainingSeconds = 30;
let isCountdownPaused = false;

// Audio Context
let audioCtx = null;
let drumrollInterval = null;

// ==========================================================================
// 3. ENHANCED SOUND SYNTHESIS (TICKS, DRUMROLL & CROWD APPLAUSE)
// ==========================================================================
function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
}

function playTickSound() {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === "suspended") audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(680, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(280, audioCtx.currentTime + 0.035);

    gain.gain.setValueAtTime(0.28, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.035);
  } catch (e) {
    console.warn("Audio error:", e);
  }
}

// Suspense Drumroll Effect while wheel is spinning
function startDrumroll() {
  if (!soundEnabled) return;
  stopDrumroll();
  initAudio();
  if (!audioCtx) return;

  drumrollInterval = setInterval(() => {
    try {
      if (audioCtx.state === "suspended") audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(140 + Math.random() * 40, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.045);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.045);
    } catch (e) {}
  }, 75);
}

function stopDrumroll() {
  if (drumrollInterval) {
    clearInterval(drumrollInterval);
    drumrollInterval = null;
  }
}

// Grand Winner Fanfare & Crowd Cheer
function playWinSound() {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === "suspended") audioCtx.resume();

    // 1. Brass chords fanfare
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const startTime = audioCtx.currentTime + idx * 0.09;

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.35, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.6);
    });

    // 2. Crowd Cheer / Clap simulation
    for (let c = 0; c < 8; c++) {
      const clapOsc = audioCtx.createOscillator();
      const clapGain = audioCtx.createGain();
      const clapTime = audioCtx.currentTime + 0.3 + c * 0.08 + Math.random() * 0.03;

      clapOsc.type = "sine";
      clapOsc.frequency.setValueAtTime(800 + Math.random() * 400, clapTime);
      clapGain.gain.setValueAtTime(0.08, clapTime);
      clapGain.gain.exponentialRampToValueAtTime(0.001, clapTime + 0.05);

      clapOsc.connect(clapGain);
      clapGain.connect(audioCtx.destination);

      clapOsc.start(clapTime);
      clapOsc.stop(clapTime + 0.05);
    }
  } catch (e) {
    console.warn("Win audio error:", e);
  }
}

// ==========================================================================
// 4. LANGUAGE SWITCHING & DOM LOCALIZATION
// ==========================================================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lucky_wheel_lang", lang);

  document.documentElement.lang = lang;
  document.body.className = `lang-${lang}`;

  document.getElementById("langKm").classList.toggle("active", lang === "km");
  document.getElementById("langEn").classList.toggle("active", lang === "en");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  const entriesTa = document.getElementById("entriesTextarea");
  if (entriesTa) entriesTa.placeholder = TRANSLATIONS[lang].textareaPlaceholder;
  const teamTa = document.getElementById("teamNamesInput");
  if (teamTa) teamTa.placeholder = TRANSLATIONS[lang].teamNamesPlaceholder;

  updateSidebarTitle();
  updateStepperLabel();
  rollNewChallenge();
  drawWheel();
}

function updateSidebarTitle() {
  const titleEl = document.getElementById("sidebarListTitle");
  if (!titleEl) return;
  if (currentMode === "spin-groups") {
    titleEl.textContent = TRANSLATIONS[currentLang].listTitleGroups;
  } else {
    titleEl.textContent = TRANSLATIONS[currentLang].listTitleNames;
  }
}

function updateStepperLabel() {
  const divideMethod = document.getElementById("divideByGroupsBtn").classList.contains("active") ? "groups" : "members";
  const label = document.getElementById("stepperLabel");
  if (label) {
    label.textContent = divideMethod === "groups" 
      ? TRANSLATIONS[currentLang].numGroupsLabel 
      : TRANSLATIONS[currentLang].numMembersLabel;
  }
}

// ==========================================================================
// 5. WHEEL CANVAS RENDERING (WITH KANTUMRUY PRO SUPPORT)
// ==========================================================================
function getActiveItems() {
  return currentMode === "spin-groups" ? groupsList : namesList;
}

function setActiveItems(items) {
  if (currentMode === "spin-groups") {
    groupsList = items;
  } else {
    namesList = items;
  }
  updateTextareaFromState();
  updateItemCount();
  drawWheel();
}

function updateTextareaFromState() {
  const items = getActiveItems();
  document.getElementById("entriesTextarea").value = items.join("\n");
}

function updateItemCount() {
  const items = getActiveItems();
  document.getElementById("itemCountBadge").textContent = items.length;
}

function drawWheel() {
  if (!wheelCanvas || !wheelCtx) return;

  const items = getActiveItems();
  const width = wheelCanvas.width;
  const height = wheelCanvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = width / 2 - 20;

  wheelCtx.clearRect(0, 0, width, height);

  if (items.length === 0) {
    wheelCtx.beginPath();
    wheelCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    wheelCtx.fillStyle = "#1e293b";
    wheelCtx.fill();
    wheelCtx.lineWidth = 6;
    wheelCtx.strokeStyle = "#334155";
    wheelCtx.stroke();

    wheelCtx.fillStyle = "#94a3b8";
    wheelCtx.font = "bold 22px 'Kantumruy Pro', Outfit, sans-serif";
    wheelCtx.textAlign = "center";
    wheelCtx.textBaseline = "middle";
    wheelCtx.fillText(currentLang === "km" ? "សូមបញ្ចូលឈ្មោះ..." : "Add names to spin...", centerX, centerY);
    return;
  }

  const sliceAngle = (2 * Math.PI) / items.length;

  wheelCtx.save();
  wheelCtx.translate(centerX, centerY);
  wheelCtx.rotate(currentRotation);

  // 1. Draw Slices
  for (let i = 0; i < items.length; i++) {
    const startAngle = i * sliceAngle;
    const endAngle = startAngle + sliceAngle;
    const color = SLICE_COLORS[i % SLICE_COLORS.length];

    wheelCtx.beginPath();
    wheelCtx.moveTo(0, 0);
    wheelCtx.arc(0, 0, radius, startAngle, endAngle);
    wheelCtx.closePath();

    wheelCtx.fillStyle = color;
    wheelCtx.fill();

    wheelCtx.lineWidth = 2.5;
    wheelCtx.strokeStyle = "#0f172a";
    wheelCtx.stroke();

    // 2. Draw Text in Slice (Kantumruy Pro)
    wheelCtx.save();
    const textAngle = startAngle + sliceAngle / 2;
    wheelCtx.rotate(textAngle);
    wheelCtx.textAlign = "right";
    wheelCtx.textBaseline = "middle";
    wheelCtx.fillStyle = "#ffffff";
    wheelCtx.shadowColor = "rgba(0, 0, 0, 0.65)";
    wheelCtx.shadowBlur = 4;

    const fontSize = items.length > 24 ? 13 : items.length > 14 ? 16 : 19;
    wheelCtx.font = `600 ${fontSize}px 'Kantumruy Pro', Outfit, sans-serif`;

    let itemText = items[i];
    if (itemText.length > 20) {
      itemText = itemText.substring(0, 18) + "...";
    }

    wheelCtx.fillText(itemText, radius - 28, 0);
    wheelCtx.restore();
  }

  // 3. Draw Outer Rim
  wheelCtx.beginPath();
  wheelCtx.arc(0, 0, radius, 0, 2 * Math.PI);
  wheelCtx.lineWidth = 10;
  wheelCtx.strokeStyle = "#1e1b4b";
  wheelCtx.stroke();

  const totalPins = Math.max(12, items.length);
  const pinStep = (2 * Math.PI) / totalPins;
  for (let p = 0; p < totalPins; p++) {
    const pinAngle = p * pinStep;
    const pinX = Math.cos(pinAngle) * (radius - 5);
    const pinY = Math.sin(pinAngle) * (radius - 5);

    wheelCtx.beginPath();
    wheelCtx.arc(pinX, pinY, 4, 0, 2 * Math.PI);
    wheelCtx.fillStyle = "#fbbf24";
    wheelCtx.fill();
    wheelCtx.lineWidth = 1;
    wheelCtx.strokeStyle = "#ffffff";
    wheelCtx.stroke();
  }

  wheelCtx.restore();
}

// ==========================================================================
// 6. WHEEL SPINNING ENGINE & PHYSICS
// ==========================================================================
function spinWheel() {
  const items = getActiveItems();
  if (items.length < 2) {
    alert(TRANSLATIONS[currentLang].needTwoItems);
    return;
  }
  if (isSpinning) return;

  initAudio();
  isSpinning = true;
  startDrumroll();

  document.getElementById("spinCenterBtn").disabled = true;
  document.getElementById("spinActionBtn").disabled = true;

  const fullRotations = (5 + Math.random() * 4) * 2 * Math.PI;
  const randomOffset = Math.random() * 2 * Math.PI;
  const targetRotation = currentRotation + fullRotations + randomOffset;

  const startRotation = currentRotation;
  const spinDuration = 4500 + Math.random() * 1500;
  const startTime = performance.now();

  const pointerEl = document.querySelector(".wheel-pointer");
  const sliceAngle = (2 * Math.PI) / items.length;

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / spinDuration, 1);

    const easeOut = 1 - Math.pow(1 - progress, 3);
    currentRotation = startRotation + (targetRotation - startRotation) * easeOut;

    const pointerAngle = 0;
    const normalizedAngle = (pointerAngle - currentRotation) % (2 * Math.PI);
    const positiveAngle = normalizedAngle < 0 ? normalizedAngle + 2 * Math.PI : normalizedAngle;
    const currentSlice = Math.floor(positiveAngle / sliceAngle);

    if (currentSlice !== lastTickAngle) {
      lastTickAngle = currentSlice;
      playTickSound();
      if (pointerEl) {
        pointerEl.style.transform = "rotate(-14deg)";
        setTimeout(() => { if (pointerEl) pointerEl.style.transform = "rotate(0deg)"; }, 45);
      }
    }

    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      stopDrumroll();
      isSpinning = false;
      document.getElementById("spinCenterBtn").disabled = false;
      document.getElementById("spinActionBtn").disabled = false;
      finishSpin();
    }
  }

  requestAnimationFrame(animate);
}

function finishSpin() {
  const items = getActiveItems();
  const sliceAngle = (2 * Math.PI) / items.length;

  const pointerAngle = 0;
  const normalizedAngle = (pointerAngle - currentRotation) % (2 * Math.PI);
  const positiveAngle = normalizedAngle < 0 ? normalizedAngle + 2 * Math.PI : normalizedAngle;
  currentWinnerIndex = Math.floor(positiveAngle / sliceAngle) % items.length;

  const winnerName = items[currentWinnerIndex];

  playWinSound();
  launchConfetti();

  addToHistory(winnerName);
  showWinnerModal(winnerName);
}

function launchConfetti(originY = 0.6) {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 85,
      spread: 70,
      origin: { y: originY }
    });

    setTimeout(() => {
      confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } });
    }, 250);
  }
}

// ==========================================================================
// 7. PEDAGOGICAL WINNER MODAL & COUNTDOWN TIMER
// ==========================================================================
function showWinnerModal(name) {
  const modal = document.getElementById("winnerModalOverlay");
  const nameDisplay = document.getElementById("winnerNameDisplay");
  nameDisplay.textContent = name;

  startCountdown(30);
  rollNewChallenge();

  modal.classList.remove("hidden");
}

function hideWinnerModal() {
  clearInterval(countdownTimerId);
  const modal = document.getElementById("winnerModalOverlay");
  modal.classList.add("hidden");
}

function startCountdown(seconds) {
  clearInterval(countdownTimerId);
  countdownRemainingSeconds = seconds;
  isCountdownPaused = false;
  updateTimerUI();

  countdownTimerId = setInterval(() => {
    if (!isCountdownPaused) {
      countdownRemainingSeconds--;
      updateTimerUI();

      if (countdownRemainingSeconds <= 0) {
        clearInterval(countdownTimerId);
        playTickSound();
      }
    }
  }, 1000);
}

function updateTimerUI() {
  const clockEl = document.getElementById("timerClockDisplay");
  const toggleBtn = document.getElementById("timerToggleBtn");
  if (!clockEl) return;

  clockEl.textContent = `${countdownRemainingSeconds}s`;
  clockEl.classList.toggle("timer-warning", countdownRemainingSeconds <= 5);

  if (toggleBtn) {
    toggleBtn.innerHTML = isCountdownPaused 
      ? `▶️ <span>${TRANSLATIONS[currentLang].resumeTimer}</span>` 
      : `⏸️ <span>${TRANSLATIONS[currentLang].pauseTimer}</span>`;
  }
}

function rollNewChallenge() {
  const list = PEDAGOGICAL_CHALLENGES[currentLang] || PEDAGOGICAL_CHALLENGES["km"];
  const randomTask = list[Math.floor(Math.random() * list.length)];
  const displayEl = document.getElementById("challengeTextDisplay");
  if (displayEl) {
    displayEl.textContent = randomTask;
  }
}

function triggerAskFriend() {
  const items = getActiveItems().filter((_, i) => i !== currentWinnerIndex);
  if (items.length === 0) return;

  const randomHelper = items[Math.floor(Math.random() * items.length)];
  const displayEl = document.getElementById("challengeTextDisplay");
  if (displayEl) {
    displayEl.innerHTML = `<strong>${TRANSLATIONS[currentLang].friendHelpNotice}</strong> <span style="color:#38bdf8;">${escapeHtml(randomHelper)}</span> 🤝`;
  }
  playWinSound();
}

function triggerAwardStar() {
  if (winnersHistory.length > 0) {
    winnersHistory[0].stars = (winnersHistory[0].stars || 0) + 1;
    renderHistory();
    launchConfetti(0.4);
  }
}

function addToHistory(name) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  winnersHistory.unshift({ name, time: timeStr, stars: 0 });
  renderHistory();
}

function renderHistory() {
  const container = document.getElementById("historyList");
  if (!container) return;

  if (winnersHistory.length === 0) {
    container.innerHTML = `<div class="empty-history">${TRANSLATIONS[currentLang].noWinnersYet}</div>`;
    return;
  }

  container.innerHTML = winnersHistory.map((item, idx) => `
    <div class="history-item">
      <span class="history-rank">#${winnersHistory.length - idx}</span>
      <span class="history-name">${escapeHtml(item.name)}${item.stars ? `<span class="stars-count-tag">⭐ +${item.stars}</span>` : ""}</span>
      <span class="history-time">${item.time}</span>
    </div>
  `).join("");
}

// ==========================================================================
// 8. TEAM MAKER GENERATOR WITH COOPERATIVE ROLES
// ==========================================================================
let currentGeneratedTeams = [];

function generateTeams() {
  const inputVal = document.getElementById("teamNamesInput").value;
  const members = inputVal
    .split("\n")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  if (members.length < 2) {
    alert(TRANSLATIONS[currentLang].needMembersForTeams);
    return;
  }

  const shuffled = [...members];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const divideMethod = document.getElementById("divideByGroupsBtn").classList.contains("active") ? "groups" : "members";
  const countVal = Math.max(1, parseInt(document.getElementById("divideCountInput").value, 10) || 2);

  let numGroups = 2;
  if (divideMethod === "groups") {
    numGroups = Math.min(countVal, shuffled.length);
  } else {
    numGroups = Math.max(1, Math.ceil(shuffled.length / countVal));
  }

  const groups = Array.from({ length: numGroups }, () => []);
  shuffled.forEach((member, index) => {
    groups[index % numGroups].push(member);
  });

  currentGeneratedTeams = groups;
  renderTeamCards(groups);
  launchConfetti();
}

function getGroupTitle(idx, total) {
  const style = document.getElementById("groupNamingSelect").value;
  if (style === "english-nums") {
    return `Group ${idx + 1}`;
  } else if (style === "team-letters") {
    const letter = String.fromCharCode(65 + (idx % 26));
    return `Team ${letter}`;
  } else if (style === "colors") {
    const colorsKm = ["ក្រុមពណ៌ក្រហម (Red)", "ក្រុមពណ៌ខៀវ (Blue)", "ក្រុមពណ៌បៃតង (Green)", "ក្រុមពណ៌លឿង (Yellow)", "ក្រុមពណ៌ស្វាយ (Purple)", "ក្រុមពណ៌ទឹកក្រូច (Orange)"];
    const colorsEn = ["Red Team", "Blue Team", "Green Team", "Yellow Team", "Purple Team", "Orange Team"];
    const list = currentLang === "km" ? colorsKm : colorsEn;
    return list[idx % list.length];
  } else {
    const khmerDigits = ["១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩", "១០", "១១", "១២", "១៣", "១៤", "១៥", "១៦", "១៧", "១៨", "១៩", "២០"];
    const num = khmerDigits[idx] || (idx + 1);
    return `ក្រុមទី ${num}`;
  }
}

function getMemberRoleBadge(memberIndex) {
  const autoAssign = document.getElementById("autoAssignRolesCheckbox").checked;
  if (!autoAssign) return "";

  const roles = [
    { name: TRANSLATIONS[currentLang].roleLeader, class: "role-leader" },
    { name: TRANSLATIONS[currentLang].roleSecretary, class: "role-secretary" },
    { name: TRANSLATIONS[currentLang].roleSpeaker, class: "role-speaker" },
    { name: TRANSLATIONS[currentLang].roleTimer, class: "role-timer" }
  ];

  const role = roles[memberIndex] || { name: TRANSLATIONS[currentLang].roleMember, class: "role-member" };
  return `<span class="team-member-role-badge ${role.class}">${role.name}</span>`;
}

function renderTeamCards(groups) {
  const container = document.getElementById("teamsGrid");
  const countBadge = document.getElementById("generatedGroupsCountBadge");

  countBadge.textContent = `${groups.length}${TRANSLATIONS[currentLang].groupsSuffix}`;
  container.innerHTML = "";

  groups.forEach((teamMembers, idx) => {
    const title = getGroupTitle(idx, groups.length);
    const theme = TEAM_COLOR_THEMES[idx % TEAM_COLOR_THEMES.length];

    const card = document.createElement("div");
    card.className = "team-card";
    card.style.background = theme.bg;
    card.style.borderColor = theme.border;

    card.innerHTML = `
      <div class="team-card-header">
        <span class="team-card-title">${escapeHtml(title)}</span>
        <span class="team-card-badge" style="background:${theme.badge}22; color:${theme.badge}; border: 1px solid ${theme.badge}55;">
          ${teamMembers.length}${TRANSLATIONS[currentLang].membersSuffix}
        </span>
      </div>
      <ul class="team-card-members">
        ${teamMembers.map((m, mIdx) => `
          <li class="team-member-item">
            <span>${escapeHtml(m)}</span>
            ${getMemberRoleBadge(mIdx)}
          </li>
        `).join("")}
      </ul>
    `;

    container.appendChild(card);
  });

  document.getElementById("teamResultsSection").scrollIntoView({ behavior: "smooth" });
}

function copyTeamsToClipboard() {
  const cards = document.querySelectorAll(".team-card");
  if (cards.length === 0) return;

  let textResult = `📋 ${TRANSLATIONS[currentLang].resultsTitle}\n=====================\n\n`;
  cards.forEach(card => {
    const title = card.querySelector(".team-card-title").textContent.trim();
    const members = Array.from(card.querySelectorAll(".team-member-item")).map(li => `- ${li.textContent.trim().replace(/\s+/g, ' ')}`);
    textResult += `${title}:\n${members.join("\n")}\n\n`;
  });

  navigator.clipboard.writeText(textResult).then(() => {
    alert(TRANSLATIONS[currentLang].copiedAlert);
  });
}

// ==========================================================================
// 9. EXCEL / CSV EXPORT WITH UTF-8 BOM
// ==========================================================================
function downloadCsv(filename, csvContent) {
  // UTF-8 BOM (\uFEFF) ensures Khmer Unicode renders cleanly in Microsoft Excel
  const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportTeamsToCsv() {
  if (currentGeneratedTeams.length === 0) {
    generateTeams();
  }
  if (currentGeneratedTeams.length === 0) return;

  let csv = "Group,Member Name,Role\n";
  currentGeneratedTeams.forEach((teamMembers, idx) => {
    const groupName = getGroupTitle(idx, currentGeneratedTeams.length);
    teamMembers.forEach((member, mIdx) => {
      const roles = [
        TRANSLATIONS[currentLang].roleLeader,
        TRANSLATIONS[currentLang].roleSecretary,
        TRANSLATIONS[currentLang].roleSpeaker,
        TRANSLATIONS[currentLang].roleTimer
      ];
      const role = roles[mIdx] || TRANSLATIONS[currentLang].roleMember;
      csv += `"${groupName}","${member.replace(/"/g, '""')}","${role}"\n`;
    });
  });

  downloadCsv(`AC-Mart-Teams-${new Date().toISOString().slice(0, 10)}.csv`, csv);
}

function exportHistoryToCsv() {
  if (winnersHistory.length === 0) {
    alert(TRANSLATIONS[currentLang].noWinnersYet);
    return;
  }

  let csv = "Rank,Winner Name,Time,Stars\n";
  winnersHistory.forEach((item, idx) => {
    csv += `"#${winnersHistory.length - idx}","${item.name.replace(/"/g, '""')}","${item.time}","${item.stars || 0}"\n`;
  });

  downloadCsv(`AC-Mart-Winners-${new Date().toISOString().slice(0, 10)}.csv`, csv);
}

// ==========================================================================
// 10. TELEGRAM SHARING INTEGRATION
// ==========================================================================
function shareTeamsToTelegram() {
  const cards = document.querySelectorAll(".team-card");
  if (cards.length === 0) {
    generateTeams();
  }
  let message = `🎯 *លទ្ធផលការបែងចែកក្រុម (AC Mart Lucky Wheel)*\n\n`;
  cards.forEach(card => {
    const title = card.querySelector(".team-card-title").textContent.trim();
    const members = Array.from(card.querySelectorAll(".team-member-item"))
      .map(li => `• ${li.textContent.trim().replace(/\s+/g, ' ')}`)
      .join("\n");
    message += `👥 *${title}*:\n${members}\n\n`;
  });

  const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(APP_URL)}&text=${encodeURIComponent(message)}`;
  window.open(tgUrl, "_blank");
}

function shareWinnerToTelegram() {
  const winnerName = document.getElementById("winnerNameDisplay").textContent.trim();
  const message = `🎉 *អបអរសាទរ! អ្នកឈ្នះការចាប់ឆ្នោត AC Mart Lucky Wheel គឺ៖*\n\n🏆 *${winnerName}*\n\n👉 ចូលរួមលេងបន្ត៖ ${APP_URL}`;
  const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(APP_URL)}&text=${encodeURIComponent(message)}`;
  window.open(tgUrl, "_blank");
}

function shareAppViaTelegram() {
  const message = `🎡 សូមអញ្ជើញចូលរួមកម្មវិធីបង្វិលកង ចាប់ឆ្នោត & ចែកក្រុម ដោយឥតគិតថ្លៃ៖`;
  const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(APP_URL)}&text=${encodeURIComponent(message)}`;
  window.open(tgUrl, "_blank");
}

// ==========================================================================
// 11. QR CODE MODAL MANAGEMENT
// ==========================================================================
function openQrModal() {
  document.getElementById("qrModalOverlay").classList.remove("hidden");
}

function closeQrModal() {
  document.getElementById("qrModalOverlay").classList.add("hidden");
}

function copyAppUrl() {
  navigator.clipboard.writeText(APP_URL).then(() => {
    alert(TRANSLATIONS[currentLang].copiedAlert);
  });
}

// ==========================================================================
// 12. CLASSROOM MANAGER (SAVE / LOAD CLASSES)
// ==========================================================================
function populateClassSelector() {
  const select = document.getElementById("classSelector");
  select.innerHTML = `<option value="default">${TRANSLATIONS[currentLang].defaultClass}</option>`;

  Object.keys(savedClasses).forEach(className => {
    const opt = document.createElement("option");
    opt.value = className;
    opt.textContent = `🏫 ${className} (${savedClasses[className].length})`;
    select.appendChild(opt);
  });
}

function saveCurrentClass() {
  const name = prompt(TRANSLATIONS[currentLang].promptClassName);
  if (!name || !name.trim()) return;

  const cleanName = name.trim();
  savedClasses[cleanName] = [...getActiveItems()];
  localStorage.setItem("lucky_wheel_classes", JSON.stringify(savedClasses));
  populateClassSelector();
  document.getElementById("classSelector").value = cleanName;
  alert(TRANSLATIONS[currentLang].classSavedSuccess);
}

function onClassSelected(className) {
  if (className === "default") {
    setActiveItems([...PRESETS["khmer-students"]]);
  } else if (savedClasses[className]) {
    setActiveItems([...savedClasses[className]]);
  }
}

// Zero-Database Backup & Restore (.json)
function backupAllData() {
  const backup = {
    version: "1.0",
    savedClasses,
    namesList,
    groupsList,
    winnersHistory,
    exportDate: new Date().toISOString()
  };
  const jsonStr = JSON.stringify(backup, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `luckywheel-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function restoreAllData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.savedClasses) savedClasses = data.savedClasses;
      if (Array.isArray(data.namesList)) namesList = data.namesList;
      if (Array.isArray(data.groupsList)) groupsList = data.groupsList;
      if (Array.isArray(data.winnersHistory)) winnersHistory = data.winnersHistory;

      localStorage.setItem("lucky_wheel_classes", JSON.stringify(savedClasses));
      populateClassSelector();
      updateTextareaFromState();
      updateItemCount();
      renderHistory();
      drawWheel();
      alert(currentLang === "km" ? "បានបញ្ចូលទិន្នន័យបម្រុងទុកដោយជោគជ័យ!" : "Backup restored successfully!");
    } catch (err) {
      alert(currentLang === "km" ? "ឯកសារមិនត្រឹមត្រូវទេ!" : "Invalid backup file!");
    }
  };
  reader.readAsText(file);
}

function checkUrlHashState() {
  const hash = window.location.hash;
  if (!hash || hash.length < 3) return;
  try {
    if (hash.startsWith("#names=")) {
      const decoded = decodeURIComponent(hash.replace("#names=", ""));
      const parsed = JSON.parse(decoded);
      if (Array.isArray(parsed)) {
        setActiveItems(parsed);
      }
    }
  } catch (e) {}
}

// ==========================================================================
// 13. HELPERS & EVENT HANDLERS
// ==========================================================================
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function switchMode(newMode) {
  currentMode = newMode;

  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-mode") === newMode);
  });

  const wheelPanel = document.getElementById("wheelViewPanel");
  const teamMakerPanel = document.getElementById("teamMakerPanel");

  if (newMode === "team-maker") {
    wheelPanel.classList.add("hidden");
    teamMakerPanel.classList.remove("hidden");
    const teamInput = document.getElementById("teamNamesInput");
    if (!teamInput.value.trim()) {
      teamInput.value = namesList.join("\n");
      updateTeamMemberCount();
    }
  } else {
    wheelPanel.classList.remove("hidden");
    teamMakerPanel.classList.add("hidden");
    updateSidebarTitle();
    updateTextareaFromState();
    updateItemCount();
    drawWheel();
  }
}

function updateTeamMemberCount() {
  const count = document.getElementById("teamNamesInput").value
    .split("\n")
    .map(s => s.trim())
    .filter(s => s.length > 0).length;
  document.getElementById("teamMembersCountBadge").textContent = count;
}

// ==========================================================================
// 14. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  wheelCanvas = document.getElementById("wheelCanvas");
  wheelCtx = wheelCanvas.getContext("2d");

  setLanguage(currentLang);
  populateClassSelector();

  updateTextareaFromState();
  updateItemCount();
  drawWheel();

  // Language switcher
  document.getElementById("langKm").addEventListener("click", () => setLanguage("km"));
  document.getElementById("langEn").addEventListener("click", () => setLanguage("en"));

  // Mode navigation
  document.getElementById("tabSpinNames").addEventListener("click", () => switchMode("spin-names"));
  document.getElementById("tabSpinGroups").addEventListener("click", () => switchMode("spin-groups"));
  document.getElementById("tabTeamMaker").addEventListener("click", () => switchMode("team-maker"));

  // Classroom selector, saver & zero-cloud backup
  document.getElementById("classSelector").addEventListener("change", (e) => onClassSelected(e.target.value));
  document.getElementById("saveClassBtn").addEventListener("click", saveCurrentClass);
  document.getElementById("backupDataBtn").addEventListener("click", backupAllData);
  document.getElementById("restoreDataBtn").addEventListener("click", () => {
    document.getElementById("restoreFileInput").click();
  });
  document.getElementById("restoreFileInput").addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      restoreAllData(e.target.files[0]);
    }
  });

  checkUrlHashState();

  // Sound toggle
  const soundBtn = document.getElementById("soundToggleBtn");
  const soundIcon = document.getElementById("soundIcon");
  soundBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
  });

  // Fullscreen toggle
  document.getElementById("fullscreenBtn").addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  // QR Modal Buttons
  document.getElementById("qrShareBtn").addEventListener("click", openQrModal);
  document.getElementById("closeQrModalBtn").addEventListener("click", closeQrModal);
  document.getElementById("copyAppUrlBtn").addEventListener("click", copyAppUrl);
  document.getElementById("shareAppTelegramBtn").addEventListener("click", shareAppViaTelegram);
  document.getElementById("qrModalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "qrModalOverlay") closeQrModal();
  });

  // Spin buttons
  document.getElementById("spinCenterBtn").addEventListener("click", spinWheel);
  document.getElementById("spinActionBtn").addEventListener("click", spinWheel);

  // Textarea live sync
  const entriesTextarea = document.getElementById("entriesTextarea");
  entriesTextarea.addEventListener("input", (e) => {
    const rawLines = e.target.value.split("\n").map(l => l.trim()).filter(l => l.length > 0);
    if (currentMode === "spin-groups") {
      groupsList = rawLines;
    } else {
      namesList = rawLines;
    }
    updateItemCount();
    drawWheel();
  });

  // Shuffle & Sort
  document.getElementById("shuffleBtn").addEventListener("click", () => {
    const items = [...getActiveItems()];
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    setActiveItems(items);
  });

  document.getElementById("sortBtn").addEventListener("click", () => {
    const items = [...getActiveItems()];
    items.sort((a, b) => a.localeCompare(b, "km"));
    setActiveItems(items);
  });

  // Toolbar
  document.getElementById("clearBtn").addEventListener("click", () => {
    if (confirm(currentLang === "km" ? "តើអ្នកពិតជាចង់សម្អាតបញ្ជីទាំងអស់មែនទេ?" : "Clear all entries?")) {
      setActiveItems([]);
    }
  });

  document.getElementById("copyListBtn").addEventListener("click", () => {
    navigator.clipboard.writeText(getActiveItems().join("\n")).then(() => {
      alert(TRANSLATIONS[currentLang].copiedAlert);
    });
  });

  document.getElementById("resetDefaultBtn").addEventListener("click", () => {
    if (currentMode === "spin-groups") {
      groupsList = [...PRESETS["team-alpha"]];
    } else {
      namesList = [...PRESETS["khmer-students"]];
    }
    updateTextareaFromState();
    updateItemCount();
    drawWheel();
  });

  // Presets
  document.getElementById("presetSelect").addEventListener("change", (e) => {
    const val = e.target.value;
    if (PRESETS[val]) {
      setActiveItems([...PRESETS[val]]);
    }
    e.target.value = "";
  });

  // History Actions
  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    winnersHistory = [];
    renderHistory();
  });
  document.getElementById("exportHistoryCsvBtn").addEventListener("click", exportHistoryToCsv);

  // Pedagogical Timer Buttons
  document.getElementById("timerToggleBtn").addEventListener("click", () => {
    isCountdownPaused = !isCountdownPaused;
    updateTimerUI();
  });
  document.getElementById("timerPlus15Btn").addEventListener("click", () => {
    countdownRemainingSeconds += 15;
    updateTimerUI();
  });
  document.getElementById("timerReset30Btn").addEventListener("click", () => {
    startCountdown(30);
  });

  // Challenge roll & Lifeline
  document.getElementById("rollChallengeBtn").addEventListener("click", rollNewChallenge);
  document.getElementById("askFriendBtn").addEventListener("click", triggerAskFriend);
  document.getElementById("awardStarBtn").addEventListener("click", triggerAwardStar);
  document.getElementById("shareWinnerTelegramBtn").addEventListener("click", shareWinnerToTelegram);

  // Winner Modal Action Buttons
  document.getElementById("removeWinnerBtn").addEventListener("click", () => {
    if (currentWinnerIndex >= 0) {
      const items = [...getActiveItems()];
      items.splice(currentWinnerIndex, 1);
      setActiveItems(items);
      currentWinnerIndex = -1;
    }
    hideWinnerModal();
  });

  document.getElementById("keepWinnerBtn").addEventListener("click", hideWinnerModal);

  document.getElementById("winnerModalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "winnerModalOverlay") {
      hideWinnerModal();
    }
  });

  // Team Maker Controls
  const teamInput = document.getElementById("teamNamesInput");
  teamInput.addEventListener("input", updateTeamMemberCount);

  document.getElementById("syncFromWheelBtn").addEventListener("click", () => {
    teamInput.value = namesList.join("\n");
    updateTeamMemberCount();
  });

  document.getElementById("teamShuffleInputBtn").addEventListener("click", () => {
    const members = teamInput.value.split("\n").map(s => s.trim()).filter(s => s.length > 0);
    for (let i = members.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [members[i], members[j]] = [members[j], members[i]];
    }
    teamInput.value = members.join("\n");
  });

  const divideByGroupsBtn = document.getElementById("divideByGroupsBtn");
  const divideByMembersBtn = document.getElementById("divideByMembersBtn");
  divideByGroupsBtn.addEventListener("click", () => {
    divideByGroupsBtn.classList.add("active");
    divideByMembersBtn.classList.remove("active");
    updateStepperLabel();
  });
  divideByMembersBtn.addEventListener("click", () => {
    divideByMembersBtn.classList.add("active");
    divideByGroupsBtn.classList.remove("active");
    updateStepperLabel();
  });

  const divideCountInput = document.getElementById("divideCountInput");
  document.getElementById("stepperMinus").addEventListener("click", () => {
    const val = parseInt(divideCountInput.value, 10) || 2;
    if (val > 2) divideCountInput.value = val - 1;
  });
  document.getElementById("stepperPlus").addEventListener("click", () => {
    const val = parseInt(divideCountInput.value, 10) || 2;
    if (val < 50) divideCountInput.value = val + 1;
  });

  document.getElementById("generateTeamsBtn").addEventListener("click", generateTeams);
  document.getElementById("reShuffleTeamsBtn").addEventListener("click", generateTeams);
  document.getElementById("copyTeamsResultBtn").addEventListener("click", copyTeamsToClipboard);
  document.getElementById("exportTeamsCsvBtn").addEventListener("click", exportTeamsToCsv);
  document.getElementById("shareTeamsTelegramBtn").addEventListener("click", shareTeamsToTelegram);

  // Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT") return;
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      if (!isSpinning && currentMode !== "team-maker") {
        spinWheel();
      }
    } else if (e.code === "Escape") {
      hideWinnerModal();
      closeQrModal();
    }
  });

  window.addEventListener("resize", drawWheel);
});
