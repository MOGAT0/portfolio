const Projects = () => {
  const projects = [
    {
      title: 'MeTube — AI video-to-notes tool',
      year: '2025',
      description: 'A full-stack study platform built with Next.js. I engineered a Python-based system to automatically fetch video transcripts, which are then processed by an AI model to generate structured, searchable notes. This transforms long-form YouTube content into an efficient learning tool for students.',
      link: 'https://github.com/MOGAT0/MeTube',
      tags: ['Next Js', 'Python', 'Clerk', 'Drizzle', 'AI Model']
    },
    {
      title: 'EngiManage — Research & Capstone',
      year: '',
      description: 'It is a comprehensive project management system designed to support the full operational workflow of construction companies.',
      link: 'https://github.com/MOGAT0/engimanage.git',
      tags: ['Research', 'Full-stack', 'React Native', 'Express js', 'Node js']
    },
    {
      title: 'GodotAI — Chatbot Companion',
      year: '',
      description: 'It is a beginner-friendly mobile app that helps new Godot developers learn the engine more efficiently. Powered by AI, it answers common development questions, explains GDScript logic, and provides guidance on engine workflows',
      link: 'https://github.com/MOGAT0/godotAI.git',
      tags: ['Godot 4.3', 'AI']
    },
    {
      title: 'POS Mobile — Point of Sale System',
      year: '',
      description: 'A mobile POS system app designed for managing sales, inventory, and daily reports.',
      link: 'https://github.com/MOGAT0/pos-mobileApplication',
      tags: ['React Native', 'Mobile', 'POS']
    },
    {
      title: 'Budgeting Application — Daily tracking of budget',
      year: '',
      description: 'A simple budgeting Application to fit your allowance weather you are a student or a professional.',
      link: 'https://github.com/MOGAT0/budgeting-app.git',
      tags: ['Java']
    },
    {
      title: 'UnitHead - Thirdperson shooter game',
      year: '',
      description: 'It is a third-person multiplayer shooter developed in Godot 4.3, featuring a fully custom network sync system using pure RPCs. Designed with a dedicated server architecture in mind, the server-client logic is separated for future deployment on cloud platforms.',
      link: 'https://github.com/MOGAT0/unithead-3dShooter-multiplayer-Godot4.3.git',
      tags: ['Godot 4.3', 'Multiplayer', '3D']
    },
    {
      title: 'TimeTwist - 2d platformer game',
      year: '',
      description: 'A cozy offline 2D platformer designed for smooth, controller-friendly gameplay and challenging level design.',
      link: 'https://mogat0.itch.io/timetwist-demo',
      tags: ['Godot 4.3', '2D']
    },
    {
      title: 'KeyboardWarrior - A typing game',
      year: '',
      description: 'Improve your typing accuracy and speed using this game',
      link: 'https://github.com/MOGAT0/keyboardwarior.git',
      tags: ['Python', '2D']
    }
  ]

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-900/50 to-black border border-gold-500/10 rounded-2xl p-8 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-gold-400">Featured</span> Projects
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
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects