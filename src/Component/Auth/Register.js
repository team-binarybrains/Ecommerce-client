import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';

const Register = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [signInWithGoogle, userGoogle, loadinguserGoogle, erroruserGoogle] = useSignInWithGoogle(auth);


      if(loading || loadinguserGoogle ){
        return <Loading></Loading>
      }

      let from = location.state?.from?.pathname || "/";
      if(user){
        navigate(from, { replace: true });
      }
    const handleRegister = ( event )=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        createUserWithEmailAndPassword(name, email, password)
    }
    return (
        <div>
          <div className=" mx-auto">
       <h1 className='text-center'>please register</h1>
       <div className ='mx-auto'>
             
    
       <form onSubmit={handleRegister}>
         <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="text" placeholder="Name" name="name" required/>
         <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="email" name="email" placeholder="type your email" required/>
         <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="password" name="password" placeholder="type your password" required/>
         <input className='block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto'  type="submit" value="Register" />
       </form>
       </div>
       
       <div>
           <div className="flex items-center justify-center">
           <div className="h-1 bg-slate-700 w-28 rounded "></div>
            <p className="px-2">or</p>
            <div className="h-1 bg-slate-700 w-28 rounded "></div>
          </div>

         <div className='mx-auto bg-[#7fad39] font-bold text-bold text-white text-center w-80'>
         <button className=" m-4 text-center" stroke="currentColor" onClick={() => signInWithGoogle()}> Google </button>
         </div>
        </div>
            
       <div className='pt-2 font-medium text-center'>
      <p> Already have an account ?   <Link to='/login' className='border-b'>please login </Link></p>
       </div>
       
     </div>
        </div>
    );
};

export default Register;