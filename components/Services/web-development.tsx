import {
  Code,
  Zap,
  Smartphone,
  Rocket,
  Globe,
  Monitor,
  Target,
} from "lucide-react";
import WebDevelopmentImage from "@/images/web-development.png";

import ServicesPageTemplate from "./ServicesMain";

export default function WebDevelopmentServices() {
  const services = [
    {
      icon: <Code />,
      title: "Custom Website Development",
      description:
        "Build fully customized websites with clean code, modern frameworks, and business-focused UX.",
        
    },

    {
      icon: <Zap />,
      title: "Performance Optimization",
      description:
        "Speed matters. We optimize every layer to deliver lightning-fast experiences.",
        
    },
    {
      icon: <Smartphone />,
      title: "Responsive Design",
      description:
        "From mobile to desktop, your site will look great and work flawlessly on every screen.",
        
    },
  ];

  const detailedServices = [
    {
      category: "Frontend Development",
      icon: <Monitor />,
      services: [
        "Responsive Web Design",
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Component Libraries",
        "UI/UX Implementation",
      ],
    },
    {
      category: "Backend Development",
      icon: <Code />,
      services: [
        "RESTful API Development",
        "GraphQL APIs",
        "Database Design & Integration",
        "Server-Side Rendering",
        "Microservices Architecture",
      ],
    },
    {
      category: "Full-Stack Solutions",
      icon: <Globe />,
      services: [
        "E-commerce Platforms",
        "Content Management Systems",
        "Real-time Applications",
        "Authentication Systems",
        "Payment Integration",
      ],
    },
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements and create a comprehensive project roadmap.",
      icon: <Target />,
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Creating wireframes and interactive prototypes for optimal user experience.",
      icon: <Monitor />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Building your application with clean code and rigorous testing protocols.",
      icon: <Code />,
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Launching your project and providing ongoing maintenance and support.",
      icon: <Rocket />,
      
    },
  ];

  const features = [
    "Lightning-fast loading speeds",
    "SEO-optimized architecture",
    "Mobile-first responsive design",
    "Modern security practices",
    "Scalable cloud infrastructure",
    "24/7 monitoring & support",
    "Custom CMS integration",
    "E-commerce capabilities",
  ];

  const leftSideFeatures = [
    {
      icon: <Zap />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed and efficiency",
    },
    {
      icon: <Smartphone />,
      title: "Mobile-First Design",
      description: "Perfect on every device and screen size",
    },
    {
      icon: <Globe />,
      title: "SEO Optimized",
      description: "Built for search engine visibility",
    },
  ];

  
   const categoryTitles: Record<string, string> = {
  frontend: "🎨 Frontend Development",
  backend: "🧠 Backend Development",
  database: "🗄️ Database Management",
  hosting: "☁️ Hosting & DevOps",
  auth: "🔐 Authentication",
  testing: "🧪 Testing & Tools",
};




   const techStack = {
    frontend: [
      { name: "HTML", icon: "🌐", description: "Semantic markup" },
      { name: "CSS", icon: "🎨", description: "Modern styling" },
      { name: "JavaScript", icon: "⚡", description: "Dynamic interactions" },
      { name: "TypeScript", icon: "📘", description: "Type-safe development" },
      { name: "React.js", icon: "⚛️", description: "Component-based UI" },
      { name: "Next.js", icon: "▲", description: "Full-stack framework" },
      { name: "Vue.js", icon: "💚", description: "Progressive framework" },
      { name: "Angular", icon: "🅰️", description: "Enterprise applications" },
      { name: "Tailwind CSS", icon: "🌊", description: "Utility-first CSS" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
      { name: "Express.js", icon: "🚀", description: "Web framework" },
      { name: "Next.js API", icon: "🔗", description: "API routes" },
      { name: "NestJS", icon: "🐱", description: "Scalable architecture" },
      { name: "Django", icon: "🐍", description: "Python framework" },
      { name: "Flask", icon: "🌶️", description: "Micro framework" },
      { name: "Ruby on Rails", icon: "💎", description: "Convention over config" },
    ],
    database: [
      { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
      { name: "PostgreSQL", icon: "🐘", description: "Relational database" },
      { name: "MySQL", icon: "🐬", description: "Popular SQL database" },
      { name: "SQLite", icon: "📦", description: "Lightweight database" },
      { name: "Firebase Firestore", icon: "🔥", description: "Cloud database" },
      { name: "Redis", icon: "🔴", description: "In-memory cache" },
    ],
    hosting: [
      { name: "Vercel", icon: "▲", description: "Frontend deployment" },
      { name: "Netlify", icon: "🌐", description: "JAMstack hosting" },
      { name: "Firebase Hosting", icon: "🔥", description: "Google cloud" },
      { name: "Heroku", icon: "💜", description: "Platform as a service" },
      { name: "Render", icon: "🎯", description: "Modern cloud" },
      { name: "Railway", icon: "🚂", description: "Infrastructure platform" },
      { name: "AWS", icon: "☁️", description: "Amazon cloud" },
      { name: "DigitalOcean", icon: "🌊", description: "Developer cloud" },
    ],
    auth: [
      { name: "NextAuth.js", icon: "🔐", description: "Next.js authentication" },
      { name: "Firebase Auth", icon: "🔥", description: "Google authentication" },
      { name: "Auth0", icon: "🛡️", description: "Identity platform" },
      { name: "JWT", icon: "🎫", description: "JSON Web Tokens" },
    ],
    testing: [
      { name: "Jest", icon: "🃏", description: "JavaScript testing" },
      { name: "React Testing Library", icon: "🧪", description: "React testing" },
      { name: "Cypress", icon: "🌲", description: "E2E testing" },
      { name: "Postman", icon: "📮", description: "API testing" },
      { name: "Insomnia", icon: "😴", description: "REST client" },
    ],
  }



  return (
    <div>
      <ServicesPageTemplate
        mainHeading="Web Development Services"
        subHeading="Transform Your Vision Into Reality With Scalable Web Solutions"
        subtitle="We specialize in crafting fast, secure, and user-friendly websites tailored to your business needs."
        servicesMainHeading="Our Services"
        servicesSubHeading="Comprehensive web development solutions designed to elevate your digital presence."
        techStackDescription=" We use cutting-edge technologies to build robust and scalable web solutions."
        techStackCategory={categoryTitles}
        techStack={techStack}
        whyChooseUsDescription="We deliver exceptional results through expertise, innovation, and dedication."
        illustrationHeading="Expert Development Team"
        developmentProcessMainHeading="Our Development Process"
        developmentProcessDescription="A proven methodology that ensures successful project delivery from concept to launch."
        illustrationDescription=" Our experienced developers combine technical expertise with creative problem-solving to deliver outstanding web solutions that drive business growth."
        comprehensiveSolutionsDescription="From frontend to backend, we cover every aspect of modern web development."
        imageSectionLeftSideHeading="Crafting Digital Experiences That Matter"
        imageSectionLeftSideDescription="Our team combines technical expertise with creative vision to build web applications that not only look stunning but also deliver exceptional performance and user experience."
        services={services}
        imageSectionLeftSideFeatures={leftSideFeatures}
        imageSectionRightSideImage={WebDevelopmentImage}
        developmentProcess={developmentProcess}
        detailServices={detailedServices}
        features={features}
        finalCtaHeading="Ready to Build Something Amazing?"
        finalCtaDescription="Transform your ideas into powerful web solutions. Let's create something extraordinary together."
      />
    </div>
  );
}
