function ProductCart({ handleClick, listProduct, setListProduct }) {
  const handleDelete = (productId) => {
    const updatedListProduct = listProduct.filter(
      (product) => product.id !== productId
    );
    setListProduct(updatedListProduct);
  };

  return (
    <>
      <div className="border-l border-gray-200 overflow-scroll  py-9 px-5 fixed right-0 top-0  h-[100vh] bg-white">
        <div className="flex justify-between ">
          <div className="flex gap-3 flex-col ">
            <h2>ProductCart</h2>
            <div className="flex gap-2">
              <h2>Productos : </h2>
              {listProduct.reduce((acumulador, p) => acumulador + p.count, 0)}
            </div>
          </div>

          <div>
            <button className="px-2" onClick={handleClick}>
              x
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start">
          {listProduct &&
            listProduct.map((product) => (
              <div className="flex w-fit items-center gap-2 " key={product.id}>
                <img
                  className="w-[60px] h-[80px] object-cover"
                  src={product.image}
                  alt=""
                />
                <h2 className="text-lg  sm:w-[190px]">{product.name}</h2>
                <h2 className="w-[60px] text-lg">{product.price} $</h2>
                <h2 className="text-lg w-[20px]">{product.count}</h2>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-700 w-[20px] flex items-center justify-center text-white rounded-sm"
                >
                  x
                </button>
              </div>
            ))}
          <div className="flex  w-full items-center justify-between">
            <div className="flex text-xl  ">
              <h2>Price : </h2>
              {listProduct.reduce(
                (acumulador, price) => acumulador + price.price,
                0
              )}
              $
            </div>
            <button className="border border-green-600 px-8 py-1 text-black">Pagar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
