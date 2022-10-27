import { Link } from "react-router-dom";

const BlogItem = ({ blog, id }) => {
  console.log(blog);
  return (
    <>
      <Link to={`/blog/${id}`}>
        <div className="mt-10 px-6 text-white">
          <div className="my-4  relative">
            <img
              src={blog.image}
              className="w-[450px] h-80 rounded object-cover brightness-50"
              alt="blogimg"
            />
            <div className="absolute top-10 left-5 max-w-[320px] text-xl text-white font-bold">
              <h2 className="bg-blue-400 py-1 px-2 rounded-md w-fit mb-2">
                VR BLOG
              </h2>
              <h2>{blog.blogTitle}</h2>
            </div>
            <div className="absolute flex items-center gap-3 bottom-4 left-5">
              <img
                src={blog.authorImage}
                className="rounded-full object-cover w-14 h-14"
                alt=""
              />
              <p>{blog.author}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default BlogItem;
