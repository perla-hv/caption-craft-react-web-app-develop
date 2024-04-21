import axios from "axios";

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/users`;
export const PICTURES_API = `${BASE_API}/pictures`;

const request = axios.create({
    withCredentials: true,
});

export const generateImage = async (data) => {
    const response = await request.post(`${PICTURES_API}/generateImage`, data);
    return response.data;
};