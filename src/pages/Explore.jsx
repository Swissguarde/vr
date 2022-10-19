import React from "react";
import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Seo from "../components/Seo";

const Explore = () => {
  return (
    <div className="explore">
      <Seo
        title="Marketplace | VR REAL ESTATE"
        description="Discover listings for sale"
        name="VR REAL ESTATE"
        type="Explore"
      />
      <header className="mt-24">
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
