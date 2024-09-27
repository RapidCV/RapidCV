import { useState } from "react";
import Layout from "../components/Layout";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  { question: "What is RapidCV?", answer: "RapidCV is an open source free online tool to help you build professional resumes effortlessly." },
  { question: "How do I use the resume builder?", answer: "You can use our Resume Builder in 3 easy steps choose a template, and start filling in your details, and later you can even customize accordingly." },
  { question: "Are the templates ATS-friendly?", answer: "Yes, all our templates are designed to be Applicant Tracking System (ATS) friendly." },
  { question: "Can I download my resume?", answer: "Yes, Ofcourse you can download your resume in both PDF and Word format." },
  { question: "Is RapidCV free to use?", answer: "We offer free version with premium templates, as this is an Open source the resume builder itself is free." },
  { question: "How can I customize my resume?", answer: "You can customize fonts, colors, and layout directly in the builder." },
  { question: "Can I save multiple resumes?", answer: "Yes, you can save multiple resumes which can store in your local Browser or you can Download your previous one and start building new one." },
  { question: "Do I need to create an account?", answer: "Account creation is not our style. Hop on to the website choose your template, finish the editing and download it." },
  { question: "Can I pause and continue my Work Later?", answer: "Yes we don't support account creation, but the data will be stored in your browesr cache which you can continue using later." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Frequently Asked Questions</h1>
        <p className="text-xl text-center text-gray-600 mb-8">Have questions? Find the answers below!</p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer transition-all duration-300"
            >
              <div
                className="flex justify-between items-center text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 py-2 px-4 rounded"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FiMinus className="text-gray-700" />
                ) : (
                  <FiPlus className="text-gray-700" />
                )}
              </div>

              {openIndex === index && (
                <div
                    className="text-gray-600 bg-white px-4 py-2 transition-max-height duration-2000 ease-in-out overflow-hidden"
                    style={{
                    maxHeight: openIndex === index ? "300px" : "0",
                    }}
                >
                    {faq.answer}
                </div>
            )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-gray-700">You have more questions?</p>
          <a
            href="mailto:developers@rapidcv.com"
            className="text-indigo-600 hover:underline"
          >
            Contact us
          </a>
        </div>
      </div>
    </Layout>
  );
}
