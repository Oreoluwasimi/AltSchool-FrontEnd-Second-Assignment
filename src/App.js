import "./App.css";
import Users from "./Components/Users";
import Home from "./Components/Home";
import About from "./Components/About";
import Schools from "./Components/Schools";
import Data from "./Components/Data";
import Product from "./Components/Product";
import Engineering from "./Components/Engineering";
import NotFound from "./Components/NotFound";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/users"> Users </Link>
            </li>
            <li>
              <Link to="/schools/product"> Schools </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/schools/data" element={<Data />} />
        <Route path="/schools/product" element={<Product />} />
        <Route path="/schools/engineering" element={<Engineering />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/schools" element={<Schools />} >
          <Route path="product" element={<Product />} />
          <Route path="data" element={<Data />} />
          <Route path="engineering" element={<Engineering />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
