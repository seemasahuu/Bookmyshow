import React from "react";
import { Header } from "./components/Header";
import { Moviescounter } from "./screens/Moviescounter";
import { Footer } from "./components/Footer";

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
