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
      storyP1: "Will's Cassava Flour was born from a simple idea: families deserve flour they can trust. We work closely with African cassava farmers and cooperatives, ensuring every batch is produced with care, quality, and sustainability at its heart.",
      storyP2: "Beyond producing premium cassava flour, we are committed to creating opportunities for women in agriculture. We proudly partner with women farmers and women-led cooperatives, providing reliable markets for their cassava and helping strengthen livelihoods across rural communities.",
      storyP3: "Our mission is to bring healthy, natural, and premium cassava flour to kitchens and bakeries across Africa and beyond, while empowering African women farmers through inclusive and sustainable agricultural partnerships.",
      readStory: "Read our story",
      featured: "Featured", craftedTitle: "Crafted for every kitchen.", viewAll: "View all products →",
      prod1Title: "Pure White Flour", prod1Text: "Silky, fine-milled and ready to bake.",
      prod2Title: "Family Packaging", prod2Text: "Premium 2kg kraft packs — pure cassava flour.",
      prod3Title: "Endless Recipes", prod3Text: "From ugali to pastries, breads and beyond.",
      whyEyebrow: "Why choose us",
      whyTitle: "Six reasons families", whyItalic: "trust", whyEnd: "us.",
      feat1Title: "Gluten Free", feat1Text: "Naturally free of gluten, gentle on digestion and friendly for every diet.",
      feat2Title: "100% Natural", feat2Text: "No additives, no bleaching — just the goodness of the cassava root.",
      feat3Title: "Rich in Nutrients", feat3Text: "A wholesome source of carbohydrates, fibre and resistant starch.",
      feat4Title: "No Chemicals", feat4Text: "Processed using clean water and traditional methods, never harsh chemicals.",
      feat5Title: "Locally Produced", feat5Text: "Grown and milled in Africa, supporting local farmers and communities.",
      feat6Title: "Hygienically Processed", feat6Text: "Every batch passes through a clean, food-safe production line.",
      processEyebrow: "Our process",
      processTitle: "From root to flour — in", processItalic: "six honest steps",
      seeProcess: "See the full process →",
      stepLabel: "Step",
      step1Title: "Harvesting", step1Text: "Mature cassava roots are hand-harvested from trusted farms.",
      step2Title: "Peeling", step2Text: "Roots are carefully peeled to keep only the pure white flesh.",
      step3Title: "Soaking", step3Text: "Soaked in clean water to remove natural compounds and impurities.",
      step4Title: "Drying", step4Text: "Sun-dried on raised racks until perfectly crisp and ready.",
      step5Title: "Grinding", step5Text: "Stone-milled into the soft, silky flour our customers love.",
      step6Title: "Packaging", step6Text: "Sealed in food-safe bags for freshness from our mill to your kitchen.",
      voicesEyebrow: "Voices we love", voicesTitle: "What our customers say.",
      test1Q: "The texture is incredible — my bread turns out soft every time.", test1A: "Aline, Kigali",
      test2Q: "Finally a gluten-free flour my whole family enjoys without compromise.", test2A: "Joseph, Musanze",
      test3Q: "We've switched our entire bakery to Will's. The quality is unmatched.", test3A: "Chef Marie, Nyamirambo",
      orderEyebrow: "Order today",
      ctaTitle: "Healthy flour for", ctaItalic: "healthy families.",
      orderBtn: "Order Today",
    },
  },
  rw: {
    nav: {
      home: "Ahabanza", about: "Ibyerekeye Twe", process: "Uburyo Bwacu",
      products: "Ibicuruzwa", gallery: "Amashusho", faq: "Ibibazo Bikunze Kubazwa",
      contact: "Twandikire", shopNow: "Gura Nonaha",
    },
    footer: {
      description: "Ubugari bw'imyumbati butagira imiti, buzima, bwakozwe n'ubwitange mu Afurika ku miryango n'amakampuni.",
      explore: "Reba Byinshi", contact: "Twandikire", languages: "Indimi",
      aboutUs: "Ibyerekeye Twe", ourProcess: "Uburyo Bwacu", products: "Ibicuruzwa", gallery: "Amashusho", faq: "Ibibazo",
      rights: "© 2026 Will's Cassava Flour. Uburenganzira bwose burindwa. Yakozwe na RG Consult Inc.",
      tagline: "Ubugari buzima ku miryango mizima.",
    },
    home: {
      eyebrow: "Rwanda • Est.2025",
      h1a: "Isukuye Kamere", h1b: "Buzima", h1c: "ubugari bw'imyumbati",
      sub: "Ubugari bw'Imyumbati 100% Udafite Imiti — Ubugari bw'Imyumbati y'Afrika Buherekeza Ubuzima mu Ngo Zose.",
      stat1: "Ntagira imiti", stat2: "Inzira isukuye", stat3: "Ku buri mwanya",
      lovedBy: "Bakundwa na",
      ourStory: "Inkuru Yacu",
      missionTitle: "Isiga nto ifite", missionItalic: "intego nkuru",
      storyP1: "Ubugari bw'Imyumbati bwa Will bwavutse ku gitekerezo kiroroshye: imiryango ikwiye ubugari ishobora kwizera. Dukorana hafi n'abahinzi b'imyumbati bo mu Afurika n'amakoperative, kugira ngo buri murwi wose ukorwe n'umwete, ubwiza, no gutunganirwa neza.",
      storyP2: "Hejuru yo gutanga ubugari bw'imyumbati bw'inzego za hejuru, dushaka gushyiraho amahirwe ku bagore mu buhinzi. Dukorana n'abahinzi bagore n'amakoperative ayobowe n'abagore, dugatanga amasoko y'imyumbati yabo kandi tugafasha gukomeza imibereho y'imiryango yo mu cyaro.",
      storyP3: "Intego yacu ni gutanga ubugari bw'imyumbati buzima, bw'kamere kandi bw'ubwiza mu ngo no mu mabisi y'imigati muri Afurika no hanze yayo, ndetse no gushyigikira abahinzi bagore b'Abanyafurika binyuze mu bikorwa by'ubuhinzi bujyana n'ingufu z'umuryango wose.",
      readStory: "Soma inkuru yacu",
      featured: "Ibicuruzwa Byacu", craftedTitle: "Bikoze ku mpamvu zose.", viewAll: "Reba ibicuruzwa byose →",
      prod1Title: "Ubugari Bwera", prod1Text: "Buninahaza, bwatsindwe neza kandi buteguye guteka.",
      prod2Title: "Indobo y'Umuryango", prod2Text: "Indobo za kraft za 2kg zisumba — ubugari bwera bw'imyumbati.",
      prod3Title: "Indyo Zitandukanye", prod3Text: "Kuva ku bugari kugeza ku biscuit, imigati no hanze.",
      whyEyebrow: "Impamvu yo gutoranya",
      whyTitle: "Impamvu esheshatu imiryango ikunda", whyItalic: "kwizera", whyEnd: "twe.",
      feat1Title: "Ntagira Giliteni", feat1Text: "Ntagira giliteni ku kamere, iroroshye ku nda kandi iboneye ku buri ndyo.",
      feat2Title: "100% Kamere", feat2Text: "Ntagira ibiyongeweho, ntagira kwera — ubwiza bw'imizi y'imyumbati gusa.",
      feat3Title: "Yuzuye Intungamubiri", feat3Text: "Isoko nziza y'ibiyunga, intozo, n'unyange w'uruhu.",
      feat4Title: "Ntagira Imiti", feat4Text: "Yakozwe hakoreshejwe amazi asukuye n'uburyo bw'akera, nta miti y'ingirakamaro.",
      feat5Title: "Ikozwe mu Gihugu", feat5Text: "Yakuwe no gutsindwa mu Afurika, ishyigikira abahinzi n'amakomuniti yo ahantu.",
      feat6Title: "Isukuye mu Gukora", feat6Text: "Buri gahanga rirasoza inzira yo gukora isukuye kandi ikomeye ku biribwa.",
      processEyebrow: "Uburyo bwacu",
      processTitle: "Kuva ku muzizi kugeza ku bugari — mu", processItalic: "ntera esheshatu z'ukuri",
      seeProcess: "Reba uburyo bwose →",
      stepLabel: "Intambwe ya",
      step1Title: "Gusarura", step1Text: "Imizi y'imyumbati yibye isarurwa ku maboko mu murima wizigika.",
      step2Title: "Gukuraho Uruhu", step2Text: "Imizi ikurwaho uruhu neza kugira ngo uburabyo bwera bwone bubone gusa.",
      step3Title: "Kubika mu Mazi", step3Text: "Bizamishwa mu mazi asukuye kugira ngo havanwe ibintu bibi n'inzangano.",
      step4Title: "Kumeseka", step4Text: "Bimeshwa ku zuba ku nzira zizimuye kugeza bikorora neza kandi biteguye.",
      step5Title: "Gutsinda", step5Text: "Gutsindwa hakoreshejwe amabuye ngo habone ubugari buninahaza abaguzi bacu bakunda.",
      step6Title: "Gupakira", step6Text: "Bifungirwa mu mifuko ikomeye ku biribwa kugira ngo bikomeze kuva aho bikorerwamo kugeza mu ngo zawe.",
      voicesEyebrow: "Ayo Dushima Kumva", voicesTitle: "Ibyo abakiriya bacu bavuga.",
      test1Q: "Ubwiza bw'ubugari buratangaje — umugati wanjye ubura neza buri gihe.", test1A: "Aline, Kigali",
      test2Q: "Ubugari ntagira giliteni umuryango wanjye wose ukunda, nta nkomyi.", test2A: "Joseph, Musanze",
      test3Q: "Twasimbuye ibaka ryacu ryose na Will's. Ubwiza ntabwo bwagira buhanganwe.", test3A: "Chef Marie, Nyamirambo",
      orderEyebrow: "Gura Ubu",
      ctaTitle: "Ubugari buzima ku", ctaItalic: "miryango yose.",
      orderBtn: "Gura Ubu",
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
      storyP1: "Unga wa Muhogo wa Will ulizaliwa kutoka kwa wazo rahisi: familia zinahitaji unga wanaoweza kuamini. Tunafanya kazi kwa karibu na wakulima wa muhogo wa Afrika na vyama vya ushirika, kuhakikisha kila kundi linazalishwa kwa uangalifu, ubora, na uendelevu moyoni mwake.",
      storyP2: "Zaidi ya kuzalisha unga wa muhogo wa hali ya juu, tumejitolea kuunda fursa kwa wanawake katika kilimo. Tunashirikiana kwa fahari na wakulima wanawake na vyama vya ushirika vinavyoongozwa na wanawake, kutoa masoko ya kuaminika kwa muhogo wao na kusaidia kuimarisha maisha katika jamii za vijijini.",
      storyP3: "Dhamira yetu ni kuleta unga wa muhogo wenye afya, wa asili, na wa hali ya juu kwenye jiko na maduka ya mikate kote Afrika na zaidi, huku tukiwawezesha wakulima wanawake wa Afrika kupitia ushirikiano wa kilimo unaojumuisha na endelevu.",
      readStory: "Soma hadithi yetu",
      featured: "Iliyoangaziwa", craftedTitle: "Imetengenezwa kwa kila jiko.", viewAll: "Ona bidhaa zote →",
      prod1Title: "Unga Mzuri", prod1Text: "Laini, uliosagwa vizuri na tayari kuoka.",
      prod2Title: "Ufungaji wa Familia", prod2Text: "Mifuko ya kraft ya 2kg ya hali ya juu — unga safi wa muhogo.",
      prod3Title: "Mapishi Yasiyokwisha", prod3Text: "Kutoka ugali hadi mikate ya kupendeza, mikate na zaidi.",
      whyEyebrow: "Kwa nini utuchague",
      whyTitle: "Sababu sita familia", whyItalic: "zinatuamini", whyEnd: ".",
      feat1Title: "Haina Gluteni", feat1Text: "Haina gluteni kwa asili, laini kwa mmeng'enyo na rafiki kwa kila lishe.",
      feat2Title: "100% Asili", feat2Text: "Hakuna viongezaji, hakuna ubleachaji — ubora wa mzizi wa muhogo tu.",
      feat3Title: "Tajiri kwa Virutubisho", feat3Text: "Chanzo kizuri cha wanga, nyuzi na wanga wa kinga.",
      feat4Title: "Bila Kemikali", feat4Text: "Inasindwa kwa kutumia maji safi na njia za jadi, kamwe si kemikali kali.",
      feat5Title: "Inazalishwa Ndani", feat5Text: "Inakuzwa na kusagwa Afrika, inasaidia wakulima na jamii za ndani.",
      feat6Title: "Inasindwa kwa Usafi", feat6Text: "Kila kundi linapita kwenye mstari safi wa uzalishaji salama kwa chakula.",
      processEyebrow: "Mchakato wetu",
      processTitle: "Kutoka mzizi hadi unga — katika", processItalic: "hatua sita za kweli",
      seeProcess: "Ona mchakato wote →",
      stepLabel: "Hatua",
      step1Title: "Kuvuna", step1Text: "Mizizi ya muhogo iliyokomaa huvunwa kwa mkono kutoka mashambani yanayoaminika.",
      step2Title: "Kuumba", step2Text: "Mizizi huumbiwa kwa uangalifu ili kubakia nyama nyeupe safi tu.",
      step3Title: "Kuloweka", step3Text: "Hulowekwa katika maji safi kuondoa misombo ya asili na uchafu.",
      step4Title: "Kukaushwa", step4Text: "Hukaushwa juani kwenye maboya yaliyoinuliwa hadi yawe makavu na tayari.",
      step5Title: "Kusaga", step5Text: "Husagwa kwa jiwe kuwa unga laini, mzuri ambao wateja wetu wanapenda.",
      step6Title: "Kufungasha", step6Text: "Hufungashwa kwenye mifuko salama kwa chakula kwa ubichi kutoka kiwanda hadi jikoni yako.",
      voicesEyebrow: "Sauti tunazozipenda", voicesTitle: "Wateja wetu wanasema nini.",
      test1Q: "Muundo ni wa ajabu — mkate wangu hutoka laini kila wakati.", test1A: "Aline, Kigali",
      test2Q: "Hatimaye unga usio na gluteni familia yangu yote inafurahia bila maelewano.", test2A: "Joseph, Musanze",
      test3Q: "Tumebadilisha bakeri yetu yote kuwa Will's. Ubora hauwezi kulinganishwa.", test3A: "Chef Marie, Nyamirambo",
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
