export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <style>{`
        html.dark #home {
          background-color: rgb(15, 23, 42);
        }
        html.dark #home .text-gray-700,
        html.dark #home .text-gray-600,
        html.dark #home .text-gray-500 {
          color: white;
        }
      `}</style>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <style>{`
        html.dark #home .absolute {
          background: transparent;
        }
        html.dark #home > div:first-child {
          background: linear-gradient(to bottom right, rgb(15, 23, 42), rgb(3, 7, 18));
        }
        html.dark #home .bg-blue-200 {
          background-color: rgba(59, 130, 246, 0.1);
        }
        html.dark #home .bg-purple-200 {
          background-color: rgba(147, 51, 234, 0.1);
        }
      `}</style>

      <div className="container relative z-10 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-700">Available for opportunities</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi! I'm <span className="gradient-text">Simeon Kanani</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 font-semibold mb-4">
          Cloud Solution Architect | Systems Engineer | AI Enthusiast
        </p>
        
        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Building scalable, intelligent solutions in the cloud that drive business innovation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn btn-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">30+</p>
            <p className="text-gray-600 text-sm">Enterprise Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">5+</p>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">10+</p>
            <p className="text-gray-600 text-sm">Certifications</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
