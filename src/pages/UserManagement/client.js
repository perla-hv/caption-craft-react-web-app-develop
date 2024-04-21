import axios from "axios";

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/users`;

const request = axios.create({
    withCredentials: true,
});

export const Login = async (credentials) => {
    const response = await request.post( `${USERS_API}/login`, credentials );
    return response.data;
};


export const Signup = async (info) => {
    const response = await request.post( `${USERS_API}/signup`, info );
    return response.data;
};
