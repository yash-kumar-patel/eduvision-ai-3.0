import { 
  CareerGoal, 
  CareerInput, 
  CareerAnalysisResult, 
  CareerRoadmapStage, 
  SkillGapItem, 
  ActionPlanItem, 
  TimelinePlanItem, 
  AlternativeCareer, 
  CareerCategory,
  ResourceGuidance 
} from "@/types/career";

// Comprehensive 30+ Trending & Common Careers Database
export const CAREER_DATABASE: CareerGoal[] = [
  {
    id: "ai_engineer",
    title: "AI Engineer / Machine Learning",
    title_gu: "AI Engineer (આર્ટિફિશિયલ ઇન્ટેલિજન્સ એન્જિનિયર)",
    category: "tech",
    category_gu: "ટેકનોલોજી & AI",
    short_desc_gu: "કૃત્રિમ બુદ્ધિમત્તા, ડીપ લર્નિંગ અને સ્માર્ટ ઓટોમેશન મોડેલ્સ બનાવનાર",
    tags: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "python", "data", "robotics", "automation", "tech", "prompt", "llm"],
    trending: true
  },
  {
    id: "lawyer",
    title: "Lawyer / Advocate / Judge",
    title_gu: "વકીલ / એડવોકેટ / ન્યાયાધીશ (Law & Judiciary)",
    category: "law",
    category_gu: "કાયદો, અદાલત & ન્યાયતંત્ર",
    short_desc_gu: "ભારતીય બંધારણ, કાયદાકીય સલાહ, કોર્ટ કેસો અને ન્યાયતંત્ર નિષ્ણાત",
    tags: ["lawyer", "advocate", "judge", "law", "clat", "llb", "judiciary", "court", "legal", "constitution", "ipc", "crpc", "barrister", "વકીલ", "ન્યાયાધીશ"],
    trending: true
  },
  {
    id: "doctor",
    title: "Doctor (MBBS / Specialist / Surgeon)",
    title_gu: "ડોક્ટર (તબીબી નિષ્ણાત / સર્જન)",
    category: "medical",
    category_gu: "તબીબી & આરોગ્ય",
    short_desc_gu: "દર્દીઓની સારવાર, રોગનિદાન અને માનવ જીવન બચાવનાર તબીબ",
    tags: ["doctor", "mbbs", "neet", "medical", "surgeon", "biology", "health", "hospital", "physician", "clinic", "તબીબ", "ડોક્ટર"],
    trending: true
  },
  {
    id: "pilot",
    title: "Commercial Pilot / Aviation Officer",
    title_gu: "કોમર્શિયલ પાયલોટ / વિમાન ચાલક",
    category: "aviation",
    category_gu: "એવિએશન & ફ્લાઈંગ",
    short_desc_gu: "પેસેન્જર અને કાર્ગો વિમાનોનું આંતરરાષ્ટ્રીય સ્તરે સંચાલન કરનાર",
    tags: ["pilot", "aviation", "flying", "aircraft", "cpl", "dgca", "flight", "aeroplane", "airline", "પાયલોટ"],
    trending: true
  },
  {
    id: "data_scientist",
    title: "Data Scientist / AI Analyst",
    title_gu: "ડેટા સાયન્ટિસ્ટ (Data Scientist)",
    category: "tech",
    category_gu: "ટેકનોલોજી & એનાલિટિક્સ",
    short_desc_gu: "વિશાળ બિગ ડેટામાંથી ઉપયોગી તારણો અને આગાહી મોડેલ બનાવનાર",
    tags: ["data", "data science", "data analyst", "statistics", "python", "sql", "big data", "maths", "analytics"],
    trending: true
  },
  {
    id: "chartered_accountant",
    title: "Chartered Accountant (CA)",
    title_gu: "ચાર્ટર્ડ એકાઉન્ટન્ટ (CA)",
    category: "finance",
    category_gu: "નાણાં, ઓડિટ & કરવેરા",
    short_desc_gu: "નાણાકીય આયોજન, ઓડિટિંગ, કરવેરા (GST) અને બિઝનેસ સલાહકાર",
    tags: ["ca", "chartered accountant", "commerce", "finance", "accounting", "audit", "tax", "gst", "icai", "banking", "હિસાબ"],
    trending: true
  },
  {
    id: "ias_officer",
    title: "IAS / IPS Officer (Civil Services)",
    title_gu: "IAS / IPS ઓફિસર (સનદી સેવાઓ / UPSC)",
    category: "govt",
    category_gu: "સરકારી સેવા & પ્રશાસન",
    short_desc_gu: "જિલ્લા અને દેશના વહીવટી તંત્રનું નેતૃત્વ કરનાર સનદી અધિકારી",
    tags: ["ias", "ips", "upsc", "civil services", "collector", "gpsc", "government", "administration", "public service", "કલેક્ટર"],
    trending: true
  },
  {
    id: "software_dev",
    title: "Software Developer / Full Stack",
    title_gu: "સોફ્ટવેર ડેવલપર / ફુલ સ્ટેક એન્જિનિયર",
    category: "tech",
    category_gu: "સોફ્ટવેર & IT",
    short_desc_gu: "વેબ, મોબાઇલ અને ક્લાઉડ સોફ્ટવેર એપ્લિકેશન્સ ડેવલપ કરનાર",
    tags: ["software", "developer", "coding", "programmer", "web", "app", "react", "fullstack", "frontend", "backend", "java", "python", "javascript"],
    trending: true
  },
  {
    id: "cyber_security",
    title: "Cyber Security Expert / Ethical Hacker",
    title_gu: "સાયબર સિક્યુરિટી એક્સપર્ટ / એથિકલ હેકર",
    category: "tech",
    category_gu: "સાયબર સુરક્ષા & નેટવર્કિંગ",
    short_desc_gu: "ડિજિટલ સિસ્ટમ્સ, ડેટા અને નેટવર્કને હેકર્સથી સુરક્ષિત રાખનાર",
    tags: ["cyber", "security", "hacker", "ethical hacking", "network", "firewall", "encryption", "infosec", "linux"],
    trending: true
  },
  {
    id: "defense_officer",
    title: "Indian Army / Navy / Air Force Officer",
    title_gu: "ભારતીય સૈન્ય અધિકારી (NDA / CDS)",
    category: "defense",
    category_gu: "સંરક્ષણ & સૈન્ય સેવા",
    short_desc_gu: "દેશની સરહદોનું રક્ષણ અને સશસ્ત્ર દળોમાં નેતૃત્વ કરનાર અધિકારી",
    tags: ["army", "navy", "air force", "nda", "cds", "defense", "military", "soldier", "captain", "commandant", "સૈનિક", "સૈન્ય", "military"],
    trending: true
  },
  {
    id: "ui_ux_designer",
    title: "UI / UX Product Designer",
    title_gu: "UI / UX પ્રોડક્ટ ડિઝાઇનર",
    category: "creative",
    category_gu: "ડિઝાઇન & સર્જનાત્મકતા",
    short_desc_gu: "ડિજિટલ એપ્લિકેશન્સ માટે આધુનિક અને સરળ યુઝર ઇન્ટરફેસ બનાવનાર",
    tags: ["designer", "ui", "ux", "product design", "figma", "creative", "graphics", "web design", "visual", "art", "ડિઝાઇનર"],
    trending: true
  },
  {
    id: "mechanical_engineer",
    title: "Robotics & Mechanical Engineer",
    title_gu: "રોબોટિક્સ & મિકેનિકલ એન્જિનિયર",
    category: "engineering",
    category_gu: "ઇજનેરી & રોબોટિક્સ",
    short_desc_gu: "સ્માર્ટ મશીનો, ઓટોમોબાઇલ્સ અને રોબોટિક સિસ્ટમ્સ ડિઝાઇન કરનાર",
    tags: ["mechanical", "robotics", "engineer", "machines", "automation", "cad", "automobile", "physics", "hardware", "ઇજનેર"],
    trending: true
  },
  {
    id: "aerospace_engineer",
    title: "Space Scientist / Aerospace (ISRO)",
    title_gu: "એરોસ્પેસ એન્જિનિયર / સ્પેસ સાયન્ટિસ્ટ (ISRO)",
    category: "engineering",
    category_gu: "અવકાશ વિજ્ઞાન & સંરક્ષણ",
    short_desc_gu: "રોકેટ્સ, સેટેલાઇટ્સ અને સ્પેસક્રાફ્ટ ડિઝાઇન કરનાર વૈજ્ઞાનિક",
    tags: ["space", "aerospace", "isro", "nasa", "rocket", "satellite", "astronomy", "physics", "aviation"],
    trending: true
  },
  {
    id: "entrepreneur",
    title: "Startup Founder / Tech Entrepreneur",
    title_gu: "સ્ટાર્ટઅપ સ્થાપક / ઉદ્યોગસાહસિક",
    category: "business",
    category_gu: "ઉદ્યોગસાહસિકતા & બિઝનેસ",
    short_desc_gu: "નવીન બિઝનેસ આઈડિયા પર સ્કેલેબલ કંપની અને પ્રોડક્ટ્સ બનાવનાર",
    tags: ["entrepreneur", "startup", "business", "founder", "ceo", "innovation", "management", "company", "leadership", "વેપારી"],
    trending: true
  },
  {
    id: "teacher_professor",
    title: "School Teacher / College Professor",
    title_gu: "શિક્ષક / પ્રોફેસર / શિક્ષણવિદ",
    category: "education",
    category_gu: "શિક્ષણ & સંશોધન",
    short_desc_gu: "નવી પેઢીને મૂલ્યનિષ્ઠ જ્ઞાન આપનાર અને સંશોધન કરનાર",
    tags: ["teacher", "professor", "educator", "researcher", "phd", "academic", "school", "college", "teaching", "tet", "tat", "net", "શિક્ષક"],
    trending: false
  },
  {
    id: "pharmacist",
    title: "Pharmacist / Drug Researcher (B.Pharm)",
    title_gu: "ફાર્માસિસ્ટ / ઔષધિ સંશોધક",
    category: "medical",
    category_gu: "તબીબી & ફાર્મસી",
    short_desc_gu: "દવાઓનું ઉત્પાદન, ફોર્મ્યુલેશન, ક્વોલિટી કંટ્રોલ અને રિસર્ચ",
    tags: ["pharmacy", "pharmacist", "medicine", "drug", "pharma", "bpharm", "chemistry", "દવા"],
    trending: false
  },
  {
    id: "dentist",
    title: "Dentist / Dental Surgeon (BDS)",
    title_gu: "ડેન્ટિસ્ટ (દાંતના તબીબી નિષ્ણાત)",
    category: "medical",
    category_gu: "તબીબી & આરોગ્ય",
    short_desc_gu: "દાંત અને મુખના રોગોની સારવાર અને સર્જરી કરનાર તબીબ",
    tags: ["dentist", "bds", "dental", "teeth", "doctor", "oral", "દાંત"],
    trending: false
  },
  {
    id: "physiotherapist",
    title: "Physiotherapist / Sports Rehab (BPT)",
    title_gu: "ફિઝિયોથેરાપિસ્ટ / સ્પોર્ટ્સ રિહેબ",
    category: "medical",
    category_gu: "તબીબી & થેરાપી",
    short_desc_gu: "સ્નાયુઓ અને હાડકાંની ઇજામાંથી દર્દીઓને પુનઃસ્વસ્થ કરનાર",
    tags: ["physiotherapy", "bpt", "physio", "rehab", "sports", "fitness", "therapy"],
    trending: false
  },
  {
    id: "civil_engineer",
    title: "Civil Engineer / Infrastructure",
    title_gu: "સિવિલ એન્જિનિયર / બાંધકામ નિષ્ણાત",
    category: "engineering",
    category_gu: "ઇજનેરી & બાંધકામ",
    short_desc_gu: "બ્રિજ, હાઇવે, બિલ્ડીંગ્સ અને સ્માર્ટ સિટીઝ ડિઝાઇન કરનાર",
    tags: ["civil", "construction", "building", "infrastructure", "architect", "engineer", "બાંધકામ"],
    trending: false
  },
  {
    id: "architect",
    title: "Architect / Interior Designer (B.Arch)",
    title_gu: "આર્કિટેક્ટ / ઇન્ટીરીયર ડિઝાઇનર",
    category: "creative",
    category_gu: "ડિઝાઇન & વાસ્તુશિલ્પ",
    short_desc_gu: "આધુનિક ભવનોનું આયોજન, નકશા અને ઇન્ટિરિયર સ્પેસ ડિઝાઇનર",
    tags: ["architect", "barch", "interior", "design", "building", "structure", "nata", "વાસ્તુશિલ્પ"],
    trending: false
  },
  {
    id: "banker_finance",
    title: "Investment Banker / Bank Manager",
    title_gu: "બેંક મેનેજર / ઇન્વેસ્ટમેન્ટ બેન્કર",
    category: "finance",
    category_gu: "બેન્કિંગ & નાણાકીય સેવા",
    short_desc_gu: "શેરબજાર, મ્યુચ્યુઅલ ફંડ, લોન અને બેન્કિંગ વ્યવહારોનું સંચાલન",
    tags: ["bank", "banker", "ibps", "sbi", "investment", "stock", "finance", "money", "બેંક"],
    trending: false
  },
  {
    id: "digital_marketer",
    title: "Digital Marketing & Brand Strategist",
    title_gu: "ડિજિટલ માર્કેટિંગ એક્સપર્ટ",
    category: "business",
    category_gu: "માર્કેટિંગ & બ્રાન્ડિંગ",
    short_desc_gu: "સોશિયલ મીડિયા, SEO અને ડિજિટલ એડ્વર્ટાઇઝિંગ દ્વારા બ્રાન્ડ ગ્રોથ કરનાર",
    tags: ["marketing", "digital marketing", "seo", "social media", "ads", "branding", "content"],
    trending: false
  },
  {
    id: "journalist",
    title: "Journalist / News Anchor / Media",
    title_gu: "પત્રકાર / ન્યૂઝ એન્કર / મીડિયા",
    category: "creative",
    category_gu: "પત્રકારત્વ & સંચાર",
    short_desc_gu: "સમાચાર અહેવાલ, ઇન્ટરવ્યુ અને જાહેર જાગૃતિ ફેલાવનાર",
    tags: ["journalist", "media", "news", "reporter", "anchor", "tv", "press", "પત્રકાર"],
    trending: false
  },
  {
    id: "sports_athlete",
    title: "Professional Athlete / Cricket Coach",
    title_gu: "પ્રોફેશનલ ખેલાડી / સ્પોર્ટ્સ કોચ",
    category: "sports",
    category_gu: "રમતગમત & ફિટનેસ",
    short_desc_gu: "રાષ્ટ્રીય અને આંતરરાષ્ટ્રીય સ્તરે દેશનું પ્રતિનિધિત્વ કરનાર ખેલાડી",
    tags: ["sports", "cricket", "athlete", "coach", "fitness", "football", "badminton", "ખેલાડી"],
    trending: false
  },
  {
    id: "police_officer",
    title: "Police Sub-Inspector / DySP (GPSC)",
    title_gu: "પોલીસ સબ-ઇન્સ્પેક્ટર (PSI / DySP)",
    category: "govt",
    category_gu: "કાયદો, વ્યવસ્થા & પોલીસ સેવા",
    short_desc_gu: "કાયદો અને વ્યવસ્થા જાળવી ગુનાખોરી નિયંત્રણ કરનાર અધિકારી",
    tags: ["police", "psi", "dysp", "khaki", "investigation", "gpsc", "પોલીસ"],
    trending: false
  },
  {
    id: "chef_hospitality",
    title: "Executive Chef / Hotel Management",
    title_gu: "એક્ઝિક્યુટિવ શેફ / હોટેલ મેનેજમેન્ટ",
    category: "business",
    category_gu: "હોસ્પિટાલિટી & ક્યુલિનરી આર્ટસ",
    short_desc_gu: "ફાઇવ સ્ટાર હોટેલ્સમાં ભોજન કળા અને હોસ્પિટાલિટી સંચાલન",
    tags: ["chef", "hotel", "cooking", "culinary", "hospitality", "restaurant", "શેફ"],
    trending: false
  }
];

// Intelligent category classifier based on search query or career title
export function detectCareerCategory(query: string): { category: CareerCategory; title_gu: string } {
  const q = query.toLowerCase().trim();

  // 1. Law & Legal
  if (
    q.includes("law") || q.includes("advocate") || q.includes("judge") || 
    q.includes("court") || q.includes("clat") || q.includes("llb") || 
    q.includes("legal") || q.includes("વકીલ") || q.includes("ન્યાય") || q.includes("બાર")
  ) {
    return { category: "law", title_gu: "કાયદો, અદાલત & ન્યાયતંત્ર (Law & Legal)" };
  }

  // 2. Medical & Health
  if (
    q.includes("doctor") || q.includes("mbbs") || q.includes("medical") || 
    q.includes("neet") || q.includes("surgeon") || q.includes("dentist") || 
    q.includes("nurse") || q.includes("physio") || q.includes("pharma") || 
    q.includes("તબીબ") || q.includes("ડોક્ટર") || q.includes("દવા")
  ) {
    return { category: "medical", title_gu: "તબીબી & આરોગ્ય વિજ્ઞાન (Healthcare)" };
  }

  // 3. Aviation / Pilot
  if (
    q.includes("pilot") || q.includes("aviation") || q.includes("flying") || 
    q.includes("aircraft") || q.includes("airplane") || q.includes("flight") || 
    q.includes("પાયલોટ") || q.includes("વિમાન")
  ) {
    return { category: "aviation", title_gu: "એવિએશન & કોમર્શિયલ ફ્લાઈંગ" };
  }

  // 4. Defense / Armed Forces
  if (
    q.includes("army") || q.includes("navy") || q.includes("air force") || 
    q.includes("nda") || q.includes("cds") || q.includes("defense") || 
    q.includes("military") || q.includes("soldier") || q.includes("સૈન્ય") || q.includes("સૈનિક")
  ) {
    return { category: "defense", title_gu: "સંરક્ષણ દળો & રાષ્ટ્રીય સુરક્ષા (Defense)" };
  }

  // 5. Govt & Police / Civil Services
  if (
    q.includes("ias") || q.includes("ips") || q.includes("upsc") || 
    q.includes("gpsc") || q.includes("collector") || q.includes("police") || 
    q.includes("psi") || q.includes("civil") || q.includes("સરકારી") || q.includes("પોલીસ")
  ) {
    return { category: "govt", title_gu: "સનદી સેવાઓ & સરકારી પ્રશાસન (Civil & Govt)" };
  }

  // 6. Finance, CA & Banking
  if (
    q.includes("ca") || q.includes("accountant") || q.includes("finance") || 
    q.includes("banking") || q.includes("tax") || q.includes("audit") || 
    q.includes("commerce") || q.includes("stock") || q.includes("money") || q.includes("હિસાબ")
  ) {
    return { category: "finance", title_gu: "નાણાં, ઓડિટ & બેન્કિંગ (Finance)" };
  }

  // 7. Creative, Arts & Media
  if (
    q.includes("designer") || q.includes("ui") || q.includes("ux") || 
    q.includes("graphics") || q.includes("art") || q.includes("artist") || 
    q.includes("writer") || q.includes("journalist") || q.includes("media") || 
    q.includes("video") || q.includes("film") || q.includes("animation") || 
    q.includes("ચિત્રકાર") || q.includes("લેખક") || q.includes("પત્રકાર")
  ) {
    return { category: "creative", title_gu: "ડિઝાઇન, કળા & મીડિયા (Creative Arts)" };
  }

  // 8. Core Engineering & Robotics
  if (
    q.includes("mechanical") || q.includes("civil") || q.includes("electrical") || 
    q.includes("robotics") || q.includes("aerospace") || q.includes("space") || 
    q.includes("isro") || q.includes("ઇજનેર") || (q.includes("engineer") && !q.includes("software") && !q.includes("ai"))
  ) {
    return { category: "engineering", title_gu: "કોર ઇજનેરી & રોબોટિક્સ (Core Engineering)" };
  }

  // 9. Education & Research
  if (
    q.includes("teacher") || q.includes("professor") || q.includes("educator") || 
    q.includes("researcher") || q.includes("phd") || q.includes("scientist") || 
    q.includes("શિક્ષક") || q.includes("પ્રોફેસર")
  ) {
    return { category: "education", title_gu: "શિક્ષણ & શૈક્ષણિક સંશોધન (Education & Research)" };
  }

  // 10. Sports & Fitness
  if (
    q.includes("sport") || q.includes("cricket") || q.includes("athlete") || 
    q.includes("fitness") || q.includes("coach") || q.includes("gym") || q.includes("ખેલાડી")
  ) {
    return { category: "sports", title_gu: "રમતગમત & શારીરિક શિક્ષણ (Sports & Fitness)" };
  }

  // 11. Business & Entrepreneurship
  if (
    q.includes("business") || q.includes("startup") || q.includes("entrepreneur") || 
    q.includes("founder") || q.includes("management") || q.includes("hotel") || 
    q.includes("chef") || q.includes("વેપાર")
  ) {
    return { category: "business", title_gu: "ઉદ્યોગસાહસિકતા & મેનેજમેન્ટ (Business)" };
  }

  // 12. Tech / Computer / AI (Default)
  return { category: "tech", title_gu: "ટેકનોલોજી & સોફ્ટવેર ક્ષેત્ર (Technology)" };
}

// Search & autocomplete suggestions with smart fallback
export function searchCareers(query: string): CareerGoal[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return CAREER_DATABASE.slice(0, 8);

  return CAREER_DATABASE.filter(c => {
    return (
      c.title.toLowerCase().includes(clean) ||
      c.title_gu.includes(clean) ||
      c.category_gu.includes(clean) ||
      c.tags.some(tag => tag.toLowerCase().includes(clean))
    );
  });
}

// Helper to determine stage category
function getStageType(standard: string): 'middle' | 'secondary' | 'higher_sec' | 'college' {
  if (["ધોરણ 6", "ધોરણ 7", "ધોરણ 8"].includes(standard)) return 'middle';
  if (["ધોરણ 9", "ધોરણ 10"].includes(standard)) return 'secondary';
  if (["ધોરણ 11", "ધોરણ 12"].includes(standard)) return 'higher_sec';
  return 'college';
}

// Generate Personalized Dynamic Career Analysis with Smart Fallbacks & Resources
export function generateCareerAnalysis(input: CareerInput): CareerAnalysisResult {
  let career = CAREER_DATABASE.find(c => c.id === input.career_id);
  let isCustom = false;

  if (!career) {
    const matches = searchCareers(input.career_name);
    if (matches.length > 0 && matches[0].tags.some(t => input.career_name.toLowerCase().includes(t))) {
      career = matches[0];
    } else {
      isCustom = true;
      const detected = detectCareerCategory(input.career_name);
      career = {
        id: "custom_" + Date.now(),
        title: input.career_name.charAt(0).toUpperCase() + input.career_name.slice(1),
        title_gu: `${input.career_name} (${detected.title_gu})`,
        category: detected.category,
        category_gu: detected.title_gu,
        short_desc_gu: `વિદ્યાર્થી દ્વારા નિર્ધારિત ${input.career_name} કારકિર્દી ક્ષેત્ર`,
        tags: [input.career_name.toLowerCase()]
      };
    }
  }

  const stage = getStageType(input.standard);

  // 1. Dynamic Assessment Summary based on Standard + Category
  let assessmentSummary = "";
  if (isCustom) {
    assessmentSummary = `તમે દાખલ કરેલ લક્ષ્ય '${career.title}' એક વિશિષ્ટ અને રસપ્રદ ક્ષેત્ર છે. EduVision AI એ તમારી પસંદગી અને ${input.standard} ના આધારે આ ક્ષેત્રમાં સફળ થવા માટેના સામાન્ય પાયાના તબક્કા, જરૂરી કૌશલ્યો અને વધુ માહિતી મેળવવાના સ્ત્રોતો સાથેનો રોડમેપ તૈયાર કર્યો છે.`;
  } else if (career.category === "law") {
    if (stage === 'middle' || stage === 'secondary') {
      assessmentSummary = `તમે હાલમાં ${input.standard} માં છો. એક સફળ Lawyer / Advocate અથવા Judge બનવા માટે તમારી પાસે વાંચન, ભાષા પ્રભુત્વ અને તાર્કિક દલીલ કરવાની ક્ષમતા (Logical Reasoning) કેળવવાનો શ્રેષ્ઠ સમય છે. ધોરણ ૧૨ પછી CLAT પરીક્ષા આપવી મુખ્ય લક્ષ્ય હોવું જોઈએ.`;
    } else if (stage === 'higher_sec') {
      assessmentSummary = `તમે ${input.standard} ના નિર્ણાયક તબક્કે છો. રાષ્ટ્રીય સ્તરની લો યુનિવર્સિટી (NLUs) માં પ્રવેશ મેળવવા માટે CLAT / AILET પરીક્ષાની તૈયારી, લીગલ એપ્ટિટ્યુડ અને કરન્ટ અફેર્સ પર સંપૂર્ણ ધ્યાન કેન્દ્રિત કરો.`;
    } else {
      assessmentSummary = `તમે ${input.standard} સ્તરે છો. હવે LLB ડિગ્રી અભ્યાસ, મૂર્ત કોર્ટ સ્પર્ધાઓ (Moot Courts), સિનિયર વકીલ હેઠળ કોર્ટ ઇન્ટર્નશિપ અને Bar Council પરીક્ષા (AIBE) અથવા જ્યુડિશિયલ સર્વિસીસ પરીક્ષા પર કેન્દ્રિત થવું જોઈએ.`;
    }
  } else if (career.category === "medical") {
    if (stage === 'middle' || stage === 'secondary') {
      assessmentSummary = `તમે હાલમાં ${input.standard} માં છો. એક નિષ્ણાત ડોક્ટર બનવા માટે વિજ્ઞાન અને જીવવિજ્ઞાન (Biology) નો પાયો અત્યારથી જ મજબૂત બનાવવો અનિવાર્ય છે. ધોરણ ૧૧-૧૨ માં સાયન્સ (B-Group) ની પસંદગી મુખ્ય રહેશે.`;
    } else {
      assessmentSummary = `તમે ${input.standard} માં છો. NEET પરીક્ષા માટે NCERT આધારિત ભૌતિક વિજ્ઞાન, રસાયણશાસ્ત્ર અને જીવવિજ્ઞાનમાં ઉત્કૃષ્ટ ગુણ મેળવવા સઘન MCQ પ્રેક્ટિસ ચાલુ રાખવી જરૂરી છે.`;
    }
  } else if (career.category === "tech") {
    if (stage === 'middle' || stage === 'secondary') {
      assessmentSummary = `તમે હાલમાં ${input.standard} માં છો. ${career.title} બનવા માટે તમારી પાસે શરૂઆતથી મજબૂત પાયો (Foundation) તૈયાર કરવાનો સુવર્ણ સમય છે. અત્યારે મુખ્ય ધ્યાન ગણિત, તાર્કિક ક્ષમતા અને બેઝિક કોડિંગ પર હોવું જોઈએ.`;
    } else {
      assessmentSummary = `તમે ${input.standard} સ્તરે છો. હવે સમય છે ${career.title} માટે જરૂરી પ્રેક્ટિકલ પ્રોજેક્ટ્સ, ઇન્ડસ્ટ્રી સ્કીલ્સ, ડેટા સ્ટ્રક્ચર્સ અને હેકાથોન્સ પર સઘન કાર્ય કરવાનો.`;
    }
  } else if (career.category === "aviation") {
    assessmentSummary = `તમે ${input.standard} માં છો. કોમર્શિયલ પાયલોટ બનવા માટે ધોરણ ૧૧-૧૨ સાયન્સમાં Physics અને Mathematics અનિવાર્ય છે. ત્યારબાદ DGCA માન્ય ફ્લાઇંગ સ્કૂલમાં CPL તાલીમ લેવી પડશે.`;
  } else if (career.category === "govt") {
    assessmentSummary = `તમે ${input.standard} માં છો. સનદી સેવાઓ (IAS / IPS / GPSC) માટે સામાન્ય જ્ઞાન (GK), અખબાર વાંચન, NCERT પાઠ્યપુસ્તકો અને વિશ્લેષણાત્મક લેખન કૌશલ્ય વિકસાવવાનો આ સર્વોત્તમ તબક્કો છે.`;
  } else if (career.category === "defense") {
    assessmentSummary = `તમે ${input.standard} માં છો. ભારતીય સશસ્ત્ર દળોમાં ઓફિસર બનવા માટે શારીરિક ફિટનેસ (Physical Fitness), સામાન્ય જ્ઞાન, અંગ્રેજી અને NDA/CDS પ્રવેશ પરીક્ષાની તૈયારી પ્રાથમિકતા હોવી જોઈએ.`;
  } else if (career.category === "finance") {
    assessmentSummary = `તમે ${input.standard} માં છો. ચાર્ટર્ડ એકાઉન્ટન્સી (CA) અથવા ફાઇનાન્સમાં સફળ થવા માટે એકાઉન્ટ્સ, નાણાકીય આંકડા અને ગણિત પર ઊંડું પ્રભુત્વ કેળવવું મહત્વપૂર્ણ છે.`;
  } else {
    assessmentSummary = `તમે હાલમાં ${input.standard} માં છો. ${career.title} બનવા માટે વિષયવસ્તુનો પાયો, વ્યવસાયિક ટૂલ્સ અને પ્રાયોગિક અનુભવ કેળવવાનો આ સાચો સમય છે.`;
  }

  // 2. Dynamic Roadmap Stages
  const roadmap: CareerRoadmapStage[] = generateRoadmapStages(career, stage, input.standard);

  // 3. Immediate Action Plan
  const immediateActions: ActionPlanItem[] = generateImmediateActions(career, stage, input);

  // 4. Skill Gap Matrix
  const skillGap: SkillGapItem[] = generateSkillGap(career, stage, input);

  // 5. Timeline Learning Plan
  const timelinePlan: TimelinePlanItem[] = generateTimelinePlan(career, stage, input);

  // 6. Alternative Careers
  const alternativeCareers: AlternativeCareer[] = generateAlternatives(career);

  // 7. More Info & Official Resources (Smart fallback & exploration)
  const moreInfoResources: ResourceGuidance[] = generateResources(career);

  // 8. Readiness calculation
  let foundationScore = 75;
  let skillsScore = 45;
  let experienceScore = 30;

  if (input.current_experience.includes("પ્રોજેક્ટ્સ") || input.current_experience.includes("એડવાન્સ")) {
    skillsScore = 70;
    experienceScore = 65;
  } else if (input.current_experience.includes("ખ્યાલો")) {
    skillsScore = 55;
    experienceScore = 40;
  }

  if (stage === 'middle') {
    foundationScore = 85;
    skillsScore = 35;
    experienceScore = 20;
  } else if (stage === 'college') {
    foundationScore = 80;
    skillsScore = Math.max(skillsScore, 60);
  }

  return {
    career,
    student_stage: input.standard,
    is_custom: isCustom,
    assessment_summary_gu: assessmentSummary,
    readiness: {
      foundation_pct: foundationScore,
      skills_pct: skillsScore,
      experience_pct: experienceScore,
      overall_readiness_gu: "હકારાત્મક દિશા — યોગ્ય માર્ગદર્શન અને પદ્ધતિસરની મહેનતથી લક્ષ્ય સિદ્ધ થઈ શકે છે."
    },
    roadmap,
    immediate_actions: immediateActions,
    skill_gap: skillGap,
    timeline_plan: timelinePlan,
    alternative_careers: alternativeCareers,
    more_info_resources: moreInfoResources,
    generated_at: new Date().toISOString()
  };
}

// Generate Official & Reliable Resources for More Information
function generateResources(career: CareerGoal): ResourceGuidance[] {
  return [
    {
      title: "નેશનલ કરિયર સર્વિસ (NCS Portal - ભારત સરકાર)",
      desc_gu: "કેન્દ્રીય શ્રમ અને રોજગાર મંત્રાલય દ્વારા અધિકૃત કરિયર માહિતી, લાયકાત અને સંસ્થાઓની વિગતો.",
      type_gu: "સત્તાવાર સરકારી પોર્ટલ"
    },
    {
      title: "SWAYAM & NPTEL ફ્રી ઓનલાઇન કોર્સિસ",
      desc_gu: "ભારત સરકારના શિક્ષણ મંત્રાલય અને IITs/IIMs દ્વારા સંચાલિત પ્રમાણિત ઓનલાઇન લર્નિંગ પ્લેટફોર્મ.",
      type_gu: "ઓનલાઇન પ્રમાણપત્ર & શિક્ષણ"
    },
    {
      title: "વ્યાવસાયિક નેટવર્કિંગ & મેન્ટરશિપ (LinkedIn / Community)",
      desc_gu: "આ ક્ષેત્રમાં હાલમાં કાર્યરત નિષ્ણાતો અને વરિષ્ઠ પ્રોફેશનલ્સ સાથે સીધો સંવાદ અને માર્ગદર્શન.",
      type_gu: "ઇન્ડસ્ટ્રી નેટવર્કિંગ"
    },
    {
      title: "AICTE / UGC માન્યતા પ્રાપ્ત યુનિવર્સિટી ગાઇડ",
      desc_gu: "આ ક્ષેત્રના યોગ્ય ડિગ્રી, ડિપ્લોમા અને પ્રવેશ પરીક્ષાઓ (Entrance Exams) ની વિગતવાર યાદી.",
      type_gu: "શૈક્ષણિક પ્રવેશ ગાઇડ"
    }
  ];
}

// Generator Helper: Dynamic Roadmap Stages per Domain Category
function generateRoadmapStages(career: CareerGoal, stage: 'middle' | 'secondary' | 'higher_sec' | 'college', standard: string): CareerRoadmapStage[] {
  if (career.category === "law") {
    return [
      {
        stage_num: 1,
        title: "ભાષા પ્રભુત્વ & તાર્કિક ક્ષમતા (Foundations)",
        subtitle_gu: "વાંચન, સામાન્ય જ્ઞાન, વક્તૃત્વ અને તાર્કિક દલીલબાજી",
        period_gu: `${standard} (હાલનો તબક્કો)`,
        what_to_learn: [
          "અંગ્રેજી અને ગુજરાતી ભાષામાં સ્પષ્ટ વાંચન અને લેખન ક્ષમતા",
          "ભારતીય બંધારણ (Constitution) ના પાયાના નાગરિક અધિકારો",
          "દૈનિક વર્તમાન પ્રવાહો (Current Affairs) અને કાનૂની મુદ્દાઓનું વિશ્લેષણ",
          "વક્તૃત્વ અને ડિબેટિંગ (Debate) સ્પર્ધાઓમાં સક્રિય ભાગ લેવો"
        ],
        why_it_matters: "વકીલાત અને ન્યાયતંત્ર માટે તાર્કિક દલીલ કરવાની ક્ષમતા અને કાયદાકીય સમજ સૌથી મહત્વનો પાયો છે.",
        key_skills: ["Legal Reasoning", "Public Speaking", "Current Affairs", "Reading Comprehension"],
        suggested_next_step: "રોજ અખબારના સંપાદકીય લેખો વાંચીને પોતાના શબ્દોમાં દલીલો લખવાની પ્રેક્ટિસ કરો."
      },
      {
        stage_num: 2,
        title: "ધોરણ ૧૧-૧૨ & CLAT / Law Entrance તૈયારી",
        subtitle_gu: "કોઈપણ પ્રવાહ (Arts / Commerce / Science) + CLAT પરીક્ષા",
        period_gu: "આગામી તબક્કો (૧-૨ વર્ષ)",
        what_to_learn: [
          "CLAT / AILET પરીક્ષા સિલેબસ: Legal Reasoning, Logical Reasoning, English, GK, Maths",
          "પાછલા વર્ષોના CLAT પેપર્સ અને મોક ટેસ્ટનું સમયબદ્ધ સોલ્વિંગ",
          "ન્યાયતંત્રના ઐતિહાસિક ચુકાદાઓ (Landmark Judgments) નો પરિચય"
        ],
        why_it_matters: "ટોચની National Law Universities (NLUs) માં ૫ વર્ષના ઇન્ટિગ્રેટેડ BA LLB / BBA LLB કોર્સમાં પ્રવેશ મેળવવા માટે CLAT મુખ્ય દ્વાર છે.",
        key_skills: ["CLAT Strategy", "Critical Thinking", "Speed Reading", "Analytical Logic"],
        suggested_next_step: "નિયમિત મોક ટેસ્ટ આપી સ્પીડ અને એક્યુરેસી સુધારો."
      },
      {
        stage_num: 3,
        title: "પ્રોફેશનલ લૉ ડિગ્રી (BA LLB / LLB - ૫ વર્ષ / ૩ વર્ષ)",
        subtitle_gu: "કાયદા કોલેજ, મૂર્ત કોર્ટ (Moot Courts) અને કોર્ટ ઇન્ટર્નશિપ",
        period_gu: "કોલેજ કાળ (ડિગ્રી સમયગાળો)",
        what_to_learn: [
          "Constitutional Law, Criminal Law (IPC/BNS), Civil Law (CPC), Corporate Law",
          "કોર્ટ ડ્રાફ્ટિંગ, એફિડેવિટ અને અરજીઓ લખવાની વ્યવહારુ તાલીમ",
          "Moot Court કોમ્પિટિશનમાં ભાગ લઈ જજ સામે દલીલો કરવાની કળા",
          "જિલ્લા અદાલત અને હાઇકોર્ટના વરિષ્ઠ વકીલો હેઠળ ઇન્ટર્નશિપ"
        ],
        why_it_matters: "કાયદાના પુસ્તકીય જ્ઞાનને વાસ્તવિક કોર્ટરૂમમાં અસરકારક રીતે રજૂ કરવાનો આ મુખ્ય તબક્કો છે.",
        key_skills: ["Moot Court Advocacy", "Legal Drafting", "Case Precedents", "Client Counseling"],
        suggested_next_step: "દરેક વેકેશનમાં જાણીતા એડવોકેટ અથવા લો ફર્મમાં ઇન્ટર્નશિપ કરો."
      },
      {
        stage_num: 4,
        title: "બાર કાઉન્સિલ રજીસ્ટ્રેશન & કોર્ટ પ્રેક્ટિસ / જ્યુડિશિયરી",
        subtitle_gu: "AIBE પરીક્ષા, એડવોકેટ તરીકે સનદ અથવા સિવિલ જજ પરીક્ષા",
        period_gu: "પ્રોફેશનલ કારકિર્દી",
        what_to_learn: [
          "All India Bar Examination (AIBE) પાસ કરી પ્રેક્ટિસની સનદ મેળવવી",
          "હાઇકોર્ટ / સુપ્રીમ કોર્ટમાં સ્વતંત્ર પ્રેક્ટિસ અથવા કોર્પોરેટ લીગલ એડવાઇઝર બનવું",
          "જ્યુડિશિયલ સર્વિસીસ પરીક્ષા આપી સિવિલ જજ (Civil Judge) બનવાનો વિકલ્પ"
        ],
        why_it_matters: "સમાજમાં અન્યાય સામે ન્યાય અપાવવા અને કાયદાના રક્ષક તરીકે પ્રતિષ્ઠિત સ્થાન પ્રાપ્ત કરવા માટે.",
        key_skills: ["Courtroom Advocacy", "Judicial Reasoning", "Legal Ethics", "Cross-Examination"],
        suggested_next_step: "બાર કાઉન્સિલમાં નોંધણી કરાવી સ્વતંત્ર કેસો લડવાનું શરૂ કરવું."
      }
    ];
  }

  if (career.category === "tech") {
    return [
      {
        stage_num: 1,
        title: stage === 'college' ? "Advanced Core & DSA" : "શૈક્ષણિક પાયો & ગણિત (Foundations)",
        subtitle_gu: stage === 'college' ? "ડેટા સ્ટ્રક્ચર્સ, એલ્ગોરિધમ્સ અને કોમ્પ્યુટેશનલ થીંકિંગ" : "ગણિત, તાર્કિક વિશ્લેષણ અને પ્રોબ્લેમ સોલ્વિંગ ક્ષમતા",
        period_gu: `${standard} (હાલનો તબક્કો)`,
        what_to_learn: [
          "Linear Algebra અને Probability ના બેઝિક ખ્યાલો",
          "Logical Reasoning & Problem Solving ટેકનિક્સ",
          "Python પ્રોગ્રામિંગના પ્રારંભિક ફંડામેન્ટલ્સ"
        ],
        why_it_matters: "AI અને સોફ્ટવેરમાં અલ્ગોરિધમ્સ સમજવા માટે ગણિત અને તાર્કિક ક્ષમતા એ સૌથી મહત્વનો પાયો છે.",
        key_skills: ["Python", "Logical Thinking", "Basic Statistics", "Problem Solving"],
        suggested_next_step: "દર અઠવાડિયે ૨-૩ કલાક કોડિંગ અને તાર્કિક પઝલ્સ ઉકેલવાની આદત બનાવો."
      },
      {
        stage_num: 2,
        title: "યોગ્ય પ્રવાહ & ટેકનિકલ બેઝિક્સ",
        subtitle_gu: "ધોરણ ૧૧-૧૨ સાયન્સ (A-Group) / કોમ્પ્યુટર સાયન્સ",
        period_gu: "આગામી તબક્કો (૧-૨ વર્ષ)",
        what_to_learn: [
          "ગણિત અને ભૌતિક વિજ્ઞાનમાં ઊંડાણપૂર્વક સમજ",
          "Python Libraries: NumPy, Pandas, Matplotlib",
          "Data Structures & Basic OOPs Concepts"
        ],
        why_it_matters: "ટોચની એન્જિનિયરિંગ કોલેજોમાં પ્રવેશ માટે બોર્ડ તથા JEE/GUJCET જેવી પરીક્ષાઓ મુખ્ય આધાર બને છે.",
        key_skills: ["Advanced Mathematics", "Python OOPs", "Data Analysis", "Git / GitHub"],
        suggested_next_step: "નાના ડેટા વિશ્લેષણ પ્રોજેક્ટ્સ GitHub પર મૂકવાનું શરૂ કરો."
      },
      {
        stage_num: 3,
        title: "પ્રોફેશનલ ગ્રેજ્યુએશન (B.Tech / B.E. / BCA-MCA)",
        subtitle_gu: "Computer Science / AI & Data Science સ્પેશિયલાઇઝેશન",
        period_gu: "કોલેજ ડિગ્રી (૩-૪ વર્ષ)",
        what_to_learn: [
          "Machine Learning Algorithms (Regression, Trees, Neural Nets)",
          "Database Management (SQL & NoSQL)",
          "Deep Learning Frameworks (TensorFlow / PyTorch)",
          "Cloud Deployment (AWS / GCP / Docker)"
        ],
        why_it_matters: "ઇન્ડસ્ટ્રીમાં રિયલ-વર્લ્ડ પ્રોબ્લેમ્સ સોલ્વ કરવા માટે એન્ડ-ટુ-એન્ડ સિસ્ટમ ડિઝાઇન જરૂરી છે.",
        key_skills: ["Machine Learning", "Deep Learning", "SQL", "Cloud Basics", "System Design"],
        suggested_next_step: "ઓપન-સોર્સ કોન્ટ્રીબ્યુશન અને હેકાથોન્સમાં ભાગ લેવો."
      },
      {
        stage_num: 4,
        title: "ઇન્ડસ્ટ્રી ઇન્ટર્નશિપ & સ્પેશિયલાઇઝેશન",
        subtitle_gu: "રિયલ-ટાઇમ પ્રોજેક્ટ્સ અને લાઇવ પ્રોડક્શન સિસ્ટમ્સ",
        period_gu: "અંતિમ વર્ષ & પ્રોફેશનલ કારકિર્દી",
        what_to_learn: [
          "Large Language Models (LLMs) અને Generative AI",
          "MLOps (Model Monitoring & Pipeline Automation)",
          "Team Collaboration અને Agile વર્કફ્લો"
        ],
        why_it_matters: "થિયરીટિકલ જ્ઞાનને બિઝનેસ વેલ્યુ અને વાસ્તવિક પ્રોડક્ટમાં રૂપાંતરિત કરવાનો આ તબક્કો છે.",
        key_skills: ["MLOps", "LLMs", "Production AI", "Team Leadership"],
        suggested_next_step: "AI Engineer તરીકે જોબ અથવા રિસર્ચ ફેલોશિપ માટે પોર્ટફોલિયો પ્રેઝન્ટેશન."
      }
    ];
  }

  if (career.category === "medical") {
    return [
      {
        stage_num: 1,
        title: "જીવવિજ્ઞાન & પાયાની વિજ્ઞાન સમજ",
        subtitle_gu: "Biology, Chemistry અને વૈજ્ઞાનિક અભિગમ",
        period_gu: `${standard} (હાલનો તબક્કો)`,
        what_to_learn: [
          "માનવ શરીરરચના અને સેલ બાયોલોજીના મૂળભૂત સિદ્ધાંતો",
          "વિજ્ઞાન અને રસાયણશાસ્ત્રના પાયાના પ્રયોગો",
          "નિયમિત વાંચન અને નોટ્સ બનાવવાની શિસ્ત"
        ],
        why_it_matters: "મેડિકલ ક્ષેત્ર માટે જૈવિક વિજ્ઞાન અને જીવંત પ્રણાલીઓ પ્રત્યે ઊંડી રુચિ આવશ્યક છે.",
        key_skills: ["Biology Fundamentals", "Analytical Observation", "Memory Retention"],
        suggested_next_step: "રોજ ૨ કલાક વિજ્ઞાનના કોન્સેપ્ટ્સ ડાયાગ્રામ સાથે સમજવાની પ્રેક્ટિસ કરો."
      },
      {
        stage_num: 2,
        title: "ધોરણ ૧૧-૧૨ સાયન્સ (B-Group) & NEET તૈયારી",
        subtitle_gu: "Physics, Chemistry, Biology (PCB) પર સંપૂર્ણ પ્રભુત્વ",
        period_gu: "આગામી તબક્કો (૧-૨ વર્ષ)",
        what_to_learn: [
          "NCERT બાયોલોજીનું લાઇન-બાય-લાઇન અધ્યયન",
          "NEET પાછલા વર્ષોના પ્રશ્નપત્રો (MCQ Practice)",
          "સમય વ્યવસ્થાપન અને ઝડપી પ્રશ્ન ઉકેલવાની પદ્ધતિ"
        ],
        why_it_matters: "ભારતમાં સરકારી કે ટોચની મેડિકલ કોલેજમાં પ્રવેશ મેળવવા માટે NEET સ્કોર એકમાત્ર આધાર છે.",
        key_skills: ["NEET Strategy", "High Speed MCQ Solving", "Stress Management"],
        suggested_next_step: "મોક ટેસ્ટ આપીને પોતાની નબળાઈઓનું વિશ્લેષણ કરવું."
      },
      {
        stage_num: 3,
        title: "MBBS મેડિકલ ડિગ્રી (૫.૫ વર્ષ)",
        subtitle_gu: "Pre-Clinical, Para-Clinical અને Clinical તાલીમ",
        period_gu: "મેડિકલ કોલેજ અભ્યાસ",
        what_to_learn: [
          "Anatomy, Physiology, Biochemistry",
          "Pharmacology, Pathology, Microbiology",
          "Medicine, Surgery, Pediatrics, Gynaecology",
          "૧ વર્ષની ફરજિયાત રોટેશનલ ઇન્ટર્નશિપ"
        ],
        why_it_matters: "દર્દીઓની સીધી સારવાર, ક્લિનિકલ ડાયગ્નોસિસ અને દવાઓનું સાચું જ્ઞાન મેળવવા માટે.",
        key_skills: ["Clinical Diagnosis", "Patient Care", "Medical Ethics", "Emergency Response"],
        suggested_next_step: "હોસ્પિટલ વોર્ડ્સમાં વરિષ્ઠ ડોક્ટરો પાસેથી ક્લિનિકલ કેસો શીખવા."
      },
      {
        stage_num: 4,
        title: "પોસ્ટ ગ્રેજ્યુએશન (MD / MS / Super Speciality)",
        subtitle_gu: "વિશિષ્ટ સારવાર ક્ષેત્ર (Cardiology, Neurology, Surgery, વગેરે)",
        period_gu: "સ્પેશિયલાઇઝેશન",
        what_to_learn: [
          "સુપર સ્પેશિયાલિટી સર્જરી અથવા એડવાન્સ્ડ મેડિસિન",
          "તબીબી સંશોધન અને ક્લિનિકલ ટ્રાયલ્સ",
          "હોસ્પિટલ મેનેજમેન્ટ અને સ્પેશિયાલિટી ક્લિનિક"
        ],
        why_it_matters: "સર્વોચ્ચ કક્ષાના તબીબી નિષ્ણાત બનીને સમાજને ઉત્કૃષ્ટ સેવા આપવા માટે.",
        key_skills: ["Specialized Surgery", "Advanced Diagnostics", "Medical Research"],
        suggested_next_step: "નેશનલ બોર્ડ એક્ઝામ (NEET-PG/NEXT) ક્લિયર કરી નિષ્ણાત બનવું."
      }
    ];
  }

  // Default Professional Pathway
  return [
    {
      stage_num: 1,
      title: "મૂળભૂત જ્ઞાન & વિષય રસ (Foundations)",
      subtitle_gu: "સંબંધિત વિષયમાં મજબૂત રસ અને બેઝિક સ્કીલ્સ",
      period_gu: `${standard} (હાલનો તબક્કો)`,
      what_to_learn: [
        "વિષયના પાયાના ખ્યાલો અને સિદ્ધાંતો",
        "તાર્કિક વિચારસરણી અને સામાન્ય કૌશલ્યો",
        "ક્ષેત્રના સફળ લોકોની યાત્રાનો અભ્યાસ"
      ],
      why_it_matters: "પ્રારંભિક રસ અને સ્પષ્ટતા ભવિષ્યની સાચી દિશા નક્કી કરવામાં મદદ કરે છે.",
      key_skills: ["Core Fundamentals", "Curiosity", "Basic Tools", "Communication"],
      suggested_next_step: "આ વિષય સાથે જોડાયેલા પુસ્તકો અને વિડિયો દ્વારા જ્ઞાન વધારો."
    },
    {
      stage_num: 2,
      title: "યોગ્ય પ્રવાહ & પ્રોફેશનલ અભ્યાસક્રમ",
      subtitle_gu: "ધોરણ ૧૧-૧૨ અથવા ડિપ્લોમા/ફાઉન્ડેશન કોર્સ",
      period_gu: "આગામી તબક્કો (૧-૨ વર્ષ)",
      what_to_learn: [
        "વિશિષ્ટ વિષયોમાં ઊંડાણપૂર્વક શિક્ષણ",
        "પ્રોફેશનલ ટૂલ્સ અને સોફ્ટવેરની તાલીમ",
        "પ્રવેશ પરીક્ષાઓ અથવા ફાઉન્ડેશન ટેસ્ટની તૈયારી"
      ],
      why_it_matters: "યોગ્ય ડિગ્રી અથવા પ્રોફેશનલ પ્રમાણપત્ર કારકિર્દીના દરવાજા ખોલે છે.",
      key_skills: ["Professional Domain Knowledge", "Tool Proficiency", "Discipline"],
      suggested_next_step: "પ્રવેશ પરીક્ષા અથવા પ્રોફેશનલ કોર્સમાં નોંધણી કરાવો."
    },
    {
      stage_num: 3,
      title: "ગ્રેજ્યુએશન & પ્રેક્ટિકલ પ્રોજેક્ટ્સ",
      subtitle_gu: "પ્રોફેશનલ ડિગ્રી / સર્ટિફિકેશન",
      period_gu: "કોલેજ / તાલીમ કાળ",
      what_to_learn: [
        "ઇન્ડસ્ટ્રી સ્ટાન્ડર્ડ ટૂલ્સ અને વર્કફ્લો",
        "રિયલ-વર્લ્ડ પ્રોજેક્ટ્સ અને કેસ સ્ટડીઝ",
        "પોર્ટફોલિયો અને નેટવર્કિંગ ડેવલપમેન્ટ"
      ],
      why_it_matters: "માર્કેટમાં માત્ર ડિગ્રી નહીં, પણ તમે શું બનાવી શકો છો તે જોવામાં આવે છે.",
      key_skills: ["Hands-on Projects", "Portfolio", "Collaboration", "Problem Solving"],
      suggested_next_step: "ઇન્ટર્નશિપ મેળવીને વાસ્તવિક કામ કરવાનો અનુભવ મેળવો."
    },
    {
      stage_num: 4,
      title: "પ્રોફેશનલ કરિયર & એક્સપર્ટાઇઝ",
      subtitle_gu: "ઇન્ડસ્ટ્રી નિષ્ણાત તરીકે સ્થાપિત થવું",
      period_gu: "કારકિર્દી તબક્કો",
      what_to_learn: [
        "અદ્યતન ટેકનોલોજી અને નવા ટ્રેન્ડ્સનું સતત અધ્યયન",
        "ટીમ લીડરશિપ અને ક્લાયન્ટ મેનેજમેન્ટ",
        "બિઝનેસ ઇમ્પેક્ટ અને ઇનોવેશન"
      ],
      why_it_matters: "પોતાના ક્ષેત્રમાં ટોચના સ્થાને પહોંચી આર્થિક અને વ્યાવસાયિક સફળતા હાંસલ કરવા માટે.",
      key_skills: ["Domain Mastery", "Leadership", "Strategic Planning"],
      suggested_next_step: "પોતાના ક્ષેત્રમાં લીડર તરીકે ઓળખ ઊભી કરવી."
    }
  ];
}

// Generator Helper: Immediate Action Items
function generateImmediateActions(career: CareerGoal, stage: 'middle' | 'secondary' | 'higher_sec' | 'college', input: CareerInput): ActionPlanItem[] {
  if (career.category === "law") {
    return [
      {
        step: 1,
        title: "રોજ અખબાર વાંચી કાનૂની અને સામાજિક વિશ્લેષણ કરો",
        action: "દૈનિક સંપાદકીય લેખો વાંચી તેના મુખ્ય પક્ષ-વિપક્ષ મુદ્દા નોટબુકમાં લખો.",
        timeframe: "રોજિંદી ટેવ",
        priority: "high"
      },
      {
        step: 2,
        title: "ભારતીય બંધારણ અને મૂળભૂત અધિકારો સમજો",
        action: "બંધારણના આર્ટિકલ્સ (ખાસ કરીને સમાનતા, સ્વતંત્રતા અને ન્યાય) નો પાયો તૈયાર કરો.",
        timeframe: "આગામી ૩૦ દિવસ",
        priority: "high"
      },
      {
        step: 3,
        title: "CLAT / AILET પરીક્ષાના પ્રશ્નપત્રોનો અભ્યાસ શરૂ કરો",
        action: "Legal Reasoning અને Critical Thinking ના પાછલા વર્ષોના પ્રશ્નો ઉકેલો.",
        timeframe: "૬૦ દિવસ",
        priority: "high"
      },
      {
        step: 4,
        title: "વક્તૃત્વ અને વાદ-વિવાદ (Debating) સ્પર્ધાઓમાં ભાગ લો",
        action: "શાળા/કોલેજની ડિબેટમાં ભાગ લઈ પોતાની દલીલ રજૂ કરવાની કળા કેળવો.",
        timeframe: "ચાલુ સત્ર",
        priority: "medium"
      }
    ];
  }

  if (career.category === "tech") {
    if (stage === 'middle' || stage === 'secondary') {
      return [
        {
          step: 1,
          title: "Python પ્રોગ્રામિંગના પાયાના ખ્યાલો શીખો",
          action: "દરરોજ ૩૦ મિનિટ Python Basics (Variables, Loops, Functions) પ્રેક્ટિસ કરો.",
          timeframe: "આગામી ૩૦ દિવસ",
          priority: "high"
        },
        {
          step: 2,
          title: "ગણિત અને તાર્કિક ક્ષમતા મજબૂત બનાવો",
          action: "શાળાના ગણિતના પ્રકરણો (ખાસ કરીને ભૂમિતિ, આંકડાશાસ્ત્ર અને બીજગણિત) માં સંપૂર્ણ સ્પષ્ટતા મેળવો.",
          timeframe: "ચાલુ સત્ર",
          priority: "high"
        },
        {
          step: 3,
          title: "પ્રથમ નાનો AI / કોડિંગ પ્રોજેક્ટ બનાવો",
          action: "એક સરળ કેલ્ક્યુલેટર અથવા ડેટા ગેમ બનાવીને GitHub પર સેવ કરો.",
          timeframe: "૨ મહિનાની અંદર",
          priority: "medium"
        },
        {
          step: 4,
          title: "AI ના નવા સંશોધનો વિશે વાંચવાની આદત બનાવો",
          action: "દર અઠવાડિયે ૧ ટેકનોલોજી આર્ટિકલ અથવા AI સાયન્સ વિડિયો જુઓ.",
          timeframe: "નિયમિત",
          priority: "medium"
        }
      ];
    } else {
      return [
        {
          step: 1,
          title: "Data Structures & Algorithms (DSA) પર રોજ ૧ કલાક ફાળવો",
          action: "Arrays, Trees, Graphs અને Sorting અલ્ગોરિધમ્સ સોલ્વ કરો.",
          timeframe: "આગામી ૪૫ દિવસ",
          priority: "high"
        },
        {
          step: 2,
          title: "NumPy, Pandas અને Scikit-Learn માં એક્સપર્ટ બનો",
          action: "વાસ્તવિક ડેટાસેટ્સ ડાઉનલોડ કરી Machine Learning Regression/Classification મોડેલ્સ બનાવો.",
          timeframe: "૬૦ દિવસ",
          priority: "high"
        },
        {
          step: 3,
          title: "GitHub Portfolio & પ્રોજેક્ટ ડોક્યુમેન્ટેશન",
          action: "ઓછામાં ઓછા ૩ ગુણવત્તાસભર એન્ડ-ટુ-એન્ડ પ્રોજેક્ટ્સ README સાથે પબ્લિશ કરો.",
          timeframe: "૯૦ દિવસ",
          priority: "high"
        },
        {
          step: 4,
          title: "Kaggle કોમ્પિટિશન અથવા ઓપન-સોર્સ કોન્ટ્રીબ્યુશન",
          action: "ગ્લોબલ ડેટા ચેલેન્જિસમાં ભાગ લઈ વાસ્તવિક પ્રોબ્લેમ્સ સોલ્વ કરો.",
          timeframe: "આગામી સેમેસ્ટર",
          priority: "medium"
        }
      ];
    }
  }

  // Default actions
  return [
    {
      step: 1,
      title: "ક્ષેત્રના પાયાના સિદ્ધાંતો અને ટૂલ્સ શીખવાનું શરૂ કરો",
      action: "ઓનલાઇન પ્રમાણિત અભ્યાસક્રમો અને પુસ્તકો દ્વારા જ્ઞાન મેળવો.",
      timeframe: "આગામી ૩૦ દિવસ",
      priority: "high"
    },
    {
      step: 2,
      title: "પ્રેક્ટિકલ સ્કીલ ડેવલપમેન્ટ પર ધ્યાન કેન્દ્રિત કરો",
      action: "થિયરી ઉપરાંત પ્રાયોગિક પ્રોજેક્ટ્સ અને અસાઇનમેન્ટ્સ જાતે કરો.",
      timeframe: "૬૦ દિવસ",
      priority: "high"
    },
    {
      step: 3,
      title: "પોતાનો પ્રોફેશનલ પોર્ટફોલિયો તૈયાર કરો",
      action: "તમારું કામ અને પ્રોજેક્ટ્સ ડિજિટલ સ્વરૂપે વ્યવસ્થિત રજૂ કરો.",
      timeframe: "૯૦ દિવસ",
      priority: "medium"
    },
    {
      step: 4,
      title: "પ્રત્યાયન અને પ્રસ્તુતિ કૌશલ્ય (Communication) સુધારો",
      action: "ગ્રુપ ડિસ્કશન અને પબ્લિક સ્પીકિંગમાં સક્રિય ભાગ લો.",
      timeframe: "નિયમિત",
      priority: "medium"
    }
  ];
}

// Generator Helper: Skill Gap Comparison
function generateSkillGap(career: CareerGoal, stage: 'middle' | 'secondary' | 'higher_sec' | 'college', input: CareerInput): SkillGapItem[] {
  const isExperienced = input.current_experience.includes("પ્રોજેક્ટ્સ") || input.current_experience.includes("એડવાન્સ");
  const baseOffset = isExperienced ? 2 : 0;

  if (career.category === "law") {
    return [
      {
        skill_name: "Legal Reasoning & Logic",
        current_level: Math.min(10, (stage === 'middle' ? 3 : stage === 'secondary' ? 4 : stage === 'higher_sec' ? 5 : 6) + baseOffset),
        needed_level: 9,
        category_gu: "કાનૂની તર્ક",
        tip_gu: "કોઈપણ પરિસ્થિતિમાં કાયદાકીય સિદ્ધાંત લાગુ કરી તાર્કિક નિર્ણય લેવો."
      },
      {
        skill_name: "Constitutional & General Law",
        current_level: Math.min(10, (stage === 'middle' ? 2 : stage === 'secondary' ? 3 : stage === 'higher_sec' ? 4 : 6) + baseOffset),
        needed_level: 9,
        category_gu: "બંધારણ & કાયદો",
        tip_gu: "ભારતીય બંધારણ, નાગરિક અધિકારો અને ન્યાયપ્રણાલીનું ઊંડાણપૂર્વક વાંચન કરો."
      },
      {
        skill_name: "Public Speaking & Argumentation",
        current_level: Math.min(10, 4 + baseOffset),
        needed_level: 9,
        category_gu: "દલીલબાજી & વક્તૃત્વ",
        tip_gu: "અદાલતમાં જજ સમક્ષ સ્પષ્ટ અને પ્રભાવશાળી દલીલ રજૂ કરવાની કળા."
      },
      {
        skill_name: "Legal Drafting & Case Research",
        current_level: Math.min(10, (stage === 'middle' ? 1 : stage === 'secondary' ? 2 : stage === 'higher_sec' ? 3 : 5) + baseOffset),
        needed_level: 8,
        category_gu: "ડ્રાફ્ટિંગ & કેસ રિસર્ચ",
        tip_gu: "અદાલતી પિટિશન, એગ્રીમેન્ટ્સ અને જૂના ચુકાદાઓ શોધવાની કુશળતા."
      }
    ];
  }

  if (career.category === "tech") {
    return [
      {
        skill_name: "Python / Programming",
        current_level: Math.min(10, (stage === 'middle' ? 2 : stage === 'secondary' ? 3 : stage === 'higher_sec' ? 5 : 6) + baseOffset),
        needed_level: 9,
        category_gu: "કોર ટેકનિકલ",
        tip_gu: "ઓબ્જેક્ટ ઓરિએન્ટેડ પ્રોગ્રામિંગ અને ફંક્શનલ કોડિંગ મજબૂત કરો."
      },
      {
        skill_name: "Mathematics & Statistics",
        current_level: Math.min(10, (stage === 'middle' ? 4 : stage === 'secondary' ? 5 : stage === 'higher_sec' ? 6 : 6) + baseOffset),
        needed_level: 8,
        category_gu: "પાયાનું ગણિત",
        tip_gu: "પ્રોબેબિલિટી, મેટ્રિક્સ અને કેલ્ક્યુલસના ખ્યાલો સમજો."
      },
      {
        skill_name: "Machine Learning / AI Algorithms",
        current_level: Math.min(10, (stage === 'middle' ? 1 : stage === 'secondary' ? 2 : stage === 'higher_sec' ? 3 : 5) + baseOffset),
        needed_level: 9,
        category_gu: "એડવાન્સ્ડ AI",
        tip_gu: "Scikit-Learn અને PyTorch વડે મોડેલ્સ ટ્રેન કરતા શીખો."
      },
      {
        skill_name: "Real-world Projects & GitHub",
        current_level: Math.min(10, (stage === 'middle' ? 1 : stage === 'secondary' ? 2 : stage === 'higher_sec' ? 4 : 5) + baseOffset),
        needed_level: 8,
        category_gu: "પ્રોજેક્ટ પોર્ટફોલિયો",
        tip_gu: "તમારા પ્રોજેક્ટ્સને ઓનલાઇન ડોક્યુમેન્ટ કરો."
      }
    ];
  }

  return [
    {
      skill_name: "Core Domain Knowledge",
      current_level: Math.min(10, (stage === 'middle' ? 3 : stage === 'secondary' ? 4 : 6) + baseOffset),
      needed_level: 9,
      category_gu: "વિષય જ્ઞાન",
      tip_gu: "વિષયના પાયાના પુસ્તકો અને પ્રમાણિત સ્રોતોમાંથી વાંચો."
    },
    {
      skill_name: "Analytical & Critical Thinking",
      current_level: Math.min(10, 5 + baseOffset),
      needed_level: 8,
      category_gu: "તાર્કિક ક્ષમતા",
      tip_gu: "કેસ સ્ટડીઝ અને વાસ્તવિક ઉદાહરણોનું વિશ્લેષણ કરો."
    },
    {
      skill_name: "Practical Tools Proficiency",
      current_level: Math.min(10, (stage === 'middle' ? 2 : stage === 'secondary' ? 3 : 5) + baseOffset),
      needed_level: 8,
      category_gu: "ટૂલ્સ & સોફ્ટવેર",
      tip_gu: "ઇન્ડસ્ટ્રીમાં વપરાતા આધુનિક સોફ્ટવેર શીખો."
    },
    {
      skill_name: "Communication & Presentation",
      current_level: Math.min(10, 5 + baseOffset),
      needed_level: 8,
      category_gu: "પ્રત્યાયન કૌશલ્ય",
      tip_gu: "સ્પષ્ટ અને આત્મવિશ્વાસપૂર્વક વાતચીત કરવાની ક્ષમતા કેળવો."
    }
  ];
}

// Generator Helper: Timeline Plan
function generateTimelinePlan(career: CareerGoal, stage: 'middle' | 'secondary' | 'higher_sec' | 'college', input: CareerInput): TimelinePlanItem[] {
  if (career.category === "law") {
    return [
      {
        period: "હમણાં (આ મહિને)",
        focus: "અખબાર વિશ્લેષણ & બંધારણના પાયાના સિદ્ધાંતો",
        actions: [
          "દૈનિક સંપાદકીય (Editorials) વાંચવાની નિયમિત ટેવ બનાવવી",
          "ભારતીય બંધારણના પ્રારંભિક આર્ટિકલ્સ અને અધિકારો સમજવા",
          "શાળા/કોલેજની ડિબેટ અને વક્તૃત્વ સ્પર્ધામાં ભાગ લેવો"
        ],
        milestone: "પ્રથમ ૩૦ દિવસનું કાનૂની વાંચન લક્ષ્ય પૂર્ણ કરવું"
      },
      {
        period: "આગામી ૩ મહિના",
        focus: "Legal Reasoning & CLAT પાયાની તૈયારી",
        actions: [
          "CLAT / AILET પરીક્ષાના પાછલા વર્ષોના પેપર્સ સોલ્વ કરવા",
          "Logical Reasoning અને Critical Reading ની પ્રેક્ટિસ",
          "મહત્વના સુપ્રીમ કોર્ટ ચુકાદાઓનો અભ્યાસ"
        ],
        milestone: "પ્રારંભિક ૫ CLAT મોક ટેસ્ટ સફળતાપૂર્વક આપવી"
      },
      {
        period: "૬ મહિના",
        focus: "મોક ટેસ્ટ સ્પીડ બિલ્ડીંગ & કરન્ટ અફેર્સ માસ્ટરી",
        actions: [
          "૧૫૦ માર્ક્સના પ્રશ્નપત્રમાં સમય વ્યવસ્થાપન સુધારવું",
          "સાપ્તાહિક લીગલ કરન્ટ અફેર્સની રિવિઝન સાયકલ",
          "સ્થાનિક કોર્ટરૂમની મુલાકાત લઈ વકીલોની દલીલો જોવી"
        ],
        milestone: "CLAT મોક સ્કોરમાં ૨૦% નો નોંધપાત્ર ઉછાળો મેળવવો"
      },
      {
        period: "૧ વર્ષ",
        focus: "ટોચની National Law University (NLU) માં પ્રવેશ",
        actions: [
          "CLAT પરીક્ષામાં ઓલ ઇન્ડિયા ટોપ રેન્ક પ્રાપ્ત કરવો",
          "BA LLB / BBA LLB ૫ વર્ષના કોર્સમાં એડમિશન મેળવવું",
          "મૂટ કોર્ટ સોસાયટી અને લીગલ એઇડ ક્લિનિકમાં જોડાવું"
        ],
        milestone: "પ્રતિષ્ઠિત લૉ કોલેજમાં અભ્યાસની શરૂઆત"
      },
      {
        period: "લાંબા ગાળાનું લક્ષ્ય",
        focus: "હાઇકોર્ટ/સુપ્રીમ કોર્ટ વકીલ અથવા ન્યાયાધીશ (Judge)",
        actions: [
          "AIBE પરીક્ષા પાસ કરી બાર કાઉન્સિલની સનદ મેળવવી",
          "જ્યુડિશિયલ સર્વિસીસ પરીક્ષા આપી સિવિલ જજ બનવું અથવા સ્વતંત્ર ચેમ્બર સ્થાપવી",
          "સમાજમાં ન્યાય અને કાયદાનું શાસન સ્થાપવામાં અગ્રેસર રહેવું"
        ],
        milestone: "સફળ અને આદરણીય એડવોકેટ / જજ તરીકે કારકિર્દી સ્થાપિત કરવી"
      }
    ];
  }

  return [
    {
      period: "હમણાં (આ મહિને)",
      focus: "વિષયવસ્તુનો પાયો & નિયમિત અધ્યયન આદત",
      actions: [
        "દૈનિક અભ્યાસનું ૧ સ્પષ્ટ ટાઇમટેબલ બનાવવું",
        "પાયાના પુસ્તકોનું સઘન વાંચન શરૂ કરવું",
        "નોટ્સ બનાવવાની પદ્ધતિ વિકસાવવી"
      ],
      milestone: "સતત ૩૦ દિવસ સુધી રોજિંદું લક્ષ્ય સિદ્ધ કરવું"
    },
    {
      period: "આગામી ૩ મહિના",
      focus: "મુખ્ય ખ્યાલોનું ઊંડાણપૂર્વક વિશ્લેષણ",
      actions: [
        "પ્રથમ સત્રના તમામ પ્રકરણોનું રિવિઝન",
        "ચેપ્ટર-વાઇઝ મોક ટેસ્ટ અને ક્વિઝ આપવી",
        "નબળા મુદ્દાઓ ઓળખી તેના પર વધારાનો સમય આપવો"
      ],
      milestone: "મૂળભૂત સિલેબસનો ૫૦% હિસ્સો કવર કરવો"
    },
    {
      period: "૬ મહિના",
      focus: "પ્રેક્ટિકલ પ્રેક્ટિસ & સ્પીડ બિલ્ડીંગ",
      actions: [
        "પાછલા વર્ષોના પેપર્સ સમયમર્યાદામાં ઉકેલવા",
        "પ્રોફેશનલ ટૂલ્સ / પ્રેક્ટિકલ લેબ વર્ક કરવું",
        "સ્પર્ધાત્મક પરીક્ષાની મોક ટેસ્ટ સીરિઝ આપવી"
      ],
      milestone: "સ્કોરમાં ૧૫-૨૦% નો નોંધપાત્ર સુધારો મેળવવો"
    },
    {
      period: "૧ વર્ષ",
      focus: "પ્રવેશ પરીક્ષા / અંતિમ બોર્ડમાં ઉત્કૃષ્ટ પરિણામ",
      actions: [
        "સંપૂર્ણ સિલેબસનું ૨-૩ વાર રિવિઝન",
        "પરીક્ષાના દબાણ સામે માનસિક મજબૂતી કેળવવી",
        "ટોચની કોલેજ / સંસ્થામાં પ્રવેશ માટે અરજી કરવી"
      ],
      milestone: "ઇચ્છિત કોલેજ અથવા પ્રોફેશનલ કોર્સમાં પ્રવેશ પ્રાપ્ત કરવો"
    },
    {
      period: "લાંબા ગાળાનું લક્ષ્ય",
      focus: "વ્યવસાયિક સફળતા & શ્રેષ્ઠ કારકિર્દી",
      actions: [
        "ડિગ્રી પૂર્ણ કરી ઇન્ડસ્ટ્રીમાં વિશેષજ્ઞ તરીકે જોડાવું",
        "સતત નવું શીખી પોતાના ક્ષેત્રમાં અગ્રેસર રહેવું",
        "પરિવાર અને સમાજનું નામ રોશન કરવું"
      ],
      milestone: "પોતાના સપનાના વ્યવસાયમાં સર્વોચ્ચ શિખર સર કરવું"
    }
  ];
}

// Generator Helper: Alternative Careers
function generateAlternatives(career: CareerGoal): AlternativeCareer[] {
  if (career.category === "law") {
    return [
      {
        title: "Judicial Magistrate / Civil Judge",
        desc_gu: "અદાલતમાં ન્યાયાધીશ તરીકે બેસી કેસોનો નિષ્પક્ષ ન્યાય કરવા માટે.",
        match_pct: 95
      },
      {
        title: "Corporate Legal Advisor",
        desc_gu: "મોટી કંપનીઓ, બેંકો અને મલ્ટીનેશનલ ફર્મ્સ માટે કાનૂની સલાહકાર.",
        match_pct: 92
      },
      {
        title: "Cyber Law & Intellectual Property Expert",
        desc_gu: "ડિજિટલ ક્રાઇમ, પેટન્ટ, કોપીરાઇટ અને સાયબર સિક્યુરિટી કાયદા નિષ્ણાત.",
        match_pct: 88
      },
      {
        title: "IAS / Civil Services (Law Optional)",
        desc_gu: "કાયદાના જ્ઞાન સાથે UPSC સિવિલ સર્વિસ પાસ કરી ઉચ્ચ પ્રશાસક બનવું.",
        match_pct: 85
      }
    ];
  }

  if (career.category === "tech") {
    return [
      {
        title: "Data Scientist",
        desc_gu: "ડેટા એનાલિટિક્સ અને ભવિષ્યની પેટર્ન આગાહીમાં રસ ધરાવતા લોકો માટે.",
        match_pct: 94
      },
      {
        title: "Machine Learning Researcher",
        desc_gu: "નવા ગાણિતિક અલ્ગોરિધમ્સ અને AI રિસર્ચ પેપર્સ લખવા માટે.",
        match_pct: 91
      },
      {
        title: "Full Stack Software Developer",
        desc_gu: "વેબ, મોબાઇલ અને એન્ટરપ્રાઇઝ સોફ્ટવેર બનાવવા માટે.",
        match_pct: 88
      },
      {
        title: "Cyber Security Specialist",
        desc_gu: "નેટવર્ક સુરક્ષા અને ડિજિટલ સિસ્ટમ્સ પ્રોટેક્શન માટે.",
        match_pct: 84
      }
    ];
  }

  // Default alternatives
  return [
    {
      title: "Product & Operations Manager",
      desc_gu: "ટીમ લીડરશિપ, પ્રોજેક્ટ ડિલિવરી અને બિઝનેસ પ્લાનિંગ માટે.",
      match_pct: 90
    },
    {
      title: "Business & Strategy Analyst",
      desc_gu: "કંપનીની વૃદ્ધિ અને માર્કેટ સ્ટ્રેટેજી ઘડવા માટે.",
      match_pct: 87
    },
    {
      title: "Academic Professor / Researcher",
      desc_gu: "યુનિવર્સિટી સ્તરે ઉચ્ચ શિક્ષણ અને જ્ઞાન વિસ્તરણ માટે.",
      match_pct: 83
    }
  ];
}
