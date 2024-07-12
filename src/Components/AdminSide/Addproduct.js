import React, { useContext, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Data } from "../../Main";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SideBar from "./SideBar";

const AddProduct = () => {
  let id = 17;
  const navigate = useNavigate();
  const { product, setProduct } = useContext(Data);
  const qtyRef = useRef(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const imageUrlRef = useRef(null);
  const categoryRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const price = parseFloat(priceRef.current.value);
    const qty = parseInt(qtyRef.current.value);

    if (isNaN(price) || isNaN(qty)) {
      toast.error("Invalid price or qty");
      return;
    }

    const newProduct = {
      id: id + 1,
      name: nameRef.current.value,
      price,
      imageUrl: imageUrlRef.current.value,
      category: categoryRef.current.value,
    };

    const newTask = [...product, newProduct];
    setProduct(newTask);
    navigate("/");
    toast.success("Product Added successfully");
  };

  return (
    <div className="d-flex">
      <div>
        <SideBar />
      </div>

      <div className="container mt-5">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h2 className="mb-0">Add a Product</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  ref={nameRef}
                  className="form-control"
                  required
                />
                
              </div>
              

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  ref={priceRef}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">
                  Image URL:
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  ref={imageUrlRef}
                  className="form-control"
                  required
                />
                
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Gender:
                </label>
                <input
                  type="text"
                  id="category"
                  ref={categoryRef}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="qty" className="form-label">
                  Qty:
                </label>
                <input
                  type="number"
                  id="qty"
                  ref={qtyRef}
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
