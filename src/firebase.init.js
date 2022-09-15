// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNF9T_8LDkuLvOsqUEmxmL3kL3Y2CY85k",
  authDomain: "monir-vip-bazar.firebaseapp.com",
  projectId: "monir-vip-bazar",
  storageBucket: "monir-vip-bazar.appspot.com",
  messagingSenderId: "433805731056",
  appId: "1:433805731056:web:f29ed3980f10cdae11ce35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth


