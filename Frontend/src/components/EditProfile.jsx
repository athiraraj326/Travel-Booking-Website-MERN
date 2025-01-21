import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const EditProfile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <button onClick={handleShow} className='btn text-warning fs-5'><i className="fa-solid fa-pen-to-square"></i></button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-3">
          <img className='border border-3 border-light rounded-circle' width={'180px'} height={'180px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0iyDV7yF0Up_AzCC5Iq84UuLsOwvER4YTg&s" alt="" />
          </div>
          <label>Name:</label>
          <input type="text" className="form-control rounded mb-3" />
          <label>Email:</label>
          <input type="text" className="form-control rounded mb-3" />
          <label>Mobile:</label>
          <input type="text" className="form-control rounded mb-3" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning">Edit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProfile