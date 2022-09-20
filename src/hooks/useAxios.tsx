import axios from "axios";
import { useAppSelector } from "./useStore";

const useAxios = () => {
  const token = useAppSelector((state) => state.auth.accessToken);
  const ReQuest = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      Authorization: token ? `Bearer ${token}` : false,
    },
  });
  return ReQuest;
};

export default useAxios;
