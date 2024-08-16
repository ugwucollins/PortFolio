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

            And also used html,css and javaScript to build the Amazon Ecommerce which was fully mobile responsive and also interactive you can check it out on :
            `}
          links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html"
          paragraph2="I Am very detailed and use straightforward codes to ensure clean and easy maintenance, to mention but a few is the expertise in ensuring my projects often meets quality standards by using javaScript Frameworks like React.Js in building my Portfolio and also using Vercel in debuging(hosting) it and Using Only html and Tailwind css in building my Acme Rocket website fully mobile responsive.
          And many More like Next.Js, TypeScript e.tc"
          links2="https://rocket-tailwind.vercel.app/"
          links3="TypeScript Link: https://next02-ten.vercel.app/"
        />
        {/* https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html */}
        {/* https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Birthday/ */}
        {/* https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html */}
        {/* https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Youtube/YouTube.html */}
        <ServiceBox
          icon={<i className="bx bx-barcode-reader"></i>}
          header3="Backend Developer"
          paragraph={`Am a backend developer  who have used Node.js and express.js in creating Apis that works well by using CRUD Api which helps you to create a post, Able to read and get it, update and Delete each post. And been able to get a post by it ID.

            And also used express,mongoose and mongodb to build Sign Up and Login Form being fully Vailated
            `}
          // links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html"
          paragraph2="I Am very detailed and use straightforward codes to ensure clean and easy maintenance, to mention but a few is the expertise in ensuring my projects often meets quality standards by using mongoose, mongodb  in building my Apis and also using firebase and mysql in building my database for easy mangement"
          // links2="https://rocket-tailwind.vercel.app/"
        />

        <ServiceBox
          icon={<i className="bx bx-laptop"></i>}
          header3="Fullstack Developer"
          paragraph={`Am a Fullstack developer  who have used Node.js,  express.js, and mongoose for the connection to mongodb  in creating My Blog_Post that is in form of a Compelcet Todo List App that help you to create a post, Update it or Edit it and also bein able to delete it by the Users ID with the use of JavaScript Framework => Ract.Js.
            `}
          //

          // And also used express,mongoose and mongodb to build Sign Up and Login Form being fully Vailated
          paragraph2={`And aslo used Node.js, express.Js , mongoose for the mongodb connection and React.Js that is coming from javaScript framework to build a sign Up and Sign Out Form.
            Moreover am 
            Passionate about learning and developing with a desire to apply for
          skills on a larger development team. Eager to tackle more complex
          problems and continue to find ways to maximize user efficiency.
            `}
        />
      </div>
    </div>
  );
};

export default Services;
