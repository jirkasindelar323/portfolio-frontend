import { useEffect, useState } from 'react';
import './App.css';
import { PersonalInfoCard } from './components/PersonalInfoCard';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { getPersonalInfo, getProjects, getSkills } from './services/api';
import type { PersonalInfo, Project, Skill } from './types';

function App() {
  const [info, setInfo] = useState<PersonalInfo | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [infoData, projectsData, skillsData] = await Promise.all([
          getPersonalInfo(),
          getProjects(),
          getSkills(),
        ]);
        setInfo(infoData);
        setProjects(projectsData);
        setSkills(skillsData);
      } catch (err) {
        setError('Failed to load portfolio data. Is the backend running?');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        // info is optional because it might fail to load, but projects and skills will just be empty arrays if they fail
        {info && <PersonalInfoCard info={info} />} 
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
      </main>
    </div>
  );
}

export default App;
