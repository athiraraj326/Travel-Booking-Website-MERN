import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { addTourAPI } from '../../services/allAPI';

const Add = () => {

  const [tourDetails,setTourDetails] = useState({
    country:"",place:"",duration:"",image:"",price:""
  })
  // console.log(tourDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addTour = async (e) => {
    e.preventDefault()
    const {country,place,duration,image,price} = tourDetails
    if(country && place && duration && image && price){
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        try{
          const result = await addTourAPI(tourDetails,reqHeader)
          if(result.status==200){
            alert("Tour added successfully!!!")
            handleClose()
            setTourDetails({country:"",place:"",duration:"",image:"",price:""})
          }
        }catch(err){
          console.log(err);
        }
      }
    }else{
      alert("Please fill all the deatails!!!")
    }
  }

  return (
    <>
      <button onClick={handleShow} className="btn rounded bg-warning text-light">+ Add Packages</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning fw-bold'>Add Tour Package</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className='mb-1 ms-1'>Country:</label>
          <input onChange={e=>setTourDetails({...tourDetails,country:e.target.value})} type="text" className='form-control rounded mb-3' placeholder='Country Name*' />
          <label className='mb-1 ms-1'>Place:</label>
          <input onChange={e=>setTourDetails({...tourDetails,place:e.target.value})} type="text" className='form-control rounded mb-3' placeholder='Place Name*' />
          <label className='mb-1 ms-1'>Duration:</label>
          <input onChange={e=>setTourDetails({...tourDetails,duration:e.target.value})} type="text" className='form-control rounded mb-3' placeholder='Duration*' />
          <label className='mb-1 ms-1'>Image URL:</label>
          <input onChange={e=>setTourDetails({...tourDetails,image:e.target.value})} type="text" className='form-control rounded mb-3' placeholder='Image URL*' />
          <label className='mb-1 ms-1'>Price:</label>
          <input onChange={e=>setTourDetails({...tourDetails,price:e.target.value})} type="text" className='form-control rounded mb-3' placeholder='Price*' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addTour} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add