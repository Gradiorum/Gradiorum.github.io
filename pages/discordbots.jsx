import Layout from "@/components/Layout";

export default function DiscordBots() {
  return (
    <Layout title="Discord Bots - Gradiorum">
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Discord Bots</h1>
        <p className="text-gray-200 mb-6">
          Gradiorum’s Discord integrations bring innovative capabilities right into your community servers.
        </p>
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">GradiorumMP3</h2>
          <p>
            A music manager bot for Discord, capable of playing MP3 files, handling playlists, queue management, skipping, 
            pausing, and resuming tracks—bringing a social listening experience to your server.
          </p>
        </article>
        <article>
          <h2 className="text-2xl font-semibold mb-2">Polishadow</h2>
          <p>
            Monitors politicians’ stock trades and leverages synthetic data insights to detect potential insider patterns. 
            It can paper-trade strategies, issue alerts, and offer subscription tiers for timely updates on moves in the market.
          </p>
        </article>
      </section>
    </Layout>
  );
}
