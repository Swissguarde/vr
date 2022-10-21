import { AiOutlineStock } from "react-icons/ai";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="bg-[#ccc]">
        <div className="px-6 md:px-8 pb-56 pt-56 landingbg">
          <div className="max-w-xl">
            <h1 className="text-yellow-500 text-4xl w-fit rounded-md font-[900] sm:text-3xl md:text-7xl">
              Future of real estate investing
            </h1>
          </div>
          <h2 className="my-8 text-xl md:text-2xl w-fit bg-yellow-600 p-1">
            Invest in properties
          </h2>

          <div className="flex items-center space-x-4">
            <Link
              to="/explore"
              className="rounded-3xl text-center bg-yellow-700 p-2 text-sm text-white md:p-4 md:text-xl"
            >
              View Marketplace
            </Link>
            <Link
              to="/about"
              className="rounded-3xl text-center border border-yellow-700 p-2 text-sm text-white md:p-4 md:text-xl"
            >
              About VR Real Estate
            </Link>
          </div>
        </div>

        <div className="bg-black/90 pb-24 pt-10 text-white">
          <div className="grid grid-cols-1 items-center justify-center space-x-0 p-3 md:grid-cols-2 md:space-x-12 md:p-12">
            <div className="relative order-2 mt-10 ml-20 flex h-[250px] w-64 items-center sm:order-1 md:h-[400px] md:w-96">
              <img
                src="https://rb.gy/gqpla3"
                alt=""
                className="absolute rounded-[40px] object-cover"
              />
              <div className="absolute top-[25%] -right-3 flex items-center rounded bg-green-400 px-4 py-1 font-bold text-white md:-right-10">
                <AiOutlineStock className="mr-2" /> 10% Rent Yield
              </div>
              <div className="absolute -left-6 bottom-[25%] flex items-center rounded bg-blue-400 px-4 py-1 font-bold text-white">
                <AiOutlineStock className="mr-2" /> 8% interest
              </div>
            </div>

            <div className="order-1 ">
              <h2 className="bg-gradient-to-r from-yellow-400 to-gray-700 bg-clip-text pt-4 text-2xl font-[900] text-transparent md:text-6xl">
                Investing in real estate has never been easier
              </h2>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-yellow-700 p-6 text-3xl">
                  1
                </div>
                <div className="mb-2">
                  <h1 className="mb-2 text-2xl">Browse Properties</h1>
                  <p>
                    View detailed financial data, inspection reports, and more.
                    All property documents are publicly available
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-yellow-700 p-6 text-3xl">
                  2
                </div>
                <div className="mb-2">
                  <h1 className="mb-2 text-2xl">Select property</h1>
                  <p>
                    Purchase fractions of rental properties and become a direct
                    owner.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-yellow-700 p-6 text-3xl">
                  3
                </div>
                <div className="mb-2">
                  <h1 className="mb-2 text-2xl">Earn Rent and Appreciation</h1>
                  <p>
                    Receive rental income daily and withdraw anytime. Watch as
                    your ownership stake appreciates too, and enjoy flexibility
                    without a lock-up period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 p-6 pt-24 md:p-8">
          <Testimonials />
        </div>
      </div>
    </>
  );
};
export default Landing;
