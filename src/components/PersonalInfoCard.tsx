import type { PersonalInfo } from '../types';

interface Props {
  info: PersonalInfo;
}

export function PersonalInfoCard({ info }: Props) {
  return (
    <section className="card">
      <h1>{info.name}</h1>
      <h2>{info.title}</h2>
      <p>{info.bio}</p>
      <div className="contact-info">
        <p>📍 {info.location}</p>
        <p>📧 {info.email}</p>
        <p>
          <a href={info.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' | '}
          <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
