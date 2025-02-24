import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        {/* Sign-up form placeholder */}
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Username" className="w-full p-3 mb-4 rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 rounded" />
          <button type="submit" className="w-full p-3 bg-accent text-black rounded">Sign Up</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
