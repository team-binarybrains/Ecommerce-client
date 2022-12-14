import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const SingleManageProduct = ({ product, refetch }) => {
  const setDeleteproducts = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      axios.delete(`http://api.com.quickinun.com/server/product/${id}`).then(({ data }) => {
        // console.log(data);
        refetch();
        toast.success("Successfully delete the user.");
      });
    }
  };

  return (
    <div className="card w-[98%] mx-auto lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="max-w-[450px] h-[270px] mx-auto" src={`http://api.com.quickinun.com/server/file/${product?.image}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>$ {product.newPrice}</p>
        <p> {product.details}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => setDeleteproducts(product._id)}
            htmlFor="product-dalete-modal"
            className="btn btn-error text-white"
          >
            <FontAwesomeIcon className="mr-2" icon={faTrash}></FontAwesomeIcon>{" "}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleManageProduct;
