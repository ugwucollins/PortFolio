import "./Services.css";
import ServiceBox from "./ServiceBox";

const Services = () => {
  const landening =
    "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html";
  return (
    <div className="Services" id="Services">
      <h1 className="Services-h1">My Services</h1>
      <p className="Services-p word">What I Will Do For You</p>

      <div className="div">
        <ServiceBox
          icon={<i className="bx bx-code-alt"></i>}
          header3="FrontEnd Developer"
          paragraph={`Am a frontend developer  who have used Html and css to create a stunning landening Page which has attracted more acolades with other projects here is the Github Link: https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html

            And also used html,css and javaScript to build the Amazon Economecs which was fully mobile responsive and also interactive you can check it out on :
            `}
          links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html"
          paragraph2="I Am very detailed and use straightforward codes to ensure clean and easy maintenance, to mention but a few is the expertise in ensuring my projects often meets quality standards by using javaScript Frameworks like React.Js in building my Portfolio and also using Vercel in debuging(hosting) it and Using Only html and Tailwind css in building my Acme Rocket website fully mobile responsive.
          And many More like Next.Js, TypeScript e.tc"
          links2="https://rocket-tailwind.vercel.app/"
        />
        {/* https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html */}
        {/* https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Birthday/ */}
        {/* https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html */}
        {/* https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Youtube/YouTube.html */}
        <ServiceBox
          icon={<i className="bx bx-barcode-reader"></i>}
          header3="Backend Developer"
          paragraph={`Am a backend developer  who have used Node.js and express.js in creating Apis that works well by using CRUD Api which helps you to create a post, Able to read and get it, update and Delete each post. And been able to get a post by it ID.

            And also used html,css and javaScript to build the Amazon Economecs which was fully mobile responsive and also interactive you can check it out on :
            `}
          links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html"
          paragraph2="I Am very detailed and use straightforward codes to ensure clean and easy maintenance, to mention but a few is the expertise in ensuring my projects often meets quality standards by using javaScript Frameworks like React.Js in building my Portfolio and also using Vercel in debuging(hosting) it and Using Only html and Tailwind css in building my Acme Rocket website fully mobile responsive.
          And many More like Next.Js, TypeScript e.tc"
          links2="https://rocket-tailwind.vercel.app/"
        />

        <ServiceBox
          // icon={<i className="bx bx-code-block"></i>}
          icon={<i className="bx bx-laptop"></i>}
          header3="Fullstack Developer"
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
