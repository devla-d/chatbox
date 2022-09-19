export type RouteInterface = {
  id: number;
  element: JSX.Element;
  path: string;
};

export type SubmitButtonProp = {
  loading: boolean;
  type: "button" | "submit" | "reset";
  children: React.ReactNode | JSX.Element;
};

export type TakenDataTypes = {
  UsersEmail: string[];
  UsersUsername: string[];
};

export type RegisterResponse = {
  /** Response error string or array */
  error?: string | string[];
  /** Success message */
  msg?: string;
  /** Registered User username */
  username?: string;
};

export type UserModel = {
  id: number;
  email: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  roles: string;
  online: boolean;
  image: string | null;
  friends: Array<number>;
};

export type InitalUserReducerstate = {
  user?: UserModel;
  accessToken: string;
  refreshToken: string;
  isLoggedin: boolean;
  loading: boolean;
};

export type LoginResponse = {
  user?: UserModel;
  accessToken?: string;
  refreshToken?: string;
  msg?: string;
  error?: string | string[];
};

export type LoginForm = {
  username: string;
  password: string;
};

export interface PageHeadProps {
  name: string;
  children?: JSX.Element;
}
