import React, { useState } from "react";
import FormEntry from "./FormEntry";
import data from "./forms_data";
import "./Forms.css";
function Forms() {
  const [formData, setFormData] = useState(data);

  const filterData = (e) => {
    let filterData = data.filter((form) => form.category === e.target.name);
    if (filterData.length === 0) {
      filterData = data;
    }
    setFormData(filterData);
  };

  const allData = (e) => {
    setFormData(data);
  };

  return (
    <>
      <div className="forms__component flex">
        <div className="form-container">
          <div className="forms__component-title">
            <h2>FORMS</h2>
            <h3>Filter by category</h3>
            <div className="forms-filter">
              <button
                onClick={allData}
                name="all"
                className="filter-btn btn-outline"
              >
                All
              </button>
              <button
                onClick={filterData}
                name="contact"
                className="filter-btn btn-outline"
              >
                Contact
              </button>
              <button
                onClick={filterData}
                name="register"
                className="filter-btn btn-outline"
              >
                Register
              </button>
              <button
                onClick={filterData}
                name="login"
                className="filter-btn btn-outline"
              >
                Login
              </button>
            </div>
          </div>
          <div className="entry-wrapper">
            {formData.map((entry) => {
              return <FormEntry form={entry} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
