import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";
import Footer from "./components/Footer";
import Product from "./pages/DetalPage";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
        <NavBar />
        <SearchInput />
      </div>
      <div>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
