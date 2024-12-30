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

// add tours

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
export const getTourReviewsAPI = async (id,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/${id}/all-reviews`,{},reqHeader)
}