import { useState } from "react";
import ReactSwitch from "react-switch";

// const loacl = (localStorage.getItem("Mode"));
// const modeall = JSON.parse(loacl);


const DarkMode = () => {
  const [dark, setdark] = useState('light');
  const [dark1, setdark1] = useState(dark);

  
  const save = (open:any) => {
    setdark(open);
    localStorage.setItem('Mode',JSON.stringify(open));
  }

  const toggleChange = () => {
    document.body.classList.toggle("dark-mode");
    dark1
    if (document.body.classList.contains("dark-mode")) {
      save('dark');
      // setdark1(modeall);
    } else {
      save('light');
      // setdark1(modeall);
    }
  };
  



  return (
    <div className="dark">
      <ReactSwitch checked={dark === "dark"} onChange={toggleChange} />
      <h4>{dark} Mode</h4>
    </div>
  );
};

export default DarkMode;
