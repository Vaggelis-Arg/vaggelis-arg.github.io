import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { Typography, useMediaQuery } from '@mui/material';
import nkuaLogo from '../assets/nkua-logo.png';
import othisiLogo from '../assets/othisi-school.png';

const Resume = () => {
    const isSmallScreen = useMediaQuery('(max-width:550px)');

    return (
        <section
        id="resume"
        style={{
            backgroundColor: '#eae7dc',
            minHeight: '100vh',
            padding: isSmallScreen ? '50px 0' : '50px',
            fontFamily: 'Poppins, sans-serif',
        }}
        >
        <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
                marginBottom: '40px',
                marginTop: '70px',
                fontFamily: 'Poppins, sans-serif',
                color: '#6e6658',
                fontSize: '2rem',
                letterSpacing: '0.1em',
            }}
        >
            Resume
        </Typography>
        
        <VerticalTimeline lineColor='#6e6658'>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
                background: "#d8c3a5",
                color: "#6e6658",
                borderRadius: '15px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            }}
            contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
            date="2023-2024"
            iconStyle={{ background: "#d8c3a5", color: "#6e6658", boxShadow: '0 0 0 3px #6e6658' }}
            icon={<WorkIcon />}
            >
                <Typography variant={isSmallScreen ? "h6" : "h5"} component="h3" sx={{ fontWeight: 'bold', fontFamily: 'Merriweather, serif' }}>
                    Teaching Assistant
                </Typography>
                <img
                    src={nkuaLogo}
                    alt="Teaching Assistant"
                    style={{
                        marginTop: '1rem',
                        float: 'left',
                        height: isSmallScreen ? '68.5px' : '90px',
                        marginBottom: '0.3rem',
                    }}
                />
                <Typography 
                    variant="subtitle1" 
                    component="h4" 
                    color="textSecondary" 
                    style={{ clear: 'both', marginTop: '0.5rem' }}
                >
                    Department of Informatics, University Of Athens
                </Typography>
                <Typography variant="body1">
                Volunteered in courses: Introduction in Programming, Data Structures & Algorithms in C
                </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
                background: "#d8c3a5",
                color: "#6e6658",
                borderRadius: '15px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            }}
            contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
            date="2022 - 2023"
            iconStyle={{ background: "#d8c3a5", color: "#6e6658", boxShadow: '0 0 0 3px #6e6658'  }}
            icon={<WorkIcon />}
            >
            <Typography variant={isSmallScreen ? "h6" : "h5"} component="h3" sx={{ fontWeight: 'bold', fontFamily: 'Merriweather, serif' }}>
                    Student Supervisor
                </Typography>
                <img
                    src={othisiLogo}
                    alt="Othisi Supervisor"
                    style={{
                        marginTop: '1rem',
                        float: 'left',
                        height: isSmallScreen ? '100px' : '130px',
                        marginBottom: '0.3rem',
                    }}
                />
                <Typography 
                    variant="subtitle1" 
                    component="h4" 
                    color="textSecondary" 
                    style={{ clear: 'both', marginTop: '0.5rem' }}
                >
                Othisi School
                </Typography>
                <Typography variant="body1">
                    Supervision of students for their Panhellenic exams
                </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
                background: "#d8c3a5",
                color: "#6e6658",
                borderRadius: '15px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            }}
            contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
            date="2022 - Present"
            iconStyle={{ background: "#d8c3a5", color: "#6e6658", boxShadow: '0 0 0 3px #6e6658' }}
            icon={<SchoolIcon />}
            >
            <Typography variant={isSmallScreen ? "h6" : "h5"} component="h3" sx={{ fontWeight: 'bold', fontFamily: 'Merriweather, serif' }}>
                    B.Sc. Computer Science
                </Typography>
                <img
                    src={nkuaLogo}
                    alt="Computer Science Student"
                    style={{
                        marginTop: '1rem',
                        float: 'left',
                        height: isSmallScreen ? '68.5px' : '90px',
                        marginBottom: '0.3rem',
                    }}
                />
                <Typography 
                    variant="subtitle1" 
                    component="h4" 
                    color="textSecondary" 
                    style={{ clear: 'both', marginTop: '0.5rem' }}
                >
                    Department of Informatics, University Of Athens
                </Typography>
                <Typography variant="body1">
                4 year program - 240 ECTS <br />
                Current Grade: 9.15
                </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
                background: "#d8c3a5",
                color: "#6e6658",
                borderRadius: '15px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            }}
            contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
            date="2019 - 2022"
            iconStyle={{ background: "#d8c3a5", color: "#6e6658", boxShadow: '0 0 0 3px #6e6658' }}
            icon={<SchoolIcon />}
            >
            <Typography variant={isSmallScreen ? "h6" : "h5"} component="h3" sx={{ fontWeight: 'bold', fontFamily: 'Merriweather, serif' }}>
                    High School
                </Typography>
                <img
                    src={othisiLogo}
                    alt="High School Student"
                    style={{
                        marginTop: '1rem',
                        float: 'left',
                        height: isSmallScreen ? '100px' : '130px',
                        marginBottom: '0.3rem',
                    }}
                />
                <Typography 
                    variant="subtitle1"
                    component="h4"
                    color="textSecondary"
                    style={{ clear: 'both', marginTop: '0.5rem' }}
                >
                    Othisi School
                </Typography>
                <Typography variant="body1">
                Grade: Apolytirion GPA: 19.9/20 (“Excellent”) | Panhellenic Exams: 18.670/20.000 <br />
                Activities and societies: Succeeded in mathematical competition by Greek Mathematical Society 2 times.
                </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
                background: "#d8c3a5",
                color: "#6e6658",
                borderRadius: '15px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            }}
            contentArrowStyle={{ borderRight: "7px solid  #d8c3a5" }}
            date="2019"
            iconStyle={{ background: "#d8c3a5", color: "#6e6658", boxShadow: '0 0 0 3px #6e6658' }}
            icon={<SchoolIcon />}
            >
            <Typography variant={isSmallScreen ? "h6" : "h5"} component="h3" sx={{ fontWeight: 'bold', fontFamily: 'Merriweather, serif' }}>
                    English C2
                </Typography>
                <Typography 
                    variant="subtitle1" 
                    component="h4" 
                    color="textSecondary" 
                    style={{ clear: 'both'}}
                >
                    Certificate of Proficiency in English <br />
                    from University of Michigan
                </Typography>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </section>
    );
};

export default Resume;
