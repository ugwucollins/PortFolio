import { useState } from "react";
import "./About.css";
import MainSkills from "./MainSkills";
import Awards from "./Awards";
import Education from "./Education";

const About = () => {
  const [mainSkills, setMainSkills] = useState(true);
  const [awards, setAwards] = useState(false);
  const [education, setEducation] = useState(false);
  // Active
  const [active, setactive] = useState(true);
  const [active2, setactive2] = useState(false);
  const [active3, setactive3] = useState(false);

  const onMainSkills = () => {
    setMainSkills(true);
    setAwards(false);
    setEducation(false);
    // Active
    setactive(true);
    setactive2(false);
    setactive3(false);
  };
  const onawards = () => {
    setAwards(true);
    setEducation(false);
    setMainSkills(false);
    // Active
    setactive2(true);
    setactive(false);
    setactive3(false);
  };
  const oneducation = () => {
    setEducation(true);
    setactive(true);
    setAwards(false);
    setMainSkills(false);
    // Active
    setactive2(false);
    setactive(false);
    setactive3(true);
  };
  return (
    <div className="About" id="About">
      <div className="about-image">
        <div className="about-div1">
          <span className="about-span1">
            <p className="about-span-no">10+</p>
            <p className="about-span-word">JavaScript</p>
          </span>
        </div>
        <div className="about-div2">
          <span className="about-span2">
            <p className="about-span-no">150+</p>
            <p className="about-span-word">CSS</p>
          </span>
        </div>
        <div className="about-div3">
          <span className="about-span3">
            <p className="about-span-no">200+</p>
            <p className="about-span-word">HTML</p>
          </span>
        </div>

        <div className="about-image-div">
          <img src="collins.png" className="about-image-div-image" />
        </div>
      </div>

      <div className="about-words">
        <h1>About Me</h1>
        <div className="about-intro">
          <h2>Let Me Introduce Myself</h2>
          <p className="about-p">
            <b>I'm</b> Ugwu Somtochukwu Collins by name, am an honest person
            that likes to work hard for a living.&nbsp; &nbsp;
            <b>AM</b> a Front-End Developer that will help companies create and
            maintain a better code base for reusability. Capable of continuous
            learning from senior developers while still nurturing junior
            developers
          </p>

          <div className="buttons">
            <button
              className={active ? "Onactive" : "about-btn1"}
              onClick={onMainSkills}
            >
              Main Skills
            </button>

            <button
              className={active2 ? "Onactive" : "about-btn2"}
              onClick={onawards}
            >
              Awards
            </button>

            <button
              className={active3 ? "Onactive" : "about-btn3"}
              onClick={oneducation}
            >
              Education
            </button>
          </div>

          <div className="about-intro-words">
            {mainSkills && <MainSkills />}
            {awards && <Awards />}
            {education && <Education />}
          </div>

          <div className="button-cv">
            <button className="btn">
              <a href="COLLINS CV.docx" download="COLLINS CV.docx" className="a">
                Download Cv
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
