import React, { useContext } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Data } from "../../Main";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../MainNavbar";

function Shop() {
  const navigate = useNavigate();
  const { product } = useContext(Data);
  return (
    <>
      <MainNavbar />

      <div className="container-pro">
        <div className="row">
          <h1>Products</h1>
          {product.map((item) => (
            <CardGroup className="col-7 col-md-3 ">
              <Card className="m-2 p-4" key={item.id}>
                <Card.Img src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>₹{item.price} </Card.Text>
                  <Button onClick={() => navigate(`/viewproduct/${item.id}`)}>
                    View Product
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
