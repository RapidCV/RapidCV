import { useState } from 'react';
import Layout from "../components/Layout";

const Privacyandpolicy: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Layout>
      <div className="px-6 py-3 text-center">
        <h1 className="text-4xl font-bold my-16">Privacy and Policy</h1>
        <div className="max-w-4xl mx-auto text-left leading-7 space-y-8 pb-10">
          <section>
            <h2 className="text-2xl font-bold my-4">Introduction</h2>
            <p>
              Welcome to our Privacy and Policy page. This page outlines our policies regarding the collection, use, 
              and disclosure of personal information when you use our services. We are committed to protecting your privacy 
              and ensuring that your personal information is handled with care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold my-4">Information Collection and Use</h2>
            <p>
              We collect various types of information for various purposes to provide and improve our services to you. The 
              types of information we may collect include personal information such as your name, email address, and any other 
              details you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold my-4">Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, 
              or destruction. However, please be aware that no method of transmission over the Internet or method of electronic 
              storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold my-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
              on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
              are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold my-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at 
              <a
                href="mailto:developers@rapidcv.com"
                className={`ml-2 font-bold text-blue-600 transition-all duration-300 ${hovered ? 'underline' : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                developers@rapidcv.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Privacyandpolicy;
