import { cities } from "../../utils/cities";
import "./DriverForm.css";

const handleSubmit = () => {
  console.log("submitted");
};

const DriverForm = () => {
  return (
    <>
      <div className="row justify-content-start ">
        <p className="font-weight-bolder fs-2">Become a Bolt driver</p>
        <small>
          If you have multiple cars or drivers{" "}
          <a className="t-color text-decoration-none">sign up as fleet owner</a>
        </small>
      </div>
      <form
        onSubmit={handleSubmit}
        className="form-row needs-validation"
        noValidate
      >
        <div className="form-group row justify-content-center col-md-12">
          <label className="my-2" htmlFor="email">
            Email
          </label>
          <input
            placeholder="Email"
            type="email"
            className="form-control"
            style={{ height: "50px" }}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber" className="my-2">
            Phone Number:
          </label>

          <div className="input-group row justify-content-center col-12 ">
            <select
              style={{ height: "50px" }}
              id="countryCode"
              className=" form-select col-4"
              placeholder="+372"
            >
              <option value="+1">+372 </option>
              <option value="+44">+233</option>
              <option value="+91">+91 </option>
            </select>
            <input
              style={{ height: "50px" }}
              type="text"
              id="phoneNumber"
              className="form-control col-8"
              placeholder="Phone"
            />
          </div>
        </div>

        <div className="form-group row justify-content-center col-md-12 ">
          <label className="my-2" htmlFor="email">
            City
          </label>

          <select style={{ height: "50px" }} className="form-select " required>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-check justify-content-center col-md-12  my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            required
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I agree to Bolt's Term of Service and Privacy Policy
          </label>
        </div>
        <div className="row justify-content-center col-md-12 ">
          <button
            type="submit"
            style={{ height: "50px" }}
            className="btn btn-success btn  d-lg-block button-color w-5 border-0 rounded-5 "
          >
            SIGN UP AS A DRIVER
          </button>
        </div>
      </form>
    </>
  );
};

export default DriverForm;
