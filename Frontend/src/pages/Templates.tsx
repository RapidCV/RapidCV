import Layout from "../components/Layout"
import TemplateCard from '../components/TemplateCard'
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
    return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Resume Templates</h1>
        <p className="text-xl text-center text-gray-600 mb-8">Choose a template to start your professional journey</p>
        <div className=" mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => <TemplateCard template={template}/>)}
        </div>
      </div>
    </Layout>
  )
};