import { Link } from "react-router-dom";

const ListComp = ({ listing, id, onDelete, onEdit }) => {
  console.log(listing);
  return (
    <Link to={`/category/${listing.type}/${id}`}>
      <div className="relative">
        <img
          className="object-cover h-72 rounded-3xl"
          src={listing?.imgUrls[0]}
          alt={listing.name}
        />

        <div className="absolute top-2 right-3 bg-yellow-800 text-white px-4 py-1 rounded-xl">
          For Sale
        </div>
        <div className="absolute bottom-0 w-full left-0 bg-yellow-800 text-white px-4 py-1 rounded-b-xl">
          {listing.name}
        </div>
      </div>
    </Link>
  );
};
export default ListComp;
