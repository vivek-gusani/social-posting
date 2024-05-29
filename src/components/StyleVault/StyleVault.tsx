import { shortenNumber } from "../../utility";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./StyleVault.scss";
import { useState } from "react";

function StyleVault({ user, collections, closeOverlay }: any) {
  const [currentCategory, setCurrentCategory] = useState("Saved");

  return (
    <div className="StyleVault flex flex-col p-10 rounded-xl">
      <div className="nav-header h-20">
        <div className="buttons flex justify-end gap-3">
          <Link
            to="/user-profile"
            title="Go to Profile"
            className="btn-icon btn-action w-10 h-10"
          >
            <img
              src="/icons/arrow-up-right.svg"
              alt="expand icon"
              className="svg-icon"
            />
          </Link>
          <button
            title="Close"
            className="btn-icon btn-action w-10 h-10"
            onClick={closeOverlay}
          >
            <img src="/icons/x.svg" alt="close icon" className="svg-icon" />
          </button>
        </div>
      </div>

      <div className="user-profile-wrapper flex flex-col gap-10">
        <div className="user-profile flex gap-6">
          <div
            className="user-avatar-wrapper w-32 h-32"
            style={{ backgroundColor: user.theme }}
          >
            <img className="" src={user.avatar} alt="" />
          </div>

          <div className="user-info">
            <p className="user-name text-2xl leading-none">{user.name}</p>

            <Link
              to="/user-profile"
              className="user-username text-base mt-1 leading-normal"
            >
              @{user.username}
            </Link>

            <p className="user-bio text-sm leading-normal mt-2">{user.bio}</p>

            <div className="flex gap-2 text-sm mt-2">
              <p className="user-saves">
                {shortenNumber(user.saves)}{" "}
                <span className="user-span">saves</span>
              </p>
              <p className="user-followers">
                {shortenNumber(user.followers)}{" "}
                <span className="user-span">followers</span>
              </p>
            </div>

            <button className="btn-follow mt-4">Follow</button>
          </div>
        </div>

        <div className="filters flex gap-2">
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
              currentCategory === "Created" ? "btn-category-active" : ""
            }`}
            onClick={() => setCurrentCategory("Created")}
          >
            Created
          </button>
        </div>

        <div className="collections">
          <p className="collections-header text-lg">Collections</p>
          <div className="collections-list flex flex-wrap gap-5 mt-6">
            {collections.map((collection: any) => (
              <CollectionCard key={nanoid()} collection={collection} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StyleVault;

StyleVault.defaultProps = {
  user: {
    username: "kim",
    avatar: "/images/avatars/kim.png",
    name: "Kim Kardashian",
    bio: "Fashion icon and reality TV star known for my bold style and trendsetting looks, always pushing the boundaries.",
    saves: 729,
    followers: 105000000,
    theme: "#F6CEF3",
  },
  collections: [
    {
      name: "SKIMS by Kim",
      items: 47,
      image: "/images/collections/default1.jpg",
    },
    {
      name: "Casual vintage",
      items: 98,
      image: "/images/collections/default2.jpg",
    },

    {
      name: "Shopping list",
      items: 6,
      image: "/images/collections/default3.jpg",
    },
    {
      name: "Vintage outfits",
      items: 108,
      image: "/images/collections/default4.jpg",
    },
    {
      name: "Casual dinner dates",
      items: 39,
      image: "/images/collections/default5.jpg",
    },
  ],
};
