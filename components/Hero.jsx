export default function Hero() {
  return (
    <section
      className="relative w-full h-[60vh] bg-black flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/xbox-swirls.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 text-white max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 neon-title">
          Welcome to Gradiorum
        </h1>
        <p className="text-xl mb-6">
          The Frontier of Innovation &amp; Technology
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 text-black bg-xboxGreen rounded font-semibold hover:bg-opacity-80 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
