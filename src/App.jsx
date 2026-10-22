import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Cloud,
  Code2,
  FileText,
  Database,
  GraduationCap,
  Check,
  Copy,
  Mail,
  MapPin,
  Menu,
  RefreshCw,
  Link2,
  Server,
  ShieldCheck,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiLeetcode } from "react-icons/si";
import prescriptoImg from "./assets/Prescripto.webp";
import quickchatImg from "./assets/quickchat.webp";
import chefaiImg from "./assets/chefAi.webp";
import thefilmsImg from "./assets/thefilms.webp";
import tomatoImg from "./assets/tomato.webp";
// import mindcureImg from "./assets/mindcure.png"; // re-enable with the Mindcure project
import cryptoplaceImg from "./assets/cryptoplace.webp";
import supportaiImg from "./assets/supportaiImg.webp";
import avatarImg from "./assets/aditya-avatar.webp";

const profile = {
  name: "Aditya Meena",
  title: "Software Engineer",
  location: "Jaipur, Rajasthan",
  email: "adityameena2233@gmail.com",
  github: "https://github.com/imadityameena",
  linkedin: "https://www.linkedin.com/in/aditya-meena-4a0217329/",
  leetcode: "https://leetcode.com/u/imadityameena/",
  codolio: "https://codolio.com/profile/huppyyyyy",
  resume:
    "https://drive.google.com/file/d/1QeEDkAqHeIunOkBjbTqN_HN8sxsOWA4B/view?usp=sharing",
  summary:
    "Full-stack developer with production internship experience building MERN and PostgreSQL applications, AI integrations, REST APIs, and polished web systems.",
};

const stats = [
  ["9+", "months production internship"],
  ["5+", "full-stack apps shipped"],
  ["500+", "DSA problems solved"],
  ["950+", "GitHub contributions in 2025"],
];

const navItems = ["Work", "Case study", "Projects", "Skills", "Achievements"];

const skills = [
  {
    icon: Code2,
    label: "Languages",
    items: ["C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    icon: Sparkles,
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    icon: Server,
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Microservices", "MVC", "Flask"],
  },
  {
    icon: Database,
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Mongoose", "Indexing & query tuning"],
  },
  {
    icon: BrainCircuit,
    label: "AI / LLMs",
    items: ["RAG", "LangChain", "LangGraph", "OpenAI API", "Gemini AI"],
  },
  {
    icon: Cloud,
    label: "Cloud & Tools",
    items: ["Git", "GitHub", "Docker", "AWS", "CI/CD", "Cloudinary"],
  },
];

const coreCS = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "DBMS",
  "Computer Networks",
  "Distributed Systems",
];

const tickerItems = [
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "LangChain",
  "Gemini AI",
  "OpenAI API",
  "Docker",
  "Competitive Programming",
  "System Design",
];

const projects = [
  {
    name: "SupportAI",
    year: "2026",
    type: "Multi-tenant AI Customer Support",
    image: supportaiImg,
    stack:
      "Next.js, React, TypeScript, MongoDB, Mongoose, Gemini, Scalekit, Tailwind",
    impact:
      "Turns any website into an AI-staffed support desk via an embeddable widget — deployed with a single script tag, no code required.",
    points: [
      "Multi-tenant architecture keeps every business's FAQs, policies, and chatbot config fully isolated",
      "Knowledge-grounded prompting keeps Gemini answering only from verified business data, no hallucinated policies",
      "Scalekit-authenticated dashboard with token-based sessions and route protection",
      "CORS-enabled chat API with cached MongoDB connections and automatic retry on AI failures",
    ],
    github: "https://github.com/imadityameena/SupportAI",
    live: "https://support-ai-self.vercel.app/",
  },
  {
    name: "Prescripto",
    year: "2025",
    type: "Doctor Appointment System",
    image: prescriptoImg,
    stack: "React, Node, Express, MongoDB, JWT, Stripe, Razorpay, Tailwind",
    impact:
      "3-role healthcare platform with conflict-free bookings and dual payment gateways.",
    points: [
      "JWT authentication with role-based access control across patient, doctor, and admin dashboards",
      "Server-side slot validation and availability checks prevent double-booking",
      "Stripe and Razorpay checkout with server-side payment verification and failure handling",
    ],
    github: "https://github.com/imadityameena/Prescripto_Hospital_app",
    live: "https://prescripto-hospital-app.vercel.app/",
  },
  {
    name: "ChefAI",
    year: "2026",
    type: "AI-Powered Meal & Pantry Planner",
    image: chefaiImg,
    stack: "React, Node, Express, PostgreSQL, Gemini AI, JWT",
    impact:
      "Context-aware recipe generation from real pantry inventory and dietary preferences.",
    points: [
      "Gemini generates meal plans from pantry inventory and individual dietary preferences",
      "MVC REST API with JWT authentication separates secure application concerns",
      "Automated shopping lists turn selected recipes into an actionable grocery plan",
    ],
    github: "https://github.com/imadityameena/chefai",
    live: "https://chef-ai-xqr8.vercel.app/",
  },
  {
    name: "The Films",
    year: "2024",
    type: "Movie Discovery Platform",
    scope: "Frontend",
    image: thefilmsImg,
    stack: "React, Tailwind CSS, Redux, TMDB API",
    impact: "Makes movie discovery easier with personalized recommendations.",
    points: [
      "Redux state management keeps movie discovery, filters, and watch flows predictable",
      "TMDB integration provides current movie details, recommendations, and trailers",
      "Caching and request batching reduce duplicate calls while handling API rate limits",
    ],
    github: "https://github.com/imadityameena/Movie-App",
    live: "https://movie-app-lac-psi.vercel.app/",
  },
  {
    name: "Tomato",
    year: "2024",
    type: "Food Ordering Platform",
    scope: "Frontend",
    image: tomatoImg,
    stack: "Next.js, React, Tailwind CSS, Figma",
    impact: "Streamlines food ordering with an intuitive checkout process.",
    points: [
      "Translated complete Figma flows into a responsive, production-ready ordering interface",
      "Persistent cart state keeps selected items available as customers browse the menu",
      "Pricing logic applies discounts consistently across cart and checkout totals",
    ],
    github: "https://github.com/imadityameena/Food-delivery",
    live: "https://food-delivery-project-63r5.vercel.app/",
  },
  // {
  //   name: "Mindcure",
  //   year: "2024",
  //   type: "Mental Health Resources",
  //   scope: "Frontend",
  //   image: mindcureImg, // also uncomment the import above
  //   stack: "React, Next.js, Tailwind CSS, Responsive UI",
  //   impact: "Provides accessible mental health resources for students.",
  //   points: [
  //     "Designed and built complete interface with Next.js",
  //     "Created an empathetic, non-clinical UI through user research",
  //     "Ensured privacy-first design for sensitive user data",
  //   ],
  //   github: "https://github.com/imadityameena/Mental-Health-app",
  //   live: "https://mental-health-app-nu-three.vercel.app/",
  // },
  {
    name: "Cryptoplace",
    year: "2024",
    type: "Crypto Market Tracker",
    scope: "Frontend",
    image: cryptoplaceImg,
    stack: "React, CoinGecko API, React Router, Google Charts",
    impact: "Simplifies crypto market tracking with real-time price updates.",
    points: [
      "CoinGecko integration powers current market data and interactive price charts",
      "Debounced search makes it fast to find assets across more than 1,000 cryptocurrencies",
      "React.memo and controlled updates reduce unnecessary renders during frequent price changes",
    ],
    github: "https://github.com/imadityameena/cryptoplace",
    live: "https://cryptoplace-dusky.vercel.app/",
  },
];

const buildingProjects = [
  {
    name: "QuickChat",
    status: "Under maintenance",
    year: "2024",
    type: "Real-time Messaging App",
    image: quickchatImg,
    stack: "React, Socket.io, Node.js, Express",
    impact: "Eliminates delay in team communication with instant messaging.",
    points: [
      "Socket.io WebSocket architecture delivers messages instantly across connected clients",
      "Real-time message synchronization keeps conversations consistent without refreshes",
      "Queueing and retry logic preserves message order during unstable network conditions",
    ],
    github: "https://github.com/imadityameena/QuickChat-A-chatting-app",
    live: "https://quick-chat-azure.vercel.app/login",
  },
];

const experiences = [
  {
    company: "Draviya",
    website: "https://draviya.com",
    role: "SWE Intern",
    location: "India",
    dates: "Jan 2026 - Mar 2026",
    points: [
      "Architected a high-throughput FinTech exchange with a hybrid ledger system using PostgreSQL and on-chain logic.",
      "Developed event-driven settlement logic to orchestrate atomic, real-time data flow between the ledger and PostgreSQL.",
      "Established KYC/AML compliance pipelines and secure authentication flows for the initial MVP release.",
    ],
  },
  {
    company: "Coderoofs IT Solutions",
    role: "SWE Intern",
    location: "Remote",
    dates: "May 2025 - Nov 2025",
    points: [
      "Independently developed 3 full-stack MERN applications and contributed to 2 collaborative production projects.",
      "Developed a file conversion platform supporting 50+ formats; resolved a production outage by renewing SSL/TLS certificates and fixing Cloudflare configuration.",
      "Engineered a tutoring platform with booking, assignments, payments, and admin tools; added pagination that cut API response time by ~2 seconds.",
      "Optimized MongoDB queries and indexed frequently accessed fields, reducing database query latency by ~35%.",
      "Standardized the dark-theme UI of an AI-powered clinic system for a consistent interface.",
    ],
  },
];

// Draviya case study. Kept to architecture level on purpose: the company's
// product, pricing, and legal design are under NDA and must not appear here.
const draviyaFlow = [
  {
    icon: ShieldCheck,
    title: "Identity gate",
    body: "Auth + KYC/AML checks run before an account can trade.",
  },
  {
    icon: Server,
    title: "Trade API",
    body: "Validates the order and the user's available balance.",
  },
  {
    icon: Database,
    title: "PostgreSQL ledger",
    body: "Balance change and a pending settlement event are written in one transaction.",
  },
  {
    icon: RefreshCw,
    title: "Settlement worker",
    body: "Picks up pending events and submits them on-chain.",
  },
  {
    icon: Link2,
    title: "On-chain logic",
    body: "Final record of ownership; confirmation is written back to the ledger.",
  },
];

const draviyaDecisions = [
  {
    title: "Ledger first, chain second",
    body: "Users see balances update instantly from PostgreSQL, while the chain settles in the background. The app stays fast even when the network is slow.",
  },
  {
    title: "One transaction, no drift",
    body: "The balance update and its settlement event commit together. If either fails, both roll back, so the ledger never shows a trade that was never queued for settlement.",
  },
  {
    title: "Events make retries safe",
    body: "Settlement runs off events, not inline in the request. A failed on-chain call is retried from the pending event instead of being lost or applied twice.",
  },
  {
    title: "Compliance at the door",
    body: "KYC/AML runs before trading is unlocked, so every ledger entry belongs to a verified identity from day one.",
  },
];

const achievements = [
  "Peak ratings: 1829 on LeetCode and 1601 (3-star) on CodeChef",
  "Ranked 477th of 19K+ participants in CodeChef Starters 238",
  "500+ DSA problems solved across platforms",
  "950+ GitHub contributions in 2025",
  "Top 3 in Ideathon 2024, IIIT Ranchi",
  "Coordinator, Software Development Wing, IIIT Ranchi",
];

function useMouseGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  useEffect(() => {
    const onMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return {
    x: useSpring(x, { stiffness: 170, damping: 28, mass: 0.4 }),
    y: useSpring(y, { stiffness: 170, damping: 28, mass: 0.4 }),
  };
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MagneticLink({ href, children, className = "", ...props }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setOffset({
      x: (event.clientX - rect.left - rect.width / 2) * 0.18,
      y: (event.clientY - rect.top - rect.height / 2) * 0.18,
    });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      {...props}
      style={{ x: offset.x, y: offset.y }}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

function ExperienceTimeline() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 78%", "end 30%"],
  });
  const ropeProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });

  return (
    <div ref={timelineRef} className="experience-list">
      <div className="experience-rope" aria-hidden="true">
        <motion.div className="experience-rope-fill" style={{ scaleY: ropeProgress }} />
      </div>
      {experiences.map((experience, experienceIndex) => (
        <article className="timeline-card" key={experience.company}>
          <span className="timeline-knot" aria-hidden="true" />
          <div className="timeline-head">
            <div>
              <h3>
                {experience.website ? (
                  <a href={experience.website} target="_blank" rel="noreferrer">
                    {experience.company} <ArrowUpRight size={18} />
                  </a>
                ) : (
                  experience.company
                )}
              </h3>
              <p>{experience.role}, {experience.location}</p>
            </div>
            <span>
              <CalendarDays size={15} /> {experience.dates}
            </span>
          </div>
          <div className="timeline-list">
            {experience.points.map((item, index) => (
              <motion.div
                key={item}
                className="timeline-item"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (experienceIndex * 0.12) + (index * 0.07) }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

// Copies the email so it still works on machines with no mail app set up.
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}

function useCopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    if (!(await copyText(profile.email))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  return { copied, copy };
}

function App() {
  const { copied, copy: copyEmail } = useCopyEmail();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 24 });
  const glow = useMouseGlow();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -90]);

  const contactLinks = useMemo(
    () => [
      { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
      { href: profile.github, label: "GitHub", icon: SiGithub, external: true },
      {
        href: profile.linkedin,
        label: "LinkedIn",
        icon: FaLinkedin,
        external: true,
      },
      {
        href: profile.leetcode,
        label: "LeetCode",
        icon: SiLeetcode,
        external: true,
      },
      { href: profile.codolio, label: "Codolio", icon: Code2, external: true },
    ],
    [],
  );

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.div className="cursor-glow" style={{ x: glow.x, y: glow.y }} />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Aditya Meena home">
          AM
        </a>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <section id="top" className="hero">
        <motion.div className="hero-copy" style={{ y: heroY }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <MapPin size={15} /> {profile.location}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08 }}
          >
            {profile.name}
            <span>{profile.title}</span>
          </motion.h1>
          <motion.p
            className="hero-summary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18 }}
          >
            {profile.summary}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
          >
            <MagneticLink href="#projects" className="primary-cta">
              View work <ArrowUpRight size={18} />
            </MagneticLink>
            <MagneticLink
              href={profile.resume}
              className="secondary-cta"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={17} /> Resume
            </MagneticLink>
            {contactLinks.map(({ href, label, icon: Icon, external }) => (
              <MagneticLink
                key={label}
                href={href}
                className="icon-link"
                aria-label={label}
                title={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                onClick={label === "Email" ? copyEmail : undefined}
              >
                <Icon size={18} />
              </MagneticLink>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="panel-orbit" />
          <div className="terminal-card">
            <div className="terminal-top">
              <span />
              <span />
              <span />
            </div>
            <p className="terminal-line">$ status --availability</p>
            <div className="profile-row">
              <img
                className="avatar"
                src={avatarImg}
                alt="Aditya Meena"
                width="130"
                height="201"
              />
              <div>
                <p className="terminal-title">Open to SWE roles</p>
                <p className="terminal-sub">
                  <span className="pulse" aria-hidden="true" /> B.Tech CSE, IIIT Ranchi · Class&nbsp;of&nbsp;2027
                </p>
              </div>
            </div>
            <div className="terminal-grid">
              {stats.map(([number, label]) => (
                <div key={label}>
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="ticker" aria-label="Technical focus">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </motion.div>
      </section>

      <section id="work" className="section experience-section">
        <Reveal className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2>Production code at a FinTech startup and an IT agency.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ExperienceTimeline />
        </Reveal>
      </section>

      <section id="case-study" className="section case-study">
        <Reveal className="section-heading">
          <p className="section-kicker">Case study · Draviya</p>
          <h2>Keeping a fast ledger and a blockchain in agreement.</h2>
          <p className="case-lede">
            At Draviya I worked on the core of a FinTech exchange. Trades had to
            feel instant to users but also be settled on-chain. I built the
            hybrid setup that makes both true: PostgreSQL is the fast ledger,
            on-chain logic is the final record, and an event-driven settlement
            layer keeps them in sync.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flow-card">
          <p className="flow-caption">How a trade moves through the system</p>
          <ol className="flow">
            {draviyaFlow.map(({ icon: Icon, title, body }, index) => (
              <li key={title} className="flow-step">
                <span className="flow-num">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={20} />
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
          <div className="flow-loop" aria-hidden="true">
            <span>confirmed on-chain → ledger entry marked settled</span>
          </div>
          <div className="flow-legend">
            <span><i className="dot dot-sync" /> Synchronous, in the user&apos;s request</span>
            <span><i className="dot dot-async" /> Asynchronous, event-driven</span>
          </div>
        </Reveal>

        <div className="decision-grid">
          {draviyaDecisions.map(({ title, body }, index) => (
            <Reveal key={title} delay={index * 0.08} className="decision-card">
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
        <p className="case-note">
          Product and business details are confidential; this covers only the
          engineering pattern.
        </p>
      </section>

      <section id="projects" className="section">
        <Reveal className="section-heading">
          <p className="section-kicker">Selected projects</p>
          <h2>Interfaces with backends that actually do the hard work.</h2>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 0.12}
              className="project-card"
            >
              <img
                className="project-image"
                src={project.image}
                loading="lazy"
                decoding="async"
                alt={`${project.name} project preview`}
              />
              <div className="project-meta">
                <span>{project.year}</span>
                <span>{project.type}</span>
                {project.scope && <span className="scope-chip">{project.scope}</span>}
              </div>
              <h3>{project.name}</h3>
              <p className="project-impact">{project.impact}</p>
              <p className="stack">{project.stack}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>
                    <BadgeCheck size={16} /> {point}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <SiGithub size={16} /> GitHub <ArrowUpRight size={15} />
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live demo <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section building-section">
        <Reveal className="section-heading">
          <p className="section-kicker">Active projects</p>
          <h2>Currently building and under maintenance.</h2>
        </Reveal>
        <div className="project-grid">
          {buildingProjects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 0.12}
              className="project-card building-card"
            >
              <div className={`project-status ${project.status === "Under maintenance" ? "maintenance" : ""}`}>
                <span /> {project.status}
              </div>
              <img
                className="project-image"
                src={project.image}
                loading="lazy"
                decoding="async"
                alt={`${project.name} project preview`}
              />
              <div className="project-meta">
                <span>{project.year}</span>
                <span>{project.type}</span>
                {project.scope && <span className="scope-chip">{project.scope}</span>}
              </div>
              <h3>{project.name}</h3>
              <p className="project-impact">{project.impact}</p>
              <p className="stack">{project.stack}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>
                    <BadgeCheck size={16} /> {point}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <SiGithub size={16} /> GitHub <ArrowUpRight size={15} />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <Reveal className="section-heading">
          <p className="section-kicker">Stack</p>
          <h2>A practical toolkit for full-stack product engineering.</h2>
        </Reveal>
        <div className="skill-grid">
          {skills.map(({ icon: Icon, label, items }, index) => (
            <Reveal key={label} delay={index * 0.08} className="skill-card">
              <Icon size={24} />
              <h3>{label}</h3>
              <div>
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="core-cs">
          <span className="core-cs-label">Core CS</span>
          {coreCS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </Reveal>
      </section>

      <section id="achievements" className="section proof-section">
        <Reveal className="education-card">
          <GraduationCap size={24} />
          <p className="section-kicker">Education</p>
          <h2>Indian Institute of Information Technology Ranchi</h2>
          <p>
            B.Tech in Computer Science and Engineering, 2023 - 2027 |{" "}
            <strong>CGPA: 7.52 /10</strong>
          </p>
        </Reveal>
        <Reveal delay={0.1} className="proof-card">
          <Trophy size={24} />
          <p className="section-kicker">Achievements &amp; Responsibilities</p>
          {achievements.map((item) => (
            <div key={item} className="proof-row">
              <BrainCircuit size={18} />
              <span>{item}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <footer className="footer">
        <div>
          <p className="section-kicker">Available for</p>
          <h2>Full-time SWE roles (2027), internships, and ambitious product builds.</h2>
        </div>
        <div className="footer-actions">
          <MagneticLink
            href={`mailto:${profile.email}?subject=Let%27s%20work%20together`}
            className="primary-cta"
          >
            Let&apos;s talk <ArrowUpRight size={18} />
          </MagneticLink>
          <button type="button" className="secondary-cta copy-email" onClick={copyEmail}>
            {copied ? <Check size={17} /> : <Copy size={17} />}
            {copied ? "Copied!" : profile.email}
          </button>
        </div>
      </footer>

      <div className={copied ? "toast show" : "toast"} role="status" aria-live="polite">
        {copied && (
          <>
            <Check size={16} /> Email copied: {profile.email}
          </>
        )}
      </div>
    </main>
  );
}

export default App;
