
export const languages = [
  { code: 'en', name: 'English' },
  { code: 'te', name: 'Telugu' },
  { code: 'hi', name: 'Hindi' },
  { code: 'mr', name: 'Marathi' },
  { code: 'ta', name: 'Tamil' },
  { code: 'fr', name: 'French' }
];

export const translations = {
  en: {
    common: {
      login: 'Login',
      signup: 'Sign Up',
      email: 'Email',
      password: 'Password',
      selectLanguage: 'Select Language',
      welcomeMessage: 'Welcome to VOYCE Mental Health Services',
      description: 'Professional mental health support and resources',
      newsletters: 'Newsletters',
      thoughts: 'Clear Thoughts',
      visitWebsite: 'Visit Website'
    }
  },
  te: {
    common: {
      login: 'లాగిన్',
      signup: 'సైన్ అప్',
      email: 'ఇమెయిల్',
      password: 'పాస్వర్డ్',
      selectLanguage: 'భాష ఎంచుకోండి',
      welcomeMessage: 'VOYCE మానసిక ఆరోగ్య సేవలకు స్వాగతం',
      description: 'వృత్తిపరమైన మానసిక ఆరోగ్య మద్దతు మరియు వనరులు',
      newsletters: 'వార్తాలేఖలు',
      thoughts: 'ఆలోచనలు',
      visitWebsite: 'వెబ్సైట్ సందర్శించండి'
    }
  },
  // Note: Similar structure for other languages, but for brevity I'll just show these two
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en.common;
