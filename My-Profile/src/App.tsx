import "./App.css";
import Header from "./Compontent/Header";
import Home from "./Compontent/Home";
import About from "./Compontent/About";
import Services from "./Compontent/Services";
import Skills from "./Compontent/Skills";
import Profile from "./Compontent/Profile";
import Contact from "./Compontent/Contact";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import HireMe from "./Compontent/HireMe";

function App() {
  const menus = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Services",
    },
    {
      id: 4,
      title: "Skills",
    },
    {
      id: 5,
      title: "Profile",
    },
    {
      id: 6,
      title: "Contact",
    },
  ];
 
  const form = useRef();
  
  const sendEmail = (form:any,e:any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gjs48dc",
        "template_0130fgk",
        form.current,
        "onBgeaCnBkO6NiHur"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const [hireMe, setHireMe] = useState(false);

  const Open = () => {
    setHireMe(true);
  };
  const Close = () => {
    setHireMe(false);
  };

  return (
    <div className="Profile">
      <div className="progress-bar"></div>
      <header className="header">
        <Header menus={menus} />
      </header>
      <main className="contain">
        <Home Open={Open} />
        {hireMe && <HireMe Close={Close} sendEmail={sendEmail} form={form} />}
        <About />
        <Services />
        <Skills />
        <Profile />
        <Contact sendEmail={sendEmail} form={form} />
      </main>

      <button className="back-to-top-button">
        <a href="#">Back-To-Top</a>
      </button>
    </div>
  );
}

export default App;
