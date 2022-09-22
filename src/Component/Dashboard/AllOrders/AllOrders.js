import React from "react";
import SingleOrder from "./SingleOrder";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import useRefetch from "../../Hooks/useRefetch";
import Loading from "../../Share/Loading";
import { useState } from "react";
import "./allorder.css";
import Pagination from "./Pagination";


function AllOrders() {
  const [orders, loading, refetch] = useRefetch(
    "https://vip-bazar.onrender.com/all-order"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const lastPostindex = currentPage * postsPerPage;
  const firstPostindex = lastPostindex - postsPerPage;
  const currentPost = orders.slice(firstPostindex, lastPostindex);

  const post = [10, 15, 20, 25, 30];
  return (
    <div className="overflow-x-auto">
      {loading && <Loading />}
      <div className="min-w-screen min-h-screen bg-gray-100 flex justify-center font-sans overflow-hidden">
        <div className=" w-full px-5 mt-5 ">
          <section className="flex justify-between items-center flex-row-reverse flex-wrap-reverse max-w-7xl mb-4 gap-x-5 gap-y-3 pl-10 lg:pl-0">
            <select
              onChange={(e) => setPostPerPage(parseInt(e.target.value))}
              className="w-20 py-3 text-center text-lg font-bold text-white bg-clr rounded-lg border-none outline-none" >
              {
                post.map((p, i) =>
                  <option key={i} value={p} className="text-lg outline-none border-none">
                    {p}
                  </option>)
              }
            </select>
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="btn bg-clr border-none hover:bg-green-500 "
              table="table-to-xls"
              filename="tablexls"
              sheet="tablexls"
              buttonText="Download XLS"
            />
          </section>
          <div className="max-w-7xl border-2 w-full overflow-x-auto mx-auto ">
            <table className="table-auto mx-auto" id="table-to-xls">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left min-w-[18rem]">
                    Customer Info
                  </th>
                  <th className="py-3 px-6 text-left min-w-[8rem]">time</th>
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
                {currentPost.map((order, i) => (
                  <SingleOrder
                    i={i}
                    order={order}
                    key={order._id}
                    refetch={refetch}
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            totalPosts={orders?.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default AllOrders;
