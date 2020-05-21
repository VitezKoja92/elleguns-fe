import React from "react";
import { Credentials } from "../../types/login.types";
import "./Login.scss";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "../UI/Button/Button";
import { ButtonColor } from "../../enums/button-color.enum";
import { ButtonType } from "../../enums/button-type.enum";

function Login() {
  const onFormSubmitHandler = (values: Credentials, { setSubmitting }: any) => {
    console.log("values in onFormSubmit: ", values);

    if (null) {
      setSubmitting();
    }
  };

  return (
    <div className="Login">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onFormSubmitHandler}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email("Invalid Email Address")
            .required("Email is required"),
          password: yup
            .string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long")
            .matches(/.*[0-9].*/, "Password must have at least one number"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

          return (
            <div className="login-wrapper">
              <form onSubmit={handleSubmit} className="form">
                <label htmlFor="email" className="label">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your E-Mail"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <label htmlFor="password" className="label">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input ${
                    errors.password && touched.password ? "error" : ""
                  }`}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}

                <div className="button-wrapper">
                  <Button
                    text="Register"
                    type={ButtonType.StrokedRounded}
                    color={ButtonColor.Black}
                    width="40%"
                    disabled={
                      isSubmitting ||
                      Boolean(errors.password) ||
                      Boolean(errors.email)
                    }
                  />
                  <Button
                    text="Login"
                    type={ButtonType.RaisedRounded}
                    color={ButtonColor.Black}
                    width="40%"
                    disabled={
                      isSubmitting ||
                      Boolean(errors.password) ||
                      Boolean(errors.email)
                    }
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
