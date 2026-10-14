import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Briefcase
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-24 border-b border-[#DDE2EB] dark:border-[#30405B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block font-mono text-xs uppercase tracking-wider text-[#315DDC] dark:text-[#91ACFF] mb-2">
            04 / Academics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17243B] dark:text-[#F8F7F4]">
            Education & Qualifications
          </h2>
          <p className="text-base text-[#59677C] dark:text-[#ACB9CE] mt-2 max-w-2xl">
            University studies providing rigorous theoretical understanding and practical programming foundations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div 
              key={index}
              className="editorial-card rounded-md p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#DDE2EB] dark:border-[#30405B]">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F8F7F4] dark:bg-[#131F33] text-[#315DDC] dark:text-[#91ACFF] text-xs font-mono font-semibold border border-[#DDE2EB] dark:border-[#30405B]">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{item.status}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#17243B] dark:text-[#F8F7F4]">
                    {item.degree}
                  </h3>

                  <div className="text-sm font-semibold text-[#315DDC] dark:text-[#91ACFF]">
                    {item.institution}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-[#59677C] dark:text-[#ACB9CE] font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#315DDC] dark:text-[#91ACFF]" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#315DDC] dark:text-[#91ACFF]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Course Overview Description */}
              <p className="text-sm sm:text-base text-[#17243B]/90 dark:text-[#F8F7F4]/90 leading-relaxed">
                {item.description}
              </p>

              {/* Core Modules Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-[#59677C] dark:text-[#ACB9CE] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#315DDC] dark:text-[#91ACFF]" />
                  <span>Key Subject Areas & Foundational Modules:</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.coreModules.map((module, mIdx) => (
                    <div 
                      key={mIdx}
                      className="p-3 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] flex items-center gap-2.5 text-xs sm:text-sm text-[#17243B] dark:text-[#F8F7F4] font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#315DDC] dark:bg-[#91ACFF] flex-shrink-0"></span>
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industrial Placement Year Callout */}
              <div className="p-4 rounded bg-[#F8F7F4] dark:bg-[#131F33] border-l-2 border-[#315DDC] dark:border-[#91ACFF] flex items-start gap-3 mt-4">
                <div className="p-1.5 rounded bg-[#FFFFFF] dark:bg-[#18243A] border border-[#DDE2EB] dark:border-[#30405B] text-[#315DDC] dark:text-[#91ACFF] flex-shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-xs uppercase tracking-wider font-mono font-semibold text-[#17243B] dark:text-[#F8F7F4]">
                    Industrial Placement Year Program
                  </h5>
                  <p className="text-xs text-[#59677C] dark:text-[#ACB9CE] leading-relaxed">
                    This degree incorporates a full-time, 12-month industrial sandwich placement intended to accelerate professional engineering growth before the final honours year.
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
