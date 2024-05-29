import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import DialogModal from "../modals/DialogModal";
import SignInModal from "../modals/SignInModal";

import "./Navbar.scss";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [filterActive, setFilterActive] = useLocalStorage(
    "filterActive",
    false
  );

  const location = useLocation();
  const isCurrentPath = (path: any) => location.pathname === path;

  function handleFilterClick() {
    setFilterActive(!filterActive);
    console.log("Clicked filter.");
  }

  function signInUser() {
    setIsLoggedIn(true);
    console.log("Signed in.");
  }

  function signOut() {
    setIsLoggedIn(false);
    console.log("Signed out.");
  }

  return (
    <div className="Navbar flex justify-between p-4 px-10">
      <div className="nav-main flex items-center gap-4">
        <Link to="/">
          <h1 className="logo-title text-white text-3xl font-semibold">
            Aesthetic
          </h1>
        </Link>

        <div className="nav-control flex gap-4">
          <div className="nav-input-div relative">
            <select className="nav-filter text-sm" name="" id=""></select>
            <img
              src="/icons/sparkle.svg"
              alt="sparkle icon"
              className="svg-icon absolute top-0 left-0 p-3"
            />
          </div>
          <div className="nav-input-div relative">
            <input
              className="nav-search text-sm pl-3"
              type="text"
              placeholder="wedding dinner tuxedo"
            />
            <img
              src="/icons/search.svg"
              alt="search icon"
              className="svg-icon absolute top-0 right-0 p-3"
            />
          </div>
          <button
            className="btn-icon"
            title={`${filterActive ? "Activate Filter" : "Deactivate Filter"}`}
            onClick={handleFilterClick}
          >
            {filterActive ? (
              <img
                src="/icons/filter-selected.svg"
                alt="filter icon"
                className="svg-icon"
              />
            ) : (
              <img
                src="/icons/filter.svg"
                alt="filter icon"
                className="svg-icon"
              />
            )}
          </button>
        </div>
      </div>
      <div className="nav-sub flex items-center gap-4">
        <div className="nav-directory-div flex items-center gap-6">
          <ul className="nav-directory-list flex items-center gap-6 text-sm">
            <li className={`${isCurrentPath("/") ? "active-route" : ""}`}>
              <Link to="/">Home</Link>
            </li>
            <li
              className={
                isCurrentPath("/explore") || isCurrentPath("/explore-similar")
                  ? "active-route"
                  : ""
              }
            >
              <Link to="/explore">Explore</Link>
            </li>
            <li className={isCurrentPath("/following") ? "active-route" : ""}>
              <Link to="/following">Following</Link>
            </li>

            {isLoggedIn ? (
              <>
                <li
                  className={
                    isCurrentPath("/style-vault") ? "active-route" : ""
                  }
                >
                  <Link to="/style-vault">Style Vault</Link>
                </li>
                <li
                  className={`${isCurrentPath("/about") ? "active-route" : ""}`}
                >
                  <button
                    className="user-avatar-wrapper w-10 h-10"
                    style={{backgroundColor: "#F2BF9B"}}
                    onClick={signOut}

                  >
                    <img className="" src="/images/avatars/user.png" alt="" />
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className={isCurrentPath("/about") ? "active-route" : ""}>
                  <Link to="/about">About</Link>
                </li>
                <li className={isCurrentPath("/about") ? "active-route" : ""}>
                  <DialogModal
                    buttonLabel="Sign in"
                    buttonClass="btn-sign-in text-sm"
                    elements={<SignInModal signInUser={() => signInUser()} />}
                  />
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="nav-mobile-div flex items-center gap-3">
          <button className="btn-icon">
            <img
              src="/icons/search.svg"
              alt="search icon"
              className="svg-icon"
            />
          </button>
          <button className="btn-icon"></button>
          <DialogModal
            buttonLabel={
              <img
                src="/icons/ellipsis.svg"
                alt="more icon"
                className="svg-icon"
              />
            }
            buttonClass="flex justify-center items-center"
            elements={<SignInModal signInUser={() => signInUser()} />}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
