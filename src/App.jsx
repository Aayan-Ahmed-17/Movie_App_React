import React from "react";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap">
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default App;
