import React from "react";
import { Header } from "./Header";
import { Moviescounter } from "./Moviescounter";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <hr />
      <Moviescounter/>
      <Footer/>
    </div>
  );
};
