import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}>
      <Header />
      <main className="page-wrapper py-10">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        <form className="max-w-md w-full space-y-4">
          <input type="text" placeholder="Username" className="w-full p-3 rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded" />
          <input type="password" placeholder="Password" className="w-full p-3 rounded" />
          <button type="submit" className="w-full p-3 bg-[var(--accent-color)] text-black rounded">Sign Up</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
