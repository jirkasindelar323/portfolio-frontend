import type { PersonalInfo, Project, Skill } from '../types';

const API_BASE = 'http://localhost:8080/api';

export async function getPersonalInfo(): Promise<PersonalInfo> {
  const response = await fetch(`${API_BASE}/info`);
  if (!response.ok) {
    throw new Error('Failed to fetch personal info');
  }
  return response.json();
}

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

export async function getSkills(): Promise<Skill[]> {
  const response = await fetch(`${API_BASE}/skills`);
  if (!response.ok) {
    throw new Error('Failed to fetch skills');
  }
  return response.json();
}
