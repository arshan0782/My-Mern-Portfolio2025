import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills">
        <div className="skill">
          <p>HTML5</p>
          <div className="progress-bar">
            <div className="progress html">90%</div>
          </div>
        </div>
        <div className="skill">
          <p>CSS3</p>
          <div className="progress-bar">
            <div className="progress css">80%</div>
          </div>
        </div>
        <div className="skill">
          <p>JavaScript (ES6+)</p>
          <div className="progress-bar">
            <div className="progress js">60%</div>
          </div>
        </div>
        <div className="skill">
          <p>React.js</p>
          <div className="progress-bar">
            <div className="progress react">80%</div>
          </div>
        </div>
        <div className="skill">
          <p>Git & GitHub</p>
          <div className="progress-bar">
            <div className="progress git">60%</div>
          </div>
        </div>
        <div className="skill">
          <p>Responsive Web Design</p>
          <div className="progress-bar">
            <div className="progress rwd">80%</div>
          </div>
        </div>
        <div className="skill">
          <p>Python</p>
          <div className="progress-bar">
            <div className="progress python">70%</div>
          </div>
        </div>
        <div className="skill">
          <p>Excel</p>
          <div className="progress-bar">
            <div className="progress excel">85%</div>
          </div>
        </div>
        <div className="skill">
          <p>Power BI</p>
          <div className="progress-bar">
            <div className="progress powerbi">75%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;