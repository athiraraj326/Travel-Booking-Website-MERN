import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getHomeSearchAPI } from '../../services/allAPI'
import bannerImg from "../assets/search-banner.jpg"

const HomeSearch = () => {
    const { location } = useParams()
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        getHomeSearchResult()
    }, [])
    console.log(searchResult);
    
    const getHomeSearchResult = async () => {
        try {
            const result = await getHomeSearchAPI(location)
            console.log(result);
            if (result.status == 200) {
                setSearchResult(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Header />
            <div>
                <img width={'100%'} height={'600px'} src={bannerImg} alt="" />
                <div className='position-absolute top-0 w-100 text-center d-flex flex-column
              justify-content-center align-items-center' style={{ background: 'rgba(0, 0, 0, 0.4)', height: '600px' }}>
                    <h1 className='text-light' style={{ fontSize: '80px' }}>Search Result</h1>
                </div>
            </div>
            <div className='container my-5'>
                <div className="row row-gap-5">
                    {
                        searchResult?.length > 0 ?
                            searchResult?.map(tour => (
                                <div className="col-lg-4">
                                    <Card style={{ width: '20rem' }}>
                                        <Card.Img variant="top" src={tour.image} />
                                        <Card.Body>
                                            <Card.Title className='fw-bold border border-warning w-50 text-center p-2'>{tour.country}</Card.Title>
                                            <Card.Text>
                                                <p>Location : {tour.place}</p>
                                                <h5> <i class="fa-solid fa-clock text-warning me-2"></i> {tour.duration}</h5>
                                            </Card.Text>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h4 className='fw-bolder'>$ {tour.price}</h4>
                                                <Link to={`/tour/${tour._id}/view`}><Button variant="warning" className='rounded'>Book Now</Button></Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        :
                        <div className="text-danger fw-bold text-center">No result found...</div>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomeSearch