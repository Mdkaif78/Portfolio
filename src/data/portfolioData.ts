export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  status: 'Idea / Planned' | 'In Progress' | 'Completed';
  isPlanned: boolean;
  plannedFeatures: string[];
  learningGoals: string[];
  githubUrl?: string; // Optional: leave empty or provide real link
  liveUrl?: string;   // Optional: leave empty or provide real link
}

export interface SkillItem {
  name: string;
  category: 'Programming & Languages' | 'Databases & Tools' | 'Core CS Fundamentals' | 'Transferable Strengths';
  level: 'Beginner' | 'Learning' | 'Developing' | 'Core Competency';
  levelPercentage: number; // for visual progress indicators
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  coreModules: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  isPlaceholder: boolean;
  summary: string;
  bulletPoints: string[];
}

export interface TransferableSkillItem {
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    subheading: string;
    university: string;
    degree: string;
    location: string;
    careerGoal: string;
    placementStatus: string;
    bioIntro: string;
    bioParagraphs: string[];
    cvFileName: string;
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
    instagram: string;
  };
  skills: SkillItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  transferableSkills: TransferableSkillItem[];
}

/**
 * ====================================================================
 * MOHAMMAD KAIF - PORTFOLIO CONFIGURATION
 * Edit your personal details, links, projects, and skills right here!
 * ====================================================================
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: "Mohammad Kaif",
    role: "Computer Science Undergraduate | Aspiring Software Developer",
    headline: "Hi, I'm Mohammad Kaif.",
    subheading: "Computer Science Student | Aspiring Software Developer",
    university: "University of Wolverhampton, United Kingdom",
    degree: "BSc (Hons) Computer Science",
    location: "Birmingham, UK",
    careerGoal: "Secure a 12-month industrial placement in the UK as a Junior Software Developer / Technology Placement Intern.",
    placementStatus: "Open to 12-Month UK Industrial Placement (2025/2026)",
    bioIntro: "I'm a Computer Science undergraduate at the University of Wolverhampton, passionate about technology, problem-solving, and building practical solutions. I'm continuously developing my technical skills and looking for a placement opportunity where I can learn from experienced professionals and contribute to real-world projects.",
    bioParagraphs: [
      "Currently pursuing my BSc (Hons) in Computer Science at the University of Wolverhampton, I am building solid foundational knowledge in programming logic, database structures, and software engineering principles.",
      "As an aspiring developer, I believe in honest growth: I take pride in understanding core concepts from first principles—debugging errors methodically, writing clean code, and learning modern developer tools step by step.",
      "I am eager to secure a 12-month industrial placement within a UK technology team where I can apply my motivation, adapt rapidly to production environments, and bring strong work ethic and collaboration to real-world projects."
    ],
    cvFileName: "cv.pdf",
  },

  social: {
    github: "https://github.com/Mdkaif78",
    linkedin: "https://www.linkedin.com/in/mohammad-kaif-533a273a4?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    email: "kaifmd2078@gmail.com",
    instagram: "https://www.instagram.com/kaifu_say.s?xtok=MWxxc29mYTFoajJycA%3D%3D&utm_source=qr",
  },

  skills: [
    // Programming & Languages
    {
      name: "Python",
      category: "Programming & Languages",
      level: "Learning",
      levelPercentage: 55,
      description: "Developing core scripting skills, data structures, loops, file handling, and structured programming logic."
    },
    {
      name: "SQL",
      category: "Programming & Languages",
      level: "Learning",
      levelPercentage: 50,
      description: "Understanding relational schema designs, table creation, primary/foreign keys, and foundational SELECT/JOIN queries."
    },
    {
      name: "HTML & CSS",
      category: "Programming & Languages",
      level: "Developing",
      levelPercentage: 65,
      description: "Structuring semantic web pages, responsive layouts with Flexbox and modern CSS, and styling clean interfaces."
    },
    {
      name: "JavaScript",
      category: "Programming & Languages",
      level: "Beginner",
      levelPercentage: 45,
      description: "Learning DOM manipulation, event listeners, basic functions, asynchronous concepts, and modern ES6 syntax."
    },

    // Databases & Tools
    {
      name: "Git & GitHub",
      category: "Databases & Tools",
      level: "Learning",
      levelPercentage: 55,
      description: "Version control fundamentals including git init, commit, branch workflows, pushing code, and remote repository management."
    },
    {
      name: "VS Code & Developer Tools",
      category: "Databases & Tools",
      level: "Developing",
      levelPercentage: 70,
      description: "Configuring extensions, terminal execution, linting, debugging, and maintaining an organized workspace."
    },

    // Core CS Fundamentals
    {
      name: "Programming Fundamentals",
      category: "Core CS Fundamentals",
      level: "Developing",
      levelPercentage: 60,
      description: "Control flow, procedural decomposition, algorithmic thinking, variables, data types, and modular code design."
    },
    {
      name: "Problem-Solving & Debugging",
      category: "Core CS Fundamentals",
      level: "Learning",
      levelPercentage: 55,
      description: "Methodically tracing syntax and runtime exceptions, reading error logs, testing edge cases, and continuous debugging."
    },

    // Transferable Strengths
    {
      name: "Teamwork & Collaboration",
      category: "Transferable Strengths",
      level: "Core Competency",
      levelPercentage: 80,
      description: "Active collaboration in group assignments and workplace situations, listening effectively and supporting peers."
    },
    {
      name: "Communication & Adaptability",
      category: "Transferable Strengths",
      level: "Core Competency",
      levelPercentage: 80,
      description: "Explaining reasoning clearly, receiving constructive feedback positively, and quickly picking up new tools."
    }
  ],

  projects: [
    {
      id: "project-expense-tracker",
      title: "Python Expense Tracker",
      subtitle: "Personal Finance & Category Spending Summary",
      description: "A planned command-line financial tool to log daily expenditures, track recurring income, categorize budget items, and generate real-time spending summaries.",
      technologies: ["Python", "File Handling (CSV/JSON)", "Data Structures"],
      status: "Idea / Planned",
      isPlanned: true,
      plannedFeatures: [
        "Record and categorize daily transactions (Groceries, Transport, Bills, Leisure)",
        "Calculate total monthly income vs. expenditure with net savings balance",
        "Generate formatted text spending summaries and percentage breakdowns",
        "Persistent local data storage using structured CSV or JSON files"
      ],
      learningGoals: [
        "Mastering Python file I/O operations and exception handling",
        "Working with lists, dictionaries, and structured data manipulation",
        "Designing intuitive terminal-based user menus with clean input validation"
      ],
      githubUrl: "", // Add your repository URL once you start coding it
      liveUrl: ""
    },
    {
      id: "project-grade-calculator",
      title: "Student Grade Calculator",
      subtitle: "Academic Performance & Weighted Mark Calculator",
      description: "A proposed Python utility designed to compute overall module grades, calculate weighted average marks across coursework and exams, and validate score boundaries.",
      technologies: ["Python", "Input Validation", "Algorithmic Logic"],
      status: "Idea / Planned",
      isPlanned: true,
      plannedFeatures: [
        "Interactive CLI prompting for individual assignment scores and weightings",
        "Robust input validation preventing invalid negative numbers or out-of-range marks",
        "Calculation of final percentage and corresponding UK classification (First, 2:1, 2:2, Third)",
        "Formatted grade summary output displaying pass/fail indicators per module"
      ],
      learningGoals: [
        "Implementing defensive programming through while-loops and try-except blocks",
        "Designing reusable mathematical calculation functions with unit considerations",
        "Clean terminal formatting and automated report printing"
      ],
      githubUrl: "",
      liveUrl: ""
    },
    {
      id: "project-student-database",
      title: "Student Database Management System",
      subtitle: "Relational Record Management & Querying Tool",
      description: "A planned database-driven application to store, retrieve, search, and organize student records, demonstrating relational database schemas and CRUD operations.",
      technologies: ["SQL", "Python", "SQLite / PostgreSQL", "Database Design"],
      status: "Idea / Planned",
      isPlanned: true,
      plannedFeatures: [
        "Relational database schema linking students, modules, and enrollment tables",
        "Full CRUD operations: Create new student entries, Read records, Update details, Delete files",
        "Custom SQL queries to filter students by degree pathway, academic year, and status",
        "Parameterized SQL statements to practice safe query execution"
      ],
      learningGoals: [
        "Connecting Python applications to relational databases (SQLite / DB-API)",
        "Mastering primary keys, foreign keys, table joins, and referential integrity",
        "Developing structured database schemas with normalization principles"
      ],
      githubUrl: "",
      liveUrl: ""
    }
  ],

  education: [
    {
      degree: "BSc (Hons) Computer Science",
      institution: "University of Wolverhampton",
      location: "Wolverhampton / West Midlands, UK",
      period: "2024 - Present (Anticipated Graduation 2027/2028 with Placement)",
      status: "Currently Enrolled (Undergraduate)",
      description: "Comprehensive degree program focused on core software development, computational logic, relational database systems, algorithms, and practical computing problem-solving.",
      coreModules: [
        "Software Development Fundamentals",
        "Relational Databases & SQL",
        "Computer Systems & Architecture",
        "Discrete Mathematics & Algorithmic Thinking",
        "Problem Solving & Programming Foundations"
      ]
    }
  ],

  experience: [
    {
      title: "Customer Service & Team Member [Editable Experience]",
      company: "[Your Employer / Company Name]",
      period: "2023 - Present (Editable)",
      location: "Birmingham, United Kingdom",
      isPlaceholder: true,
      summary: "Customer-facing role demonstrating dependability, fast-paced teamwork, following operational guidelines, and delivering high quality service under pressure.",
      bulletPoints: [
        "Collaborated effectively with colleagues across busy operational shifts to maintain high team standards.",
        "Demonstrated strong verbal communication and active listening skills when addressing customer queries.",
        "Exercised reliable time management and personal accountability, balancing shift commitments alongside university studies.",
        "Adhered strictly to workplace safety regulations, cash-handling protocols, and store procedures."
      ]
    }
  ],

  transferableSkills: [
    {
      title: "Teamwork & Collaboration",
      description: "Thrives in collaborative environments, actively supporting peers, listening with respect, and achieving group goals together.",
      iconName: "Users"
    },
    {
      title: "Clear Communication",
      description: "Articulates thoughts and technical queries clearly, both in written documentation and verbal discussions with supervisors.",
      iconName: "MessageSquare"
    },
    {
      title: "Time Management",
      description: "Balances academic deadlines, independent study, and workplace responsibilities through disciplined scheduling and focus.",
      iconName: "Clock"
    },
    {
      title: "Reliability & Integrity",
      description: "Follows technical guidelines and workplace procedures diligently, taking pride in being punctual and accountable.",
      iconName: "CheckCircle2"
    },
    {
      title: "Growth Mindset & Curiosity",
      description: "Embraces constructive critique as a stepping stone to mastery; motivated to learn new stacks and industry practices.",
      iconName: "Sparkles"
    },
    {
      title: "Methodical Problem-Solving",
      description: "Breaks complex challenges into digestible steps, researching documentation and debugging patiently until resolved.",
      iconName: "BrainCircuit"
    }
  ]
};
