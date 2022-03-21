import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../screens.css";
import Password from "../../components/form-elements/Password";
import TextInput from "../../components/form-elements/TextInput";
import { login } from "../../store/actions/user-action";
import { useNavigate } from "react-router-dom";
import HomeScreen from "../HomeScreen/HomeScreen";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = props;
  if (user.auth) {
    return <HomeScreen />;
  }
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  function onSubmit(event, payload) {
    event.preventDefault();
    props.login(payload);
  }
  return (
    <div className="form-width shadow">
      <h2 className="text-center text-muted">Login</h2>
      <form>
        <TextInput
          label="Email"
          value={email}
          onChange={onEmailChange}
          placeholder="example@mail.com"
        />
        <Password value={password} onChange={onPasswordChange} />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            onClick={(e) => onSubmit(e, { email, password })}
            className="btn btn-outline-success d-block"
          >
            Login
          </button>
          <div>
            <Link to="/signup" className="text-decoration-none text-muted">
              Register here!
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
const mapStatesToProps = ({ user }) => ({ user });
export default connect(mapStatesToProps, { login })(LoginScreen);
