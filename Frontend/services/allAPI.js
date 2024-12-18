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
export const getAllToursAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/all-tours`,{})
}

// view single tour
export const getSingleTourAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/tour/${id}/view`,{})
}