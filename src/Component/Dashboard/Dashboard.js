import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  AiOutlineAppstoreAdd } from "react-icons/ai";
import { TiThSmall } from "react-icons/ti";
import { IoTicket } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { faChevronRight, } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

  return (
    <div className="mx-auto">
      <div className="drawer drawer-mobile">
        <input id="open-dashboard-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col">
          {/* <!-- Page content here --> */}
          <div className="text-left mt-4 z-[999] fixed">
            <label htmlFor="open-dashboard-menu" className="rounded inline-block cursor-pointer text-white lg:hidden z-50"><span className="text-2xl bg-clr px-4 py-2 rounded shadow-2xl">
              <FontAwesomeIcon icon={faChevronRight} /> </span></label>
          </div>
          <div className="text-center ">
            <div id="header" className=''>
            </div>
            <div className="text-left px-3">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <div className="drawer-side w-[100%] lg:w-[260px]">
          <label htmlFor="open-dashboard-menu" className="drawer-overlay "></label>
          <ul className="menu overflow-y-auto  bg-[#1e293b] gap-y-5 py-5 px-3 border-r-1 w-[50%] lg:w-[100%] border-r-1 shadow-lg  text-white">
            {/* <!-- Sidebar content here --> */}

            {/* Route for admin */}
            <li className="text-base hover:bg-[#0f172a]  rounded">
              <Link
                className="flex items-center "
                to={"/dashboard/all-users"}
              >
                <FaUsers className="text-xl" />
                <span className=" font-bold"> ALL USERS</span>
              </Link>
            </li>

            <li className="text-base hover:bg-[#0f172a]  rounded ">
              <Link
                className="flex items-center"
                to={"/dashboard/all-order"}
              >
                <TiThSmall className="text-xl" />
                <span className=" font-bold"> ALL ORDERS</span>
              </Link>
            </li>

            <li className="text-base hover:bg-[#0f172a]  rounded">
              <Link
                className="flex items-center"
                to={"/dashboard/add-product"}
              >
                <AiOutlineAppstoreAdd className="text-xl" />
                <span className="font-bold">ADD PRODUCT</span>
              </Link>
            </li>


            {/* Route for user */}
            <li className="text-base hover:bg-[#0f172a]  rounded">
              <Link
                className="flex items-center"
                to={"/dashboard/my-orders"}
              >
                <IoTicket className="text-xl" />
                <span className="font-bold">MY ORDERS</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;