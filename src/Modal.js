import React from 'react';
import './App.css'

const Modal = ({setShowModal}) => {
  return (
    <div className='modal'>

        <div className="modal-content">
            <div className="modal-header">
                <h4>Modal-title</h4>
            </div>
            <div className="modal-body">
                Modal Content
            </div>
            <div className="modal-footer">
                <button className="modal-btn" onClick={()=> setShowModal(false)}>Close</button>
            </div>
        </div>
       
      
    </div>
  )
}

export default Modal
