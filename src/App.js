// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// stylesheets
import "./assets/css/tailwind-output.css";
import "./assets/css/global.css";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

// components
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="simulate-mobile">
        <Header />
        <div class="mx-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Update />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
