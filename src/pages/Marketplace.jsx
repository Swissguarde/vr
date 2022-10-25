import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import ListComp from "../components/ListComp";
import Seo from "../components/Seo";
const Marketplace = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, "listings");

        // Create a query
        const q = query(
          listingsRef,
          where("type", "==", "sale"),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        // Execute query
        const querySnap = await getDocs(q);

        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListing(lastVisible);

        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings!", {
          position: "bottom-center",
          style: {
            backgroundColor: "#111",
            color: "#fff",
          },
        });
      }
    };

    fetchListings();
  }, []);

  // Pagination / Load More
  const onFetchMoreListings = async () => {
    try {
      // Get reference
      const listingsRef = collection(db, "listings");

      // Create a query
      const q = query(
        listingsRef,
        where("type", "==", "sale"),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchedListing),
        limit(10)
      );

      // Execute query
      const querySnap = await getDocs(q);

      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListing(lastVisible);

      const listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch listings!", {
        position: "bottom-center",
        style: {
          backgroundColor: "#111",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="p-4">
      <Seo
        title="MARKETPLACE | VR REAL ESTATE"
        description="View all listings | VR REAL ESTATE"
        name="VR REAL ESTATE"
        type="Marketplace"
      />
      <div className="flex items-center justify-between p-8 mt-20 border-b border-gray-200">
        <div className="text-yellow-800 ">
          <h2 className="text-2xl sm:text-4xl font-bold"> VR Marketplace</h2>
        </div>
        <div className="hidden sm:inline">
          <img
            src="https://rb.gy/3w5xxs"
            alt="house"
            className="object-cover rounded-2xl w-[80%]"
          />
        </div>
      </div>

      <div className="my-8">
        {loading ? (
          <Spinner />
        ) : listings && listings.length > 0 ? (
          <>
            <main>
              <div className="grid items-center gap-8 max-w-[90%] mx-auto justify-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {listings.map((listing) => (
                  <ListComp
                    listing={listing.data}
                    id={listing.id}
                    key={listing.id}
                  />
                ))}
              </div>
            </main>

            <br />
            <br />
            {lastFetchedListing && (
              <div className="flex items-center justify-center">
                <button
                  className="p-2 rounded-2xl bg-yellow-800 w-fit text-center text-white"
                  onClick={onFetchMoreListings}
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <p>No listings for {params.categoryName}</p>
        )}
      </div>
    </div>
  );
};
export default Marketplace;
