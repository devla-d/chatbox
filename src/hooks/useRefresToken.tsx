import { resetSlicer, updateAccessToken } from "@/apps/auth/slicer";
import { unAuthRequest } from "@/services";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "./useStore";
interface RefRes {
  accesstoken?: string;
  error: string;
}
const useRefresToken = () => {
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);
  const dispatch = useAppDispatch();

  const refresh = async () => {
    const { data } = await unAuthRequest.post<RefRes>("/refresh-token/", {
      refreshToken,
    });

    if (data.error) {
      dispatch(resetSlicer());

      setTimeout(() => {
        window.location.reload();
      });
    }
    if (!data.accesstoken) return;
    dispatch(updateAccessToken(data.accesstoken));
    return data.accesstoken;
  };
  return refresh;
};

export default useRefresToken;
