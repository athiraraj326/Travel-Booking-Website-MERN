import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { updateUserAPI } from '../../services/allAPI';
import userImg from '../assets/userImg.png'

const EditProfile = ({user}) => {
  const [userDetails, setUserDetails] = useState({
    username: user.username, email: user.email, password: user.password, profilePic: user.profilePic, mobile: user.mobile
  })
  
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
            <label className='text-center mb-2'>
              <input onChange={e => setUserDetails({ ...userDetails, profilePic: e.target.files[0] })} type="file" style={{ display: 'none' }} />
              {
                user.profilePic == "" ?
                  <img width={'200px'} height={'200px'} className='rounded-circle' src={userImg} alt="" />
                  :
                  <img width={'200px'} height={'200px'} className='rounded-circle' src={user.profilePic} alt="" />
              }
            </label>
          </div>
          <label>Name:</label>
          <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" className="form-control rounded mb-3" />
          <label>Email:</label>
          <input value={userDetails.email} onChange={e=>setUserDetails({...userDetails,email:e.target.value})} type="email" className="form-control rounded mb-3" />
          <label>Mobile:</label>
          <input value={userDetails.mobile} onChange={e=>setUserDetails({...userDetails,mobile:e.target.value})} type="text" placeholder='Enter mobile number' className="form-control rounded mb-3" />
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