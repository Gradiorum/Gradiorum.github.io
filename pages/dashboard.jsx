import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}>
      <Sidebar />
      <div className="flex-grow p-8">
        <Header />
        <h1 className="text-4xl font-bold mb-6">Your Projects & Workflows</h1>
        {/* Placeholder content */}
        <p>This area will allow you to create new workflows, view chat history per project, and manage your AI integrations.</p>
      </div>
      <Footer />
    </div>
  );
}
