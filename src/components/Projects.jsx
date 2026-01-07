const projects = [
  {
    id: 1,
    title: 'Multi-Cloud Infrastructure Platform',
    description: 'Designed and deployed a multi-cloud architecture supporting AWS, Azure, and GCP with automated failover and load balancing.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
    tags: ['AWS', 'Azure', 'Kubernetes', 'Terraform']
  },
  {
    id: 2,
    title: 'My Portfolio',
    description: 'A professional portfolio website showcasing cloud architecture expertise and AI knowledge with dark mode support, responsive design, and smooth animations.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['React', 'Tailwind CSS v4', 'Vite', 'Responsive Design']
  },
  {
    id: 3,
    title: 'Automated CI/CD Pipeline',
    description: 'Orchestrated end-to-end CI/CD pipelines with automated testing, security scanning, and deployment to Kubernetes clusters.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['GitHub Actions', 'Docker', 'Kubernetes', 'Helm']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50">
      <style>{`
        html.dark #projects {
          background-color: rgb(15, 23, 42);
        }
        html.dark #projects h3 {
          color: white;
        }
        html.dark #projects .text-gray-900,
        html.dark #projects .text-gray-600 {
          color: white;
        }
      `}</style>
      <div className="container">
        <h2 className="section-title mb-20">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div 
                className="h-48 bg-cover bg-center relative overflow-hidden"
                style={{backgroundImage: `url(${project.image})`}}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <a 
                    href="#" 
                    className="flex-1 px-4 py-2 text-center font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                  <a 
                    href="#" 
                    className="flex-1 px-4 py-2 text-center font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
