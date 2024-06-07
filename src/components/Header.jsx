import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Button } from "./Button";
import { Sidebar } from "./Sidebar";

export const Header = () => {
  const [sidbar, setsidbar] = useState(false);

  const handleSlidbar = () => {
    setsidbar(true);
  };

  const slidbarexit = () =>{
    setsidbar(false);
  }
  return (
    <div className="h-20 lg:h-16 flex items-center ">
      <div className="hidden lg:block lg:w-28 lg:h-full"></div>

      <div className="w-40 h-full flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1UcJX6V6xmbnk1XprDTXaQcPrqcugatJk8R4Y-c-bwVmPIHl3mO7fKxXgfToGXlk0g&usqp=CAU"
          alt=""
          className="lg:h-10 lg:w-28 h-8"
        />
      </div>
      <input
        type="text"
        placeholder="Search for Movies,Events,Plays,Sports and Activities"
        className="lg:w-1/3 lg:h-9  rounded-sm my-3 px-3  outline-gray-100 outline hidden lg:block"
      />
      <div className="lg:w-96  w-1/3"></div>

      <div className="lg:w-24 hidden lg:block">
        <select
          id="country"
          name="country"
          autocomplete="country-name"
          className=" w-full rounded-md border-0 py-1.5 text-gray-900 outline-none  border-none        sm:text-sm "
        >
          <option>Jaipur</option>
          <option>Delhi</option>
          <option>Goa</option>
        </select>
      </div>

      <Button />

      <div className="w-16 h-6 ">
        <IoIosMenu className="h-full w-16" onClick={handleSlidbar} />
      </div>
      <Sidebar vissibal={sidbar} offvisible={slidbarexit}/>
    </div>
  );
};
