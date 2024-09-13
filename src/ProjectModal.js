import React from 'react';

function ProjectModal({ title, description }) {
  return (
    <div className="modal fade" id={`${title}Modal`} tabIndex="-1" aria-labelledby={`${title}ModalLabel`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${title}ModalLabel`}>{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
