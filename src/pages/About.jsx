import Seo from "../components/Seo";
import Dir from "../assets/dir.jpg";
const About = () => {
  return (
    <div className="my-32 text-blue-600">
      <Seo
        title="About Us | VR BRICKS"
        description="Our Mission and Vison"
        name="VR BRICKS"
        type="About"
      />
      <div className="text-center text-2xl md:text-4xl font-semibold">
        ABOUT US
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="my-12 font-medium px-12 text-xl">
          Welcome to VR BRICKS! We are a team of experts that specialize in
          providing clients with a unique and innovative way to invest in the
          real estate market using the power of blockchain. We understand that
          the traditional real estate market can be confusing and overwhelming,
          and that is why we have created a platform that streamlines the
          process and makes it easy for anyone to invest in real estate using
          the power of blockchain.
        </div>

        <div>
          <div className="flex items-center justify-center mb-4">
            <img
              src={Dir}
              className="object-cover rounded-full border-y-2 border-blue-700 w-60 h-60"
              alt="pfp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
