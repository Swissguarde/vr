import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import { db } from "../firebase.config";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Spinner from "../components/Spinner";
import shareIcon from "../assets/svg/shareIcon.svg";
import { BiBath, BiBed } from "react-icons/bi";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Listing = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  // const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    };

    fetchListing();
  }, [navigate, params.listingId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      <Swiper
        modules={[Navigation, EffectFade]}
        speed={800}
        navigation
        effect
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {listing.imgUrls.map((url, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                background: `url(${listing.imgUrls[i]}) center no-repeat`,
                backgroundSize: "cover",
                height: "600px",
              }}
              className="swiperSlideDiv"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="shareIconDiv"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <img src={shareIcon} alt="" />
      </div>
      {shareLinkCopied && <p className="linkCopied">Link Copied!</p>}
      <div className="listingDetails">
        <p className="text-yellow-800 text-3xl md:text-5xl font-semibold">
          {listing.name}
        </p>
        <p className="listingLocation">{listing.location}</p>

        <div className="my-2 text-2xl">
          {listing.offer
            ? listing.discountedPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : listing.regularPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <span className="text-green-400 ml-2">BUSD</span>{" "}
        </div>

        <p className="listingType">
          For {listing.type === "rent" ? "Rent" : "Sale"}
        </p>
        {listing.offer && (
          <p className="discountPrice">
            BUSD{listing.regularPrice - listing.regularPrice}
          </p>
        )}

        {/* <ul className="listingDetailsList">
          <li>
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : "1 Bedroom"}
          </li>
          <li>
            {listing.bathrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : "1 Bathroom"}
          </li>
          <li>{listing.parking && "Parking Spot"}</li>
          <li>{listing.furnished && "Furnished"}</li>
        </ul> */}
        <div className="flex justify-center items-center space-x-4">
          <div className="flex-col items-center justify-between p-3 rounded border-2 border-yellow-800">
            <div className="flex items-center justify-center">
              <BiBed />
            </div>
            <span className="text-center">
              {listing.bedrooms > 1 ? `${listing.bedrooms} Bed` : "1 Bed"}
            </span>
          </div>
          <div className="flex-col items-center justify-between p-3 rounded border-2 border-yellow-800">
            <div className="flex items-center justify-center">
              <BiBath />
            </div>
            <span className="text-center">
              {listing.bathrooms > 1 ? `${listing.bathrooms} Bath` : "1 Bath"}{" "}
            </span>
          </div>
        </div>

        <p className="listingLocationTitle">Location</p>

        <div className="leafletContainer">
          <MapContainer
            style={{
              height: "100%",
              width: "100%",
            }}
            center={[listing.geolocation.lat, listing.geolocation.lng]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
            />

            <Marker
              position={[listing.geolocation.lat, listing.geolocation.lng]}
            >
              <Popup>{listing.location}</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* {auth.currentUser?.uid !== listing.userRef && (
          <Link
            to={`/contact/${listing.userRef}?listingName=${listing.name}`}
            className="primaryButton"
          >
            Contact Landlord
          </Link>
        )} */}
      </div>
    </main>
  );
};
export default Listing;
