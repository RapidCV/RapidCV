import { useState } from "react"

function TemplateCard({template } : {template :{id:number,title : string,description:string,image:string}}) {
    const [hoveredId, setHoveredId] = useState<number | null>()
  return (
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
  )
}

export default TemplateCard