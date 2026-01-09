export default function Resume() {
  return (
    <section id="resume" className="bg-white">
      <style>{`
        html.dark #resume {
          background-color: rgb(3, 7, 18);
        }
        html.dark #resume h3,
        html.dark #resume h4 {
          color: white;
        }
        html.dark #resume .text-gray-900,
        html.dark #resume .text-gray-700,
        html.dark #resume .text-gray-600,
        html.dark #resume .text-gray-500 {
          color: white;
        }
      `}</style>
      <div className="container">
        <h2 className="section-title mb-20">Resume & Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
              Experience
            </h3>
            
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-blue-600">
                <div className="absolute -left-4 top-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white"></div>
                <h4 className="text-lg font-bold text-gray-900">Systems Engineer & Solution Architect</h4>
                <p className="text-blue-600 font-semibold">Kenya Revenue Authority</p>
                <p className="text-sm text-gray-500 mb-2">2023 - Present</p>
                <p className="text-gray-700">Led on-premise & cloud migration of critical Enterprise systems, designing scalable and cost-effective solutions.</p>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-blue-600">
                <div className="absolute -left-4 top-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white"></div>
                <h4 className="text-lg font-bold text-gray-900">IT Support Engineer </h4>
                <p className="text-blue-600 font-semibold">Mercy Corps Kenya</p>
                <p className="text-sm text-gray-500 mb-2">2021 - 2022</p>
                <p className="text-gray-700">Managed IT infrastructure, automation and optimized cloud and on-premise applications.</p>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute -left-4 top-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white"></div>
                <h4 className="text-lg font-bold text-gray-900">IT Operation Associate</h4>
                <p className="text-blue-600 font-semibold">Andela</p>
                <p className="text-sm text-gray-500 mb-2">2019 - 2020</p>
                <p className="text-gray-700">Provided technical support for cross-functional teams and troubleshooting for enterprise applications.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zm0 4h2v2H7zm8-12h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM3 5v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2z"/>
              </svg>
              Education & Certifications
            </h3>
            
            <div className="space-y-6">
              <div className="card p-6 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">AWS Certified Solutions Architect</h4>
                <p className="text-blue-600 font-semibold text-sm">Associate Level - 2026</p>
              </div>

              <div className="card p-6 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Kubernetes Cloud Native Associate</h4>
                <p className="text-blue-600 font-semibold text-sm">KCNA Certified - 2024</p>
              </div>

              <div className="card p-6 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">ITIL v4 Certified</h4>
                <p className="text-blue-600 font-semibold text-sm">IT Service Management</p>
              </div>

              <div className="card p-6 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Bachelor's in Business Information Technology</h4>
                <p className="text-gray-600 text-sm">2018</p>
              </div>

              <a href="#" className="btn btn-primary w-full mt-8 justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
