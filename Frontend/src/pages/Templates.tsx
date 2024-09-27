import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import TemplateCard from "../components/TemplateCard";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { v4 as uuidv4 } from 'uuid';

export default function Templates() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/fetch_all`) 
      .then((res) => {
        const { data } = res;
        setTemplates(data.data); 
      })
      .catch((error) => {
        console.error("Error fetching templates:", error);
      });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Resume Templates
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Choose a template to start your professional journey
        </p>
        <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <TemplateCard key={uuidv4()} template={template} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
