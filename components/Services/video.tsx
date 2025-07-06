
import {
  Video,
  Zap,
  Rocket,
  Monitor,
  Target,
  Settings,
  Film,
  TrendingUp,
} from "lucide-react"
import VideoEditingImg from '@/images/video-editing.png'
import ServicesPageTemplate from "./ServicesMain"

export default function VideoEditingServices() {
 

  const services = [
    {
      icon: <Video />,
      title: "Professional Video Editing",
      description:
        "Transform raw footage into compelling stories with expert editing, seamless transitions, and professional post-production techniques that captivate your audience.",
      color: "#00D1FF",
    },
    {
      icon: <Film />,
      title: "Motion Graphics & VFX",
      description:
        "Create stunning visual effects, motion graphics, and animations that enhance your video content with professional-grade compositing and 3D elements.",
      color: "#00D1FF",
    },
    {
      icon: <Monitor />,
      title: "Color Grading & Audio",
      description:
        "Perfect your video's visual and audio quality with professional color correction, grading, sound design, and audio mixing for cinematic results.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "Video Production",
      icon: <Video />,
      services: [
        "Corporate Video Editing",
        "Documentary Post-Production",
        "Commercial & Advertisement",
        "Social Media Video Content",
        "YouTube Channel Editing",
      ],
    },
    {
      category: "Post-Production",
      icon: <Film />,
      services: [
        "Motion Graphics Design",
        "Visual Effects (VFX)",
        "3D Animation & Modeling",
        "Compositing & Keying",
        "Title Design & Graphics",
      ],
    },
    {
      category: "Audio & Color",
      icon: <Settings />,
      services: [
        "Color Correction & Grading",
        "Audio Mixing & Mastering",
        "Sound Design & Foley",
        "Music Composition",
        "Voice-over Integration",
      ],
    },
  ]

  const editingProcess = [
    {
      step: "01",
      title: "Project Planning",
      description:
        "We analyze your footage, understand your vision, and create a comprehensive post-production strategy and timeline.",
      icon: <Target />,
    },
    {
      step: "02",
      title: "Rough Cut Assembly",
      description:
        "Creating initial rough cuts, story structure, and pacing while organizing all media assets and project files.",
      icon: <Film />,
    },
    {
      step: "03",
      title: "Fine Cut & Effects",
      description:
        "Refining edits, adding motion graphics, visual effects, color grading, and audio mixing for professional quality.",
      icon: <Settings />,
    },
    {
      step: "04",
      title: "Final Delivery",
      description:
        "Delivering final videos in multiple formats, resolutions, and providing project files with ongoing support.",
      icon:   <Rocket />,
    },
  ]

  const features = [
    "4K/8K video editing capability",
    "Professional color grading",
    "Advanced motion graphics",
    "Multi-camera synchronization",
    "High-quality audio mixing",
    "Fast turnaround times",
    "Multiple format delivery",
    "Unlimited revisions included",
  ]


    const leftSideFeatures = [
    {
      icon: <Zap />,
      title: "Cinematic Quality",
      description: "Professional-grade editing & effects",
    },
    {
      icon: <Film/>,
      title: "Creative Storytelling",
      description: "Compelling narratives & visual flow",
    },
    {
      icon: <TrendingUp/>,
      title: "Performance Optimization",
      description: "Optimized for all platforms & devices",
    },
  ];



  const categoryTitles: Record<string, string> = {
  video: "🎬 Video Editing Software",
  audio: "🎵 Audio Production",
  color: "🎨 Color Grading & Finishing",
  collaboration: "🤝 Collaboration & Review",
  storage: "💾 Storage & Workflow",
  camera: "📹 Camera & Hardware",
};

const techStack = {
    video:[
                  { name: "Adobe Premiere Pro", icon: "🎬", description: "Professional video editing" },
                  { name: "Final Cut Pro", icon: "🍎", description: "Mac video editing suite" },
                  { name: "DaVinci Resolve", icon: "🎨", description: "Color grading & editing" },
                  { name: "Avid Media Composer", icon: "🎭", description: "Industry standard NLE" },
                  { name: "Adobe After Effects", icon: "⚡", description: "Motion graphics & VFX" },
                  { name: "Cinema 4D", icon: "🎯", description: "3D animation & modeling" },
                  { name: "Blender", icon: "🌀", description: "Open-source 3D suite" },
                  { name: "Nuke", icon: "💥", description: "Professional compositing" },
                ],
    audio: [
                  { name: "Pro Tools", icon: "🎚️", description: "Industry standard DAW" },
                  { name: "Adobe Audition", icon: "🎧", description: "Audio editing & mixing" },
                  { name: "Logic Pro", icon: "🎹", description: "Music production suite" },
                  { name: "Ableton Live", icon: "🎵", description: "Music creation & performance" },
                  { name: "Cubase", icon: "🎼", description: "Digital audio workstation" },
                  { name: "Reaper", icon: "⚡", description: "Lightweight audio editor" },
                  { name: "Fairlight", icon: "🎛️", description: "Professional audio console" },
                  { name: "Izotope RX", icon: "🔧", description: "Audio repair & restoration" },
                ],
    color:[
                  { name: "DaVinci Resolve", icon: "🎨", description: "Professional color grading" },
                  { name: "Baselight", icon: "💡", description: "High-end color correction" },
                  { name: "Scratch", icon: "✨", description: "Real-time color grading" },
                  { name: "SpeedGrade", icon: "⚡", description: "Adobe color grading" },
                  { name: "Color Finale", icon: "🌈", description: "Final Cut Pro color tools" },
                  { name: "FilmLight", icon: "🎬", description: "Professional grading suite" },
                  { name: "Pomfort Silverstack", icon: "📦", description: "Dailies & color management" },
                  { name: "Assimilate Scratch", icon: "🔥", description: "Conform & finishing" },
                ],
    collaboration:[
                  { name: "Frame.io", icon: "🎯", description: "Video collaboration platform" },
                  { name: "Wipster", icon: "👥", description: "Video review & approval" },
                  { name: "ReviewBoard", icon: "📋", description: "Creative review platform" },
                  { name: "Syncsketch", icon: "✏️", description: "Video annotation tool" },
                  { name: "Filestage", icon: "📁", description: "Creative approval workflow" },
                  { name: "Ziflow", icon: "🌊", description: "Online proofing platform" },
                  { name: "Screenlight", icon: "💡", description: "Video collaboration tool" },
                  { name: "Kollaborate", icon: "🤝", description: "Media collaboration" },
                ],
    storage: [
                  { name: "Avid NEXIS", icon: "🏢", description: "Shared storage system" },
                  { name: "EditShare", icon: "📤", description: "Collaborative storage" },
                  { name: "LumaForge", icon: "⚡", description: "High-performance storage" },
                  { name: "Dropbox", icon: "📦", description: "Cloud file sharing" },
                  { name: "Google Drive", icon: "☁️", description: "Cloud storage platform" },
                  { name: "AWS S3", icon: "🌐", description: "Cloud object storage" },
                  { name: "Signiant", icon: "🚀", description: "Media transfer platform" },
                  { name: "Aspera", icon: "⚡", description: "High-speed file transfer" },
                ],
    camera: [
                  { name: "RED Digital Cinema", icon: "🔴", description: "Professional cinema cameras" },
                  { name: "ARRI Alexa", icon: "🎬", description: "Industry standard cameras" },
                  { name: "Blackmagic Design", icon: "⚫", description: "Professional video equipment" },
                  { name: "Sony FX Series", icon: "📷", description: "Cinema line cameras" },
                  { name: "Canon Cinema EOS", icon: "📸", description: "Professional video cameras" },
                  { name: "Panasonic Varicam", icon: "🎥", description: "Cinema cameras" },
                  { name: "Atomos", icon: "⚛️", description: "Monitor & recorder" },
                  { name: "AJA Video Systems", icon: "🔧", description: "Video interface solutions" },
                ],
  
  }



  return (
   <ServicesPageTemplate
      mainHeading="Video Editing & Post-Production Services"
      subHeading="Transform Raw Footage Into Cinematic Masterpieces That Tell Compelling Stories"
      subtitle="We specialize in professional video editing, motion graphics, and post-production services that bring your vision to life with cinematic quality and storytelling excellence."
      servicesMainHeading="Our Video Services"
      servicesSubHeading="Comprehensive video editing and post-production solutions that transform your footage into professional content."
      techStackDescription=" We use cutting-edge technologies to build robust and scalable web solutions."
      techStackCategory={categoryTitles}
      techStack={techStack}
      whyChooseUsDescription="We deliver exceptional video content through technical expertise, creative vision, and professional post-production excellence."
      illustrationHeading="Expert Video Production Team"
      illustrationDescription="Our experienced video editors and post-production specialists combine technical mastery with creative storytelling to deliver compelling video content that engages audiences and achieves your project goals."
      developmentProcessMainHeading="Our Editing Process"
      developmentProcessDescription="A systematic approach that ensures exceptional video quality from raw footage to final delivery."
      comprehensiveSolutionsDescription="From production to post-production, we cover every aspect of professional video creation and editing."
      imageSectionLeftSideHeading="Crafting Cinematic Stories That Captivate & Inspire Audiences Worldwide"
      imageSectionLeftSideDescription="Our video editing team transforms raw footage into compelling narratives using cutting-edge technology, creative vision, and professional post-production techniques that deliver exceptional results.Our video editing team transforms raw footage into compelling narratives using cutting-edge technology, creative vision, and professional post-production techniques that deliver exceptional results."
      services={services}
      imageSectionLeftSideFeatures={leftSideFeatures}
      imageSectionRightSideImage={VideoEditingImg}
      developmentProcess={editingProcess}
      detailServices={detailedServices}
      features={features}
      finalCtaHeading="Ready to Create Your Video?"
      finalCtaDescription="Let's transform your footage into compelling video content that tells your story, engages your audience, and achieves your creative vision."
    />
  )
}
