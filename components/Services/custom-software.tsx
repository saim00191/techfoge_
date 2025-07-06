

import {
  Code,
  Zap,
  Rocket,
  Monitor,
  Target,
  Settings,
  Database,
  Shield,
} from "lucide-react"
import CustomSoftwareImage from "@/images/software-development.png"
import ServicesPageTemplate from "./ServicesMain"

export default function CustomSoftwareDevelopment() {
 
  const services = [
    {
      icon: <Code/>,
      title: "Custom Software Development",
      description:
        "Build fully customized software solutions with clean code, modern frameworks, and business-focused architecture.",
      color: "#00D1FF",
    },
    {
      icon: <Zap/>,
      title: "Performance Optimization",
      description: "Speed matters. We optimize every layer to deliver lightning-fast software experiences.",
      color: "#00D1FF",
    },
    {
      icon: <Settings/>,
      title: "Scalable Architecture",
      description: "From desktop to cloud, your software will scale seamlessly with your business growth.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "Desktop Applications",
      icon: <Monitor/>,
      services: [
        "Cross-platform Desktop Apps",
        "Native Windows Applications",
        "macOS Applications",
        "Linux Applications",
        "Enterprise Software Solutions",
      ],
    },
    {
      category: "Backend Systems",
      icon: <Database/>,
      services: [
        "RESTful API Development",
        "GraphQL APIs",
        "Microservices Architecture",
        "Database Design & Integration",
        "Real-time Systems",
      ],
    },
    {
      category: "Enterprise Solutions",
      icon: <Shield/>,
      services: [
        "CRM & ERP Systems",
        "Business Process Automation",
        "Data Analytics Platforms",
        "Integration Solutions",
        "Legacy System Modernization",
      ],
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your business needs and create a comprehensive software specification.",
      icon: <Target/>,
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Creating scalable system architecture and technical specifications for optimal performance.",
      icon: <Monitor/>,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your software with clean code, rigorous testing, and quality assurance protocols.",
      icon: <Code/>,
    },
    {
      step: "04",
      title: "Deployment & Maintenance",
      description: "Deploying your software and providing ongoing support, updates, and maintenance.",
      icon: <Rocket/>,
    },
  ]

  const techStack = {
    programming: [
      { name: "JavaScript", icon: "⚡", description: "Dynamic web language" },
      { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript" },
      { name: "Python", icon: "🐍", description: "Versatile programming" },
      { name: "Java", icon: "☕", description: "Enterprise development" },
      { name: "C#", icon: "🔷", description: "Microsoft ecosystem" },
      { name: "C++", icon: "⚙️", description: "High-performance apps" },
      { name: "C", icon: "🔧", description: "System programming" },
      { name: "Go", icon: "🐹", description: "Concurrent programming" },
      { name: "Rust", icon: "🦀", description: "Memory-safe systems" },
      { name: "Ruby", icon: "💎", description: "Elegant development" },
      { name: "PHP", icon: "🐘", description: "Web development" },
      { name: "Swift", icon: "🍎", description: "iOS development" },
      { name: "Kotlin", icon: "🎯", description: "Android development" },
      { name: "Dart", icon: "🎪", description: "Flutter development" },
    ],
    frontend: [
      { name: "HTML", icon: "🌐", description: "Semantic markup" },
      { name: "CSS", icon: "🎨", description: "Modern styling" },
      { name: "JavaScript", icon: "⚡", description: "Dynamic interactions" },
      { name: "TypeScript", icon: "📘", description: "Type-safe development" },
      { name: "React.js", icon: "⚛️", description: "Component-based UI" },
      { name: "Angular", icon: "🅰️", description: "Enterprise applications" },
      { name: "Vue.js", icon: "💚", description: "Progressive framework" },
      { name: "Svelte", icon: "🔥", description: "Compile-time optimization" },
      { name: "Tailwind CSS", icon: "🌊", description: "Utility-first CSS" },
      { name: "Bootstrap", icon: "🅱️", description: "Responsive framework" },
      { name: "Next.js", icon: "▲", description: "Full-stack framework" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
      { name: "Express.js", icon: "🚀", description: "Web framework" },
      { name: "Django", icon: "🐍", description: "Python framework" },
      { name: "Flask", icon: "🌶️", description: "Micro framework" },
      { name: "Spring Boot", icon: "🍃", description: "Java framework" },
      { name: "ASP.NET", icon: "🔷", description: "Microsoft framework" },
      { name: "NestJS", icon: "🐱", description: "Scalable Node.js" },
      { name: "Laravel", icon: "🎭", description: "PHP framework" },
      { name: "Ruby on Rails", icon: "💎", description: "Convention over config" },
      { name: "FastAPI", icon: "⚡", description: "Modern Python API" },
      { name: "Koa.js", icon: "🥥", description: "Next-gen Node.js" },
      { name: ".NET Core", icon: "🔷", description: "Cross-platform .NET" },
    ],
    databases: [
      { name: "PostgreSQL", icon: "🐘", description: "Advanced SQL database" },
      { name: "MySQL", icon: "🐬", description: "Popular SQL database" },
      { name: "SQLite", icon: "📦", description: "Lightweight database" },
      { name: "SQL Server", icon: "🏢", description: "Microsoft database" },
      { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
      { name: "Firebase Firestore", icon: "🔥", description: "Cloud database" },
      { name: "Cassandra", icon: "🏛️", description: "Distributed database" },
      { name: "CouchDB", icon: "🛋️", description: "Document database" },
      { name: "DynamoDB", icon: "⚡", description: "AWS NoSQL" },
      { name: "Redis", icon: "🔴", description: "In-memory cache" },
    ],
    cloud: [
      { name: "AWS", icon: "☁️", description: "Amazon cloud" },
      { name: "Google Cloud", icon: "🌤️", description: "Google cloud platform" },
      { name: "Azure", icon: "🔷", description: "Microsoft cloud" },
      { name: "Docker", icon: "🐳", description: "Containerization" },
      { name: "Kubernetes", icon: "⚓", description: "Container orchestration" },
      { name: "Jenkins", icon: "👨‍🔧", description: "CI/CD automation" },
      { name: "GitHub Actions", icon: "🐙", description: "GitHub CI/CD" },
      { name: "GitLab CI/CD", icon: "🦊", description: "GitLab automation" },
      { name: "Terraform", icon: "🏗️", description: "Infrastructure as code" },
      { name: "Ansible", icon: "🔴", description: "Configuration management" },
      { name: "Vercel", icon: "▲", description: "Frontend deployment" },
      { name: "Netlify", icon: "🌐", description: "JAMstack hosting" },
      { name: "Heroku", icon: "💜", description: "Platform as a service" },
      { name: "DigitalOcean", icon: "🌊", description: "Developer cloud" },
    ],
    auth: [
      { name: "OAuth 2.0", icon: "🔐", description: "Authorization framework" },
      { name: "JWT", icon: "🎫", description: "JSON Web Tokens" },
      { name: "Auth0", icon: "🛡️", description: "Identity platform" },
      { name: "Firebase Auth", icon: "🔥", description: "Google authentication" },
      { name: "Keycloak", icon: "🗝️", description: "Identity management" },
      { name: "Passport.js", icon: "📋", description: "Node.js authentication" },
      { name: "Bcrypt/Argon2", icon: "🔒", description: "Password hashing" },
    ],
    testing: [
      { name: "Jest", icon: "🃏", description: "JavaScript testing" },
      { name: "Mocha", icon: "☕", description: "JavaScript test framework" },
      { name: "Jasmine", icon: "🌸", description: "Behavior-driven testing" },
      { name: "Cypress", icon: "🌲", description: "E2E testing" },
      { name: "Playwright", icon: "🎭", description: "Cross-browser testing" },
      { name: "Selenium", icon: "🕷️", description: "Web automation" },
      { name: "JUnit", icon: "☕", description: "Java testing" },
      { name: "PyTest", icon: "🐍", description: "Python testing" },
      { name: "Postman", icon: "📮", description: "API testing" },
      { name: "Insomnia", icon: "😴", description: "REST client" },
    ],
    version: [
      { name: "Git", icon: "📝", description: "Version control" },
      { name: "GitHub", icon: "🐙", description: "Code hosting" },
      { name: "GitLab", icon: "🦊", description: "DevOps platform" },
      { name: "Bitbucket", icon: "🪣", description: "Atlassian Git" },
    ],
    ides: [
      { name: "VS Code", icon: "💻", description: "Code editor" },
      { name: "IntelliJ IDEA", icon: "🧠", description: "Java IDE" },
      { name: "PyCharm", icon: "🐍", description: "Python IDE" },
      { name: "Eclipse", icon: "🌙", description: "Java development" },
      { name: "Android Studio", icon: "🤖", description: "Android development" },
      { name: "Xcode", icon: "🍎", description: "iOS development" },
    ],
  }


  const categoryTitles: Record<string, string> = {
  programming: "💻 Programming Languages",
  frontend: "🧱 Frontend Development",
  backend: "🔧 Backend Development",
  databases: "🗃️ Databases",
  cloud: "☁️ Cloud & DevOps",
  auth: "🔐 Authentication & Security",
  testing: "🧪 Testing Tools",
  version: "🧰 Version Control & Collaboration",
  ides: "🛠️ IDEs & Editors",
};

  const features = [
    "Lightning-fast performance optimization",
    "Scalable architecture design",
    "Cross-platform compatibility",
    "Modern security practices",
    "Cloud-native infrastructure",
    "24/7 monitoring & support",
    "Custom integration solutions",
    "Enterprise-grade reliability",
  ]


   const leftSideFeatures = [
    {
      icon: <Zap />,
      title: "High Performance Architecture",
      description: "Optimized for speed and scalability",
    },
    {
      icon: <Settings/>,
      title: "Cross-Platform Compatibility",
      description: "Works seamlessly across all platforms",
    },
    {
      icon: <Shield/>,
      title: "Enterprise Security",
      description: "Built with security-first approach",
    },
  ];

  return (
    <ServicesPageTemplate
      mainHeading="Custom Software Development"
      subHeading="Transform Your Vision Into Reality With Scalable Software Solutions"
      subtitle="We specialize in crafting fast, secure, and scalable software applications tailored to your business needs."
      servicesMainHeading="Our Services"
      servicesSubHeading="Comprehensive software development solutions designed to elevate your business operations."
      techStackDescription=" We use cutting-edge technologies to build robust and scalable web solutions."
      techStack={techStack}
      techStackCategory={categoryTitles}
            whyChooseUsDescription="We deliver exceptional results through expertise, innovation, and dedication."
            illustrationHeading="Expert Development Team"
            developmentProcessMainHeading="Our Development Process"
            developmentProcessDescription="A proven methodology that ensures successful project delivery from concept to launch."
            illustrationDescription=" Our experienced developers combine technical expertise with creative problem-solving to deliver outstanding web solutions that drive business growth."
            comprehensiveSolutionsDescription="From desktop applications to enterprise systems, we cover every aspect of modern software development."
            imageSectionLeftSideHeading="Crafting Software Solutions That Drive Success"
            imageSectionLeftSideDescription="Our team combines technical expertise with innovative thinking to build software applications that not only meet your requirements but also deliver exceptional performance and scalability."
            services={services}
            imageSectionLeftSideFeatures={leftSideFeatures}
            imageSectionRightSideImage={CustomSoftwareImage}
            developmentProcess={developmentProcess}
            detailServices={detailedServices}
            features={features}
            finalCtaHeading="Ready to Build Something Amazing?"
            finalCtaDescription="Transform your ideas into powerful software solutions. Let's create something extraordinary together.."
          />
   
  )
}
