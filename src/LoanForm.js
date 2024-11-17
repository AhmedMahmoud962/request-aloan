import { useState } from "react";
import "./LoanForm.css";
import Modal from "./Modal";
import MyInput from "./components/MyInput";

const LoanRequestForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    salaryRange: "",
    isEmployee: false,
  });
  const handelFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null);
    console.log("loanInputs");
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("Age should be between 18 and 100");
    } else if (phoneNumber.length < 10 || phoneNumber.length >= 12) {
      setErrorMessage("Phone number is not valid");
    }
    setShowModal(true);
  };
  const handleDivClick = (event) => {
    console.log("divClick");
    if (showModal) {
      setShowModal(false);
    }
  };
  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "" ||
    loanInputs.salaryRange === "" ||
    loanInputs.isEmployee === false;
  // let btnClasses = "";
  // if (btnIsDisabled) {
  //   btnClasses = "disabled";
  // } else {
  //   btnClasses = "";
  // }
  const handlePhoneNumberInputChange = (value) => {
    setLoanInputs({ ...loanInputs, phoneNumber: value });
  };
  const handleAgeInputChange = (value) => {
    setLoanInputs({ ...loanInputs, age: value });
  };
  const handleNameInputChange = (value) => {
    setLoanInputs({ ...loanInputs, name: value });
  };
  return (
    <div onClick={handleDivClick}>
      <div className="loan-request-form">
        <h2 style={{ textAlign: "center" }}>Requesting a Loan</h2>
        <hr />
        <form>
          {/* <div className="form-group">
            <label>Name</label>
            <input
              className="input-data"
              value={loanInputs.name}
              placeholder="Enter Your Name"
              onChange={(event) => {
                setLoanInputs({ ...loanInputs, name: event.target.value });
              }}
            />
          </div> */}
          <MyInput
            inputName="Name"
            value={loanInputs.name}
            handleChange={handleNameInputChange}
          />
          <MyInput
            inputName="Age"
            value={loanInputs.age}
            handleChange={handleAgeInputChange}
          />
          <MyInput
            inputName="Phone Number"
            value={loanInputs.phoneNumber}
            handleChange={handlePhoneNumberInputChange}
          />
          {/* <div className="form-group">
            <label>Phone Number</label>
            <input
              type="number"
              className="input-data"
              value={loanInputs.phoneNumber}
              placeholder="Enter Your Phone Number"
              onChange={(event) => {
                setLoanInputs({
                  ...loanInputs,
                  phoneNumber: event.target.value,
                });
              }}
            />
          </div> */}
          {/* <div className="form-group">
            <label>Age</label>
            <input
              type="number"
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
          </div> */}
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

          <button
            type="submit"
            disabled={btnIsDisabled}
            onClick={handelFormSubmit}
            className={btnIsDisabled ? "disabled" : ""}
          >
            Submit Request
          </button>
        </form>
      </div>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
};

export default LoanRequestForm;
