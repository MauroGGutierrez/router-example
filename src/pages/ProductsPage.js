import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import "./ProductsPage.css"

const ProductsPage = () => {
  const [listProducts, setListProducts] = useState([]);

  const ObtenerDatos = async () => {
    const url = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=riverremeras"
    );
    const data = await url.json();
    setListProducts(data.results);
    console.log(data.results)
  };

  useEffect(() => {
    ObtenerDatos();
  }, []);

  return (
    <div className="product-list">
      {
        listProducts.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Card product={product} />
          </Link>
        ))
      }
    </div>
  )
};

export default ProductsPage;
