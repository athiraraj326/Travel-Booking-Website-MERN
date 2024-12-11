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