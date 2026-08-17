import { Svgicon, IconName } from "./SvgIcon"

interface SkillItem {
  name: string;
  iconName: IconName;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'JavaScript', iconName: 'javascript' },
        { name: 'TypeScript', iconName: 'typescript' },
        { name: 'React', iconName: 'react' },
        { name: 'Next.js', iconName: 'nextjs' },
        { name: 'HTML', iconName: 'html' },
        { name: 'CSS', iconName: 'css' },
        { name: 'Tailwind CSS', iconName: 'tailwindcss' },
        { name: 'UI/UX Prototyping', iconName: 'uiux' }
      ]
    },
    {
      category: 'Backend Development & Databases',
      items: [
        { name: 'Java', iconName: 'java' },
        { name: 'Python', iconName: 'python' },
        { name: 'PHP', iconName: 'php' },
        { name: 'C++', iconName: 'cpp' },
        { name: 'Node.js', iconName: 'nodejs' },
        { name: 'Express', iconName: 'express' },
        { name: 'Prisma ORM', iconName: 'prisma' },
        { name: 'Drizzle', iconName: 'drizzle' },
        { name: 'MySQL', iconName: 'mysql' },
        { name: 'PostgeSQL', iconName: 'postgresql' },

      ]
    },
    {
      category: 'Game Development',
      items: [
        { name: 'Godot Engine', iconName: 'godot' },
        { name: '2D Game Development', iconName: '2dgame' },
        { name: '3D Game Development', iconName: '3dgame' },
        { name: '3D Prop Artist', iconName: '3dpropartist' },
      ]
    },
    {
      category: 'Tools & Platforms',
      items: [
        { name: 'Git', iconName: 'git' },
        { name: 'GitHub', iconName: 'github' },
        { name: 'GitDesktop', iconName: 'gitdesktop' },
        { name: 'ZeroTier One', iconName: 'zerotier' },
        { name: 'VS Code', iconName: 'vscode' }
      ]
    }
  ]

  return (
    <section id="skills" className="glass-card p-8">
      <h2 className="text-[clamp(1.5rem,4vw+1rem,3rem)] font-bold text-white mb-6 flex items-center gap-2 flex-wrap">
        <span className="text-gold-400 font-valorax">Technical</span> <span className="font-valorax">Skills</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-black/30 border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-2 px-3 py-1.5 bg-black/50 border border-gold-500/20 rounded-lg text-gray-300 text-sm font-medium hover:bg-gold-500/10 hover:border-gold-500/40 hover:text-gold-400 transition-all duration-300 cursor-default"
                >
                  <Svgicon name={skill.iconName} className="w-5 h-5" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills