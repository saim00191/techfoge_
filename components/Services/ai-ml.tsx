import {
  Brain,
  Rocket,
  Monitor,
  Target,
  Settings,
  Bot,
  Zap,
  TrendingUp,
} from "lucide-react";
import AI_ML_Image from "@/images/ai-and-ml.png";
import ServicesPageTemplate from "./ServicesMain";

export default function AIMLServices() {
  const services = [
    {
      icon: <Brain />,
      title: "Machine Learning Solutions",
      description:
        "Build intelligent systems with custom ML models, predictive analytics, and automated decision-making capabilities that transform your business operations.",
      color: "#00D1FF",
    },
    {
      icon: <Bot />,
      title: "AI-Powered Applications",
      description:
        "Develop cutting-edge AI applications including chatbots, computer vision systems, and natural language processing solutions for enhanced user experiences.",
      color: "#00D1FF",
    },
    {
      icon: <Monitor />,
      title: "Data Science & Analytics",
      description:
        "Extract valuable insights from your data with advanced analytics, statistical modeling, and visualization tools that drive informed business decisions.",
      color: "#00D1FF",
    },
  ];

  const detailedServices = [
    {
      category: "Machine Learning",
      icon: <Brain />,
      services: [
        "Custom ML Model Development",
        "Predictive Analytics Solutions",
        "Deep Learning Applications",
        "Computer Vision Systems",
        "Recommendation Engines",
      ],
    },
    {
      category: "AI Applications",
      icon: <Bot />,
      services: [
        "Chatbots & Virtual Assistants",
        "Natural Language Processing",
        "Speech Recognition Systems",
        "Image & Video Analysis",
        "Automated Decision Systems",
      ],
    },
    {
      category: "Data Science",
      icon: <Settings />,
      services: [
        "Data Mining & Analysis",
        "Statistical Modeling",
        "Business Intelligence",
        "Data Visualization",
        "Big Data Processing",
      ],
    },
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Data Assessment",
      description:
        "We analyze your data sources, quality, and business objectives to create a comprehensive AI/ML strategy and roadmap.",
      icon: <Target />,
    },
    {
      step: "02",
      title: "Model Development",
      description:
        "Building and training custom machine learning models using state-of-the-art algorithms and frameworks tailored to your needs.",
      icon: <Brain />,
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description:
        "Rigorous testing, validation, and optimization of models to ensure accuracy, performance, and reliability in production.",
      icon: <Settings />,
    },
    {
      step: "04",
      title: "Deployment & Monitoring",
      description:
        "Deploying AI solutions to production with continuous monitoring, maintenance, and performance optimization.",
      icon: <Rocket />,
    },
  ];

  const features = [
    "Custom ML model development",
    "Real-time data processing",
    "Scalable AI infrastructure",
    "Advanced analytics dashboards",
    "Automated model retraining",
    "Cloud-native deployments",
    "24/7 monitoring & support",
    "Enterprise-grade security",
  ];

  const leftSideFeatures = [
    {
      icon: <Zap />,
      title: "Advanced Algorithms",
      description: "State-of-the-art ML & AI techniques",
    },
    {
      icon: <Brain />,
      title: "Intelligent Automation",
      description: "Smart systems that learn & improve",
    },
    {
      icon: <TrendingUp />,
      title: "Predictive Analytics",
      description: "Data-driven insights & forecasting",
    },
  ];

  const categoryTitles: Record<string, string> = {
  programming: "💻 Programming Languages",
  ml: "🧠 ML Frameworks",
  dataprocessing: "📊 Data Processing",
  cloudplatforms: "☁️ Cloud Platforms",
  deployment: "🔧 MLOps & Deployment",
  computervision: "👁️ Computer Vision & NLP",
  databases: "🗄️ Databases & Storage",
 
};


  const techStack = {
    programming: [
                  { name: "Python", icon: "🐍", description: "Primary ML language" },
                  { name: "R", icon: "📊", description: "Statistical computing" },
                  { name: "Julia", icon: "🔬", description: "High-performance computing" },
                  { name: "Scala", icon: "⚡", description: "Big data processing" },
                  { name: "JavaScript", icon: "🟨", description: "Web-based ML" },
                  { name: "Java", icon: "☕", description: "Enterprise ML solutions" },
                  { name: "C++", icon: "⚙️", description: "High-performance ML" },
                  { name: "SQL", icon: "🗃️", description: "Data querying" },
                ],
    ml: [
                  { name: "TensorFlow", icon: "🔥", description: "Google's ML platform" },
                  { name: "PyTorch", icon: "🔥", description: "Facebook's deep learning" },
                  { name: "Scikit-learn", icon: "🔬", description: "Classical ML algorithms" },
                  { name: "Keras", icon: "🧠", description: "High-level neural networks" },
                  { name: "XGBoost", icon: "🚀", description: "Gradient boosting" },
                  { name: "LightGBM", icon: "💡", description: "Microsoft's gradient boosting" },
                  { name: "CatBoost", icon: "🐱", description: "Yandex's gradient boosting" },
                  { name: "JAX", icon: "⚡", description: "Google's NumPy-compatible" },
                ],
    dataprocessing: [
                  { name: "Pandas", icon: "🐼", description: "Data manipulation" },
                  { name: "NumPy", icon: "🔢", description: "Numerical computing" },
                  { name: "Apache Spark", icon: "⚡", description: "Big data processing" },
                  { name: "Dask", icon: "📈", description: "Parallel computing" },
                  { name: "Polars", icon: "🐻‍❄️", description: "Fast DataFrame library" },
                  { name: "Apache Kafka", icon: "🌊", description: "Stream processing" },
                  { name: "Apache Airflow", icon: "🌪️", description: "Workflow orchestration" },
                  { name: "Ray", icon: "☀️", description: "Distributed computing" },
                ],
    cloudplatforms:[
                  { name: "AWS", icon: "🟠", description: "Amazon Web Services" },
                  { name: "Google Cloud", icon: "🔵", description: "Google Cloud Platform" },
                  { name: "Azure", icon: "🔷", description: "Microsoft Azure" },
                  { name: "IBM Watson", icon: "🤖", description: "IBM's AI platform" },
                  { name: "Databricks", icon: "🧱", description: "Unified analytics platform" },
                  { name: "Snowflake", icon: "❄️", description: "Cloud data platform" },
                  { name: "Vertex AI", icon: "🎯", description: "Google's ML platform" },
                  { name: "SageMaker", icon: "🚀", description: "AWS ML platform" },
                ],
    deployment: [
                  { name: "MLflow", icon: "🌊", description: "ML lifecycle management" },
                  { name: "Kubeflow", icon: "⚓", description: "ML workflows on Kubernetes" },
                  { name: "DVC", icon: "📂", description: "Data version control" },
                  { name: "Weights & Biases", icon: "⚖️", description: "Experiment tracking" },
                  { name: "Neptune", icon: "🔱", description: "ML experiment management" },
                  { name: "Docker", icon: "🐳", description: "Containerization" },
                  { name: "Kubernetes", icon: "⚓", description: "Container orchestration" },
                  { name: "Apache Beam", icon: "📡", description: "Unified batch & stream" },
                ],
    computervision: [
                  { name: "OpenCV", icon: "👁️", description: "Computer vision library" },
                  { name: "YOLO", icon: "🎯", description: "Object detection" },
                  { name: "Detectron2", icon: "🔍", description: "Facebook's detection platform" },
                  { name: "Hugging Face", icon: "🤗", description: "Transformers & NLP" },
                  { name: "spaCy", icon: "🌶️", description: "Industrial NLP" },
                  { name: "NLTK", icon: "📚", description: "Natural language toolkit" },
                  { name: "OpenAI GPT", icon: "🤖", description: "Large language models" },
                  { name: "Transformers", icon: "🔄", description: "State-of-the-art NLP" },
                ],
    databases: [
                  { name: "PostgreSQL", icon: "🐘", description: "Relational database" },
                  { name: "MongoDB", icon: "🍃", description: "Document database" },
                  { name: "Redis", icon: "🔴", description: "In-memory data store" },
                  { name: "Elasticsearch", icon: "🔍", description: "Search & analytics" },
                  { name: "ClickHouse", icon: "🏠", description: "Columnar database" },
                  { name: "Apache Cassandra", icon: "🏛️", description: "Distributed database" },
                  { name: "Neo4j", icon: "🕸️", description: "Graph database" },
                  { name: "InfluxDB", icon: "📈", description: "Time series database" },
                ],
    
  };

  return (
    <ServicesPageTemplate
      mainHeading="AI & Machine Learning Solutions"
      subHeading="Transform Your Business With Intelligent AI Systems That Learn, Adapt & Deliver Results"
      subtitle="We specialize in developing cutting-edge AI and machine learning solutions that automate processes, predict outcomes, and unlock valuable insights from your data to drive business growth."
      servicesMainHeading="Our AI & ML Services"
      servicesSubHeading="Comprehensive artificial intelligence and machine learning solutions that revolutionize how you work with data."
      techStack={techStack}
      techStackDescription=" We use cutting-edge technologies to build robust and scalable web solutions."
      techStackCategory={categoryTitles}
      whyChooseUsDescription="We deliver exceptional AI solutions through deep expertise, innovative approaches, and proven methodologies."
      illustrationHeading="Expert Development Team"
      developmentProcessMainHeading=">Our Development Process"
      developmentProcessDescription="A data-driven methodology that ensures successful AI implementation from concept to production."
      illustrationDescription="Our experienced data scientists and AI engineers combine deep technical knowledge with business acumen to deliver intelligent solutions that solve real-world problems and drive measurable business value."
      comprehensiveSolutionsDescription="From machine learning to data science, we cover every aspect of artificial intelligence development."
      imageSectionLeftSideHeading="Building Intelligent Systems That Learn, Adapt & Deliver Exceptional Results"
      imageSectionLeftSideDescription="Our AI development team creates sophisticated machine learning models and intelligent systems that automate complex processes, predict future outcomes, and unlock valuable insights from your data to drive business growth."
      services={services}
      imageSectionLeftSideFeatures={leftSideFeatures}
      imageSectionRightSideImage={AI_ML_Image}
      developmentProcess={developmentProcess}
      detailServices={detailedServices}
      features={features}
      finalCtaHeading="Ready to Harness AI Power?"
      finalCtaDescription="Let's build intelligent AI solutions that transform your business operations, unlock data insights, and drive innovation in your industry."
    />
  );
}
