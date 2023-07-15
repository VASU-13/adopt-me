import { createRoot } from "react-dom/client";
import React from "react";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mixed" /> */}
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
