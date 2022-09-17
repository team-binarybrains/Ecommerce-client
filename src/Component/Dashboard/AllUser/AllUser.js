import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SingleUser from "./SingleUser";

function AllUser() {


  const [show, setShow] = useState(8);
  const [search, setSearch] = useState("");
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("http://localhost:5000/alluser", {
      method: "GET",
    }).then((res) => res.json())
  );
  const handleLoadmore = () => {
    setShow((visible) => visible + 4);
  };

  return (
    <body class="antialiased font-sans bg-gray-200">
      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Users</h2>
          </div>
          <div class="my-2 flex sm:flex-row flex-col">
            <div class="block relative">
              <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  class="h-4 w-4 fill-current text-gray-500"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                </svg>
              </span>
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      User Email
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Rol
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created at
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Make Admin
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Remove User
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    ?.slice(0, show)
                    ?.filter((user) =>
                      user.email.toLowerCase().includes(search)
                    )
                    ?.map((user) => (
                      <SingleUser 
                      user={user}
                      refetch={refetch}
                      />
                    ))}
                </tbody>
              </table>
              <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span class="text-xs xs:text-sm text-gray-900">
                  Showing 1 to {users?.length} of {users?.length} Entries
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                  <button
                    onClick={handleLoadmore}
                    class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                  >
                    Load More...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default AllUser;
