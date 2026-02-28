import type { PersonalInfo } from '../types';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

interface Props {
  info: PersonalInfo;
}

export function PersonalInfoCard({ info }: Props) {
  return (
    <section className="card">
      <h1>{info.name}</h1>
      {info.pronunciation && <p className="pronunciation">({info.pronunciation})</p>}
      <h2>{info.title}</h2>
      <p className="bio">{info.bio}</p>
      <div className="contact-info">
        <div className="contact-row">
          <FaMapMarkerAlt className="icon" />
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.location)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {info.location}
          </a>
        </div>
        <div className="contact-row">
          <FaEnvelope className="icon" />
          <a href={`mailto:${info.email}`}>{info.email}</a>
        </div>
        <div className="social-links">
          <a href={info.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
