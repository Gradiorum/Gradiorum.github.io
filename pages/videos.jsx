import Layout from "@/components/Layout";

export default function Videos() {
  return (
    <Layout title="Videos - Gradiorum">
      <section className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl font-bold mb-6">Visit Our YouTube Channel</h1>
        <p className="text-gray-200 mb-6">Access tutorials, demos, and talks.</p>
        <a
          href="https://www.youtube.com/channel/Gradiorum"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80"
        >
          Go to YouTube Channel
        </a>
      </section>
    </Layout>
  );
}
