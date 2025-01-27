import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact - Gradiorum">
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-200 mb-4">
          For inquiries, collaboration proposals, or more details, send us an email:
        </p>
        <p className="mb-6">
          <a href="mailto:gradiorum@gmail.com" className="text-xboxGreen underline">
            gradiorum@gmail.com
          </a>
        </p>
        <p className="text-gray-200">
          We welcome your feedback and look forward to hearing from you.
        </p>
      </section>
    </Layout>
  );
}
