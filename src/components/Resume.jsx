import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { Typography, useMediaQuery } from "@mui/material";
import nkuaLogo from "../assets/nkua-logo.png";
import othisiLogo from "../assets/othisi-school.png";
import sapienzaLogo from "../assets/sapienza-university-of-rome-logo.png";
import odysseyLogo from "../assets/odyssey-logo.png";
import hellenicArmyLogo from "../assets/hellenic-army-logo.png";

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
          date="Jun 2026 - Present"
          iconStyle={{
            background: "#d8c3a5",
            color: "#6e6658",
            boxShadow: "0 0 0 3px #6e6658",
          }}
          icon={<PendingActionsIcon />}
        >
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            component="h3"
            sx={{ fontWeight: "bold", fontFamily: "Merriweather, serif" }}
          >
            Military Service
          </Typography>
          <img
            src={hellenicArmyLogo}
            alt="Greek Army"
            style={{
              marginTop: "1rem",
              float: "left",
              height: isSmallScreen ? "85px" : "115px",
              marginBottom: "0.3rem",
            }}
          />
          <Typography
            variant="subtitle1"
            component="h4"
            color="textSecondary"
            style={{ clear: "both", marginTop: "0.5rem" }}
          >
            Greek Army
          </Typography>
          <Typography variant="body1">
            Compulsory service required of all Greek male citizens.
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
            Departments of Computer Science and Engineering
          </Typography>
          <Typography variant="body1">
            Attended courses in Deep Learning and Cybersecurity as part of the
            Erasmus mobility program. The focus of my Erasmus semester was
            Machine Learning Security, which I began through a 2nd-year Master's
            course in the subject. In the course, I completed a project on
            phishing emails and gave a 25-minute in-class presentation on
            federated learning inference attacks, finishing with the top grade
            cum laude.
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
            Co-founder of a youth-led nonprofit organization based in Ancient
            Olympia. Odyssey of Wisdom empowers Greek youth from underserved
            regions by facilitating access to Erasmus+ opportunities across
            Europe through volunteering initiatives.
          </Typography>
        </VerticalTimelineElement>

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
            Programming Techniques. — Taught programming and data structures in
            C to undergraduate students during lab sessions.
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
          date="2022 -2026"
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
            Grade: 9.15/10 (highest honors). <br />4 year program - 240
            ECTS.
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
            Apolytirion GPA: 19.9/20 (“Excellent”) | Panhellenic Exams Grade:
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
