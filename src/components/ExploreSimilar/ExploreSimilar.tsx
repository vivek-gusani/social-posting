// import { useState } from "react";
import { Link } from "react-router-dom";
import UserPost from "../UserPost/UserPost";
import "./ExploreSimilar.scss";
// import { getImageSize } from "../../utility";
import ProductCard from "../ProductCard/ProductCard";
import { nanoid } from "nanoid";

function ExploreSimilar({ productPost, similarProducts }: any) {
  // Testing tag generation
  // const [productTags, setProductTags] = useState([]);
  // async function generateTags(imageUrl) {
  //   const { width: imageWidth, height: imageHeight } = await processImage(
  //     imageUrl
  //   );

  //   const tags = [];
  //   for (let i = 0; i < 5; i++) {
  //     const tag = getTagPosition(imageWidth, imageHeight);
  //     tags.push(tag);
  //   }
  //   return tags;
  // }

  // function getTagPosition(imageWidth: number, imageHeight: number) {
  //   let x,
  //     y = getRandomCoordinates(imageWidth, imageHeight);

  //   const xPercent = x / imageWidth;
  //   const yPercent = y / imageHeight;

  //   return { x, y, xPercent, yPercent };
  // }

  // function getRandomCoordinates(imageWidth: number, imageHeight: number) {
  //   const x = Math.random() * imageWidth;
  //   const y = Math.random() * imageHeight;
  //   console.log(x, y);
  //   return { x, y };
  // }

  // async function processImage(imageUrl: url) {
  //   try {
  //     const imageSize = await getImageSize(imageUrl);
  //     console.log(imageSize.width, imageSize.height);
  //     return imageSize;
  //   } catch (error) {
  //     console.error("Error loading image:", error);
  //   }
  // }

  return (
    <div className="ExploreSimilar flex justify-center gap-16">
      <div className="explore-similar-nav relative">
        <Link
          to="/explore"
          className="top btn-icon btn-action w-8 h-8 absolute top-0 left-0"
          title="Back to Explore"
        >
          <img src="/icons/arrow-left.svg" alt="Save" className="svg-icon" />
        </Link>

        <div className="bottom flex flex-col gap-2 absolute bottom-0 left-0">
          <button className="btn-icon btn-action w-8 h-8 " title="Previous">
            <img src="/icons/caret-up.svg" alt="Save" className="svg-icon" />
          </button>
          <button className="btn-icon btn-action w-8 h-8" title="Next">
            <img src="/icons/caret-down.svg" alt="Save" className="svg-icon" />
          </button>
        </div>
      </div>

      <div className="showcase-image-wrapper flex justify-center align-center relative pt-6 ">
        {/* <div className="header-overlay absolute top-0 flex justify-between items-center">
          <div>
            <p>Style vault</p>
            <img src="/icons/caret-down.svg" alt="" />
          </div>
          <button>
            <img src="/icons/plus-dark.svg" alt="" />
          </button>
        </div> */}

        <div className="image-products-list">
          <button className="btn-icon btn-tag-overlay absolute left-2/4 bottom-2/4">
            <img src="/icons/tag-light.svg" alt="Save" className="svg-icon" />
          </button>
          {/* {productTags.map((tag, index) => (
            <button
              key={index}
              className="btn-icon btn-tag-overlay absolute"
              style={{
                left: `${tag.xPercent * 100}%`,
                top: `${tag.yPercent * 100}%`,
              }}
            >
              <img src="/icons/tag-light.svg" alt="Save" className="svg-icon" />
            </button>
          ))} */}
        </div>
        <img className="rounded-xl" src={productPost.image} alt="" />
      </div>

      <div className="post-info pt-6">
        <UserPost productPost={productPost} />
        <p className="similar-header font-medium mb-6 mt-10">
          Shop Similar Products
        </p>
        <div className="similar-products">
          <div className="products flex flex-wrap gap-4 ">
            {similarProducts.map((product: any) => (
              <ProductCard key={nanoid()} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreSimilar;



ExploreSimilar.defaultProps = {
  productPost: {
    image: "/images/posts/default1.png",
    user: {
      username: "kim",
      avatar: "/images/avatars/kim.png",
      theme: "#FCE7F3",
    },
    caption:
      "This casual outfit is perfect for any day of the week. With a comfortable and relaxed fit, it's best for running errands, grabbing coffee with friends, or lounging at home.",
    tags: ["casual", "comfortable", "relaxed"],
    postDate: "5d",
  },
  similarProducts: [
    {
      name: "Faux fur jacket",
      brand: "Dayanne Plush",
      price: 15,
      image: "/images/products/faux-fur-jacket.png",
      productLink:
        "https://www.shopakira.com/clothing/jackets-coats/faux-fur/reverse-oversized-faux-fur-puffer",
    },
    {
      name: "Sexy mesh casual bodysuit",
      brand: "Paxton",
      price: 22.9,
      image: "/images/products/sexy-mesh-casual-bodysuit.png",
      productLink:
        "https://www.shopakira.com/clothing/jackets-coats/faux-fur/reverse-oversized-faux-fur-puffer",
    },
    {
      name: "Print sleeveless bodysuit",
      brand: "Kami Animal",
      price: 34.9,
      image: "/images/products/print-sleeveless-bodysuit.png",
      productLink:
        "https://www.shopakira.com/clothing/jackets-coats/faux-fur/reverse-oversized-faux-fur-puffer",
    },
    {
      name: "Oversized faux fur puffer",
      brand: "AKIRA Label",
      price: 30,
      image: "/images/products/oversized-faux-fur-puffer.png",
      productLink:
        "https://www.shopakira.com/clothing/jackets-coats/faux-fur/reverse-oversized-faux-fur-puffer",
    },
    // {
    //   name: "Sleeveless mesh bodysuit in red",
    //   brand: "Paxton",
    //   price: 19.9,
    //   image: "/images/products/sleeveless-mesh-bodysuit-in-red.png",
    // productLink:
    // "https://www.shopakira.com/clothing/jackets-coats/faux-fur/reverse-oversized-faux-fur-puffer",
    // },
    // {
    //   name: "Trust me cut out mesh bodysuit",
    //   brand: "AKIRA Label",
    //   price: 26.9,
    //   image: "/images/products/trust-me-cut-out-mesh-bodysuit.png",
    // productLink:
    // "https://www.shopakira.com/clothing/jackets-coats/faux-fur/reverse-oversized-faux-fur-puffer",
    // },
    // {
    //   name: "Mesh paneled bodysuit",
    //   brand: "FENTY",
    //   price: 44.9,
    //   image: "/images/products/mesh-paneled-bodysuit.png",
    // productLink:
    // "https://www.shopakira.com/clothing/jackets-coats/faux-fur/reverse-oversized-faux-fur-puffer",
    // },
  ],
};
