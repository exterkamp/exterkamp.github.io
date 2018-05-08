import React, {Component} from 'react';
import '../styles/Splash.css';
import headshot from '../static/img/edited_2.jpg'
import Social from './Social.js';

class Splash extends Component {
    render() {
        return (
            <div className="Splash">
                <img className="Splash-Headshot" src={headshot} alt="Portrait" />
                <div className="Splash-Name">Shane Exterkamp</div>
                <div className="Splash-Title">Software Engineer</div>
                
                <div className="Splash-Content">
                    <div className="Splash-Content-Title">A Little About Me</div>
                    I am a software engineer that lives in Tampa, Florida. In 2016 I graduated from the University of Florida with a Bachelors in Computer Science. I work with all kinds of technology, but my specialty, if I have one, is in cloud native applications and User Experience design.
                    <br /> 
                    In the past I have worked with Python, Java, AWS, C#, Flask, Django, Spring, Ansible, Docker, Javascript, Swagger, SQL/NoSQL DB's and a lot more. I love to learn new tech and revel in the opportunity to dive into something new. Sometimes I even get into hardware and have been known to play with Raspberry Pi's and fire up the ol' soldering iron; that usually lasts until I burn myself the third time...
                    <br /> 
                    Outside of software I am an errant artist. I specialize in graphite and dabble in acrylic. When I'm not playing with tech I am probably drawing, painting or photographing something. 
                    <br />
                    If you want to talk I'd love to get to know you. Feel free to reach out to me however you feel most comfortable.
                </div>
                <footer className="Splash-Footer">
                    <Social />
                </footer>
            </div>
        );
    }
}

export default Splash;