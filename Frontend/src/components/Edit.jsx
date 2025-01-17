import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { updateTourAPI } from '../../services/allAPI';

const Edit = ({ tour }) => {

    const [tourDetails, setTourDetails] = useState({
        id: tour._id, country: tour.country, place: tour.place, duration: tour.duration, image: tour.image, price: tour.price
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdateTour = async () => {
        const { id, country, place, duration, image, price } = tourDetails
        if (id && country && place && duration && image && price) {
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                try {
                    const result = await updateTourAPI(id,tourDetails,reqHeader)
                    if (result.status == 200) {
                        alert("Tour Updated Successfully!!!")
                        handleClose()
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            alert("Please fill the form completely..")
        }
    }

    return (
        <>
            <button onClick={handleShow} className='btn'><i className="fa-solid fa-pen-to-square"></i></button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning fw-bold'>Update Tour Package</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label className='mb-1 ms-1'>Country:</label>
                    <input value={tourDetails.country} onChange={e=>setTourDetails({...tourDetails,country:e.target.value})} type="text" className='form-control rounded mb-3' placeholder='Country Name*' />
                    <label className='mb-1 ms-1'>Place:</label>
                    <input value={tourDetails.place} onChange={e=>setTourDetails({...tourDetails,place:e.target.value})} type="text" className='form-control rounded mb-3' placeholder='Place Name*' />
                    <label className='mb-1 ms-1'>Duration:</label>
                    <input value={tourDetails.duration} onChange={e=>setTourDetails({...tourDetails,duration:e.target.value})} type="text" className='form-control rounded mb-3' placeholder='Duration*' />
                    <label className='mb-1 ms-1'>Image URL:</label>
                    <input value={tourDetails.image} onChange={e=>setTourDetails({...tourDetails,image:e.target.value})} type="text" className='form-control rounded mb-3' placeholder='Image URL*' />
                    <label className='mb-1 ms-1'>Price:</label>
                    <input value={tourDetails.price} onChange={e=>setTourDetails({...tourDetails,price:e.target.value})} type="text" className='form-control rounded mb-3' placeholder='Price*' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleUpdateTour} variant="warning">Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit