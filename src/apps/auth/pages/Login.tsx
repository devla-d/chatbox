import { useFormik } from "formik";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SubmitButton from "../../../components/SubmitButton";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStore";
import { LoginSchema } from "../helper.tsx";
import { LoginForm } from "@/types";
import { LoginRequest } from "../slicer";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.auth.loading);

  const LoginUser = (formData: LoginForm) => {
    dispatch(LoginRequest(formData))
      .unwrap()
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        if (Array.isArray(error)) {
          error.forEach((err) => {
            toast.error(err);
          });
        } else {
          toast.error(error);
        }
      });
  };

  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit(values) {
        LoginUser(values);
      },
    });
  return (
    <div className="auth-register">
      <div className="auth-register-box">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="font-weight-normal mb-5 mt-4">
              Login into
              <br />
              your<span> account</span>
            </h2>
            <form action="" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-1">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className={
                        "form-control " +
                        (errors.username ? "is-invalid" : null)
                      }
                      id="username"
                      placeholder=""
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.username && touched.username ? (
                      <p className="invalid-feedback">{errors.username}</p>
                    ) : null}
                  </div>
                  <div className="mb-1">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className={
                        "form-control " +
                        (errors.password ? "is-invalid" : null)
                      }
                      id="password"
                      placeholder="******"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.password && touched.password ? (
                      <p className="invalid-feedback">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="col-md-12">
                    <div className="row align-center mb@m">
                      <div className="col-6">
                        <div className="d-grid gap-2">
                          <SubmitButton loading={loading} type="submit">
                            <span> Login</span>
                          </SubmitButton>
                        </div>
                      </div>
                      <div className="col-2">
                        <p className="or-text">Or</p>
                      </div>
                      <div className="col-4">
                        <div>
                          <Link
                            to="/new-account"
                            className="btn btn-outline-primary"
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
