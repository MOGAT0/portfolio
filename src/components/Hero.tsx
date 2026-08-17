import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h2 className="text-[clamp(1.5rem,4vw+1rem,3rem)] font-bold text-white mb-6 flex items-center gap-2 flex-wrap">
          <span className=" font-valorax">Sam Jefferson Mogato</span>
        </h2>
        <TypeAnimation
          sequence={[
            'Software Developer',
            1000,
            'Game Developer',
            1000
          ]}
          wrapper="p"
          speed={50}
          className="text-2xl md:text-3xl text-gray-300 mb-2"
          repeat={Infinity}
        />
        
        <p className="text-lg text-gray-400 mb-8">
          Iloilo City, Philippines
        </p>
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          Detail oriented Software Developer and Information Technology graduate (Cum Laude) with hands-on experience in
          fullstack web and mobile development. Skilled in building reliable applications . Good at working within a team to
          complete the software development life cycle (SDLC) and deliver secure, user-friendly solutions.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gold-500/30 text-gold-400 font-semibold rounded-lg hover:bg-gold-500/10 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="/Mogato_cv@latest.pdf"
            download
            className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;