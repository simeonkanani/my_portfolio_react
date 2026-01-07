export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <style>{`
        html.dark footer {
          background-color: rgb(3, 7, 18);
        }
        html.dark footer .text-gray-400 {
          color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
      <div className="container py-12 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold mb-2">© 2026 Simeon Kanani. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Building scalable solutions in the cloud</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">Built with <span className="text-red-500">❤</span> using React + Tailwind CSS</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-semibold">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-semibold">Terms</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-semibold">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
