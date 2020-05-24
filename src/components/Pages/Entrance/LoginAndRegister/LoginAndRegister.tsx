import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Credentials } from "../../../../types/login.types";
import "./LoginAndRegister.scss";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "../../../UI/Button/Button";
import { ButtonColor } from "../../../../enums/button-color.enum";
import { ButtonType } from "../../../../enums/button-type.enum";
import { ActiveEntranceView } from "../../../../enums/acive-entrance-view.enum";

function LoginAndRegister() {
  const [activeEntranceView, setActiveEntranceView] = useState(
    ActiveEntranceView.Login
  );
  const history = useHistory();

  const toggleActiveEntranceView = () => {
    setActiveEntranceView(
      activeEntranceView === ActiveEntranceView.Login
        ? ActiveEntranceView.Register
        : ActiveEntranceView.Login
    );
  };

  const onFormSubmitHandler = (
    credentials: Credentials,
    { setSubmitting }: any
  ) => {
    console.log("values in onFormSubmit: ", credentials);

    setSubmitting();
    console.log("history: ", history);
    history.push("/dashboard", credentials);
    console.log("history: ", history);
  };

  return (
    <div className="LoginAndRegister">
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
            <div className="login-and-register-wrapper">
              <form onSubmit={handleSubmit} className="form">
                <label htmlFor="email" className="label">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder={
                    activeEntranceView === ActiveEntranceView.Login
                      ? "Your E-Mail"
                      : "E-mail"
                  }
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
                  placeholder={
                    activeEntranceView === ActiveEntranceView.Login
                      ? "Your Password"
                      : "Password"
                  }
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
                    text={
                      activeEntranceView === ActiveEntranceView.Login
                        ? "Go to Register"
                        : "Go to Login"
                    }
                    buttonType={ButtonType.StrokedRounded}
                    color={ButtonColor.Black}
                    width="40%"
                    click={toggleActiveEntranceView}
                    disabled={isSubmitting}
                  />
                  <Button
                    text={
                      activeEntranceView === ActiveEntranceView.Login
                        ? "Login"
                        : "Register"
                    }
                    buttonType={ButtonType.RaisedRounded}
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

export default LoginAndRegister;
