import { Shield, Eye, Lock, Users, Database, Cookie, Mail, FileText, Globe, Settings } from 'lucide-react'
import type { PrivacySection, ContactInfo } from "@/types/Privacy"

export const privacySections: PrivacySection[] = [
  {
    id: "information-collection",
    icon: Database,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and company information.",
      },
      {
        subtitle: "Usage Information",
        text: "We automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage patterns.",
      },
      {
        subtitle: "Cookies and Tracking",
        text: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.",
      },
    ],
  },
  {
    id: "information-usage",
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Provision",
        text: "We use your information to provide, maintain, and improve our services, process transactions, and communicate with you about your account or our services.",
      },
      {
        subtitle: "Communication",
        text: "We may use your contact information to send you technical notices, updates, security alerts, and administrative messages.",
      },
      {
        subtitle: "Analytics and Improvement",
        text: "We analyze usage patterns to understand how our services are used and to improve functionality and user experience.",
      },
    ],
  },
  {
    id: "information-sharing",
    icon: Users,
    title: "Information Sharing and Disclosure",
    content: [
      {
        subtitle: "Service Providers",
        text: "We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, and customer support.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required by law, regulation, or legal process, or to protect the rights, property, or safety of Tech Foge or others.",
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.",
      },
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      },
      {
        subtitle: "Encryption",
        text: "We use industry-standard encryption to protect sensitive data during transmission and storage.",
      },
      {
        subtitle: "Access Controls",
        text: "Access to personal information is restricted to authorized personnel who need it to perform their job functions.",
      },
    ],
  },
  {
    id: "user-rights",
    icon: Settings,
    title: "Your Rights and Choices",
    content: [
      {
        subtitle: "Access and Correction",
        text: "You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us.",
      },
      {
        subtitle: "Data Portability",
        text: "You have the right to request a copy of your personal information in a structured, machine-readable format.",
      },
      {
        subtitle: "Deletion",
        text: "You may request deletion of your personal information, subject to certain legal and contractual restrictions.",
      },
    ],
  },
  {
    id: "cookies-policy",
    icon: Cookie,
    title: "Cookies and Tracking Technologies",
    content: [
      {
        subtitle: "Types of Cookies",
        text: "We use essential cookies for site functionality, analytics cookies to understand usage, and preference cookies to remember your settings.",
      },
      {
        subtitle: "Cookie Management",
        text: "You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our services.",
      },
      {
        subtitle: "Third-Party Cookies",
        text: "We may allow third-party services to place cookies on your device for analytics and advertising purposes.",
      },
    ],
  },
]

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: "Privacy Officer",
    details: ["privacy@techfoge.com", "Data Protection Inquiries"],
    color: "#00D1FF",
  },
  {
    icon: FileText,
    title: "Legal Department",
    details: ["legal@techfoge.com", "Policy Questions"],
    color: "#00D1FF",
  },
  {
    icon: Shield,
    title: "Security Team",
    details: ["security@techfoge.com", "Security Concerns"],
    color: "#00D1FF",
  },
  {
    icon: Globe,
    title: "General Contact",
    details: ["hello@techfoge.com", "General Inquiries"],
    color: "#00D1FF",
  },
]
