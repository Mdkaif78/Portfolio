import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { personal, social } = portfolioData;

  return (
    <section className="hero-section relative pt-28 pb-20 sm:pt-36 sm:pb-24 border-b border-[#DDE2EB] dark:border-[#30405B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Main Hero Content */}
          <div className="hero-copy lg:col-span-7 space-y-6">
            
            {/* Placement Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFFFFF] dark:bg-[#18243A] border border-[#DDE2EB] dark:border-[#30405B] text-xs font-mono text-[#315DDC] dark:text-[#91ACFF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#315DDC] dark:bg-[#91ACFF]"></span>
              <span>{personal.placementStatus}</span>
            </div>

            {/* Headline & Subheading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17243B] dark:text-[#F8F7F4] leading-[1.1]">
                <span className="hero-greeting">Hi, I'm</span> <span className="hero-name">{personal.name}.</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#315DDC] dark:text-[#91ACFF]">
                {personal.subheading}
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base text-[#59677C] dark:text-[#ACB9CE] max-w-2xl leading-relaxed">
              {personal.bioIntro}
            </p>

            {/* Meta Tags: Location & University */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#59677C] dark:text-[#ACB9CE] pt-1">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF]" />
                <span>{personal.university}</span>
              </div>
              <span className="hidden sm:inline text-[#DDE2EB] dark:text-[#30405B]">/</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF]" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#315DDC] hover:bg-[#2448B2] text-white font-medium text-sm transition-colors"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#FFFFFF] dark:bg-[#18243A] hover:border-[#315DDC] dark:hover:border-[#91ACFF] text-[#17243B] dark:text-[#F8F7F4] font-medium text-sm border border-[#DDE2EB] dark:border-[#30405B] transition-colors"
              >
                <FileDown className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF]" />
                <span>Download My CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider font-mono text-[#59677C] dark:text-[#ACB9CE]">Links:</span>
              <div className="flex items-center gap-2">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-[#FFFFFF] dark:bg-[#18243A] border border-[#DDE2EB] dark:border-[#30405B] text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] hover:border-[#315DDC] dark:hover:border-[#91ACFF] transition-colors"
                  aria-label="GitHub Profile"
                  title="View GitHub (Editable URL)"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-[#FFFFFF] dark:bg-[#18243A] border border-[#DDE2EB] dark:border-[#30405B] text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] hover:border-[#315DDC] dark:hover:border-[#91ACFF] transition-colors"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn (Editable URL)"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-[#FFFFFF] dark:bg-[#18243A] border border-[#DDE2EB] dark:border-[#30405B] text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] hover:border-[#315DDC] dark:hover:border-[#91ACFF] transition-colors"
                  aria-label="Instagram Profile"
                  title="View Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${social.email}`}
                  className="p-2 rounded bg-[#FFFFFF] dark:bg-[#18243A] border border-[#DDE2EB] dark:border-[#30405B] text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] hover:border-[#315DDC] dark:hover:border-[#91ACFF] transition-colors"
                  aria-label="Email Me"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Architectural Code Snapshot */}
          <div className="hero-profile lg:col-span-5">
            <div className="editorial-card rounded-md overflow-hidden">
              
              {/* Card top window bar */}
              <div className="px-4 py-3 bg-[#F8F7F4] dark:bg-[#131F33] border-b border-[#DDE2EB] dark:border-[#30405B] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DDE2EB] dark:bg-[#30405B]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DDE2EB] dark:bg-[#30405B]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DDE2EB] dark:bg-[#30405B]"></span>
                  <span className="ml-2 font-mono text-xs text-[#59677C] dark:text-[#ACB9CE]">
                    candidate.config.ts
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#315DDC] dark:text-[#91ACFF] font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>undergrad</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs text-[#17243B] dark:text-[#F8F7F4] space-y-1.5 leading-relaxed bg-[#FFFFFF] dark:bg-[#18243A]">
                <div>
                  <span className="text-[#315DDC] dark:text-[#91ACFF] font-semibold">interface</span> CandidateProfile &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[#59677C] dark:text-[#ACB9CE]">name:</span> "{personal.name}",
                </div>
                <div className="pl-4">
                  <span className="text-[#59677C] dark:text-[#ACB9CE]">degree:</span> "BSc Computer Science",
                </div>
                <div className="pl-4">
                  <span className="text-[#59677C] dark:text-[#ACB9CE]">university:</span> "University of Wolverhampton",
                </div>
                <div className="pl-4">
                  <span className="text-[#59677C] dark:text-[#ACB9CE]">foundations:</span> ["Python", "SQL", "Git"],
                </div>
                <div className="pl-4">
                  <span className="text-[#59677C] dark:text-[#ACB9CE]">placementGoal:</span> "12-Month Industrial Placement",
                </div>
                <div className="pl-4">
                  <span className="text-[#59677C] dark:text-[#ACB9CE]">growthMindset:</span> <span className="text-[#315DDC] dark:text-[#91ACFF] font-semibold">true</span>
                </div>
                <div>&#125;</div>
              </div>

              {/* Recruiter Transparency Callout */}
              <div className="p-4 bg-[#F8F7F4] dark:bg-[#131F33] border-t border-[#DDE2EB] dark:border-[#30405B] text-xs text-[#59677C] dark:text-[#ACB9CE] space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-[#17243B] dark:text-[#F8F7F4]">
                  <Sparkles className="w-3.5 h-3.5 text-[#315DDC] dark:text-[#91ACFF]" />
                  <span>Recruiter & Placement Note</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Early-stage undergraduate presenting honest capabilities: strong problem-solving mindset, fast learner, and dedicated to mastering industry standards under professional guidance.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
