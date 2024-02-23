import React, { useContext } from "react";
import { Data } from "../Main";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import MainNavbar from "./MainNavbar";

function Search() {
  const { product, search } = useContext(Data);
  const navigate = useNavigate();

  const Search = product.filter((item) => {
    if (!search || search === "") {
      return item;
    } else if (
      item.name &&
      item.name.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    } else {
      return null;
    }
  });

  return (
    <div>
      <MainNavbar />
      <div>
        <div className="d-flex flex-wrap m-3 justify-content-center">
          {Search.map((item) => (
            <Card
              onClick={() => navigate(`/viewproduct/${item.id}`)}
              key={item.id}
              className="m-2"
              style={{
                width: "16rem",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Card.Img
                  className="img-fluid m-2"
                  variant="top"
                  src={item.imageUrl}
                  alt={item.name}
                  style={{
                    height: "16rem",
                    width: "12rem",
                    objectFit: "cover",
                  }}
                />
              </div>
              <Card.Body>
                <h6 className="mt-1">₹ {item.price}</h6>
                <Card.Title
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginTop: "0.5rem",
                  }}
                >
                  {item.name}
                </Card.Title>
                <Button variant="primary" style={{ marginTop: "1rem" }}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
