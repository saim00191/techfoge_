
import {
  Palette,
  Zap,
  Rocket,
  Monitor,
  Target,
  Settings,
  Brush,
  TrendingUp,
} from "lucide-react"

import GraphicDesignImage from '@/images/graphic-design.png'
import ServicesPageTemplate from "./ServicesMain"


export default function GraphicDesignServices() {


  const services = [
    {
      icon: <Palette />,
      title: "Brand Identity Design",
      description:
        "Create compelling brand identities with custom logos, color palettes, typography, and visual guidelines that capture your brand's essence and resonate with your audience.",
      color: "#00D1FF",
    },
    {
      icon: <Monitor />,
      title: "Digital Design Solutions",
      description:
        "Design stunning digital assets including web graphics, social media content, digital advertisements, and user interface elements for modern digital experiences.",
      color: "#00D1FF",
    },
    {
      icon: <Brush />,
      title: "Print & Marketing Materials",
      description:
        "Develop professional print designs including brochures, business cards, posters, packaging, and marketing collateral that make lasting impressions.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "Brand & Identity",
      icon: <Palette />,
      services: [
        "Logo Design & Branding",
        "Brand Guidelines & Style Guides",
        "Corporate Identity Systems",
        "Brand Refresh & Redesign",
        "Visual Identity Development",
      ],
    },
    {
      category: "Digital Design",
      icon: <Monitor />,
      services: [
        "Web Design & UI/UX",
        "Social Media Graphics",
        "Digital Advertisements",
        "Email Template Design",
        "Mobile App Interface Design",
      ],
    },
    {
      category: "Print & Marketing",
      icon: <Brush />,
      services: [
        "Brochure & Flyer Design",
        "Business Card Design",
        "Packaging Design",
        "Poster & Banner Design",
        "Marketing Collateral",
      ],
    },
  ]

  const designProcess = [
    {
      step: "01",
      title: "Creative Brief",
      description:
        "We understand your vision, target audience, and design objectives to create a comprehensive creative strategy.",
      icon: <Target />,
    },
    {
      step: "02",
      title: "Concept Development",
      description:
        "Developing initial design concepts and mood boards that align with your brand identity and project goals.",
      icon: <Palette />,
    },
    {
      step: "03",
      title: "Design & Refinement",
      description:
        "Creating detailed designs with multiple iterations, incorporating feedback, and perfecting every visual element.",
      icon: <Settings />,
    },
    {
      step: "04",
      title: "Delivery & Support",
      description:
        "Finalizing designs with all necessary file formats and providing ongoing support for implementation and future needs.",
      icon: <Rocket />,
    },
  ]

  const features = [
    "Custom logo and brand design",
    "Responsive web design layouts",
    "High-resolution print materials",
    "Complete brand style guides",
    "Multi-format file delivery",
    "Unlimited design revisions",
    "Fast turnaround times",
    "Ongoing design support",
  ]


    const leftSideFeatures = [
    {
      icon: <Zap />,
      title: "Creative Excellence",
      description: "Award-winning design solutions",
    },
    {
      icon: <Palette/>,
      title: "Brand Consistency",
      description: "Cohesive visual identity systems",
    },
    {
      icon: <TrendingUp />,
      title: "Results-Driven Design",
      description: "Designs that convert and engage",
    },
  ];



  const categoryTitles: Record<string, string> = {
  adobe: "🎨 Adobe Creative Suite",
  design: "🛠️ Design & Prototyping",
  graphics: "🎬 3D & Motion Graphics",
  color: "🔤 Typography & Color",
  stock: "📚 Stock & Resources",

};

const techStack = {
    adobe:[
                  { name: "Photoshop", icon: "🖼️", description: "Photo editing & manipulation" },
                  { name: "Illustrator", icon: "✏️", description: "Vector graphics design" },
                  { name: "InDesign", icon: "📄", description: "Layout & publishing" },
                  { name: "After Effects", icon: "🎬", description: "Motion graphics & animation" },
                  { name: "Premiere Pro", icon: "🎥", description: "Video editing" },
                  { name: "XD", icon: "🎯", description: "UI/UX design" },
                  { name: "Lightroom", icon: "📸", description: "Photo enhancement" },
                  { name: "Dimension", icon: "📦", description: "3D design & rendering" },
                ],
    design: [
                  { name: "Figma", icon: "🎨", description: "Collaborative design" },
                  { name: "Sketch", icon: "💎", description: "Digital design toolkit" },
                  { name: "Canva", icon: "🌈", description: "Easy design platform" },
                  { name: "InVision", icon: "👁️", description: "Design prototyping" },
                  { name: "Framer", icon: "🖼️", description: "Interactive design" },
                  { name: "Principle", icon: "⚡", description: "Animation design" },
                  { name: "Marvel", icon: "🦸", description: "Design & prototyping" },
                  { name: "Zeplin", icon: "📐", description: "Design handoff" },
                ],
    graphics:[
                  { name: "Cinema 4D", icon: "🎭", description: "3D modeling & animation" },
                  { name: "Blender", icon: "🌀", description: "Open-source 3D suite" },
                  { name: "Maya", icon: "🏛️", description: "3D animation software" },
                  { name: "3ds Max", icon: "📐", description: "3D modeling & rendering" },
                  { name: "KeyShot", icon: "🔑", description: "3D rendering" },
                  { name: "Lottie", icon: "🎪", description: "Animation library" },
                  { name: "Rive", icon: "🌊", description: "Interactive animations" },
                  { name: "Hype", icon: "⚡", description: "HTML5 animations" },
                ],
    color: [
                  { name: "Google Fonts", icon: "🔤", description: "Web font library" },
                  { name: "Adobe Fonts", icon: "📝", description: "Premium font collection" },
                  { name: "Font Awesome", icon: "⭐", description: "Icon font library" },
                  { name: "Coolors", icon: "🎨", description: "Color palette generator" },
                  { name: "Adobe Color", icon: "🌈", description: "Color wheel tool" },
                  { name: "Pantone", icon: "🎯", description: "Color matching system" },
                  { name: "ColorHunt", icon: "🎪", description: "Color palette inspiration" },
                  { name: "Contrast Checker", icon: "👁️", description: "Accessibility testing" },
                ],
    stock: [
                  { name: "Shutterstock", icon: "📷", description: "Stock photography" },
                  { name: "Unsplash", icon: "🌅", description: "Free high-quality photos" },
                  { name: "Getty Images", icon: "🖼️", description: "Premium stock media" },
                  { name: "Freepik", icon: "🎁", description: "Free design resources" },
                  { name: "Dribbble", icon: "🏀", description: "Design inspiration" },
                  { name: "Behance", icon: "🎨", description: "Creative portfolios" },
                  { name: "Pinterest", icon: "📌", description: "Visual discovery" },
                  { name: "Awwwards", icon: "🏆", description: "Design awards & inspiration" },
                ],
   
  }


  return (
    <ServicesPageTemplate
      mainHeading="Graphic Design Services & Solutions"
      subHeading="Transform Your Brand With Stunning Visual Designs That Captivate & Convert"
      subtitle="We specialize in creating compelling visual identities, stunning digital designs, and impactful marketing materials that elevate your brand and engage your audience across all platforms."
      servicesMainHeading="Our Design Services"
      servicesSubHeading="Comprehensive graphic design solutions that bring your vision to life and elevate your brand presence."
      techStackDescription=" We use cutting-edge technologies to build robust and scalable web solutions."
      techStack={techStack}
      techStackCategory={categoryTitles}
      whyChooseUsDescription="We deliver exceptional design experiences through creativity, expertise, and unwavering commitment to excellence."
      illustrationHeading="Expert E-commerce Development Team"
      developmentProcessMainHeading="Our Design Process"
      developmentProcessDescription="A collaborative approach that ensures exceptional design outcomes from initial concept to final delivery."
      illustrationDescription="Our experienced e-commerce developers combine technical expertise with business acumen to deliver outstanding online stores that drive sales, enhance customer experience, and scale with your business growth."
      comprehensiveSolutionsDescription="From brand identity to digital marketing, we cover every aspect of modern graphic design needs."
      imageSectionLeftSideHeading="Creating Visual Stories That Inspire Action & Build Lasting Connections"
      imageSectionLeftSideDescription="Our design team crafts compelling visual narratives that capture attention, communicate your message effectively, and create emotional connections with your audience across all touchpoints and platforms."
      services={services}
      imageSectionLeftSideFeatures={leftSideFeatures}
      imageSectionRightSideImage={GraphicDesignImage}
      developmentProcess={designProcess}
      detailServices={detailedServices}
      features={features}
      finalCtaHeading="Ready to Transform Your Brand?"
      finalCtaDescription="Let's create stunning visual designs that elevate your brand, engage your audience, and drive meaningful results for your business."
    />
  )
}
