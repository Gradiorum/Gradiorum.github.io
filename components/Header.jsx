import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="Gradiorum Logo" className="w-8 h-8" />
        <Link href="/" className="text-xl font-bold">Gradiorum</Link>
      </div>
      <nav className="hidden md:flex space-x-4">
        <Link href="/" className="hover:text-accent">Home</Link>
        <Link href="/dashboard" className="hover:text-accent">Dashboard</Link>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <Link href="/settings" className="hover:text-accent">Settings</Link>
      </nav>
      <div className="flex space-x-2">
        <Link href="/auth/signin" className="hover:text-accent">Sign In</Link>
        <Link href="/auth/signup" className="hover:text-accent">Sign Up</Link>
      </div>
    </header>
  );
}
