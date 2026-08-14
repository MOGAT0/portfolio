const Footer = () => {
  return (
    <footer className="mt-12 text-center py-8 border-t border-gold-500/10">
      <p className="text-gray-500 text-sm">
        Built with React, TypeScript & Tailwind CSS —{' '}
        <span className="text-gold-400">Generated for Sam Jefferson Mogato</span>
      </p>
      <p className="text-gray-600 text-xs mt-2">
        © {new Date().getFullYear()} Sam Jefferson Mogato. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer