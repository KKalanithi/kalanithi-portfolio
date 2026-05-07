import {
  BadgeCheck,
  Database,
  FolderKanban,
  Gauge,
  GitBranch,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '7', label: 'Enterprise Modules Delivered' },
  { value: '30%', label: 'Performance Improvement' },
];

export const skillCategories = [
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: ServerCog,
    skills: ['Python', 'Django', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'Stored Procedures', 'Triggers', 'Query Optimization'],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    skills: ['Git', 'SVN'],
  },
];

export const highlights = [
  {
    icon: Workflow,
    title: 'Enterprise Workflow Systems',
    description:
      'Built process-driven applications for audit, training, CAPA, risk, complaints, and non-conformance management.',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description:
      'Improved module performance by 30% through query tuning, backend refactoring, and cleaner data access patterns.',
  },
  {
    icon: Network,
    title: 'Full-Stack Delivery',
    description:
      'Delivered backend modules, REST APIs, responsive UIs, and user-centric workflows for business-critical products.',
  },
];

export const experience = {
  company: 'Sugi Infotech',
  role: 'Python Developer',
  duration: '2023 - Present',
  achievements: [
    'Improved module performance by 30% by optimizing backend logic and query execution.',
    'Optimized MySQL queries, stored procedures, and transactional flows for enterprise-scale data operations.',
    'Developed enterprise workflow systems across audit, CAPA, DMS, risk, training, complaints, and NC modules.',
    'Built maintainable backend modules and integrations for compliance-oriented web applications.',
  ],
};

export const projects = [
  {
    title: 'Audit Management System',
    icon: ShieldCheck,
    description:
      'A structured platform for planning, executing, and tracking internal audits with evidence capture, action tracking, and approval workflows.',
    technologies: ['Python', 'Django', 'MySQL', 'JavaScript', 'Bootstrap'],
    features: ['Audit scheduling', 'Checklist workflows', 'Findings & follow-up', 'Role-based dashboards'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'CAPA Management System',
    icon: BadgeCheck,
    description:
      'A corrective and preventive action platform designed to streamline root-cause analysis, approvals, implementation, and closure visibility.',
    technologies: ['Python', 'Django', 'MySQL', 'jQuery', 'HTML/CSS'],
    features: ['Root-cause tracking', 'Approval pipeline', 'Action ownership', 'Closure analytics'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'DMS Application',
    icon: FolderKanban,
    description:
      'A secure document management solution for centralized storage, version control, access permissions, and lifecycle governance.',
    technologies: ['Django', 'MySQL', 'Bootstrap', 'JavaScript'],
    features: ['Document versioning', 'Access control', 'Review workflows', 'Searchable repository'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Risk Management Module',
    icon: Layers3,
    description:
      'A risk evaluation and mitigation module for assessing impact, likelihood, controls, and action plans across compliance processes.',
    technologies: ['Python', 'Django', 'MySQL', 'jQuery'],
    features: ['Risk scoring', 'Mitigation planning', 'Approval matrix', 'Status monitoring'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
];

export const contacts = [
  {
    label: 'Email',
    value: 'kalanithikala06@gmail.com',
    href: 'mailto:kalanithikala06@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kalanithi-k-b42331247',
    href: 'https://www.linkedin.com/in/kalanithi-k-b42331247',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/kalanithi',
    href: 'https://github.com/KKalanithi',
    icon: Github,
  },
  {
    label: 'Location',
    value: 'Chennai, India',
    href: 'https://maps.google.com/?q=Chennai,India',
    icon: MapPin,
  },
];
