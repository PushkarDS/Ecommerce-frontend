import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import LocationIcon from "@mui/icons-material/LocationCity";

import "./Footer.css"

const Footer = () => {
  return (<>

    <footer>
    <div className="space"></div>

      <div className="footer-container">
        
        <div className="foot-card">
          <div className="foot-card-head">Useful Links</div>
          <div className="foot-link">
            <a className="footer-link" href=".">
              Terms and Conditions
            </a>
          </div>
          <div className="foot-link">
            <a className="footer-link" href=".">
              About Company
            </a>
          </div>
          <div className="foot-link">
            <a className="footer-link" href=".">
              Payment Gateway
            </a>
          </div>
          <div className="foot-link">
            <a className="footer-link" href=".">
              Privacy Policy
            </a>
          </div>
        </div>
        
        <div className="foot-card">
          <div className="foot-card-head">Support</div>
          <div className="foot-link">
            <a className="footer-link" href=".">
              Documentation
            </a>
          </div>
          <div className="foot-link">
            <a className="footer-link" href=".">
              Support
            </a>
          </div>
          <div className="foot-link">
            <a className="footer-link" href=".">
              FAQ
            </a>
          </div>
          <div className="foot-link">
            <a className="footer-link" href=".">
              Download
            </a>
          </div>
        </div>
        <div className="foot-card-bottom">
          <div className="foot-card-head" />
          
          <div className="foot-link">
            <span className="footer-link" href="">
              <CallIcon/>
              {/* <span className="footer-icon material-symbols-sharp">call</span> */}
              +91
            </span>
          </div>
          <div className="foot-link">
            <span className="footer-link" href="">
              <MailIcon/>
              {/* <span className="footer-icon material-symbols-sharp">mail</span> */}
              trendix@company.com
            </span>
          </div>
          <div className="foot-link">
            <span className="footer-link" href="">
              <i><LocationIcon/>
                {/* <span className="footer-icon  material-symbols-sharp">location_on</span> */}
              </i>
              Punjab, India
            </span>
          </div>
        </div>
      </div>
      <div className="footer-content">
      <div className="info-icons">
            <div className="social-icons ">
              <>
                <div className="footer-icon">
                  <a href=".">
                    <i className="fa fa-facebook" />
                  </a>
                </div>
                <div className="footer-icon">
                  <a href=".">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
                <div className="footer-icon">
                  <a href=".">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
                <div className="footer-icon">
                  <a href=".">
                    <i className="fa fa-dribbble" />
                  </a>
                </div>
                <div className="footer-icon">
                  <a href=".">
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
              </>
            </div>
          </div>
      </div>
    </footer></>
  );
};

export default Footer;

// {/* <div className="foot-card">
//   <div className="foot-card-head"> Our Services</div>
//   <div className="foot-link">
//     <a className="footer-link" href=".">
//       Data Security
//     </a>
//   </div>
//   <div className="foot-link">
//     <a className="footer-link" href=".">
//       IT Management
//     </a>
//   </div>
//   <div className="foot-link">
//     <a className="footer-link" href=".">
//       Outsourcing
//     </a>
//   </div>
//   <div className="foot-link">
//     <a className="footer-link" href=".">
//       Networking
//     </a>
//   </div>
// </div> */}