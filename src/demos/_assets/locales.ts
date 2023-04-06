interface Locale {
  name: string;
  locale: string;
  dir?: "ltr" | "rtl";
}

export const locales: Locale[] = [
  { name: "Afrikaans", locale: "af" },
  { name: "Albanian", locale: "sq" },
  { name: "Albanian (Albania)", locale: "sq-AL" },
  { name: "Amharic", locale: "am" },
  { name: "Arabic", locale: "ar", dir: "rtl" },
  { name: "Arabic (Algeria)", locale: "ar-DZ", dir: "rtl" },
  { name: "Arabic (Bahrain)", locale: "ar-BH", dir: "rtl" },
  { name: "Arabic (Egypt)", locale: "ar-EG", dir: "rtl" },
  { name: "Arabic (Iraq)", locale: "ar-IQ", dir: "rtl" },
  { name: "Arabic (Jordan)", locale: "ar-JO", dir: "rtl" },
  { name: "Arabic (Kuwait)", locale: "ar-KW", dir: "rtl" },
  { name: "Arabic (Lebanon)", locale: "ar-LB", dir: "rtl" },
  { name: "Arabic (Libya)", locale: "ar-LY", dir: "rtl" },
  { name: "Arabic (Morocco)", locale: "ar-MA", dir: "rtl" },
  { name: "Arabic (Oman)", locale: "ar-OM", dir: "rtl" },
  { name: "Arabic (Qatar)", locale: "ar-QA", dir: "rtl" },
  { name: "Arabic (Saudi Arabia)", locale: "ar-SA", dir: "rtl" },
  { name: "Arabic (Sudan)", locale: "ar-SD", dir: "rtl" },
  { name: "Arabic (Syria)", locale: "ar-SY", dir: "rtl" },
  { name: "Arabic (Tunisia)", locale: "ar-TN", dir: "rtl" },
  { name: "Arabic (United Arab Emirates)", locale: "ar-AE", dir: "rtl" },
  { name: "Arabic (Yemen)", locale: "ar-YE", dir: "rtl" },
  { name: "Armenian (Armenia)", locale: "hy-AM" },
  { name: "Assamese", locale: "as" },
  { name: "Azeri (Cyrillic)", locale: "az" },
  { name: "Azeri (Latin)", locale: "az" },
  { name: "Basque", locale: "eu" },
  { name: "Belarusian", locale: "be" },
  { name: "Belarusian (Belarus)", locale: "be-BY" },
  { name: "Bengali", locale: "bn" },
  { name: "Bengali (Bangladesh)", locale: "bn-BD" },
  { name: "Bengali (India)", locale: "bn-IN" },
  { name: "Bosnian", locale: "bs" },
  { name: "Bulgarian", locale: "bg" },
  { name: "Bulgarian (Bulgaria)", locale: "bg-BG" },
  { name: "Burmese", locale: "my" },
  { name: "Catalan", locale: "ca" },
  { name: "Catalan (Spain)", locale: "ca-ES" },
  { name: "Chinese", locale: "zh" },
  { name: "Chinese (China)", locale: "zh-CN" },
  { name: "Chinese (Hong Kong)", locale: "zh-HK" },
  { name: "Chinese (Macau SAR)", locale: "zh-MO" },
  { name: "Chinese (Singapore)", locale: "zh-SG" },
  { name: "Chinese (Taiwan)", locale: "zh-TW" },
  { name: "Croatian", locale: "hr" },
  { name: "Croatian (Croatia)", locale: "hr-HR" },
  { name: "Czech", locale: "cs" },
  { name: "Czech (Czech Republic)", locale: "cs-CZ" },
  { name: "Danish", locale: "da" },
  { name: "Danish (Denmark)", locale: "da-DK" },
  { name: "Divehi", locale: "dv" },
  { name: "Dutch", locale: "nl" },
  { name: "Dutch (Belgium)", locale: "nl-BE" },
  { name: "Dutch (Netherlands)", locale: "nl-NL" },
  { name: "English", locale: "en" },
  { name: "English (Australia)", locale: "en-AU" },
  { name: "English (Belize)", locale: "en-BZ" },
  { name: "English (Canada)", locale: "en-CA" },
  { name: "English (Caribbean)", locale: "en-CB" },
  { name: "English (Great Britain)", locale: "en-GB" },
  { name: "English (India)", locale: "en-IN" },
  { name: "English (Ireland)", locale: "en-IE" },
  { name: "English (Jamaica)", locale: "en-JM" },
  { name: "English (Malta)", locale: "en-MT" },
  { name: "English (New Zealand)", locale: "en-NZ" },
  { name: "English (Philippines)", locale: "en-PH" },
  { name: "English (South Africa)", locale: "en-ZA" },
  { name: "English (Singapore)", locale: "en-SG" },
  { name: "English (Trinidad)", locale: "en-TT" },
  { name: "English (United States)", locale: "en-US" },
  { name: "English (South Africa)", locale: "en-ZA" },
  { name: "Estonian", locale: "et" },
  { name: "Estonian (Estonia)", locale: "et-EE" },
  { name: "Faroese", locale: "fo" },
  { name: "Farsi (Persian)", locale: "fa" },
  { name: "Finnish", locale: "fi" },
  { name: "Finnish (Finland)", locale: "fi-FI" },
  { name: "French", locale: "fr" },
  { name: "French (Belgium)", locale: "fr-BE" },
  { name: "French (Canada)", locale: "fr-CA" },
  { name: "French (Switzerland)", locale: "fr-CH" },
  { name: "French (France)", locale: "fr-FR" },
  { name: "French (Luxembourg)", locale: "fr-LU" },
  { name: "Gaelic (Ireland)", locale: "gd-IE" },
  { name: "Gaelic (Scotland)", locale: "gd" },
  { name: "Galician", locale: "gl" },
  { name: "Georgian", locale: "ka" },
  { name: "German", locale: "de" },
  { name: "German (Austria)", locale: "de-AT" },
  { name: "German (Germany)", locale: "de-DE" },
  { name: "German (Liechtenstein)", locale: "de-LI" },
  { name: "German (Luxembourg)", locale: "de-LU" },
  { name: "German (Switzerland)", locale: "de-CH" },
  { name: "Greek", locale: "el" },
  { name: "Greek (Cyprus)", locale: "el-CY" },
  { name: "Greek (Greece)", locale: "el-GR" },
  { name: "Guarani (Paraguay)", locale: "gu" },
  { name: "Gujarati", locale: "gn" },
  { name: "Hebrew", locale: "iw" },
  { name: "Hebrew (Israel)", locale: "iw-IL" },
  { name: "Hindi (India)", locale: "hi-IN" },
  { name: "Hungarian", locale: "hu" },
  { name: "Hungarian (Hungary)", locale: "hu-HU" },
  { name: "Icelandic", locale: "is" },
  { name: "Icelandic (Iceland)", locale: "is-IS" },
  { name: "Indonesian (ISO 639)", locale: "in" },
  { name: "Indonesian (Indonesia) (ISO 639)", locale: "in-ID" },
  { name: "Indonesian (ISO 3166)", locale: "id" },
  { name: "Indonesian (Indonesia) (ISO 3166)", locale: "id-ID" },
  { name: "Irish", locale: "ga" },
  { name: "Irish (Ireland)", locale: "ga-IE" },
  { name: "Italian", locale: "it" },
  { name: "Italian (Italy)", locale: "it-IT" },
  { name: "Italian (Switzerland)", locale: "it-CH" },
  { name: "Japanese", locale: "ja" },
  { name: "Japanese (Japan)", locale: "ja-JP" },
  { name: "Kannada", locale: "kn" },
  { name: "Kashmiri", locale: "ks" },
  { name: "Kazakh", locale: "kk" },
  { name: "Khmer", locale: "km" },
  { name: "Korean", locale: "ko" },
  { name: "Korean (South Korea)", locale: "ko-KR" },
  { name: "Lao", locale: "lo" },
  { name: "Latin", locale: "la" },
  { name: "Latvian", locale: "lv" },
  { name: "Latvian (Latvia)", locale: "lv-LV" },
  { name: "Lithuanian", locale: "lt" },
  { name: "Lithuanian (Lithuania)", locale: "lt-LT" },
  { name: "Macedonian", locale: "mk" },
  { name: "Macedonian (Macedonia)", locale: "mk-MK" },
  { name: "Malay", locale: "ms" },
  { name: "Malay (Brunei)", locale: "ms-BN" },
  { name: "Malay (Malaysia)", locale: "ms-MY" },
  { name: "Malayalam", locale: "ml" },
  { name: "Maltese", locale: "mt" },
  { name: "Maltese (Malta)", locale: "mt-MT" },
  { name: "Maori", locale: "mi" },
  { name: "Marathi", locale: "mr" },
  { name: "Mongolian", locale: "mn" },
  { name: "Nepali", locale: "ne" },
  { name: "Norwegian", locale: "no" },
  { name: "Norwegian (Bokml)", locale: "nb" },
  { name: "Norwegian (Norway)", locale: "no-NO" },
  { name: "Norwegian (Norway, Nynorsk)", locale: "no-NY" },
  { name: "Oriya", locale: "or" },
  { name: "Polish", locale: "pl" },
  { name: "Polish (Poland)", locale: "pl-PL" },
  { name: "Portuguese", locale: "pt" },
  { name: "Portuguese (Brazil)", locale: "pt-BR" },
  { name: "Portuguese (Portugal)", locale: "pt-PT" },
  { name: "Punjabi", locale: "pa" },
  { name: "Raeto-Romance", locale: "rm" },
  { name: "Romanian", locale: "ro" },
  { name: "Romanian (Moldova)", locale: "ro-MO" },
  { name: "Romanian (Romania)", locale: "ro-RO" },
  { name: "Russian", locale: "ru" },
  { name: "Russian (Moldova)", locale: "ru-MO" },
  { name: "Russian (Russia)", locale: "ru-RU" },
  { name: "Sanskrit", locale: "sa" },
  { name: "Serbian", locale: "sr" },
  { name: "Serbian (Cyrillic, Latin)", locale: "sr-SP" },
  { name: "Serbian (Bosnia and Herzegovina)", locale: "sr-BA" },
  { name: "Serbian (Montenegro)", locale: "sr-ME" },
  { name: "Serbian (Serbia)", locale: "sr-RS" },
  { name: "Serbian (Serbia and Montenegro)", locale: "sr-CS" },
  { name: "Setsuana", locale: "tn" },
  { name: "Sindhi", locale: "sd" },
  { name: "Sinhala", locale: "si" },
  { name: "Slovak", locale: "sk" },
  { name: "Slovak (Slovakia)", locale: "sk-SK" },
  { name: "Slovenian", locale: "sl" },
  { name: "Slovenian (Slovenia)", locale: "sl-SI" },
  { name: "Somali", locale: "so" },
  { name: "Sorbian", locale: "sb" },
  { name: "Spanish", locale: "es" },
  { name: "Spanish (Argentina)", locale: "es-AR" },
  { name: "Spanish (Bolivia)", locale: "es-BO" },
  { name: "Spanish (Chile)", locale: "es-CL" },
  { name: "Spanish (Colombia)", locale: "es-CO" },
  { name: "Spanish (Costa Rica)", locale: "es-CR" },
  { name: "Spanish (Dominican Republic)", locale: "es-DO" },
  { name: "Spanish (Ecuador)", locale: "es-EC" },
  { name: "Spanish (El Salvador)", locale: "es-SV" },
  { name: "Spanish (Guatemala)", locale: "es-GT" },
  { name: "Spanish (Honduras)", locale: "es-HN" },
  { name: "Spanish (Mexico)", locale: "es-MX" },
  { name: "Spanish (Nicaragua)", locale: "es-NI" },
  { name: "Spanish (Panama)", locale: "es-PA" },
  { name: "Spanish (Paraguay)", locale: "es-PY" },
  { name: "Spanish (Peru)", locale: "es-PE" },
  { name: "Spanish (Puerto Rico)", locale: "es-PR" },
  { name: "Spanish (Spain)", locale: "es-ES" },
  { name: "Spanish (United States)", locale: "es-US" },
  { name: "Spanish (Uruguay)", locale: "es-UY" },
  { name: "Spanish (Venezuela)", locale: "es-VE" },
  { name: "Swahili", locale: "sw" },
  { name: "Swedish", locale: "sv" },
  { name: "Swedish (Finland)", locale: "sv-FI" },
  { name: "Swedish (Sweden)", locale: "sv-SE" },
  { name: "Tajik", locale: "tg" },
  { name: "Tamil", locale: "ta" },
  { name: "Tatar", locale: "tt" },
  { name: "Telugu", locale: "te" },
  { name: "Thai", locale: "th" },
  { name: "Thai (Thailand)", locale: "th-TH" },
  { name: "Thai (Thai Digits)", locale: "th-TH-u-nu-thai" },
  { name: "Tibetan", locale: "bo" },
  { name: "Tsonga", locale: "ts" },
  { name: "Turkish", locale: "tr" },
  { name: "Turkish (Turkey)", locale: "tr-TR" },
  { name: "Turkmen", locale: "tk" },
  { name: "Ukrainian", locale: "uk" },
  { name: "Ukrainian (Ukraine)", locale: "uk-UA" },
  { name: "Urdu", locale: "ur" },
  { name: "Uzbek (Cyrillic, Latin)", locale: "uz-UZ" },
  { name: "Vietnamese", locale: "vi" },
  { name: "Vietnamese (Vietnam)", locale: "vi-VN" },
  { name: "Welsh", locale: "cy" },
  { name: "Xhosa", locale: "xh" },
  { name: "Yiddish", locale: "yi" },
  { name: "Zulu", locale: "zu" }
];
