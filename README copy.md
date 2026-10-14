# Mohammad Kaif — Personal Developer Portfolio

> **BSc (Hons) Computer Science Undergraduate | University of Wolverhampton**  
> Seeking a 12-Month UK Industrial Placement (2025 / 2026)

A modern, high-performance personal portfolio website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed specifically to showcase Computer Science fundamentals, active learning roadmaps, and transferable workplace competencies to technology recruiters and university placement advisors.

---

## 🌟 Key Features

- **Recruiter-Ready & Authentic:** Honest presentation of early-career abilities with zero exaggerated metrics or fabricated links.
- **Dark/Light Mode:** Default premium dark navy & black theme with subtle electric-blue/purple radial glows, plus clean light mode toggle.
- **Centralized Data File:** All personal details, skills, projects, and contact info live in a single file (`src/data/portfolioData.ts`).
- **Interactive CV Download:** Pre-configured to download `/public/cv.pdf`, paired with a helper modal and profile summary fallback.
- **Direct Contact System:** Integrated validation with direct email client launcher (`mailto:`) and one-click clipboard copying.
- **Fast & Responsive:** Mobile-first responsive layout with smooth transitions, glassmorphism cards, and Lucide vector icons.

---

## 📁 Project Structure

```text
mohammad-kaif-portfolio/
├── public/
│   ├── cv.pdf               # Place your official PDF resume here
│   ├── favicon.svg          # Custom MK vector monogram favicon
│   └── README_CV.md         # Instructions for updating your CV
├── src/
│   ├── components/
│   │   ├── About.tsx        # Academic journey, career goals & key pillars
│   │   ├── Contact.tsx      # Contact cards & validated inquiry form
│   │   ├── CVModal.tsx      # CV download handler & recruiter quick summary
│   │   ├── Education.tsx    # Degree, University of Wolverhampton & modules
│   │   ├── Experience.tsx   # Workplace competencies & editable job card
│   │   ├── Footer.tsx       # Copyright, back-to-top button & social links
│   │   ├── Hero.tsx         # Headline, placement badge, CTA buttons & preview
│   │   ├── Icons.tsx        # Clean SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx       # Sticky glass header, navigation & theme toggle
│   │   ├── Projects.tsx     # Learning roadmap project gallery & details
│   │   └── Skills.tsx       # Categorized skills with honest level badges
│   ├── data/
│   │   └── portfolioData.ts # ⭐ EDIT ALL YOUR CONTENT HERE ⭐
│   ├── hooks/
│   │   └── useTheme.ts      # Dark/light theme state & localStorage sync
│   ├── App.tsx              # Main layout assembler
│   ├── index.css            # Tailwind directives, glass effects & scrollbars
│   └── main.tsx             # React DOM entry point
├── package.json             # Scripts & dependencies
├── tailwind.config.js       # Custom navy, electric-blue & purple palette
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

---

## 🚀 Quick Start (Run Locally)

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **Git**

### 2. Install Dependencies
Open PowerShell or your terminal in the project directory:

```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Open your browser and navigate to the local URL displayed (typically `http://localhost:5173`).

### 4. Build for Production
To test or create an optimized production build:
```bash
npm run build
npm run preview
```

---

## ✏️ How to Customize Your Information

You do not need to hunt through dozens of files to update your website. Everything is centralized in **`src/data/portfolioData.ts`**:

### 1. Update Name, Bio & Location
Open `src/data/portfolioData.ts` and edit the `personal` section:
```typescript
personal: {
  name: "Mohammad Kaif",
  role: "Computer Science Undergraduate | Aspiring Software Developer",
  university: "University of Wolverhampton, United Kingdom",
  degree: "BSc (Hons) Computer Science",
  location: "Birmingham, UK",
  careerGoal: "Secure a 12-month industrial placement in the UK...",
  // ...
}
```

### 2. Update Social Links & Email
In `src/data/portfolioData.ts`, edit the `social` object:
```typescript
social: {
  github: "https://github.com/YourGitHubUsername",
  linkedin: "https://www.linkedin.com/in/YourLinkedInProfile",
  email: "your.real.email@example.com",
}
```

### 3. Update Your CV (Resume)
1. Export your latest CV from Word or Google Docs as a PDF named `cv.pdf`.
2. Move it into the `public/` folder, replacing `public/cv.pdf`.
3. That is all! The **Download My CV** button will immediately download your file.

### 4. Add or Update Projects
As you write code for your Python or SQL projects:
1. Open `src/data/portfolioData.ts`.
2. Locate the project item in `projects`.
3. Add your GitHub repository link:
   ```typescript
   githubUrl: "https://github.com/YourUsername/expense-tracker",
   ```
4. Change status from `'Idea / Planned'` to `'In Progress'` or `'Completed'`.

### 5. Update Part-Time / Employment Experience
In `src/data/portfolioData.ts`, update the `experience` array with your actual employer name, employment dates, and key responsibilities.

---

## 🐙 Push to GitHub

To publish this portfolio to your GitHub account:

1. Initialize git and make your initial commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete modern personal portfolio for Mohammad Kaif"
   ```

2. Create a new repository on [GitHub](https://github.com/new) (e.g. named `mohammad-kaif-portfolio`).
   *Do NOT initialize with a README, .gitignore, or license as they are already included.*

3. Link your remote repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/mohammad-kaif-portfolio.git
   git push -u origin main
   ```

---

## 🌐 Deploy to Vercel (Free & Instant)

**Vercel** is the easiest and most reliable way to host your portfolio online for free:

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Select your `mohammad-kaif-portfolio` repository.
4. Vercel will automatically detect **Vite**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.
6. Within ~30 seconds, your site will be live with a free custom URL (e.g. `https://mohammad-kaif-portfolio.vercel.app`) and an SSL certificate.

---

## 🎓 Tips for Placement Advisors & Recruiters

When applying for 12-month UK industrial placements:
- Include the live link in your CV header: `Portfolio: https://your-portfolio.vercel.app`
- Add the link to your LinkedIn profile under **Featured Links**.
- Add the repository link to your GitHub pinned repositories.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
