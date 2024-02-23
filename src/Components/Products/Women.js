import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Data } from "../../Main";
import MainNavbar from "../MainNavbar";

function Women() {
  const navigate = useNavigate();
  const { product } = useContext(Data);
  const womensItem = product.filter((item) => item.category === "Women");
  return (
    <div>
      <MainNavbar />
        <h1>Women</h1>
      <div style={{display:"flex"}}>
        {womensItem.map((item) => (
          <CardGroup className="col-7 col-md-3 ">
            <Card className="m-2 p-4" key={item.id}>
              <Card.Img src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>₹{item.price} </Card.Text>
                <Button onClick={() => navigate(`/viewproduct/${item.id}`)}>
                  View this Product 
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        ))}
      </div>
    </div>
  );
}

export default Women;
