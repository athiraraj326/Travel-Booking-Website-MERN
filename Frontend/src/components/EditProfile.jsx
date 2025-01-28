import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { updateUserAPI } from '../../services/allAPI';
import userImg from '../assets/userImg.png'
import SERVER_URL from '../../services/serverUrl';

const EditProfile = () => {
  const [preview,setPreview] = useState("")
  const [existingProfileImg,setExistingProfileImg] = useState("")
  const [userDetails,setUserDetails] = useState({
    username: "", email: "", password: "", profilePic: "", mobile: ""
  })
  // console.log(userDetails);
   
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({...userDetails,username: user.username, email: user.email, password: user.password, mobile: user.mobile})
      setExistingProfileImg(user.profilePic)
    }
  },[])

  useEffect(()=>{
    if(userDetails.profilePic){
      setPreview(URL.createObjectURL(userDetails.profilePic))
    }else{
      setPreview("")
    }
  },[userDetails.profilePic])

  const handleUpdateProfile = async ()=>{
    const {username,email,password,profilePic,mobile} = userDetails
    const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      preview ? reqBody.append("profilePic",profilePic) : reqBody.append("profilePic",existingProfileImg)
      reqBody.append("mobile",mobile)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        // api call
        try{
          const result = await updateUserAPI(reqBody,reqHeader)
          if(result.status==200){
            alert("User Profile updated successfully!!!")
            sessionStorage.setItem("user",JSON.stringify(result.data))
            handleClose()
          }
        }
        catch(err){
          console.log(err);
        }
      }
  }

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
              existingProfileImg=="" ?
              <img width={'200px'} height={'200px'} className='rounded-circle' src={preview?preview:userImg} alt="" />
              :
              <img width={'200px'} height={'200px'} className='rounded-circle' src={preview?preview:`${SERVER_URL}/uploads/${existingProfileImg}`} alt="" />
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
          <Button onClick={handleUpdateProfile} variant="warning">Edit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProfile