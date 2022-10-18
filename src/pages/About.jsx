import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const About = () => {
  return (
    <div>
      <Seo
        title="About Us | VR REAL ESTATE"
        description="Our Mission and Vison"
        name="VR REAL ESTATE"
        type="About"
      />
      <div className="p-6 md:p-8">
        <div className="text-center text-2xl font-bold">Mission Statement</div>
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 py-8 gap-6 mb-20">
          <div>
            <div className="text-xl md:text-4xl font-bold text-yellow-700 ">
              Our mission is to make it possible for businesses to enhance their
              market share by using Virtual Reality tools and techniques.
            </div>
            <Link
              to="/explore"
              className="bg-yellow-700 text-center w-[80%] mx-auto px-6 py-4 rounded-2xl my-6 text-white "
            >
              View Properties
            </Link>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/mission-picture-id501539900?k=20&m=501539900&s=612x612&w=0&h=ByNSzVoqeIVFX2jAtZQe_hyeWu4gh4GTjaDnnCoLV_A="
              alt=""
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>

      <div className="bg-black text-white px-4 py-6">
        <div className="text-center text-2xl text-yellow-700 font-bold ">
          Vision and Strategy
        </div>
        <div className="text-center max-w-4xl mx-auto text-2xl my-4">
          <div>
            Our vision to reduce the distance by providing the virtual reality
            solutions of your business and products. You products will be
            virtually real and leave a real footprint on the viewer.
          </div>
          <div className="my-6">
            Our vision is to be the world’s most innovative organizations and
            institutions of virtually reality. By offering astounding quality
            products through immersive technology solutions for the world’s most
            innovative organization.
          </div>
          <div>
            HVR will create engaging, practical, and astonishing immersive
            experiences for virtual reality and augmented reality.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
