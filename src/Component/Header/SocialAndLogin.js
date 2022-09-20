import React from "react";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPinterestP, FaUser } from "react-icons/fa";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const SocialAndLogin = ({ className }) => {
  const [user] = useAuthState(auth);
  const handelSignOut = () => {
    signOut(auth);
  };

  return (
    <div className={className}>
      {/* <nav className="flex justify-center items-center gap-5 text-dark">
        <GrFacebookOption className="cursor-pointer" />
        <GrTwitter className="cursor-pointer" />
        <GrLinkedinOption className="cursor-pointer" />
        <FaPinterestP className="cursor-pointer" />
      </nav> */}
      {/* <div className="divider lg:divider-horizontal my-0" /> */}
      {/* auth */}

      {user ? (
        <button
          className="nav-link text-red-500 font-bold hover:text-red-700 focus:text-red-700 p-0"
          onClick={handelSignOut}
        >
          signOut{" "}
        </button>
      ) : (
        <Link
          to="/register"
          className="nav-link text-gray-500 font-bold hover:text-gray-700 focus:text-gray-700 p-0"
        >
          {" "}
          <span className="flex items-center gap-5">
            <FaUser /> Register
          </span>{" "}
        </Link>
      )}
    </div>
  );
};

export default SocialAndLogin;
