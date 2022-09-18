import React, { useRef } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import usePerson from "../Hooks/usePerson";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, userGoogle, loadinguserGoogle, erroruserGoogle] =
    useSignInWithGoogle(auth);

  const userData = usePerson(user || userGoogle);

  if (user || userGoogle) {
    navigate("/");
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="mt-16 py-10">
      <div className=" mx-auto">
        <h1 className="text-center text-3xl text-[#7fad39] font-extrabold pb-5">
          দয়া করে লগইন করুন
        </h1>

        <div className="mx-auto">
          <form onSubmit={handleLogin}>
            <input
              className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto"
              type="email"
              name="email"
              placeholder="type your email"
              required
            />
            <input
              className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto"
              type="password"
              name="password"
              placeholder="type your password"
              required
            />
            <input
              className="block bg-[#7fad39] my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto"
              type="submit"
              value="Login"
            />
          </form>

          <div>
            <div className="flex items-center justify-center">
              <div className="h-1 bg-slate-700 w-28 rounded "></div>
              <p className="px-2">or</p>
              <div className="h-1 bg-slate-700 w-28 rounded "></div>
            </div>

            <div className="mx-auto bg-[#7fad39] font-bold text-white  text-center w-80">
              <button
                className=" m-4 text-center"
                stroke="currentColor"
                onClick={() => signInWithGoogle()}
              >
                {" "}
                Google{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-2 font-medium text-center">
          <p className="text-red-500">
            {" "}
            প্রথমবার নিবন্ধন করবেন ?{" "}
            <Link to="/register" className=" text-green-600">
              অনুগ্রহ করে নিবন্ধন করুন{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
