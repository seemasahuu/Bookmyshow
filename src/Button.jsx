import React, { useState } from "react";

import { Formm } from "./Formm";

export const Button = () => {
  const [frompopup, setformpopup] = useState(false);

  const handleExit = () => {
    setformpopup(false);
  };
  const signUpHandle = () => {
    setformpopup(true);
  };
  return (
    <div>
      <button
        className="w-16 h-6 bg-red-500 rounded-md text-white text-sm mx-3"
        onClick={signUpHandle}
      >
        sign in
      </button>
      <Formm useexit={handleExit} visibale={frompopup} />
    </div>
  );
};
