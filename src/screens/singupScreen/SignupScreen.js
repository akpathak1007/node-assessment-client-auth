import React from 'react';
import {Link} from 'react-router-dom'

import TextInput from '../../components/form-elements/TextInput';
import Password from '../../components/form-elements/Password';
import '../screens.css';


const SignupScreen = () => {
  return (
    <div className='form-width shadow'>
      <h2 className='text-muted text-center'>Sign up</h2>
      <form>
      <TextInput label='Full Name' placeholder="Anuj Kumar Pathak" />
        <TextInput type="email" label='Email' placeholder="example@gmail.com" />
        <div className="row">
          <div className="col-6">
            <Password/>
          </div>
          <div className="col-6">
            <Password label="Confirm Password"/>
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
  )
}
export default SignupScreen;

function onSubmit(event) {
  event.preventDefault();
}