import React, { useEffect, useState } from "react";
import Product from "../Products/Product/Product"

const Products = () => {

  const [products, setProducts] = useState([])
    
   useEffect(() => {
     const fetchData = async () => {
       let res = await fetch("http://localhost:8080/products")
       let data = await res.json()
         setProducts(data);
     };
     fetchData();
  }, [])
  return <div>
     <Product/>
     Products :
     {
        products.map((prod) => (
           <div key={prod.id}>name={prod.name}, description={prod.description}</div>
        ))
     }
  </div>;
};

export default Products;
