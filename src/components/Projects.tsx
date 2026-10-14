import React from 'react';
import { 
  ExternalLink, 
  Terminal, 
  Layers, 
  Sparkles, 
  Clock, 
  AlertCircle
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-[#DDE2EB] dark:border-[#30405B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block font-mono text-xs uppercase tracking-wider text-[#315DDC] dark:text-[#91ACFF] mb-2">
            03 / Works & Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17243B] dark:text-[#F8F7F4]">
            Featured Projects & Learning Builds
          </h2>
          <p className="text-base text-[#59677C] dark:text-[#ACB9CE] mt-2 max-w-2xl">
            Practical applications designed to exercise problem-solving, structured programming, and database operations.
          </p>
        </div>

        {/* Essential Integrity Notice (Editorial Format) */}
        <div className="mb-12 p-4 rounded-md bg-[#FFFFFF] dark:bg-[#18243A] border border-[#DDE2EB] dark:border-[#30405B] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-[#17243B] dark:text-[#F8F7F4]">
              Honest Student Representation Notice
            </h4>
            <p className="text-xs sm:text-sm text-[#59677C] dark:text-[#ACB9CE] leading-relaxed">
              The projects featured below are actively planned and in-development learning projects designed to demonstrate core competencies in Python and SQL. In accordance with honest academic principles, they are marked as learning roadmaps until source repositories are completed.
            </p>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="editorial-card rounded-md p-6 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge: Planned / Roadmap */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#DDE2EB] dark:border-[#30405B]">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono rounded bg-[#F8F7F4] dark:bg-[#131F33] text-[#59677C] dark:text-[#ACB9CE] border border-[#DDE2EB] dark:border-[#30405B]">
                    <Clock className="w-3 h-3 text-[#315DDC] dark:text-[#91ACFF]" />
                    <span>{project.status}</span>
                  </span>
                  
                  <span className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE]">
                    Roadmap
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-lg font-bold text-[#17243B] dark:text-[#F8F7F4] mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#315DDC] dark:text-[#91ACFF] mb-3">
                  {project.subtitle}
                </p>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-[#59677C] dark:text-[#ACB9CE] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#F8F7F4] dark:bg-[#131F33] text-[#17243B] dark:text-[#F8F7F4] border border-[#DDE2EB] dark:border-[#30405B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Planned Architecture / Features */}
                <div className="space-y-2 mb-4 pt-3 border-t border-[#DDE2EB] dark:border-[#30405B]">
                  <div className="text-xs font-mono font-semibold text-[#17243B] dark:text-[#F8F7F4] flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-[#315DDC] dark:text-[#91ACFF]" />
                    <span>Planned Core Features:</span>
                  </div>
                  <ul className="space-y-1.5 pl-0.5">
                    {project.plannedFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#59677C] dark:text-[#ACB9CE] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#315DDC] dark:bg-[#91ACFF] mt-1.5 flex-shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learning Goals */}
                <div className="space-y-2 mb-5">
                  <div className="text-xs font-mono font-semibold text-[#17243B] dark:text-[#F8F7F4] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#315DDC] dark:text-[#91ACFF]" />
                    <span>Technical Learning Goals:</span>
                  </div>
                  <ul className="space-y-1.5 pl-0.5">
                    {project.learningGoals.map((goal, gIdx) => (
                      <li key={gIdx} className="text-xs text-[#59677C] dark:text-[#ACB9CE] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DDE2EB] dark:bg-[#30405B] mt-1.5 flex-shrink-0"></span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons: Repository / Live Link */}
              <div className="pt-4 border-t border-[#DDE2EB] dark:border-[#30405B] space-y-2">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded bg-[#17243B] hover:bg-[#0B1220] text-white text-xs font-medium transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                ) : (
                  <div className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-[#F8F7F4] dark:bg-[#131F33] text-[#59677C] dark:text-[#ACB9CE] text-xs font-mono border border-[#DDE2EB] dark:border-[#30405B]">
                    <Terminal className="w-3.5 h-3.5 text-[#315DDC] dark:text-[#91ACFF]" />
                    <span>In Active Construction</span>
                  </div>
                )}

                <div className="text-[11px] text-center font-mono text-[#59677C] dark:text-[#ACB9CE]">
                  Update link in <span className="text-[#315DDC] dark:text-[#91ACFF]">portfolioData.ts</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
