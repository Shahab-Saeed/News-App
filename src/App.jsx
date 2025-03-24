

import React, { useState } from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import Newsboard from "../src/Components/Newsboard/Newsboard2";

function App() {
  const [catagory, setCatagory] = useState("general");

  return (
    <div>
      <Navbar setCatagory={setCatagory} />
      <Newsboard catagory={catagory} />
    </div>
  );
}



export default App

