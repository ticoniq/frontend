import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from "./Layouts/Navbar";
import Home from './pages/Home';
import ProductView from './pages/ProductView';
import ProductEdit from './pages/ProductEdit';
import { fetchProduct } from './Redux/product/productSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(6781));
  }, [dispatch]);
  
  return (
    <Router>
      <Navbar />
      <main className="max-w-custom mx-auto px-5 py-5 text-gray-600">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:uuid" element={<ProductView />} />  
          <Route path="/productEdit/:uuid" element={<ProductEdit />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
