import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Data } from "../Main";
import { FaRegTrashCan } from "react-icons/fa6";
import MainNavbar from "./MainNavbar";



import {
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Cart() {
  const { setvieworder, loginUser, product, setCart } = useContext(Data);
  const navigate = useNavigate();

  const [cartuser, setCartuser] = useState([]);
  useEffect(() => {
    setCartuser(loginUser?.cart);
  }, [loginUser?.cart]);

  const removeTask = (x) => {
    const newTask = cartuser.filter((item) => item.id !== x);
    setCartuser(newTask);
    loginUser.cart = newTask;
    toast.error("your product is removed");
  };
  const increment = (x) => {
    const proprice = product.find((item) => item.id === x);
    const updatecart = cartuser.map((item) => {
      if (item.id === x) {
        if (item.qty <= item.stock) {
          item.qty += 1;
          item.price = parseFloat(proprice.price) * item.qty;
        }
      }
      return item;
    });
    setCart(updatecart);
  };
  const decrement = (x) => {
    const proprice = product.find((item) => item.id === x);
    const updatecart = cartuser.map((item) => {
      if (item.id === x) {
        if (item.qty <= item.stock && item.qty > 1) {
          item.qty -= 1;
          item.price = parseFloat(proprice.price) * item.qty;
        }
      }
      return item;
    });
    setCart(updatecart);
  };
  const reducer = cartuser?.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );
  const clear = () => {
    loginUser.cart = [];
    setCartuser([]);
    toast.success("Your cart is empty");
  };
  const order = () => {
    navigate("/payment");
    setvieworder(cartuser);
    if (loginUser) {
      loginUser.cart = [];
    }
  };
  // console.log(loginUser?.cart);

  return (
    <div>
        <MainNavbar />

      <section className="nav h-100 w-50">
        <MDBContainer className="py-5 h-100 justify-content-center align-items-center ">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0  text-black">
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-warning"></span>
                    <a href="#!">
                      {reducer}
                      <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>
              {loginUser?.cart?.map((item) => (
                <MDBCardBody className="p-4">
                  <MDBRow className="justify-content-between align-items-center">
                    <MDBCol md="12" lg="6" xl="4">
                      <MDBCardImage
                        className="rounded-3"
                        fluid
                        src={item.imageUrl}
                        alt="Prodcuts"
                      />
                    </MDBCol>
                    <MDBCol md="12" lg="6" xl="8">
                      <p className="lead fw-normal mb-2">{item.name}</p>
                      <p>
                        <span className="text-muted">{item.category} </span>
                      </p>

                      <p className="text-dark bold">₹ {item.price}</p>
                    </MDBCol>
                    <MDBCol
                      md="12"
                      lg="6"
                      xl="4"
                      className="d-flex align-items-center justify-content-around"
                    >
                      <button
                        className="border border-secondary p-2 m-1"
                        varient="danger"
                        onClick={() => decrement(item.id)}
                      >
                        {" "}
                        -{" "}
                      </button>

                      <span className="border border-secondary p-3">
                        {item.qty}
                      </span>
                      <button
                        className="border border-secondary p-2 m-1"
                        varient="danger"
                        onClick={() => increment(item.id)}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </MDBCol>
                    <MDBCol md="12" lg="6" xl="4" className="text-end">
                      <a>
                        
                      <FaRegTrashCan onClick={()=>removeTask(item.id)} />


                      </a>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <h1>Total Amount: ₹ {reducer} </h1>
      <Button className="bg-info m-2 p-2" onClick={() => clear()}>
        Clear Cart
      </Button>
      <Button className="bg-success m-2 p-2" onClick={order}>
        Buy All
      </Button>
    </div>
  );
}

export default Cart;
