import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "rw" | "sw";

export const T = {
  en: {
    nav: {
      home: "Home", about: "About", process: "Process",
      products: "Products", gallery: "Gallery", faq: "FAQ",
      contact: "Contact", shopNow: "Shop Now",
    },
    footer: {
      description: "Pure, natural, chemical-free cassava flour milled with care in Africa for healthy families and businesses.",
      explore: "Explore", contact: "Contact", languages: "Languages",
      aboutUs: "About Us", ourProcess: "Our Process", products: "Products", gallery: "Gallery", faq: "FAQ",
      rights: "© 2026 Will's Cassava Flour. All rights reserved. Designed by RG Consult Inc.",
      tagline: "Healthy flour for healthy families.",
    },
    home: {
      eyebrow: "Rwanda • Est.2025",
      h1a: "Pure Natural", h1b: "Healthy", h1c: "cassava flour",
      sub: "100% Chemical-Free Cassava Flour — Bringing the Natural Goodness of African Cassava to Every Kitchen.",
      stat1: "Chemical free", stat2: "Pure process", stat3: "For every need",
      lovedBy: "Loved by",
      ourStory: "Our Story",
      missionTitle: "A small mill with a", missionItalic: "big mission",
      readStory: "Read our story",
      featured: "Featured", craftedTitle: "Crafted for every kitchen.", viewAll: "View all products →",
      whyEyebrow: "Why choose us",
      whyTitle: "Six reasons families", whyItalic: "trust", whyEnd: "us.",
      processEyebrow: "Our process",
      processTitle: "From root to flour — in", processItalic: "six honest steps",
      seeProcess: "See the full process →",
      voicesEyebrow: "Voices we love", voicesTitle: "What our customers say.",
      orderEyebrow: "Order today",
      ctaTitle: "Healthy flour for", ctaItalic: "healthy families.",
      orderBtn: "Order Today",
    },
  },
  rw: {
    nav: {
      home: "Ahabanza", about: "Abo Turibo", process: "Uburyo",
      products: "Ibicuruzwa", gallery: "Amafoto", faq: "Ibibazo",
      contact: "Twandikire", shopNow: "Gura Ubu",
    },
    footer: {
      description: "Ubunga bw'imyumbati butagira imiti, buzima, bwakozwe n'ubwitange mu Afurika ku miryango n'amakampuni.",
      explore: "Reba Byinshi", contact: "Twandikire", languages: "Indimi",
      aboutUs: "Abo Turibo", ourProcess: "Uburyo Bwacu", products: "Ibicuruzwa", gallery: "Amafoto", faq: "Ibibazo",
      rights: "© 2026 Will's Cassava Flour. Uburenganzira bwose burindwa. Yakozwe na RG Consult Inc.",
      tagline: "Ubunga buzima ku miryango mizima.",
    },
    home: {
      eyebrow: "Rwanda • Est.2025",
      h1a: "Imyumbati y'Ingenzi", h1b: "Nziza", h1c: "ubunga bw'imyumbati",
      sub: "Ubunga bw'Imyumbati 100% Udafite Imiti — Guteza Imbere Ubwiza bw'Imyumbati y'Afrika mu Biko Byose.",
      stat1: "Ntagira imiti", stat2: "Inzira isukuye", stat3: "Ku buri mpamvu",
      lovedBy: "Bakundwa na",
      ourStory: "Inkuru Yacu",
      missionTitle: "Isiga nto ifite", missionItalic: "intego nkuru",
      readStory: "Soma inkuru yacu",
      featured: "Ibiri imbere", craftedTitle: "Yakozwe ku biko byose.", viewAll: "Reba ibicuruzwa byose →",
      whyEyebrow: "Impamvu yo gutoranya",
      whyTitle: "Impamvu esheshatu miryango ikunda", whyItalic: "kwizera", whyEnd: "twe.",
      processEyebrow: "Uburyo bwacu",
      processTitle: "Kuva ku muzizi kugeza ku bunga — mu", processItalic: "ntera esheshatu z'ukuri",
      seeProcess: "Reba uburyo bwose →",
      voicesEyebrow: "Ijwi dukundaho", voicesTitle: "Ibyo abakiriya bacu bavuga.",
      orderEyebrow: "Uta ubu",
      ctaTitle: "Ubunga buzima ku", ctaItalic: "miryango mizima.",
      orderBtn: "Uta Ubu",
    },
  },
  sw: {
    nav: {
      home: "Nyumbani", about: "Kuhusu", process: "Mchakato",
      products: "Bidhaa", gallery: "Picha", faq: "Maswali",
      contact: "Wasiliana", shopNow: "Nunua Sasa",
    },
    footer: {
      description: "Unga wa muhogo safi, wa asili, bila kemikali uliosagwa kwa uangalifu Afrika kwa familia na biashara zenye afya.",
      explore: "Chunguza", contact: "Wasiliana", languages: "Lugha",
      aboutUs: "Kuhusu Sisi", ourProcess: "Mchakato Wetu", products: "Bidhaa", gallery: "Picha", faq: "Maswali",
      rights: "© 2026 Will's Cassava Flour. Haki zote zimehifadhiwa. Imeundwa na RG Consult Inc.",
      tagline: "Unga wenye afya kwa familia zenye afya.",
    },
    home: {
      eyebrow: "Rwanda • Est.2025",
      h1a: "Safi Asili", h1b: "Yenye Afya", h1c: "unga wa muhogo",
      sub: "Unga wa Muhogo 100% Bila Kemikali — Kuleta Ubora wa Asili wa Muhogo wa Afrika kwa Kila Jiko.",
      stat1: "Bila kemikali", stat2: "Mchakato safi", stat3: "Kwa kila haja",
      lovedBy: "Wanapendwa na",
      ourStory: "Hadithi Yetu",
      missionTitle: "Kinu kidogo chenye", missionItalic: "dhamira kubwa",
      readStory: "Soma hadithi yetu",
      featured: "Iliyoangaziwa", craftedTitle: "Imetengenezwa kwa kila jiko.", viewAll: "Ona bidhaa zote →",
      whyEyebrow: "Kwa nini utuchague",
      whyTitle: "Sababu sita familia", whyItalic: "zinatuamini", whyEnd: ".",
      processEyebrow: "Mchakato wetu",
      processTitle: "Kutoka mzizi hadi unga — katika", processItalic: "hatua sita za kweli",
      seeProcess: "Ona mchakato wote →",
      voicesEyebrow: "Sauti tunazozipenda", voicesTitle: "Wateja wetu wanasema nini.",
      orderEyebrow: "Agiza leo",
      ctaTitle: "Unga wenye afya kwa", ctaItalic: "familia zenye afya.",
      orderBtn: "Agiza Leo",
    },
  },
};

type Translations = typeof T.en;

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LangCtx>({ lang: "en", setLang: () => {}, t: T.en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("wills-lang") as Lang;
      return saved && (["en", "rw", "sw"] as Lang[]).includes(saved) ? saved : "en";
    } catch {
      return "en";
    }
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("wills-lang", l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: T[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
