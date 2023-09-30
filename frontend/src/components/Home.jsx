import React from "react";
import "../all_css/homecss.css";
import myImage1 from "../assets/psychotherapy.png";
import myImage2 from "../assets/fourimages1.png";
import myImage3 from "../assets/fourimages2.png";
import myImage4 from "../assets/fourimages3.png";
import myImage5 from "../assets/fourimages4.png";
import Footer from "./Footer";

function Home() {
  return (
    <div className="mainHome">
      {/* one div start---------------- */}
      <div className="container1">
        <div>
          <img className="reading1" src={myImage1} alt="My Image" />
        </div>
        <div className="text1">
          <h1 className="heading1">Psychotherapy at Home</h1>
          <p className="description1">
            With HelpWe, you work on your goals with a licensed
            <br />
            clinical psychologist in weekly sessions.
          </p>
          <button className="button1">Book initial consultation</button>
        </div>
      </div>
      {/* one div ennnnnnnn-------- */}
      <div className="container2">
        <div>
          <h1 className="heading1">
            Cognitive Behavioral <br />
            Therapy for Adults
          </h1>
          <p className="description1">
            We help you manage common mental illnesses such as <br />
            depression, anxiety disorders, obsessive-compulsive <br />
            disorder, and eating disorders.
          </p>
        </div>
        <div>
          <img className="image2" src={myImage2} alt="My Image" />
          <img className="image2" src={myImage3} alt="My Image" />
          <img className="image2" src={myImage4} alt="My Image" />
          <img className="image2" src={myImage5} alt="My Image" />
        </div>
      </div>

      <Footer />
      {/* footer */}
    </div>
  );
}

export default Home;
