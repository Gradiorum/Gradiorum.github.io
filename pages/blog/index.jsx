import Layout from "../../components/Layout";
import Link from "next/link";

export default function BlogIndex() {
  // Example placeholder blog listing (replace with real fetch if needed)
  const mockPosts = [
    {
      slug: "williams-journey-and-our-vision",
      title: "William’s Journey and Our Vision",
      excerpt: "Our founder prepares for an MS at Georgia Tech, bridging the gap between AI research and everyday applications...",
      date: "Dec 07, 2024",
    },
    {
      slug: "synthetic-data-for-behavioral-health",
      title: "Scaling Synthetic Data for Behavioral Health",
      excerpt: "Investigating how LLMs can enrich classification datasets in healthcare with safe synthetic data...",
      date: "Nov 15, 2024",
    }
  ];

  return (
    <Layout title="Blog - Gradiorum">
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {mockPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-200 mb-6">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block px-4 py-2 rounded bg-xboxGreen text-black font-semibold hover:bg-opacity-80"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
