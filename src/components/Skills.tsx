const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      items: [
        { 
          name: 'JavaScript', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M3 3h18v18H3V3zm11 11.5c0 2.5-1.5 3.5-3.5 3.5-1.5 0-2.5-.5-3-1.5l1.5-1c.5.5 1 1 1.5 1 1 0 1.5-.5 1.5-1.5v-4.5h2v4zm-6 0c0 2.5-1.5 3.5-3.5 3.5-1.5 0-2.5-.5-3-1.5l1.5-1c.5.5 1 1 1.5 1 1 0 1.5-.5 1.5-1.5V10h2v4.5z"/>
            </svg>
          )
        },
        { 
          name: 'TypeScript', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
              <path d="M1.5 1.5v21h21v-21h-21zm10 10h-3v7h-1.5v-7h-3v-1.5h7.5v1.5zm6.5 7.5c-2 0-3.5-.8-4.2-2l1.5-1c.5.8 1.2 1.5 2.5 1.5 1 0 1.5-.5 1.5-1.2 0-.8-1-1-2.5-1.5-2-.8-3-2-3-3.5 0-2 1.5-3.2 3.5-3.2 1.8 0 3 1 3.5 2l-1.5 1c-.2-.8-.8-1.2-2-1.2-1 0-1.5.5-1.5 1.2 0 .8 1 1 2.5 1.5 2 .8 3 2 3 3.5 0 2-1.5 3.4-3.8 3.4z"/>
            </svg>
          )
        },
        { 
          name: 'React', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-cyan-400">
              <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/>
            </svg>
          )
        },
        { 
          name: 'Next.js', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-2.5-12.5v5h-1.5v-6h1.5l3.5 4.5v-4.5h1.5v6h-1.5l-3.5-4.5z"/>
            </svg>
          )
        },
        { 
          name: 'HTML', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-orange-500">
              <path d="M1.5 2h21l-1.9 21.5L12 24l-8.6-2.5L1.5 2zm17.1 4.5H5.4l.4 5h10.4l-.5 5.5-3.7 1-3.7-1-.2-2.5H6.2l.4 4.5 5.4 1.5 5.4-1.5.9-9H7.6l-.3-3.5h11.7l-.4-1z"/>
            </svg>
          )
        },
        { 
          name: 'CSS', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
              <path d="M1.5 2h21l-1.9 21.5L12 24l-8.6-2.5L1.5 2zM17 6H7l.3 3h9.3l-.4 4.5-4.2 1.3-4.2-1.3-.2-2H5.8l.3 4 5.9 1.8 5.9-1.8.8-9.5z"/>
            </svg>
          )
        },
        { 
          name: 'Tailwind CSS', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-teal-400">
              <path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.4 9 12 6 12zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6-1.2-1.2-2.5-2.6-5.5-2.6z"/>
            </svg>
          )
        },
        { 
          name: 'UI/UX Prototyping', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-purple-400">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          )
        }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { 
          name: 'Java', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500">
              <path d="M2 17.5c0 2.5 4.5 4.5 10 4.5s10-2 10-4.5v-1H2v1zm19-5.5V9.5h-1c0-2-3-3.5-8-3.5S4 7.5 4 9.5V12c0 2 3 3.5 8 3.5s8-1.5 8-3.5h1zm-10-8.5c1 0 1-2 2-2s1 2 0 2-1 2-2 2-1-2 0-2zm-3 1.5c.8 0 .8-1.5 1.5-1.5s.8 1.5 0 1.5-.8 1.5-1.5 1.5-.8-1.5 0-1.5zm6 0c.8 0 .8-1.5 1.5-1.5s.8 1.5 0 1.5-.8 1.5-1.5 1.5-.8-1.5 0-1.5z"/>
            </svg>
          )
        },
        { 
          name: 'Python', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-400">
              <path d="M12 2c-5 0-5 2-5 2v2h5v1H6s-2 0-2 4 2 4 2 4h1v-2s0-2 2-2h4s2 0 2-2V4s0-2-3-2zm-1 2.5c.4 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8zm7.5 4.5s0-2-2-2h-4s-2 0-2 2v3s0 2 2 2h5v2s0 2-3 2c-5 0-5-2-5-2v-2H6s0 4 6 4 6-2 6-2v-4s0-2-2-2h-5v-1h6s2 0 2-4zm-4.5 5.5c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z"/>
            </svg>
          )
        },
        { 
          name: 'PHP', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-400">
              <ellipse cx="12" cy="12" rx="11" ry="8" fill="none" stroke="currentColor" strokeWidth="2"/>
              <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor">PHP</text>
            </svg>
          )
        },
        { 
          name: 'Node.js', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm-1 14.5v-4l-3 1.5v4l3-1.5zm1-5l4-2-4-2-4 2 4 2zm5 3.5l-3 1.5v-4l3-1.5v4z"/>
            </svg>
          )
        },
        { 
          name: 'Express', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-300">
              <text x="12" y="15" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="currentColor">EXPRESS</text>
            </svg>
          )
        }
      ]
    },
    {
      category: 'Game Development',
      items: [
        { 
          name: 'Godot Engine', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
              <path d="M12 2C8 2 5 5 5 9v5c0 2 1.5 3.5 3 4h8c1.5-.5 3-2 3-4V9c0-4-3-7-7-7zm-3 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3 5c1 0 2 .5 2 1.5h-4c0-1 1-1.5 2-1.5z"/>
            </svg>
          )
        },
        { 
          name: '2D Game Development', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gold-400">
              <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
              <path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"></path>
            </svg>
          )
        },
        { 
          name: '3D Game Development', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-">
              <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
              <path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"></path>
            </svg>
          )
        }
      ]
    },
    {
      category: 'Tools & Platforms',
      items: [
        { 
          name: 'Git', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-orange-600">
              <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l3.287 3.287c.72-.19 1.536.035 2.062.562.585.584.78 1.458.487 2.21l3.114 3.114c.753-.293 1.626-.098 2.21.487.892.892.892 2.337 0 3.228-.89.89-2.334.89-3.226 0-.584-.583-.78-1.457-.488-2.21l-3.04-3.04v5.433c.27.126.518.324.71.564.893.892.893 2.337 0 3.228-.89.892-2.336.892-3.228 0-.892-.89-.892-2.336 0-3.227.435-.436.985-.66 1.543-.692v-5.69c-.558-.033-1.108-.258-1.543-.693-.585-.584-.78-1.458-.488-2.21L4.542 4.28 .454 8.368c-.605.604-.605 1.583 0 2.188l10.48 10.48c.604.604 1.582.604 2.188 0l10.424-10.425c.604-.604.604-1.582 0-2.18z"/>
            </svg>
          )
        },
        { 
          name: 'GitHub', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-300">
              <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.9.8 2.2 1.2.8.2 1.4.3 1.8.1-.1-.6.3-1.1.7-1.4-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z"/>
            </svg>
          )
        },
        { 
          name: 'VS Code', 
          customSvg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
              <path d="M23 4.6l-6.4-4.2c-.3-.2-.7-.2-1 0L1.7 10l-.4.3c-.2.2-.2.5-.1.8l3 5.4 1.3 1.5 9.7 5.7c.3.2.7.2 1 0l6.4-4.2c.4-.2.6-.6.6-1V5.6c0-.4-.2-.8-.6-1zm-15.5 7L3 9.4l9.5-6.5v11L7.5 11.6zm14 7L13 21V9.8l8.5 5.4v3.4zm0-6l-8.5-5.4V3l8.5 5.4v4z"/>
            </svg>
          )
        }
      ]
    }
  ]

  return (
    <section id="skills" className="glass-card p-8">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
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
                  {skill.customSvg}
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