import Layout from "../components/Layout";

export default function Papers() {
  return (
    <Layout title="Our Papers - Gradiorum">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">Our Papers</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition">
            <h2 className="text-2xl font-semibold mb-2">
              TransformingGameplay: A Transformer-Based Q-Network
            </h2>
            <p className="mb-2"><strong>Authors:</strong> William A. Stigall, Jitendra Sai Kota</p>
            <p className="text-gray-300 mb-4">
              Explores a transformer-based Q-Network for gameplay environments without convolutional layers,
              analyzing performance and limitations in RL tasks.
            </p>
            <p className="mb-4"><strong>Keywords:</strong> Transformer, Q-Network, RL</p>
            <a
              href="https://arxiv.org/submit/5925810/view"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80"
            >
              Read Paper
            </a>
          </article>
          <article className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition">
            <h2 className="text-2xl font-semibold mb-2">
              Scaling Synthetic Data for Behavioral Health Classification
            </h2>
            <p className="mb-2"><strong>Authors:</strong> William Stigall, Md Abdullah Al Hafiz Khan</p>
            <p className="text-gray-300 mb-4">
              Investigates synthetic data generation using large language models (LLMs) to enhance
              behavioral health classification datasets at scale.
            </p>
            <p className="mb-4"><strong>Keywords:</strong> Synthetic Data, Behavioral Health, LLMs</p>
            <span className="inline-block px-3 py-1 bg-gray-400 text-white rounded opacity-50 cursor-not-allowed">
              Read Paper (Pending)
            </span>
            <p className="mt-2 text-gray-500">
              Link will be available once published.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
