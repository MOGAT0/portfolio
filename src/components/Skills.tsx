// Updated Skills section based on CV content
const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        {
          subcategory: 'Languages & Frameworks',
          items: ['JavaScript/TypeScript', 'React/Next.js', 'React Native']
        },
        {
          subcategory: 'Styling & UI',
          items: ['HTML/CSS', 'Tailwind CSS', 'UI/UX Prototyping']
        }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        {
          subcategory: 'Languages',
          items: ['Java', 'Python', 'PHP']
        },
        {
          subcategory: 'Frameworks & Runtimes',
          items: ['Node.js', 'Express']
        }
      ]
    },
    {
      category: 'Game Development',
      skills: [
        {
          subcategory: 'Game Engines',
          items: ['Godot Engine']
        },
        {
          subcategory: 'Game Development',
          items: ['2D Game Development', 'Educational Games']
        }
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        {
          subcategory: 'Development Tools',
          items: ['Git/GitHub', 'VS Code']
        }
      ]
    }
  ]

  return (
    <section id="skills" className="glass-card p-8">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <span className="text-gold-400">Technical</span> Skills
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
            <div className="space-y-4">
              {category.skills.map((subcategory, subIndex) => (
                <div key={subIndex}>
                  <h4 className="text-gold-400 font-semibold text-sm mb-2">
                    {subcategory.subcategory}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {subcategory.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-black/50 border border-gold-500/20 rounded-lg text-gray-300 text-sm font-medium hover:bg-gold-500/10 hover:border-gold-500/40 hover:text-gold-400 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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