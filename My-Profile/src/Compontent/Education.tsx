import "./AboutButtons.css";

const Education = () => {
  return (
    <>
      <div className="MainSkills">
        <span className="MainSkills-span1">
          <span className="MainSkills-span-p1">
            Online Courses and Practices
          </span>
          <span className="MainSkills-span-p2">
            Delight the user and make it work
          </span>
        </span>

        <span className="MainSkills-span1">
          <span className="MainSkills-span-p1">
            Problems Solving and Projects
          </span>
          <span className="MainSkills-span-p2">Website. Web Experience__</span>
        </span>

        <span className="MainSkills-span1">
          <span className="MainSkills-span-p1">Science Student</span>
          <span className="MainSkills-span-p2">I Love to move things.</span>
        </span>

        <div className="MainSkills-button">
          <button className="btn">
            <a href="Collins CV.pdf" download="Collins CV.pdf" className="a">
              Download Cv <i className="bx bx-vertical-bottom"></i>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Education;
