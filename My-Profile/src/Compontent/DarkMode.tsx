import { useState } from "react";
import ReactSwitch from "react-switch";

const DarkMode = () => {
  const [dark, setdark] = useState("light");
  const [mode, setMode] = useState([
    localStorage.setItem("modes", JSON.stringify(dark)),
  ]);

  const toggleChange = () => {
    document.body.classList.toggle("dark-mode");
    //  const lock = localStorage.getItem("modes")
    if (document.body.classList.contains("dark-mode")) {
      setdark("dark");
    } else {
      setdark("light");
    }
  };

  return (
    <div className="dark">
      <ReactSwitch checked={dark == "light"} onChange={toggleChange} />
      <h4>{dark} Mode</h4>
    </div>
  );
};

export default DarkMode;
