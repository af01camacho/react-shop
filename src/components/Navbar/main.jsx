import { FaGhost } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductCart from "../ProductCart/main";
import { useState } from "react";
function Navbar({ products, listProduct, setListProduct }) {
  const [toggleMenu, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggleMenu);
  };

  return (
    <>
      <nav className="grid grid-cols-2 lg:grid-cols-3 p-4 items-center place-items-center ">
        <figure className="flex items-center">
          <FaGhost size={"25px"} />
          <h2 className="text-2xl font-bold">MarketPage</h2>
        </figure>
        <ul className="flex gap-9 hidden  lg:flex">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Productos</a>
          </li>
          <li>
            <a href="">Categorias</a>
          </li>
          <li>
            <a href="">Descuentos</a>
          </li>
        </ul>
        <button className="flex items-center ">
          <AiOutlineShoppingCart
            className=""
            size={"18px"}
            onClick={handleClick}
          />
          <div className="">{listProduct.length ? listProduct.length : 0}</div>
        </button>
        {toggleMenu ? (
          <ProductCart
            setListProduct={setListProduct}
            listProduct={listProduct}
            products={products}
            handleClick={handleClick}
          />
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Navbar;
