import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-3 mt-6 mb-8">
      <div className="text-2xl font-extrabold tracking-widest text-green-400 select-none">Basith</div>
      <div className="flex gap-6 text-lg">
        <Link href="/" className="hover:text-green-300 transition-colors px-3 py-1 rounded-md hover:bg-green-900/20">Home</Link>
        <Link href="/projects" className="hover:text-green-300 transition-colors px-3 py-1 rounded-md hover:bg-green-900/20">Projects</Link>
        <Link href="/skills" className="hover:text-green-300 transition-colors px-3 py-1 rounded-md hover:bg-green-900/20">Skills</Link>
        <Link href="/contact" className="hover:text-green-300 transition-colors px-3 py-1 rounded-md hover:bg-green-900/20">Contact</Link>
      </div>
    </nav>
  );
}
