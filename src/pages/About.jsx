import Seo from "../components/Seo";
import Dir from "../assets/dir.jpg";
const About = () => {
  return (
    <div>
      <Seo
        title="About Us | VR BRICKS"
        description="Our Mission and Vison"
        name="VR BRICKS"
        type="About"
      />
      <div className="p-6 md:p-8 bg-yellow-700 text-white">
        <p className="text-center text-3xl md:text-5xl font-bold mt-20">
          VR BRICKS
        </p>
        <div className="my-12 max-w-2xl mx-auto text-center text-base sm:text-xl">
          <div className="flex flex-col gap-3">
            <div>
              Our vision is to reduce the distance by providing the virtual
              reality solutions for your business and products.
            </div>{" "}
            <div>
              You products will be virtually real and leave a real footprint on
              the viewer. Our vision is to be the world's most innovative
              organization and institution of virtually reality by offering
              astounding quality products through immersive technology solutions
              for the world's most innovative organization.{" "}
            </div>
            <div>
              VR bricks will create engaging, practical, and astonishing
              immersive experiences for virtual reality and augmented reality.
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 max-w-md mx-auto py-20 flex flex-col sm:flex-row items-center justify-center gap-3">
        <img
          src={Dir}
          className="object-cover rounded-full border-y-2 border-yellow-700 w-60 h-60"
          alt=""
        />
        <div className="text-xl">
          This project is created by HOUSE OF VR for Dr Mohammed Nasser Al
          Qahtani
        </div>
      </div>
    </div>
  );
};
export default About;
