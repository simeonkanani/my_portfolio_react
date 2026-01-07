export default function About() {
  return (
    <section id="about" className="bg-white">
      <style>{`
        html.dark #about {
          background-color: rgb(3, 7, 18);
        }
        html.dark #about h3 {
          color: white;
        }
        html.dark #about .text-gray-700 {
          color: white;
        }
      `}</style>
      <div className="container">
        <h2 className="section-title mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative w-full aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate <span className="font-semibold text-blue-600">Cloud Solution Architect</span> and Systems Engineer with deep expertise in designing and implementing enterprise-scale cloud solutions. With a strong background in AI and machine learning, I specialize in creating intelligent, scalable systems that drive business innovation.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              My journey combines technical excellence with strategic thinking, enabling me to bridge the gap between complex infrastructure requirements and business objectives. I'm enthusiastic about exploring cutting-edge AI technologies and their applications in cloud ecosystems.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="tag">Cloud Architecture</span>
              <span className="tag">System Design</span>
              <span className="tag">AI/ML Solutions</span>
              <span className="tag">DevOps</span>
              <span className="tag">Infrastructure</span>
              <span className="tag">Scalability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
