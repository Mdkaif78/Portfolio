import React from 'react';
import { 
  Briefcase, 
  Users, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  BrainCircuit, 
  Calendar, 
  MapPin, 
  ShieldCheck,
  Edit3
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience, transferableSkills } = portfolioData;

  const getTransferableIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return Users;
      case 'MessageSquare': return MessageSquare;
      case 'Clock': return Clock;
      case 'CheckCircle2': return ShieldCheck;
      case 'Sparkles': return Sparkles;
      case 'BrainCircuit': return BrainCircuit;
      default: return Sparkles;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-[#DDE2EB] dark:border-[#30405B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block font-mono text-xs uppercase tracking-wider text-[#315DDC] dark:text-[#91ACFF] mb-2">
            05 / Workplace Readiness
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17243B] dark:text-[#F8F7F4]">
            Experience & Transferable Skills
          </h2>
          <p className="text-base text-[#59677C] dark:text-[#ACB9CE] mt-2 max-w-2xl">
            Essential workplace competencies developed through customer-facing roles, collaborative projects, and academic balance.
          </p>
        </div>

        {/* Transferable Skills Highlights Grid */}
        <div className="mb-14">
          <h3 className="text-base font-bold font-mono uppercase tracking-wider text-[#17243B] dark:text-[#F8F7F4] mb-5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF]" />
            <span>Key Transferable Strengths</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {transferableSkills.map((skill, index) => {
              const Icon = getTransferableIcon(skill.iconName);
              return (
                <div 
                  key={index}
                  className="editorial-card rounded-md p-5 space-y-2.5"
                >
                  <div className="w-8 h-8 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] flex items-center justify-center text-[#315DDC] dark:text-[#91ACFF]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#17243B] dark:text-[#F8F7F4]">
                    {skill.title}
                  </h4>
                  <p className="text-xs text-[#59677C] dark:text-[#ACB9CE] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Employment Experience Timeline & Editable Card */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-base font-bold font-mono uppercase tracking-wider text-[#17243B] dark:text-[#F8F7F4] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF]" />
              <span>Employment History & Work Environment</span>
            </h3>

            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE] bg-[#F8F7F4] dark:bg-[#131F33] px-2.5 py-1 rounded border border-[#DDE2EB] dark:border-[#30405B]">
              <Edit3 className="w-3 h-3 text-[#315DDC] dark:text-[#91ACFF]" />
              <span>Configurable in portfolioData.ts</span>
            </div>
          </div>

          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="editorial-card rounded-md p-6 sm:p-7 space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-[#DDE2EB] dark:border-[#30405B]">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#17243B] dark:text-[#F8F7F4]">
                      {exp.title}
                    </h4>
                    <p className="text-xs font-mono text-[#315DDC] dark:text-[#91ACFF] font-semibold">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#59677C] dark:text-[#ACB9CE] font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#315DDC] dark:text-[#91ACFF]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#315DDC] dark:text-[#91ACFF]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#59677C] dark:text-[#ACB9CE] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 pt-1">
                  {exp.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-[#17243B]/90 dark:text-[#F8F7F4]/90 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#315DDC] dark:bg-[#91ACFF] mt-1.5 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Edit Advice Banner */}
                {exp.isPlaceholder && (
                  <div className="pt-3 border-t border-[#DDE2EB] dark:border-[#30405B] text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE]">
                    Note: If you have part-time retail, customer service, tutoring, or campus work experience, replace this template with your exact company name and responsibilities in <span className="text-[#315DDC] dark:text-[#91ACFF]">portfolioData.ts</span>.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
