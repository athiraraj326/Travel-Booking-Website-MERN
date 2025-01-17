import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"

// registerAPI
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

// loginAPI
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

// get all tours list
export const getAllToursAPI = async (searchKey)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-tours?search=${searchKey}`,{},searchKey)
}

// view single tour
export const getSingleTourAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/tour/${id}/view`,{})
}

// get all home list
export const getHomeToursAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-tours`,{})
}

// add reviews
export const addReviewsAPI = async (reqBody,id,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/${id}/add-review`,reqBody,reqHeader)
}

// get tour reviews
export const getTourReviewsAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/${id}/all-reviews`,{})
}

// add message
export const addMessageAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-message`,reqBody)
}

// get all users list
export const getAllUsersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-users`,{},reqHeader)
}

// get home search result
export const getHomeSearchAPI = async (location)=>{
    return await commonAPI("GET",`${SERVER_URL}/search-result/${location}`,{})
}

// add tour
export const addTourAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-tour`,reqBody,reqHeader)
}

// delete tour
export const deleteTourAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/tour/${id}/delete`,{},reqHeader)
}

// edit tour
export const updateTourAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/tour/${id}/edit`,reqBody,reqHeader)
}