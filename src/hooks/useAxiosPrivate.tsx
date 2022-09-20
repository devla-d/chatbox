import { axiosPrivate } from "@/services";
import { AxiosError } from "axios";
import { useEffect } from "react";
import useRefresToken from "./useRefresToken";
import { useAppSelector } from "./useStore";

const useAxiosPrivate = () => {
  const user = useAppSelector((state) => state.auth);

  const refresh = useRefresToken();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccestoken = await refresh();
          console.log(newAccestoken);
          prevRequest.headers["Authorization"] = `Bearer ${newAccestoken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [refresh, user]);

  return axiosPrivate;
};

export default useAxiosPrivate;
