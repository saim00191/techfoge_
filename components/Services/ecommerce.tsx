
import {
  ShoppingCart,
  Zap,
  Rocket,
  Monitor,
  Target,
  Settings,
  CreditCard,
  TrendingUp,
} from "lucide-react"

import Ecommerce from '@/images/ecommerce.png'
import ServicesPageTemplate from "./ServicesMain"

export default function EcommerceSolutions() {

  const services = [
    {
      icon: <ShoppingCart />,
      title: "Custom E-commerce Development",
      description:
        "Build high-performance online stores with custom features, seamless user experience, and scalable architecture tailored to your business needs.",
      color: "#00D1FF",
    },
    {
      icon: <CreditCard />,
      title: "Payment Gateway Integration",
      description:
        "Integrate secure payment solutions with multiple gateways, fraud protection, and seamless checkout experiences for global customers.",
      color: "#00D1FF",
    },
    {
      icon: <TrendingUp />,
      title: "E-commerce Optimization",
      description:
        "Optimize your online store for conversions, performance, and search engines to maximize sales and customer satisfaction.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "E-commerce Platforms",
      icon: <ShoppingCart />,
      services: [
        "Shopify Store Development",
        "WooCommerce Solutions",
        "Magento Development",
        "Custom E-commerce Platforms",
        "Headless Commerce Solutions",
      ],
    },
    {
      category: "Payment & Security",
      icon: <CreditCard />,
      services: [
        "Payment Gateway Integration",
        "PCI Compliance Setup",
        "SSL Certificate Installation",
        "Fraud Detection Systems",
        "Secure Checkout Process",
      ],
    },
    {
      category: "Marketing & Analytics",
      icon: <TrendingUp />,
      services: [
        "Conversion Rate Optimization",
        "SEO for E-commerce",
        "Email Marketing Integration",
        "Analytics & Reporting",
        "Social Media Integration",
      ],
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Business Analysis",
      description: "We analyze your business model, target audience, and create a comprehensive e-commerce strategy.",
      icon: <Target />,
    },
    {
      step: "02",
      title: "Platform Selection",
      description:
        "Choosing the right e-commerce platform and designing user-friendly interfaces for optimal conversions.",
      icon: <Monitor />,
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "Building your e-commerce store with payment gateways, inventory management, and third-party integrations.",
      icon: <Settings />,
    },
    {
      step: "04",
      title: "Launch & Growth",
      description:
        "Launching your store and providing ongoing optimization, marketing support, and performance monitoring.",
      icon: <Rocket />,
    },
  ]

  const features = [
    "High-converting checkout process",
    "Mobile-responsive design",
    "Secure payment processing",
    "Inventory management system",
    "Multi-currency support",
    "SEO-optimized product pages",
    "Real-time analytics dashboard",
    "24/7 technical support",
  ]


  const leftSideFeatures = [
    {
      icon: <Zap />,
      title: "High-Converting Checkout",
      description: "Optimized for maximum conversion rates",
    },
    {
      icon: <CreditCard />,
      title: "Secure Payment Processing",
      description: "PCI compliant and fraud protected",
    },
    {
      icon: <TrendingUp />,
      title: "Sales Analytics",
      description: "Real-time insights and reporting",
    },
  ];



  
  const categoryTitles: Record<string, string> = {
  ecommerce: "🛍️ E-commerce Platforms",
  payment: "💳 Payment Gateways",
  frontend: "🎨 Frontend Technologies",
  backend: "⚙️ Backend Development",
  analytics: "📊 Analytics & Marketing",

};

const techStack = {
    ecommerce:[
                  { name: "Shopify", icon: "🛍️", description: "Leading e-commerce platform" },
                  { name: "WooCommerce", icon: "🛒", description: "WordPress e-commerce" },
                  { name: "Magento", icon: "🏪", description: "Enterprise e-commerce" },
                  { name: "BigCommerce", icon: "🏬", description: "SaaS e-commerce platform" },
                  { name: "PrestaShop", icon: "🛍️", description: "Open-source e-commerce" },
                  { name: "OpenCart", icon: "🛒", description: "PHP e-commerce solution" },
                  { name: "Salesforce Commerce", icon: "☁️", description: "Enterprise commerce cloud" },
                  { name: "Squarespace Commerce", icon: "⬜", description: "All-in-one platform" },
                ],
    payment: [
                  { name: "Stripe", icon: "💳", description: "Payment processing" },
                  { name: "PayPal", icon: "💰", description: "Digital payments" },
                  { name: "Square", icon: "⬜", description: "Payment solutions" },
                  { name: "Razorpay", icon: "⚡", description: "Indian payment gateway" },
                  { name: "Braintree", icon: "🧠", description: "PayPal service" },
                  { name: "Authorize.Net", icon: "🔐", description: "Payment gateway" },
                  { name: "Klarna", icon: "🛍️", description: "Buy now, pay later" },
                  { name: "Apple Pay", icon: "🍎", description: "Mobile payments" },
                  { name: "Google Pay", icon: "🔍", description: "Digital wallet" },
                  { name: "Amazon Pay", icon: "📦", description: "Amazon payment service" },
                ],
    frontend: [
                  { name: "React.js", icon: "⚛️", description: "Component-based UI" },
                  { name: "Next.js", icon: "▲", description: "React framework" },
                  { name: "Vue.js", icon: "💚", description: "Progressive framework" },
                  { name: "Angular", icon: "🅰️", description: "Enterprise frontend" },
                  { name: "Nuxt.js", icon: "💚", description: "Vue.js framework" },
                  { name: "Gatsby", icon: "🚀", description: "Static site generator" },
                  { name: "Svelte", icon: "🔥", description: "Compile-time framework" },
                  { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript" },
                ],
    backend: [
                  { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
                  { name: "Express.js", icon: "���", description: "Web framework" },
                  { name: "PHP", icon: "🐘", description: "Server-side scripting" },
                  { name: "Laravel", icon: "🎭", description: "PHP framework" },
                  { name: "Django", icon: "🐍", description: "Python framework" },
                  { name: "Ruby on Rails", icon: "💎", description: "Ruby framework" },
                  { name: "ASP.NET", icon: "🔷", description: "Microsoft framework" },
                  { name: "Spring Boot", icon: "🍃", description: "Java framework" },
                ],
    analytics: [
                  { name: "Google Analytics", icon: "📊", description: "Web analytics" },
                  { name: "Google Tag Manager", icon: "🏷️", description: "Tag management" },
                  { name: "Facebook Pixel", icon: "📘", description: "Social analytics" },
                  { name: "Hotjar", icon: "🔥", description: "User behavior analytics" },
                  { name: "Mailchimp", icon: "🐵", description: "Email marketing" },
                  { name: "Klaviyo", icon: "📧", description: "E-commerce email" },
                  { name: "HubSpot", icon: "🧡", description: "Marketing automation" },
                  { name: "Salesforce Marketing", icon: "☁️", description: "Marketing cloud" },
                ],
   
  }

  return (
     <ServicesPageTemplate
      mainHeading="E-Commerce Solutions & Development"
      subHeading="Transform Your Business With Powerful E-commerce Platforms That Drive Sales"
      subtitle="We specialize in building high-converting online stores with secure payments, seamless user experience, and scalable architecture that grows with your business."
      servicesMainHeading="Our Services"
      servicesSubHeading="Comprehensive e-commerce solutions designed to maximize your online sales and customer satisfaction."
      techStackDescription=" We use cutting-edge technologies to build robust and scalable web solutions."
      techStackCategory={categoryTitles}
      techStack={techStack}
      whyChooseUsDescription="We deliver exceptional e-commerce experiences through expertise, innovation, and dedication."
      illustrationHeading="Expert E-commerce Development Team"
      developmentProcessMainHeading="Our Development Process"
      developmentProcessDescription="A proven methodology that ensures successful e-commerce project delivery from concept to launch."
      illustrationDescription="Our experienced e-commerce developers combine technical expertise with business acumen to deliver outstanding online stores that drive sales, enhance customer experience, and scale with your business growth."
      comprehensiveSolutionsDescription="From platform development to marketing automation, we cover every aspect of modern e-commerce."
      imageSectionLeftSideHeading="Crafting E-commerce Experiences That Convert Visitors Into Customers"
      imageSectionLeftSideDescription="Our team combines technical expertise with conversion optimization to build e-commerce platforms that not only look stunning but also deliver exceptional performance, user experience, and sales results."
      services={services}
      imageSectionLeftSideFeatures={leftSideFeatures}
      imageSectionRightSideImage={Ecommerce}
      developmentProcess={developmentProcess}
      detailServices={detailedServices}
      features={features}
      finalCtaHeading="Ready to Launch Your Online Store?"
      finalCtaDescription="Transform your business with powerful e-commerce solutions. Let's create an online store that drives sales and grows your business."
    />
   
  )
}
