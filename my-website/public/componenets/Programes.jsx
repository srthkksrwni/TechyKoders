import React, { useEffect, useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

import { getFirestore } from "firebase/firestore";
import { app } from "../../Firebase";

export default function Programes() {
  const db = getFirestore(app);
  const [alert, setalert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    year: "",
    domain: "",
    uniqueId: generateRandomId(),
    currentDate: getCurrentDate(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const SubmitForm = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      await addDoc(collection(db, "Student"), formData);
      console.log("Document successfully written!");
      setalert(true);

      setFormData({
        // Reset form data after submission
        name: "",
        phone: "",
        email: "",
        year: "",
        domain: "",
        uniqueId: generateRandomId(),
        currentDate: getCurrentDate(),
      });
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  function generateRandomId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 6; // Minimum length of the random string
    let randomId = "";
    for (let i = 0; i < length; i++) {
      randomId += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return randomId;
  }

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // console.log(formData);
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setalert(false);
      }, 3000); // Set a delay of 3000 milliseconds (3 seconds)
    }
  });
  console.log(formData);

  return (
    <>
      {alert && (
        <div
          className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 fixed top-0 left-0 right-0 mx-auto mt-10 z-50"
          role="alert">
          <div className="flex p-4">
            <div className="flex-shrink-0">
              <svg
                className="flex-shrink-0 size-4 text-teal-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700 dark:text-gray-400">
                This is a success message.
              </p>
            </div>
          </div>
        </div>
      )}
      <div classNameName="flex justify-center p-5">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Virtual Internship
          </span>{" "}
          <span classNameName="text-purple-700"> Program</span>
        </h1>
      </div>
      <div className="flex items-center justify-center p-12">
        {/* <!-- Author: FormBold Team --> */}
        <div className="container">
          <form onSubmit={SubmitForm}>
            <div className="mb-3">
              <label for="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                required
                name="name"
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label for="phone" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                placeholder="Enter your email"
                className="form-control"
              />
            </div>

            <div classNameName="mb-4">
              <label classNameName="block text-gray-700 font-medium mb-2">
                Year
              </label>
              <div classNameName="flex flex-wrap -mx-2">
                <div classNameName="px-2 w-1/3">
                  <div classNameName="form-check">
                    <input
                      type="radio"
                      id="year-1"
                      name="year"
                      value="1st Year"
                      onChange={handleChange}
                      checked={formData.year === "1st Year"}
                      classNameName="form-check-input"
                    />
                    <label htmlFor="year-1" classNameName="form-check-label">
                      1st Year
                    </label>
                  </div>
                </div>
                <div classNameName="px-2 w-1/3">
                  <div classNameName="form-check">
                    <input
                      type="radio"
                      id="year-2"
                      name="year"
                      value="2nd Year"
                      onChange={handleChange}
                      checked={formData.year === "2nd Year"}
                      classNameName="form-check-input"
                    />
                    <label htmlFor="year-2" classNameName="form-check-label">
                      2nd Year
                    </label>
                  </div>
                </div>
                <div classNameName="px-2 w-1/3">
                  <div classNameName="form-check">
                    <input
                      type="radio"
                      id="year-3"
                      name="year"
                      value="3rd Year"
                      onChange={handleChange}
                      checked={formData.year === "3rd Year"}
                      classNameName="form-check-input"
                    />
                    <label htmlFor="year-3" classNameName="form-check-label">
                      3rd Year
                    </label>
                  </div>
                </div>
                <div classNameName="px-2 w-1/3">
                  <div classNameName="form-check">
                    <input
                      type="radio"
                      id="year-4"
                      name="year"
                      value="4th Year"
                      onChange={handleChange}
                      checked={formData.year === "4th Year"}
                      classNameName="form-check-input"
                    />
                    <label htmlFor="year-4" classNameName="form-check-label">
                      4th Year
                    </label>
                  </div>
                </div>
                <div classNameName="px-2 w-1/3">
                  <div classNameName="form-check">
                    <input
                      type="radio"
                      id="year-other"
                      name="year"
                      value="Other"
                      onChange={handleChange}
                      checked={formData.year === "Other"}
                      classNameName="form-check-input"
                    />
                    <label htmlFor="year-other" classNameName="form-check-label">
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div classNameName="mb-4">
              <label classNameName="block text-gray-700 font-medium mb-2">
                Domain Of Internship *
              </label>
              <div classNameName="form-check">
                <input
                  type="radio"
                  id="web-development-basic"
                  name="domain"
                  value="Web Development Basic"
                  onChange={handleChange}
                  checked={formData.domain === "Web Development Basic"}
                  classNameName="form-check-input"
                />
                <label
                  htmlFor="web-development-basic"
                  classNameName="form-check-label">
                  Web Development Basic
                </label>
              </div>
              <div classNameName="form-check">
                <input
                  type="radio"
                  id="full-stack-web-development"
                  name="domain"
                  value="Full Stack Web Development (Using Any Stack)"
                  onChange={handleChange}
                  checked={
                    formData.domain ===
                    "Full Stack Web Development (Using Any Stack)"
                  }
                  classNameName="form-check-input"
                />
                <label
                  htmlFor="full-stack-web-development"
                  classNameName="form-check-label">
                  Full Stack Web Development
                </label>
              </div>
              <div classNameName="form-check">
                <input
                  type="radio"
                  id="app-development"
                  name="domain"
                  value="App Development"
                  onChange={handleChange}
                  checked={formData.domain === "App Development"}
                  classNameName="form-check-input"
                />
                <label htmlFor="app-development" classNameName="form-check-label">
                  App Development
                </label>
              </div>
              <div classNameName="form-check">
                <input
                  type="radio"
                  id="machine-learning"
                  name="domain"
                  value="Machine Learning"
                  onChange={handleChange}
                  checked={formData.domain === "Machine Learning"}
                  classNameName="form-check-input"
                />
                <label htmlFor="machine-learning" classNameName="form-check-label">
                  Machine Learning
                </label>
              </div>
              <div classNameName="form-check">
                <input
                  type="radio"
                  id="data-science"
                  name="domain"
                  value="Java Development"
                  onChange={handleChange}
                  checked={formData.domain === "Java Development"}
                  classNameName="form-check-input"
                />
                <label htmlFor="data-science" classNameName="form-check-label">
                  Java Development
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                classNameName="btn btn-primary w-full rounded-md py-3 px-8 text-center text-base font-semibold text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
