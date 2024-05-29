

import "./ProductCard.scss";
import { useState } from "react";
import {formatPrice} from "../../utility";



function ProductCard({ product }: any) {


  const [productInCart, setProductInCart] = useState(false);


  return (
    <div className="ProductCard flex flex-col gap-4 p-2 rounded-xl">
      <div className="product-image-wrapper relative">
        <img className="product-image" src={product.image} alt="" />

        <p className="product-price absolute bottom-0 left-0 font-medium p-2 m-2">
          ${formatPrice(product.price)}
        </p>
        <p className="product-more absolute bottom-0 right-0 p-2 m-2">
          <img src="/icons/ellipsis.svg" alt="more icon" className="svg-icon" />
        </p>
      </div>

      <div className="product-info p-2">
        <h3 className="product-name font-medium">{product.name}</h3>
        <h4 className="product-brand mt-2">{product.brand}</h4>
        <div className="flex gap-3 mt-3">
          <button
            className={`btn-icon btn-action ${
              productInCart ? "btn-action-light" : ""
            } w-8 h-8`}
            onClick={() => setProductInCart(!productInCart)}
          >
            {productInCart ? (
              <img src="/icons/check.svg" alt="Save" className="svg-icon" />
            ) : (
              <img
                src="/icons/plus-light.svg"
                alt="Save"
                className="svg-icon"
              />
            )}
          </button>
          {/* <button className="btn-icon btn-buy font-medium">Buy Now</button> */}
          <a href={product.productLink} 
          target="_blank"
          rel="noreferrer"
          className="btn-icon btn-buy font-medium">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.defaultProps = {
  product: {
    name: "Sexy mesh casual bodysuit",
    brand: "Paxton",
    price: 22.9,
    image:
      "https://saint-laurent.dam.kering.com/m/54ccb7268838931d/Medium-761062Y1H681000_A.jpg?v=1",
  },
};
