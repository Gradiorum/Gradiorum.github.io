import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Via Studio Project */}
          <div className="bg-gray-900 text-white p-6 rounded-lg hover:shadow-neon hover:scale-105 transform transition relative">
            <h3 className="text-2xl font-semibold mb-2">Via Studio</h3>
            <p className="mb-4">
              Our latest launch – an integrated platform for API compilation, local hosting executables, and dynamic workflows.
              <span className="ml-2 text-sm text-red-400 font-bold">Coming Soon</span>
            </p>
            <button disabled className="inline-block px-4 py-2 bg-xboxGreen text-black rounded opacity-50 cursor-not-allowed">
              Coming Soon
            </button>
          </div>
          {/* Ascendus Project */}
          <div className="bg-gray-900 text-white p-6 rounded-lg hover:shadow-neon hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-2">Ascendus</h3>
            <p className="mb-4">
              An advanced AI toolkit for scalable automation and efficiency.
            </p>
            <a
              href="https://github.com/Gradiorum/Ascendus"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 text-black bg-xboxGreen rounded hover:bg-opacity-80 transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest News</h2>
        <p className="text-gray-200 text-center">
          Check out the <a href="/blog" className="text-xboxGreen underline">blog</a> for updates!
        </p>
      </section>
    </Layout>
  );
}
