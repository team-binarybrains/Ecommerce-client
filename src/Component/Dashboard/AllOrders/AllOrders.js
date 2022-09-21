import React, { useEffect } from "react";
import SingleOrder from "./SingleOrder";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import useRefetch from "../../Hooks/useRefetch";
import Loading from "../../Share/Loading";
import { useState } from "react";
import { useToast } from "react-toastify";
import "./allorder.css";
function AllOrders() {
  const [orders, loading, refetch] = useRefetch(
    "https://vip-bazar.onrender.com/all-order"
  );
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.result;
        const pages = Math.ceil(count / 20);
        setPageCount(pages);
      });
  }, [page]);

  return (
    <div className="overflow-x-auto">
      {loading && <Loading />}
      <div className="min-w-screen min-h-screen bg-gray-100 flex justify-center  font-sans overflow-hidden">
        <div className=" w-full px-5 mt-5 ">
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="btn flex mx-auto lg:ml-[150px]  mb-4  btn-m bg-clr border-none hover:bg-green-500  "
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Download as XLS"
          />
          <div className="max-w-7xl border-2 w-full overflow-x-auto mx-auto ">
            <table className="table-auto mx-auto" id="table-to-xls">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left min-w-[12rem]">
                    Customer Name
                  </th>
                  <th className="py-3 px-6 text-left min-w-[8rem]">Address</th>
                  <th className="py-3 px-6 text-left min-w-[8rem]">time</th>
                  <th className="py-3 px-6 text-center min-w-[10rem]">
                    Mobile
                  </th>
                  <th className="py-3 px-6 text-center min-w-[12rem]">
                    Product & Quantity
                  </th>
                  <th className="py-3 px-6 text-center min-w-[9rem]">
                    Total price
                  </th>
                  <th className="py-3 px-6 text-center min-w-[10rem]">
                    Confirm
                  </th>
                  <th className="py-3 px-6 text-center min-w-[10rem]">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {orders.map((order) => (
                  <SingleOrder
                    order={order}
                    key={order._id}
                    refetch={refetch}
                  />
                ))}
                <div className="flex justify-center items-center mt-6">
                  {[...Array(pageCount).keys()].map((number) => (
                    <button
                      onClick={() => setPage(number)}
                      className={
                        page === number ? "paigination" : "paiginationnone"
                      }
                    >
                      {number + 1}
                    </button>
                  ))}
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllOrders;
