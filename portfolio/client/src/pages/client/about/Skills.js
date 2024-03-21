import React, { useState, useEffect } from "react";
import "../../../assets/css/public/about.css";

const Skills = () => {
  const skillsData = [
    { name: "HTML5", percentage: 80, skillName: "html" },
    { name: "CSS3", percentage: 85, skillName: "css" },
    { name: "js", percentage: 75, skillName: "javaScript" },
    { name: "node", percentage: 65, skillName: "node" },
    { name: "React", percentage: 75, skillName: "React" },
    { name: "Bootstrap", percentage: 80, skillName: "bootstrep" },
    { name: "java", percentage: 89, skillName: "java" },
  ];

  const [skills, setSkills] = useState(
    skillsData.map((skill) => ({ ...skill, width: 10 }))
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill.width >= skill.percentage
            ? skill
            : { ...skill, width: skill.width + 1 }
        )
      );
    }, 180);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* page title */}
      <div className="Continer secondTitle">
        <p className="tinyHeading">SKILLS</p>
        <p className="pageName">My Skills</p>
      </div>
      {/* page title */}
      {/* skills */}
      <div className="Continer skills">
        <div id="progressContainer">
          {skills.map((skill, index) => (
            <div key={index} className="skillParent">
              <div className="skillDetail">
                <i
                  className={`fa-brands fa-${skill.name
                    .toLowerCase()
                    .replace(".", "-")}`}
                ></i>
                <p>{skill.skillName}</p>
              </div>

              <div className="progressor_Parent">
                <div
                  className="progressor"
                  style={{ width: `${skill.width}%` }}
                >
                  {skill.width}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* skills */}

      {/* testimonial */}
      {/* testimonial */}
    </>
  );
};

export default Skills;
