import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="Gradiorum AI Studio Logo" className="w-10 h-10" />
        <Link href="/" className="text-xl font-bold">Gradiorum AI Studio</Link>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-[var(--accent-color)]">Home</Link>
        <Link href="/dashboard" className="hover:text-[var(--accent-color)]">Dashboard</Link>
        <Link href="/blog" className="hover:text-[var(--accent-color)]">Blog</Link>
        <Link href="/about" className="hover:text-[var(--accent-color)]">About</Link>
        <Link href="/settings" className="hover:text-[var(--accent-color)]">Settings</Link>
      </nav>
      <div className="flex space-x-4">
        <Link href="/auth/signin" className="hover:text-[var(--accent-color)]">Sign In</Link>
        <Link href="/auth/signup" className="hover:text-[var(--accent-color)]">Register</Link>
      </div>
    </header>
  );
}
