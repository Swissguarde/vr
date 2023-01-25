import { useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";
import { useEffect } from "react";

const MetaMask = () => {
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
  return (
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
  );
};
export default MetaMask;
