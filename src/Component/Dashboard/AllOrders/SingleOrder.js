import axios from "axios";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const SingleOrder = ({ order, refetch, i, currentPage, postsPerPage }) => {
  const confirming = () => {
    axios
      .put(`https://api.com.quickinun.com/server/order/${order._id}`, { confirm: true })
      .then(({ data }) => {
        if (data?.acknowledged) {
          toast.success("Order confirmed", { theme: "dark" });
          refetch();
        }
      });
  };

  const deleting = () => {
    const confirmed = window.confirm("Are you sure to delete ?");
    if (confirmed) {
      axios
        .delete(`https://api.com.quickinun.com/server/cancel-order/${order._id}`)
        .then(({ data }) => {
          if (data?.acknowledged) {
            toast.error("Order deleted successfully", { theme: "dark" });
            refetch();
          }
        });
    } else {
      return 0;
    }
  };

  const holding = () => {
    axios
      .put(`https://api.com.quickinun.com/server/order/${order._id}`, { hold: true })
      .then(({ data }) => {
        if (data?.acknowledged) {
          toast.success("Order hold", { theme: "dark" });
          refetch();
        }
      });
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">
        <div className="flex items-center gap-x-2">
          <span className="mr-2 font-bold">
            {(currentPage - 1) * postsPerPage + (i + 1)}.
          </span>
          <div className="flex gap-2 flex-col">
            <span>{order?.name}</span>
            <span>{order?.address};</span>
            <p>{order?.phone}</p>
          </div>
        </div>
      </td>{" "}
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span>{order?.time?.split("GMT")[0]}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center space-y-5">
        {order?.products.map((product) => (
          <div
            key={product._id}
            className="flex gap-2 justify-between items-center"
          >
            <p className="text-center">{product?.name}</p>
            <span className="bg-clr text-white font-bold p-1  rounded-full text-xs">
              x{product?.quantity}
            </span>
          </div>
        ))}
      </td>
      <td className="py-3 px-4 text-center flex flex-col gap-1 justify-center">
        <p className="text-lg">
          <b className="font-bold">৳</b>{" "}
          {order?.products?.reduce(
            (total, product) => total + product?.price * product?.quantity,
            0
          )}
        </p>
        <small className={`font-bold tracking-widest text-clr`}>
          {order?.delivery?.place} :
          <span className="tracking-normal ml-1">{order?.delivery?.cost}</span>
        </small>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center gap-2">
          {order?.confirm ? (
            <>
              <FaCheck className="h-6 w-10 py-1 rounded-full text-white bg-clr" />
              {order?.hold ? (
                <FaDotCircle className="h-6 w-6 rounded-full bg-white text-yellow-500" />
              ) : (
                <button
                  onClick={holding}
                  className="btn btn-xs bg-yellow-500 hover:bg-yellow-500 border-0"
                >
                  Hold
                </button>
              )}
            </>
          ) : (
            <button
              onClick={confirming}
              className="btn btn-xs bg-clr hover:bg-clr border-0"
            >
              Confirm
            </button>
          )}
        </div>
      </td>
      <td>
        <div className="flex item-center justify-center gap-2">
          <button
            onClick={deleting}
            className="btn btn-xs bg-red-500 hover:bg-red-500 border-0"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SingleOrder;
