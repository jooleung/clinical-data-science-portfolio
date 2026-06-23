import {
  BarChart3,
  Beaker,
  BriefcaseMedical,
  Database,
  FileSpreadsheet,
  LineChart,
  Network,
  Presentation,
  Stethoscope,
  Users
} from "lucide-react";

export const profile = {
  name: "Jo (Yaozu) Liang",
  university: "University of Toronto",
  role: "Clinical Data Science Intern",
  headline:
    "Aspiring Clinical Data Scientist focused on oncology trials, survival analysis, statistical programming, and data-driven drug development.",
  email: "yaozu.liang@mail.utoronto.ca",
  phone: "+1 437-441-6060",
  linkedin: "https://www.linkedin.com/in/jo-yaozu-liang",
  github: "https://github.com/jooleung",
  resume: "/resume/Y_Liang_Rusume_June26_JnJ.pdf"
};

export const navItems = [
  { href: "/", label: "Home", code: "MDR-00", description: "Landing console and profile boot sequence" },
  { href: "/about", label: "About", code: "BIO-01", description: "Education, clinical interests, and profile summary" },
  { href: "/experience", label: "Experience", code: "EXP-02", description: "Clinical data science and analytics history" },
  { href: "/projects", label: "Projects", code: "PRJ-03", description: "Survival, SAP, trial analytics, and RWD modules" },
  { href: "/skills", label: "Skills", code: "SKL-04", description: "Statistics, programming, and visualization toolkit" },
  { href: "/contact", label: "Contact", code: "CNT-05", description: "Email, LinkedIn, GitHub, and resume access" }
];

export const focusAreas = [
  "Oncology Endpoints",
  "Survival Analysis",
  "Clinical Trial Analytics",
  "Real-World Data",
  "Statistical Programming",
  "Regulatory Evidence"
];

export const aboutHighlights = [
  {
    title: "Education",
    body:
      "HBSc candidate at the University of Toronto in Quantitative Biology, Genome Biology, and Applied Data Science, ASIP co-op stream, expected June 2028."
  },
  {
    title: "Global Academic Training",
    body:
      "Completed Berkeley Global Access coursework at the University of California, Berkeley before continuing biomedical and data science training in Toronto."
  },
  {
    title: "Clinical Interests",
    body:
      "Focused on oncology efficacy endpoints, Kaplan-Meier estimation, Cox proportional hazards models, RMST, endpoint selection, and trial interpretation."
  },
  {
    title: "Working Style",
    body:
      "Builds reproducible R and SAS workflows, clear summary tables, and executive-ready data stories for clinical and operational decision-making."
  }
];

export const experiences = [
  {
    title: "Clinical Data Science Intern",
    organization: "Akeso Biopharma Inc. - Guangzhou, China",
    period: "May 2026 - Aug 2026",
    icon: BriefcaseMedical,
    bullets: [
      "Applied Kaplan-Meier estimation, Cox proportional hazards models, and proportional hazards diagnostics to oncology trial case studies using R and SAS.",
      "Developed reproducible R and SAS workflows for clinical data exploration, survival endpoint analysis, and statistical output generation.",
      "Evaluated oncology efficacy endpoints including OS, PFS, ORR, and DOR, comparing their clinical and regulatory implications across trial settings.",
      "Explored treatment-effect estimation under non-proportional hazards scenarios using RMST and MaxCombo methodologies."
    ]
  },
  {
    title: "Development and Executive Associate Intern",
    organization: "Zhongyuan Petroleum Products Co., Ltd. - Guangdong, China",
    period: "Jun 2024 - Sep 2024",
    icon: BarChart3,
    bullets: [
      "Analyzed multi-source sales and customer datasets to support operational strategy decisions.",
      "Developed automated reporting workflows using Excel, SQL, and Power BI to improve recurring analysis efficiency.",
      "Prepared visualizations and performance summaries for management reviews and executive decision-making."
    ]
  },
  {
    title: "Leadership and Community Experience",
    organization: "Youth Programs and Community Support",
    period: "Ongoing",
    icon: Users,
    bullets: [
      "Supported tennis instruction, progress assessment, and parent communication for children aged 5-10.",
      "Provided logistical assistance and translation services for local residents during the pandemic.",
      "Strengthened cross-functional communication across scientific, operational, and community-facing contexts."
    ]
  }
];

export const projects = [
  {
    title: "Survival Analysis",
    summary:
      "Time-to-event project space for censoring patterns, median survival, log-rank tests, RMST, and interpretable oncology summaries.",
    image: "/projects/survival-analysis.svg",
    tags: ["R", "Survival", "Oncology"],
    github: "https://github.com/jooleung/survival-analysis",
    report: "/projects/survival-analysis-report.pdf"
  },
  {
    title: "Kaplan-Meier Analysis",
    summary:
      "Kaplan-Meier curves, risk tables, stratified cohorts, and confidence interval interpretation for clinical endpoint reporting.",
    image: "/projects/kaplan-meier-analysis.svg",
    tags: ["Kaplan-Meier", "R", "Visualization"],
    github: "https://github.com/jooleung/kaplan-meier-analysis",
    report: "/projects/kaplan-meier-report.pdf"
  },
  {
    title: "Cox Regression",
    summary:
      "Proportional hazards modeling, covariate adjustment, forest plots, diagnostics, and treatment-effect interpretation.",
    image: "/projects/cox-regression.svg",
    tags: ["Cox PH", "Statistics", "Clinical"],
    github: "https://github.com/jooleung/cox-regression",
    report: "/projects/cox-regression-report.pdf"
  },
  {
    title: "SAP Development",
    summary:
      "Statistical Analysis Plan structure, endpoint definitions, estimands, analysis populations, and mock shell outputs.",
    image: "/projects/sap-development.svg",
    tags: ["SAP", "Trial Design", "SAS"],
    github: "https://github.com/jooleung/sap-development",
    report: "/projects/sap-development-report.pdf"
  },
  {
    title: "Clinical Trial Analytics",
    summary:
      "Analytics concept for efficacy endpoints, data review, formatted summary tables, deviations, and study operations insights.",
    image: "/projects/clinical-trial-analytics.svg",
    tags: ["Clinical Trials", "Dashboards", "SQL"],
    github: "https://github.com/jooleung/clinical-trial-analytics",
    report: "/projects/clinical-trial-analytics-report.pdf"
  },
  {
    title: "Real-World Data Studies",
    summary:
      "Observational cohort construction, treatment patterns, outcomes analysis, data interpretation, and real-world evidence.",
    image: "/projects/real-world-data.svg",
    tags: ["RWD", "Cohorts", "Power BI"],
    github: "https://github.com/jooleung/real-world-data",
    report: "/projects/real-world-data-report.pdf"
  }
];

export const skillGroups = [
  {
    title: "Statistics",
    icon: LineChart,
    skills: ["Survival Analysis", "Kaplan-Meier", "Log-rank Test", "Cox PH", "RMST", "Hypothesis Testing", "Regression Modeling"]
  },
  {
    title: "Clinical Research",
    icon: Stethoscope,
    skills: ["Oncology Endpoints", "OS", "PFS", "ORR", "DOR", "FDA Guidance Review", "SAP Concepts"]
  },
  {
    title: "Programming",
    icon: Database,
    skills: ["R", "SAS", "SQL", "Python", "Excel", "Power BI", "Reproducible Workflows"]
  },
  {
    title: "Data Visualization",
    icon: Presentation,
    skills: ["ggplot2", "survminer", "Clinical Dashboards", "Formatted Tables", "Data Storytelling"]
  }
];

export const quickCapabilities = [
  { label: "R and SAS Survival Workflows", icon: FileSpreadsheet },
  { label: "Oncology Endpoint Interpretation", icon: Beaker },
  { label: "Executive Data Storytelling", icon: Network }
];
