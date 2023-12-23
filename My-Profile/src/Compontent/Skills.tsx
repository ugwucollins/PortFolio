import "./Skills.css";

const Skills = () => {
  return (
    <div className="Skills" id="Skills">
      <span>
        <h1 className="Skills-h1">My Skills</h1>
        <p className="Skills-p">Let Me Help You</p>
      </span>

      <div className="Skills-box">
        <div className="tech1">
          <h2 className="Technical">Technical Skills</h2>
          <div className="Skills-box-line">
            <div className="Skills-box-rating">
              <div className="line-p">
                <p className="html-p">HTML</p>
                <p className="html-p-p">90%</p>
              </div>
              <div className="lines"></div>
            </div>
            <div className="Skills-box-rating">
              <div className="line-p">
                <p className="html-p">CSS</p>
                <p className="html-p-p">75%</p>
              </div>
              <div className="lines2"></div>
            </div>
            <div className="Skills-box-rating">
              <div className="line-p">
                <p className="html-p">Java Script</p>
                <p className="html-p-p">60%</p>
              </div>
              <div className="lines3"></div>
            </div>
            <div className="Skills-box-rating">
              <div className="line-p">
                <p className="html-p">React JS</p>
                <p className="html-p-p">50%</p>
              </div>
              <div className="lines4"></div>
            </div>
          </div>
        </div>

        <div className="tech2">
          <h2 className="Technical">Professional Skills</h2>
          <div className="Skills-box-circle">
            <div className="Skills-box-rating-circle">
              <p className="html-p2">Team work</p>
              <p className="html-p-p2">60%</p>
              <div className="lines-circle3"></div>
            </div>

            <div className="Skills-box-rating-circle">
              <p className="html-p2">Creativity</p>
              <p className="html-p-p2">90%</p>
              <div className="lines-circle"></div>
            </div>

            <div className="Skills-box-rating-circle">
              <p className="html-p2">Co-operation</p>
              <p className="html-p-p2">50%</p>
              <div className="lines-circle4"></div>
            </div>

            <div className="Skills-box-rating-circle">
              <p className="html-p2">Comunication</p>
              <p className="html-p-p2">75%</p>
              <div className="lines-circle2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
