import React from 'react';

const templates = [
  {
    id: 1,
    title: "Modern Resume",
    description: "A sleek modern resume design perfect for tech jobs.",
    img: "https://i.pinimg.com/564x/36/f7/3b/36f73bd4ca000e7d88435e01dfe5fadb.jpg",
  },
  {
    id: 2,
    title: "Creative Resume",
    description: "A creative layout with a pop of color.",
    img: "https://i.pinimg.com/236x/63/f4/5b/63f45b73c6135c989a20a4f338cc56ab.jpg",
  },
  {
    id: 3,
    title: "Professional Resume",
    description: "A classic design for professional settings.",
    img: "https://i.pinimg.com/736x/4c/b9/f9/4cb9f9ecc82a584f72f77fb2fca5c25d.jpg",
  },
  {
    id: 4,
    title: "Modern Resume",
    description: "A sleek modern resume design perfect for tech jobs.",
    img: "https://i.pinimg.com/236x/63/f4/5b/63f45b73c6135c989a20a4f338cc56ab.jpg",
  },
  {
    id: 5,
    title: "Creative Resume",
    description: "A creative layout with a pop of color.",
    img: "https://i.pinimg.com/736x/4c/b9/f9/4cb9f9ecc82a584f72f77fb2fca5c25d.jpg",
  },
  {
    id: 6,
    title: "Professional Resume",
    description: "A classic design for professional settings.",
    img: "https://i.pinimg.com/736x/8d/cf/c5/8dcfc5269c28bafe1dd23afd72fe6f8c.jpg",
  },
  {
    id: 7,
    title: "Modern Resume",
    description: "A sleek modern resume design perfect for tech jobs.",
    img: "https://i.pinimg.com/564x/36/f7/3b/36f73bd4ca000e7d88435e01dfe5fadb.jpg",
  },
  {
    id: 8,
    title: "Creative Resume",
    description: "A creative layout with a pop of color.",
    img: "https://i.pinimg.com/236x/63/f4/5b/63f45b73c6135c989a20a4f338cc56ab.jpg",
  },
  {
    id: 9,
    title: "Professional Resume",
    description: "A classic design for professional settings.",
    img: "https://i.pinimg.com/736x/4c/b9/f9/4cb9f9ecc82a584f72f77fb2fca5c25d.jpg",
  },
];

function TemplateCard({ template }) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xs p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl animate-fadeIn">
      <img src={template.img} alt={template.title} className="w-full h-auto rounded-md" />
      <h2 className="mt-4 text-lg font-semibold">{template.title}</h2>
      <p className="mt-2 text-sm text-gray-600">{template.description}</p>
    </div>
  );
}

function TemplatesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold">Choose Your Resume Template</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}

export default TemplatesPage;
