const skills = [
    {name: 'React', level: 85, },
    { name: 'Node.js', level: 85,  },
    { name: 'MongoDB', level: 80,  },
    { name: 'Express.js', level: 80, },
    { name: 'HTML/CSS', level: 90,  },
    { name: 'Tailwind CSS', level: 80,  },
    { name: 'Framer Motion', level: 70,  },
    { name: 'Java', level: 80,  },
    { name: 'Spring Boot', level: 75,  },
    { name: 'MySQL', level: 75,  },
    { name: 'PostgreSQL', level: 70,  },
    { name: 'Python', level: 65,  },
    { name: 'Docker', level: 60, },
    { name: 'Git/GitHub', level: 85,  },
    { name: 'Zoho CRM', level: 60,  },
    { name: 'C++', level: 50,  },
    { name: 'C#', level: 30,  },
    { name: 'Rust', level: 5,  }
];


//   ];
export default function Skills() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-green-400 text-center">Skills</h1>
      <div className="flex flex-col gap-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between items-center">
              <span className="font-semibold text-green-300 text-sm">{skill.name}</span>
              <span className="text-green-400 text-xs font-mono">{skill.level}%</span>
            </div>
            <div className="progress-bar h-6 mb-4">
              <div className="progress h-6" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
