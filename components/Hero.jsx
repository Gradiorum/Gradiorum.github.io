import SceneRenderer from "./SceneRenderer";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[70vh] bg-black flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/xbox-swirls.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <SceneRenderer />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-white max-w-2xl p-6">
        <h1 className="text-5xl font-bold mb-4 neon-title">
          Welcome to Gradiorum AI Studio
        </h1>
        <p className="text-xl mb-6">
          Empowering innovation through cutting-edge artificial intelligence.
        </p>
        <a
          href="/about"
          className="inline-block px-8 py-3 bg-xboxGreen text-black rounded font-semibold hover:bg-opacity-90 transition"
        >
          Discover More
        </a>
      </div>
    </section>
  );
}
