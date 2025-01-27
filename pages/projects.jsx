import Layout from "@/components/Layout";

export default function Projects() {
  return (
    <Layout title="Projects - Gradiorum">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <article id="via" className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition">
            <h2 className="text-2xl font-semibold mb-4">Via</h2>
            <p className="mb-4">
              A lightweight, modular framework for AI integration. Simplifies connecting various AI components, enabling
              rapid prototyping.
            </p>
            <a
              href="https://github.com/Gradiorum/Via"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80"
            >
              View on GitHub
            </a>
          </article>
          <article id="ascendus" className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition">
            <h2 className="text-2xl font-semibold mb-4">Ascendus</h2>
            <p className="mb-4">
              An advanced AI toolkit for scalable automation and efficiency. Ideal for large-scale deployments and
              complex orchestration tasks.
            </p>
            <a
              href="https://github.com/Gradiorum/Ascendus"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80"
            >
              View on GitHub
            </a>
          </article>
          <article className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition">
            <h2 className="text-2xl font-semibold mb-4">LuminaGuard</h2>
            <p className="mb-4">
              An AI-driven adaptive lighting solution. Adjusts screen brightness, color temperature,
              and integrates with smart lighting for optimized environments.
            </p>
            <a
              href="https://github.com/Gradiorum/Gradiorum"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80"
            >
              View on GitHub
            </a>
          </article>
          <article className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition">
            <h2 className="text-2xl font-semibold mb-4">Motus</h2>
            <p className="mb-4">
              A reinforcement learning library for dynamic AI solutions. Provides specialized
              RL modules for advanced problem solving.
            </p>
            <a
              href="https://github.com/Gradiorum/Motus"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80"
            >
              View on GitHub
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
