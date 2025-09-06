// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import youtube from './assets/tech_logo/youtube.jpg'
import aktu from './assets/education_logo/aktu.png'
import choice from './assets/company_logo/choice.png'
import GDG from './assets/company_logo/GDG.webp'
import Tata from './assets/company_logo/Tata.jpeg'
import legend from './assets/work_logo/legend.jpg'
import churn from './assets/work_logo/churn.png'
import resume from './assets/work_logo/resume.png'
import medicine from './assets/work_logo/medicine.png'

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
  img: choice, // <-- make sure logo add kiya ho assets me
  role: "Business Development Intern",
  company: "Choice Connect",
  date: "April 2024 - Present",
  desc: "Assisted in client acquisition and market research to identify new business opportunities. Collaborated with senior managers to develop sales strategies, prepared presentations for potential clients, and tracked leads using CRM tools. Focused on improving customer engagement and building long-term relationships.",
  skills: [
    "Business Development",
    "Client Communication",
    "Market Research",
    "Sales Strategy",
    "CRM Tools",
    "Presentation Skills",
    "Negotiation",
    "Team Collaboration"
  ],
    },
    {
       id: 1,
    img: Tata, // <-- yaha Tata x Forge ka logo rakho assets me
    role: "Gen AI + Data Analyst Intern",
    company: "Tata iQ (X-Forge Program)",
    date: "Aug 2024 - Sep 2024",
    desc: "Worked on Generative AI solutions integrated with data analytics for improving delinquency risk models. Performed exploratory data analysis (EDA), feature engineering, and built insights for AI-powered autonomous collections systems.",
    skills: [
      "Python",
      "EDA",
      "Pandas",
      "Machine Learning",
      "Generative AI",
      "Prompt Engineering",
      "Business Strategy"
    ],
    },
    {
      id: 3,
  img: GDG, // <-- assets me GDG ka logo add karna hoga
  role: "Social Media Mentor",
  company: "Google Developer Groups (GDG)",
  date: "2024 - 2025",
  desc: "Guided community members in leveraging social media platforms to increase event reach and engagement. Mentored juniors on personal branding, content strategy, and effective communication. Contributed to organizing tech workshops and hackathons, boosting GDG's community presence.",
  skills: [
    "Social Media Strategy",
    "Mentorship",
    "Content Creation",
    "Community Engagement",
    "Public Speaking",
    "Brand Building"
  ],
    },
  ];
  
  export const education = [
    {
    id: 0,
   img: aktu,
    school: "Dr. A.P.J Abdul Kalam University (Lucknow)",
    date: "2022 - 2026",
    grade: "Currently Pursuing",
    desc: "B.Tech in Computer Science (AI & ML). Learning advanced topics in Data Science, AI, and Software Development.",
    degree: "B.Tech (CSE - AI & ML)",
}
];
  
  export const projects = [
    {
      id: 0,
    title: "Customer Churn Prediction",
    description:
      "A machine learning model with Streamlit dashboard that predicts customer churn risk using scikit-learn.",
    image: churn,
    tags: ["Python", "ML", "Streamlit"],
    github: "https://github.com/krishna/churn-prediction",
    webapp: "",
  },
  {
    id: 1,
    title: "Resume Analyzer",
    description:
      "A React + Node.js application to analyze resumes and match them with job descriptions.",
    image: resume,
    tags: ["React", "Node.js", "MySQL"],
    github: "https://github.com/krishna/resume-analyzer",
    webapp: "",
  },
  {
    id: 2,
    title: "Legend Coders (YouTube)",
    description:
      "YouTube channel where I solve LeetCode problems and share coding tutorials with a DSA tracker freebie.",
    image: legend,
    tags: ["LeetCode", "YouTube", "Education"],
    github: "",
    webapp: "https://youtube.com/@legend_coders?si=weN3Xk6vQPXlpbOK",
    },
  {
    id: 3,
  title: "Medicine Recommendation System",
  description:
    "Built an intelligent recommendation system that suggests medicines based on symptoms and patient history. Implemented NLP techniques for symptom analysis and integrated a rule-based + ML hybrid model for accurate recommendations.",
  image: medicine, // <-- apna medicine project ka logo/screenshot assets me daalna
  tags: ["Python", "Machine Learning", "NLP", "Flask", "Healthcare AI"],
  github: "https://github.com/Krishna49631", // <-- apna repo link daalna
  webapp: "", // agar live deploy kiya hai to link daal sakte ho
  }  
  ];  