import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function BlogIndex() {
  // Example placeholder posts
  const posts = [
    { slug: "post-one", title: "Post One", excerpt: "This is the first blog post.", date: "2024-12-07" },
    { slug: "post-two", title: "Post Two", excerpt: "This is the second blog post.", date: "2024-11-15" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.slug} className="p-4 bg-gray-800 rounded">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-sm text-gray-400">{post.date}</p>
              <p className="mt-2">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-accent underline">Read More</Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
