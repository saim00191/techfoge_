
import {
  Smartphone,
  Zap,
  Rocket,
  Target,
  Database,
  Shield,
  Tablet,
  Globe,
} from "lucide-react"
import MobileAppDevelopmentImg from '@/images/app-development.png'
import ServicesPageTemplate from "./ServicesMain"

export default function MobileAppDevelopment() {


  const services = [
    {
      icon: <Smartphone />,
      title: "Native Mobile App Development",
      description:
        "Build high-performance native apps for iOS and Android with platform-specific features and optimal user experience.",
      color: "#00D1FF",
    },
    {
      icon: <Globe />,
      title: "Cross-Platform Development",
      description:
        "Create apps that work seamlessly on both iOS and Android with a single codebase for faster delivery.",
      color: "#00D1FF",
    },
    {
      icon: <Zap />,
      title: "Performance Optimization",
      description:
        "Optimize your mobile apps for lightning-fast performance, smooth animations, and efficient battery usage.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "Native iOS & Android",
      icon: <Smartphone />,
      services: [
        "Native iOS Apps (Swift/SwiftUI)",
        "Native Android Apps (Kotlin/Jetpack Compose)",
        "Platform-specific UI/UX Design",
        "App Store Optimization",
        "Device-specific Features Integration",
      ],
    },
    {
      category: "Cross-Platform Solutions",
      icon: <Globe />,
      services: [
        "React Native Applications",
        "Flutter Development",
        "Ionic Framework Apps",
        "Xamarin Applications",
        "Single Codebase Maintenance",
      ],
    },
    {
      category: "Backend & Cloud Services",
      icon: <Database />,
      services: [
        "Mobile API Development",
        "Real-time Data Synchronization",
        "Push Notifications",
        "Cloud Storage Integration",
        "Authentication Systems",
      ],
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "App Strategy & Planning",
      description: "We analyze your requirements and create a comprehensive mobile app strategy and roadmap.",
      icon: <Target />,
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating intuitive and engaging mobile interfaces optimized for touch interactions.",
      icon: <Tablet />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your mobile app with rigorous testing across multiple devices and platforms.",
      icon: <Smartphone />,
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "App store submission, launch support, and ongoing maintenance with regular updates.",
      icon: <Rocket />,
    },
  ]

  const techStack = {

    android: [
        { name: "Kotlin", icon: "🎯", description: "Modern Android language" },
        { name: "Java", icon: "☕", description: "Traditional Android dev" },
        { name: "Android Studio", icon: "🤖", description: "Official Android IDE" },
        { name: "Android SDK", icon: "📱", description: "Android development kit" },
        { name: "Jetpack Compose", icon: "🧩", description: "Modern Android UI" },
      ],
      ios: [
        { name: "Swift", icon: "🍎", description: "Modern iOS language" },
        { name: "Objective-C", icon: "📱", description: "Traditional iOS dev" },
        { name: "Xcode", icon: "🔨", description: "Official iOS IDE" },
        { name: "iOS SDK", icon: "📲", description: "iOS development kit" },
        { name: "SwiftUI", icon: "🎨", description: "Modern iOS UI framework" },
      ],
    crossPlatform: [
      { name: "React Native", icon: "⚛️", description: "JavaScript cross-platform" },
      { name: "Flutter", icon: "🎪", description: "Dart cross-platform" },
      { name: "Ionic", icon: "⚡", description: "Web-based mobile apps" },
      { name: "Xamarin", icon: "🔷", description: "C# cross-platform" },
      { name: "NativeScript", icon: "📱", description: "JavaScript native apps" },
      { name: "Expo", icon: "🚀", description: "React Native toolkit" },
    ],
    hybrid: [
      { name: "HTML", icon: "🌐", description: "Markup language" },
      { name: "CSS", icon: "🎨", description: "Styling language" },
      { name: "JavaScript", icon: "⚡", description: "Programming language" },
      { name: "Ionic", icon: "⚡", description: "Hybrid app framework" },
      { name: "Cordova", icon: "📱", description: "Mobile app platform" },
      { name: "Capacitor", icon: "🔋", description: "Native bridge" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
      { name: "Express.js", icon: "🚀", description: "Web framework" },
      { name: "Firebase", icon: "🔥", description: "Google mobile platform" },
      { name: "Django", icon: "🐍", description: "Python framework" },
      { name: "Flask", icon: "🌶️", description: "Python micro framework" },
      { name: "Ruby on Rails", icon: "💎", description: "Ruby framework" },
      { name: "Laravel", icon: "🎭", description: "PHP framework" },
      { name: "Supabase", icon: "⚡", description: "Open source Firebase" },
    ],
    databases: [
      { name: "SQLite", icon: "📦", description: "Local mobile database" },
      { name: "Realm", icon: "🏰", description: "Mobile database" },
      { name: "Firebase Firestore", icon: "🔥", description: "Cloud database" },
      { name: "MongoDB Atlas", icon: "🍃", description: "Cloud MongoDB" },
      { name: "Core Data", icon: "🍎", description: "iOS data framework" },
      { name: "Room DB", icon: "🤖", description: "Android database" },
    ],
    auth: [
      { name: "Firebase Auth", icon: "🔥", description: "Google authentication" },
      { name: "OAuth 2.0", icon: "🔐", description: "Authorization framework" },
      { name: "Auth0", icon: "🛡️", description: "Identity platform" },
      { name: "JWT", icon: "🎫", description: "JSON Web Tokens" },
      { name: "Apple Sign-In", icon: "🍎", description: "Apple authentication" },
      { name: "Google Sign-In", icon: "🔍", description: "Google authentication" },
    ],
    testing: [
      { name: "Jest", icon: "🃏", description: "React Native testing" },
      { name: "Espresso", icon: "☕", description: "Android UI testing" },
      { name: "XCTest", icon: "🍎", description: "iOS testing framework" },
      { name: "Detox", icon: "🧪", description: "E2E mobile testing" },
      { name: "Appium", icon: "📱", description: "Mobile automation" },
      { name: "Selenium", icon: "🕷️", description: "Web automation" },
    ],
    cicd: [
      { name: "Git", icon: "📝", description: "Version control" },
      { name: "GitHub", icon: "🐙", description: "Code hosting" },
      { name: "GitLab", icon: "🦊", description: "DevOps platform" },
      { name: "Bitbucket", icon: "🪣", description: "Atlassian Git" },
      { name: "Fastlane", icon: "🏎️", description: "iOS/Android automation" },
      { name: "Codemagic", icon: "🎩", description: "Flutter CI/CD" },
      { name: "Firebase App Distribution", icon: "🔥", description: "App distribution" },
    ],
  }


    const categoryTitles: Record<string, string> = {
  android: "🟦 Android Development",
  ios: "🍎 iOS Development",
  crossPlatform: "🔁 Cross-Platform App Development",
  hybrid: "🌐 Hybrid Mobile Apps",
  backend: "☁️ Backend for Mobile Apps",
  databases: "☁️ Databases for Mobile Apps",
  auth: "🔐 Authentication",
  testing: "🧪 Testing Tools",
  cicd: "🧰 Version Control & CI/CD",

};

  const features = [
    "Native performance optimization",
    "Cross-platform compatibility",
    "Intuitive user interface design",
    "Secure authentication systems",
    "Real-time data synchronization",
    "Push notification integration",
    "App store optimization",
    "Offline functionality support",
  ]

      const leftSideFeatures = [
    {
      icon: <Zap />,
      title: "Native Performance",
      description: "Optimized for each platform's capabilities",
    },
    {
      icon: <Smartphone/>,
      title: "Intuitive User Interface",
      description: "Designed for optimal user experience",
    },
    {
      icon: <Shield/>,
      title: "Secure & Reliable",
      description: "Built with security and reliability in mind",
    },
  ];


  return (
    <ServicesPageTemplate
      mainHeading="Mobile App Development Services"
      subHeading="Transform Your Vision Into Reality With Powerful Mobile Applications"
      subtitle="We specialize in crafting fast, secure, and user-friendly mobile applications for iOS and Android platforms."
      servicesMainHeading="Our Services"
      servicesSubHeading="Comprehensive mobile app development solutions designed to bring your ideas to life."
      techStackDescription=" We use cutting-edge technologies to build robust and scalable web solutions."
      techStackCategory={categoryTitles}
      techStack={techStack}
      whyChooseUsDescription="We deliver exceptional mobile experiences through expertise, innovation, and dedication."
      illustrationHeading="Expert Mobile Development Team"
      developmentProcessMainHeading="Our Development Process"
      developmentProcessDescription="A proven methodology that ensures successful mobile app delivery from concept to app store."
      illustrationDescription="Our experienced mobile developers combine technical expertise with creative problem-solving to deliver outstanding mobile applications that drive user engagement and business growth."
      comprehensiveSolutionsDescription="From native apps to cross-platform solutions, we cover every aspect of modern mobile development."
      imageSectionLeftSideHeading="Crafting Mobile Experiences That Engage Users"
      imageSectionLeftSideDescription="Our team combines technical expertise with user-centered design to build mobile applications that not only look stunning but also deliver exceptional performance and user engagement."
      services={services}
      imageSectionLeftSideFeatures={leftSideFeatures}
      imageSectionRightSideImage={MobileAppDevelopmentImg}
      developmentProcess={developmentProcess}
      detailServices={detailedServices}
      features={features}
      finalCtaHeading="Ready to Build Your Mobile App?"
      finalCtaDescription="Transform your ideas into powerful mobile applications. Let's create something extraordinary together."
    />

  )
}
