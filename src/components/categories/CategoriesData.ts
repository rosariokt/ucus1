
// The categories list
export const allCategories = [
  "snbi", "senastek", "jnatia", "tantular", "santi", "isall", "stilistika", 
  "iscece", "widyacakra", "iccs", "mite", "icbb", "essential", "ctas", "jmrt", 
  "lontar", "jik", "jkh", "pariwisata", "jvet", "buletinvet", "nandur", "jmbk", 
  "bse", "jiab", "aret", "jsgs", "atbes", "jvas", "jitter", "jcabe", "jmept", 
  "jeei", "jfsa", "ujossh", "jhsm", "pustaka", "ujlc", "jap", "jbn", "ijeg", 
  "jat", "kerthagosa", "agrotechno", "ijeet", "pelatihan", "mettek", 
  "buletinfisika", "penjor", "d3perpus", "obgyn", "pangan", "komunikasi", 
  "politika", "lanskap", "environment", "languange", "citizen", "sorot", 
  "agribisnis", "hi", "pakis", "kajianbali", "prosidingcsgteis2013", "psikologi", 
  "destinasipar", "jumpa", "ruang", "simbiosis", "emu", "kajian", "merpati", 
  "kerthawicara", "kerthasemaya", "kerthanegara", "kerthadesa", "bmj", "jieits", 
  "cakra", "ach", "jip", "kerthapatrika", "jits", "medicina", "input", "dinamika", 
  "widya", "iptekma", "ijlfs", "agrotrop", "jpsa", "soca", "jim", "natah", 
  "srikandi", "agritrop", "jchem", "jmhu", "jmat", "piramida", "jbb", "agrotek", 
  "sastra", "sport", "jikh", "metamorfosa", "jmas", "jum", "mekanika", "jtip", 
  "itepa", "jei", "beta", "mip", "jekt", "spektrum", "coping", "jsn", "eom", 
  "eol", "eot", "jfu", "jasb", "ecs", "jast", "ijbs", "uee"
];

// Feature categories to highlight
export const featuredCategories = [
  "medicina", "psikologi", "komunikasi", "environment", "agribisnis", 
  "sastra", "sport", "iscece", "languange", "pangan"
];

// Category icons mapping
export const categoryIcons: Record<string, string> = {
  medicina: "BookOpen",
  psikologi: "BookOpen",
  komunikasi: "BookOpen",
  environment: "BookOpen",
  agribisnis: "BookOpen",
  sastra: "BookOpen",
  sport: "BookOpen",
  iscece: "BookOpen",
  languange: "BookOpen",
  pangan: "BookOpen",
};

// Helper function to get random items from an array
export const getRandomItems = (array: string[], count: number) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default {
  allCategories,
  featuredCategories,
  categoryIcons,
  getRandomItems
};
