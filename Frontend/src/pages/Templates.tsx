import  { useState } from 'react'
import Layout from "../components/Layout"
//todo understand the codebase
//todo fetch from backend
const templates = [
  { id: 1, title: "Professional", description: "Clean and polished for corporate environments", image: "/" },
  { id: 2, title: "Creative", description: "Showcase your artistic flair and innovation", image: "/" },
  { id: 3, title: "Modern", description: "Sleek design for contemporary job seekers", image: "/" },
  { id: 4, title: "Simple", description: "Minimalist approach for a straightforward impact", image: "/" },
  { id: 5, title: "Executive", description: "Sophisticated layout for senior positions", image: "/" },
  { id: 6, title: "Technical", description: "Highlight your skills and projects effectively", image: "/" },
]

export default function Templates() {
  const [hoveredId, setHoveredId] = useState<number | null>()

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Resume Templates</h1>
        <p className="text-xl text-center text-gray-600 mb-8">Choose a template to start your professional journey</p>
        <div className=" mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div 
              key={template.id} 
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              onMouseEnter={() => setHoveredId(template.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 sm:h-72 lg:h-80">
                <img
                  src={template.image}
                  alt={`${template.title} template preview`}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                />
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === template.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button 
                    className="bg-blue-500 text-white py-3 px-6 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    aria-label={`Use ${template.title} template`}
                  >
                    Use Template
                  </button>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-100">
                <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">{template.title}</h2>
                <p className="text-sm text-gray-600 text-center mb-4">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
};