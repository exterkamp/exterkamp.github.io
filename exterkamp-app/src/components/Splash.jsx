import React, {Component} from 'react';
import '../styles/Splash.css';
import headshot from '../static/img/edited_2.jpg';
import party_headshot from '../static/img/portrait_party.jpg';
import olympus from '../static/img/OLYMPUS_macro.jpg';

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
                        <div className="about-me-content">
                            <p>
                                I got a degree in Computer Science from the University of Florida, Go Gators! While I was there I met a lot of great people
                                and built a lot of fun things!  I was happy to go to a few UF Hackathons i.e. <i>Swamp Hacks</i>!  I focused a lot on Java
                                in school and also did some android development way back on KitKat.  I also got to work with a really cool 
                                company <a target="_target" href="https://www.infotechfl.com">InfoTech</a> for my Senior Project with 
                                the <a target="_target" href="http://www.ippd.ufl.edu/">IPPD</a> program where I got my first taste of the cloud.
                            </p>
                            <p>
                                After graduating I started working at <a target="_target" href="http://nielsen.com">Nielsen</a>.  I have worked in Research 
                                and Development, US Television Audience Measurement and Enterprise Core Technology.  This exposure to so many areas has given 
                                me a very large breadth of experience in technology and moved me away from Java centric development to work in Python, 
                                Javascript, Ansible, React, Angular, Redux, on AWS, Azure and GCP!  
                            </p>
                            <p>
                                I am just starting in my career as a software developer, and I am always looking for the next thing to learn and
                                do to make tech everywhere better!
                            </p>

                        </div>
                    </div>
                    <div className="about-photos">
                            <img className="camera-photo" alt="" src={olympus}/>
                            <div>
                                {/* <p style={{'text-align':'center', 'font-size': '2.5rem'}}>
                                    📷 🖌 🎮 🏂
                                </p> */}
                                <p>
                                    Outside of making software I enjoy expressing my creative side.  I love photography, both digitally and on 35mm.  To the
                                    left is my Olympus OM-2S!  I'm still new to developing my own film, but it is addictive and I am doing it more and more in
                                    addition to shooting digital.
                                </p>
                                <p>
                                    I also sometimes paint in acrylic and watercolor.  When not feeling colorful I draw in graphite and occasionally in ink.
                                </p>
                                <p>
                                    In addition, I game on PC, read books, play disc golf, and snowboard!
                                </p>
                            

                                
                            </div>
                        
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