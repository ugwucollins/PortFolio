import "./Home.css";
// import Typewriter from "typewriter-effect";
const Home = ({ Open }: any) => {
  return (
    <div className="Home" id="Home">
      <div className="Home-text">
        <div className="home-text-word">
          <p className="welcome home-p">WELCOME TO MY WORLD</p>
          <h1 className="home-h1">Hi I'm Tony Collins</h1>
          <h2 className="type">
            <div className="writing"></div>
            
            {/* <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am a FrontEnd Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I also work in Vue.js")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Welcome To Your Profile collins")
                  .pauseFor(1000)
                  .start();
              }}
            /> */}
          </h2>
          <p className="home-p">
            Computer Based Test (CBT) is one of the modern technological
            inventories in an educational system ( Tachia, 2018). Computer Based
            Test is defined as tests or assessments that are administered by
            computer in either stand-alone or dedicated network, or by other
          </p>
        </div>

        <div className="home-button">
          <button className="btn">
            <a href="Collins CV.pdf" download="Collins CV.pdf" className="a">
              Download Cv <i className="bx bx-vertical-bottom"></i>
            </a>
          </button>
          <button className="btn2" onClick={() => Open()}>
            <a onClick={() => Open()} className="a">
              Hire Me Now!
            </a>
          </button>
        </div>

        <div className="home-icon">
          <nav className="nav-icon">
            <ul className="ul-icon">
              <li className="li-icon">
                <a
                  href="https://www.facebook.com/tonycollins.ugwu.18?mibextid=rS40aB7S9Ucbxw6v"
                  className="a-icon"
                >
                  <div className="icons">
                    <i className="bx bxl-facebook"></i>
                  </div>
                </a>

                <a
                  href="https://instagram.com/tonycollinsu?igshid=YWYwM2I1ZDdmOQ=="
                  className="a-icon"
                >
                  <div className="icons">
                    <i className="bx bxl-instagram"></i>
                  </div>
                </a>

                <a
                  href="https://twitter.com/ugwu_somto5?t=b32VnJTFlyDSqqUnMx_eg&s=08"
                  className="a-icon"
                >
                  <div className="icons">
                    <i className="bx bxl-twitter"></i>
                  </div>
                </a>

                <a href="https://github.com/ugwucollins" className="a-icon">
                  <div className="icons">
                    <i className="bx bxl-github"></i>
                  </div>
                </a>

                <a href="https://wa.me/+2348101245121" className="a-icon">
                  <div className="icons">
                    <i className="bx bxl-whatsapp"></i>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="picture-section">
        <div className="image-div">
          <div className="image-divs">
            <span className="cover"></span>
            <img src="collins.png" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
