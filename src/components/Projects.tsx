import { Svgicon, IconName } from "./SvgIcon"

const Projects = () => {
  const projects = [
    {
      title: 'EngiManage',
      year: '2026',
      description: 'A project management platform built for engineering companies to enhance project tracking and team collaboration.',
      link: 'https://github.com/MOGAT0/engimanage.git',
      tags: ['React Native', 'Express js', 'Node js', 'PostgreSQL', 'Railway', 'Supabase']
    },
    {
      title: 'MeTube - Video To note Tool',
      year: '2026',
      description: `Built an intelligent study platform featuring a Next.js frontend and a Python backend 
      that processes video transcripts using AI. Automated the generation of structured study notes, 
      drastically reducing manual note taking time.`,
      link: 'https://github.com/MOGAT0/MeTube',
      tags: ['Next.js','Node.js','Express','Python','Clerk','Drizzle','Prisma']
    },
    {
      title: 'POS Mobile',
      year: '2025',
      description: 'Developed a mobile Point-of-Sale (POS) application using React Native, Node.js and PostgreSQL to streamline retail checkout operations for small business owners.',
      link: 'https://github.com/MOGAT0/pos-mobileApplication',
      tags: ['React Native','Expo','Express.js','Node.js','PostgreSQL', 'ZeroTier One']
    },
    {
      title: 'GG - "Gasto Ginagmay" (Spend Less)',
      year: '2024',
      description: `Developed a personal finance application in Java to track daily expenses
      and manage personal budgets. Implemented logic to categorize
      spending and provide real-time budget tracking, helping users achieve
      financial goals.`,
      link: 'https://github.com/MOGAT0/budgeting-app',
      tags: ['Java','MySQL']
    }
  ]
  const getIconForTag = (tag: string): IconName | null => {
    const normalized = tag.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const iconMap: Record<string, IconName> = {
      'reactnative': 'reactnative',
      'expressjs': 'express',
      'express': 'express',
      'nodejs': 'nodejs',
      'postgresql': 'postgresql',
      'railway': 'railway',
      'supabase': 'supabase',
      'nextjs': 'nextjs',
      'python': 'python',
      'clerk': 'clerk',
      'drizzle': 'drizzle',
      'prisma': 'prisma',
      'expo': 'expo',
      'zerotierone': 'zerotier',
      'java': 'java',
      'mysql': 'mysql',
    };
    
    return iconMap[normalized] || null;
  };

  return (
    <section id="projects" className="glass-card p-8">
      <h2 className="text-[clamp(1.5rem,4vw+1rem,3rem)] font-bold text-white mb-6 flex items-center gap-2 flex-wrap">
        <span className="text-gold-400 font-valorax">Featured</span> <span className="font-valorax">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black/30 border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                {project.title}
              </h3>
              {project.year && (
                <span className="text-xs text-gold-400 bg-gold-500/10 px-2 py-1 rounded">
                  {project.year}
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium text-sm transition-colors"
            >
              <span>View Project</span>
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, tagIndex) => {
                const mappedIcon = getIconForTag(tag);
                
                return (
                  <span
                    key={tagIndex}
                    className="flex items-center gap-1.5 text-xs px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-300"
                  >
                    {mappedIcon ? (
                      <Svgicon name={mappedIcon} size={14} />
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    )}
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects