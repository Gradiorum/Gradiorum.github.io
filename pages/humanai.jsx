import Layout from "../components/Layout";

export default function HumanAITeaming() {
  return (
    <Layout title="Human-AI Teaming - Gradiorum">
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Human-AI Teaming</h1>
        <p className="text-gray-200 mb-6">
          In partnership with Kennesaw State University, we research effective paradigms for collaboration between humans
          and intelligent agents. Our aim is to foster trust, interpretability, and high performance in complex tasks.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Scope & Objectives</h2>
        <ul className="list-disc ml-5 mb-6 text-gray-300 space-y-2">
          <li>Develop interactive interfaces for joint human-AI strategy formation.</li>
          <li>Ensure explainability in AI-driven recommendations.</li>
          <li>Explore reinforcement learning & adaptive feedback loops for continuous improvement.</li>
        </ul>
        <p className="text-gray-300">
          This project is in its early phases. We plan to publish working papers, demos, and frameworks as progress
          continues.
        </p>
      </section>
    </Layout>
  );
}
