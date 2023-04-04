import React, { Children } from "react";
import NavBar from "../Components/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className='container' style={{ width: "70%", marginTop: "10px" }}>
        {children}
      </main>
    </>
  );
}
