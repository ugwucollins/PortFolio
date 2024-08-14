import { useEffect, useState } from "react";
import ReactSwitch from "react-switch";

// const loacl = (localStorage.getItem("Mode"));
// const modeall = JSON.parse(loacl);

const DarkMode = () => {
  const [dark, setdark] = useState(true);

  const toggleChangeSave = () => {
    setdark(!dark);
    if (dark === true) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("Mode", "dark-mode");
    }
    if (dark === false) {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");

      localStorage.setItem("Mode", "light-mode");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("Mode") === "light-mode") {
      document.body.classList.add("light-mode");
    } else if (localStorage.getItem("Mode") === "dark-mode") {
      document.body.classList.add("dark-mode");
      setdark(!dark);
    }
  }, []);

  return (
    <div className="dark">
      <ReactSwitch
        checked={dark === false}
        className="switch"
        onChange={toggleChangeSave}
      />

      <h4>{dark ? "Light" : "Dark"} Mode</h4>
    </div>
  );
};

export default DarkMode;
