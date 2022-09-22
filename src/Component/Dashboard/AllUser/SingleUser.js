import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const SingleUser = ({ user, refetch }) => {
  const makeAdmin = () => {
    axios
      .patch(`https://vip-bazar.onrender.com/make-admin/${user.email}`)
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
      axios.delete(`https://vip-bazar.onrender.com/delete-user/${id}`).then((res) => {
        const { data } = res;
        // console.log(data);
        refetch();
        toast.success("Successfully delete the user.");
      });
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
          </div>
        </div>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.role === "admin" ? (
          <p className="text-gray-900 whitespace-no-wrap">Admin</p>
        ) : (
          <p className="text-gray-900 whitespace-no-wrap">User</p>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <button onClick={makeAdmin} className="relative">
            Admin
          </button>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-red-600  opacity-50 rounded-full"
          ></span>
          <button
            onClick={() => handleDeleteUser(user._id)}
            className="relative text-white"
          >
            Remove
          </button>
        </span>
      </td>
    </tr>
  );
};

export default SingleUser;
