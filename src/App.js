import { Provider } from "react-redux";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
