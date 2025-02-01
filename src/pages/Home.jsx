import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="p-4">
      <h1>Welcome to My Portfolio</h1>
      <div className="space-x-4 mt-4">
        <Button color="slate" onClick={() => alert("Slate Button clicked!")}>
          Slate Button
        </Button>
        <Button color="purple" onClick={() => alert("Purple Button clicked!")}>
          Purple Button
        </Button>
        <Button color="yellow" onClick={() => alert("Yellow Button clicked!")}>
          Yellow Button
        </Button>
      </div>
    </div>
  );
};

export default Home;
