
import React from "react";
import '../styles/App.css';
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import AdminPanel from "./AdminPanel.js";
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Router>
          <div className="navbar">
        <a><Link to="/">Home</Link></a>
       <a> <Link to="/admin">Admin Panel</Link></a>
      </div>
          <Routes>
            <Route path="/" element={<ProductList/>}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>
            <Route path="/admin" element={<AdminPanel/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App
