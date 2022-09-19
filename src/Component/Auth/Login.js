import React, { useRef } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import usePerson from "../Hooks/usePerson";
import Loading from "../Share/Loading";

const Login = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
// const [token] = <UseToken></UseToken>(gUser || emailUser)
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (error) {
    return (
      <div>
        <p className='text-red-500'> আপনার ভালমানের একটি ইমেইল দিন {error?.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
         
  
  
  };
 

  return (
    <div className="mt-16 py-10">
      <div className=" mx-auto">
        <h1 className="text-center text-3xl text-[#7fad39] font-extrabold pb-5">
          দয়া করে লগইন করুন
        </h1>

        <div className=" ">

        <form className="mx-auto text-center" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mx-auto w-full max-w-xs">
                <label className="label">
                  <span className="label-text">email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "your email is not required",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control mx-auto w-full max-w-xs">
                <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "your password  must be 6 character",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="w-full max-w-xs btn"
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
          {/* <button className="mx-auto block outline-none text-red-500"
        onClick={handelResetPassword}>
        Reset password
      </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
