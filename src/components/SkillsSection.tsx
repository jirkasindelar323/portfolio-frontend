import type { Skill } from '../types';

interface Props {
  skills: Skill[];
}

export function SkillsSection({ skills }: Props) {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-category">{skill.category}</span>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.proficiency * 10}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
