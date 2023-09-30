import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../all_css/footercss.css";
import myImage1 from "../assets/footer_image.png";

const Footer = () => {
  return (
    <div className="parent">
      <img className="footerImage" src={myImage1} alt="My Image" />
      <div className="child1">
        <div className="leftside">
          <h1> HelpWe</h1>
          <p>Self-care for your mental health</p>
          <p>
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </p>
        </div>

        <div className="midside1">
          <ul className="footerul">
            <li>
              <a
                className="headingli1"
                href="https://minddoc.com/de/en/partners"
              >
                For Organizations
              </a>
            </li>
            <li>
              <a
                className="headingli2"
                href="https://minddoc.com/de/en/partners/business"
              >
                For Businesses
              </a>
            </li>
            <li>
              <a
                className="headingli2"
                href="https://minddoc.com/de/en/partners/university"
              >
                For Universities
              </a>
            </li>
            <li>
              <a
                className="headingli2"
                href="https://minddoc.com/de/en/partners/insurances"
              >
                For Insurance Companies
              </a>
            </li>
          </ul>
        </div>

        <div className="midside2">
          <ul className="footerul">
            <li>
              <a className="headingli1" href="https://minddoc.com/de/en/">
                HelpWe
              </a>
            </li>
            <li>
              <a
                className="headingli2"
                href="https://minddoc.com/de/en/wissenschaft"
              >
                Science
              </a>
            </li>
            <li>
              <a className="headingli2" href="https://minddoc.com/de/en/press">
                Press
              </a>
            </li>
            <li>
              <a
                className="headingli2"
                href="https://minddoc.com/de/en/cost-overview"
              >
                Costs
              </a>
            </li>
            <li>
              <a
                className="headingli2"
                href="https://minddoc.com/magazin/karriere"
              >
                Career at MindDoc
              </a>
            </li>
          </ul>
        </div>

        <div className="rightside">
          <ul className="footerul">
            <li>
              <a className="headingli1" href="/">
                Information
              </a>
            </li>
            <li>
              <a
                className="headingli2"
                href="https://minddoc.com/magazin/en/magazine/"
              >
                Magazine
              </a>
            </li>
            <li>
              <a className="headingli2" href="https://minddoc.com/de/en/faq">
                FAQs
              </a>
            </li>
            <li>
              <a
                className="headingli2"
                href="https://minddoc.com/de/en/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
