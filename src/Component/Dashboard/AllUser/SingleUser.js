import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const SingleUser = ({ user, refetch }) => {
  const makeAdmin = () => {
    axios
      .patch(`http://localhost:5000/make-admin/${user.email}`)
      .then((res) => {
        const { data } = res;
        // console.log(data);
        refetch();
        toast.success("Successfully made an admin.");
      });
  };

  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      axios.delete(`http://localhost:5000/delete-user/${id}`).then((res) => {
        const { data } = res;
        // console.log(data);
        refetch();
        toast.success("Successfully delete the user.");
      });
    }
  };

  return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">{user.email}</p>
          </div>
        </div>
      </td>

      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.role === "admin" ? (
          <p class="text-gray-900 whitespace-no-wrap">Admin</p>
        ) : (
          <p class="text-gray-900 whitespace-no-wrap">User</p>
        )}
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <button onClick={makeAdmin} class="relative">
            Admin
          </button>
        </span>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            class="absolute inset-0 bg-red-600  opacity-50 rounded-full"
          ></span>
          <button
            onClick={() => handleDeleteUser(user._id)}
            class="relative text-white"
          >
            Remove
          </button>
        </span>
      </td>
    </tr>
  );
};

export default SingleUser;
