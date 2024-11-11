import { useState } from "react";
import "./LoanForm.css";
import Modal from "./Modal";

const LoanRequestForm = () => {
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    isEmployee: false,
    salaryRange: "",
  });

  return (
    <div>
      <div className="loan-request-form">
        <h2 style={{ textAlign: "center" }}>Requesting a Loan</h2>
        <hr />
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              className="input-data"
              value={loanInputs.name}
              placeholder="Enter Your Name"
              onChange={(event) => {
                setLoanInputs({ ...loanInputs, name: event.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              className="input-data"
              value={loanInputs.phoneNumber}
              placeholder="Enter Your Phone Number"
              onChange={(event) => {
                setLoanInputs({ ...loanInputs, phoneNumber: event.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              className="input-data"
              value={loanInputs.age}
              placeholder="Enter Your Age"
              onChange={(event) => {
                setLoanInputs({
                  ...loanInputs,
                  age: event.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label>Salley</label>
            <select
              value={loanInputs.salaryRange}
              onChange={(event) => {
                setLoanInputs({
                  ...loanInputs,
                  salaryRange: event.target.value,
                });
              }}
            >
              <option disabled>Select</option>
              <option>less than 500$</option>
              <option>between 500$ and 2000$</option>
              <option>above 2000$</option>
            </select>
          </div>
          <div style={{ textAlign: "center" }} className="form-group check">
            <input
              className="checkbox"
              type="checkbox"
              checked={loanInputs.isEmployee}
              onChange={(event) => {
                setLoanInputs({
                  ...loanInputs,
                  isEmployee: event.target.checked,
                });
              }}
            />
            <label>Are You Employee? </label>
          </div>

          <button type="submit">Submit </button>
        </form>
      </div>
      {/* <Modal style={{ display: "none" }} /> */}
    </div>
  );
};

export default LoanRequestForm;
