import React, { useState } from "react";

const ServiceBox = ({
  header3,
  icon,
  paragraph,
  paragraph2,
  links,
  links2,
  links3,
}: any) => {
  const [readmorebtn, setReadMorebtn] = useState(true);
  const [readmore, setReadMore] = useState(false);

  const close = () => {
    setReadMorebtn(true);
    setReadMore(false);
  };
  const open = () => {
    setReadMorebtn(false);
    setReadMore(true);
  };

  return (
    <div>
      <div className="box">
        <div className="box-icon">{icon}</div>
        <h3 className="Services-box-h3">{header3}</h3>
        <div className="Services-box-div word">
          {paragraph}

          <span className={readmore ? "span-active" : "span-div"}>
            {/* <button className="Services-btn close" onClick={close}>
              <p>Read More</p>
            </button> */}
            <a
              style={{ fontSize: "14px", fontWeight: "bold" }}
              href=" https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html"
            >
              {links}
            </a>
            {paragraph2}
            <a
              style={{ fontSize: "14px", fontWeight: "bold" }}
              href=" https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html"
            >
              {links2}
            </a>
            <a
              style={{ fontSize: "14px", fontWeight: "bold", marginTop: "4px" }}
              href=" https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html"
            >
              {links3}
            </a>
          </span>
        </div>

        <div>
          <button
            onClick={open}
            className={readmorebtn ? "Services-btn" : "Services-btnblock"}
          >
            <p>Read More</p>
          </button>
          <button
            className={readmore ? "Services-btn" : "span-div"}
            onClick={close}
          >
            <p>Read More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
