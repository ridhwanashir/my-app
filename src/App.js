import React from "react";

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Illustrations from "./components/illustrations/Illustrations";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Illustrations />
      <Contact />
    </div>
  );
}

export default App;
