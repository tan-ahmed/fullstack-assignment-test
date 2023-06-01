import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import { useState } from "react";
import { MyGlobalContext } from "./contexts/GlobalContext";
import Books from "./pages/Books";

function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <MyGlobalContext.Provider value={{ search, setSearch }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Books />} />
      </Routes>
    </MyGlobalContext.Provider>
  );
}

export default App;
