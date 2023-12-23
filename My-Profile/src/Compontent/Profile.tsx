
import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [html, sethtml] = useState(true);
  const [css, setcss] = useState(false);
  const [java, setjava] = useState(false);
  const [react, setReact] = useState(false);

  // Active
  const [active, setactive] = useState(true);
  const [active2, setactive2] = useState(false);
  const [active3, setactive3] = useState(false);
  const [active4, setactive4] = useState(false);


  const onhtml = () => {
    sethtml(true);
    setcss(false);
    setjava(false);
    setReact(false)
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
    setReact(false)

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
    setReact(false)

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
    // Active
    setactive2(false);
    setactive(false);
    setactive3(false);
    setactive4(true);
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
            onClick={onhtml}>All Project</button>
            <button 
            className={active2 ? "Onactive-p" : "profile-btn2"}

            onClick={oncss}>Css Project</button>

            <button  className={active3 ? "Onactive-p" : "profile-btn3"}
            onClick={onjava} >Javascript Project</button>

            <button className={active4 ? "Onactive-p" : "profile-btn4"} 
            onClick={onreact} >React Project</button>
          </div>
        </div>

        <div className="Profiles-display">

          {html && 
            <div  className="html">
            
              <div className="all">
                <div className="css-all">
                  <div className="hover"></div>
                <div className="css-image">
                    <img src="code.png" className="images"/>
                </div>

                  <div className="css-word">
                      <h3>CSS Styles</h3> 

                        <p className="about-p">
                          <b>AM</b> a Front-End Developer that will help companies create and
                          maintain a better code base for reusability.
                        </p>
                  </div>

                </div>
              
                <div className="css-all">
                  <div className="css-image">
                      <img src="code.png" className="images"/>
                    </div>

                    <div className="css-word">
                        <h3>CSS Styles</h3> 

                          <p className="about-p">
                            <b>AM</b> a Front-End Developer that will help companies create and
                            maintain a better code base for reusability.
                          </p>
                    </div>

                </div>


                <div className="css-all">

                <div className="css-image">
                    <img src="code4.png" className="images"/>
                  </div>

                  <div className="css-word">
                      <h3>CSS Styles</h3> 
                      <div className="css-p">
                        <p className="about-p">
                          <b>AM</b> a Front-End Developer that will help companies create and
                          maintain a better code base for reusability.
                        </p>
                      </div>
                  </div>
                </div>
              </div>

              <div className="all Java">
                <div className="css-all">
                  <div className="css-image">
                    <img src="code 2.png" className="images"/>
                  </div>

                  <div className="css-word">
                      <h3>Java InterFace</h3> 
                      <div className="css-p">
                        <p className="about-p">
                          <b>AM</b> a Front-End Developer that will help companies create and
                          maintain a better code base for reusability.
                        </p>
                      </div>
                  </div>
                </div>
              
                <div className="css-all">                 
                <div className="css-image">
                    <img src="code 2.png" className="images"/>
                </div>

                  <div className="css-word">
                      <h3>Java InterFace</h3> 
                      <div className="css-p">
                        <p className="about-p">
                          <b>AM</b> a Front-End Developer that will help companies create and
                          maintain a better code base for reusability.
                        </p>
                      </div>
                  </div>
                </div>
              </div>

              <div className="all react">
                  <div className="css-all">
                    <div className="css-image">
                      <img src="code 3.png" className="images"/>
                    </div>
                    <div className="css-word">
                    <h3>React JS</h3> 
                        <div className="css-p">
                          <p className="about-p">
                            <b>AM</b> a Front-End Developer that will help companies create and
                            maintain a better code base for reusability.
                          </p>
                        </div>
                    </div>   
                  </div>
                
                  <div className="css-all">
                    <div className="css-image">
                      <img src="code 3.png" className="images"/>
                    </div>
                    <div className="css-word">
                    <h3>React JS</h3> 
                        <div className="css-p">
                          <p className="about-p">
                            <b>AM</b> a Front-End Developer that will help companies create and
                            maintain a better code base for reusability.
                          </p>
                        </div>
                    </div>   
                  </div>
              </div>
            </div>    
            }

          {css && 
          <div className="css">
            <div className="css-all">
              <div className="css-image">
                <img src="code.png" className="images"/>
              </div>
              <div className="css-word">
                  <h3>CSS Styles</h3> 
                  <div className="css-p">
                    <p className="about-p">
                      <b>AM</b> a Front-End Developer that will help companies create and
                      maintain a better code base for reusability.
                    </p>
                  </div>
              </div>

              
            </div>

            <div className="css-all">
              <div className="css-image">
                <img src="code.png" className="images"/>
              </div>
              <div className="css-word">
                  <h3>CSS Styles</h3> 
                  <div className="css-p">
                    <p className="about-p">
                      <b>AM</b> a Front-End Developer that will help companies create and
                      maintain a better code base for reusability.
                    </p>
                  </div>
              </div>

            </div>

            <div className="css-all">
              <div className="css-image">
                <img src="code4.png" className="images"/>
              </div>

              <div className="css-word">
                  <h3>CSS Styles</h3> 
                  <div className="css-p">
                    <p className="about-p">
                      <b>AM</b> a Front-End Developer that will help companies create and
                      maintain a better code base for reusability.
                    </p>
                  </div>
              </div>
            </div>
          </div>
          }

          {java &&
            <div className="css Java">
              <div className="css-all">                
                <div className="css-image">
                  <img src="code 2.png" className="images"/>
                </div>

                <div className="css-word">
                    <h3>Java InterFace</h3> 
                    <div className="css-p">
                      <p className="about-p">
                        <b>AM</b> a Front-End Developer that will help companies create and
                        maintain a better code base for reusability.
                      </p>
                    </div>
                </div>
              </div>
            
              <div className="css-all">               
                <div className="css-image">
                  <img src="code 2.png" className="images"/>
                </div>
                <div className="css-word">
                    <h3>Java InterFace</h3> 
                    <div className="css-p">
                      <p className="about-p">
                        <b>AM</b> a Front-End Developer that will help companies create and
                        maintain a better code base for reusability.
                      </p>
                    </div>
                </div>
              </div>
          </div>
           }

          {react && 
              <div className="css react">
                <div className="css-all">
                  <div className="css-image">
                    <img src="code 3.png" className="images"/>
                  </div>

                  <div className="css-word">
                  <h3>React JS</h3> 
                      <div className="css-p">
                        <p className="about-p">
                          <b>AM</b> a Front-End Developer that will help companies create and
                          maintain a better code base for reusability.
                        </p>
                      </div>
                  </div>
                </div>
              
                <div className="css-all">
                  <div className="css-image">
                    <img src="code 3.png" className="images"/>
                  </div>

                  <div className="css-word">
                  <h3>React JS</h3> 
                      <div className="css-p">
                        <p className="about-p">
                          <b>AM</b> a Front-End Developer that will help companies create and
                          maintain a better code base for reusability.
                        </p>
                      </div>
                  </div>
                </div>
            </div>
          }
        </div>

      </div>
    </div>
  );
};

export default Profile;
