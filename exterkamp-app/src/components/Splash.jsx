import React, {Component} from 'react';
import '../styles/Splash.css';
import headshot from '../static/img/edited_2.jpg';
import party_headshot from '../static/img/portrait_party.jpg';
// import olympus from '../static/img/OLYMPUS_macro.jpg';
import resume from '../static/Resume_2018_v5.pdf';
import hiking from '../static/img/hiking_shane.jpg';

import TextLoop from 'react-text-loop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {
    faFacebook,
    faGithub,
    faLinkedinIn,
  } from "@fortawesome/fontawesome-free-brands";

class Splash extends Component {
    
    render() {
        const hero_titles = 
            [
                "Software Engineer",
                "Artist",
                "Python Packager",
                "Docker Developer",
                "Tinkerer",
                "Graphic Designer",
                "Java Jouster",
                "Photographer"
            ];

        return (
            <div className={"splash " + this.props.theme}>
                <div className="hero-content">
                    <img className="headshot paper" src={(this.props.theme === 'formal')? headshot : party_headshot} alt="Portrait" onClick={() => this.props.themeSwitch()}/>
                    <div className={"Splash-Name " + this.props.theme}>Shane Exterkamp</div>
                    <div className={"hero-subtitle " + this.props.theme}>
                        <TextLoop springConfig={{stiffness: 210, damping: 20}} 
                            children={hero_titles} 
                            >
                        </TextLoop>
                    </div>
                </div>
                <div className="about">
                    <div className="about-me">
                        <div className="about-me-title">
                            Hello <span role="img" aria-label="Hello" alt="">👋</span> I'm Shane.  I build software.
                        </div>
                        <div>
                            <p>
                                I started off writing software in high school and it's been a passion ever since.  It all started by learning visual
                                basic in <i>Software Engineering 1</i> at Niceville Highschool.  It was there that I learned how to make computers do more
                                than I ever thought possible and it was then that I knew what I wanted to do with my time!
                                <br /><br />
                                Since then I went to the University of Florida to study computer science.  While I was there I met a lot of great people
                                and built a lot of fun things!  I even got to go to a few UF Hackathons i.e. <i>Swamp Hacks</i>!  During my senior capstone
                                project I got to work with the local Gainesville company <a target="_target" href="https://www.infotechfl.com">InfoTech</a>.
                                While I was at UF I focused mostly on Java development and I made a few games, 
                                like <a target="_target" href="https://github.com/AstroTeam/Astro">Astro</a>!  It was there that I learned a lot about software 
                                development processes, Agile, and how to write code and have it break right before big presentations.
                                <br /><br />
                                After graduating I started working at <a target="_target" href="http://nielsen.com">Nielsen</a>.  While there I worked in Research 
                                and Development, US Television Audience Measurement, Enterprise Core Technology, and Enterprise Cloud Operations.  This exposure to 
                                so many areas has given me a very large breadth of experience in technology and moved me away from Java centric development to work 
                                in Python, Javascript, Ansible, React, Angular, Redux, on AWS, Azure and GCP!  It also exposed me to a lot of great people who taught
                                me a lot about how to be a better software engineer and corporate citizen.  
                                <br /><br />
                                As with every software engineer I am committed to a life of learning and evovling my skills.  I hope it was interesting to read about
                                my experiences so far, and I hope that it only gets more interesting as time goes on!  If that wasn't enough for you I also have 
                                a <a target="_target" href={resume}>résumé</a> if that's your cup of tea.  
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="things-title">
                        And I do other things too! <span role="img" aria-label="Mind Explosion" alt="">🤯</span>
                    </div>
                    <div className="about-photos">
                            <img className="camera-photo" alt="" src={hiking}/>
                            <div>
                                <p>
                                    Outside of making software I enjoy doing a ton of random other things.  In Alaska I picked up hiking and snowboarding.  In
                                    Florida I picked up a love of <a target="_target" href="https://en.wikipedia.org/wiki/Disc_golf">frolf</a>.  Sometimes I've been
                                    known to golf too!  I also like to play games on the PC and Switch!      
                                </p>
                                <p>
                                    I also have some more esoteric hobbies like mechanical keyboards, being an audiophile, building models (mainly military and 40k), and 
                                    building my own electronics with Raspberry Pi's and Arduinos.
                                </p>
                                <p>
                                    I also enjoy expressing my creative side.  I love photography, both digitally and on 35mm.  I develop my own 35mm which has been an
                                    experience in and of itself.  I also sometimes paint in acrylic and watercolor.  When not feeling colorful I draw in graphite and 
                                    occasionally in ink.
                                </p>
                            </div>
                    </div>
                                
                </div>
                <div className="professional">
                    <div className="professional-title">
                        Wanna talk <span role="img" aria-label="Phone" alt="">📞</span>?  I'd love to!
                    </div>
                    <div className="about-contact">
                        <a className="icon" target="_blank" rel="noopener noreferrer" href="mailto:shane@exterkamp.codes">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a className="icon" target="_blank" rel="noopener noreferrer" href="https://github.com/exterkamps">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shane-exterkamp">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a className="icon" target="_blank" rel="noopener noreferrer" href="http://facebook.com/shane.exterkamp">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                </div>
                <div className="footer">
                    Handcrafted with <span role="img" aria-label="Love" alt="" >❤</span> by Shane
                </div>
            </div>
            
        );
    }
}

export default Splash;