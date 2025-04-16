import React from "react";
import Header from "../app/components/Header/Header";
import Footer from "../app/components/Footer/Footer";
import NavBar from "../app/components/NavBar/NavBar";


export default function Home(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NavBar/>
      <main className="flex-1">
        <p>Hello world!</p>
      </main>
      <Footer />
    </div>
  );
}