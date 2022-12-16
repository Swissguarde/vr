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
import Progress from "../components/Progress";
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
  console.log(listing);

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

      {listing.esprice && (
        <div className="pt-5 pb-20 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-6 justify-between">
          <div>
            <div className="border-2 border-blue-800 w-fit p-2 rounded-full">
              ACTIVE
            </div>

            <div className="py-2">
              <p className="text-blue-800 text-3xl md:text-5xl font-semibold">
                {listing.name}
              </p>
              <p className="listingLocation">{listing.location}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white text-blue-800">
            <div className="bg-[#ccc] p-2 rounded">
              <div className="flex justify-between">
                <div>Starting at</div>
                <div className="font-bold">
                  <span className="text-green-500 mr-2">BUSD</span>
                  {listing.esprice}
                </div>
              </div>
            </div>
            <div className="my-6">
              <div className="flex justify-between mb-2 text-xs sm:text-base">
                <div>Brick's Sold: {listing.sold}</div>
                <div>Brick's Left: {listing.left}</div>
              </div>
              <Progress completed={(listing.sold / 1200).toFixed(4) * 100} />
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>Projected IRR</div>
                <div className="font-bold">{listing.projected_irr}%</div>
              </div>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>COC Return</div>
                <div className="font-bold">{listing.coc_return}%</div>
              </div>
            </div>

            <div className="flex items-center justify-between space-x-4">
              <button className="bg-blue-800 p-3 md:p-6 flex-1 text-white text-xl rounded-2xl">
                BUY
              </button>
              <button className="bg-[#ccc] p-3 md:p-6 flex-1 text-xl rounded-2xl">
                SELL
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="px-8 md:px-16 pb-12">
        <div className="font-bold text-xl md:text-3xl">DETAILS</div>
        <div className="text-xl">
          {listing.offer
            ? listing.discountedPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : listing.regularPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <span className="text-green-400 ml-2">BUSD</span>{" "}
        </div>
        {listing.offer && (
          <p className="discountPrice">
            BUSD{listing.regularPrice - listing.regularPrice}
          </p>
        )}

        <div className="flex justify-center items-center space-x-4 my-2">
          <div className="flex-col items-center justify-between p-3 rounded border-2 border-blue-800">
            <div className="flex items-center justify-center">
              <BiBed />
            </div>
            <span className="text-center">
              {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}
            </span>
          </div>
          <div className="flex-col items-center justify-between p-3 rounded border-2 border-blue-800">
            <div className="flex items-center justify-center">
              <BiBath />
            </div>
            <span className="text-center">
              {listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}{" "}
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
      </div>
    </main>
  );
};
export default Listing;
