import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import arrowRight from "../assets/svg/keyboardArrowRightIcon.svg";
import homeIcon from "../assets/svg/homeIcon.svg";
import ListingItem from "../components/ListingItem";
import Seo from "../components/Seo";
import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  //
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [meta, setMeta] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [userAccounts, setUserAccounts] = useState(null);
  const [accountBalance, setAccountBalance] = useState(null);
  const { ethereum } = window;

  useEffect(() => {
    const checkMetaInstalled = () => {
      if (ethereum) {
        setMeta(true);
      } else {
        setMeta(false);
      }
    };
    checkMetaInstalled();
  }, [ethereum]);

  const metaInstall = () => {
    setMeta(false);
    const currentURL = new URL(window.location.href);
    const forwarderOrigin =
      currentURL.hostname === "localhost"
        ? "http://localhost:3000"
        : "https://www.vrbricks.com";
    const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
    onboarding.startOnboarding();
  };

  const connectWallet = async () => {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setIsFetching(true);
      setUserAccounts(accounts[0]);
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountBalance(bal);
      setIsConnected(true);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsConnected(false);
    }
  };

  //

  const { name, email } = formData;

  useEffect(() => {
    const fetchUserListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(
        listingsRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);

      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
    };

    fetchUserListings();
  }, [auth.currentUser.uid]);

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update display name in firebase
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // Update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid);

        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      toast.error("Could not update profile details", {
        position: "bottom-center",
        style: {
          backgroundColor: "#111",
          color: "#fff",
        },
      });
    }
  };
  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="profile">
      <Seo
        title="Account | VR BRICKS"
        description="Your Profile"
        name="VR BRICKS"
        type="Profile"
      />
      <header className="profileHeader mt-32">
        <p className="pageHeader">My Profile</p>
        <button className="logOut" type="button" onClick={onLogout}>
          Logout
        </button>
      </header>

      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prev) => !prev);
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
        </div>
        <div className="profileCard">
          <form>
            <input
              type="text"
              id="name"
              className={!changeDetails ? "profileName" : "profileNameActive"}
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <input
              type="text"
              id="email"
              className={!changeDetails ? "profileEmail" : "profileEmailActive"}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>

        {/*  */}
        <div className="mt-20 p-6">
          <h2>MetaMask</h2>
          <p className="my-4 italic">
            Click the button to connect your metamask wallet to vr bricks
          </p>
          {isConnected && (
            <div className="my-10">
              <h2>Account Balance: {accountBalance}</h2>
              <h2>
                Connected Account:{" "}
                <span className="font-bold text-slate-600 text-xs sm:text-base">
                  {userAccounts}
                </span>
              </h2>
            </div>
          )}
          <div className="mt-10 flex space-x-10 items-center">
            {!meta && (
              <button
                onClick={metaInstall}
                className="bg-blue-700 px-6 py-4 rounded text-white"
              >
                Install MetaMask
              </button>
            )}
            {meta && (
              <button
                onClick={connectWallet}
                disabled={isFetching}
                className={`${
                  isFetching && "cursor-progress bg-blue-400"
                } bg-blue-700 px-6 py-4 rounded text-white cursor-pointer`}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>

        {/*  */}

        <Link to="/create-listing" className="createListing">
          <img src={homeIcon} alt="home" />
          <p>Create a listing</p>
          <img src={arrowRight} alt="arrow right" />
        </Link>
        {!loading && listings?.length > 0 && (
          <>
            <p className="listingText">Your Listings</p>
            <ul className="listingsList">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
};

export default Profile;
