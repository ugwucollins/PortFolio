import { ReactElement, useState } from "react";
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
  //

  return (
    <div className="Profiles" id="Projects">
      <div className="Profiles-work">
        <div className="Profiles-head">
          <h1 className="head-h1">My Services/ Projects</h1>
          <p>What Can I Do For You</p>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Profile;

export type PROJECT = {
  id: string | number;
  title: string;
  categroy: string;
  imageUrl: string;
  description: string;
  path: string;
  icons: string[];
};

export const ProjectsArray: PROJECT[] = [
  {
    id: 16,
    title: "Nelly-J Catering Services Website",
    categroy: "javascript react",
    imageUrl: "nellyj.png",
    description:
      "I designed and developed a fully responsive and visually appealing website for Nelly-J Catering Services using Node.js, express,mongodb and React (MERN). The goal of the project was to create a modern and user-friendly platform that showcases the catering brand’s offerings in a clear, elegant, and structured way. The website features a smooth navigation system, organized service sections, and optimized images that ensure fast load times across all devices. I implemented a clean UI layout, accessible components, and mobile-first styling to improve user experience and make the website easy to browse on smartphones, tablets, and desktops. The overall design highlights the brand’s identity with consistent color choices, well-structured content, and intuitive call-to-action elements, giving visitors a seamless and engaging browsing experience.",
    path: "https://nelly-j.vercel.app",
    icons: ["react.png", "css.png", "tailwind.png", "javascript.png"],
  },

  {
    id: 1,
    title: "First Landing Page",
    categroy: "html",
    imageUrl: "landing.png",
    description:
      " Am a FrontEnd Developer that will help companies create and maintain a better code base for reusability.  I used html and Css in the design for the website to ensure a beautiful page for Our Client.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html",
    icons: ["html.png", "css.png"],
  },
  {
    id: 2,
    title: "Birthday Website",
    categroy: "html javascript",
    imageUrl: "birthday.png",
    description:
      "I Used javaScript in creating an interactive Birthday website for a Friend.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Birthday/",
    icons: ["html.png", "css.png", "javascript.png"],
  },
  {
    id: 3,
    title: "Amazon Ecommerce",
    categroy: "css javascript",
    imageUrl: "amazon.png",
    description:
      "I used javaScript in creating a user interFace and interactive website by creating the Amazon Ecommerce that was fully responsive and interactive.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html",
    icons: ["html.png", "css.png", "javascript.png"],
  },
  {
    id: 4,
    title: "Youtube Clone",
    categroy: "css",
    imageUrl: "youtube.png",
    description:
      "I used javaScript in creating a user interFace and interactive website by creating the Youtube Clone that was fully responsive and interactive.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Youtube/YouTube.html",
    icons: ["html.png", "css.png", "javascript.png"],
  },
  // react
  {
    id: 5,
    title: "Acme Rocket",
    categroy: "css react",
    imageUrl: "rocket.png",
    description:
      "I used react in creating the website by creating the Acme Rocket that was fully responsive by the help of tailwind it was my first project with Tailwind.",
    path: "https://rocket-tailwind.vercel.app/",
    icons: ["html.png", "tailwind.png", "javascript.png", "react.png"],
  },
  {
    id: 6,
    title: "Gym Excerise",
    categroy: "css react",
    imageUrl: "exercise.png",
    description:
      "I used react in creating a user interFace and interactive website by creating the Gym Excerise that was fully responsive and interactive. With the help of Scss for styling",
    path: "https://exercise-iota.vercel.app/",
    icons: ["html.png", "scss.jpeg", "javascript.png", "react.png"],
  },
  {
    id: 7,
    title: "Movie Cards",
    categroy: "react",
    imageUrl: "moviecard.png",
    description:
      "I used react in creating a user interFace and interactive website by creating the Movie Cards that was fully responsive and interactive.",
    path: "https://movie-app-ten-ashen.vercel.app/",
    icons: ["html.png", "tailwind.png", "javascript.png", "react.png"],
  },
  {
    id: 8,
    title: "React Form Handling",
    categroy: "css react",
    imageUrl: "form.png",
    description:
      "I used react in creating a user interFace and interactive website by creating the React Form Handling that was fully responsive and interactive.",
    path: "https://react-form-handling.vercel.app/",
    icons: ["html.png", "tailwind.png", "javascript.png", "react.png"],
  },
  {
    id: 9,
    title: "Wikipedia",
    categroy: "next",
    imageUrl: "code.png",
    description:
      "I used react in creating a user interFace and interactive website by creating the Wikipedia that was fully responsive and interactive.",
    path: "https://next02-ten.vercel.app/",
    icons: [
      "html.png",
      "tailwind.png",
      "javascript.png",
      "react.png",
      "nextic.png",
    ],
  },
  {
    id: 10,
    title: "Users",
    categroy: "next",
    imageUrl: "next.png",
    description:
      "I used react in creating a user interFace and interactive website by creating the Users that was fully responsive and interactive.",
    path: "https://next01-ivory.vercel.app/",
    icons: [
      "html.png",
      "tailwind.png",
      "javascript.png",
      "react.png",
      "nextic.png",
    ],
  },

  {
    id: 11,
    title: "Movie Cards",
    categroy: "rcss eact",
    imageUrl: "moviecard.png",
    description:
      "I used react in creating a user interFace and interactive website by creating the Movie Cards that was fully responsive and interactive.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Movie-Cards/",
    icons: ["html.png", "tailwind.png", "javascript.png", "react.png"],
  },

  {
    id: 12,
    title: "Cloned Ai",
    categroy: "next",
    imageUrl: "cloned_ai.png",
    description:
      "I used Next.Js in creating a user interFace and interactive website by creating the Cloned Ai that was fully responsive and interactive. and a well auth system using Next Auth. and also used Tailwind css in creating a responsive website. with the use of TypeScript. and mongodb for the database.",
    path: "https://cloned-ai-five.vercel.app/",
    icons: [
      "html.png",
      "css.png",
      "tailwind.png",
      "javascript.png",
      "react.png",
      "nextic.png",
    ],
  },
  {
    id: 13,
    title: "Blog Post",
    categroy: "react next",
    imageUrl: "blog.png",

    description:
      "A blog post written in MDX (Markdown + JSX) format. It compares and describes JavaScript and TypeScript in a clear and developer-focused way, making it suitable for a tech blog With the help of Next.js, Tailwind CSS, and MDX, you can create a fully-featured blog with a sleek design and a modern user experience. The blog post is a good example of how to use these technologies together to create a professional-looking website.",

    path: "https://blog-post-omega-five.vercel.app/",
    icons: [
      "html.png",
      "css.png",
      "tailwind.png",
      "javascript.png",
      "react.png",
      "next.png",
    ],
  },
  {
    id: 14,
    title: "Animal Image Slider",
    categroy: "css react",
    imageUrl: "image slider.png",
    description:
      "I created a react app that is a animal image slider that was fully responsive and interactive.",
    path: "https://react-slider-rosy.vercel.app/",
    icons: [
      "html.png",
      "css.png",
      "tailwind.png",
      "javascript.png",
      "react.png",
    ],
  },
  // react blog post with mern stack
  {
    id: 15,
    title: "Blog Post",
    categroy: "javascript react",
    imageUrl: "blogzone.png",
    description:
      "My blog post is a react app that allows user to see the latest blog posts and news and also allows the user to create a new blog post. as a blogger i have used react, node.js,express tailwind css, and mongodb for the database. it is  a fullstack app with user authentication and authorization. and also used typescript for the project. with admin dashboard, bloggers post, news, and user authentication and page.",
    path: "https://blog-zone-beta.vercel.app/",
    icons: [
      "html.png",
      "css.png",
      "tailwind.png",
      "javascript.png",
      "react.png",
    ],
  },
];

export const categroy = [
  {
    id: 0,
    title: "All Project",
    path: "",
  },
  {
    id: 1,
    title: "HTML Project",
    path: "html",
  },
  {
    id: 2,
    title: "Styles(CSS) Project",
    path: "css",
  },
  {
    id: 3,
    title: "JavaScript Project",
    path: "javascript",
  },
  {
    id: 4,
    title: "React Project",
    path: "react",
  },
  {
    id: 5,
    title: "Next.Js Project",
    path: "next",
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState("");
  const [indexs, setindex] = useState(0);
  return (
    <div className="projects">
      <div className="projects-btnc">
        {categroy.map((item, index: number) => (
          <div
            key={index}
            className="all-btn"
            onClick={() => {
              setindex(index);
              setFilter(item.path);
            }}
          >
            <button
              className={`${index === indexs ? "Onactive-p" : "profile-btn"}`}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      <div className="project-contain">
        {ProjectsArray.filter((project) =>
          filter !== ""
            ? (project.categroy.split(" ")[0] === filter && project.categroy) ||
              (project.categroy.split(" ")[1] === filter && project.categroy)
            : project
        ).map((project, index: number) => {
          const even = index % 2 === 0;
          return (
            <div key={index} className={`project-contain-box`}>
              <div className={`project-contain-main`}>
                <div className={`project-contain-img`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`project-img`}
                  />
                </div>

                <div className={`project-contain-words`}>
                  <h1>{project.title}</h1>
                  <p>{project.description.slice(0, 200)}</p>
                </div>

                <div className={`project-contain-buttons`}>
                  <div className={`project-contain-icons`}>
                    {project.icons.map((icon, index) => (
                      <div key={index}>
                        <img src={icon} alt={icon} className={`icons`} />
                      </div>
                    ))}
                  </div>
                  <a href={project.path}>
                    <button className="project-btn">
                      <p>Vist Page</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// //  <div className="Profiles-btn">
//           <div className="all-btn">
//             <button
//               className={active ? "Onactive-p" : "profile-btn"}
//               onClick={onhtml}
//             >
//               All Project
//             </button>
//             <button
//               className={active2 ? "Onactive-p" : "profile-btn2"}
//               onClick={oncss}
//             >
//               Styles(Css) Project
//             </button>
//             <button
//               className={active3 ? "Onactive-p" : "profile-btn3"}
//               onClick={onjava}
//             >
//               Javascript Project
//             </button>

//             <button
//               className={active4 ? "Onactive-p" : "profile-btn4"}
//               onClick={onreact}
//             >
//               React Project
//             </button>
//             <button
//               className={active5 ? "Onactive-p" : "profile-btn4 next"}
//               onClick={onnext}
//             >
//               Next.Js Project
//             </button>
//           </div>
//         </div>

//         <div className="Profiles-display">
//           {html && (
//             <div className="html">

//               <ProCard
//                 heading="CSS Styles"
//                 img="code.png"
//                 about=" frontend dev I used html and Css in the design for the website to ensure a beautiful page for Our Client.
//                     "
//                 h="As a"
//                 links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html"
//                 links2="Landening page"
//               />
//               <ProCard
//                 heading="Sass/Scss Styles"
//                 img="code.png"
//                 about="used sass in building of a Gym excerise
//                 website which was fully mobile responsive and awsome
//                     "
//                 h="I also"
//                 links="https://exercise-iota.vercel.app/"
//                 links2="Gym Excerise"
//               />
//               <ProCard
//                 heading="Tailwind CSS Styles"
//                 img="code6.jpg"
//                 about="Tailwind css in creating a beautifull Acme Rocket which was fully mobile responsive with light and dark mode that is been added in the project.
//                     "
//                 h="I used"
//                 links="https://rocket-tailwind.vercel.app/"
//                 links2="Acme Rocket"
//               />

//               {/* JavaScript */}
//               <ProCard
//                 heading="JavaScript Projects"
//                 img="code 2.png"
//                 about=" javaScript in creating a user interFace and interactive website by creating the Amazon Ecommerce that was fully responsive and interactive.
//                     "
//                 h="I used"
//                 links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html"
//                 links2="Amazon Ecommerce"
//               />

//               <ProCard
//                 heading="JavaScript Projects"
//                 img="code 2.png"
//                 about=" javaScript in creating an interactive Birthday website for a Friend.
//                     "
//                 h="I used"
//                 links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Birthday/"
//                 links2="Birthday Project"
//               />

//               {/* React JS */}
//               <ProCard
//                 heading="React JS"
//                 img="code 3.png"
//                 about=" is a good javaScript frameWork that i used in creating or building an awesome, fully mobile and interactive movie Cards.
//                     "
//                 h="React"
//                 links="https://movie-app-ten-ashen.vercel.app/"
//                 links2="Moive Cards"
//               />
//               <ProCard
//                 heading="React JS"
//                 // img="code 3.png"
//                 img="code5.png"
//                 about="React and TypeScrpit in creating a validated react form handling which was also very good form and fully mobile responsive.
//                     "
//                 h="I used"
//                 links="https://react-form-handling.vercel.app/"
//                 links2="React Form Handling"
//               />

//               {/* Next JS */}
//               <ProCard
//                 heading="Next JS"
//                 img="code4.png"
//                 about="is an awesome react framework that helps in creating a Wikipedia project with the help of typeScriptand tailwind css in creating a responsive website.
//                     "
//                 links="https://next02-ten.vercel.app/"
//                 h="Next Js"
//                 links2="Wikipedia Project"
//               />
//               <ProCard
//                 heading="Next JS"
//                 img="code4.png"
//                 about="Next Js in creating a user page with the users  personal information from an Api.
//                     "
//                 links="https://next01-ivory.vercel.app/"
//                 h="I used"
//                 links2="Users Project"
//               />
//             </div>
//           )}

//           {css && (
//             <div className="css">
//               {/* Css */}
//               <ProCard
//                 heading="CSS Styles"
//                 img="code.png"
//                 about=" frontend dev I used html and Css in the design for the website to ensure a beautiful page for Our Client.
//                     "
//                 h="As a"
//                 links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html"
//                 links2="Landening page"
//               />
//               <ProCard
//                 heading="Sass/Scss Styles"
//                 img="code.png"
//                 about="used sass in building of a Gym excerise
//                 website which was fully mobile responsive and awsome
//                     "
//                 h="I also"
//                 links="https://exercise-iota.vercel.app/"
//                 links2="Gym Excerise"
//               />
//               <ProCard
//                 heading="Tailwind CSS Styles"
//                 img="code6.jpg"
//                 about="Tailwind css in creating a beautifull Acme Rocket which was fully mobile responsive with light and dark mode that is been added in the project.
//                     "
//                 h="I used"
//                 links="https://rocket-tailwind.vercel.app/"
//                 links2="Acme Rocket"
//               />

//               {/* <div className="css-all">
//                 <div className="css-image">
//                   <img src="code.png" className="images" />
//                 </div>
//                 <div className="css-word">
//                   <h3>CSS Styles</h3>
//                   <div className="css-p">
//                     <p className="about-p">
//                       <b>AM</b> a Front-End Developer that will help companies
//                       create and maintain a better code base for reusability.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="css-all">
//                 <div className="css-image">
//                   <img src="code4.png" className="images" />
//                 </div>

//                 <div className="css-word">
//                   <h3>CSS Styles</h3>
//                   <div className="css-p">
//                     <p className="about-p">
//                       <b>AM</b> a Front-End Developer that will help companies
//                       create and maintain a better code base for reusability.
//                     </p>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           )}

//           {java && (
//             <div className="css Java">
//               {/* JavaScript */}
//               <ProCard
//                 heading="JavaScript Projects"
//                 img="code 2.png"
//                 about=" javaScript in creating a user interFace and interactive website by creating the Amazon Ecommerce that was fully responsive and interactive.
//                     "
//                 h="I used"
//                 links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html"
//                 links2="Amazon Ecommerce"
//               />

//               <ProCard
//                 heading="JavaScript Projects"
//                 img="code 2.png"
//                 about=" javaScript in creating an interactive Birthday website for a Friend.
//                     "
//                 h="I used"
//                 links="https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Birthday/"
//                 links2="Birthday Project"
//               />
//             </div>
//           )}

//           {react && (
//             <div className="css react">
//               {/* React JS */}
//               <ProCard
//                 heading="React JS"
//                 img="code 3.png"
//                 about=" is a good javaScript frameWork that i used in creating or building an awesome, fully mobile and interactive movie Cards.
//                     "
//                 h="React"
//                 links="https://movie-app-ten-ashen.vercel.app/"
//                 links2="Moive Cards"
//               />
//               <ProCard
//                 heading="React JS"
//                 // img="code 3.png"
//                 img="code5.png"
//                 about="React and TypeScrpit in creating a validated react form handling which was also very good form and fully mobile responsive.
//                     "
//                 h="I used"
//                 links="https://react-form-handling.vercel.app/"
//                 links2="React Form Handling"
//               />
//             </div>
//           )}

//           {next && (
//             <div className="css react next">
//               {/* Next JS */}
//               <ProCard
//                 heading="Next JS"
//                 img="code4.png"
//                 about="is an awesome react framework that helps in creating a Wikipedia project with the help of typeScriptand tailwind css in creating a responsive website.
//                     "
//                 links="https://next02-ten.vercel.app/"
//                 h="Next Js"
//                 links2="Wikipedia Project"
//               />
//               <ProCard
//                 heading="Next JS"
//                 img="code4.png"
//                 about="Next Js in creating a user page with the users  personal information from an Api.
//                     "
//                 links="https://next01-ivory.vercel.app/"
//                 h="I used"
//                 links2="Users Project"
//               />
//             </div>
//           )}
//         </div>
