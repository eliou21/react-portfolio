import React from 'react';
import './App.css';
import './style.css';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ProjectModal from './ProjectModal';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* About Me */}
      <AboutMe />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-5 mt-5">
        <div className="container">
          <h1 className="text-center mb-4">My Portfolio</h1>
          <Portfolio />
        </div>
      </section>

      {/* Modals for each project */}
      <ProjectModal 
        title="Eli-Ilao" 
        description="The project 'Eli-Ilao' is an online ice cream website for selecting different flavors and sizes." 
      />
      <ProjectModal 
        title="Madonna's Resort" 
        description="This is an online booking system developed for Madonna's Resort." 
      />
      <ProjectModal 
        title="Bank Buddy" 
        description="A C++ based online Automated Teller Machine (ATM) project for managing banking tasks like withdrawals, balance checking, and deposits." 
      />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
