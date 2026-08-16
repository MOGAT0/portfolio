const Projects = () => {
  const projects = [
    {
      title: 'EngiManage',
      year: '',
      description: 'A project management platform built for engineering companies to enhance project tracking and team collaboration.',
      link: 'https://github.com/MOGAT0/engimanage.git',
      tags: ['Full-stack', 'React Native', 'Express js', 'Node js']
    },
    {
      title: 'QuizBee',
      year: '',
      description: 'A 2D educational game built in Godot, designed to help kindergarten students learn through fun, cozy, and interactive gameplay.',
      link: 'https://github.com/MOGAT0/quizbee.git',
      tags: ['Godot 4', 'Game Development', 'Educational']
    }
  ]

  return (
    <section id="projects" className="glass-card p-8">
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