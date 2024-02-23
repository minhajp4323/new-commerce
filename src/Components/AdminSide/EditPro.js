import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../Main";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";

const EditPro = () => {
  const { id } = useParams();
  const nameRef = useRef(null);
  const stockRef = useRef(null);
  const priceRef = useRef(null);

  const { product, setProduct } = useContext(Data);
  const findval = product.find((item) => item.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: findval.name,
    stock: findval.stock,
    price: findval.price,
  });

  const handleSave = () => {
    const updatedName = nameRef.current.value;
    const updatedStock = stockRef.current.value;
    const updatedPrice = priceRef.current.value;

    if (!updatedName.trim() || !updatedStock.trim() || !updatedPrice.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setFormData({
      name: updatedName,
      stock: updatedStock,
      price: updatedPrice,
    });

    const updatedProduct = product.map((item) =>
      item.id === parseInt(id)
        ? {
            ...item,
            name: updatedName,
            stock: updatedStock,
            price: updatedPrice,
          }
        : item
    );

    setProduct(updatedProduct);

    toast.success("Product updated");
  };

  return (
    <div style={{ width: "100%", height: "40vh" }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              <b>Name</b>
            </th>
            <th scope="col">
              <b> Price</b>
            </th>
            <th scope="col">
              <b>Stock</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr key={findval.id}>
            <td>
              {" "}
              <input
                type="text"
                ref={nameRef}
                defaultValue={formData.name}
              />{" "}
            </td>
            <td>
              <input
                type="number"
                ref={priceRef}
                defaultValue={formData.price}
              />
            </td>
            <td>
              <input
                type="number"
                ref={stockRef}
                defaultValue={formData.stock}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-success m-2 mt-5"
        onClick={handleSave}
      >
        Save
      </button>
      <button type="button" className="btn btn-danger m-2 mt-5">
        Discard
      </button>
    </div>
  );
};

export default EditPro;
