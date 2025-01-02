import { 
  Code2, 
  Database,  
  Server, 
  Cloud,
  PenTool,
  Wrench,
  GitBranch,
  Terminal
} from 'lucide-react';

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "Angular", icon: Code2},
      { name: "React", icon: Code2},
      { name: "UI/UX Design", icon: PenTool}
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: Server, level: 90 },
      { name: "Node.js", icon: Terminal, level: 85 },
      { name: "Databases", icon: Database, level: 88 }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "AWS/Cloud", icon: Cloud, level: 82 },
      { name: "Docker/K8s", icon: Wrench, level: 80 },
      { name: "Git/CI-CD", icon: GitBranch, level: 92 }
    ]
  }
];