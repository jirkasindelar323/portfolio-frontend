export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface Project {
  name: string;
  description: string;
  techStack: string;
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
}
