import {
  BarChart3,
  Beaker,
  BriefcaseMedical,
  Database,
  FileSpreadsheet,
  LineChart,
  Microscope,
  Network,
  Presentation,
  Stethoscope
} from "lucide-react";

export const profile = {
  name: "Your Name",
  university: "University of Toronto",
  role: "Clinical Data Science Intern",
  headline:
    "Aspiring Clinical Data Scientist with interests in Biostatistics, Clinical Trials, and Data-Driven Drug Development.",
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  resume: "/resume/resume-placeholder.pdf"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" }
];

export const focusAreas = [
  "Biostatistics",
  "Clinical Trials",
  "Real-World Data",
  "Survival Analysis",
  "Oncology",
  "Data-Driven Drug Development"
];

export const aboutHighlights = [
  {
    title: "Education",
    body:
      "Undergraduate student at the University of Toronto majoring in Quantitative Biology with a Genome Biology minor and applied data science focus."
  },
  {
    title: "Academic Interests",
    body:
      "Interested in statistical modeling, clinical trial methodology, oncology outcomes research, genomic data, and real-world evidence."
  },
  {
    title: "Career Direction",
    body:
      "Preparing for clinical data science, biostatistics, and clinical development roles across pharmaceutical, biotechnology, and clinical research organizations."
  },
  {
    title: "Working Style",
    body:
      "Combines biological context, statistical reasoning, and reproducible analysis workflows to support decision-making in drug development."
  }
];

export const experiences = [
  {
    title: "Clinical Data Science Internship",
    organization: "Clinical Research / Health Data Environment",
    period: "Current",
    icon: BriefcaseMedical,
    bullets: [
      "Support clinical data review, data quality checks, and exploratory analysis workflows.",
      "Apply statistical programming and visualization to summarize patient-level and study-level trends.",
      "Collaborate with cross-functional stakeholders to translate research questions into analytical outputs."
    ]
  },
  {
    title: "Data Analysis Experience",
    organization: "Academic and Applied Projects",
    period: "University of Toronto",
    icon: BarChart3,
    bullets: [
      "Designed reproducible analyses using R, Python, SQL, and spreadsheet-based validation.",
      "Developed interpretable visual summaries for biological, clinical, and observational datasets.",
      "Practiced clear documentation for assumptions, methods, outputs, and analytical limitations."
    ]
  },
  {
    title: "Biomedical Research Foundation",
    organization: "Quantitative Biology and Genome Biology Training",
    period: "Undergraduate",
    icon: Microscope,
    bullets: [
      "Built a foundation in molecular biology, genomics, statistics, and computational analysis.",
      "Studied how quantitative methods can help evaluate treatment response and disease progression.",
      "Focused on applications relevant to oncology, clinical trials, and translational medicine."
    ]
  }
];

export const projects = [
  {
    title: "Survival Analysis",
    summary:
      "Template project for time-to-event endpoints, censoring patterns, median survival, and interpretable clinical summaries.",
    image: "/projects/survival-analysis.svg",
    tags: ["R", "Survival", "Oncology"],
    github: "https://github.com/your-username/survival-analysis",
    report: "/projects/survival-analysis-report.pdf"
  },
  {
    title: "Kaplan-Meier Analysis",
    summary:
      "Project area for Kaplan-Meier curves, risk tables, stratified cohorts, and confidence interval interpretation.",
    image: "/projects/kaplan-meier-analysis.svg",
    tags: ["Kaplan-Meier", "R", "Visualization"],
    github: "https://github.com/your-username/kaplan-meier-analysis",
    report: "/projects/kaplan-meier-report.pdf"
  },
  {
    title: "Cox Regression",
    summary:
      "Placeholder for proportional hazards modeling, covariate adjustment, forest plots, and model diagnostics.",
    image: "/projects/cox-regression.svg",
    tags: ["Cox PH", "Statistics", "Clinical"],
    github: "https://github.com/your-username/cox-regression",
    report: "/projects/cox-regression-report.pdf"
  },
  {
    title: "SAP Development",
    summary:
      "Project slot for Statistical Analysis Plan structure, endpoint definitions, estimands, and mock shell outputs.",
    image: "/projects/sap-development.svg",
    tags: ["SAP", "Trial Design", "SAS"],
    github: "https://github.com/your-username/sap-development",
    report: "/projects/sap-development-report.pdf"
  },
  {
    title: "Clinical Trial Analytics",
    summary:
      "Analytics concept for enrollment, protocol deviations, adverse events, data review, and study operations insights.",
    image: "/projects/clinical-trial-analytics.svg",
    tags: ["Clinical Trials", "Dashboards", "SQL"],
    github: "https://github.com/your-username/clinical-trial-analytics",
    report: "/projects/clinical-trial-analytics-report.pdf"
  },
  {
    title: "Real-World Data Studies",
    summary:
      "Placeholder for observational cohort construction, treatment patterns, outcomes analysis, and real-world evidence.",
    image: "/projects/real-world-data.svg",
    tags: ["RWD", "Cohorts", "Power BI"],
    github: "https://github.com/your-username/real-world-data",
    report: "/projects/real-world-data-report.pdf"
  }
];

export const skillGroups = [
  {
    title: "Statistics",
    icon: LineChart,
    skills: ["Survival Analysis", "Cox Regression", "Kaplan-Meier Analysis", "Hypothesis Testing", "Regression Modeling"]
  },
  {
    title: "Clinical Research",
    icon: Stethoscope,
    skills: ["Clinical Trial Design", "Protocol Review", "SAP Concepts", "Oncology Endpoints", "Real-World Evidence"]
  },
  {
    title: "Programming",
    icon: Database,
    skills: ["R", "SAS", "SQL", "Python", "Excel", "Reproducible Workflows"]
  },
  {
    title: "Data Visualization",
    icon: Presentation,
    skills: ["Power BI", "ggplot2", "Clinical Dashboards", "Data Storytelling", "Tables and Listings"]
  }
];

export const quickCapabilities = [
  { label: "Statistical Programming", icon: FileSpreadsheet },
  { label: "Clinical Data Review", icon: Beaker },
  { label: "RWD Cohort Thinking", icon: Network }
];
