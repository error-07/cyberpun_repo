"use client";
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    name: "ASL Application",
    summary: "An app for American Sign Language recognition and translation using AI.",
    details: "This application leverages advanced computer vision and machine learning algorithms to accurately detect and interpret facial expressions and hand gestures associated with American Sign Language (ASL). By processing live video input, it translates these visual cues into real-time text or synthesized speech, facilitating seamless communication between deaf or hard-of-hearing individuals and those unfamiliar with sign language.The system incorporates robust gesture recognition models that adapt to diverse lighting conditions and signer variations, ensuring high accuracy and responsiveness. Its intuitive user interface allows easy interaction, making it suitable for educational environments, public services, and daily conversations. Ultimately, this tool aims to reduce communication barriers and promote inclusivity.",
  },
  {
    name: "Health Bot",
    summary: "A dual-mode chatbot that provides health tips, tracks symptoms, and offers wellness advice.",
    details: "This AI-powered health assistant features two integrated modes to support users in understanding their health conditions. The first mode is a Symptom Checker, where users can input one or more symptoms and receive a list of possible health issues or conditions based on medical data and pattern analysis.The second mode is a Conversational AI Bot designed to answer health-related questions in real-time. It uses natural language understanding to provide clear, context-aware responses—explaining symptoms, giving general health advice, and helping users decide if medical attention is needed.Together, these modes make the assistant a valuable self-assessment and educational tool, suitable for everyday health concerns, early triage support, and wellness guidance. It emphasizes accessibility, privacy, and ease of use.",
  },
  {
    name: "Phishing Simulator",
    summary: "A tool to simulate phishing attacks for security awareness training.",
    details: "TThis platform simulates realistic phishing emails and fake websites to assess and improve employees' awareness and preparedness against phishing attacks. By mimicking common phishing tactics and social engineering strategies, it helps organizations identify vulnerable individuals and train them to recognize suspicious content.The simulator provides detailed reports and analytics, allowing security teams to evaluate risk levels, track improvements over time, and tailor educational programs effectively. It supports customizable phishing campaigns to match different organizational roles and threat scenarios, making it a versatile tool in cybersecurity defense.",
  },
];

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (open !== null && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [open]);

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-green-400 text-center">Projects</h1>
      {projects.map((project, idx) => (
        <div key={project.name} className="terminal-card cursor-pointer" onClick={() => setOpen(idx)}>
          <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
          <p className="text-green-300">{project.summary}</p>
        </div>
      ))}
      <dialog
        ref={dialogRef}
        className="rounded-lg p-0 border-2 border-green-400 bg-black/95 max-w-lg w-full shadow-xl z-50"
        onClick={e => {
          if (e.target === dialogRef.current) setOpen(null);
        }}
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'fixed' }}
      >
        {open !== null && (
          <div className="p-6 flex flex-col gap-4 items-center text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-2">{projects[open].name}</h2>
            <p className="text-green-300 mb-4">{projects[open].details}</p>
            <button className="terminal-btn" onClick={() => setOpen(null)}>Close</button>
          </div>
        )}
      </dialog>
    </div>
  );
}
