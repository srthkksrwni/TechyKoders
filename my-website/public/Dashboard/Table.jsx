import React, { useState } from "react";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

export default function Table() {
  // State to manage the selected radio button
  const [selectedRadio, setSelectedRadio] = useState("btnradio1");

  // Function to handle radio button selection
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div classNameName="text-center mt-5">
      <div
        classNameName="btn-group"
        role="group"
        aria-label="Basic radio toggle button group">
        <input
          type="radio"
          classNameName="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          checked={selectedRadio === "btnradio1"}
          onChange={handleRadioChange}
        />
        <label classNameName="btn btn-outline-primary" htmlFor="btnradio1">
          Radio 1
        </label>

        <input
          type="radio"
          classNameName="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          checked={selectedRadio === "btnradio2"}
          onChange={handleRadioChange}
        />
        <label classNameName="btn btn-outline-primary" htmlFor="btnradio2">
          Radio 2
        </label>

        <input
          type="radio"
          classNameName="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
          checked={selectedRadio === "btnradio3"}
          onChange={handleRadioChange}
        />
        <label classNameName="btn btn-outline-primary" htmlFor="btnradio3">
          Radio 3
        </label>
      </div>
      <div>{selectedRadio === "btnradio1" && <Table1 />}</div>
      <div>{selectedRadio === "btnradio2" && <Table2 />}</div>
      <div>{selectedRadio === "btnradio3" && <Table3 />}</div>
    </div>
  );
}
