import { useState } from "react";

function ProductList({ products, listProduct, setListProduct }) {
  const handleProduct = (product) => {
    // Comprueba si el producto ya está en la lista
    const productExists = listProduct.find((p) => p.id === product.id);
    if (productExists) {
      // Si el producto ya existe, aumenta su contador
      setListProduct((prevList) =>
        prevList.map((p) =>
          p.id === product.id ? { ...p, count: p.count + 1 } : p
        )
      );
    } else {
      // Si el producto es nuevo, agrégalo a la lista con un contador de 1
      setListProduct((prevList) => [...prevList, { ...product, count: 1 }]);
    }
  };

  return (
    <>
      <div className="grid-cols-2 md:grid-cols-3 gap-y-9 lg:gap-10  lg:px-20 grid lg:grid-cols-4  place-items-center ">
        {products &&
          products.map((product) => (
            <div
              className="h-fit w-fit gap-2 flex flex-col items-center"
              key={product.id}
            >
              <img
                className="h-[150px] object-cover w-[150px] lg:h-[300px] lg:w-[300px]"
                src={product.image}
                alt=""
              />
              <h4 className="text-sm font-light">{product.name}</h4>
              <h4 className="text-sm font-light">{product.price} $</h4>
              <button
                onClick={() => handleProduct(product)}
                className="w-3/4 border  border-red-900 hover:bg-green-900 hover:text-white hover:border-white text-red-900 py-1"
              >
                Buy
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default ProductList;
