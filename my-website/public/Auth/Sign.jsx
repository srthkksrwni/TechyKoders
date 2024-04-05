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
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  onClick={signIn}
                  className="btn btn-primary btn-lg btn-block">
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
