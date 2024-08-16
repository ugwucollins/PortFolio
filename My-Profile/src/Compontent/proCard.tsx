import React from "react";

const ProCard = ({ heading, img, about, h, links, links2 }: any) => {
  return (
    <div className="all">
      <div className="css-all">
        <div className="hover"></div>
        <div className="css-image">
          <img src={img} className="images" />
        </div>

        <div className="css-word">
          <h3>{heading}</h3>

          <p className="about-p">
            <b>{h}</b> {about}
            <a href={links} className="link">
              {links2}
            </a>
          </p>
        </div>
      </div>

      {/* <div className="css-all">
        <div className="css-image">
          <img src="code.png" className="images" />
        </div>

        <div className="css-word">
          <h3>CSS Styles</h3>

          <p className="about-p">
            <b>AM</b> a Front-End Developer that will help companies create and
            maintain a better code base for reusability.
          </p>
        </div>
      </div>

      <div className="css-all">
        <div className="css-image">
          <img src="code4.png" className="images" />
        </div>

        <div className="css-word">
          <h3>CSS Styles</h3>
          <div className="css-p">
            <p className="about-p">
              <b>AM</b> a Front-End Developer that will help companies create
              and maintain a better code base for reusability.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProCard;
