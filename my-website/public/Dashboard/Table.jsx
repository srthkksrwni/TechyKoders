import React, { useState } from "react";

export default function Table() {
  // State to manage the selected radio button
  const [selectedRadio, setSelectedRadio] = useState("btnradio1");

  // Function to handle radio button selection
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div className="text-center mt-5">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group">
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          checked={selectedRadio === "btnradio1"}
          onChange={handleRadioChange}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          Radio 1
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          checked={selectedRadio === "btnradio2"}
          onChange={handleRadioChange}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          Radio 2
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
          checked={selectedRadio === "btnradio3"}
          onChange={handleRadioChange}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
          Radio 3
        </label>
      </div>
    </div>
  );
}
