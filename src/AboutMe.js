import React from 'react';
import profile from './images/profile.jpg';

function AboutMe() {
    return (
      <section id="about" className="py-5 mt-5">
        <div className="container text-center">
          <h1 className="text-center mb-4">About Me</h1>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src={profile} alt="Your Picture" className="img-fluid mb-3" />
            </div>
            <div className="col-md-7">
              <p>
                Hello! My name is Elisha Grace R. Ilao from C3A and I’m currently studying BS Computer Science at De La Salle Lipa.
                I have created projects like an online ATM, a responsive booking system for Madonna's Resort, a personal website about ice-cream shops, and other interesting projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default AboutMe;
