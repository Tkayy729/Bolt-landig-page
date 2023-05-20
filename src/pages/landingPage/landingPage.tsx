import DriverForm from "../../components/driverForm/DriverForm";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div
      className="container-fluid custom-container p-20 "
      style={{ padding: "20px" }}
    >
      <div className=" row justify-content-center align-items-center">
        <div className="col-lg-7 col-md-7 col-xl-5">
          <div className="container text-white text-start m-auto ">
            <h1 className="col-lg-6 col-md-9 col-xl-8 ">
              Make money driving with Bolt{" "}
            </h1>
            <small className="font-weight-light col-lg-12 col-md-12 col-xl-2 mb-5">
              Become a Bolt driver, set your schedule and earn extra money by{" "}
              <br />
              driving!
            </small>
            <br />
            <br />
            <small className="col-sm-0 col-md-0">Learn more ...</small>
          </div>
        </div>
        <div
          style={{ padding: "25px" }}
          className="col-lg-5 col-md-5 col-xl-4 center bg-white rounded-4 justify-content-center align-items-center "
        >
          <DriverForm />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
