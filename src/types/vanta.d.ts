// TypeScript declarations for Vanta.js global object
declare global {
  interface Window {
    VANTA?: {
      NET: (options: any) => {
        destroy: () => void
      }
    }
  }
}

export {}