import React, { useEffect, useState } from 'react'
import { addReviewsAPI, getTourReviewsAPI } from '../../services/allAPI';

const Reviews = ({ tourId }) => {

  const [review, setReview] = useState({
    reviewText: "", rating: ""
  })
  const [hover, setHover] = useState(null)
  const [allReviews, setAllReviews] = useState([])

  useEffect(() => {
    getTourReviews()
  }, [review])

  console.log(review);

  const reviewSubmit = async (e) => {
    e.preventDefault()
    const { reviewText, rating } = review
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      if (reviewText && rating) {
        try {
          const result = await addReviewsAPI(review, tourId, reqHeader)
          // console.log(result);
          if (result.status == 200) {
            alert("Thanks for sharing your feedback!!!")
            setReview({ reviewText: "", rating: "" })
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("Please fill the form completely")
      }
    } else {
      alert("Please Login!!!")
    }
  }

  const getTourReviews = async () => {
    try {
      const result = await getTourReviewsAPI(tourId)
      console.log(result.data);
      if (result.status == 200) {
        setAllReviews(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }
  console.log(allReviews);
  


  return (
    <div>
      <h3 className='fw-bolder my-3'>Reviews({allReviews?.length})</h3>
      {
        allReviews?.length > 0 ?
          allReviews?.map(review => (
            <>
              <div>
                <div className="d-flex justify-content-between">
                  <h5><img width={'30px'} src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png" alt="" className='me-3' /> {review.username}</h5>
                  <p><span className='fs-5'>{review.rating}</span> <i class="fa-solid fa-star text-warning"></i></p>
                </div>
                <p className='ms-5'>{review.reviewText}</p>
                <hr />
              </div>
            </>
          ))
          :
          <div className='fw-bolder text-danger'>No Reviews added yet...</div>
      }
      <div className='mt-5'>
        <h5>Rate your tour..</h5>
        {
          [...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label className='mb-3'>
                <input className='d-none radioBtn' type="radio" name='rating' value={currentRating} onClick={() => setReview({ ...review, rating: currentRating })} />
                <i style={{ color: currentRating <= (review.rating || hover) ? "#d6800f" : "#bebebe" }} onMouseEnter={() => setHover(currentRating)} onMouseLeave={() => setHover(null)} className="fas fa-star fs-5 p-2"></i>
              </label>

            )
          }
          )
        }
        <div className='d-flex mb-4'>
          <input value={review.reviewText} onChange={e => setReview({ ...review, reviewText: e.target.value })} type="text" className='w-50 form-control' placeholder='Share your feedbacks...' />
          <button onClick={reviewSubmit} className="btn bg-warning text-light">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Reviews