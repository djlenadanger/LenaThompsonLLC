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
  Lock,
  Code,
  Search,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50" data-testid="navbar">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" className="font-heading font-bold text-xl tracking-tight" data-testid="link-home">
          <span className="text-primary">Lena Thompson</span>{" "}
          <span className="text-muted-foreground font-normal text-base">LLC</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="text-muted-foreground transition-colors" data-testid="link-services">Services</a>
          <a href="#about" className="text-muted-foreground transition-colors" data-testid="link-about">About</a>
          <a href="#credentials" className="text-muted-foreground transition-colors" data-testid="link-credentials">Credentials</a>
          <a href="#contact" className="text-muted-foreground transition-colors" data-testid="link-contact">Contact</a>
        </div>
        <Button size="sm" asChild data-testid="button-get-in-touch">
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F9B8E]/5 via-transparent to-[#1A1A2E]/5" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div className="order-2 md:order-1 space-y-6" variants={fadeUp}>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                <Shield className="w-3 h-3 mr-1" />
                Cybersecurity Professional
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Code className="w-3 h-3 mr-1" />
                App Developer
              </Badge>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground" data-testid="text-hero-heading">
              Securing Your{" "}
              <span className="text-primary">Digital World</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Web & mobile app security testing, custom app development, surveillance technology, and safe online training designed for everyone — especially seniors.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button size="lg" asChild data-testid="button-explore-services">
                <a href="#services">
                  Explore Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-view-credentials">
                <a href="#credentials">View Credentials</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            variants={fadeUp}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl scale-110" />
              <Avatar className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl border-2 border-primary/20" data-testid="img-lena-portrait">
                <AvatarImage src={lenaPhoto} alt="Lena Thompson" className="object-cover" />
                <AvatarFallback className="text-4xl font-heading rounded-2xl">LT</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-heading font-bold shadow-lg" data-testid="badge-sans-certified">
                SANS Certified
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
    description:
      "Comprehensive vulnerability assessments and penetration testing for web applications using industry-standard tools like Burp Suite and HackerOne methodologies.",
  },
  {
    icon: Smartphone,
    title: "Phone App Security Testing",
    description:
      "Mobile application security analysis including iOS and Android platforms, identifying vulnerabilities before they become threats.",
  },
  {
    icon: Globe,
    title: "Web App Development",
    description:
      "Custom web application design and development — from concept to deployment — built with modern frameworks and security best practices baked in.",
  },
  {
    icon: Monitor,
    title: "Phone App Development",
    description:
      "Native and cross-platform mobile app creation tailored to your business needs, with a security-first development approach.",
  },
  {
    icon: Camera,
    title: "Surveillance Technology",
    description:
      "Network surveillance solutions powered by Chasing-Your-Tail-NG, an open-source platform for monitoring and security analysis.",
  },
  {
    icon: Users,
    title: "Safe & Secure Online Training",
    description:
      "Hands-on training for seniors to navigate the digital world safely. Learn to spot scams, protect personal data, and use technology with confidence.",
    highlight: true,
    link: "https://seniorconnect.app",
    linkLabel: "seniorconnect.app",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30" data-testid="section-services">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <Badge variant="outline" className="mb-4 text-xs">
            <Lock className="w-3 h-3 mr-1" />
            What I Offer
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground" data-testid="text-services-heading">
            Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From finding vulnerabilities to building secure applications — a full spectrum of cybersecurity and development expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <Card
                className={`p-6 h-full flex flex-col gap-4 hover-elevate transition-all duration-200 ${
                  service.highlight
                    ? "border-primary/30 bg-primary/[0.03]"
                    : ""
                }`}
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className={`w-11 h-11 rounded-md flex items-center justify-center ${
                  service.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}>
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg" data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                {service.link && (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-1"
                    data-testid="link-seniorconnect"
                  >
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
            <Badge variant="outline" className="text-xs">
              <Search className="w-3 h-3 mr-1" />
              Background
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground" data-testid="text-about-heading">
              Multifaceted Professional
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Program Manager with over 15 years of automotive technology leadership at Ford Motor Company, now fully transitioned into cybersecurity. My experience spans threat hunting, vulnerability assessment, and incident response — backed by hands-on labs with TryHackMe, HackerOne, and Burp Suite.
              </p>
              <p>
                My approach to security is shaped by real-world problem-solving: I've led cross-functional teams using the DMAIC framework, authored technical service bulletins, and earned my Six Sigma Black Belt at Ford. That same rigor now powers how I identify and remediate vulnerabilities.
              </p>
              <p>
                Based in Cheboygan, Michigan, I bring a unique mix of technical depth and practical ingenuity. When I'm not securing networks or building apps, you might find me working on my lawn tractor — because fixing things is what I do.
              </p>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeUp}>
            <h3 className="font-heading font-bold text-lg mb-4">Career Highlights</h3>
            <div className="space-y-3">
              {[
                {
                  title: "Enterprise Security Breach Discovery",
                  detail: "Identified unauthorized ScreenConnect connections to a multimillion-dollar manufacturer using Shodan.io monitoring.",
                },
                {
                  title: "NetWars CTF Champion",
                  detail: "Completed 86/86 CTF challenges in SEC504, earning 325 of 335 possible points.",
                },
                {
                  title: "iOS Pegasus Evaluation",
                  detail: "Built a Kali VM to decrypt 100GB iOS backups, searching for Pegasus IoCs using Amnesty International's MVT tool.",
                },
                {
                  title: "Ford Motor Co. Black Belt",
                  detail: "Completed four DMAIC projects addressing measurable defects, delivering process improvements and design solutions.",
                },
                {
                  title: "Adjunct Faculty",
                  detail: "Taught automotive courses at Wayne County Community College, known for innovative teaching methods and consistently positive student evaluations.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-4 hover-elevate" data-testid={`card-highlight-${i}`}>
                  <h4 className="font-heading font-semibold text-sm">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.detail}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const credentials = [
  { name: "GFACT", org: "SANS / GIAC" },
  { name: "GSEC", org: "SANS / GIAC" },
  { name: "GCIH", org: "SANS / GIAC" },
  { name: "Certified in Cybersecurity", org: "ISC2" },
  { name: "Cybersecurity Professional Certificate", org: "University of Michigan" },
  { name: "BAS Automotive Technology", org: "Sienna Heights University" },
  { name: "Six Sigma Black Belt", org: "Ford Motor Company" },
];

function CredentialsSection() {
  return (
    <section id="credentials" className="py-24 bg-muted/30" data-testid="section-credentials">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <Badge variant="outline" className="mb-4 text-xs">
            <Award className="w-3 h-3 mr-1" />
            Certifications & Education
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground" data-testid="text-credentials-heading">
            Credentials
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Continuous learning and industry-recognized certifications across cybersecurity and technology.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {credentials.map((cred) => (
            <motion.div key={cred.name} variants={fadeUp}>
              <Card className="p-5 hover-elevate h-full" data-testid={`card-credential-${cred.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="flex flex-wrap items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm">{cred.name}</h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{cred.org}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-sm text-muted-foreground mb-3">
            SANS Cyber Academy coursework includes 100+ hands-on labs spanning network security, incident response, web app attacks, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Threat Hunting", "Vulnerability Assessment", "Incident Response", "Penetration Testing", "Network Security", "Cloud Security", "DFIR", "Ethical Hacking"].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
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
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <Badge variant="outline" className="mb-4 text-xs">
              <Mail className="w-3 h-3 mr-1" />
              Let's Connect
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground" data-testid="text-contact-heading">
              Get in Touch
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Ready to secure your applications or build something new? I'd love to hear from you.
            </p>
          </motion.div>

          <motion.div className="mt-10 space-y-4" variants={fadeUp}>
            <Card className="p-6">
              <div className="grid sm:grid-cols-3 gap-6">
                <a
                  href="mailto:lena@lenathompsonllc.com"
                  className="flex flex-col items-center gap-2 rounded-md p-3 hover-elevate"
                  data-testid="link-email"
                >
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium" data-testid="text-email-label">Email</span>
                  <span className="text-xs text-muted-foreground" data-testid="text-email-value">lena@lenathompsonllc.com</span>
                </a>

                <a
                  href="tel:313-282-4396"
                  className="flex flex-col items-center gap-2 rounded-md p-3 hover-elevate"
                  data-testid="link-phone"
                >
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium" data-testid="text-phone-label">Phone</span>
                  <span className="text-xs text-muted-foreground" data-testid="text-phone-value">313-282-4396</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/lenathompsonllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 rounded-md p-3 hover-elevate"
                  data-testid="link-linkedin"
                >
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium" data-testid="text-linkedin-label">LinkedIn</span>
                  <span className="text-xs text-muted-foreground" data-testid="text-linkedin-value">lenathompsonllc</span>
                </a>
              </div>
            </Card>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Button asChild data-testid="button-email-me">
                <a href="mailto:lena@lenathompsonllc.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" asChild data-testid="button-github">
                <a href="https://djlenadanger.github.io" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Portfolio
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-8" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-heading font-bold text-sm">
          <span className="text-primary">Lena Thompson</span>{" "}
          <span className="text-muted-foreground font-normal">LLC</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Cheboygan, Michigan &middot; Cybersecurity &middot; App Development &middot; Training
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Lena Thompson LLC
        </p>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CredentialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
