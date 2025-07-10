export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-green-400 text-center">Contact Me</h1>
      <div className="terminal-card flex flex-col gap-4">
        <div><span className="font-bold">Email:</span> <a href="mailto:baseet52@gmail.com" className="terminal-link">baseet52@gmail.com</a></div>
        <div><span className="font-bold">Phone:</span> <a href="tel:+966582991575" className="terminal-link">+966 58299 1575</a></div>
        <div><span className="font-bold">GitHub:</span> <a href="https://github.com/error-07" className="terminal-link" target="_blank" rel="noopener noreferrer">github.com/error-07</a></div>
        <div><span className="font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/mohammad-baseet-110262214" className="terminal-link" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/mohammad-baseet-110262214</a></div>
      </div>
    </div>
  );
}
