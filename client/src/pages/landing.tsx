import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import lenaPhoto from "@assets/IMG_1571_1772688781682.png";
import {
  Shield,
  Smartphone,
  Globe,
  Monitor,
  Camera,
  Users,
  Award,
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Terminal,
  Code,
  BookOpen,
  Cpu,
  Scan,
  Network,
  Crosshair,
  Zap,
  PenLine,
  Check,
  Radio,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(174 100% 42% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(174 100% 42% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}

function ScanLine() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent z-50 pointer-events-none"
      animate={{ y: ["0vh", "100vh"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/10" data-testid="navbar">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2" data-testid="link-home">
          <div className="w-7 h-7 rounded-sm border border-primary/40 flex items-center justify-center" style={{ boxShadow: "var(--glow-primary)" }}>
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <span className="font-heading font-bold text-sm tracking-widest uppercase text-foreground">
            Lena Thompson <span className="text-primary">LLC</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1 text-xs font-mono tracking-wider">
          <a href="#services" className="px-3 py-1.5 text-muted-foreground rounded-sm" data-testid="link-services">_SERVICES</a>
          <a href="#pricing" className="px-3 py-1.5 text-muted-foreground rounded-sm" data-testid="link-pricing">_PRICING</a>
          <a href="#about" className="px-3 py-1.5 text-muted-foreground rounded-sm" data-testid="link-about">_ABOUT</a>
          <a href="#credentials" className="px-3 py-1.5 text-muted-foreground rounded-sm" data-testid="link-credentials">_CREDS</a>
          <a href="#work" className="px-3 py-1.5 text-muted-foreground rounded-sm" data-testid="link-work">_WORK</a>
          <a href="#booking" className="px-3 py-1.5 text-muted-foreground rounded-sm" data-testid="link-booking">_SCHEDULE</a>
          <a href="#contact" className="px-3 py-1.5 text-muted-foreground rounded-sm" data-testid="link-contact">_CONTACT</a>
        </div>
        <Button size="sm" asChild data-testid="button-get-in-touch">
          <a href="#contact" className="font-mono text-xs tracking-wider">CONNECT</a>
        </Button>
      </div>
    </nav>
  );
}

function HeroPortrait() {
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPhoto(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-md border border-primary/30 relative" style={{ boxShadow: "var(--glow-primary)" }} data-testid="img-lena-portrait">
        <div className="absolute inset-0 rounded-md bg-card flex items-center justify-center">
          <motion.span
            className="font-heading text-5xl sm:text-6xl font-bold text-primary"
            style={{ textShadow: "0 0 30px hsl(174 100% 42% / 0.4)" }}
            animate={showPhoto ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            LT
          </motion.span>
        </div>
        <AnimatePresence>
          {showPhoto && (
            <motion.div
              className="absolute inset-0 rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Avatar className="w-full h-full rounded-md">
                <AvatarImage src={lenaPhoto} alt="Lena Thompson" className="object-cover" />
                <AvatarFallback className="text-5xl font-heading rounded-md bg-card text-primary">LT</AvatarFallback>
              </Avatar>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-sm border border-primary/20 z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] text-primary tracking-wider">VERIFIED</span>
      </div>

      <div className="absolute -bottom-3 -right-3 bg-card border border-primary/30 rounded-sm px-3 py-1.5 z-10" style={{ boxShadow: "var(--glow-primary)" }} data-testid="badge-sans-certified">
        <span className="font-mono text-xs text-primary tracking-wider font-bold">SANS_CERTIFIED</span>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-14" data-testid="section-hero">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-primary/3 rounded-full blur-[80px]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div className="order-2 md:order-1 space-y-8" variants={fadeUp}>
            <motion.div className="flex flex-wrap items-center gap-2" variants={fadeUp}>
              <Badge variant="outline" className="text-xs font-mono tracking-wider border-primary/30 text-primary">
                <Crosshair className="w-3 h-3 mr-1" />
                SEC_OPS
              </Badge>
              <Badge variant="outline" className="text-xs font-mono tracking-wider border-primary/30 text-primary">
                <Code className="w-3 h-3 mr-1" />
                DEV_OPS
              </Badge>
              <Badge variant="outline" className="text-xs font-mono tracking-wider border-primary/30 text-primary">
                <Network className="w-3 h-3 mr-1" />
                NET_SEC
              </Badge>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="font-mono text-xs text-primary/60 tracking-widest mb-3" data-testid="text-hero-prefix">
                // INITIALIZING SECURE CONNECTION...
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-foreground" data-testid="text-hero-heading">
                Securing Your<br />
                <span className="text-primary" style={{ textShadow: "0 0 40px hsl(174 100% 42% / 0.3)" }}>
                  Digital World
                </span>
              </h1>
            </motion.div>

            <motion.p className="text-base text-muted-foreground leading-relaxed max-w-md" variants={fadeUp}>
              Web & mobile app security testing, custom app development, surveillance technology, and safe online training designed for everyone — especially seniors.
            </motion.p>

            <motion.div className="flex flex-wrap items-center gap-3 pt-1" variants={fadeUp}>
              <Button size="lg" asChild data-testid="button-explore-services">
                <a href="#services" className="font-mono text-xs tracking-wider">
                  EXPLORE_SERVICES
                  <ChevronDown className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30" asChild data-testid="button-view-credentials">
                <a href="#credentials" className="font-mono text-xs tracking-wider">VIEW_CREDENTIALS</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            variants={fadeUp}
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-primary/10 rounded-md" />
              <div className="absolute -inset-8 border border-primary/5 rounded-md" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent rounded-md blur-2xl scale-110" />

              <HeroPortrait />

              <div className="absolute -top-2 -right-2 font-mono text-[9px] text-primary/30 tracking-wider">
                [01]
              </div>
              <div className="absolute -bottom-2 -left-2 font-mono text-[9px] text-primary/30 tracking-wider">
                [02]
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Shield,
    title: "Web App Security Testing",
    code: "WEB_SEC",
    description:
      "Comprehensive vulnerability assessments and penetration testing for web applications using Burp Suite and HackerOne methodologies.",
  },
  {
    icon: Smartphone,
    title: "Phone App Security Testing",
    code: "MOB_SEC",
    description:
      "Mobile application security analysis including iOS and Android platforms, identifying vulnerabilities before they become threats.",
  },
  {
    icon: Globe,
    title: "Web App Development",
    code: "WEB_DEV",
    description:
      "Custom web application design and development — from concept to deployment — built with modern frameworks and security baked in.",
  },
  {
    icon: Monitor,
    title: "Phone App Development",
    code: "MOB_DEV",
    description:
      "Native and cross-platform mobile app creation tailored to your business needs, with a security-first development approach.",
  },
  {
    icon: Camera,
    title: "Surveillance Technology",
    code: "SURV_SYS",
    description:
      "Network surveillance solutions powered by Chasing-Your-Tail-NG, an open-source platform for monitoring and security analysis.",
  },
  {
    icon: Users,
    title: "Safe & Secure Online Training",
    code: "SEC_EDU",
    description:
      "Hands-on training for seniors to navigate the digital world safely. Spot scams, protect personal data, and use technology with confidence.",
    highlight: true,
    link: "https://seniorconnect.app",
    linkLabel: "seniorconnect.app",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-24 relative" data-testid="section-services">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary/30" />
            <span className="font-mono text-xs text-primary tracking-widest">02 // SERVICES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground" data-testid="text-services-heading">
            Operational Capabilities
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-base">
            From finding vulnerabilities to building secure applications — a full spectrum of cybersecurity and development expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <Card
                className={`p-5 h-full flex flex-col gap-3 hover-elevate group ${
                  service.highlight ? "border-primary/30" : "border-primary/10"
                }`}
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center border ${
                    service.highlight
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-card border-primary/10 text-primary/70"
                  }`}>
                    <service.icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-primary/40 tracking-widest">{service.code}</span>
                </div>
                <h3 className="font-heading font-bold text-base" data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                {service.link && (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-xs font-mono tracking-wider mt-1"
                    data-testid="link-seniorconnect"
                  >
                    <Zap className="w-3 h-3" />
                    {service.linkLabel}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const highlights = [
    {
      title: "Enterprise Security Breach Discovery",
      detail: "Identified unauthorized ScreenConnect connections to a multimillion-dollar manufacturer using Shodan.io monitoring.",
      code: "BREACH_01",
    },
    {
      title: "NetWars CTF Champion",
      detail: "Completed 86/86 CTF challenges in SEC504, earning 325 of 335 possible points.",
      code: "CTF_SEC504",
    },
    {
      title: "iOS Pegasus Evaluation",
      detail: "Built a Kali VM to decrypt 100GB iOS backups, searching for Pegasus IoCs using Amnesty International's MVT tool.",
      code: "PEGASUS_01",
    },
    {
      title: "Ford Motor Co. Black Belt",
      detail: "Completed four DMAIC projects addressing measurable defects, delivering process improvements and design solutions.",
      code: "DMAIC_BB",
    },
    {
      title: "Adjunct Faculty",
      detail: "Taught automotive courses at Wayne County Community College, known for innovative teaching methods.",
      code: "EDU_FCLTY",
    },
  ];

  return (
    <section id="about" className="py-24" data-testid="section-about">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div className="space-y-6" variants={fadeUp}>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className="h-px flex-1 max-w-12 bg-primary/30" />
              <span className="font-mono text-xs text-primary tracking-widest">03 // PROFILE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground" data-testid="text-about-heading">
              Multifaceted<br />Professional
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Program Manager with 15+ years of automotive technology leadership at Ford Motor Company, now fully transitioned into cybersecurity. Experience spans threat hunting, vulnerability assessment, and incident response — backed by hands-on labs with TryHackMe, HackerOne, and Burp Suite.
              </p>
              <p>
                My approach to security is shaped by real-world problem-solving: cross-functional teams using the DMAIC framework, authored technical service bulletins, and earned a Six Sigma Black Belt at Ford. That same rigor now powers how I identify and remediate vulnerabilities.
              </p>
              <p>
                Based in a Rivertown in Northern, MI — a unique mix of technical depth and practical ingenuity. When I'm not securing networks or building apps, I'm working on my lawn tractor. Fixing things is what I do.
              </p>
            </div>

            <div className="pt-2 border-t border-primary/10">
              <p className="font-mono text-[10px] text-primary/40 tracking-widest">
                STATUS: OPERATIONAL // LOCATION: CHEBOYGAN, MI // CLEARANCE: ACTIVE
              </p>
            </div>
          </motion.div>

          <motion.div className="space-y-3" variants={fadeUp}>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <h3 className="font-heading font-bold text-base">Mission Log</h3>
              <span className="font-mono text-[10px] text-primary/40 tracking-wider">{highlights.length} ENTRIES</span>
            </div>
            {highlights.map((item, i) => (
              <Card key={i} className="p-4 hover-elevate border-primary/10 group" data-testid={`card-highlight-${i}`}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h4 className="font-heading font-semibold text-sm">{item.title}</h4>
                  <span className="font-mono text-[9px] text-primary/30 tracking-widest">{item.code}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.detail}</p>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const credentials = [
  { name: "GFACT", org: "SANS / GIAC", code: "GF" },
  { name: "GSEC", org: "SANS / GIAC", code: "GS" },
  { name: "GCIH", org: "SANS / GIAC", code: "GH" },
  { name: "Certified in Cybersecurity", org: "ISC2", code: "CC" },
  { name: "Cybersecurity Professional Certificate", org: "University of Michigan", code: "CP" },
  { name: "BAS Automotive Technology", org: "Sienna Heights University", code: "BA" },
  { name: "Six Sigma Black Belt", org: "Ford Motor Company", code: "BB" },
];

function CredentialsSection() {
  return (
    <section id="credentials" className="py-24 relative" data-testid="section-credentials">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary/30" />
            <span className="font-mono text-xs text-primary tracking-widest">04 // CREDENTIALS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground" data-testid="text-credentials-heading">
            Certifications & Intel
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-base">
            Industry-recognized certifications and continuous learning across cybersecurity and technology.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {credentials.map((cred) => (
            <motion.div key={cred.name} variants={fadeUp}>
              <Card className="p-4 hover-elevate h-full border-primary/10" data-testid={`card-credential-${cred.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="flex flex-wrap items-start gap-3">
                  <div className="w-9 h-9 rounded-sm border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-xs text-primary font-bold">{cred.code}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading font-bold text-sm">{cred.name}</h3>
                    <p className="text-muted-foreground text-xs mt-0.5 font-mono">{cred.org}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-xs text-muted-foreground mb-4 font-mono tracking-wider">
            // ACTIVE SKILL MODULES:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Threat Hunting", "Vulnerability Assessment", "Incident Response", "Penetration Testing", "Network Security", "Cloud Security", "DFIR", "Ethical Hacking"].map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs font-mono tracking-wider border-primary/20 text-primary/70">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const pricingBadgeStyles: Record<string, { bg: string; color: string }> = {
  teal:   { bg: "rgba(0,212,164,0.12)",   color: "hsl(174 100% 42%)" },
  blue:   { bg: "rgba(90,157,232,0.12)",  color: "#5a9de8" },
  purple: { bg: "rgba(155,135,232,0.12)", color: "#9b87e8" },
};

const pricingFeaturedBorder: Record<string, string> = {
  teal:   "hsl(174 100% 42%)",
  purple: "#9b87e8",
};

const pricingCategories = [
  {
    label: "Web & App Security Testing",
    code: "SEC_TESTING",
    note: "Small and mid-size business focus. No corporate jargon. Real findings, plain-English reports, and fixes you can actually act on.",
    packages: [
      {
        badge: "Starter", badgeColor: "teal",
        name: "Quick Scan", price: "$350", sub: "one-time / per site",
        featured: null,
        items: ["External surface reconnaissance", "Top 10 OWASP check (manual + tool)", "1–2 page plain-English report", "Priority fix list", "Turnaround: 5–7 business days"],
      },
      {
        badge: "Most Popular", badgeColor: "teal",
        name: "Web App Pentest", price: "$750 – $1,200", sub: "scoped by complexity",
        featured: "teal",
        items: ["Full manual OWASP Top 10 testing", "Auth, session & input fuzzing", "Burp Suite active scan", "Shodan/OSINT recon", "Detailed findings report + CVSS scores", "20-min debrief call included", "Turnaround: 10–14 business days"],
      },
      {
        badge: "Pro", badgeColor: "blue",
        name: "Ongoing Monitoring", price: "$400 / mo", sub: "3-month minimum",
        featured: null,
        items: ["Monthly vuln scan + delta report", "Shodan IP monitoring alerts", "Quarterly pentest lite", "Async Q&A support", "Perfect for post-fix peace of mind"],
      },
    ],
  },
  {
    label: "Vulnerability Assessment & Training",
    code: "VULN_TRAIN",
    note: null,
    packages: [
      {
        badge: "Assessment", badgeColor: "teal",
        name: "Network Recon + Report", price: "$500", sub: "flat rate / small business",
        featured: null,
        items: ["Exposed asset discovery via Shodan", "Open port / service fingerprinting", "CVE mapping for found services", "Actionable remediation report"],
      },
      {
        badge: "Training", badgeColor: "blue",
        name: "Security Awareness Training", price: "$150 / hr", sub: "or $500 flat / team session",
        featured: null,
        items: ["Phishing recognition & simulation", "Password hygiene + MFA setup", "Tailored to your team's risk level", "Based on real Mastercard SOC work"],
      },
    ],
  },
  {
    label: "Web Design",
    code: "WEB_DESIGN",
    note: "Clean, functional sites built for small businesses, consultants, and service providers. Fast, professional, and built to convert.",
    packages: [
      {
        badge: "Starter", badgeColor: "purple",
        name: "Landing Page", price: "$500 – $800", sub: "single page",
        featured: null,
        items: ["Custom design (no cookie-cutter templates)", "Mobile-responsive", "Contact form + basic SEO", "2 rounds of revisions", "Delivered in 2 weeks"],
      },
      {
        badge: "Most Popular", badgeColor: "purple",
        name: "Business Site", price: "$1,200 – $2,000", sub: "5–8 pages",
        featured: "purple",
        items: ["Home, About, Services, Contact + more", "Mobile-first design", "Basic CMS so you can update copy", "Google Analytics setup", "3 rounds of revisions", "Delivered in 3–4 weeks"],
      },
      {
        badge: "Add-on", badgeColor: "purple",
        name: "Security Audit Add-on", price: "+$300", sub: "on any web design project",
        featured: null,
        items: ["Security check built into the launch", "HTTPS + headers configured", "Plugin/dependency review", "Rare value: designer who also pentests"],
      },
    ],
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative border-t border-primary/10" data-testid="section-pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary/30" />
            <span className="font-mono text-xs text-primary tracking-widest">02.5 // PACKAGES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground" data-testid="text-pricing-heading">
            Services & Pricing
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-base">
            Transparent, flat-rate pricing for small and mid-size businesses. Every project starts with a free 20-minute discovery call.
          </p>
        </motion.div>

        <div className="space-y-14">
          {pricingCategories.map((category, ci) => (
            <motion.div
              key={category.code}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] text-primary/40 tracking-widest">// {category.code}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground" data-testid={`text-pricing-category-${ci}`}>{category.label}</h3>
                {category.note && (
                  <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl">{category.note}</p>
                )}
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.packages.map((pkg, pi) => (
                  <motion.div key={pkg.name} variants={fadeUp}>
                    <Card
                      className="p-5 h-full flex flex-col gap-3 hover-elevate"
                      style={pkg.featured ? {
                        borderColor: pricingFeaturedBorder[pkg.featured],
                        borderWidth: "1.5px",
                        boxShadow: `0 0 20px ${pricingFeaturedBorder[pkg.featured]}22`,
                      } : { borderColor: "hsl(174 100% 42% / 0.1)" }}
                      data-testid={`card-pkg-${ci}-${pi}`}
                    >
                      <div>
                        <span
                          className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wider"
                          style={{ background: pricingBadgeStyles[pkg.badgeColor].bg, color: pricingBadgeStyles[pkg.badgeColor].color }}
                        >
                          {pkg.badge}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-base mb-0.5">{pkg.name}</h4>
                        <div className="font-heading text-2xl font-bold text-foreground leading-tight">{pkg.price}</div>
                        <div className="font-mono text-[11px] text-muted-foreground/60 mt-0.5">{pkg.sub}</div>
                      </div>
                      <ul className="flex flex-col gap-2 flex-1 mt-1">
                        {pkg.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
                            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {ci < pricingCategories.length - 1 && (
                <div className="mt-12 h-px bg-primary/10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div
            className="rounded-sm border border-primary/10 p-5 text-sm text-muted-foreground leading-relaxed"
            style={{ background: "hsl(174 100% 42% / 0.03)" }}
            data-testid="pricing-footer-note"
          >
            <span className="text-foreground font-semibold">How to work with me:</span>{" "}
            All projects start with a free 20-minute discovery call. I work fully remote. Payment is 50% upfront, 50% on delivery. Small businesses get real attention — no outsourcing, no interns.
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <Button asChild data-testid="button-pricing-email">
              <a href="mailto:lena@lenathompsonllc.com" className="font-mono text-xs tracking-wider">
                <Mail className="w-4 h-4 mr-2" />
                EMAIL_LENA
              </a>
            </Button>
            <Button variant="outline" className="border-primary/30" asChild data-testid="button-pricing-book">
              <a href="#booking" className="font-mono text-xs tracking-wider">
                <Zap className="w-4 h-4 mr-2" />
                BOOK_FREE_CALL
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const accentColors: Record<string, string> = {
  amber: "#e8a820",
  teal: "hsl(174 100% 42%)",
  coral: "#e8785a",
  blue: "#5a9de8",
  purple: "#9b87e8",
  green: "#7ac96a",
};

const tagStyles: Record<string, { bg: string; color: string }> = {
  amber:  { bg: "rgba(232,168,32,0.1)",   color: "#e8a820" },
  teal:   { bg: "rgba(0,212,164,0.1)",    color: "hsl(174 100% 42%)" },
  coral:  { bg: "rgba(232,120,90,0.1)",   color: "#e8785a" },
  blue:   { bg: "rgba(90,157,232,0.1)",   color: "#5a9de8" },
  purple: { bg: "rgba(155,135,232,0.1)",  color: "#9b87e8" },
  green:  { bg: "rgba(122,201,106,0.1)",  color: "#7ac96a" },
};

const statusStyles: Record<string, { bg: string; color: string }> = {
  Active:   { bg: "rgba(232,168,32,0.1)",  color: "#e8a820" },
  Building: { bg: "rgba(0,212,164,0.1)",   color: "hsl(174 100% 42%)" },
  Ongoing:  { bg: "rgba(155,135,232,0.1)", color: "#9b87e8" },
  Shipped:  { bg: "rgba(122,201,106,0.1)", color: "#7ac96a" },
};

const activityLog = [
  {
    day: "Today",
    date: "Apr 27",
    year: "2026",
    title: "Rayhunter deployed — IMSI catcher activity detected",
    tags: [
      { label: "RF Security", color: "coral" },
      { label: "Shipped", color: "green" },
    ],
    detail: "Installed Rayhunter v0.10.2 on an Orbic RC400L via Kali. Old SIM triggered 3 warnings: IMSI/IMEI requested in suspicious manner, connection dropped without Auth Accept (packet 666) — behavior consistent with a Stingray/IMSI catcher. Swapped to a fresh SIM: zero warnings. Finding documented.",
  },
  {
    day: "Apr 11",
    date: "2026",
    year: "",
    title: "Tailscale Exit Node configured",
    tags: [
      { label: "Networking", color: "amber" },
      { label: "Infrastructure", color: "teal" },
    ],
    detail: "Set up an exit node for secure remote access — next step: deploy on the Raspberry Pi surveillance build.",
  },
  {
    day: "Apr 10",
    date: "2026",
    year: "",
    title: "MDP Spring Convention 2026 site launched",
    link: "https://mdp-spring-convention-2026.replit.app",
    tags: [
      { label: "Web Dev", color: "blue" },
      { label: "Shipped", color: "green" },
    ],
    detail: "Built and deployed a full convention site on Replit. Approved by the chair — live and shareable.",
  },
  {
    day: "Recent",
    date: "Apr 2026",
    year: "",
    title: "seniorconnect.app migrated to Hostinger VPS",
    tags: [
      { label: "Cloud", color: "amber" },
      { label: "Security", color: "coral" },
    ],
    detail: "Moved production app from shared hosting to a self-managed VPS. Full deployment + configuration ownership.",
  },
  {
    day: "Published",
    date: "Mar 2026",
    year: "",
    title: 'Substack: "Breaking Things on Purpose"',
    tags: [{ label: "Writing", color: "purple" }],
    detail: "First article in my security + development series. Documenting the real process of building and breaking things intentionally.",
  },
];

const activeProjects = [
  {
    title: "Rayhunter — Stingray / IMSI catcher detector",
    status: "Shipped",
    color: "green",
    desc: "Installed Rayhunter v0.10.2 on an Orbic RC400L via Kali. Old SIM: 3 warnings consistent with an IMSI catcher. Fresh SIM: zero warnings. Finding documented.",
    progress: 100,
    progressLabel: "Install · Test · Finding confirmed",
  },
  {
    title: "seniorconnect.app security audit",
    status: "Active",
    color: "coral",
    desc: "Testing 20 vulnerabilities using Kali Linux on a VPS. Documenting every step as security research content.",
    progress: 15,
    progressLabel: "3 / 20 vulns tested",
  },
  {
    title: "Raspberry Pi surveillance system",
    status: "Building",
    color: "teal",
    desc: "Multi-month hardware + software build. Planning Tailscale integration for secure remote access. Full build log incoming.",
    progress: 10,
    progressLabel: "Phase 1 of 5 — networking layer",
  },
  {
    title: "PortSwigger Web Security labs",
    status: "Active",
    color: "blue",
    desc: "Working through the apprentice track. 11 labs remaining — findings will feed into Substack and content library.",
    progress: 55,
    progressLabel: "11 labs remaining",
  },
  {
    title: "Safe & Secure Online webinar series",
    status: "Building",
    color: "purple",
    desc: "Designing practical digital safety workshops for seniors. Covers phishing, passwords, privacy, and safe browsing.",
  },
  {
    title: "LLC site + resume update",
    status: "Active",
    color: "amber",
    desc: "Adding Design & Development and Cloud Management to reflect VPS work, app deployment, and recent projects.",
  },
  {
    title: "djslradio.com media refresh",
    status: "Ongoing",
    color: "green",
    desc: "Updating media assets and files via FTP. Keeping the site current between larger projects.",
  },
];

function WorkingSection() {
  return (
    <section id="work" className="py-24 relative border-t border-primary/10" data-testid="section-work">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary/30" />
            <span className="font-mono text-xs text-primary tracking-widest">04.2 // WORK_LOG</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] text-primary/60 tracking-widest">LIVE_SNAPSHOT</span>
            </div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground" data-testid="text-work-heading">
            What I'm Working On
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-base">
            A live snapshot of active projects — from infrastructure and security research to web builds and community education.
          </p>
        </motion.div>

        {/* Activity Log */}
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p className="font-mono text-[10px] text-primary/40 tracking-widest mb-4">// RECENT_ACTIVITY</p>
          <div className="rounded-sm border border-primary/10 overflow-hidden" data-testid="activity-log">
            {activityLog.map((item, i) => (
              <div
                key={i}
                className="grid border-b border-primary/10 last:border-b-0 hover:bg-primary/[0.02] transition-colors"
                style={{ gridTemplateColumns: "88px 1fr" }}
                data-testid={`activity-item-${i}`}
              >
                <div className="border-r border-primary/10 px-3 py-4 flex flex-col gap-0.5">
                  <span className="font-mono text-[11px] font-medium" style={{ color: accentColors.amber }}>{item.day}</span>
                  <span className="font-mono text-[10px] text-muted-foreground/60">{item.date}</span>
                  {item.year && <span className="font-mono text-[10px] text-muted-foreground/40">{item.year}</span>}
                </div>
                <div className="px-4 py-4">
                  <div className="text-sm font-medium text-foreground mb-1.5 leading-snug">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                        data-testid={`link-activity-${i}`}
                      >
                        {item.title}
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    ) : (
                      item.title
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{ background: tagStyles[tag.color].bg, color: tagStyles[tag.color].color }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <p className="font-mono text-[10px] text-primary/40 tracking-widest mb-4">// ACTIVE_TRACKS</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeProjects.map((project, i) => (
              <motion.div key={project.title} variants={fadeUp}>
                <Card
                  className="p-4 h-full flex flex-col gap-2 border-primary/10 hover-elevate relative overflow-hidden"
                  data-testid={`card-project-${i}`}
                  style={{ paddingLeft: "calc(1rem + 3px)" }}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px]"
                    style={{ background: accentColors[project.color] }}
                  />
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading font-semibold text-sm leading-snug flex-1">{project.title}</h3>
                    <span
                      className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded-full flex-shrink-0 uppercase"
                      style={{ background: statusStyles[project.status].bg, color: statusStyles[project.status].color }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{project.desc}</p>
                  {project.progress !== undefined && (
                    <div className="mt-1">
                      <div className="h-[2px] bg-primary/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${project.progress}%`, background: accentColors[project.color] }}
                        />
                      </div>
                      <p className="font-mono text-[10px] text-muted-foreground/50 mt-1">{project.progressLabel}</p>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Substack Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div
            className="flex items-start gap-4 rounded-sm border border-primary/10 p-5"
            style={{ background: "hsl(174 100% 42% / 0.03)" }}
            data-testid="callout-substack"
          >
            <div
              className="w-9 h-9 rounded-sm border border-primary/20 flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: "var(--glow-primary)" }}
            >
              <PenLine className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-heading font-semibold text-sm mb-1">I write about all of this</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Security research, building in public, and making tech accessible —
                follow{" "}
                <a
                  href="https://djlena.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-mono"
                  data-testid="link-substack"
                >
                  Wisdom & Mischief on Substack
                </a>{" "}
                for the full documentation as it happens.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BookingSection() {
  useEffect(() => {
    const initWidget = () => {
      const el = document.querySelector(".calendly-inline-widget");
      if (el && (window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: "https://calendly.com/d/y7b-8kp-5sy/initial-consultation-call?background_color=0a0c14&text_color=c8d0e0&primary_color=00d4a4",
          parentElement: el,
        });
      }
    };

    if ((window as any).Calendly) {
      initWidget();
    } else {
      const script = document.querySelector('script[src*="calendly"]');
      if (script) {
        script.addEventListener("load", initWidget);
        return () => script.removeEventListener("load", initWidget);
      }
    }
  }, []);

  return (
    <section id="booking" className="py-24 border-t border-primary/10" data-testid="section-booking">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-12 bg-primary/30" />
              <span className="font-mono text-xs text-primary tracking-widest">04.5 // SCHEDULE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Book a Free Consultation
            </h2>
            <p className="mt-4 text-muted-foreground text-base max-w-xl">
              20 minutes, no pressure. Let's talk about your security needs or project goals.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div
              className="rounded-sm border border-primary/10 overflow-hidden"
              style={{ boxShadow: "var(--glow-primary)" }}
            >
              <div
                className="calendly-inline-widget w-full"
                style={{ minWidth: "320px", height: "700px" }}
                data-testid="widget-calendly"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24" data-testid="section-contact">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-12 bg-primary/30" />
              <span className="font-mono text-xs text-primary tracking-widest">05 // UPLINK</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground" data-testid="text-contact-heading">
              Establish Connection
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Ready to secure your applications or build something new? Open a channel.
            </p>
          </motion.div>

          <motion.div className="mt-10 space-y-4" variants={fadeUp}>
            <Card className="p-6 border-primary/10">
              <div className="grid sm:grid-cols-3 gap-6">
                <a
                  href="mailto:lena@lenathompsonllc.com"
                  className="flex flex-col items-center gap-2 rounded-sm p-3 hover-elevate"
                  data-testid="link-email"
                >
                  <div className="w-11 h-11 rounded-sm border border-primary/20 flex items-center justify-center" style={{ boxShadow: "var(--glow-primary)" }}>
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-heading font-semibold" data-testid="text-email-label">Email</span>
                  <span className="text-[11px] text-muted-foreground font-mono" data-testid="text-email-value">lena@lenathompsonllc.com</span>
                </a>

                <a
                  href="tel:313-389-6249"
                  className="flex flex-col items-center gap-2 rounded-sm p-3 hover-elevate"
                  data-testid="link-phone"
                >
                  <div className="w-11 h-11 rounded-sm border border-primary/20 flex items-center justify-center" style={{ boxShadow: "var(--glow-primary)" }}>
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-heading font-semibold" data-testid="text-phone-label">Phone</span>
                  <span className="text-[11px] text-muted-foreground font-mono" data-testid="text-phone-value">313-389-6249</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/lenathompsonllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 rounded-sm p-3 hover-elevate"
                  data-testid="link-linkedin"
                >
                  <div className="w-11 h-11 rounded-sm border border-primary/20 flex items-center justify-center" style={{ boxShadow: "var(--glow-primary)" }}>
                    <Linkedin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-heading font-semibold" data-testid="text-linkedin-label">LinkedIn</span>
                  <span className="text-[11px] text-muted-foreground font-mono" data-testid="text-linkedin-value">lenathompsonllc</span>
                </a>
              </div>
            </Card>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Button asChild data-testid="button-email-me">
                <a href="mailto:lena@lenathompsonllc.com" className="font-mono text-xs tracking-wider">
                  <Mail className="w-4 h-4 mr-2" />
                  SEND_MESSAGE
                </a>
              </Button>
              <Button variant="outline" className="border-primary/30" asChild data-testid="button-book-call">
                <a href="#booking" className="font-mono text-xs tracking-wider">
                  <Zap className="w-4 h-4 mr-2" />
                  BOOK_FREE_CALL
                </a>
              </Button>
              <Button variant="outline" className="border-primary/30" asChild data-testid="button-github">
                <a href="https://github.com/djlenadanger" target="_blank" rel="noopener noreferrer" className="font-mono text-xs tracking-wider">
                  <BookOpen className="w-4 h-4 mr-2" />
                  PORTFOLIO
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function RadioSection() {
  return (
    <section id="radio" className="py-16 border-t border-primary/10" data-testid="section-radio">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] text-primary/60 tracking-widest">LIVE_STREAM</span>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-4 mb-6">
            <div
              className="w-10 h-10 rounded-sm border border-primary/30 flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: "var(--glow-primary)" }}
            >
              <Radio className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">DJ Lena — House of House</h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                Internet radio broadcasting live on TuneIn.{" "}
                <a
                  href="https://tunein.com/radio/DJ-Lena-House-of-House-s224423/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-mono text-xs hover:underline"
                  data-testid="link-tunein-full"
                >
                  Open in TuneIn ↗
                </a>
              </p>
            </div>
          </div>
          <div
            className="rounded-sm border border-primary/10 overflow-hidden"
            style={{ boxShadow: "var(--glow-primary)" }}
            data-testid="widget-radio"
          >
            <iframe
              src="https://tunein.com/embed/player/s224423/"
              style={{ width: "100%", height: "100px" }}
              scrolling="no"
              frameBorder="no"
              title="DJ Lena — House of House on TuneIn"
              allow="autoplay"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary/10 py-8" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-sm border border-primary/30 flex items-center justify-center">
            <Terminal className="w-3 h-3 text-primary" />
          </div>
          <span className="font-heading font-bold text-xs tracking-widest uppercase">
            Lena Thompson <span className="text-primary">LLC</span>
          </span>
        </div>
        <p className="text-[10px] text-muted-foreground font-mono tracking-wider">
          CHEBOYGAN, MI // CYBERSECURITY // APP_DEV // TRAINING
        </p>
        <p className="text-[10px] text-muted-foreground font-mono tracking-wider">
          &copy; {new Date().getFullYear()} LENA_THOMPSON_LLC
        </p>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <GridBackground />
      <ScanLine />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <CredentialsSection />
      <WorkingSection />
      <BookingSection />
      <ContactSection />
      <RadioSection />
      <Footer />
    </div>
  );
}
