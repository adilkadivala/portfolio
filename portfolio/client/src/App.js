import React from "react";
import { BrowserRouter } from "react-router-dom";
import Public from "./routes/Public";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Public />
      </BrowserRouter>
    </>
  );
};

export default App;
