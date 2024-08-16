import "./AboutButtons.css";

const Awards = () => {
  return (
    <>
      <div className="MainSkills">
        <span className="MainSkills-span1">
          <span className="MainSkills-span-p1">Web Design Award</span>
          <span className="MainSkills-span-p2">
            Award of creativity and user Experience
          </span>
        </span>

        <span className="MainSkills-span1">
          <span className="MainSkills-span-p1">Code and Development Award</span>
          <span className="MainSkills-span-p2">
            Coding Skills and Develoment techniques
          </span>
        </span>

        <span className="MainSkills-span1">
          <span className="MainSkills-span-p1"> Science Student</span>
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

export default Awards;
