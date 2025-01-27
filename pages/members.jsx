import Layout from "@/components/Layout";

export default function Members() {
  return (
    <Layout title="Members - Gradiorum">
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Members</h1>
        <div className="md:flex items-center md:space-x-6 mb-6">
          <img
            src="/images/william-stigall.jpg"
            alt="William A. Stigall"
            className="w-32 h-32 rounded-full object-cover border-2 border-xboxGreen mb-4 md:mb-0"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">William A. Stigall</h2>
            <p className="text-gray-200">
              William is a 22-year-old AI enthusiast with a B.S. in CS (AI concentration) and Data Science minor from
              KSU. He’ll start an M.S. in Machine Learning at Georgia Tech in January. Dedicated to bridging the gap
              between reinforcement learning, human-AI teaming, and everyday life.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
