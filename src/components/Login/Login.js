import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { CreateField, Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";
import { Container } from "react-bootstrap";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField("Email", "email", [required], Input)}
      {CreateField("Password", "password", [required], Input, {
        type: "password",
      })}
      {CreateField(
        null,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "remember me"
      )}
      {error && <div className={style.formSummaryError}>{error}</div>}{" "}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <Container>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </Container>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
