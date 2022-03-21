import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { user } = props;
  return (
    <div>
      <div className="navbar bg-light px-5 navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Ak Pathak
          </Link>
          <div className="">
            <ul className="navbar-nav">
              <li className="nav-item">
                {!user.auth ? (
                  <Link to="/login" className="btn btn-outline-success">
                    Login
                  </Link>
                ) : (
                  <button className="btn btn-outline-danger" >Logout</button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapPropsToState = ({ user }) => ({ user });

export default connect(mapPropsToState)(Navbar);
