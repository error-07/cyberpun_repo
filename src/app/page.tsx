import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center py-24 px-4">
      <h1 className="text-5xl font-extrabold mb-6 text-green-400 tracking-widest text-center">Basith's Terminal Portfolio</h1>
      <p className="text-xl mb-8 text-green-300 text-center">Web Developer & Cyberpunk Enthusiast</p>
      <div className="flex gap-4 justify-center mt-4">
        <a href="/projects" className="terminal-btn">View Projects</a>
        <a href="/skills" className="terminal-btn">Skills</a>
        <a href="/contact" className="terminal-btn">Contact</a>
      </div>
    </div>
  );
}
