import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  GitBranch, 
  FileCode, 
  Cpu, 
  Terminal, 
  Bug, 
  Users, 
  Sparkles, 
  Info
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programming & Languages',
    'Databases & Tools',
    'Core CS Fundamentals',
    'Transferable Strengths'
  ];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  const getBadgeStyle = (level: SkillItem['level']) => {
    switch (level) {
      case 'Beginner':
        return 'bg-[#F8F7F4] dark:bg-[#131F33] text-[#59677C] dark:text-[#ACB9CE] border-[#DDE2EB] dark:border-[#30405B]';
      case 'Learning':
        return 'bg-[#EDF1FF] dark:bg-[#1C2C4E] text-[#315DDC] dark:text-[#91ACFF] border-[#315DDC]/30 dark:border-[#91ACFF]/40 font-semibold';
      case 'Developing':
        return 'bg-[#F8F7F4] dark:bg-[#131F33] text-[#17243B] dark:text-[#F8F7F4] border-[#DDE2EB] dark:border-[#30405B] font-semibold';
      case 'Core Competency':
        return 'bg-[#315DDC] text-white border-[#315DDC] font-semibold';
      default:
        return 'bg-[#F8F7F4] text-[#59677C] border-[#DDE2EB]';
    }
  };

  const getSkillIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('python')) return Code2;
    if (n.includes('sql')) return Database;
    if (n.includes('git')) return GitBranch;
    if (n.includes('html') || n.includes('javascript')) return FileCode;
    if (n.includes('debugging')) return Bug;
    if (n.includes('fundamentals')) return Cpu;
    if (n.includes('teamwork')) return Users;
    if (n.includes('tools')) return Terminal;
    return Sparkles;
  };

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-[#DDE2EB] dark:border-[#30405B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block font-mono text-xs uppercase tracking-wider text-[#315DDC] dark:text-[#91ACFF] mb-2">
            02 / Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17243B] dark:text-[#F8F7F4]">
            Skills & Technical Profile
          </h2>
          <p className="text-base text-[#59677C] dark:text-[#ACB9CE] mt-2 max-w-2xl">
            An honest, transparent view of my programming foundations, developer tools, and teamwork abilities.
          </p>
        </div>

        {/* Transparency Banner */}
        <div className="mb-10 p-4 rounded-md bg-[#FFFFFF] dark:bg-[#18243A] border border-[#DDE2EB] dark:border-[#30405B] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF] flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#59677C] dark:text-[#ACB9CE] leading-relaxed">
            <strong className="font-semibold text-[#17243B] dark:text-[#F8F7F4]">Recruiter Note: </strong>
            These skill ratings accurately represent an enthusiastic Computer Science undergraduate developing early-career proficiency. I prioritize understanding core concepts deeply rather than falsely claiming senior expertise.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8 border-b border-[#DDE2EB] dark:border-[#30405B] pb-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#315DDC] text-white font-semibold'
                  : 'bg-transparent text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] hover:bg-[#DDE2EB]/30 dark:hover:bg-[#30405B]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Organized Editorial Skills Grid (No arbitrary progress bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = getSkillIcon(skill.name);
            return (
              <div 
                key={index}
                className="editorial-card rounded-md p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-8 h-8 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] flex items-center justify-center text-[#315DDC] dark:text-[#91ACFF]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`px-2 py-0.5 text-[11px] font-mono rounded border ${getBadgeStyle(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#17243B] dark:text-[#F8F7F4] mb-0.5">
                    {skill.name}
                  </h3>
                  
                  <div className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE] mb-2.5">
                    {skill.category}
                  </div>

                  <p className="text-xs sm:text-sm text-[#59677C] dark:text-[#ACB9CE] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
