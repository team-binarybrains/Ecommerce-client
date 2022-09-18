import React from "react";
import SingleOrder from "./SingleOrder";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function AllOrders() {
  return (
    <div class="overflow-x-auto">
      <div class="min-w-screen min-h-screen bg-gray-100 flex justify-center  font-sans overflow-hidden">
        <div class="w-full lg:w-5/6 mt-5 ">
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="btn   btn-m bg-clr border-none hover:bg-green-500 float-right "
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Download as XLS"
          />
          <div className="">
            <table class="min-w-max w-full table-auto mt-14" id="table-to-xls">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">Project</th>
                  <th class="py-3 px-6 text-left">Client</th>
                  <th class="py-3 px-6 text-center">Users</th>
                  <th class="py-3 px-6 text-center">Status</th>
                  <th class="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <SingleOrder />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllOrders;
