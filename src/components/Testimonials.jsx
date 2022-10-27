import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  const texts = [
    {
      id: 1,
      name: "Josh Micheal",
      testimonial:
        "I've never had a better customer service experience than with VR BRICKS.",
    },
    {
      id: 2,
      name: "Sarah Terrence",
      testimonial:
        "VR BRICKS is the best way to invest in real estate in my opinion..",
    },
    {
      id: 3,
      name: "Jim Halpert",
      testimonial:
        "A super easy way to fractionally invest in real-estate from start to finish..",
    },
  ];
  return (
    <div>
      <h1 className="mb-6 text-center text-2xl md:text-5xl">TESTIMONIALS</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {texts.map((text) => (
          <div
            key={text.id}
            className="h-[200px] flex-col justify-between rounded bg-[#ccc] p-6 shadow"
          >
            <div className="my-2 text-black/70 underline">{text.name}</div>
            <div className="flex items-center space-x-1 text-yellow-700">
              <div>
                <AiFillStar />
              </div>
              <div>
                <AiFillStar />
              </div>
              <div>
                <AiFillStar />
              </div>
              <div>
                <AiFillStar />
              </div>
              <div>
                <AiFillStar />
              </div>
            </div>
            {text.testimonial}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
