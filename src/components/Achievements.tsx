import h4g2Img from '../assets/img/h4g2.jpg';
import h4g3Img from '../assets/img/h4g3.jpg';
import h4g4Img from '../assets/img/h4g4.JPG';
import hackathonChampionImg from '../assets/img/hackathon-champion.jpg';
import gamejamImg from '../assets/img/gamejam.jpg';
import stacktreckImg from '../assets/img/stacktreck.jpg';
import jsCompletionImg from '../assets/img/js-completion.jpg';

const Achievements = () => {
  const achievements = [
    {
      title: 'Hack4Gov Year 2',
      description: 'Hack4Gov Aug. 18, 2023 - 2nd runner up',
      img: h4g2Img,
      link: ''  
    },
    {
      title: 'Hack4Gov Year 3',
      description: 'Participated in Hack for Gov Competition - 2024',
      img: h4g3Img,
      link: ''  
    },
    {
      title: 'Hack4Gov Year 4',
      description: '4th Placer in Hack for Gov Competition - 2025',
      img: h4g4Img,
      link: ''  
    },
    {
      title: 'CITE Week Hackathon',
      description: 'Champion in CITE Week Hackathon sept. 2024 at Phinma University of Iloilo',
      img: hackathonChampionImg,
      link: ''  
    },
    {
      title: 'GameJam - Calle real ST.',
      description: "Best in narative & People's choice award",
      img: gamejamImg,
      link: ''  
    },
    {
      title: 'Stack League - Gold rush',
      description: 'Participated in Stack league stack trek celestial gold rush - 2023',
      img: stacktreckImg,
      link: ''
    },
    {
      title: '"JS Prom" JavaScript Programming - Completed',
      description: 'Successfully Completing the JS prom javascript workshop at Phinma University of Iloilo',
      img: jsCompletionImg,
      link: ''
    },
  ]

  return (
    <section id="education" className="glass-card p-8">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-gold-400 font-valorax">Education</span> <span className='font-valorax'>& Certification</span>
      </h2>

{/* Added a styled container to separate the education details from the header and achievements grid */}
      <div className="bg-black/40 border border-gold-500/20 rounded-xl p-6 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:border-gold-500/40">
        <div className="flex items-start gap-4">
          
          {/* Added an SVG icon placeholder for a graduation cap */}
          <div className="p-3 bg-gold-500/10 rounded-lg text-gold-400 shrink-0">
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14m-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          
          {/* Styled the text hierarchy to highlight the degree and university */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Phinma University of Iloilo</h3>
            <p className="text-gold-400 font-medium">
              Bachelor of Science in Information Technology
              <span className="text-gray-400 text-sm ml-2 font-normal">(Cum Laude)</span>
            </p>
          </div>
        </div>
        
        {/* Styled the graduation year as a distinct badge aligned to the right on larger screens */}
        <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-semibold w-fit mt-2 md:mt-0 shadow-inner">
          Finished 2026
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-black/30 border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300 group flex flex-col"
          >
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={achievement.img}
                alt={achievement.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
              {achievement.title}
            </h3>
            
            <p className="text-gray-400 mb-6 flex-grow">{achievement.description}</p>

            <a
              href={achievement.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-fit px-5 py-2 text-sm font-medium border border-gold-500/50 rounded-lg text-gold-400 hover:bg-gold-500 hover:text-black transition-colors"
            >
              View
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements