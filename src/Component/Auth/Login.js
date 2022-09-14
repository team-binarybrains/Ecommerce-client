import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
   const navigate=useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if (user) {
        navigate("/home");
        console.log(user);
      }
    const handleLogin =async ( event )=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div>
            <div className=" mx-auto">
       
       <h1 className='text-center'>please login</h1>
      
       <div className ='mx-auto'>
             <div className ='text-center'>
            
        {/* <SocialLogin></SocialLogin> */}
             </div>
             
          <div>
           
            <div className="flex items-center justify-center">
            <div className="h-1 bg-slate-700 w-28 rounded "></div>
             <p className="px-2">or</p>
             <div className="h-1 bg-slate-700 w-28 rounded "></div>
           
           </div>
         </div>
       <form onSubmit={handleLogin}>
         <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="text"  name="name" placeholder="Name" required/>
         <input ref={emailRef} className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="email" name="email" placeholder="type your email" required/>
         <input ref={passwordRef} className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="password" name="password" placeholder="type your password" required/>
         <input className='block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto'  type="submit" value="Login" />
       </form>
       </div>
 
       <div className='pt-2 font-medium text-center'>
      <p> first time registration ?   <Link to='/register' className='border-b'>please register </Link></p>
       </div>
       
     </div>
        </div>
    );
};

export default Login;