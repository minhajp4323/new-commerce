import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { toast } from "react-hot-toast";
import MainNavbar from "./MainNavbar";

// import Navbar2 from '../components/Navbar/Navbar2';

const Payment = () => {
  return (
    <>
      <MainNavbar />

      {/* <Navbar2/> */}
      <MDBContainer className="py-5" fluid style={{}}>
        <MDBRow className=" d-flex justify-content-center">
          <MDBCol md="10" lg="8" xl="5">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <div className="text-center mb-4" id="start">
                  <h3>Settings</h3>
                  <h6>Payment</h6>
                </div>
                <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                    alt="Loading.."
                  />
                  <div className="flex-fill mx-3">
                    <div className="form-outline">
                      <MDBInput
                        label="Card Number"
                        id="form1"
                        type="text"
                        size="lg"
                        value="**** **** 4569"
                      />
                    </div>
                  </div>
                  <a href="#start">Remove card</a>
                </div>
                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="Loading..."
                  />
                  <div className="flex-fill mx-3">
                    <div className="form-outline">
                      <MDBInput
                        label="Card Number"
                        id="form2"
                        type="text"
                        size="lg"
                        value="**** **** 4569"
                      />
                    </div>
                  </div>
                  <a href="#!">Remove card</a>
                </div>
                <p className="fw-bold mb-4">Add new card:</p>
                <MDBInput
                  label="Cardholder's Name"
                  id="form3"
                  type="text"
                  size="lg"
                  value="Name"
                />
                <MDBRow className="my-4">
                  <MDBCol size="7">
                    <MDBInput
                      label="Card Number"
                      id="form4"
                      type="text"
                      size="lg"
                      value="**** **** 4569"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBInput
                      label="Expire"
                      id="form5"
                      type="password"
                      size="lg"
                      placeholder="MM/YYYY"
                    />
                  </MDBCol>
                  <MDBCol size="2">
                    <MDBInput
                      label="CVV"
                      id="form6"
                      type="password"
                      size="lg"
                      placeholder="CVV"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn
                  color="success"
                  size="lg"
                  block
                  onClick={() =>
                    toast.success("Your product will be shipped soon")
                  }
                >
                  Pay
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Payment;
