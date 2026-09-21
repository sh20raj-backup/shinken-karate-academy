export interface Style {
  id: string;
  number: string;
  name: string;
  kanji: string;
  description: string;
  age: string;
  tags: string[];
  image: string;
}

export interface Sensei {
  id: string;
  name: string;
  role: string;
  rank: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  level: "BEG" | "INT" | "ADV";
  course: string;
  coach: string;
  color: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  age: string;
  description: string;
  skills: string[];
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  bestValue?: boolean;
  features: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  rank: string;
  quote: string;
  avatar: string;
}

export const ACADEMY_INFO = {
  name: "Shinken Karate Academy",
  tagline: "Authentic Japanese martial arts training in Bengaluru since 2010.",
  address: "123 Jayanagar, Bengaluru — 560041",
  phone: "+91 98765 43210",
  email: "info@shinkenkarate.com",
  hours: [
    { day: "Monday – Friday", time: "6:00 AM – 9:00 PM" },
    { day: "Saturday", time: "8:00 AM – 5:00 PM" },
    { day: "Sunday", time: "7:00 AM – 12:00 PM" },
  ],
  stats: [
    { value: "15+", label: "Years of Mastery" },
    { value: "500+", label: "Students Trained" },
    { value: "30+", label: "Tournament Medals" },
    { value: "8", label: "Karate Disciplines" },
  ],
};

export const KARATE_STYLES: Style[] = [
  {
    id: "kids-karate",
    number: "No. 04",
    name: "Kids Karate (Ages 5-12)",
    kanji: "子供空手",
    description: "Fun, disciplined training designed specifically for young martial artists. Builds core motor skills, respect, anti-bullying confidence, and focus.",
    age: "Ages 5-12",
    tags: ["Motor Skills", "Respect & Focus", "Anti-Bullying", "Games"],
    image: "/images/vl9oorbcpz13ti7pqtncNBujscY.jpeg",
  },
  {
    id: "goju-ryu",
    number: "No. 03",
    name: "Goju-Ryu Karate",
    kanji: "剛柔流",
    description: "Balanced hard and soft techniques with circular movements, close-range grappling, and deep breath control (Ibuki) rooted in Okinawan tradition.",
    age: "Ages 13+",
    tags: ["Close Combat", "Breath Control", "Kata Mastery", "Self-Defense"],
    image: "/images/BYF3npOdc0o4ncxw9sJAcIjzzkE.jpeg",
  },
  {
    id: "kyokushin",
    number: "No. 02",
    name: "Kyokushin Karate",
    kanji: "極真会館",
    description: "The \x27Ultimate Truth\x27 full-contact karate focused on absolute fighting spirit, mental conditioning, iron body conditioning, and realistic kumite.",
    age: "Ages 16+",
    tags: ["Full-Contact", "Iron Body", "Kumite Sparring", "Conditioning"],
    image: "/images/TfrfwKVpYjQDZcZORuHTxf70VwQ.jpeg",
  },
];

export const SCHEDULE_DATA: Record<string, ScheduleItem[]> = {
  Monday: [
    { id: "m1", time: "6:00 AM - 7:00 AM", level: "ADV", course: "Shotokan Kata & Bunkai", coach: "Sensei Arjun", color: "bg-red-500/10 text-red-500 border-red-500/20" },
    { id: "m2", time: "5:00 PM - 6:00 PM", level: "BEG", course: "Little Ninjas (5-8 yrs)", coach: "Sensei Priya", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
    { id: "m3", time: "7:00 PM - 8:30 PM", level: "INT", course: "Kyokushin Kumite Conditioning", coach: "Sensei Vikram", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  ],
  Tuesday: [
    { id: "t1", time: "6:30 AM - 7:30 AM", level: "INT", course: "Goju-Ryu Tensho & Breathing", coach: "Sensei Vikram", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { id: "t2", time: "5:30 PM - 6:45 PM", level: "BEG", course: "Youth Karate Fundamentals", coach: "Sensei Ananya", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
    { id: "t3", time: "7:00 PM - 8:30 PM", level: "ADV", course: "Black Belt Pre-Grading", coach: "Sensei Arjun", color: "bg-red-500/10 text-red-500 border-red-500/20" },
  ],
  Wednesday: [
    { id: "w1", time: "6:00 AM - 7:00 AM", level: "ADV", course: "Okinawan Kobudo (Bo Staff / Sai)", coach: "Sensei Rohit", color: "bg-red-500/10 text-red-500 border-red-500/20" },
    { id: "w2", time: "5:00 PM - 6:00 PM", level: "BEG", course: "Kids Basic Stances & Kihon", coach: "Sensei Priya", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
    { id: "w3", time: "7:00 PM - 8:30 PM", level: "INT", course: "Full-Contact Heavy Bag & Sparring", coach: "Sensei Dev", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  ],
  Thursday: [
    { id: "th1", time: "6:30 AM - 7:30 AM", level: "INT", course: "Dynamic Stance Transitions & Kicking", coach: "Sensei Ananya", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { id: "th2", time: "5:30 PM - 6:30 PM", level: "BEG", course: "Self-Defense Tactics for Teens", coach: "Sensei Vikram", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
    { id: "th3", time: "7:00 PM - 8:30 PM", level: "ADV", course: "Advanced Kumite Tactics & Footwork", coach: "Sensei Dev", color: "bg-red-500/10 text-red-500 border-red-500/20" },
  ],
  Friday: [
    { id: "f1", time: "6:00 AM - 7:00 AM", level: "ADV", course: "Master Kata Series: Bassai Dai & Kanku", coach: "Sensei Arjun", color: "bg-red-500/10 text-red-500 border-red-500/20" },
    { id: "f2", time: "5:00 PM - 6:00 PM", level: "BEG", course: "Junior Belt Testing Preparation", coach: "Sensei Priya", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
    { id: "f3", time: "7:00 PM - 8:30 PM", level: "INT", course: "Dojo Friday Kumite Night", coach: "Sensei Arjun", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  ],
  Saturday: [
    { id: "s1", time: "8:00 AM - 9:30 AM", level: "BEG", course: "All-Ages Family Karate Morning", coach: "Sensei Priya", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
    { id: "s2", time: "10:00 AM - 11:30 AM", level: "INT", course: "Tournament Team Squad Training", coach: "Sensei Dev", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { id: "s3", time: "3:30 PM - 5:00 PM", level: "ADV", course: "Traditional Weapons & Dan Clinique", coach: "Sensei Rohit", color: "bg-red-500/10 text-red-500 border-red-500/20" },
  ],
  Sunday: [
    { id: "su1", time: "7:00 AM - 8:30 AM", level: "INT", course: "Outdoor Sunrise Conditioning & Meditation", coach: "Sensei Arjun", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { id: "su2", time: "9:00 AM - 10:30 AM", level: "BEG", course: "Beginner Trial Classes & Assessment", coach: "Sensei Ananya", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
    { id: "su3", time: "10:30 AM - 12:00 PM", level: "ADV", course: "Open Dojo Free Practice & Mentorship", coach: "All Senseis", color: "bg-red-500/10 text-red-500 border-red-500/20" },
  ],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Menon",
    rank: "Black Belt (1st Dan)",
    quote: "The discipline and focus my son has learned here is remarkable. Patient but firm coaching that translates directly into everyday life achievements. Highly recommended for children and teens alike.",
    avatar: "/images/DYQhs61tNGS6jMT9LzSMeJOD5XU.jpg",
  },
  {
    name: "Rajesh Kannan",
    rank: "Adult Student (Brown Belt)",
    quote: "Starting karate in my late 30s felt intimidating, but Sensei Arjun and the team welcomed me warmly. The conditioning cured my chronic back stiffness and restored my physical confidence completely.",
    avatar: "/images/LB60D7AtKhI6kRr8wytHSIuc1A.jpg",
  },
  {
    name: "Kavita Rao",
    rank: "National Kumite Competitor",
    quote: "Shinken Karate is not an ordinary sports club. It is a genuine Japanese dojo where the values of Bushido are lived every single training session. The tournament coaching is unmatched.",
    avatar: "/images/4TjOpPmdhkMc956m9RgGgrII0.jpg",
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: "little-ninjas",
    title: "Little Ninjas Camp",
    age: "Age 4-6",
    description: "A structured introduction to karate for young beginners. Emphasizing basic motor movements, balance, respect, and foundational martial arts training.",
    skills: ["Motor skills", "Respect & listening", "Basic stances", "Fun & engaging games"],
    image: "/images/vl9oorbcpz13ti7pqtncNBujscY.jpeg",
  },
  {
    id: "youth-karate",
    title: "Youth Karate Camp",
    age: "Age 7-12",
    description: "For young students ready to move from basic training into structured, disciplined development. Excellent for students who want deep technical knowledge.",
    skills: ["Self-defense", "Bully prevention", "Coordination", "Belt progression"],
    image: "/images/BYF3npOdc0o4ncxw9sJAcIjzzkE.jpeg",
  },
  {
    id: "adult-beginner",
    title: "Adult Beginner Camp",
    age: "Age 13+",
    description: "A balanced style combining hard physical techniques and soft breathing methods. Ideal for those seeking graceful yet effective self-defense applications.",
    skills: ["Mental toughness", "High-intensity fitness", "Stress relief", "Practical self-defense"],
    image: "/images/TfrfwKVpYjQDZcZORuHTxf70VwQ.jpeg",
  },
  {
    id: "advanced-training",
    title: "Advanced Training Camp",
    age: "Age 16+",
    description: "Known as \x27The Ultimate Truth,\x27 full-contact karate focused on physical and mental toughness. Expect rigorous conditioning and intense sparring.",
    skills: ["Advanced Kata", "Kumite (Sparring)", "Weapons training", "Instructor prep"],
    image: "/images/vpeNvbfuhNemumVdYQImRJe4aEw.jpeg",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "shiro-obi",
    name: "SHIRO OBI - CORE",
    subtitle: "STARTER",
    monthlyPrice: 999,
    yearlyPrice: 829,
    features: [
      "2 classes per week",
      "Access to beginner programs",
      "Free uniform (gi) included",
      "Belt testing eligibility",
      "Locker room access",
      "Monthly progress reports",
    ],
  },
  {
    id: "kura-obi",
    name: "KURA OBI - BLACK BELT",
    subtitle: "PRO",
    monthlyPrice: 1799,
    yearlyPrice: 1499,
    popular: true,
    features: [
      "Unlimited classes per week",
      "Access to all programs",
      "Free uniform (gi) & equipment",
      "Priority belt testing",
      "1-on-1 coaching session/month",
      "Competition training access",
      "Nutrition consultation",
      "Family discount (10% off)",
    ],
  },
  {
    id: "tatsujin",
    name: "TATSUJIN - MASTER",
    subtitle: "ELITE",
    monthlyPrice: 2999,
    yearlyPrice: 2489,
    bestValue: true,
    features: [
      "Unlimited classes + private lessons",
      "All programs + weapons training",
      "Premium uniform & full gear set",
      "Fast-track belt progression",
      "Weekly 1-on-1 coaching",
      "Personal training plan",
      "Guest passes for friends/family",
      "Exclusive Master Seminars access",
    ],
  },
];

export const MILESTONES: Milestone[] = [
  { year: "2010", title: "The Journey Begins", description: "Sensei Arjun returns from intensive training in Tokyo and Okinawa to open Shinken\x27s first 800 sq.ft dojo in Bengaluru with 12 inaugural students." },
  { year: "2012", title: "First National Medal", description: "Shinken Karate enters the All-India Karate Championship, taking home its first Gold in Men\x27s Senior Kumite and 2 Silver medals." },
  { year: "2014", title: "100 Students Milestone", description: "Dojo community surpasses 100 active students, launching our dedicated Little Ninjas youth development curriculum." },
  { year: "2016", title: "New Dojo Expansion", description: "Relocated to our flagship Jayanagar training dojo featuring 3,500 sq.ft of traditional hardwood flooring and modern safety matting." },
  { year: "2018", title: "International Recognition", description: "Affiliated officially with the Japan Karate Association (JKA) and World Karate Federation (WKF) for direct global Dan certification." },
  { year: "2020", title: "Virtual Training Initiative", description: "Maintained unbroken student training throughout global lockdowns via daily live-streamed solo kata and conditioning sessions." },
  { year: "2022", title: "500+ Students Strong", description: "Celebrated teaching over 500 active weekly practitioners across youth, adult amateur, and elite competition brackets." },
  { year: "2024", title: "First Black Belt Graduates", description: "Proudly graduated 14 homegrown students to Shodan (1st Dan) certified directly under Tokyo examiner supervision." },
  { year: "2026", title: "Continuing the Legacy", description: "Expanding regional competitive workshops, Kobudo weapons masters, and free community women\x27s self-defense initiatives." },
];

export const SENSEIS: Sensei[] = [
  {
    id: "arjun",
    name: "Sensei Arjun Krishnan",
    role: "Founder & Chief Instructor",
    rank: "6th Dan Black Belt",
    specialty: "Shotokan & Kyokushin",
    experience: "22 years",
    bio: "Founder & Chief Instructor. Trained in Tokyo and Okinawa. National Champion (2012, 2014). Dedicated to preserving authentic Japanese karate while adapting functional conditioning for students of all ages.",
    image: "/images/DYQhs61tNGS6jMT9LzSMeJOD5XU.jpg",
  },
  {
    id: "priya",
    name: "Sensei Priya Sharma",
    role: "Head of Children\x27s Programs",
    rank: "3rd Dan Black Belt",
    specialty: "Shito-Ryu & Kids Karate",
    experience: "14 years",
    bio: "Certified child development specialist blending traditional dojo discipline with engaging, positive age-appropriate drills. Expert in making martial arts approachable for young learners.",
    image: "/images/LB60D7AtKhI6kRr8wytHSIuc1A.jpg",
  },
  {
    id: "vikram",
    name: "Sensei Vikram Varma",
    role: "Head of Women\x27s Programs",
    rank: "4th Dan Black Belt",
    specialty: "Goju-Ryu & Self-Defense",
    experience: "12 years",
    bio: "International kata competitor with 15+ medals. Certified self-defense instructor specializing in practical biomechanics and rapid threat de-escalation for real-world scenarios.",
    image: "/images/4TjOpPmdhkMc956m9RgGgrII0.jpg",
  },
  {
    id: "rohit",
    name: "Sensei Rohit Patel",
    role: "Weapons Instructor",
    rank: "2nd Dan Black Belt",
    specialty: "Wado-Ryu & Kobudo",
    experience: "9 years",
    bio: "Weapons and advanced traditional techniques instructor. Trained in traditional Okinawan Kobudo, specializing in the Bo staff, Sai, and Tonfa for black belt candidates.",
    image: "/images/w5KfuAFlqH2SPtVlVpQ78SehQ.jpg",
  },
  {
    id: "dev",
    name: "Sensei Dev Malhotra",
    role: "Tournament Coach",
    rank: "5th Dan Black Belt",
    specialty: "Kyokushin & Full-Contact Kumite",
    experience: "16 years",
    bio: "Former national kumite champion known for developing fighters with exceptional stamina, ring craft, explosive counter-strikes, and mental fortitude under pressure.",
    image: "/images/xHEySwUn1mTNgwPBtEkvNp3pUc.png",
  },
  {
    id: "ananya",
    name: "Sensei Ananya Deshmukh",
    role: "Kata Specialist & Youth Coach",
    rank: "3rd Dan Black Belt",
    specialty: "Kata Specialist & Youth Training",
    experience: "6 years",
    bio: "Kata champion with multiple state and national podium finishes. Focuses on precision, form, breath dynamics, and the deep philosophical essence of traditional kata.",
    image: "/images/a0anleRFjnk1SwGUcD2cHLzfeJU.png",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What age can children start karate training?",
    answer: "Our Little Ninjas program is specifically designed for children ages 4 to 6. It focuses on developing basic motor skills, focus, and discipline in a fun, structured environment. For younger children, readiness depends on their ability to follow simple instructions.",
  },
  {
    question: "Do I need to buy a karate uniform (gi) immediately?",
    answer: "No, you don\x27t need a uniform right away. For your first few classes or trial period, comfortable workout clothes (like sweatpants and a t-shirt) are perfect. Once you decide to enroll officially, we will help you get fitted for your first gi.",
  },
  {
    question: "I\x27ve never done martial arts before. Is karate right for beginners?",
    answer: "Absolutely! Our adult and youth beginner classes are tailored for individuals with zero prior experience. We start with the absolute fundamentals—stances, basic strikes, and blocks—and progress at a pace that is challenging but achievable for everyone.",
  },
  {
    question: "How does the belt ranking system work?",
    answer: "The belt system is a structured path of progression. Students start as White Belts and learn specific curriculum requirements for each rank. Belt tests (gradings) are held periodically. Progress depends on consistent attendance, effort, and mastery of the required techniques.",
  },
  {
    question: "Do you prepare students for competitions?",
    answer: "Yes. While our core focus is on personal development and self-defense, we do have a competition team for students interested in sport karate (Kata and Kumite). Competition training is optional and typically available for intermediate and advanced students.",
  },
  {
    question: "How long are classes, and how often should I attend?",
    answer: "Classes typically run for 45 to 60 minutes depending on the age group and program. For optimal progress, we recommend attending 2 to 3 classes per week. This ensures consistent practice and muscle memory development.",
  },
  {
    question: "What does the free trial class include?",
    answer: "Your trial class is a comprehensive 45-minute guided session where you join a live beginner group, learn the basic dojo etiquette (Rei), practice fundamental stances and punches, and receive a personal evaluation from our Senior Sensei.",
  },
  {
    question: "Is sparring mandatory? I\x27m worried about getting injured.",
    answer: "Light, controlled sparring (Kumite) is introduced gradually only as students reach intermediate ranks (usually Orange or Green belt). It is heavily supervised and requires protective gear. Safety is our top priority, and we focus on control and technique over power.",
  },
];
