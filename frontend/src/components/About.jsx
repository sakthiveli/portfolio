import React from 'react';
import './About.css';
import { Award, BookOpen, Code2, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text glass">
            <p className="lead-text">
              I am an Electronics and Communication Engineering student who is passionate about software development and problem solving.
            </p>
            <p>
              I enjoy building real-world applications and constantly improving my coding skills. Bridging the gap between hardware and software, I leverage my ECE background to approach problems with a unique analytical mindset.
            </p>
            <p>
              My journey in software engineering has driven me to excel in algorithmic problem solving and full-stack development using modern technologies like React and Spring Boot.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-card glass">
              <div className="stat-icon"><GraduationCap size={32} className="text-gradient" /></div>
              <h3>ECE Student</h3>
              <p>Undergraduate Engineering</p>
            </div>
            
            <div className="stat-card glass">
              <div className="stat-icon"><Code2 size={32} className="text-gradient" /></div>
              <h3>Full Stack</h3>
              <p>React.js & Spring Boot</p>
            </div>
            
            <div className="stat-card glass highlight">
              <div className="stat-icon"><Award size={32} /></div>
              <h3>200+ Problems</h3>
              <p>Solved on LeetCode (DSA)</p>
            </div>
            
            <div className="stat-card glass">
              <div className="stat-icon"><BookOpen size={32} className="text-gradient" /></div>
              <h3>Continuous</h3>
              <p>Learning & Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
