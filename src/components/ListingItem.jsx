import { Link } from "react-router-dom";

import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

const ListingItem = ({ listing, id }) => {
  return (
    <li className="categoryListing my-10">
      <Link
        className="categoryListingLink"
        to={`/category/${listing.type}/${id}`}
      >
        <img
          className="categoryListingImg"
          src={listing?.imgUrls[0]}
          alt={listing.name}
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            <span className="text-green-400 mr-1">BUSD</span>
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            {listing.type === "rent" && "/ month"}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms `
                : "1 Bedroom"}
            </p>
            <img src={bathtubIcon} alt="bath" />
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1
                ? `${listing.bedrooms} Bathrooms `
                : "1 Bathrooms"}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default ListingItem;
