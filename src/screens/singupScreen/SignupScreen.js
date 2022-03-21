import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


import TextInput from "../../components/form-elements/TextInput";
import Password from "../../components/form-elements/Password";
import { signup } from '../../store/actions/user-action';
import "../screens.css";
import { useSelector } from "react-redux";
import HomeScreen from "../HomeScreen/HomeScreen";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(({user})=>user)
  if (user.auth) {
    return <HomeScreen />;
  }
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(signup({name, email, password, confirm_password: confirmPassword}))
  }
  return (
    <div className="form-width shadow">
      <h2 className="text-muted text-center">Sign up</h2>
      <form>
        <TextInput
          label="Full Name"
          placeholder="Anuj Kumar Pathak"
          value={name}
          onChange={onNameChange}
        />
        <TextInput type="email" value={email} label="Email" placeholder="example@gmail.com" onChange={onEmailChange}/>
        <div className="row">
          <div className="col-6">
            <Password value={password} onChange={onPasswordChange} />
          </div>
          <div className="col-6">
            <Password value={confirmPassword} onChange={onConfirmPasswordChange} label="Confirm Password" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            onClick={onSubmit}
            className="btn btn-outline-primary d-block"
          >
            Sign up
          </button>
          <div>
            <Link to="/login" className="text-decoration-none text-muted">
              Already have n account! Please login here.
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignupScreen;


