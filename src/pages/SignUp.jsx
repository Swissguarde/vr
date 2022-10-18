import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiFillEyeInvisible } from "react-icons/ai";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import OAuth from "../components/OAuth";
import Seo from "../components/Seo";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate("/");
      toast.success("Successful");
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "bottom-center",
        style: {
          backgroundColor: "#111",
          color: "#fff",
        },
      });
    }
  };
  return (
    <div className="mt-12 mb-24">
      <Seo
        title="Sign Up | VR REAL ESTATE"
        description="Create a new account via email or google"
        name="VR REAL ESTATE"
        type="Sign Up"
      />
      <div className="p-6 md:p-8">
        <div
          className="mx-auto mt-12 w-full rounded-2xl bg-gray-400/30 p-6
       shadow-xl md:w-1/2"
        >
          <div className="flex items-center space-x-1 md:space-x-4">
            <div className="text-2xl font-semibold text-yellow-700 md:text-4xl mr-4">
              SIGN UP
            </div>
            <p className="text-sm md:text-lg">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 underline">
                Sign In
              </Link>
            </p>
          </div>
          <p className="my-3 text-sm">
            Invest in new properties and manage your current investments
          </p>

          <form onSubmit={onSubmit}>
            <label className="block">Full Name</label>
            <input
              type="text"
              value={name}
              id="name"
              onChange={onChange}
              placeholder="JOHN DOE"
              className="my-4 w-full rounded border border-gray-400 bg-[gray]/20 p-3 outline-none md:w-[70%]"
            />
            <label className="block">Email</label>
            <input
              type="email"
              value={email}
              id="email"
              onChange={onChange}
              placeholder="johndoe@mail.com"
              className="my-4 w-full rounded border border-gray-400 bg-[gray]/20 p-3 outline-none md:w-[70%]"
            />
            <div className="relative">
              <label className="block">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                id="password"
                onChange={onChange}
                className="relative my-4 w-full rounded border border-gray-400 bg-[gray]/20 p-3 outline-none md:w-[70%]"
              />
              <div
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-0 top-12 cursor-pointer md:right-[30%]"
              >
                {" "}
                <AiFillEyeInvisible className="absolute top-2 right-3" />
              </div>
            </div>

            <button className="block rounded-2xl bg-yellow-700 px-8 py-2 text-white">
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center">
            <OAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
