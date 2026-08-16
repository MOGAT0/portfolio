// Updated Achievements section with new content from CV
const Achievements = () => {
  const achievements = [
    {
      title: 'Hack4Gov Regional Cybersecurity Competition',
      description: '4th Place - Oct 2025'
    }
  ]

  return (
    <section id="achievements" className="glass-card p-8">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-gold-400">Achievements</span> & Awards
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-black/30 border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
              {achievement.title}
            </h3>
            <p className="text-gray-400">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements