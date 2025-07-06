
import { Search, Zap,  Rocket, Target, Settings, TrendingUp, BarChart3 } from 'lucide-react'
import SEO from '@/images/seo.png'
import ServicesPageTemplate from './ServicesMain'



export default function SEOOptimization() {

  const services = [
    {
      icon: <Search />,
      title: "Technical SEO Optimization",
      description:
        "Optimize your website's technical foundation with Core Web Vitals, site speed, mobile-first indexing, and crawlability improvements for better search rankings.",
      color: "#00D1FF",
    },
    {
      icon: <BarChart3 />,
      title: "Keyword Research & Strategy",
      description:
        "Comprehensive keyword research and content strategy to target high-value search terms and drive qualified organic traffic to your website.",
      color: "#00D1FF",
    },
    {
      icon: <TrendingUp />,
      title: "Content & Link Building",
      description:
        "Create high-quality content and build authoritative backlinks to improve domain authority and search engine rankings across all major search engines.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "Technical SEO",
      icon: <Settings />,
      services: [
        "Core Web Vitals Optimization",
        "Site Speed & Performance",
        "Mobile-First Optimization",
        "Schema Markup Implementation",
        "XML Sitemap Generation",
      ],
    },
    {
      category: "Content Strategy",
      icon: <BarChart3 />,
      services: [
        "Keyword Research & Analysis",
        "Content Gap Analysis",
        "SEO Content Creation",
        "Content Optimization",
        "Competitor Content Analysis",
      ],
    },
    {
      category: "Link Building & Authority",
      icon: <TrendingUp />,
      services: [
        "High-Quality Backlink Acquisition",
        "Digital PR & Outreach",
        "Local SEO & Citations",
        "Internal Link Optimization",
        "Brand Mention Monitoring",
      ],
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description:
        "Comprehensive website audit to identify technical issues, content gaps, and optimization opportunities.",
      icon: <Target />,
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Creating data-driven SEO strategy with keyword research, competitor analysis, and content planning.",
      icon: <BarChart3 />,
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description:
        "Executing technical fixes, content optimization, and link building campaigns for improved rankings.",
      icon: <Settings />,
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description: "Continuous monitoring, performance tracking, and detailed reporting with actionable insights.",
      icon: <Rocket />,
    },
  ]

  const features = [
    "Comprehensive SEO audits and analysis",
    "Technical SEO optimization",
    "Keyword research and strategy",
    "Content optimization and creation",
    "Link building and digital PR",
    "Local SEO and Google My Business",
    "Performance monitoring and reporting",
    "24/7 SEO support and consultation",
  ]


     const leftSideFeatures = [
    {
      icon: <Zap />,
      title: "Technical SEO Excellence",
      description: "Core Web Vitals and performance optimization",
    },
    {
      icon: <BarChart3/>,
      title: "Data-Driven Strategy",
      description: "Keyword research and competitor analysis",
    },
    {
      icon: <TrendingUp/>,
      title: "Sustainable Growth",
      description: "Long-term SEO strategies that last",
    },
  ];



   const categoryTitles: Record<string, string> = {
  seo: "🔍 SEO Analysis Tools",
  analytics: "📊 Analytics & Tracking",
  keywords: "🔑 Keyword Research Tools",
  technical: "⚡ Technical SEO Tools",
  content: "📝 Content Optimization",
  link: "🔗 Link Building & Outreach",

};

const techStack = {
    seo:[
                  { name: "Google Search Console", icon: "🔍", description: "Google's official SEO tool" },
                  { name: "SEMrush", icon: "📊", description: "All-in-one SEO platform" },
                  { name: "Ahrefs", icon: "🔗", description: "Backlink & keyword research" },
                  { name: "Moz Pro", icon: "🦎", description: "SEO software suite" },
                  { name: "Screaming Frog", icon: "🐸", description: "Website crawler" },
                  { name: "Sitebulb", icon: "💡", description: "Technical SEO auditing" },
                  { name: "DeepCrawl", icon: "🕷️", description: "Enterprise SEO platform" },
                  { name: "Botify", icon: "🤖", description: "Enterprise SEO platform" },
                ],
    analytics: [
                  { name: "Google Analytics 4", icon: "📈", description: "Web analytics platform" },
                  { name: "Google Tag Manager", icon: "🏷️", description: "Tag management system" },
                  { name: "Adobe Analytics", icon: "🎨", description: "Enterprise analytics" },
                  { name: "Hotjar", icon: "🔥", description: "User behavior analytics" },
                  { name: "Mixpanel", icon: "📊", description: "Product analytics" },
                  { name: "Amplitude", icon: "📈", description: "Digital analytics" },
                  { name: "Segment", icon: "🔗", description: "Customer data platform" },
                  { name: "Matomo", icon: "📊", description: "Privacy-focused analytics" },
                ],
    keywords:[
                  { name: "Google Keyword Planner", icon: "🔍", description: "Google's keyword tool" },
                  { name: "Ubersuggest", icon: "💡", description: "Keyword research tool" },
                  { name: "KeywordTool.io", icon: "🔧", description: "Keyword suggestions" },
                  { name: "AnswerThePublic", icon: "❓", description: "Question-based keywords" },
                  { name: "KWFinder", icon: "🔍", description: "Long-tail keyword tool" },
                  { name: "Serpstat", icon: "🐍", description: "SEO & PPC platform" },
                  { name: "SpyFu", icon: "🕵️", description: "Competitor keyword research" },
                  { name: "WordStream", icon: "💬", description: "Keyword research tool" },
                ],
    technical: [
                  { name: "Google PageSpeed Insights", icon: "⚡", description: "Page speed analysis" },
                  { name: "GTmetrix", icon: "📊", description: "Website performance" },
                  { name: "WebPageTest", icon: "🧪", description: "Performance testing" },
                  { name: "Lighthouse", icon: "💡", description: "Web performance auditing" },
                  { name: "Core Web Vitals", icon: "⚡", description: "User experience metrics" },
                  { name: "Mobile-Friendly Test", icon: "📱", description: "Mobile optimization" },
                  { name: "Rich Results Test", icon: "🎯", description: "Structured data testing" },
                  { name: "Security Headers", icon: "🔒", description: "Security analysis" },
                ],
    content: [
                  { name: "Shutterstock", icon: "📷", description: "Stock photography" },
                  { name: "Unsplash", icon: "🌅", description: "Free high-quality photos" },
                  { name: "Getty Images", icon: "🖼️", description: "Premium stock media" },
                  { name: "Freepik", icon: "🎁", description: "Free design resources" },
                  { name: "Dribbble", icon: "🏀", description: "Design inspiration" },
                  { name: "Behance", icon: "🎨", description: "Creative portfolios" },
                  { name: "Pinterest", icon: "📌", description: "Visual discovery" },
                  { name: "Awwwards", icon: "🏆", description: "Design awards & inspiration" },
                ],
    link:[
                  { name: "HARO", icon: "📰", description: "Help a Reporter Out" },
                  { name: "Pitchbox", icon: "📧", description: "Outreach platform" },
                  { name: "BuzzStream", icon: "📢", description: "Link building CRM" },
                  { name: "NinjaOutreach", icon: "🥷", description: "Influencer outreach" },
                  { name: "Respona", icon: "📬", description: "Link building tool" },
                  { name: "LinkResearchTools", icon: "🔗", description: "Link analysis" },
                  { name: "Majestic", icon: "👑", description: "Link intelligence" },
                  { name: "Monitor Backlinks", icon: "👀", description: "Backlink monitoring" },
                ],
   
  }



  return (
 <ServicesPageTemplate
      mainHeading="SEO Optimization & Digital Marketing"
      subHeading="Dominate Search Rankings With Data-Driven SEO Strategies That Drive Organic Growth"
      subtitle="We specialize in comprehensive SEO optimization, technical audits, content strategy, and link building to boost your search rankings and drive qualified organic traffic."
      servicesMainHeading="Our Services"
      servicesSubHeading="Comprehensive SEO solutions designed to improve your search rankings and drive organic growth."
      techStackDescription=" We use cutting-edge technologies to build robust and scalable web solutions."
      techStackCategory={categoryTitles}
      techStack={techStack}
      whyChooseUsDescription="We deliver exceptional SEO results through data-driven strategies, technical expertise, and proven methodologies."
      illustrationHeading="Expert SEO Specialists"
      illustrationDescription="Our experienced SEO specialists combine technical expertise with strategic thinking to deliver outstanding search optimization results that drive organic traffic, improve rankings, and grow your business."
      developmentProcessMainHeading="Our SEO Process"
      developmentProcessDescription="A proven methodology that ensures successful SEO optimization from audit to ongoing growth."
      comprehensiveSolutionsDescription="From technical optimization to content strategy, we cover every aspect of modern SEO."
      imageSectionLeftSideHeading="Crafting SEO Strategies That Dominate Search Results"
      imageSectionLeftSideDescription="Our team combines technical SEO expertise with content strategy and data analysis to build comprehensive optimization campaigns that not only improve rankings but also drive qualified organic traffic and business growth."
      services={services}
      imageSectionLeftSideFeatures={leftSideFeatures}
      imageSectionRightSideImage={SEO}
      developmentProcess={developmentProcess}
      detailServices={detailedServices}
      features={features}
      finalCtaHeading="Ready to Dominate Search Rankings?"
      finalCtaDescription="Transform your online visibility with data-driven SEO strategies. Let's boost your search rankings and drive qualified organic traffic to your website."
    />

  )
}
