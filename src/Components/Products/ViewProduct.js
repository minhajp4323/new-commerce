import React, { useContext, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Data } from "../../Main";
import toast from "react-hot-toast";
import MainNavbar from "../MainNavbar";

const Viewproduct = () => {
  const navigate = useNavigate();
  const { product, login, loginUser } = useContext(Data);
  const { id } = useParams();

  const findviewproduct = product.filter((item) => item.id === Number(id));
  const [btn, setbtn] = useState(true);

  const addCart = () => {
    if (login) {
      const [productget] = findviewproduct;

      const isProductInCart = loginUser.cart.find(
        (item) => item.id === productget.id
      );
      if (!isProductInCart) {
        loginUser.cart.push({ ...productget, qty: 1 });

        toast.success("Your product is added to cart");
      } else {
        toast.error("This product is already in your cart");
        setbtn(false);
      }
    } else {
      navigate("/login");
      toast.error("Please login first");
    }
    // console.log(loginUser?.cart);
  };
  return (
    <>
      <MainNavbar />

      <div className="container mt-4 m-4 ">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5">
            {findviewproduct.map((item) => (
              <Card
                className="w-100"
                key={item.id}
                style={{ border: "2px solid black", padding: "20px" }}
              >
                <Card.Img
                  className="mx-auto"
                  style={{ width: "12rem", height: "10rem" }}
                  variant="top"
                  src={item.imageUrl}
                />
                <Card.Body className="text-center">
                  <Card.Title>{item.name}</Card.Title>
                  <h3 className="text-warning">₹ {item.price}</h3>

                  {btn ? (
                    <Button
                      className="bg-success"
                      variant="primary"
                      onClick={addCart}
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <Button
                      className="bg-danger"
                      variant="primary"
                      onClick={() => navigate("/cart")}
                    >
                      Go To Cart
                    </Button>
                  )}
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewproduct;
