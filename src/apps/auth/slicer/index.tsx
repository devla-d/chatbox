import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { unAuthRequest } from "../../../services";
import {
  InitalUserReducerstate,
  LoginForm,
  LoginResponse,
  UserModel,
} from "../../../types";

const sessionUser = JSON.parse(
  sessionStorage.getItem("user") || "{}"
) as UserModel;
const checkuser = sessionStorage.getItem("user") ? sessionUser : undefined;

const sessionaccessToken = sessionStorage.getItem("accessToken") as string;
const checkAccessToken = sessionStorage.getItem("accessToken")
  ? sessionaccessToken.toString()
  : "";

const sessionrefreshToken = sessionStorage.getItem("refreshToken") as string;
const checkRefresToken = sessionStorage.getItem("refreshToken")
  ? sessionrefreshToken.toString()
  : "";

export const LoginRequest = createAsyncThunk(
  "user/LoginRequest",
  async (formdata: LoginForm, { rejectWithValue }) => {
    try {
      const { data } = await unAuthRequest.post<LoginResponse>(
        "/login/",
        formdata
      );

      // if (data.msg && data.user && data.accessToken && data.refreshToken) {
      //   return data;
      // } else if (data.error) {
      //   return rejectWithValue(data.error);
      // } else {
      //   return rejectWithValue(data.error);
      // }
      console.log(data);
    } catch (e) {
      const error = e as AxiosError;

      return rejectWithValue(error.message);
    }
  }
);

const initialState: InitalUserReducerstate = {
  user: checkuser,
  accessToken: checkAccessToken,
  refreshToken: checkRefresToken,
  isLoggedin: sessionStorage.getItem("accessToken") ? true : false,
  loading: false,
};

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(LoginRequest.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(LoginRequest.fulfilled, (state, { payload }) => {
      console.log("payload");
      // if (
      //   payload.msg &&
      //   payload.user &&
      //   payload.accessToken &&
      //   payload.refreshToken
      // ) {
      //   state.loading = false;
      //   state.accessToken = payload.accessToken;
      //   state.refreshToken = payload.refreshToken;
      //   state.isLoggedin = true;
      //   state.user = payload.user;

      //   sessionStorage.setItem("user", JSON.stringify(payload.user));
      //   sessionStorage.setItem("accessToken", payload.accessToken);
      //   sessionStorage.setItem("refreshToken", payload.refreshToken);
      // }
    });

    builder.addCase(LoginRequest.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

// export const {   } = userSlicer.actions;
export default userSlicer.reducer;
