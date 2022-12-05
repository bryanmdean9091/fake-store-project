import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "./SignIn.css";

export default function SignIn() {
  return (
    <header>
      <div className="p-5 text-center bg-image shop-pic">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <form className="sign-in-form">
              <div className="form-outline mb-4">
                <input
                placeholder="Email"
                  type="email"
                  id="form2Example1"
                  className="text-black sign-in-field"
                />
                <label className="form-label text-white" for="form2Example1">
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                placeholder="Password"
                  type="password"
                  id="form2Example2"
                  className=" text-black sign-in-field"
                />
                <label className="form-label text-white" for="form2Example2">
                
                </label>
              </div>
              <button
                type="button"
                className="btn btn-sign mb-4 p-1"
              >
                Sign in
              </button>
              <div className="text-center text-white">
                <p>
                  Not a member? <a href="#!">Register</a>
                </p>
                <p>or sign up with:</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1 shadow-none"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
