  import React from 'react';

  import project1 from './images/project1.png';
  import project2 from './images/project2.png';
  import project3 from './images/project3.png';

  function Portfolio() {
    return (
      <section id="portfolio" className="py-5 mt-5">
        <div className="container">
          <div className="row">
            <ProjectCard
              title="Eli-Ilao"
              image={project1}
              text="An online website for ice cream selection."
              modalId="eliIlaoModal"
            />
            <ProjectCard
              title="Madonna's Resort"
              image={project2}
              text="Online booking for Madonna's Resort."
              modalId="madonnaModal"
            />
            <ProjectCard
              title="Bank Buddy"
              image={project3}
              text="A C++ online Automated Teller Machine."
              modalId="bankBuddyModal"
            />
          </div>
        </div>

        {/* Modals */}
        <Modal id="eliIlaoModal" title="Eli-Ilao" body="The project 'Eli-Ilao' is an ice cream website where users can explore various flavors and container sizes. The website includes pages such as 'About Us', 'Flavors', 'Reviews', and 'Contact.'
                      This project serves as the CAPSTONE for the course 'Introduction to Computer.'" />
        <Modal id="madonnaModal" title="Madonna's Resort" body="This project was developed for the Major Assessment 3 of the Information Management course. The goal of the website is to create a responsive online booking system for the resort 'Madonna.'
                      The system is connected to a database and includes functionalities for both users and administrators, allowing for efficient and streamlined booking management." />
        <Modal id="bankBuddyModal" title="Bank Buddy" body="An online automated teller machine (ATM) was developed for the final exam of the Object-Oriented Programming course.
                      The purpose of this project is to allow users to perform essential banking functions online, including withdrawing funds, viewing account balances, and making deposits." />
      </section>
    );
  }

  function ProjectCard({ title, image, text, modalId }) {
    return (
      <div className="col-md-4">
        <div className="card">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <button
              type="button"
              className="btn btn-custom"
              data-toggle="modal"
              data-target={`#${modalId}`}
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  function Modal({ id, title, body }) {
    return (
      <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
              <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {body}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Portfolio;
