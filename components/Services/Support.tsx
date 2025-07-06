
import {
  Headphones,
  Zap,
  Rocket,
  Monitor,
  Target,
  Settings,
  Wrench,
  TrendingUp,
} from "lucide-react"

import SupportImage from '@/images/technical-support.png'
import ServicesPageTemplate from "./ServicesMain"

export default function TechnicalSupportServices() {
 
  const services = [
    {
      icon: <Headphones />,
      title: "24/7 Help Desk Support",
      description:
        "Round-the-clock technical assistance with multi-channel support including phone, email, chat, and remote desktop to resolve your IT issues quickly and efficiently.",
      color: "#00D1FF",
    },
    {
      icon: <Wrench />,
      title: "System Maintenance & Monitoring",
      description:
        "Proactive system monitoring, preventive maintenance, and performance optimization to ensure your IT infrastructure runs smoothly and efficiently.",
      color: "#00D1FF",
    },
    {
      icon: <Monitor />,
      title: "Network & Infrastructure Support",
      description:
        "Comprehensive network management, server administration, and infrastructure support to maintain optimal performance and security of your IT environment.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "Help Desk Services",
      icon: <Headphones />,
      services: [
        "24/7 Technical Support",
        "Multi-Channel Support (Phone/Email/Chat)",
        "Remote Desktop Assistance",
        "Incident Management",
        "User Account Management",
      ],
    },
    {
      category: "System Administration",
      icon: <Wrench />,
      services: [
        "Server Management & Maintenance",
        "System Monitoring & Alerts",
        "Software Installation & Updates",
        "Backup & Recovery Solutions",
        "Performance Optimization",
      ],
    },
    {
      category: "Network Support",
      icon: <Settings />,
      services: [
        "Network Configuration & Setup",
        "Firewall Management",
        "VPN Setup & Support",
        "Network Security Monitoring",
        "Bandwidth Optimization",
      ],
    },
  ]

  const supportProcess = [
    {
      step: "01",
      title: "Issue Identification",
      description:
        "We quickly identify and categorize technical issues through our advanced ticketing system and diagnostic tools.",
      icon: <Target />,
    },
    {
      step: "02",
      title: "Rapid Response",
      description:
        "Our certified technicians provide immediate response with remote access tools and comprehensive troubleshooting.",
      icon: <Headphones />,
    },
    {
      step: "03",
      title: "Problem Resolution",
      description:
        "Systematic problem-solving using proven methodologies, documentation, and escalation procedures when needed.",
      icon: <Settings />,
    },
    {
      step: "04",
      title: "Follow-up & Prevention",
      description:
        "Post-resolution follow-up, documentation updates, and preventive measures to avoid future occurrences.",
      icon: <Rocket />,
    },
  ]

  const features = [
    "24/7 technical support availability",
    "Multi-channel support options",
    "Remote desktop assistance",
    "Proactive system monitoring",
    "Rapid response times (SLA)",
    "Certified technical experts",
    "Comprehensive documentation",
    "Escalation management system",
  ]

 const leftSideFeatures = [
    {
      icon: <Zap />,
      title: "Rapid Response",
      description: "Quick issue identification & resolution",
    },
    {
      icon: <Wrench/>,
      title: "Proactive Maintenance",
      description: "Preventive care & system optimization",
    },
    {
      icon: <TrendingUp/>,
      title: "Performance Monitoring",
      description: "Continuous system health tracking",
    },
  ];


   const categoryTitles: Record<string, string> = {
  help: "🎧 Help Desk Software",
  remote: "🖥️ Remote Support Tools",
  monitoring: "📊 Monitoring & Management",
  communication: "💬 Communication Tools",
  system: "⚙️ System Administration",
  network: "🌐 Network Tools",
  documentation: "📚 Documentation & Knowledge Base",

};

const techStack = {
    help:[
                  { name: "Zendesk", icon: "🎫", description: "Customer service platform" },
                  { name: "ServiceNow", icon: "🔧", description: "IT service management" },
                  { name: "Freshdesk", icon: "🍃", description: "Cloud-based help desk" },
                  { name: "Jira Service Management", icon: "🔷", description: "Atlassian ITSM solution" },
                  { name: "ManageEngine", icon: "⚙️", description: "IT management suite" },
                  { name: "BMC Remedy", icon: "🏥", description: "Enterprise service management" },
                  { name: "Spiceworks", icon: "🌶️", description: "Free help desk software" },
                  { name: "osTicket", icon: "🎟️", description: "Open source ticketing" },
                ],
    remote: [
                  { name: "TeamViewer", icon: "👥", description: "Remote access & support" },
                  { name: "AnyDesk", icon: "🖱️", description: "Fast remote desktop" },
                  { name: "LogMeIn", icon: "🔐", description: "Remote access solution" },
                  { name: "Chrome Remote Desktop", icon: "🌐", description: "Google remote access" },
                  { name: "Windows Remote Desktop", icon: "🪟", description: "Microsoft RDP" },
                  { name: "VNC Connect", icon: "🔗", description: "Cross-platform remote access" },
                  { name: "Splashtop", icon: "💧", description: "Remote desktop software" },
                  { name: "ConnectWise Control", icon: "🎮", description: "Remote support platform" },
                ],
    monitoring:[
                  { name: "Nagios", icon: "👁️", description: "Infrastructure monitoring" },
                  { name: "Zabbix", icon: "⚡", description: "Network monitoring" },
                  { name: "PRTG", icon: "📈", description: "Network monitoring tool" },
                  { name: "SolarWinds", icon: "☀️", description: "IT management software" },
                  { name: "Datadog", icon: "🐕", description: "Cloud monitoring" },
                  { name: "New Relic", icon: "🔮", description: "Application monitoring" },
                  { name: "Splunk", icon: "🔍", description: "Data analytics platform" },
                  { name: "Grafana", icon: "📊", description: "Monitoring & observability" },
                ],
    communication:[
                  { name: "Slack", icon: "💬", description: "Team communication" },
                  { name: "Microsoft Teams", icon: "👥", description: "Collaboration platform" },
                  { name: "Discord", icon: "🎮", description: "Voice & text chat" },
                  { name: "Zoom", icon: "📹", description: "Video conferencing" },
                  { name: "Skype", icon: "📞", description: "Voice & video calls" },
                  { name: "Google Meet", icon: "🎥", description: "Video meetings" },
                  { name: "WebEx", icon: "🌐", description: "Cisco collaboration" },
                  { name: "GoToMeeting", icon: "🚀", description: "Online meetings" },
                ],
    system: [
                  { name: "Windows Server", icon: "🪟", description: "Microsoft server OS" },
                  { name: "Linux", icon: "🐧", description: "Open source OS" },
                  { name: "VMware", icon: "☁️", description: "Virtualization platform" },
                  { name: "Docker", icon: "🐳", description: "Containerization" },
                  { name: "Kubernetes", icon: "⚓", description: "Container orchestration" },
                  { name: "Active Directory", icon: "📁", description: "Directory service" },
                  { name: "PowerShell", icon: "💙", description: "Command-line shell" },
                  { name: "Bash", icon: "🐚", description: "Unix shell" },
                ],
    network: [
                  { name: "Wireshark", icon: "🦈", description: "Network protocol analyzer" },
                  { name: "Nmap", icon: "🗺️", description: "Network discovery tool" },
                  { name: "PuTTY", icon: "🔧", description: "SSH & Telnet client" },
                  { name: "Cisco Tools", icon: "🔗", description: "Network equipment tools" },
                  { name: "pfSense", icon: "🛡️", description: "Open source firewall" },
                  { name: "Nessus", icon: "🔍", description: "Vulnerability scanner" },
                  { name: "OpenVPN", icon: "🔐", description: "VPN solution" },
                  { name: "SNMP", icon: "📊", description: "Network management protocol" },
                ],
    documentation: [
                  { name: "Confluence", icon: "🌊", description: "Team collaboration" },
                  { name: "Notion", icon: "📝", description: "All-in-one workspace" },
                  { name: "GitBook", icon: "📖", description: "Documentation platform" },
                  { name: "MediaWiki", icon: "📄", description: "Wiki software" },
                  { name: "SharePoint", icon: "🔗", description: "Microsoft collaboration" },
                  { name: "OneNote", icon: "📓", description: "Digital notebook" },
                  { name: "Evernote", icon: "🐘", description: "Note-taking app" },
                  { name: "Obsidian", icon: "💎", description: "Knowledge management" },
                ],
   
  }




  return (
  <ServicesPageTemplate
      mainHeading="Technical Support & IT Services"
      subHeading="Expert Technical Support That Keeps Your Business Running Smoothly 24/7"
      subtitle="We provide comprehensive technical support services including 24/7 help desk, system monitoring, network management, and proactive maintenance to ensure your IT infrastructure operates at peak performance."
      servicesMainHeading="Our Support Services"
      servicesSubHeading="Comprehensive technical support solutions that ensure your IT systems run efficiently and your team stays productive."
      techStackDescription=" We use cutting-edge technologies to build robust and scalable web solutions."
      techStackCategory={categoryTitles}
      techStack={techStack}
      whyChooseUsDescription="We deliver exceptional technical support through expertise, reliability, and commitment to your success."
      illustrationHeading="Expert Technical Support Team"
      illustrationDescription="Our certified technical support specialists combine deep technical knowledge with excellent customer service skills to resolve issues quickly, minimize downtime, and keep your business operations running smoothly."
      developmentProcessMainHeading="Our SupportProcess"
      developmentProcessDescription="A systematic approach that ensures rapid issue resolution and exceptional customer satisfaction."
      comprehensiveSolutionsDescription="From help desk to system administration, we cover every aspect of technical support and IT management."
      imageSectionLeftSideHeading="Reliable Technical Support That Keeps Your Business Operations Running Seamlessly"
      imageSectionLeftSideDescription="Our technical support team provides comprehensive IT assistance, proactive monitoring, and rapid issue resolution to ensure your technology infrastructure supports your business goals without interruption."
      services={services}
      imageSectionLeftSideFeatures={leftSideFeatures}
      imageSectionRightSideImage={SupportImage}
      developmentProcess={supportProcess}
      detailServices={detailedServices}
      features={features}
      finalCtaHeading="Need Technical Support?"
      finalCtaDescription="Get expert technical support that keeps your systems running smoothly. Our team is ready to help you resolve issues and optimize your IT infrastructure."
    />

  )
}
