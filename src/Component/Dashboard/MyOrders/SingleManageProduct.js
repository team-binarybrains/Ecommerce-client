import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleManageProduct = ({ product }) => {
  return (
    <div className="card w-[98%] mx-auto lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[450px] h-[270px]" src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>$ {product.price}</p>
        <p> {product.details}</p>
        <div className="card-actions justify-end">
          <label
            // onClick={() => setDeleteproducts(product)}
            for="product-dalete-modal"
            className="btn btn-error text-white"
          >
            <FontAwesomeIcon className="mr-2" icon={faTrash}></FontAwesomeIcon>{" "}
            Delete
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleManageProduct;
