import React, { useContext, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Data } from "../../Main";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../MainNavbar";

function Men() {
  const navigate = useNavigate();
  const { product } = useContext(Data);
  const menItems = product.filter((item) => item.category === "Men");
  return (
    <div>
      <MainNavbar />

      <h1>Men</h1>
      <div style={{display:"flex"}}>
        {menItems.map((item) => (
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
  );
}

export default Men;
