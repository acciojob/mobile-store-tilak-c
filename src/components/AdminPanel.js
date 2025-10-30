import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialProducts = [
  { id: 1, name: "Samsung Galaxy S8 64GB", description: "Fast, smooth, and stylish phone", price: 41000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s" },
  { id: 2, name: "Samsung Galaxy S9 64GB", description: "High-end camera and display", price: 40000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s" },
  { id: 3, name: "Samsung Galaxy S8+ 64GB", description: "Great battery and design", price: 19000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s" },
  { id: 4, name: "Samsung Galaxy S9+ 64GB", description: "Enhanced version with dual camera", price: 18000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s" },
  { id: 5, name: "Samsung Galaxy Note 9 6/128GB", description: "Stylus powered flagship", price: 34000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s" },
  { id: 6, name: "Samsung Galaxy Note 8 64GB", description: "Premium display experience", price: 20000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s" },
  { id: 7, name: "Samsung Galaxy A50", description: "Affordable smartphone with AMOLED", price: 15000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s" },
  { id: 8, name: "Samsung Galaxy M31", description: "Big battery and Super AMOLED", price: 17000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IuSVcZOMo_LHCFXVTsgoikfNjFAFbEqhpg&s" }
];

const AdminPanel = () => {
  const [products, setProducts] = useState(initialProducts);
  const [form, setForm] = useState({ name: "", description: "", img: "", price: "" });

  const handleAdd = () => {
    if (!form.name || !form.description || !form.img || !form.price) return;
    const newProduct = { id: Date.now(), ...form, price: parseInt(form.price) };
    setProducts([...products, newProduct]);
    setForm({ name: "", description: "", img: "", price: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (id) => {
    const newPrice = prompt("Enter new price:");
    if (newPrice) {
      const updated = products.map((p) =>
        p.id === id ? { ...p, price: parseInt(newPrice) } : p
      );
      setProducts(updated);
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>

      <div className="admin-links">
        <Link to="/">🏠 Home</Link>
      </div>

      <div className="form-section">
        <h3>Add Product</h3>
        <input
          className="form-control"
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Image URL"
          value={form.img}
          onChange={(e) => setForm({ ...form, img: e.target.value })}
        />
        <input
          className="form-control"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <h3>Manage Products</h3>
      <div className="product-list">
        {products.map((p, index) => (
          <div key={p.id} className="admin-product">
            <img src={p.img} alt={p.name} />
            <div className="details">
              <p>{p.name}</p>
              <p>{p.description}</p>
              <p>₹{p.price}</p>
            </div>
            <div className="actions">
              <button className="float-right" onClick={() => handleEdit(p.id)}>Edit</button>
              <button className="float-right" onClick={() => handleDelete(p.id)}>Delete</button>
              <Link to={`/products/${p.id}`} className="float-right">View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;