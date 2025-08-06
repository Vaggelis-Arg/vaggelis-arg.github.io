import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Typography, useMediaQuery } from "@mui/material";
import nkuaLogo from "../assets/nkua-logo.png";
import othisiLogo from "../assets/othisi-school.png";
import sapienzaLogo from "../assets/sapienza-university-of-rome-logo.png";
import odysseyLogo from "../assets/odyssey-logo.png";

const Resume = () => {
  const isSmallScreen = useMediaQuery("(max-width:550px)");

  return (
    <section
      id="resume"
      style={{
        backgroundColor: "#eae7dc",
        minHeight: "100vh",
        padding: isSmallScreen ? "50px 0" : "50px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          marginBottom: "40px",
          marginTop: "70px",
          fontFamily: "Poppins, sans-serif",
          color: "#6e6658",
          fontSize: "2rem",
          letterSpacing: "0.1em",
        }}
      >
        Resume
      </Typography>

      <VerticalTimeline lineColor="#6e6658">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
          date="2023-2024"
          iconStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            boxShadow: "0 0 0 3px #6e6658",
          }}
          icon={<WorkIcon />}
        >
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            component="h3"
            sx={{ fontWeight: "bold", fontFamily: "Merriweather, serif" }}
          >
            Teaching Assistant
          </Typography>
          <img
            src={nkuaLogo}
            alt="Teaching Assistant"
            style={{
              marginTop: "1rem",
              float: "left",
              height: isSmallScreen ? "68.5px" : "90px",
              marginBottom: "0.3rem",
            }}
          />
          <Typography
            variant="subtitle1"
            component="h4"
            color="textSecondary"
            style={{ clear: "both", marginTop: "0.5rem" }}
          >
            Department of Informatics, University Of Athens
          </Typography>
          <Typography variant="body1">
            Courses: Introduction to Programming, Data Structures and
            Programming Techniques — Assisted students in lab sessions, helping
            them learn C programming and develop data structures.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
          date="Fall Semester 2025-26"
          iconStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            boxShadow: "0 0 0 3px #6e6658",
          }}
          icon={<SchoolIcon />}
        >
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            component="h3"
            sx={{ fontWeight: "bold", fontFamily: "Merriweather, serif" }}
          >
            Erasmus Exchange Program
          </Typography>
          <img
            src={sapienzaLogo}
            alt="Sapienza University of Rome"
            style={{
              marginTop: "1rem",
              float: "left",
              height: isSmallScreen ? "68.5px" : "115px",
              marginBottom: "0.3rem",
            }}
          />
          <Typography
            variant="subtitle1"
            component="h4"
            color="textSecondary"
            style={{ clear: "both", marginTop: "0.5rem" }}
          >
            Departments of Computer Science, Information Engineering and
            Electronics, and Computer, Automation and Management Engineering
          </Typography>
          <Typography variant="body1">
            Attending postgraduate-level courses in Advanced Machine Learning
            and Cybersecurity during the Fall 2025-26 semester as part of an
            Erasmus mobility program.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
          date="2022 - Present"
          iconStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            boxShadow: "0 0 0 3px #6e6658",
          }}
          icon={<SchoolIcon />}
        >
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            component="h3"
            sx={{ fontWeight: "bold", fontFamily: "Merriweather, serif" }}
          >
            B.Sc. Computer Science
          </Typography>
          <img
            src={nkuaLogo}
            alt="Computer Science Student"
            style={{
              marginTop: "1rem",
              float: "left",
              height: isSmallScreen ? "68.5px" : "90px",
              marginBottom: "0.3rem",
            }}
          />
          <Typography
            variant="subtitle1"
            component="h4"
            color="textSecondary"
            style={{ clear: "both", marginTop: "0.5rem" }}
          >
            Department of Informatics, University Of Athens
          </Typography>
          <Typography variant="body1">
            4 year program - 240 ECTS <br />
            Current Grade: 9.22/10.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--volunteering"
          contentStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
          date="2025 - Present"
          iconStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            boxShadow: "0 0 0 3px #6e6658",
          }}
          icon={<VolunteerActivismIcon />}
        >
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            component="h3"
            sx={{ fontWeight: "bold", fontFamily: "Merriweather, serif" }}
          >
            Odyssey of Wisdom
          </Typography>
          <img
            src={odysseyLogo}
            alt="Odyssey of Wisdom"
            style={{
              marginTop: "1rem",
              float: "left",
              height: isSmallScreen ? "110px" : "150px",
              marginBottom: "0.3rem",
            }}
          />
          <Typography
            variant="subtitle1"
            component="h4"
            color="textSecondary"
            style={{ clear: "both", marginTop: "0.5rem" }}
          >
            <a
              href="https://odysseyofwisdom.eu"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6e6658", textDecoration: "underline" }}
            >
              odysseyofwisdom.eu
            </a>
          </Typography>
          <Typography variant="body1">
            Co-founder of a youth-led nonprofit based in Ancient Olympia.
            Odyssey of Wisdom empowers Greek youth from underserved regions by
            facilitating access to Erasmus+ opportunities across Europe through
            volunteering initiatives.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
          date="2019 - 2022"
          iconStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            boxShadow: "0 0 0 3px #6e6658",
          }}
          icon={<SchoolIcon />}
        >
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            component="h3"
            sx={{ fontWeight: "bold", fontFamily: "Merriweather, serif" }}
          >
            High School
          </Typography>
          <img
            src={othisiLogo}
            alt="High School Student"
            style={{
              marginTop: "1rem",
              float: "left",
              height: isSmallScreen ? "100px" : "130px",
              marginBottom: "0.3rem",
            }}
          />
          <Typography
            variant="subtitle1"
            component="h4"
            color="textSecondary"
            style={{ clear: "both", marginTop: "0.5rem" }}
          >
            Othisi School
          </Typography>
          <Typography variant="body1">
            Grade: Apolytirion GPA: 19.9/20 (“Excellent”) | Panhellenic Exams:
            18.670/20.000. <br />
            Activities and societies: Succeeded in mathematical competition by
            Greek Mathematical Society 2 times.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
          date="2019"
          iconStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            boxShadow: "0 0 0 3px #6e6658",
          }}
          icon={<SchoolIcon />}
        >
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            component="h3"
            sx={{ fontWeight: "bold", fontFamily: "Merriweather, serif" }}
          >
            English C2
          </Typography>
          <Typography
            variant="subtitle1"
            component="h4"
            color="textSecondary"
            style={{ clear: "both" }}
          >
            Certificate of Proficiency in English <br />
            from University of Michigan.
          </Typography>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Resume;
