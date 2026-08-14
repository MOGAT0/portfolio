import h4g2 from '../assets/img/h4g (4).jpg'
import citeChampion from '../assets/img/Certificate of Participation - (champion).jpg'
import gamejam from '../assets/img/gamejam.jpg'
import stacktreck from '../assets/img/stacktreck.jpg'
import h4g3 from '../assets/img/1722413454396.jpg'
import h4g4 from '../assets/img/IMG_5334.JPG'
import animationBootcamp from '../assets/img/S.J. MOGATO.jpg'
import jsPromParticipation from '../assets/img/MOGATO_JS_PARTICIPATION_page-0001.jpg'
import jsPromCompletion from '../assets/img/MOGATO_JS_COMPLETION_page-0001.jpg'

const Achievements = () => {
  const achievements = [
    {
      image: h4g2,
      title: 'Hack4Gov Year 2',
      description: 'Hack4Gov Aug. 18, 2023 - 2nd runner up'
    },
    {
      image: citeChampion,
      title: 'CITE Week Hackathon',
      description: 'Champion in CITE Week Hackathon sept. 2024'
    },
    {
      image: gamejam,
      title: 'GameJam - Calle real ST.',
      description: 'Best in narative & People\'s choice award'
    },
    {
      image: stacktreck,
      title: 'Stack League - Gold rush',
      description: 'Participated in Stack league stack trek celestial gold rush - 2023'
    },
    {
      image: h4g3,
      title: 'Hack4Gov Year 3',
      description: 'Participated in Hack for Gov Competition - 2024'
    },
    {
      image: h4g4,
      title: 'Hack4Gov Year 4',
      description: '4th Placer in Hack for Gov Competition - 2025'
    },
    {
      image: animationBootcamp,
      title: '"G! Meet kita!" Animation Online Boothcamp',
      description: '8th day of august, 2023 via Google Gmeet'
    },
    {
      image: jsPromParticipation,
      title: '"JS Prom" JavaScript Programming',
      description: '13th day of april, 2023 at PHINMA - University of Iloilo'
    },
    {
      image: jsPromCompletion,
      title: '"JS Prom" JavaScript Programming - Completed',
      description: 'Successfully Completing the JS prom javascript workshop'
    }
  ]

  return (
    <section id="achievements" className="bg-gradient-to-br from-gray-900/50 to-black border border-gold-500/10 rounded-2xl p-8 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-gold-400">Achievements</span> & Awards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-black/30 border border-gold-500/10 rounded-xl overflow-hidden hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300 group"
          >
            <div className="aspect-video bg-gray-800 overflow-hidden">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements