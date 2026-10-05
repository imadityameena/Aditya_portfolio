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
  Code2,
  FileText,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Server,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiLeetcode } from "react-icons/si";
import prescriptoImg from "./assets/Prescripto.png";
import quickchatImg from "./assets/quickchat.png";
import chefaiImg from "./assets/chefAi.png";
import thefilmsImg from "./assets/thefilms.png";
import tomatoImg from "./assets/tomato.png";
import mindcureImg from "./assets/mindcure.png";
import cryptoplaceImg from "./assets/cryptoplace.png";
import supportaiImg from "./assets/supportaiImg.png";

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
    "https://drive.google.com/file/d/1fakrRZxv6Eziaza4SXxwUHpYqMa48jU_/view?usp=drive_link",
  summary:
    "Full-stack developer with production internship experience building MERN and PostgreSQL applications, AI integrations, REST APIs, and polished web systems.",
};

const stats = [
  ["6+", "months production internship"],
  ["5+", "full-stack apps shipped"],
  ["500+", "DSA problems solved"],
  ["950+", "GitHub contributions in 2025"],
];

const navItems = ["Work", "Projects", "Skills", "Achievements"];

const skills = [
  {
    icon: Code2,
    label: "Languages",
    items: ["C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    icon: Sparkles,
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "MVC"],
  },
  {
    icon: Database,
    label: "Data + AI",
    items: ["MongoDB", "PostgreSQL", "OpenAI API", "Gemini AI"],
  },
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
    stack: "React, Node, Express, MongoDB, JWT, Razorpay, Tailwind",
    impact:
      "3-role healthcare platform with conflict-free bookings and dual payment gateways.",
    points: [
      "Separate patient, doctor, and admin workflows with role-aware dashboards",
      "Validated appointment slots prevent conflicts and keep availability reliable",
      "Stripe and Razorpay payment flows support secure, flexible checkout",
    ],
    github: "https://github.com/imadityameena/Prescripto_Hospital_app",
    live: "https://prescripto-hospital-app.vercel.app/",
  },
  {
    name: "QuickChat",
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
    type: "Frontend Only - Movie Discovery Platform",
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
    type: "Frontend Only - Food Ordering Platform",
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
  //   type: "Frontend Only - Mental Health Resources",
  //   image: mindcureImg,
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
    type: "Frontend Only - Crypto Market Tracker",
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

const work = [
  "Independently developed 3 full-stack MERN applications and contributed to 2 collaborative production projects.",
  "Built a Smart Compliance system processing 50+ CSV records to detect license expiry and violations.",
  "Developed a file conversion platform supporting 50+ formats and resolved SSL/TLS plus Cloudflare production issues.",
  "Engineered a tutoring platform with bookings, assignments, payments, and an admin panel.",
  "Optimized an AI-powered clinic system and implemented 15+ UI fixes across a community platform.",
];

const achievements = [
  "Peak ratings: 1829 LeetCode and 1601(3-star) CodeChef",
  "Top 3 in Ideathon 2024, IIIT Ranchi",
  "Coordinator, Software Development Wing, IIIT Ranchi",
  "950+ github contributions in 2025",
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

function App() {
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
      { href: profile.resume, label: "Resume", icon: FileText, external: true },
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
              href={`#${item.toLowerCase()}`}
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
            {contactLinks.map(({ href, label, icon: Icon, external }) => (
              <MagneticLink
                key={label}
                href={href}
                className="icon-link"
                aria-label={label}
                title={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
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
            <p className="terminal-line">$ build --portfolio</p>
            <p className="terminal-title">Software Engineer</p>
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
          {[
            "React",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "REST APIs",
            "Gemini AI",
            "OpenAI API",
            "Competitive Programming",
            "System Design",
          ]
            .concat([
              "React",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "REST APIs",
              "Gemini AI",
              "OpenAI API",
              "Competitive Programming",
              "System Design",
            ])
            .map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
        </motion.div>
      </section>

      <section id="work" className="section two-column">
        <Reveal>
          <p className="section-kicker">Experience</p>
          <h2>
            Built production systems, fixed real outages, and shipped fast.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="timeline-card">
          <div className="timeline-head">
            <div>
              <h3>Coderoofs IT Solutions</h3>
              <p>SWE Intern, Remote</p>
            </div>
            <span>
              <CalendarDays size={15} /> May 2025 - Nov 2025
            </span>
          </div>
          <div className="timeline-list">
            {work.map((item, index) => (
              <motion.div
                key={item}
                className="timeline-item"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
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
                alt={`${project.name} project preview`}
              />
              <div className="project-meta">
                <span>{project.year}</span>
                <span>{project.type}</span>
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
          <h2>Internships, full-stack work, and ambitious product builds.</h2>
        </div>
        <MagneticLink href={`mailto:${profile.email}`} className="primary-cta">
          Let&apos;s talk <ArrowUpRight size={18} />
        </MagneticLink>
      </footer>
    </main>
  );
}

export default App;
