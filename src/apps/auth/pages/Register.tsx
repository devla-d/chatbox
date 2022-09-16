import { FormikValues, useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/SubmitButton";
import useAxios from "../../../hooks/useAxios";
import { RegisterResponse, TakenDataTypes } from "../../../types";
import { initExistData, RegisterSchema } from "../helper.tsx";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const Register = () => {
  const ReQuest = useAxios();
  const [takenData, setTakenData] = useState<TakenDataTypes>(initExistData);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const RegisterUser = async (formData: FormikValues) => {
    setloading(true);
    try {
      const { data } = await ReQuest.post<RegisterResponse>(
        "/register/",
        formData
      );
      if (data.error) {
        if (Array.isArray(data.error)) {
          data.error.forEach((err) => {
            toast.error(err);
          });
        }
        toast.error(data.error);
      }

      toast.info(data.msg);
      navigate("/login");
    } catch (error) {
      let err = error as AxiosError;
      console.log(err);
      toast.error(err.message);
    }
    setloading(false);
  };

  const regSchema = RegisterSchema(
    takenData.UsersUsername,
    takenData.UsersEmail
  );
  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        email: "",
        username: "",
        password: "",
      },
      validationSchema: regSchema,
      onSubmit(values, _formikHelpers) {
        RegisterUser(values);
      },
    });

  useEffect(() => {
    setloading(true);
    ReQuest.get<TakenDataTypes>("/valid-users-data")
      .then(({ data }) => {
        setTakenData(data);
        setloading(false);
      })
      .catch((e) => {
        let err = e as AxiosError;
        console.log(err);
        toast.error(err.message);
      });

    return () => {};
  }, []);

  return (
    <div className="auth-register">
      <div className="auth-register-box">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="">
              Create new
              <br />
              <span>account</span> with us
            </h2>
            <form action="" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-1">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className={
                        "form-control " + (errors.email ? "is-invalid" : null)
                      }
                      id="email"
                      placeholder="name@example.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="invalid-feedback">{errors.email}</p>
                    ) : null}
                  </div>
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
                            <span> Sign Up</span>
                          </SubmitButton>
                        </div>
                      </div>
                      <div className="col-2">
                        <p className="or-text">Or</p>
                      </div>
                      <div className="col-4">
                        <div>
                          <Link to="/login" className="btn btn-outline-primary">
                            Login
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

export default Register;
