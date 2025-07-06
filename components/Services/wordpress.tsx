
import {
  Globe,
  Zap,

  Rocket,
  Monitor,
  Target,

  Shield,
  Settings,
  Palette,
  Code,
} from "lucide-react"

import WordPress from '@/images/wordpress.png'
import ServicesPageTemplate from "./ServicesMain"



export default function WordPressDevelopment() {

  const services = [
    {
      icon: <Globe />,
      title: "Custom WordPress Development",
      description:
        "Build high-performance WordPress websites with custom themes, plugins, and functionality tailored to your business needs.",
      color: "#00D1FF",
    },
    {
      icon: <Palette />,
      title: "Theme Development & Customization",
      description:
        "Create stunning custom WordPress themes or customize existing themes to match your brand identity perfectly.",
      color: "#00D1FF",
    },
    {
      icon: <Zap />,
      title: "Performance Optimization",
      description:
        "Optimize your WordPress site for lightning-fast loading speeds, better SEO rankings, and enhanced user experience.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "WordPress Development",
      icon: <Globe />,
      services: [
        "Custom WordPress Themes",
        "Plugin Development",
        "WordPress Multisite Setup",
        "Custom Post Types & Fields",
        "WordPress REST API Integration",
      ],
    },
    {
      category: "E-commerce Solutions",
      icon: <Settings />,
      services: [
        "WooCommerce Development",
        "Custom Payment Gateways",
        "Product Catalog Management",
        "Shopping Cart Optimization",
        "Order Management Systems",
      ],
    },
    {
      category: "Maintenance & Support",
      icon: <Shield />,
      services: [
        "WordPress Security Hardening",
        "Regular Updates & Backups",
        "Performance Monitoring",
        "Bug Fixes & Troubleshooting",
        "24/7 Technical Support",
      ],
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your business needs and create a comprehensive WordPress development strategy.",
      icon: <Target />,
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Creating wireframes, mockups, and planning the WordPress architecture for optimal performance.",
      icon: <Palette />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your WordPress site with custom themes, plugins, and rigorous testing across devices.",
      icon: <Code />,
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Deploying your WordPress site and providing ongoing optimization and maintenance support.",
      icon: <Rocket />,
    },
  ]

  const techStack = {
    core: [
      { name: "WordPress", icon: "🌐", description: "Content management system" },
      { name: "PHP", icon: "🐘", description: "Server-side scripting" },
      { name: "MySQL", icon: "🐬", description: "Database management" },
      { name: "Apache", icon: "🪶", description: "Web server" },
      { name: "Nginx", icon: "🟢", description: "High-performance web server" },
      { name: "cPanel", icon: "🎛️", description: "Web hosting control panel" },
    ],
    frontend: [
      { name: "HTML5", icon: "🌐", description: "Semantic markup" },
      { name: "CSS3", icon: "🎨", description: "Modern styling" },
      { name: "JavaScript", icon: "⚡", description: "Dynamic interactions" },
      { name: "jQuery", icon: "💙", description: "JavaScript library" },
      { name: "Bootstrap", icon: "🅱️", description: "CSS framework" },
      { name: "Tailwind CSS", icon: "🌊", description: "Utility-first CSS" },
      { name: "SASS/SCSS", icon: "💗", description: "CSS preprocessor" },
      { name: "Gutenberg", icon: "🧱", description: "WordPress block editor" },
    ],
    themes: [
      { name: "Custom Themes", icon: "🎨", description: "Bespoke theme development" },
      { name: "Child Themes", icon: "👶", description: "Safe theme customization" },
      { name: "Responsive Design", icon: "📱", description: "Mobile-first approach" },
      { name: "Theme Customizer", icon: "⚙️", description: "Live customization" },
      { name: "Starter Themes", icon: "🚀", description: "Underscores, Sage" },
      { name: "Page Builders", icon: "🏗️", description: "Elementor, Divi, Beaver" },
    ],
    plugins: [
      { name: "WooCommerce", icon: "🛒", description: "E-commerce platform" },
      { name: "Yoast SEO", icon: "🔍", description: "SEO optimization" },
      { name: "Elementor", icon: "🎨", description: "Page builder" },
      { name: "Advanced Custom Fields", icon: "📝", description: "Custom fields" },
      { name: "Contact Form 7", icon: "📧", description: "Form builder" },
      { name: "WP Rocket", icon: "🚀", description: "Caching plugin" },
      { name: "Wordfence", icon: "🛡️", description: "Security plugin" },
      { name: "UpdraftPlus", icon: "☁️", description: "Backup solution" },
    ],
    development: [
      { name: "WordPress CLI", icon: "💻", description: "Command line interface" },
      { name: "Composer", icon: "🎼", description: "PHP dependency manager" },
      { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
      { name: "Webpack", icon: "📦", description: "Module bundler" },
      { name: "Gulp", icon: "🥤", description: "Task runner" },
      { name: "Local by Flywheel", icon: "🌪️", description: "Local development" },
      { name: "XAMPP", icon: "🔶", description: "Local server environment" },
      { name: "Docker", icon: "🐳", description: "Containerization" },
    ],
    hosting: [
      { name: "WP Engine", icon: "🏎️", description: "Managed WordPress hosting" },
      { name: "SiteGround", icon: "🌍", description: "WordPress hosting" },
      { name: "Bluehost", icon: "🔵", description: "Shared hosting" },
      { name: "Kinsta", icon: "⚡", description: "Premium hosting" },
      { name: "Cloudflare", icon: "☁️", description: "CDN & security" },
      { name: "AWS", icon: "☁️", description: "Cloud hosting" },
      { name: "DigitalOcean", icon: "🌊", description: "VPS hosting" },
      { name: "Netlify", icon: "🌐", description: "Headless WordPress" },
    ],
    security: [
      { name: "SSL Certificates", icon: "🔒", description: "HTTPS encryption" },
      { name: "Two-Factor Auth", icon: "🔐", description: "Enhanced security" },
      { name: "Firewall Protection", icon: "🛡️", description: "Security barrier" },
      { name: "Malware Scanning", icon: "🔍", description: "Threat detection" },
      { name: "Regular Backups", icon: "💾", description: "Data protection" },
      { name: "Security Headers", icon: "🛡️", description: "HTTP security" },
    ],
    seo: [
      { name: "Google Analytics", icon: "📊", description: "Website analytics" },
      { name: "Google Search Console", icon: "🔍", description: "Search optimization" },
      { name: "Schema Markup", icon: "🏷️", description: "Structured data" },
      { name: "XML Sitemaps", icon: "🗺️", description: "Site structure" },
      { name: "Meta Tags", icon: "🏷️", description: "Page metadata" },
      { name: "Open Graph", icon: "📱", description: "Social media optimization" },
    ],
    testing: [
      { name: "PHPUnit", icon: "🧪", description: "PHP testing framework" },
      { name: "WordPress Testing", icon: "✅", description: "WP unit tests" },
      { name: "Browser Testing", icon: "🌐", description: "Cross-browser testing" },
      { name: "Performance Testing", icon: "⚡", description: "Speed optimization" },
      { name: "Security Testing", icon: "🔒", description: "Vulnerability scanning" },
      { name: "Mobile Testing", icon: "📱", description: "Responsive testing" },
    ],
    version: [
      { name: "Git", icon: "📝", description: "Version control" },
      { name: "GitHub", icon: "🐙", description: "Code repository" },
      { name: "GitLab", icon: "🦊", description: "DevOps platform" },
      { name: "Bitbucket", icon: "🪣", description: "Git hosting" },
      { name: "WP Pusher", icon: "🚀", description: "Git deployment" },
    ],
  }


  const categoryTitles: Record<string, string> = {
  core: "🌐 WordPress Core Technologies",
  frontend: "🎨 Frontend Development",
  themes: "🎭 Theme Development",
  plugins: "🔌 Essential Plugins",
  development: "🛠️ Development Tools",
  hosting: "☁️ Hosting & Infrastructure",
  security: "🔒 Security & Protection",
  seo: "📈 SEO & Analytics",
  testing: "🧪 Testing & Quality Assurance",
  version: "📝 Version Control",
};



  const features = [
    "Lightning-fast WordPress performance",
    "Mobile-responsive design",
    "SEO-optimized architecture",
    "Secure coding practices",
    "Custom plugin development",
    "WooCommerce integration",
    "Multilingual support",
    "24/7 maintenance & support",
  ]


  
const leftSideFeatures = [
    {
      icon: <Zap />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed and search engines",
    },
    {
      icon: <Monitor/>,
      title: "Responsive Design",
      description: "Perfect on every device and screen size",
    },
    {
      icon: <Shield/>,
      title: "Secure & Reliable",
      description: "Built with security best practices",
    },
  ];


  


  return (
   <ServicesPageTemplate
      mainHeading="WordPress Development Services"
      subHeading="Transform Your Vision Into Reality With Powerful WordPress Websites"
      subtitle="We specialize in crafting fast, secure, and user-friendly WordPress websites that drive business growth and engage your audience."
      servicesMainHeading="Our Services"
      servicesSubHeading="Comprehensive WordPress development solutions designed to elevate your online presence."
      techStackDescription=" We use cutting-edge technologies to build robust and scalable web solutions."
      techStack={techStack}
      techStackCategory={categoryTitles}
      whyChooseUsDescription="We deliver exceptional WordPress experiences through expertise, innovation, and dedication."
      illustrationHeading="Expert WordPress Development Team"
      illustrationDescription="Our experienced WordPress developers combine technical expertise with creative problem-solving to deliver outstanding websites that drive business growth and user engagement."
      developmentProcessMainHeading="Our Development Process"
      developmentProcessDescription="A proven methodology that ensures successful WordPress project delivery from concept to launch."
      comprehensiveSolutionsDescription="From custom themes to e-commerce solutions, we cover every aspect of modern WordPress development."
      imageSectionLeftSideHeading="Crafting WordPress Experiences That Drive Results"
      imageSectionLeftSideDescription="Our team combines technical expertise with creative design to build WordPress websites that not only look stunning but also deliver exceptional performance and user engagement."
      services={services}
      imageSectionLeftSideFeatures={leftSideFeatures}
      imageSectionRightSideImage={WordPress}
      developmentProcess={developmentProcess}
      detailServices={detailedServices}
      features={features}
      finalCtaHeading="Ready to Build Your WordPress Website?"
      finalCtaDescription="Transform your ideas into powerful WordPress websites. Let's create something extraordinary together."
    />

  )
}
