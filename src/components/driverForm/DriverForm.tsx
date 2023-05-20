import { useState } from "react";
import { cities } from "../../utils/cities";
import "./DriverForm.css";
import { Driver } from "../../utils/Driver";
import MyButton from "../myButton/MyButton";

const DriverForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [city, setCity] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const phoneNumber = countryCode + phone;

  const handleChangeBox
   = () => {
    setIsChecked(!isChecked);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const validateEmail = (email: string) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isEmailValid = isTouched && !validateEmail(email);
  const isCheckboxValid = !isChecked && isTouched;
  const isPhoneValid = isTouched && phoneNumber.trim() === '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      email.trim() == "" ||
      phone.trim() == "" ||
      countryCode.trim() == "" ||
      city.trim() == ""
    ) {
      return null;
    }

    const isValidEmail = validateEmail(email);

    setIsValid(isValidEmail);

    const newDriver: Driver = new Driver(email, phoneNumber, city);
    console.log(newDriver);
  };

  return (
    <>
      <div className="row justify-content-start ">
        <p className="font-weight-bolder fs-2">Become a Bolt driver</p>
        <small>
          If you have multiple cars or drivers{" "}
          <a className="t-color text-decoration-none">sign up as fleet owner</a>
        </small>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group row justify-content-center col-md-12">
          <label className="my-1" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
            value={email}
            placeholder="Email"
            type="email"
            className={`form-control ${isEmailValid ? "is-invalid" : ""}`}
            style={{ height: "50px" }}
          />
          {isEmailValid && (
            <small className="text-danger">Email is required!</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber" className="my-1">
            Phone Number:
          </label>

          <div className="input-group row justify-content-center col-12 ">
            <select
              style={{ height: "50px" }}
              id="countryCode"
              // className=" form-select col-4"
              className={`form-control ${isPhoneValid ? 'is-invalid' : ''}`}
              onChange={(e) => setCountryCode(e.target.value)}
              value={countryCode}
            >
              <option value="372">+372 </option>
              <option value="+233">+233</option>
              <option value="+91">+91 </option>
            </select>
            <input
              onChange={(e) => setPhone(e.target.value)}
              onBlur={handleBlur}
              value={phone}
              style={{ height: "50px" }}
              type="text"
              id="phoneNumber"
              // className="form-control col-8"
              className={`form-control ${isPhoneValid ? 'is-invalid' : ''}`}
              placeholder="Phone"
            />
          </div>
         
            <div className="invalid-feedback">
              Please enter a phone number.
            </div>
         
        </div>

        <div className="form-group row justify-content-center col-md-12 ">
          <label className="my-1" htmlFor="email">
            City
          </label>

          <select
            onChange={(e) => setCity(e.target.value)}
            value={city}
            style={{ height: "50px" }}
            className="form-select "
            required
          >
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-check justify-content-center col-md-12  my-3">
          <input
            className={`form-check-input ${
              isCheckboxValid ? "is-invalid" : ""
            }`}
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={isChecked}
            onChange={handleChangeBox}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I agree to Bolt's{" "}
            <a className="text-decoration-none text-success">Term of Service</a>{" "}
            and{" "}
            <a className="text-decoration-none text-success">Privacy Policy</a>
          </label>
        </div>
        <div className="row justify-content-center col-md-12 ">
          {/* <button
            type="submit"
            style={{ height: "50px" }}
            className="btn btn-success btn  d-lg-block button-color w-5 border-0 rounded-5 "
          >
            SIGN UP AS A DRIVER
          </button> */}
          <MyButton 
            style={{ height: "50px" }}
            className="btn btn-success btn  d-lg-block button-color w-5 border-0 rounded-5 "
            title="SIGN UP AS A DRIVER"
          />
        </div>
      </form>
    </>
  );
};

export default DriverForm;
