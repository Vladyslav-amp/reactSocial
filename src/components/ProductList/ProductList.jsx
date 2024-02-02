import './ProductList.scss';
import React, { useState, useEffect } from 'react';

export const PostComponent = () => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    model: '',
    price: '',
    country: '',
  });

  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    // check did some field isn`t empty
    if (
      !newProduct.title.trim() &&
      !newProduct.model.trim() &&
      !newProduct.price.trim() &&
      !newProduct.country.trim()
    ) {
      alert('Fill in all fields before adding the product.');
      return;
    } else {
      // Dodaj produkt, jeśli wszystkie pola są wypełnione
      setProducts(prevProducts => [...prevProducts, { ...newProduct, id: Date.now() }]);
      setNewProduct({ title: '', model: '', price: '', country: '' });
    }
  };

  const handleRemoveProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  // for data memory(productCard) after reload page
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div className="products">
      <div className="products-list__block">
        <h2 className="products-list__heading-title">
          Product List
        </h2>

        <ul className="products-list__storage">
          {products && products.map((product) => (
            <li
              className="products-list__item"
              key={product.id}
            >
              {`
              Title: ${product.title}, 
              Model: ${product.model}, 
              Price: ${product.price}, 
              Country: ${product.country}
            `}
              <button
                className="products-list__delete-btn"
                onClick={() => handleRemoveProduct(product.id)}
              >
                Usuń
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="products-generator">
        <h2
          className="products-generator__heading-title"
        >
          Add new product
        </h2>

        <label className="products-generator__filed">
          Title:
          <input
            className="products-generator__field-input"
            type="text"
            name="cena"
            value={newProduct.cena}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Model:
          <input
            className="products-generator__field-input"
            type="text"
            name="nazwa"
            value={newProduct.nazwa}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Price:
          <input
            className="products-generator__field-input"
            type="number"
            name="model"
            value={newProduct.model}
            onChange={handleInputChange}
          />

        </label>

        <label>
          Country:
          <input
            className="products-generator__field-input"
            type="text"
            name="kraj"
            value={newProduct.kraj}
            onChange={handleInputChange}
          />
        </label>

        <button
          className="products-generator__add-btn"
          onClick={handleAddProduct}
        >
          Add
        </button>
      </div>
    </div>
  );
};

