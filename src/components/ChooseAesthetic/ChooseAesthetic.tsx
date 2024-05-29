import "./ChooseAesthetic.scss";
import { useState } from "react";
import AestheticCard from "./AestheticCard";

function ChooseAesthetic({ aesthetics }: any) {
  const [currentCategory, setCurrentCategory] = useState("Popular");

  return (
    <div className="ChooseAesthetic flex flex-col justify-center gap-10">
      <div className="aesthetic-header flex flex-wrap justify-between items-center px-10 py-4">
        <button className="btn-search btn-action w-8 h-8">
          <img src="/icons/search.svg" alt="search icon" />
        </button>

        <div className="flex items-center gap-2">
          <button
            className={`btn-category ${
              currentCategory === "Popular" ? "btn-category-active" : ""
            }`}
            onClick={() => setCurrentCategory("Popular")}
          >
            Popular
          </button>
          <button
            className={`btn-category ${
              currentCategory === "Featured" ? "btn-category-active" : ""
            }`}
            onClick={() => setCurrentCategory("Featured")}
          >
            Featured
          </button>
          <button
            className={`btn-category ${
              currentCategory === "Saved" ? "btn-category-active" : ""
            }`}
            onClick={() => setCurrentCategory("Saved")}
          >
            Saved
          </button>
          <button
            className={`btn-category ${
              currentCategory === "Yours" ? "btn-category-active" : ""
            }`}
            onClick={() => setCurrentCategory("Yours")}
          >
            Yours
          </button>
        </div>

        <button className="btn-search btn-action w-8 h-8">
          <img src="/icons/x.svg" alt="close icon" />
        </button>
      </div>

      <div className="aesthetic-info text-center flex flex-col gap-2 items-center justify-center">
        <p className="aesthetic-info-title">Choose an aesthetic</p>
        <p className="aesthetic-info-description">
          Aesthetics are style filters you can use while shopping for your next
          outfit
        </p>
      </div>

      <div className="aesthetics-grid flex flex-wrap justify-center gap-5">
        {aesthetics.map((aesthetic: any) => (
          <AestheticCard aesthetic={aesthetic} />
        ))}
      </div>
    </div>
  );
}

export default ChooseAesthetic;

ChooseAesthetic.defaultProps = {
  aesthetics: [
    {
      collectionName: "Chic sophistique",
      collectionImage: "/images/aesthetics/aesthetics1.jpg",
      user: {
        name: "Kim Kardashian",
        username: "kim",
        avatar: "/images/avatars/memoji1.png",
        theme: "#F6CEF3",
      },
    },
    {
      collectionName: "Enchanting nomadica",
      collectionImage: "/images/aesthetics/aesthetics2.jpg",
      user: {
        name: "Leo Mandella",
        username: "kim",
        avatar: "/images/avatars/memoji2.png",
        theme: "#565656",
      },
    },
    {
      collectionName: "Ethereal simplicity",
      collectionImage: "/images/aesthetics/aesthetics3.jpg",
      user: {
        name: "Ebonee Davis",
        username: "kim",
        avatar: "/images/avatars/memoji3.png",
        theme: "#565656",
      },
    },
    {
      collectionName: "Rebel rhapsody",
      collectionImage: "/images/aesthetics/aesthetics4.jpg",
      user: {
        name: "Phil Cohen",
        username: "kim",
        avatar: "/images/avatars/memoji4.png",
        theme: "#50C3A4",
      },
    },
    {
      collectionName: "Artful curiosities",
      collectionImage: "/images/aesthetics/aesthetics5.jpg",
      user: {
        name: "Aurora James",
        username: "kim",
        avatar: "/images/avatars/memoji5.png",
        theme: "#E18376",
      },
    },
    {
      collectionName: "Sportive quirkade",
      collectionImage: "/images/aesthetics/aesthetics6.jpg",
      user: {
        name: "Grace Mahary",
        username: "kim",
        avatar: "/images/avatars/memoji6.png",
        theme: "#99DBEE",
      },
    },
    {
      collectionName: "Neo-punk fusion",
      collectionImage: "/images/aesthetics/aesthetics7.jpg",
      user: {
        name: "Cleo Wade",
        username: "kim",
        avatar: "/images/avatars/memoji7.png",
        theme: "#E8D9A5",
      },
    },
    {
      collectionName: "Enchanted serenade",
      collectionImage: "/images/aesthetics/aesthetics8.jpg",
      user: {
        name: "Brema",
        username: "kim",
        avatar: "/images/avatars/memoji8.png",
        theme: "#FEAACD",
      },
    },
  ],
};
