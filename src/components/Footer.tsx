import React from 'react';
import { 
  ArrowUp, 
  Mail
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal, social } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#30405B] bg-[#18243A] text-[#F8F7F4] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#30405B]">
          
          {/* Identity & Ambition */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-7 h-7 rounded bg-[#131F33] border border-[#30405B] flex items-center justify-center font-mono font-semibold text-xs text-[#F8F7F4]">
                MK
              </div>
              <span className="font-bold text-[#F8F7F4] text-sm tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-[#ACB9CE] max-w-md leading-relaxed">
              BSc (Hons) Computer Science undergraduate at University of Wolverhampton • Seeking 12-Month UK Industrial Placement.
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#131F33] border border-[#30405B] text-[#ACB9CE] hover:text-[#F8F7F4] hover:border-[#91ACFF] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#131F33] border border-[#30405B] text-[#ACB9CE] hover:text-[#F8F7F4] hover:border-[#91ACFF] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${social.email}`}
                className="p-2 rounded bg-[#131F33] border border-[#30405B] text-[#ACB9CE] hover:text-[#F8F7F4] hover:border-[#91ACFF] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#131F33] text-xs font-mono text-[#ACB9CE] hover:text-[#F8F7F4] border border-[#30405B] hover:border-[#91ACFF] transition-colors"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#ACB9CE] font-mono text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div>
            Swiss Modernist Editorial Design • React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
