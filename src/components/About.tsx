import React from 'react';
import { 
  Compass, 
  BookOpen, 
  Lightbulb, 
  Target, 
  Users
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: BookOpen,
      index: "01",
      title: "Academic Grounding",
      description: "Studying BSc (Hons) Computer Science at University of Wolverhampton, building a rigorous foundation in algorithms, databases, and software fundamentals."
    },
    {
      icon: Lightbulb,
      index: "02",
      title: "Practical Learning",
      description: "Dedicated to hands-on coding practice in Python and SQL, learning how to write structured code and troubleshoot errors systematically."
    },
    {
      icon: Users,
      index: "03",
      title: "Team Player & Communicator",
      description: "Valuing active listening, constructive feedback, and mutual support—qualities honed through group academic tasks and employment experience."
    },
    {
      icon: Target,
      index: "04",
      title: "Placement Ready",
      description: "Actively seeking a 12-month industrial placement in the UK, enthusiastic to absorb engineering best practices and contribute genuinely from day one."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 border-b border-[#DDE2EB] dark:border-[#30405B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-block font-mono text-xs uppercase tracking-wider text-[#315DDC] dark:text-[#91ACFF] mb-2">
            01 / Introduction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17243B] dark:text-[#F8F7F4]">
            About Me
          </h2>
          <p className="text-base text-[#59677C] dark:text-[#ACB9CE] mt-2 max-w-2xl">
            A motivated Computer Science undergraduate combining genuine curiosity with a strong work ethic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="editorial-card rounded-md p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-[#17243B] dark:text-[#F8F7F4] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF]" />
                <span>My Journey & Professional Approach</span>
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-[#17243B]/90 dark:text-[#F8F7F4]/90 leading-relaxed max-w-prose">
                {personal.bioParagraphs.map((para, index) => (
                  <p key={index}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Career Goal Callout with Left Accent Border */}
              <div className="p-4 rounded bg-[#F8F7F4] dark:bg-[#131F33] border-l-2 border-[#315DDC] dark:border-[#91ACFF] space-y-1 mt-6">
                <div className="text-xs uppercase tracking-wider font-mono font-semibold text-[#315DDC] dark:text-[#91ACFF]">
                  Industrial Placement Objective
                </div>
                <p className="text-xs sm:text-sm text-[#59677C] dark:text-[#ACB9CE] leading-relaxed">
                  {personal.careerGoal}
                </p>
              </div>
            </div>

            {/* Quick summary metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="editorial-card p-3.5 rounded-md text-center">
                <div className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE]">Degree</div>
                <div className="font-semibold text-sm text-[#17243B] dark:text-[#F8F7F4] mt-0.5">BSc (Hons)</div>
                <div className="text-[11px] text-[#315DDC] dark:text-[#91ACFF]">Comp Science</div>
              </div>

              <div className="editorial-card p-3.5 rounded-md text-center">
                <div className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE]">Institution</div>
                <div className="font-semibold text-sm text-[#17243B] dark:text-[#F8F7F4] mt-0.5">Univ. of</div>
                <div className="text-[11px] text-[#315DDC] dark:text-[#91ACFF]">Wolverhampton</div>
              </div>

              <div className="editorial-card p-3.5 rounded-md text-center">
                <div className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE]">Location</div>
                <div className="font-semibold text-sm text-[#17243B] dark:text-[#F8F7F4] mt-0.5">Birmingham</div>
                <div className="text-[11px] text-[#59677C] dark:text-[#ACB9CE]">United Kingdom</div>
              </div>

              <div className="editorial-card p-3.5 rounded-md text-center">
                <div className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE]">Target Role</div>
                <div className="font-semibold text-sm text-[#17243B] dark:text-[#F8F7F4] mt-0.5">12 Months</div>
                <div className="text-[11px] text-[#315DDC] dark:text-[#91ACFF]">Placement Year</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Highlight Cards with Indices */}
          <div className="lg:col-span-5 space-y-3.5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="editorial-card rounded-md p-5 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] flex items-center justify-center text-[#315DDC] dark:text-[#91ACFF] flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[#17243B] dark:text-[#F8F7F4] text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <span className="font-mono text-xs text-[#59677C] dark:text-[#ACB9CE]">
                        {item.index}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#59677C] dark:text-[#ACB9CE] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
