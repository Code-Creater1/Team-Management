import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 ">
        <Link href="/" className="text-2xl font-bold ">
          BawdicSoft
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex fixed right-100 gap-10">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 fixed right-20">
          <Link
            href="/"
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/"
            className="rounded-lg bg-black px-5 py-2 text-white hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
