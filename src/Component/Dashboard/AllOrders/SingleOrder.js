import axios from "axios";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const SingleOrder = ({ order, refetch, i }) => {


  const confirming = () => {
    const confirmed = window.confirm('Are you sure ?');
    if (confirmed) {
      axios.put(`https://vip-bazar.onrender.com/order/${order._id}`, { confirm: true }).then(({ data }) => {
        if (data?.acknowledged) {
          toast.success("Order confirmed", { theme: "dark" });
          refetch();
        }
      });
    } else {
      return 0;
    }
  };

  const deleting = () => {
    axios
      .delete(`https://vip-bazar.onrender.com/cancel-order/${order._id}`)
      .then(({ data }) => {
        if (data?.acknowledged) {
          toast.error("Order deleted successfully", { theme: "dark" });
          refetch();
        }
      });
  };

  const holding = ()=> {
    const confirmed = window.confirm('Are you sure ?');
    if (confirmed) {
      axios.put(`http://localhost:5000/order/${order._id}`, { hold: true }).then(({ data }) => {
        if (data?.acknowledged) {
          toast.success("Order hold", { theme: "dark" })
          refetch();
        }
      });
    } else {
      return 0;
    }
  }

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-4 text-left whitespace-nowrap">
        <div className="flex items-center"><span className="mr-2 font-bold">{i+1}.</span> {order?.name}</div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex gap-0 flex-col">
          <span>{order?.address};</span>
          <p>{order?.phone}</p>
        </div>
      </td>
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
      <td className="py-3 px-6 text-center">
        <p>
          <b className="text-lg font-bold">৳</b>{" "}
          {order?.products?.reduce(
            (total, product) => total + product?.price,
            0
          )}
        </p>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center gap-2">
          {order?.confirm ? (
            <>
              <FaCheck className="h-6 w-10 py-1 rounded-full text-white bg-clr" />
              {
                order?.hold ?
                <FaDotCircle
                className="h-6 w-6 rounded-full bg-white text-yellow-500" />:
                <button
                  onClick={holding}
                  className="btn btn-xs bg-yellow-500 hover:bg-yellow-500 border-0">
                  Hold
                </button>
              }
            </>
          ) : (
            <button
              onClick={confirming}
              className="btn btn-xs bg-clr hover:bg-clr border-0">
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
