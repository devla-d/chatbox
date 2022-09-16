import axios from "axios";

const getRandomNumber = () => {
  return Math.floor(Math.random() * (100 - 10)) + 10;
};

const token = sessionStorage.getItem("accessToken");

const unAuthRequest = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    Authorization: token ? `Bearer ${token}` : false,
  },
});
export { getRandomNumber, unAuthRequest };
