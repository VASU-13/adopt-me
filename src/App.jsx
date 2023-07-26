import { createRoot } from "react-dom/client";
import React from "react";
import SearchParams from "./SearchParams";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <AdoptedPetContext.Provider value={adoptedPet}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <div>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </AdoptedPetContext.Provider>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
