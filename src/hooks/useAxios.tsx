import axios from "axios";

const useAxios = () => {
  const token = null;
  const ReQuest = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      Authorization: token ? `Bearer ${token}` : false,
    },
  });
  return ReQuest;
};

export default useAxios;
