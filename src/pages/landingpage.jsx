import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import me from "../image/me2.png";
import React from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
    databaseURL: "https://codebloomwebsite-default-rtdb.firebaseio.com/"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const LandingPage=()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, email } = event.target.elements;
        const data = {
            name: name.value,
            email: email.value,
        };
        try {
            push(ref(database, 'users'), data)
                .then(() => {
                    console.log("Data pushed successfully!");
                })
                .catch((error) => {
                    console.error("Error pushing data:", error);
                });
        } catch (error) {
            console.error("Error pushing data:", error);
        }
    };
    return(<>
      <Navbar className="sticky-top custom-nav-background">
        <Container fluid>
          <Navbar.Brand href="index.html">
            <h1 className="custom-nav-logo-text">Sohan Poudel</h1>
          </Navbar.Brand>
          <Navbar.Toggle className="custom-border2" style={{ backgroundColor: "#F4CE14" }} aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="justify-content-center text-center">
            <Nav>
              <Nav.Item>
                <NavLink className="nav-link" to="about" spy={true} smooth={true} offset={0} duration={500}><h2 className="custom-nav-item-text">About</h2></NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="skills" spy={true} smooth={true} offset={0} duration={500}><h2 className="custom-nav-item-text">Skills</h2></NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="resume" spy={true} smooth={true} offset={0} duration={500}><h2 className="custom-nav-item-text">Resume</h2></NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="contact" spy={true} smooth={true} offset={0} duration={500}><h2 className="custom-nav-item-text">Contact</h2></NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
      <div className="container-fluid container-size">
        <div className="row custom-banner-background">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 z-0">
                <Image src={me} className="img-fluid rounded mx-auto d-block custom-banner-pic"/>
            </div>
            
            <div id="about" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 text-center align-self-start">
                <div className="container text-white">
                    <h1 className="custom-banner-heading-align">ABOUT</h1>
                  </div>
                  <div className="container text-white">
                    <h3 className="custom-banner-subheading-align">Welcome to My Digital Space</h3>
                    <p className="custom-banner-p-align">Hello there!, I'm Sohan Poudel, a 24-year-old enthusiast in the world of technology and coding. I am currently studying for my degree in Computer Science and Information Technology (CSIT), and I'm passionate about creating projects and learning along with my experiences.</p>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-3 col-md-4 col-lg-4 col-xl-4">
                        <a href="https://www.linkedin.com/in/sohan-poudel-a499a5275/"><i className="bi bi-linkedin custom-soical-icon"></i></a>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-md-4 col-lg-4 col-xl-4">
                        <a href="https://github.com/thgieeight"><i className="bi bi-at text-center custom-soical-icon"></i></a>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-md-4 col-lg-4 col-xl-4">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=forregularuse101@gmail.com&su=Contact with me for&body=any specific work like"><i className="bi bi-github custom-soical-icon"></i></a>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
      </div>

      <div className="container-fluid skill-background">
          <div className="custom-skill-overall-space">
        <div className="row main-heading">
            <div className="col-12 text-center"><h1>SKILLS</h1></div>
        </div>
        <div className="row custom-space-between-skill">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="row custom-skill-name">
              <h4>Html</h4>
            </div>
              <div className="progress custom-border3">
                <div className="progress-bar progress-bar-striped progress-bar-animated custom-progressbar-color" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="row custom-skill-name">
              <h4>CSS</h4>
            </div>
            <div className="progress custom-border3">
              <div className="progress-bar progress-bar-striped progress-bar-animated custom-progressbar-color" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <div className="row custom-space-between-skill">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="row custom-skill-name">
              <h4>JS</h4>
            </div>
            <div className="progress custom-border3">
              <div className="progress-bar progress-bar-striped progress-bar-animated custom-progressbar-color" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="row custom-skill-name">
              <h4>C++</h4>
            </div>
            <div className="progress custom-border3">
              <div className="progress-bar progress-bar-striped progress-bar-animated custom-progressbar-color" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <div className="row custom-space-between-skill">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="row custom-skill-name">
              <h4>Wordpress</h4>
            </div>
            <div className="progress custom-border3">
              <div className="progress-bar progress-bar-striped progress-bar-animated custom-progressbar-color" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="row custom-skill-name">
              <h4>Php</h4>
            </div>
            <div className="progress custom-border3">
              <div className="progress-bar progress-bar-striped progress-bar-animated custom-progressbar-color" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <div className="row custom-space-between-skill">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="row custom-skill-name">
              <h4>C#</h4>
            </div>
            <div className="progress custom-border3">
              <div className="progress-bar progress-bar-striped progress-bar-animated custom-progressbar-color" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="row custom-skill-name">
              <h4>Java</h4>
            </div>
            <div className="progress custom-border3">
              <div className="progress-bar progress-bar-striped progress-bar-animated custom-progressbar-color" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>


      </div>
      </div>




      <div className="container-fluid custom-resume-background">
        <div>
        <div className="row pt-2">
            <div className="col-12 text-center main-heading">
              <h1>RESUME</h1>
            </div>
        </div>
        <div className="row my-2">
          <div className="col-12 text-center sub-heading">
            <a href="cv.html" download target="_blank">
              <button className="btn" style={{backgroundColor: "#F4CE14"}}>
            <h2>View CV</h2>
              </button>
          </a>
          </div>
        </div>
      </div>
    </div>
      
      <div className="container-fluid custom-border4">
        <div className="row main-heading" style={{backgroundColor:"#F5F7F8"}}>
            <div className="col-12 text-center pt-2"><h1>Contact</h1></div>
        </div>
        <div className="row" style={{backgroundColor: "#F5F7F8"}}>
          <div className="row other-actual-text container-size">
            <h4 style={{textAlign: "justify"}}>Let's Connect, I'm open to collaboration, learning opportunities, and connecting with fellow tech enthusiasts. Feel free to reach out if you share similar interests or have exciting projects in mind.</h4>
          </div>
          <div className='text-center'>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <button type="submit">Submit</button>
            </form>
            </div>
          <div className="row main-heading">
            <h3 className="text-center">Thanks for stopping by!</h3>
          </div>
        </div>
      </div>

      <div className="container-fluid custom-border pt-3 custom-footer-background">
        <div>
        <div className="row text-center custom-footer-text">
          <p>@CopyWrite 2023 design and develop by Sohan.</p>
        </div>
      </div>
      </div>
    </div>
    </>)
}

export default LandingPage;