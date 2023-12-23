import "./Services.css";
import ServiceBox from "./ServiceBox";

const Services = () => {
  return (
    <div className="Services" id="Services">
      <h1 className="Services-h1">My Services</h1>
      <p className="Services-p word">What I Will Do For You</p>

      <div className="div">
        <ServiceBox
          icon={<i className="bx bx-code-alt"></i>}
          header3="FrontEnd Developer"
          paragraph=" PROFESSIONAL OBJECTIVE: To contribute in achieving organizational
          goals through hard work and commitment to sound professional
          practice in a diligent way while seeking for further improvement in
          sound professional knowledge and career development."
          paragraph2=" Passionate about learning and developing with a desire to apply for
          skills on a larger development team. Eager to tackle more complex
          problems and continue to find ways to maximize user efficiency."
        />

        <ServiceBox
          icon={<i className="bx bx-laptop"></i>}
          header3="Graphic Designer"
          paragraph=" PROFESSIONAL OBJECTIVE: To contribute in achieving organizational
          goals through hard work and commitment to sound professional
          practice in a diligent way while seeking for further improvement in
          sound professional knowledge and career development."
          paragraph2=" Passionate about learning and developing with a desire to apply for
          skills on a larger development team. Eager to tackle more complex
          problems and continue to find ways to maximize user efficiency."
        />
      </div>
    </div>
  );
};

export default Services;
