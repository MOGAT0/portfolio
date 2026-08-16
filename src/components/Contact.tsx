const Contact = () => {
  const contactInfo = [
    {
      label: 'Email',
      value: 'samjeffmogato@gmail.com',
      link: 'mailto:samjeffmogato@gmail.com'
    },
    {
      label: 'Facebook',
      value: 'Sam Jefferson',
      link: 'https://www.facebook.com/sam.jefferson.741540'
    },
    {
      label: 'GitHub',
      value: 'https://github.com/MOGAT0',
      link: 'https://github.com/MOGAT0'
    },
    {
      label: 'Number',
      value: '09765137170',
      link: 'tel:09765137170'
    },
    {
      label: 'Location',
      value: 'Philippines',
      link: null
    },
    {
      label: 'Availability',
      value: 'Open to freelance & collaboration',
      link: null
    }
  ]

  return (
    <section id="contact" className="glass-card p-8">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-gold-400">Get in</span> Touch
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {contactInfo.map((contact, index) => (
          <div
            key={index}
            className="bg-black/30 border border-gold-500/10 rounded-xl p-4 hover:border-gold-500/30 transition-all duration-300"
          >
            <span className="text-gold-400 font-semibold text-sm">{contact.label}:</span>
            {contact.link ? (
              <a
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block text-gray-300 hover:text-gold-400 transition-colors mt-1"
              >
                {contact.value}
              </a>
            ) : (
              <span className="block text-gray-300 mt-1">{contact.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact