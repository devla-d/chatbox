import * as yup from "yup";
import { TakenDataTypes } from "../../../types";

// // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;

/**
 *
 * @param existingUsername
 * @param existingEmail
 * @returns
 */
const RegisterSchema = (
  existingUsername: string[],
  existingEmail: string[]
) => {
  return yup.object().shape({
    email: yup
      .string()
      .email()
      .notOneOf(existingEmail, "Email is already taken")
      .required(),
    username: yup
      .string()
      .notOneOf(existingUsername, "Usernam already taken")
      .min(2)
      .max(10)
      .required(),
    password: yup
      .string()
      .min(6)
      .max(12)
      .matches(
        passwordRules,
        "min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit"
      )
      .required(),
  });
};

const LoginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const initExistData: TakenDataTypes = {
  UsersEmail: [],
  UsersUsername: [],
};
export { RegisterSchema, LoginSchema, initExistData };
