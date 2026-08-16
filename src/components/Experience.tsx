// Updated Experience section with new content from CV
const Experience = () => {
  const experiences = [
    {
      company: 'Reed Elsevier Philippines',
      role: 'Data Encoder',
      description: 'Data encoding and management responsibilities.',
      year: 'Apr 2026 - Present'
    },
    {
      company: 'GS Food Products Trading',
      role: 'Freelance Developer',
      description: 'Engineered an end-to-end mobile POS solution specifically designed to empower small business owners with seamless transaction handling. Optimized stock monitoring by implementing automated inventory tracking, significantly cutting down manual operational hours.',
      year: 'Apr 2025 - Jul 2026'
    },
    {
      company: 'Prometheus Enterprise',
      role: 'Software Engineer Intern',
      description: 'Contributed to the development of the e-notaryo project, a web notary platform. My responsibilities included building, integrating, and testing software features to ensure the platform was secure and user-friendly.',
      year: 'Nov 2025 - Mar 2026'
    },
  ]

  return (
    <section id="experience" className="glass-card p-8">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-gold-400 font-valorax">Work</span> <span className="font-valorax">Experience</span>
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-black/30 border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <span className="text-gold-400 font-semibold text-sm mt-1 block">
                  {exp.role}
                </span>
              </div>
              <span className="inline-block mt-3 sm:mt-0 px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium whitespace-nowrap">
                {exp.year}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience