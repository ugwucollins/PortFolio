import "./AboutButtons.css";

const MainSkills = () => {
  return (
    <div>
      <div className="MainSkills">
        <span className="MainSkills-span1">
          <span className="MainSkills-span-p1">
            User Exprience Design - Css Styles
          </span>
          <span className="MainSkills-span-p2">
            Delight the user and make it work
          </span>
        </span>

        <span className="MainSkills-span1">
          <span className="MainSkills-span-p1">
            Web & User interface Design - Development
          </span>
          <span className="MainSkills-span-p2">Website. Web Experience___</span>
        </span>

        <span className="MainSkills-span1">
          <span className="MainSkills-span-p1">
            Interacting Designs - Animations
          </span>
          <span className="MainSkills-span-p2">
            I Love to move things and other styles
          </span>
        </span>

        <div className="MainSkills-button">
          <button className="btn">
            <a href="Collins CV.pdf" download="Collins CV.pdf" className="a">
              Download Cv <i className="bx bx-vertical-bottom"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSkills;
