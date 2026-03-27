import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background elements */}
      <div className="gradient-blob shape-1"></div>
      <div className="gradient-blob shape-2"></div>
      
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <p className="greeting text-gradient">Hello, I'm</p>
          <h1 className="hero-title">Sakthivel</h1>
          <h2 className="hero-subtitle">
            ECE Student <span className="separator">|</span> Software Developer
          </h2>
          <p className="hero-description">
            Passionate about coding, problem solving, and building real-world web applications.
            Turning concepts into robust, scalable software solutions.
          </p>
          
          <div className="hero-cta delay-200 animate-fade-in">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
          
          <div className="hero-socials delay-300 animate-fade-in">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sakthivel@example.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual delay-200 animate-fade-in">
          <div className="code-window glass">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="window-content">
              <pre><code>
<span className="keyword">const</span> <span className="entity">developer</span> = {'{'}
  <span className="property">name</span>: <span className="string">'Sakthivel'</span>,
  <span className="property">role</span>: <span className="string">'Software Engineer'</span>,
  <span className="property">passions</span>: [<span className="string">'Building Apps'</span>, <span className="string">'Problem Solving'</span>],
  <span className="property">leetCodeStatus</span>: <span className="string">'200+ Problems Solved'</span>
{'}'};
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
