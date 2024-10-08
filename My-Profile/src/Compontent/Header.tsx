import { useState } from "react";
import DarkMode from "./DarkMode";
import { Link } from "react-scroll";

const Header = ({ menus }: any) => {
  const [header, setHeader] = useState(false);
  const [removeheader, setremoveheader] = useState(true);
  const [selectIndex, setselectIndex] = useState(0);

  const open = () => {
    setremoveheader(false);
    setHeader(true);
  };
  const close = () => {
    setremoveheader(true);
    setHeader(false);
  };
  return (
    <header>
      <nav>
        <h2 className="h2">
          <span className="t">My</span> profile
        </h2>
        <div className="ul-div">
          <span
            onClick={open}
            className={
              removeheader ? "close-icon bx bx-menu" : "Services-btnblock"
            }
          ></span>
          <ul className={header ? "ul-header" : "nav .close-icon ~.ul-header"}>
            {menus.map((menu: any, Index: any) => (
              <li key={menu} className="li-header">
                <Link
                  onClick={() => {
                    setHeader(false);
                    setremoveheader(true);
                    setselectIndex(Index);
                  }}
                  to={menu.title}
                  key={menu.id}
                  offset={-50}
                  duration={1200}
                  smooth={true}
                  // className="a-header"
                  className={selectIndex === Index ? "active" : "a-header"}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <div className="dark-small">
              <DarkMode />
            </div>
          </ul>
          <span
            onClick={close}
            className={header ? "close-icon bx bx-menu" : "span-div"}
          ></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
