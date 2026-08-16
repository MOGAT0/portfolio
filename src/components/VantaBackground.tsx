import { useEffect, useRef } from 'react'

// Vanta.js Net effect background component with proper cleanup
const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffectRef = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    // Load Vanta.js scripts dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = reject
        document.head.appendChild(script)
      })
    }

    const initVanta = async () => {
      try {
        // Load Three.js and Vanta.js Net effect
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.net.min.js')

        // Initialize Vanta Net effect after scripts are loaded
        if (window.VANTA && window.VANTA.NET && vantaRef.current) {
          vantaEffectRef.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3fffe8, // Teal color matching inspiration site
            backgroundColor: 0x000000
          })
        }
      } catch (error) {
        console.error('Failed to load Vanta.js:', error)
      }
    }

    initVanta()

    // Cleanup Vanta effect on component unmount
    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy()
      }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10"
      style={{ background: '#000' }}
    />
  )
}

export default VantaBackground