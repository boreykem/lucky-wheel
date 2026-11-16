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
    sendToGroupWheel: "ផ្ទេរទៅកងចាប់ក្រុម",
    teamMembersTitle: "👥 សមាជិកក្នុងក្រុម៖",
    teamsTransferredToast: "🎡 បានផ្ទេរក្រុមទៅកងចាប់ក្រុមរួចរាល់!",
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
    copyLink: "ចម្លងតំណភ្ជាប់",
    filterAll: "ទាំងអស់",
    filterMale: "សិស្សប្រុស",
    filterFemale: "សិស្សស្រី",
    pairDraw: "ចាប់ជាគូ (👫)",
    pairDrawTitle: "🎉 គូដែលត្រូវបានជ្រើសរើស (Pair Draw)៖",
    pairStage1Boy: "🎯 វគ្គទី ១/២៖ កំពុងបង្វិលរើសសិស្សប្រុស... 👦",
    pairWonBoy: "✅ វគ្គទី ១៖ ជ្រើសបានសិស្សប្រុស 👦 ",
    pairStage2Girl: "🎯 វគ្គទី ២/២៖ កំពុងបង្វិលរើសសិស្សស្រី... 👧",
    pairWonGirl: "✅ វគ្គទី ២៖ ជ្រើសបានសិស្សស្រី 👧 ",
    pairMatchedSuccess: "🎉 ផ្គូផ្គងជោគជ័យ៖ ",
    genderBalanceToggle: "⚖️ ធានាតុល្យភាពយេនឌ័រ (ស្មើប្រុស/ស្រីក្នុងគ្រប់ក្រុម)",
    genderTip: "សម្គាល់យេនឌ័រ៖ (ប)/(M) = ប្រុស, (ស)/(F) = ស្រី",
    needBoyAndGirlForPair: "សូមបញ្ចូលឈ្មោះប្រុស និងស្រីយ៉ាងហោចណាស់ម្នាក់ដើម្បីចាប់ជាគូ!",
    boyLabel: "ប្រុស (Male)",
    girlLabel: "ស្រី (Female)",
    unspecifiedLabel: "មិនបញ្ជាក់ (Unspecified)",
    removeBothWinners: "ដកឈ្មោះទាំងពីរចេញ",
    keepBothWinners: "រក្សាទុកទាំងពីរ",
    tabEditor: "កែសម្រួល",
    tabAttendance: "វត្តមាន",
    allPresent: "មកទាំងអស់",
    allAbsent: "អវត្តមានទាំងអស់",
    attendanceNote: "ឈ្មោះដែលអវត្តមាន (❌) នឹងមិនត្រូវបានបង្វិលកង ឬបែងចែកក្រុមឡើយ។",
    presentLabel: "មក",
    absentLabel: "អវត្តមាន",
    installApp: "ដំឡើង App",
    themeNeon: "🌌 Cyber Neon",
    themeChalkboard: "🏫 ក្តារខៀន (Chalkboard)",
    themeKhmerGold: "👑 មាសខ្មែរ (Khmer Gold)",
    themePastel: "🧁 ឥន្ទធនូស្រទន់ (Pastel)",
    scoreboardTitle: "តារាងពិន្ទុ & ចំណាត់ថ្នាក់ផ្កាយ",
    scoreboardSubtitle: "Classroom Star Leaderboard & Points Tracking",
    tabStudentsScore: "ពិន្ទុសិស្ស",
    tabGroupsScore: "ពិន្ទុក្រុម",
    colStudentName: "ឈ្មោះសិស្ស",
    colStars: "ផ្កាយ/ពិន្ទុ",
    colAction: "កែប្រែ",
    resetScores: "កំណត់ពិន្ទុឡើងវិញ",
    done: "រួចរាល់",
    exitProjector: "ចាកចេញពីបញ្ចាំងស្លាយ",
    presetClassroomRewards: "📚 រង្វាន់សម្ភារៈសិក្សា",
    scoresResetConfirm: "តើអ្នកពិតជាចង់កំណត់ពិន្ទុសិស្សទាំងអស់ទៅ 0 វិញមែនទេ?",
    starAwardedToast: "⭐ បានផ្តល់ផ្កាយជូន "
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
    presetClassroomRewards: "📚 Classroom Rewards",
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
    sendToGroupWheel: "Send to Group Wheel",
    teamMembersTitle: "👥 Group Members:",
    teamsTransferredToast: "🎡 Teams transferred to Group Wheel!",
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
    copyLink: "Copy Link",
    filterAll: "All",
    filterMale: "Boys",
    filterFemale: "Girls",
    pairDraw: "Pair Draw (👫)",
    pairDrawTitle: "🎉 Selected Pair (Boy & Girl):",
    pairStage1Boy: "🎯 Round 1/2: Spinning for Boy... 👦",
    pairWonBoy: "✅ Round 1: Selected Boy 👦 ",
    pairStage2Girl: "🎯 Round 2/2: Spinning for Girl... 👧",
    pairWonGirl: "✅ Round 2: Selected Girl 👧 ",
    pairMatchedSuccess: "🎉 Pair Matched: ",
    genderBalanceToggle: "⚖️ Gender-Balanced Teams (Equal Boy/Girl ratio)",
    genderTip: "Tag gender: (M)/(ប) = Male, (F)/(ស) = Female",
    needBoyAndGirlForPair: "Please have at least 1 male and 1 female to draw a pair!",
    boyLabel: "Male",
    girlLabel: "Female",
    unspecifiedLabel: "Unspecified",
    removeBothWinners: "Remove Both",
    keepBothWinners: "Keep Both",
    tabEditor: "Editor",
    tabAttendance: "Attendance",
    allPresent: "All Present",
    allAbsent: "All Absent",
    attendanceNote: "Absent students (❌) are automatically excluded from wheel spins and team generation.",
    presentLabel: "Present",
    absentLabel: "Absent",
    installApp: "Install App",
    themeNeon: "🌌 Cyber Neon",
    themeChalkboard: "🏫 Chalkboard",
    themeKhmerGold: "👑 Khmer Gold",
    themePastel: "🧁 Pastel Rainbow",
    scoreboardTitle: "Scoreboard & Star Leaderboard",
    scoreboardSubtitle: "Classroom Star Leaderboard & Points Tracking",
    tabStudentsScore: "Student Stars",
    tabGroupsScore: "Team Points",
    colStudentName: "Student Name",
    colStars: "Stars/Points",
    colAction: "Adjust",
    resetScores: "Reset Scores",
    done: "Done",
    exitProjector: "Exit Projector Mode",
    presetClassroomRewards: "📚 Classroom Rewards",
    scoresResetConfirm: "Are you sure you want to reset all student stars to 0?",
    starAwardedToast: "⭐ Awarded star to "
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
    "សុខា (Sokha) (ប)", "បូផា (Bopha) (ស)", "តារា (Dara) (ប)", "ចិន្តា (Chinda) (ស)",
    "វិបុល (Vibol) (ប)", "កញ្ញា (Kanya) (ស)", "រតនា (Rattana) (ប)", "ចាន់ណា (Channa) (ស)",
    "សុវណ្ណ (Sovann) (ប)", "ធីតា (Thida) (ស)", "ពិសិដ្ឋ (Piseth) (ប)", "មុន្នី (Mony) (ស)"
  ],
  "team-alpha": [
    "ក្រុមទី ១ (Group 1)", "ក្រុមទី ២ (Group 2)", "ក្រុមទី ៣ (Group 3)",
    "ក្រុមទី ៤ (Group 4)", "ក្រុមទី ៥ (Group 5)", "ក្រុមទី ៦ (Group 6)"
  ],
  "lucky-numbers": Array.from({ length: 20 }, (_, i) => `លេខ ${i + 1} (#${i + 1})`),
  "classroom-rewards": [
    "📚 សៀវភៅសរសេរ ១ ក្បាល (Notebook)",
    "🖊️ ប៊ិចទឹកស្អាត ១ ដើម (Gel Pen)",
    "🍬 ស្ករគ្រាប់ផ្អែម ៣ គ្រាប់ (Candies)",
    "⭐ បូក ៥ ពិន្ទុបន្ថែម (+5 Extra Points)",
    "👑 ប្រធានថ្នាក់កិត្តិយស ១ ថ្ងៃ (Honor Leader)",
    "🥤 ភេសជ្ជៈត្រជាក់ ១ កំប៉ុង (Cold Drink)",
    "🎯 លើកលែងកិច្ចការផ្ទះ ១ លើក (Homework Pass)",
    "🍿 បង្វិលម្តងទៀត (Spin Again)"
  ],
  "prizes": [
    "🎁 រង្វាន់ធំ (Grand Prize)", "☕ កាហ្វេ ១ កែវ (Free Coffee)", "🥤 តែគុជ ១ កែវ (Boba Tea)",
    "💵 លុយសុទ្ធ 50$ (Cash $50)", "🍕 ភីហ្សា ១ ថាស (Pizza Box)", "🍿 បង្វិលម្តងទៀត (Spin Again)"
  ]
};

// Slices colors & dynamic theme palettes
const THEME_PALETTES = {
  "theme-neon": {
    slices: [
      "#4f46e5", "#06b6d4", "#ec4899", "#f59e0b", 
      "#10b981", "#8b5cf6", "#f43f5e", "#14b8a6", 
      "#3b82f6", "#eab308", "#d946ef", "#0284c7"
    ],
    rim: "#1e1b4b",
    pin: "#fbbf24"
  },
  "theme-chalkboard": {
    slices: [
      "#2d6a4f", "#1b4332", "#40916c", "#52b788", 
      "#74c69d", "#081c15", "#283618", "#606c38", 
      "#344e41", "#3a5a40", "#4f772d", "#31572c"
    ],
    rim: "#2d3748",
    pin: "#fefae0"
  },
  "theme-khmer-gold": {
    slices: [
      "#d97706", "#b45309", "#92400e", "#eab308", 
      "#f59e0b", "#78350f", "#854d0e", "#ca8a04", 
      "#a16207", "#b7791f", "#d69e2e", "#b91c1c"
    ],
    rim: "#451a03",
    pin: "#fef08a"
  },
  "theme-pastel": {
    slices: [
      "#fda4af", "#f9a8d4", "#f0abfc", "#c4b5fd", 
      "#a5b4fc", "#93c5fd", "#67e8f9", "#5eead4", 
      "#86efac", "#fde047", "#fca5a5", "#fed7aa"
    ],
    rim: "#4b5563",
    pin: "#f43f5e"
  }
};

const SLICE_COLORS = THEME_PALETTES["theme-neon"].slices;

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
// 2. STATE MANAGEMENT & GENDER PARSER
// ==========================================================================
let currentLang = localStorage.getItem("lucky_wheel_lang") || "km";
let currentTheme = localStorage.getItem("lucky_wheel_theme") || "theme-neon";
let currentMode = "spin-names";
let soundEnabled = true;

let genderWheelFilter = "all"; // "all" | "M" | "F"
let currentPairWinners = null; // null or { boy: string, girl: string }

let savedClasses = JSON.parse(localStorage.getItem("lucky_wheel_classes") || "{}");
let absentSet = new Set(JSON.parse(localStorage.getItem("lucky_wheel_absent") || "[]"));
let studentScores = JSON.parse(localStorage.getItem("lucky_wheel_scores") || "{}");
let activeSidebarTab = "text"; // "text" | "attendance"
let deferredInstallPrompt = null;
let isProjectorMode = false;
let scoreboardActiveTab = "students"; // "students" | "groups"

let namesList = [
  "សុខា (Sokha) (ប)", "បូផា (Bopha) (ស)", "តារា (Dara) (ប)", "ចិន្តា (Chinda) (ស)", 
  "វិបុល (Vibol) (ប)", "កញ្ញា (Kanya) (ស)", "រតនា (Rattana) (ប)", "ពិសិដ្ឋ (Piseth) (ប)"
];

let groupsList = [
  "ក្រុមទី ១ (Team Alpha)", "ក្រុមទី ២ (Team Bravo)", "ក្រុមទី ៣ (Team Charlie)", 
  "ក្រុមទី ៤ (Team Delta)", "ក្រុមទី ៥ (Team Echo)", "ក្រុមទី ៦ (Team Foxtrot)"
];

function parseMemberGender(rawName) {
  if (!rawName) return { raw: "", name: "", gender: "U", icon: "" };
  let str = rawName.trim();

  // 1. Direct Emoji check
  if (str.includes("👦") || str.includes("👨")) {
    const clean = str.replace(/[👦👨]/g, "").trim();
    return { raw: rawName.trim(), name: clean || str, gender: "M", icon: "👦" };
  }
  if (str.includes("👧") || str.includes("👩")) {
    const clean = str.replace(/[👧👩]/g, "").trim();
    return { raw: rawName.trim(), name: clean || str, gender: "F", icon: "👧" };
  }

  // 2. Remove leading row numbers e.g. '1. ', '01. ', '1) ', '1- ', '១. ', '២) '
  const numMatch = str.match(/^([0-9០-៩]+[\.\)\-\/\t]\s*)/);
  if (numMatch) {
    str = str.substring(numMatch[1].length).trim();
  }

  // 3. Tab-separated columns (e.g. copied from Excel/Word tables: 'ជេត ភក្តី\tប្រុស')
  if (str.includes("\t")) {
    const parts = str.split("\t").map(p => p.trim()).filter(p => p.length > 0);
    if (parts.length >= 2) {
      const lastPart = parts[parts.length - 1];
      if (/^(?:ភេទ[\s:]*)?(?:ស|ស្រី|f|female|girl)$/i.test(lastPart)) {
        return { raw: rawName.trim(), name: parts[0], gender: "F", icon: "👧" };
      }
      if (/^(?:ភេទ[\s:]*)?(?:ប|ប្រុស|m|male|boy)$/i.test(lastPart)) {
        return { raw: rawName.trim(), name: parts[0], gender: "M", icon: "👦" };
      }
    }
  }

  // 4. Prefix patterns at start (e.g. 'ប្រុស: ឈ្មោះ', 'ស្រី ឈ្មោះ', 'M: Name')
  const prefixFemale = /^(?:ស្រី|ស|f|female|girl)[\s:|\-\/]+/i;
  const prefixMale = /^(?:ប្រុស|ប|m|male|boy)[\s:|\-\/]+/i;
  if (prefixFemale.test(str)) {
    const clean = str.replace(prefixFemale, "").trim();
    return { raw: rawName.trim(), name: clean || str, gender: "F", icon: "👧" };
  }
  if (prefixMale.test(str)) {
    const clean = str.replace(prefixMale, "").trim();
    return { raw: rawName.trim(), name: clean || str, gender: "M", icon: "👦" };
  }

  // 5. Universal suffix patterns (matches 'ជេត ភក្តី ប្រុស', 'យឿង ដាណែត ស្រី', '(ប្រុស)', '[ស្រី]', 'ភេទប្រុស', ', M', etc.)
  const suffixFemaleRegex = /[\s\t,:\(\[\{\|\-\/]+(?:ភេទ[\s:]*)?(?:ស|ស្រី|f|female|girl)[\)\]\}]?$/i;
  const suffixMaleRegex = /[\s\t,:\(\[\{\|\-\/]+(?:ភេទ[\s:]*)?(?:ប|ប្រុស|m|male|boy)[\)\]\}]?$/i;

  if (suffixFemaleRegex.test(str)) {
    const clean = str.replace(suffixFemaleRegex, "").trim();
    return { raw: rawName.trim(), name: clean || str, gender: "F", icon: "👧" };
  }
  if (suffixMaleRegex.test(str)) {
    const clean = str.replace(suffixMaleRegex, "").trim();
    return { raw: rawName.trim(), name: clean || str, gender: "M", icon: "👦" };
  }

  // 6. Khmer titles detection (លោក, កុមារា, យុវជន vs កញ្ញា, អ្នកស្រី, អ្នកនាង, កុមារី, យុវតី)
  const titleFemale = /^(?:កញ្ញា|អ្នកស្រី|អ្នកនាង|កុមារី|យុវតី)\s+/;
  const titleMale = /^(?:លោក|កុមារា|យុវជន)\s+/;
  if (titleFemale.test(str)) {
    return { raw: rawName.trim(), name: str, gender: "F", icon: "👧" };
  }
  if (titleMale.test(str)) {
    return { raw: rawName.trim(), name: str, gender: "M", icon: "👦" };
  }

  return {
    raw: rawName.trim(),
    name: str,
    gender: "U",
    icon: ""
  };
}

function extractPrizeOrAvatar(str) {
  if (!str) return "";
  // Check for emojis (Unicode Extended Pictographic)
  const match = str.match(/(\p{Extended_Pictographic})/u);
  return match ? match[1] : "";
}

let generatedTeamsMap = {}; // Maps team title -> array of member names
let winnersHistory = [];
let currentWinnerIndex = -1;

// Wheel physics & animation state
let wheelCanvas = null;
let wheelCtx = null;
let currentRotation = 0;
let isSpinning = false;
let lastTickAngle = 0;
let lastTickSoundTime = 0;

// High-performance offscreen rendering cache buffer (60fps smooth with 50+ students)
let cachedWheelCanvas = null;
let cachedWheelCtx = null;
let wheelCacheValid = false;
let wheelItemsSignature = "";

function invalidateWheelCache() {
  wheelCacheValid = false;
  wheelItemsSignature = "";
}

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
  const now = performance.now();
  if (now - lastTickSoundTime < 32) return; // Prevent WebAudio node overload when spinning fast with 50+ slices
  lastTickSoundTime = now;
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
  document.body.className = `lang-${lang} ${currentTheme !== "theme-neon" ? currentTheme : ""}${isProjectorMode ? " projector-mode" : ""}`.trim();

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
  updateAttendanceView();
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
// 5. WHEEL CANVAS RENDERING (WITH KANTUMRUY PRO SUPPORT & GENDER TAGS)
// ==========================================================================
function getActiveItems() {
  return currentMode === "spin-groups" ? groupsList : namesList;
}

function getWheelItems() {
  if (currentMode === "spin-groups") {
    return groupsList;
  }
  // Exclude absent students
  const activeList = namesList.filter(n => !absentSet.has(n));
  if (genderWheelFilter === "M") {
    return activeList.filter(n => parseMemberGender(n).gender === "M");
  }
  if (genderWheelFilter === "F") {
    return activeList.filter(n => parseMemberGender(n).gender === "F");
  }
  return activeList;
}

function setActiveItems(items) {
  if (currentMode === "spin-groups") {
    groupsList = items;
  } else {
    namesList = items;
    const teamInput = document.getElementById("teamNamesInput");
    if (teamInput) {
      teamInput.value = namesList.join("\n");
      updateTeamMemberCount();
    }
  }
  updateTextareaFromState();
  updateItemCount();
  invalidateWheelCache();
  drawWheel();
}

function updateTextareaFromState() {
  const items = getActiveItems();
  document.getElementById("entriesTextarea").value = items.join("\n");
}

function updateItemCount() {
  const allNames = namesList;
  let boyCount = 0;
  let girlCount = 0;
  allNames.forEach(n => {
    const g = parseMemberGender(n).gender;
    if (g === "M") boyCount++;
    else if (g === "F") girlCount++;
  });

  const countBadge = document.getElementById("itemCountBadge");
  if (countBadge) {
    countBadge.textContent = currentMode === "spin-groups" ? groupsList.length : namesList.length;
  }

  // Sidebar gender badges
  const sideMale = document.getElementById("sidebarMaleBadge");
  const sideFemale = document.getElementById("sidebarFemaleBadge");
  if (sideMale) sideMale.textContent = `👦 ${boyCount}`;
  if (sideFemale) sideFemale.textContent = `👧 ${girlCount}`;

  // Wheel filter bar badges
  const badgeAll = document.getElementById("badgeAll");
  const badgeMale = document.getElementById("badgeMale");
  const badgeFemale = document.getElementById("badgeFemale");
  if (badgeAll) badgeAll.textContent = namesList.length;
  if (badgeMale) badgeMale.textContent = boyCount;
  if (badgeFemale) badgeFemale.textContent = girlCount;

  // Team maker badges
  const teamMemberBadge = document.getElementById("teamMembersCountBadge");
  const teamMale = document.getElementById("teamMaleBadge");
  const teamFemale = document.getElementById("teamFemaleBadge");
  if (teamMemberBadge) teamMemberBadge.textContent = namesList.length;
  if (teamMale) teamMale.textContent = `👦 ${boyCount}`;
  if (teamFemale) teamFemale.textContent = `👧 ${girlCount}`;

  updateAttendanceView();
  updateScoreboardTotalBadge();
}

/**
 * Pre-renders the entire wheel into an offscreen canvas buffer.
 * Slices, borders, shadows, text labels, and pins are drawn ONCE here,
 * allowing 60FPS / 120FPS ultra-fluid rotation during spinning even with 50-100+ students.
 */
function renderWheelBuffer() {
  if (!wheelCanvas) return;

  const width = wheelCanvas.width;
  const height = wheelCanvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = width / 2 - 20;

  if (!cachedWheelCanvas) {
    cachedWheelCanvas = document.createElement("canvas");
  }
  cachedWheelCanvas.width = width;
  cachedWheelCanvas.height = height;
  cachedWheelCtx = cachedWheelCanvas.getContext("2d");

  const ctx = cachedWheelCtx;
  ctx.clearRect(0, 0, width, height);

  const baseScale = width / 600;
  const items = getWheelItems();

  if (items.length === 0) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#1e293b";
    ctx.fill();
    ctx.lineWidth = Math.round(6 * baseScale);
    ctx.strokeStyle = "#334155";
    ctx.stroke();

    ctx.fillStyle = "#94a3b8";
    ctx.font = `bold ${Math.round(20 * baseScale)}px 'Kantumruy Pro', Outfit, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    let emptyMsg = currentLang === "km" ? "សូមបញ្ចូលឈ្មោះ..." : "Add names to spin...";
    if (currentMode === "spin-names") {
      if (genderWheelFilter === "M") {
        emptyMsg = currentLang === "km" ? "មិនទាន់មានឈ្មោះប្រុស (M/ប)" : "No male names found";
      } else if (genderWheelFilter === "F") {
        emptyMsg = currentLang === "km" ? "មិនទាន់មានឈ្មោះស្រី (F/ស)" : "No female names found";
      } else if (namesList.length > 0 && items.length === 0) {
        emptyMsg = currentLang === "km" ? "សិស្សទាំងអស់ត្រូវបានដាក់អវត្តមាន" : "All students marked absent";
      }
    }
    ctx.fillText(emptyMsg, centerX, centerY);
    wheelCacheValid = true;
    return;
  }

  const sliceAngle = (2 * Math.PI) / items.length;
  const palette = THEME_PALETTES[currentTheme] || THEME_PALETTES["theme-neon"];

  ctx.save();
  ctx.translate(centerX, centerY);

  // 1. Draw Slices
  for (let i = 0; i < items.length; i++) {
    const startAngle = i * sliceAngle;
    const endAngle = startAngle + sliceAngle;
    const color = palette.slices[i % palette.slices.length];

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, startAngle, endAngle);
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();

    // Thinner borders for 50+ items so slice color is not overtaken by borders
    const borderLineWidth = items.length > 50 ? 1.5 : items.length > 30 ? 2 : 2.5;
    ctx.lineWidth = Math.max(1, Math.round(borderLineWidth * baseScale));
    ctx.strokeStyle = "#0f172a";
    ctx.stroke();

    // 2. Draw Text in Slice (Kantumruy Pro)
    ctx.save();
    const textAngle = startAngle + sliceAngle / 2;
    ctx.rotate(textAngle);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
    ctx.shadowBlur = Math.round(4 * baseScale);

    // Font size scales cleanly with number of items
    const baseFont = items.length > 60 ? 9 : items.length > 45 ? 10.5 : items.length > 30 ? 12.5 : items.length > 16 ? 15 : 19;
    const fontSize = Math.round(baseFont * baseScale);
    ctx.font = `600 ${fontSize}px 'Kantumruy Pro', Outfit, sans-serif`;

    const parsed = parseMemberGender(items[i]);
    let itemText = parsed.icon ? `${parsed.icon} ${parsed.name}` : parsed.raw;
    const maxChars = items.length > 50 ? 18 : 24;
    if (itemText.length > maxChars) {
      itemText = itemText.substring(0, maxChars - 2) + "...";
    }

    const textOffset = Math.round((items.length > 45 ? 24 : 32) * baseScale);
    ctx.fillText(itemText, radius - textOffset, 0);
    ctx.restore();
  }

  // 3. Draw Outer Rim
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.lineWidth = Math.round(11 * baseScale);
  ctx.strokeStyle = palette.rim;
  ctx.stroke();

  // 4. Draw Pins (capped at 60 for clean aesthetics)
  const totalPins = Math.min(Math.max(12, items.length), 60);
  const pinStep = (2 * Math.PI) / totalPins;
  for (let p = 0; p < totalPins; p++) {
    const pinAngle = p * pinStep;
    const pinOffset = Math.round(6 * baseScale);
    const pinX = Math.cos(pinAngle) * (radius - pinOffset);
    const pinY = Math.sin(pinAngle) * (radius - pinOffset);

    ctx.beginPath();
    ctx.arc(pinX, pinY, Math.round(4.5 * baseScale), 0, 2 * Math.PI);
    ctx.fillStyle = palette.pin;
    ctx.fill();
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
  }

  ctx.restore();
  wheelCacheValid = true;
}

function drawWheel() {
  if (!wheelCanvas || !wheelCtx) return;

  const width = wheelCanvas.width;
  const height = wheelCanvas.height;
  const centerX = width / 2;
  const centerY = height / 2;

  const items = getWheelItems();
  const currentKey = `${items.length}_${currentTheme}_${currentLang}_${genderWheelFilter}_${width}x${height}_${items[0] || ''}_${items[items.length - 1] || ''}`;

  if (!wheelCacheValid || wheelItemsSignature !== currentKey || !cachedWheelCanvas) {
    wheelItemsSignature = currentKey;
    renderWheelBuffer();
  }

  wheelCtx.clearRect(0, 0, width, height);
  wheelCtx.save();
  wheelCtx.translate(centerX, centerY);
  wheelCtx.rotate(currentRotation);
  wheelCtx.drawImage(cachedWheelCanvas, -centerX, -centerY);
  wheelCtx.restore();
}

// ==========================================================================
// 6. WHEEL SPINNING ENGINE & PHYSICS (FAST, FLUID & SUSPENSEFUL ROTATIONS)
// ==========================================================================
function spinWheel() {
  const items = getWheelItems();
  if (items.length < 2) {
    if (currentMode === "spin-names") {
      if (genderWheelFilter === "M") {
        alert(currentLang === "km" ? "សូមបញ្ចូលឈ្មោះប្រុស (M/ប) យ៉ាងហោចណាស់ ២ នាក់ដើម្បីបង្វិលកង!" : "Please add at least 2 male entries to spin!");
        return;
      }
      if (genderWheelFilter === "F") {
        alert(currentLang === "km" ? "សូមបញ្ចូលឈ្មោះស្រី (F/ស) យ៉ាងហោចណាស់ ២ នាក់ដើម្បីបង្វិលកង!" : "Please add at least 2 female entries to spin!");
        return;
      }
    }
    alert(TRANSLATIONS[currentLang].needTwoItems);
    return;
  }
  if (isSpinning) return;
  currentPairWinners = null;

  initAudio();
  isSpinning = true;
  startDrumroll();

  document.getElementById("spinCenterBtn").disabled = true;
  document.getElementById("spinActionBtn").disabled = true;

  // Fast & energetic spin: 14 to 20 full rotations!
  const fullRotations = (14 + Math.random() * 6) * 2 * Math.PI;
  const randomOffset = Math.random() * 2 * Math.PI;
  const targetRotation = currentRotation + fullRotations + randomOffset;

  const startRotation = currentRotation;
  // Longer, exciting suspense duration: 7.0s - 8.5s
  const spinDuration = 7000 + Math.random() * 1500;
  const startTime = performance.now();

  const pointerEl = document.querySelector(".wheel-pointer");
  const sliceAngle = (2 * Math.PI) / items.length;
  let lastPointerTickTime = 0;

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / spinDuration, 1);

    // Quartic ease-out: ultra-fast initial blast, followed by long, suspenseful deceleration
    const easeOut = 1 - Math.pow(1 - progress, 4);
    currentRotation = startRotation + (targetRotation - startRotation) * easeOut;

    const pointerAngle = 0;
    const normalizedAngle = (pointerAngle - currentRotation) % (2 * Math.PI);
    const positiveAngle = normalizedAngle < 0 ? normalizedAngle + 2 * Math.PI : normalizedAngle;
    const currentSlice = Math.floor(positiveAngle / sliceAngle);

    if (currentSlice !== lastTickAngle) {
      lastTickAngle = currentSlice;
      playTickSound();
      // Throttle pointer deflection to avoid DOM recalc thrashing
      if (pointerEl && currentTime - lastPointerTickTime > 40) {
        lastPointerTickTime = currentTime;
        pointerEl.style.transform = "rotate(-14deg)";
        setTimeout(() => { if (pointerEl) pointerEl.style.transform = "rotate(0deg)"; }, 35);
      }
    }

    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      if (pointerEl) pointerEl.style.transform = "rotate(0deg)";
      stopDrumroll();
      isSpinning = false;
      document.getElementById("spinCenterBtn").disabled = false;
      document.getElementById("spinActionBtn").disabled = false;
      finishSpin();
    }
  }

  requestAnimationFrame(animate);
}

function calculateTargetRotationForIndex(targetIdx, totalItems, fromRotation, minRotations = 10) {
  const sliceAngle = (2 * Math.PI) / totalItems;
  const midAngle = (targetIdx + 0.5) * sliceAngle;
  const minTarget = fromRotation + minRotations * 2 * Math.PI;
  const k = Math.ceil((minTarget + midAngle) / (2 * Math.PI));
  // Slight natural variation within middle 50% of the slice
  const randomOffset = (Math.random() - 0.5) * 0.5 * sliceAngle;
  return 2 * k * Math.PI - (midAngle + randomOffset);
}

function animateSpinToRotation(targetRot, duration, onComplete) {
  const startRot = currentRotation;
  const startTime = performance.now();
  const pointerEl = document.querySelector(".wheel-pointer");
  const items = getWheelItems();
  const sliceAngle = (2 * Math.PI) / Math.max(1, items.length);
  let lastPointerTickTime = 0;

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 4);
    currentRotation = startRot + (targetRot - startRot) * easeOut;

    const pointerAngle = 0;
    const normalizedAngle = (pointerAngle - currentRotation) % (2 * Math.PI);
    const positiveAngle = normalizedAngle < 0 ? normalizedAngle + 2 * Math.PI : normalizedAngle;
    const currentSlice = Math.floor(positiveAngle / sliceAngle);

    if (currentSlice !== lastTickAngle) {
      lastTickAngle = currentSlice;
      playTickSound();
      if (pointerEl && currentTime - lastPointerTickTime > 40) {
        lastPointerTickTime = currentTime;
        pointerEl.style.transform = "rotate(-14deg)";
        setTimeout(() => { if (pointerEl) pointerEl.style.transform = "rotate(0deg)"; }, 35);
      }
    }

    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      if (pointerEl) pointerEl.style.transform = "rotate(0deg)";
      if (typeof onComplete === "function") {
        onComplete();
      }
    }
  }

  requestAnimationFrame(step);
}

function startPairDraw() {
  if (currentMode !== "spin-names") {
    switchMode("spin-names");
  }

  // Ensure filter is set to 'all' so both boys and girls are present on the wheel
  if (genderWheelFilter !== "all") {
    genderWheelFilter = "all";
    const filterAllBtn = document.getElementById("filterAllBtn");
    const filterMaleBtn = document.getElementById("filterMaleBtn");
    const filterFemaleBtn = document.getElementById("filterFemaleBtn");
    if (filterAllBtn) filterAllBtn.classList.add("active");
    if (filterMaleBtn) filterMaleBtn.classList.remove("active");
    if (filterFemaleBtn) filterFemaleBtn.classList.remove("active");
    invalidateWheelCache();
    drawWheel();
  }

  const items = getWheelItems();
  const maleEntries = [];
  const femaleEntries = [];

  items.forEach((item, idx) => {
    const parsed = parseMemberGender(item);
    if (parsed.gender === "M") {
      maleEntries.push({ raw: item, idx, name: parsed.name });
    } else if (parsed.gender === "F") {
      femaleEntries.push({ raw: item, idx, name: parsed.name });
    }
  });

  if (maleEntries.length === 0 || femaleEntries.length === 0) {
    alert(TRANSLATIONS[currentLang].needBoyAndGirlForPair);
    return;
  }
  if (isSpinning) return;

  initAudio();
  isSpinning = true;

  document.getElementById("spinCenterBtn").disabled = true;
  document.getElementById("spinActionBtn").disabled = true;
  const pairBtn = document.getElementById("pairDrawBtn");
  if (pairBtn) pairBtn.disabled = true;

  // Pick target boy and target girl randomly
  const targetBoy = maleEntries[Math.floor(Math.random() * maleEntries.length)];
  const targetGirl = femaleEntries[Math.floor(Math.random() * femaleEntries.length)];

  const banner = document.getElementById("pairDrawBanner");
  const bannerIcon = document.getElementById("pairBannerIcon");
  const bannerText = document.getElementById("pairBannerText");

  function setBanner(icon, text, stageClass) {
    if (!banner) return;
    banner.className = `pair-draw-banner ${stageClass || ""}`;
    if (bannerIcon) bannerIcon.textContent = icon;
    if (bannerText) bannerText.textContent = text;
    banner.classList.remove("hidden");
  }

  function hideBanner() {
    if (banner) banner.classList.add("hidden");
  }

  // ==========================================
  // STAGE 1: SPIN FOR BOY (សិស្សប្រុស 👦)
  // ==========================================
  const t = TRANSLATIONS[currentLang];
  setBanner("👦", t.pairStage1Boy, "stage-boy");

  startDrumroll();
  // Target rotation precisely pointing at targetBoy.idx with 12 to 15 full turns
  const boyTargetRot = calculateTargetRotationForIndex(targetBoy.idx, items.length, currentRotation, 12 + Math.floor(Math.random() * 4));
  const spinDuration1 = 4800 + Math.random() * 800;

  animateSpinToRotation(boyTargetRot, spinDuration1, () => {
    stopDrumroll();
    playWinSound();
    if (typeof confetti === "function") {
      confetti({ particleCount: 45, spread: 50, origin: { x: 0.85, y: 0.5 } });
    }

    setBanner("👦", `${t.pairWonBoy}${targetBoy.name}!`, "stage-boy");

    // Pause 1.5s so audience can clearly see the pointer stopped on the male student
    setTimeout(() => {
      // ==========================================
      // STAGE 2: SPIN FOR GIRL (សិស្សស្រី 👧)
      // ==========================================
      setBanner("👧", t.pairStage2Girl, "stage-girl");

      startDrumroll();
      // Target rotation precisely pointing at targetGirl.idx with 12 to 15 full turns from currentRotation
      const girlTargetRot = calculateTargetRotationForIndex(targetGirl.idx, items.length, currentRotation, 12 + Math.floor(Math.random() * 4));
      const spinDuration2 = 5200 + Math.random() * 800;

      animateSpinToRotation(girlTargetRot, spinDuration2, () => {
        stopDrumroll();
        playWinSound();
        launchConfetti();

        setBanner("👫", `${t.pairMatchedSuccess}👦 ${targetBoy.name} & 👧 ${targetGirl.name}!`, "stage-success");

        // Pause 1.2s then open the Grand Pair Winner Modal
        setTimeout(() => {
          hideBanner();
          isSpinning = false;
          document.getElementById("spinCenterBtn").disabled = false;
          document.getElementById("spinActionBtn").disabled = false;
          if (pairBtn) pairBtn.disabled = false;

          const pairHistoryLabel = `👫 ${targetBoy.name} & ${targetGirl.name}`;
          addToHistory(pairHistoryLabel);
          showPairWinnerModal(targetBoy.raw, targetGirl.raw);
        }, 1300);
      });
    }, 1500);
  });
}

function finishSpin() {
  const items = getWheelItems();
  const sliceAngle = (2 * Math.PI) / items.length;

  const pointerAngle = 0;
  const normalizedAngle = (pointerAngle - currentRotation) % (2 * Math.PI);
  const positiveAngle = normalizedAngle < 0 ? normalizedAngle + 2 * Math.PI : normalizedAngle;
  currentWinnerIndex = Math.floor(positiveAngle / sliceAngle) % items.length;

  const winnerRaw = items[currentWinnerIndex];

  playWinSound();
  launchConfetti();

  const parsedWinner = parseMemberGender(winnerRaw);
  const historyText = parsedWinner.icon ? `${parsedWinner.icon} ${parsedWinner.name}` : parsedWinner.raw;
  addToHistory(historyText);
  showWinnerModal(winnerRaw);
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
  currentPairWinners = null;
  const modal = document.getElementById("winnerModalOverlay");
  const modalTitle = document.querySelector(".winner-modal-header .modal-title");
  if (modalTitle) {
    modalTitle.textContent = TRANSLATIONS[currentLang].winnerAnnounce;
  }
  const removeBtn = document.getElementById("removeWinnerBtn");
  const keepBtn = document.getElementById("keepWinnerBtn");
  if (removeBtn) {
    removeBtn.innerHTML = `<span>❌</span> <span>${TRANSLATIONS[currentLang].removeWinner}</span>`;
  }
  if (keepBtn) {
    keepBtn.innerHTML = `<span>✅</span> <span>${TRANSLATIONS[currentLang].keepWinner}</span>`;
  }

  const nameDisplay = document.getElementById("winnerNameDisplay");
  const parsed = parseMemberGender(name);
  if (parsed.icon) {
    nameDisplay.innerHTML = `<span class="winner-gender-pill">${parsed.icon}</span> ${escapeHtml(parsed.name)}`;
  } else {
    nameDisplay.textContent = escapeHtml(parsed.name);
  }

  // Feature 6: Avatar / Prize spotlight in winner header
  const spotlightEl = document.getElementById("winnerAvatarSpotlight");
  if (spotlightEl) {
    const avatar = extractPrizeOrAvatar(name) || (parsed.icon ? parsed.icon : (parsed.gender === "M" ? "👦" : parsed.gender === "F" ? "👧" : "🎁"));
    spotlightEl.textContent = avatar;
    spotlightEl.classList.remove("hidden");
  }

  // If spinning groups and this group has known members, display them beautifully
  const teamMembersBox = document.getElementById("winnerTeamMembersBox");
  const teamMembersList = document.getElementById("winnerTeamMembersList");
  const teamMembersCount = document.getElementById("winnerTeamMembersCount");
  if (teamMembersBox && teamMembersList) {
    if (currentMode === "spin-groups" && generatedTeamsMap[name] && generatedTeamsMap[name].length > 0) {
      const members = generatedTeamsMap[name];
      if (teamMembersCount) {
        teamMembersCount.textContent = `(${members.length}${TRANSLATIONS[currentLang].membersSuffix})`;
      }
      teamMembersList.innerHTML = members.map((m, mIdx) => {
        const mParsed = parseMemberGender(m);
        return `
          <span class="winner-member-chip" title="${escapeHtml(m)}">
            <span class="winner-member-name">${mParsed.icon ? mParsed.icon + ' ' : ''}${escapeHtml(mParsed.name)}</span>
            ${getMemberRoleBadge(mIdx)}
          </span>
        `;
      }).join("");
      teamMembersBox.classList.remove("hidden");
    } else {
      teamMembersBox.classList.add("hidden");
      teamMembersList.innerHTML = "";
      if (teamMembersCount) teamMembersCount.textContent = "";
    }
  }

  // Reset scroll positions so the top is always visible upon opening
  const modalBody = document.getElementById("winnerModalBody");
  if (modalBody) modalBody.scrollTop = 0;
  if (teamMembersList) teamMembersList.scrollTop = 0;

  startCountdown(30);
  rollNewChallenge();

  modal.classList.remove("hidden");
}

function showPairWinnerModal(boyRaw, girlRaw) {
  currentPairWinners = { boy: boyRaw, girl: girlRaw };
  const modal = document.getElementById("winnerModalOverlay");
  const modalTitle = document.querySelector(".winner-modal-header .modal-title");
  if (modalTitle) {
    modalTitle.textContent = TRANSLATIONS[currentLang].pairDrawTitle;
  }

  const removeBtn = document.getElementById("removeWinnerBtn");
  const keepBtn = document.getElementById("keepWinnerBtn");
  if (removeBtn) {
    removeBtn.innerHTML = `<span>❌</span> <span>${TRANSLATIONS[currentLang].removeBothWinners}</span>`;
  }
  if (keepBtn) {
    keepBtn.innerHTML = `<span>✅</span> <span>${TRANSLATIONS[currentLang].keepBothWinners}</span>`;
  }

  const nameDisplay = document.getElementById("winnerNameDisplay");
  const boyParsed = parseMemberGender(boyRaw);
  const girlParsed = parseMemberGender(girlRaw);

  const spotlightEl = document.getElementById("winnerAvatarSpotlight");
  if (spotlightEl) {
    spotlightEl.textContent = "👫";
    spotlightEl.classList.remove("hidden");
  }

  nameDisplay.innerHTML = `
    <div class="pair-winner-display">
      <div class="pair-card boy-card">
        <span class="pair-gender-icon">👦</span>
        <span class="pair-name">${escapeHtml(boyParsed.name)}</span>
      </div>
      <span class="pair-connector">&</span>
      <div class="pair-card girl-card">
        <span class="pair-gender-icon">👧</span>
        <span class="pair-name">${escapeHtml(girlParsed.name)}</span>
      </div>
    </div>
  `;

  const teamMembersBox = document.getElementById("winnerTeamMembersBox");
  if (teamMembersBox) teamMembersBox.classList.add("hidden");

  const modalBody = document.getElementById("winnerModalBody");
  if (modalBody) modalBody.scrollTop = 0;

  startCountdown(30);
  rollNewChallenge();

  modal.classList.remove("hidden");
}

function hideWinnerModal() {
  clearInterval(countdownTimerId);
  const modal = document.getElementById("winnerModalOverlay");
  modal.classList.add("hidden");
  const spotlightEl = document.getElementById("winnerAvatarSpotlight");
  if (spotlightEl) spotlightEl.classList.add("hidden");
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
  const items = getWheelItems().filter((_, i) => i !== currentWinnerIndex);
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
    const topWinner = winnersHistory[0];
    topWinner.stars = (topWinner.stars || 0) + 1;

    // Feature 3: Automatically award star into studentScores leaderboard
    const parsed = parseMemberGender(topWinner.name);
    adjustStudentScore(parsed.name, 1);

    renderHistory();
    launchConfetti(0.4);
    showToastNotification(TRANSLATIONS[currentLang].starAwardedToast + parsed.name + " (+1 ⭐)");
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
// 8. TEAM MAKER GENERATOR WITH GENDER BALANCE & COOPERATIVE ROLES
// ==========================================================================
let currentGeneratedTeams = [];

function generateTeams() {
  const inputVal = document.getElementById("teamNamesInput").value;
  const rawMembers = inputVal
    .split("\n")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  // Feature 1: Exclude absent students
  const members = rawMembers.filter(s => !absentSet.has(s));

  if (members.length < 2) {
    alert(TRANSLATIONS[currentLang].needMembersForTeams);
    return;
  }

  const isGenderBalance = document.getElementById("genderBalanceCheckbox")?.checked;
  const divideMethod = document.getElementById("divideByGroupsBtn").classList.contains("active") ? "groups" : "members";
  const countVal = Math.max(1, parseInt(document.getElementById("divideCountInput").value, 10) || 2);

  let numGroups = 2;
  if (divideMethod === "groups") {
    numGroups = Math.min(countVal, members.length);
  } else {
    numGroups = Math.max(1, Math.ceil(members.length / countVal));
  }

  const groups = Array.from({ length: numGroups }, () => []);

  if (isGenderBalance) {
    const males = [];
    const females = [];
    const others = [];

    members.forEach(m => {
      const g = parseMemberGender(m).gender;
      if (g === "M") males.push(m);
      else if (g === "F") females.push(m);
      else others.push(m);
    });

    // Fisher-Yates shuffle each subgroup
    const shuffleArray = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    };

    shuffleArray(males);
    shuffleArray(females);
    shuffleArray(others);

    // 1. Smart gender-balanced distribution
    // Pick the group with smallest total size; tie-break by fewest of target gender
    function getBestGroup(targetGender) {
      let bestIdx = 0;
      for (let i = 1; i < groups.length; i++) {
        if (groups[i].length < groups[bestIdx].length) {
          bestIdx = i;
        } else if (groups[i].length === groups[bestIdx].length) {
          if (targetGender) {
            const countI = groups[i].filter(x => parseMemberGender(x).gender === targetGender).length;
            const countBest = groups[bestIdx].filter(x => parseMemberGender(x).gender === targetGender).length;
            if (countI < countBest) {
              bestIdx = i;
            }
          }
        }
      }
      return bestIdx;
    }

    // Distribute larger gender list first, then smaller gender list, then others
    const [firstList, secondList, firstG, secondG] = males.length >= females.length 
      ? [males, females, 'M', 'F'] 
      : [females, males, 'F', 'M'];

    firstList.forEach(item => {
      const idx = getBestGroup(firstG);
      groups[idx].push(item);
    });

    secondList.forEach(item => {
      const idx = getBestGroup(secondG);
      groups[idx].push(item);
    });

    others.forEach(item => {
      const idx = getBestGroup(null);
      groups[idx].push(item);
    });
  } else {
    const shuffled = [...members];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    shuffled.forEach((member, index) => {
      groups[index % numGroups].push(member);
    });
  }

  currentGeneratedTeams = groups;
  generatedTeamsMap = {};
  groups.forEach((teamMembers, idx) => {
    const title = getGroupTitle(idx, groups.length);
    generatedTeamsMap[title] = [...teamMembers];
  });

  // Automatically sync with groupsList so the wheel is ready to spin immediately
  groupsList = Object.keys(generatedTeamsMap);

  renderTeamCards(groups);
  launchConfetti();
}

function sendTeamsToGroupWheel() {
  if (currentGeneratedTeams.length === 0) {
    generateTeams();
  }
  if (Object.keys(generatedTeamsMap).length === 0) return;

  groupsList = Object.keys(generatedTeamsMap);
  switchMode("spin-groups");
  showToastNotification(TRANSLATIONS[currentLang].teamsTransferredToast);
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

    let boyCount = 0;
    let girlCount = 0;
    teamMembers.forEach(m => {
      const g = parseMemberGender(m).gender;
      if (g === "M") boyCount++;
      else if (g === "F") girlCount++;
    });

    const genderStatsBadge = (boyCount > 0 || girlCount > 0)
      ? `<span class="team-card-gender-pill"><span class="m-stat">👦 ${boyCount}</span> · <span class="f-stat">👧 ${girlCount}</span></span>`
      : "";

    const card = document.createElement("div");
    card.className = "team-card";
    card.style.background = theme.bg;
    card.style.borderColor = theme.border;

    card.innerHTML = `
      <div class="team-card-header">
        <div class="team-card-title-group">
          <span class="team-card-title">${escapeHtml(title)}</span>
          ${genderStatsBadge}
        </div>
        <span class="team-card-badge" style="background:${theme.badge}22; color:${theme.badge}; border: 1px solid ${theme.badge}55;">
          ${teamMembers.length}${TRANSLATIONS[currentLang].membersSuffix}
        </span>
      </div>
      <ul class="team-card-members">
        ${teamMembers.map((m, mIdx) => {
          const parsed = parseMemberGender(m);
          return `
            <li class="team-member-item">
              <span class="member-name-wrap">
                ${parsed.icon ? `<span class="member-gender-icon">${parsed.icon}</span>` : ""}
                <span class="member-name-text">${escapeHtml(parsed.name)}</span>
              </span>
              ${getMemberRoleBadge(mIdx)}
            </li>
          `;
        }).join("")}
      </ul>
    `;

    container.appendChild(card);
  });

  renderScoreboard();
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
// 9. EXCEL / CSV EXPORT WITH UTF-8 BOM & GENDER COLUMN
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

  let csv = "Group,Member Name,Gender,Role\n";
  currentGeneratedTeams.forEach((teamMembers, idx) => {
    const groupName = getGroupTitle(idx, currentGeneratedTeams.length);
    teamMembers.forEach((member, mIdx) => {
      const parsed = parseMemberGender(member);
      const genderLabel = parsed.gender === "M"
        ? TRANSLATIONS[currentLang].boyLabel
        : parsed.gender === "F"
          ? TRANSLATIONS[currentLang].girlLabel
          : TRANSLATIONS[currentLang].unspecifiedLabel;

      const roles = [
        TRANSLATIONS[currentLang].roleLeader,
        TRANSLATIONS[currentLang].roleSecretary,
        TRANSLATIONS[currentLang].roleSpeaker,
        TRANSLATIONS[currentLang].roleTimer
      ];
      const role = roles[mIdx] || TRANSLATIONS[currentLang].roleMember;
      csv += `"${groupName}","${parsed.name.replace(/"/g, '""')}","${genderLabel}","${role}"\n`;
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
// 10. TELEGRAM SHARING INTEGRATION (BYPASSES ISP T.ME BLOCKS)
// ==========================================================================
function showToastNotification(msg) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 4500);
}

function openTelegramShare(message, url) {
  const fullText = `${message}\n\n🔗 ${url}`;

  // 1. Copy to clipboard immediately so user can easily Paste (Ctrl+V) anywhere
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullText).catch(() => {});
  }

  // 2. Native app protocol: directly opens Telegram App on Windows & Mobile (bypasses ISP t.me block!)
  const nativeAppUrl = `tg://msg_url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;
  const webAltUrl = `https://telegram.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;

  // Show friendly feedback toast
  showToastNotification(
    currentLang === "km"
      ? "📋 បានចម្លងសារ & កំពុងបើក Telegram! (លោកគ្រូអាចចុច Paste/Ctrl+V ក្នុង Telegram បាន)"
      : "📋 Copied text & opening Telegram! (You can also Paste with Ctrl+V)"
  );

  // Trigger native Telegram app directly
  window.location.href = nativeAppUrl;

  // Fallback to web link after a short delay
  setTimeout(() => {
    window.open(webAltUrl, "_blank");
  }, 1000);
}

function shareTeamsToTelegram() {
  const cards = document.querySelectorAll(".team-card");
  if (cards.length === 0) {
    generateTeams();
  }
  let message = `🎯 លទ្ធផលការបែងចែកក្រុម (AC Mart Lucky Wheel)\n\n`;
  cards.forEach(card => {
    const title = card.querySelector(".team-card-title").textContent.trim();
    const members = Array.from(card.querySelectorAll(".team-member-item"))
      .map(li => `• ${li.textContent.trim().replace(/\s+/g, ' ')}`)
      .join("\n");
    message += `👥 ${title}:\n${members}\n\n`;
  });

  openTelegramShare(message, APP_URL);
}

function shareWinnerToTelegram() {
  const winnerName = document.getElementById("winnerNameDisplay").textContent.trim();
  let message = `🎉 អបអរសាទរ! អ្នកឈ្នះការចាប់ឆ្នោត AC Mart Lucky Wheel គឺ៖\n\n🏆 ${winnerName}`;

  if (currentMode === "spin-groups" && generatedTeamsMap[winnerName] && generatedTeamsMap[winnerName].length > 0) {
    const members = generatedTeamsMap[winnerName];
    message += `\n\n👥 សមាជិកក្នុងក្រុម៖\n` + members.map(m => `• ${m}`).join("\n");
  }

  message += `\n\n👉 ចូលរួមលេងបន្ត៖`;
  openTelegramShare(message, APP_URL);
}

function shareAppViaTelegram() {
  const message = `🎡 សូមអញ្ជើញចូលរួមកម្មវិធីបង្វិលកង ចាប់ឆ្នោត & ចែកក្រុម ដោយឥតគិតថ្លៃ៖`;
  openTelegramShare(message, APP_URL);
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
    generatedTeamsMap,
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
      if (data.generatedTeamsMap) generatedTeamsMap = data.generatedTeamsMap;
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
  const genderFilterBar = document.getElementById("wheelGenderFilterBar");
  const sidebarGenderHint = document.getElementById("sidebarGenderHint");
  const sidebarMaleBadge = document.getElementById("sidebarMaleBadge");
  const sidebarFemaleBadge = document.getElementById("sidebarFemaleBadge");

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

    if (genderFilterBar) {
      if (newMode === "spin-groups") {
        genderFilterBar.classList.add("hidden");
      } else {
        genderFilterBar.classList.remove("hidden");
      }
    }
    if (sidebarGenderHint) {
      sidebarGenderHint.style.display = newMode === "spin-groups" ? "none" : "flex";
    }
    if (sidebarMaleBadge) {
      sidebarMaleBadge.style.display = newMode === "spin-groups" ? "none" : "inline-flex";
    }
    if (sidebarFemaleBadge) {
      sidebarFemaleBadge.style.display = newMode === "spin-groups" ? "none" : "inline-flex";
    }

    updateSidebarTitle();
    updateTextareaFromState();
    updateItemCount();
    drawWheel();
  }
}

function updateTeamMemberCount() {
  const teamInput = document.getElementById("teamNamesInput");
  if (!teamInput) return;

  const rawMembers = teamInput.value
    .split("\n")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  let boyCount = 0;
  let girlCount = 0;
  rawMembers.forEach(n => {
    const g = parseMemberGender(n).gender;
    if (g === "M") boyCount++;
    else if (g === "F") girlCount++;
  });

  const countBadge = document.getElementById("teamMembersCountBadge");
  const maleBadge = document.getElementById("teamMaleBadge");
  const femaleBadge = document.getElementById("teamFemaleBadge");

  if (countBadge) countBadge.textContent = rawMembers.length;
  if (maleBadge) {
    maleBadge.textContent = `👦 ${boyCount}`;
    maleBadge.style.display = boyCount > 0 ? "inline-flex" : "none";
  }
  if (femaleBadge) {
    femaleBadge.textContent = `👧 ${girlCount}`;
    femaleBadge.style.display = girlCount > 0 ? "inline-flex" : "none";
  }
}

// ==========================================================================
// FEATURE 1: ATTENDANCE / ABSENCE MANAGER
// ==========================================================================
function updateAttendanceView() {
  const container = document.getElementById("attendanceChecklist");
  if (!container) return;
  const searchInput = document.getElementById("attendanceSearchInput");
  const query = (searchInput?.value || "").toLowerCase().trim();

  container.innerHTML = "";
  const allNames = namesList;
  let presentCount = 0;

  allNames.forEach(rawName => {
    const isAbsent = absentSet.has(rawName);
    if (!isAbsent) presentCount++;

    const parsed = parseMemberGender(rawName);
    if (query && !parsed.name.toLowerCase().includes(query) && !rawName.toLowerCase().includes(query)) {
      return;
    }

    const itemEl = document.createElement("div");
    itemEl.className = `attendance-item ${isAbsent ? "absent" : "present"}`;

    const infoEl = document.createElement("div");
    infoEl.className = "attendance-student-info";
    const genderIcon = parsed.icon || (parsed.gender === "M" ? "👦" : parsed.gender === "F" ? "👧" : "👤");
    infoEl.innerHTML = `<span>${genderIcon}</span> <span class="attendance-name">${escapeHtml(parsed.name)}</span>`;

    const chipEl = document.createElement("span");
    chipEl.className = `attendance-status-chip ${isAbsent ? "absent" : "present"}`;
    chipEl.innerHTML = isAbsent ? `❌ ${TRANSLATIONS[currentLang].absentLabel}` : `✅ ${TRANSLATIONS[currentLang].presentLabel}`;

    itemEl.appendChild(infoEl);
    itemEl.appendChild(chipEl);

    itemEl.addEventListener("click", () => {
      toggleStudentAttendance(rawName);
    });

    container.appendChild(itemEl);
  });

  const summaryBadge = document.getElementById("attendanceSummaryBadge");
  if (summaryBadge) {
    summaryBadge.textContent = `${presentCount}/${allNames.length} ${TRANSLATIONS[currentLang].presentLabel}`;
  }
}

function toggleStudentAttendance(rawName) {
  if (absentSet.has(rawName)) {
    absentSet.delete(rawName);
  } else {
    absentSet.add(rawName);
  }
  localStorage.setItem("lucky_wheel_absent", JSON.stringify([...absentSet]));
  updateAttendanceView();
  updateItemCount();
  invalidateWheelCache();
  drawWheel();
}

function markAllStudentsAttendance(present) {
  if (present) {
    absentSet.clear();
  } else {
    namesList.forEach(n => absentSet.add(n));
  }
  localStorage.setItem("lucky_wheel_absent", JSON.stringify([...absentSet]));
  updateAttendanceView();
  updateItemCount();
  invalidateWheelCache();
  drawWheel();
}

function switchSidebarTab(tab) {
  activeSidebarTab = tab;
  const viewTextBtn = document.getElementById("viewTextBtn");
  const viewAttendanceBtn = document.getElementById("viewAttendanceBtn");
  const editorContainer = document.getElementById("editorViewContainer");
  const attendanceContainer = document.getElementById("attendanceViewContainer");

  if (tab === "attendance") {
    viewAttendanceBtn?.classList.add("active");
    viewTextBtn?.classList.remove("active");
    editorContainer?.classList.add("hidden");
    attendanceContainer?.classList.remove("hidden");
    updateAttendanceView();
  } else {
    viewTextBtn?.classList.add("active");
    viewAttendanceBtn?.classList.remove("active");
    editorContainer?.classList.remove("hidden");
    attendanceContainer?.classList.add("hidden");
  }
}

// ==========================================================================
// FEATURE 5: THEME CUSTOMIZATION
// ==========================================================================
function applyTheme(themeKey) {
  currentTheme = themeKey;
  localStorage.setItem("lucky_wheel_theme", themeKey);

  document.body.classList.remove("theme-neon", "theme-chalkboard", "theme-khmer-gold", "theme-pastel");
  if (themeKey !== "theme-neon") {
    document.body.classList.add(themeKey);
  }

  const themeSelector = document.getElementById("themeSelector");
  if (themeSelector) themeSelector.value = themeKey;

  invalidateWheelCache();
  drawWheel();
}

// ==========================================================================
// FEATURE 4: PROJECTOR & SMART TV FULLSCREEN MODE
// ==========================================================================
function toggleProjectorMode() {
  isProjectorMode = !isProjectorMode;
  const exitBtn = document.getElementById("projectorExitBtn");

  if (isProjectorMode) {
    document.body.classList.add("projector-mode");
    exitBtn?.classList.remove("hidden");
    if (currentMode === "team-maker") {
      switchMode("spin-names");
    }
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  } else {
    document.body.classList.remove("projector-mode");
    exitBtn?.classList.add("hidden");
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
  drawWheel();
}

// ==========================================================================
// FEATURE 3: SCOREBOARD & CLASSROOM LEADERBOARD
// ==========================================================================
function getStudentScore(name) {
  const clean = parseMemberGender(name).name;
  return studentScores[clean] !== undefined ? studentScores[clean] : (studentScores[name] || 0);
}

function adjustStudentScore(name, delta) {
  const clean = parseMemberGender(name).name;
  const current = getStudentScore(clean);
  const nextScore = Math.max(0, current + delta);
  studentScores[clean] = nextScore;
  localStorage.setItem("lucky_wheel_scores", JSON.stringify(studentScores));
  updateScoreboardTotalBadge();
  renderScoreboard();
}

function updateScoreboardTotalBadge() {
  const badge = document.getElementById("scoreboardTotalStars");
  if (!badge) return;
  const total = Object.values(studentScores).reduce((acc, v) => acc + (typeof v === "number" ? v : 0), 0);
  badge.textContent = total;
}

function openScoreboardModal() {
  renderScoreboard();
  const modal = document.getElementById("scoreboardModalOverlay");
  modal?.classList.remove("hidden");
}

function closeScoreboardModal() {
  const modal = document.getElementById("scoreboardModalOverlay");
  modal?.classList.add("hidden");
}

function switchScoreboardTab(tab) {
  scoreboardActiveTab = tab;
  const tabStudents = document.getElementById("scoreTabStudents");
  const tabGroups = document.getElementById("scoreTabGroups");
  const panelStudents = document.getElementById("scoreboardStudentsPanel");
  const panelGroups = document.getElementById("scoreboardGroupsPanel");

  if (tab === "groups") {
    tabGroups?.classList.add("active");
    tabStudents?.classList.remove("active");
    panelStudents?.classList.add("hidden");
    panelGroups?.classList.remove("hidden");
  } else {
    tabStudents?.classList.add("active");
    tabGroups?.classList.remove("active");
    panelStudents?.classList.remove("hidden");
    panelGroups?.classList.add("hidden");
  }
}

function renderScoreboard() {
  updateScoreboardTotalBadge();
  const studentsListEl = document.getElementById("scoreboardStudentsList");
  const groupsGridEl = document.getElementById("scoreboardGroupsGrid");
  if (!studentsListEl || !groupsGridEl) return;

  // 1. Students Leaderboard
  const studentMap = new Map();
  namesList.forEach(raw => {
    const clean = parseMemberGender(raw).name;
    studentMap.set(clean, {
      raw,
      name: clean,
      stars: getStudentScore(clean),
      gender: parseMemberGender(raw).gender
    });
  });
  Object.keys(studentScores).forEach(name => {
    if (!studentMap.has(name)) {
      studentMap.set(name, {
        raw: name,
        name,
        stars: studentScores[name] || 0,
        gender: "U"
      });
    }
  });

  const sortedStudents = Array.from(studentMap.values()).sort((a, b) => b.stars - a.stars);

  studentsListEl.innerHTML = "";
  if (sortedStudents.length === 0) {
    studentsListEl.innerHTML = `<div class="empty-history">${TRANSLATIONS[currentLang].noWinnersYet}</div>`;
  } else {
    sortedStudents.forEach((student, index) => {
      const rank = index + 1;
      const rankBadge = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `#${rank}`;
      const rankClass = rank <= 3 ? `rank-${rank}` : "";
      const genderIcon = student.gender === "M" ? "👦" : student.gender === "F" ? "👧" : "";

      const row = document.createElement("div");
      row.className = `scoreboard-row ${rankClass}`;
      row.innerHTML = `
        <span class="scoreboard-rank-badge">${rankBadge}</span>
        <span class="scoreboard-student-name">
          ${genderIcon ? `<span>${genderIcon}</span>` : ""}
          <span>${escapeHtml(student.name)}</span>
        </span>
        <span class="scoreboard-stars-pill">⭐ ${student.stars}</span>
        <div class="score-stepper-wrap">
          <button class="score-stepper-btn minus" title="-1 Star">-</button>
          <button class="score-stepper-btn plus" title="+1 Star">+</button>
        </div>
      `;
      row.querySelector(".minus").addEventListener("click", () => adjustStudentScore(student.name, -1));
      row.querySelector(".plus").addEventListener("click", () => adjustStudentScore(student.name, 1));
      studentsListEl.appendChild(row);
    });
  }

  // 2. Groups Leaderboard
  groupsGridEl.innerHTML = "";
  if (currentGeneratedTeams && currentGeneratedTeams.length > 0) {
    currentGeneratedTeams.forEach((team) => {
      let teamStars = 0;
      team.members.forEach(m => {
        teamStars += getStudentScore(m);
      });

      const card = document.createElement("div");
      card.className = "scoreboard-group-card";
      card.innerHTML = `
        <div class="scoreboard-group-header">
          <span class="scoreboard-group-title">${escapeHtml(team.title)}</span>
          <span class="scoreboard-group-stars">⭐ ${teamStars}</span>
        </div>
        <div class="scoreboard-group-members">
          ${team.members.map(m => escapeHtml(parseMemberGender(m).name)).join(", ")}
        </div>
      `;
      groupsGridEl.appendChild(card);
    });
  } else {
    groupsGridEl.innerHTML = `<div class="empty-history" style="grid-column: 1/-1;">${currentLang === "km" ? "មិនទាន់មានទិន្នន័យចែកក្រុមទេ" : "No generated teams yet"}</div>`;
  }
}

function exportScoreboardCsv() {
  const studentMap = new Map();
  namesList.forEach(raw => {
    const clean = parseMemberGender(raw).name;
    studentMap.set(clean, { name: clean, stars: getStudentScore(clean), gender: parseMemberGender(raw).gender });
  });
  Object.keys(studentScores).forEach(name => {
    if (!studentMap.has(name)) {
      studentMap.set(name, { name, stars: studentScores[name] || 0, gender: "U" });
    }
  });

  const sortedStudents = Array.from(studentMap.values()).sort((a, b) => b.stars - a.stars);
  let csvContent = "\uFEFFRank,Student Name,Gender,Stars / Points\n";
  sortedStudents.forEach((st, i) => {
    const gText = st.gender === "M" ? "Male" : st.gender === "F" ? "Female" : "Unspecified";
    csvContent += `"${i + 1}","${st.name.replace(/"/g, '""')}","${gText}","${st.stars}"\n`;
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Classroom_Scoreboard_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToastNotification(TRANSLATIONS[currentLang].copiedAlert);
}

function resetScoreboard() {
  if (confirm(TRANSLATIONS[currentLang].scoresResetConfirm)) {
    studentScores = {};
    localStorage.removeItem("lucky_wheel_scores");
    renderScoreboard();
    showToastNotification("✅ " + TRANSLATIONS[currentLang].resetScores);
  }
}

// ==========================================================================
// FEATURE 2: PWA & OFFLINE SUPPORT
// ==========================================================================
function initPwaSupport() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js?v=2.9").then(reg => {
        console.log("ServiceWorker registered successfully:", reg.scope);
      }).catch(err => {
        console.warn("ServiceWorker registration failed:", err);
      });
    });
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const installBtn = document.getElementById("installAppBtn");
    if (installBtn) {
      installBtn.classList.remove("hidden");
    }
  });

  const installBtn = document.getElementById("installAppBtn");
  if (installBtn) {
    installBtn.addEventListener("click", async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === "accepted") {
          installBtn.classList.add("hidden");
        }
        deferredInstallPrompt = null;
      }
    });
  }
}

// ==========================================================================
// 14. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  wheelCanvas = document.getElementById("wheelCanvas");
  wheelCtx = wheelCanvas.getContext("2d");

  applyTheme(currentTheme);
  setLanguage(currentLang);
  populateClassSelector();
  initPwaSupport();

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
      const teamInput = document.getElementById("teamNamesInput");
      if (teamInput) {
        teamInput.value = namesList.join("\n");
        updateTeamMemberCount();
      }
    }
    updateItemCount();
    invalidateWheelCache();
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
    invalidateWheelCache();
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

  // Wheel Gender Filter Listeners
  const filterAllBtn = document.getElementById("filterAllBtn");
  const filterMaleBtn = document.getElementById("filterMaleBtn");
  const filterFemaleBtn = document.getElementById("filterFemaleBtn");
  const pairDrawBtn = document.getElementById("pairDrawBtn");

  function setGenderFilter(filter) {
    genderWheelFilter = filter;
    if (filterAllBtn) filterAllBtn.classList.toggle("active", filter === "all");
    if (filterMaleBtn) filterMaleBtn.classList.toggle("active", filter === "M");
    if (filterFemaleBtn) filterFemaleBtn.classList.toggle("active", filter === "F");
    invalidateWheelCache();
    drawWheel();
  }

  if (filterAllBtn) filterAllBtn.addEventListener("click", () => setGenderFilter("all"));
  if (filterMaleBtn) filterMaleBtn.addEventListener("click", () => setGenderFilter("M"));
  if (filterFemaleBtn) filterFemaleBtn.addEventListener("click", () => setGenderFilter("F"));
  if (pairDrawBtn) pairDrawBtn.addEventListener("click", startPairDraw);

  // Winner Modal Action Buttons
  document.getElementById("removeWinnerBtn").addEventListener("click", () => {
    if (currentPairWinners) {
      namesList = namesList.filter(n => n !== currentPairWinners.boy && n !== currentPairWinners.girl);
      currentPairWinners = null;
      currentWinnerIndex = -1;
      setActiveItems(namesList);
    } else if (currentWinnerIndex >= 0) {
      const items = getWheelItems();
      const winnerItem = items[currentWinnerIndex];
      if (currentMode === "spin-groups") {
        groupsList = groupsList.filter(g => g !== winnerItem);
        setActiveItems(groupsList);
      } else {
        namesList = namesList.filter(n => n !== winnerItem);
        setActiveItems(namesList);
      }
      currentWinnerIndex = -1;
    }
    hideWinnerModal();
  });

  document.getElementById("keepWinnerBtn").addEventListener("click", hideWinnerModal);

  const closeWinnerModalBtn = document.getElementById("closeWinnerModalBtn");
  if (closeWinnerModalBtn) {
    closeWinnerModalBtn.addEventListener("click", hideWinnerModal);
  }

  document.getElementById("winnerModalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "winnerModalOverlay") {
      hideWinnerModal();
    }
  });

  // Team Maker Controls
  const teamInput = document.getElementById("teamNamesInput");
  teamInput.addEventListener("input", () => {
    updateTeamMemberCount();
    const rawMembers = teamInput.value.split("\n").map(s => s.trim()).filter(s => s.length > 0);
    namesList = rawMembers;
    if (currentMode === "spin-names") {
      updateTextareaFromState();
      updateItemCount();
      drawWheel();
    }
  });

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
    namesList = members;
    if (currentMode === "spin-names") {
      updateTextareaFromState();
      updateItemCount();
      drawWheel();
    }
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
  const sendToWheelBtn = document.getElementById("sendTeamsToWheelBtn");
  if (sendToWheelBtn) {
    sendToWheelBtn.addEventListener("click", sendTeamsToGroupWheel);
  }
  document.getElementById("copyTeamsResultBtn").addEventListener("click", copyTeamsToClipboard);
  document.getElementById("exportTeamsCsvBtn").addEventListener("click", exportTeamsToCsv);
  document.getElementById("shareTeamsTelegramBtn").addEventListener("click", shareTeamsToTelegram);

  const genderBalanceCheckbox = document.getElementById("genderBalanceCheckbox");
  if (genderBalanceCheckbox) {
    genderBalanceCheckbox.addEventListener("change", () => {
      if (currentGeneratedTeams.length > 0) {
        generateTeams();
      }
    });
  }

  // Feature 5: Theme Selector
  const themeSelector = document.getElementById("themeSelector");
  if (themeSelector) {
    themeSelector.value = currentTheme;
    themeSelector.addEventListener("change", (e) => applyTheme(e.target.value));
  }

  // Feature 4: Projector Mode
  document.getElementById("projectorBtn")?.addEventListener("click", toggleProjectorMode);
  document.getElementById("projectorExitBtn")?.addEventListener("click", toggleProjectorMode);

  // Feature 3: Scoreboard & Leaderboard
  document.getElementById("scoreboardBtn")?.addEventListener("click", openScoreboardModal);
  document.getElementById("closeScoreboardModalBtn")?.addEventListener("click", closeScoreboardModal);
  document.getElementById("closeScoreboardFooterBtn")?.addEventListener("click", closeScoreboardModal);
  document.getElementById("scoreboardModalOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "scoreboardModalOverlay") closeScoreboardModal();
  });
  document.getElementById("scoreTabStudents")?.addEventListener("click", () => switchScoreboardTab("students"));
  document.getElementById("scoreTabGroups")?.addEventListener("click", () => switchScoreboardTab("groups"));
  document.getElementById("exportScoreboardCsvBtn")?.addEventListener("click", exportScoreboardCsv);
  document.getElementById("resetScoreboardBtn")?.addEventListener("click", resetScoreboard);

  // Feature 1: Attendance Switcher & Toolbar
  document.getElementById("viewTextBtn")?.addEventListener("click", () => switchSidebarTab("text"));
  document.getElementById("viewAttendanceBtn")?.addEventListener("click", () => switchSidebarTab("attendance"));
  document.getElementById("markAllPresentBtn")?.addEventListener("click", () => markAllStudentsAttendance(true));
  document.getElementById("markAllAbsentBtn")?.addEventListener("click", () => markAllStudentsAttendance(false));
  document.getElementById("attendanceSearchInput")?.addEventListener("input", updateAttendanceView);

  // Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT") return;
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      if (!isSpinning && currentMode !== "team-maker") {
        spinWheel();
      }
    } else if (e.code === "KeyP" || e.key === "p" || e.key === "P") {
      toggleProjectorMode();
    } else if (e.code === "Escape") {
      hideWinnerModal();
      closeQrModal();
      closeScoreboardModal();
      if (isProjectorMode) toggleProjectorMode();
    }
  });

  window.addEventListener("resize", () => {
    invalidateWheelCache();
    drawWheel();
  });
});
