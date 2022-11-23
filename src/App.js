import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import About from "./pages/About";
import Landing from "./components/Landing";
import { HelmetProvider } from "react-helmet-async";
import Marketplace from "./pages/Marketplace";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
// import Footer from "./components/Footer";
function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/blog/:blogId" element={<BlogDetails />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </HelmetProvider>
  );
}

export default App;
