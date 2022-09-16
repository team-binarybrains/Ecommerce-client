import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import usePerson from "../Hooks/usePerson.js";
import Loading from "../Share/Loading";

const Register = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword,
    user,
    loading,
    error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, userGoogle, loadinguserGoogle, erroruserGoogle] = useSignInWithGoogle(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth)


  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name })
  };

  const userData = usePerson(user || userGoogle)

 
    if (user || userGoogle) {
      navigate("/")
    }
 

  if (loading || loadinguserGoogle) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-16 py-10">
      <div className=" mx-auto">
        <div className=" mx-auto">
          <h1 className="text-center text-3xl text-[#7fad39] font-extrabold pb-5">
            অনুগ্রহ করে নিবন্ধন করুন
          </h1>
          <div className="mx-auto">
            <form onSubmit={handleRegister}>
              <input
                className=" block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
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
                className="block bg-[#7fad39] btn my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto"
                type="submit"
                value="Register"
              />
            </form>
          </div>

          <div>
            <div className="flex items-center justify-center">
              <div className="h-1 bg-slate-700 w-28 rounded "></div>
              <p className="px-2">or</p>
              <div className="h-1 bg-slate-700 w-28 rounded "></div>
            </div>

            <div className="mx-auto bg-[#7fad39] font-bold text-bold text-white text-center w-80">
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

          <div className="pt-2 font-medium text-center">
            <p className="text-red-500">
              {" "}
              ইতিমধ্যে একটি সদস্যপদ আছে ?{" "}
              <Link to="/login" className="text-green-600 ">
                অনুগ্রহ করে লগইন করুন{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
