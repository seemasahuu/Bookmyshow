import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export const Formm = ({ visibale, useexit }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  if (!visibale) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm lg:flex justify-center items-center">
      <div className="bg-white h-80 w-80 flex justify-center items-center relative rounded-lg mx-14 my-72">
      <button onClick={useexit} className="absolute top-3 right-3"><IoMdClose className="h-5 w-5"/></button>
      <button
        className="h-10 w-60 bg-slate-100 rounded-md"
        onClick={handleLogin}
      >
        Continue With Google
      </button>
      </div>
    </div>
  );
};
