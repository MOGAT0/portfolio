const Hero = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-900/50 to-black border border-gold-500/10 rounded-2xl p-8 backdrop-blur-sm">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-gold-400">About</span> Me
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Hi — I'm Sam Jefferson Mogato. Detail-oriented Software Engineer and Information Technology graduate (Cum Laude) with hands-on experience in fullstack web and mobile development. Skilled in building reliable applications using Java, Python, PHP, C++, JavaScript, TypeScript, React, and
          Node.js. Good at working within a team to complete the software development life cycle (SDLC) and deliver secure, scalable solutions.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gold-500/30 text-gold-400 font-semibold rounded-lg hover:bg-gold-500/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero