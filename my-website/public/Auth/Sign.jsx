import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase";
import Table from "../Dashboard/Table";

export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setLogin(true);
    }
  }, []);

  const signIn = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Successfully logged in", user);

        sessionStorage.setItem("isLoggedIn", true);
        setLogin(true);
      })
      .catch((error) => {
        console.error("Sign-in error:", error.message);
      });
  };

  const signOut = () => {
    sessionStorage.removeItem("isLoggedIn");
    setLogin(false);
  };

  return (
    <>
      {!login ? (
        <section classNameName="vh-100">
          <div classNameName="container py-5 h-100">
            <div classNameName="row d-flex align-items-center justify-content-center h-100">
              <div classNameName="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  classNameName="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div classNameName="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                {/* Email input */}
                <div classNameName="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    classNameName="form-control form-control-lg"
                  />
                  <label classNameName="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>

                {/* Password input */}
                <div classNameName="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    classNameName="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label classNameName="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  onClick={signIn}
                  classNameName="btn btn-primary btn-lg btn-block">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <Table />
          <button onClick={signOut}>Logout</button>
        </>
      )}
    </>
  );
}
