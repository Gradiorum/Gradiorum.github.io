import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout title="About - Gradiorum">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">About Gradiorum</h1>
        <p className="text-lg text-gray-200 mb-6">
          Gradiorum stands at the intersection of innovation, technology, and art. We present
          cutting-edge projects, creative endeavors, and advanced AI-driven works spanning
          artificial intelligence, reinforcement learning, synthetic data generation, and more.
        </p>
        <p className="text-lg text-gray-200 mb-6">
          Our mission: to push the boundaries of what’s possible, foster collaboration,
          and openly share knowledge with the global community.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-300 mb-8">
          We strive to pioneer forward-looking technological solutions using advanced AI frameworks,
          emerging paradigms, and rigorous research methodologies. Transparency, education, and open
          collaboration define our ethos.
        </p>
        <h2 className="text-3xl font-semibold mb-4">History & Timeline</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">October 13, 2024</h3>
            <p className="text-gray-300">
              Official name change from “FallingPlanet” to “Gradiorum”.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">October 20, 2024</h3>
            <p className="text-gray-300 mb-2">Completion of the major toolkit rewrite:</p>
            <ul className="list-disc ml-5 space-y-1 text-gray-300">
              <li><strong>Via</strong> (formerly Orbit): A lightweight modular framework for AI integration.</li>
              <li><strong>Ascendus</strong> (formerly Quasar): An advanced AI toolkit for scalable automation.</li>
              <li><strong>Motus</strong>: A reinforcement learning library for dynamic AI solutions.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
