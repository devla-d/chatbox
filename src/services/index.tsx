import axios from "axios";

const BASE_URL = "http://localhost:3000/";
const getRandomNumber = () => {
  return Math.floor(Math.random() * (100 - 10)) + 10;
};

const token = sessionStorage.getItem("accessToken");

const unAuthRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : false,
  },
});

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : false,
  },
});

export { getRandomNumber, unAuthRequest, axiosPrivate };
