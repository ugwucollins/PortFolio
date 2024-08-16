import { useState } from "react";
import "./Profile.css";
import ProCard from "./proCard";
const Profile = () => {
  const [html, sethtml] = useState(true);
  const [css, setcss] = useState(false);
  const [java, setjava] = useState(false);
  const [react, setReact] = useState(false);
  const [next, setnext] = useState(false);

  // Active
  const [active, setactive] = useState(true);
  const [active2, setactive2] = useState(false);
  const [active3, setactive3] = useState(false);
  const [active4, setactive4] = useState(false);
  const [active5, setactive5] = useState(false);

  const onhtml = () => {
    sethtml(true);
    setcss(false);
    setjava(false);
    setReact(false);
    setnext(false);
    setactive5(false);
    // Active
    setactive(true);
    setactive2(false);
    setactive3(false);
    setactive4(false);
  };
  const oncss = () => {
    setcss(true);
    setjava(false);
    sethtml(false);
    setReact(false);
    setnext(false);
    setactive5(false);

    // Active
    setactive2(true);
    setactive(false);
    setactive3(false);
    setactive4(false);
  };
  const onjava = () => {
    setjava(true);
    setactive(true);
    setcss(false);
    sethtml(false);
    setReact(false);
    setnext(false);
    setactive5(false);

    // Active
    setactive2(false);
    setactive(false);
    setactive3(true);
    setactive4(false);
  };
  const onreact = () => {
    setjava(false);
    setcss(false);
    sethtml(false);
    setReact(true);
    setnext(false);
    setactive5(false);
    // Active
    setactive2(false);
    setactive(false);
    setactive3(false);
    setactive4(true);
  };
  const onnext = () => {
    setjava(false);
    setcss(false);
    sethtml(false);
    setReact(false);
    setnext(true);
    // Active

    setactive2(false);
    setactive(false);
    setactive3(false);
    setactive4(false);
    setactive5(true);
  };

  return (
    <div className="Profiles" id="Profile">
      <div className="Profiles-work">
        <div className="Profiles-head">
          <h1 className="head-h1">My Services/ Projects</h1>
          <p>What Can I Do For You</p>
        </div>

        <div className="Profiles-btn">
          <div className="all-btn">
            <button
              className={active ? "Onactive-p" : "profile-btn"}
              onClick={onhtml}
            >
              All Project
            </button>
            <button
              className={active2 ? "Onactive-p" : "profile-btn2"}
              onClick={oncss}
            >
              Styles(Css) Project
            </button>
            <button
              className={active3 ? "Onactive-p" : "profile-btn3"}
              onClick={onjava}
            >
              Javascript Project
            </button>
            +{" "}
            <button
              className={active4 ? "Onactive-p" : "profile-btn4"}
              onClick={onreact}
            >
              React Project
            </button>
            <button
              className={active5 ? "Onactive-p" : "profile-btn4 next"}
              onClick={onnext}
            >
              Next.Js Project
            </button>
          </div>
        </div>

        <div className="Profiles-display">
          {html && (
            <div className="html">
              {/* Css */}
              <ProCard
                heading="CSS Styles"
                img="code.png"
                about=" frontend dev I used html and Css in the design for the website to ensure a beautiful page for Our Client.
                    "
                h="As a"
                links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html"
                links2="Landening page"
              />
              <ProCard
                heading="Sass/Scss Styles"
                img="code.png"
                about="used sass in building of a Gym excerise 
                website which was fully mobile responsive and awsome
                    "
                h="I also"
                links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html"
                links2="Gym Excerise"
              />
              <ProCard
                heading="Tailwind CSS Styles"
                img="code6.jpg"
                about="Tailwind css in creating a beautifull Acme Rocket which was fully mobile responsive with light and dark mode that is been added in the project.
                    "
                h="I used"
                links="https://rocket-tailwind.vercel.app/"
                links2="Acme Rocket"
              />

              {/* JavaScript */}
              <ProCard
                heading="JavaScript Projects"
                img="code 2.png"
                about=" javaScript in creating a user interFace and interactive website by creating the Amazon Ecommerce that was fully responsive and interactive.
                    "
                h="I used"
                links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html"
                links2="Amazon Ecommerce"
              />

              <ProCard
                heading="JavaScript Projects"
                img="code 2.png"
                about=" javaScript in creating an interactive Birthday website for a Friend.
                    "
                h="I used"
                links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Birthday/"
                links2="Birthday Project"
              />

              {/* React JS */}
              <ProCard
                heading="React JS"
                img="code 3.png"
                about=" is a good javaScript frameWork that i used in creating or building an awesome, fully mobile and interactive movie Cards.
                    "
                h="React"
                links="https://movie-app-ten-ashen.vercel.app/"
                links2="Moive Cards"
              />
              <ProCard
                heading="React JS"
                // img="code 3.png"
                img="code5.png"
                about="React and TypeScrpit in creating a validated react form handling which was also very good form and fully mobile responsive.
                    "
                h="I used"
                links="https://react-form-handling.vercel.app/"
                links2="React Form Handling"
              />

              {/* Next JS */}
              <ProCard
                heading="Next JS"
                img="code4.png"
                about="is an awesome react framework that helps in creating a Wikipedia project with the help of typeScriptand tailwind css in creating a responsive website.
                    "
                links="https://next02-ten.vercel.app/"
                h="Next Js"
                links2="Wikipedia Project"
              />
              <ProCard
                heading="Next JS"
                img="code4.png"
                about="Next Js in creating a user page with the users  personal information from an Api.
                    "
                links="https://next01-ivory.vercel.app/"
                h="I used"
                links2="Users Project"
              />
            </div>
          )}

          {css && (
            <div className="css">
              {/* Css */}
              <ProCard
                heading="CSS Styles"
                img="code.png"
                about=" frontend dev I used html and Css in the design for the website to ensure a beautiful page for Our Client.
                    "
                h="As a"
                links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html"
                links2="Landening page"
              />
              <ProCard
                heading="Sass/Scss Styles"
                img="code.png"
                about="used sass in building of a Gym excerise 
                website which was fully mobile responsive and awsome
                    "
                h="I also"
                links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html"
                links2="Gym Excerise"
              />
              <ProCard
                heading="Tailwind CSS Styles"
                img="code6.jpg"
                about="Tailwind css in creating a beautifull Acme Rocket which was fully mobile responsive with light and dark mode that is been added in the project.
                    "
                h="I used"
                links="https://rocket-tailwind.vercel.app/"
                links2="Acme Rocket"
              />
              {/* <div className="css-all">
                <div className="css-image">
                  <img src="code.png" className="images" />
                </div>
                <div className="css-word">
                  <h3>CSS Styles</h3>
                  <div className="css-p">
                    <p className="about-p">
                      <b>AM</b> a Front-End Developer that will help companies
                      create and maintain a better code base for reusability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="css-all">
                <div className="css-image">
                  <img src="code4.png" className="images" />
                </div>

                <div className="css-word">
                  <h3>CSS Styles</h3>
                  <div className="css-p">
                    <p className="about-p">
                      <b>AM</b> a Front-End Developer that will help companies
                      create and maintain a better code base for reusability.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          )}

          {java && (
            <div className="css Java">
              {/* JavaScript */}
              <ProCard
                heading="JavaScript Projects"
                img="code 2.png"
                about=" javaScript in creating a user interFace and interactive website by creating the Amazon Ecommerce that was fully responsive and interactive.
                    "
                h="I used"
                links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html"
                links2="Amazon Ecommerce"
              />

              <ProCard
                heading="JavaScript Projects"
                img="code 2.png"
                about=" javaScript in creating an interactive Birthday website for a Friend.
                    "
                h="I used"
                links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Birthday/"
                links2="Birthday Project"
              />
            </div>
          )}

          {react && (
            <div className="css react">
              {/* React JS */}
              <ProCard
                heading="React JS"
                img="code 3.png"
                about=" is a good javaScript frameWork that i used in creating or building an awesome, fully mobile and interactive movie Cards.
                    "
                h="React"
                links="https://movie-app-ten-ashen.vercel.app/"
                links2="Moive Cards"
              />
              <ProCard
                heading="React JS"
                // img="code 3.png"
                img="code5.png"
                about="React and TypeScrpit in creating a validated react form handling which was also very good form and fully mobile responsive.
                    "
                h="I used"
                links="https://react-form-handling.vercel.app/"
                links2="React Form Handling"
              />
            </div>
          )}

          {next && (
            <div className="css react next">
              {/* Next JS */}
              <ProCard
                heading="Next JS"
                img="code4.png"
                about="is an awesome react framework that helps in creating a Wikipedia project with the help of typeScriptand tailwind css in creating a responsive website.
                    "
                links="https://next02-ten.vercel.app/"
                h="Next Js"
                links2="Wikipedia Project"
              />
              <ProCard
                heading="Next JS"
                img="code4.png"
                about="Next Js in creating a user page with the users  personal information from an Api.
                    "
                links="https://next01-ivory.vercel.app/"
                h="I used"
                links2="Users Project"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
