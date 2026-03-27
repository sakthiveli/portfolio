import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript']
    },
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'React.js']
    },
    {
      title: 'Backend Development',
      skills: ['Spring Boot']
    },
    {
      title: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">My Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass animate-fade-in delay-100">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
