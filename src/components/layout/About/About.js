import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography className="Typography" component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar className="Avatar"
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.licdn.com/dms/image/D4D03AQG6P5WGGORCzQ/profile-displayphoto-shrink_400_400/0/1692792519753?e=1698278400&v=beta&t=0RslP0jK35UuD5CPanO7mKxszRjGBKBAF28q7w0AWPs"
              alt=""
            />
            <Typography className="Typography">Pushkar Dev Singla</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This wesbite is made by @pushkardev.

            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography className="Typography" >My Social Media Links</Typography>
            <div>
            <a
              href="https://www.youtube.com/@pushkar9652"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>
            </div>

            <div>
            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/pushkar-dev-singla-234178186/" target="blank">
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
