import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import BlogItem from "../components/BlogItem";

const Blog = () => {
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogRef = collection(db, "blog");
        const q = query(
          blogRef,
          where("type", "==", "post"),
          orderBy("date", "desc"),
          limit(10)
        );
        const querySnap = await getDocs(q);
        let blogs = [];
        querySnap.forEach((doc) => {
          return blogs.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setBlogPost(blogs);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch blog posts", {
          position: "bottom-center",
          style: {
            backgroundColor: "#111",
            color: "#fff",
          },
        });
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : blogPost && blogPost.length > 0 ? (
        <>
          <div className="flex p-3 flex-col items-center justify-center text-center text-white text-4xl font-extrabold w-full h-80 blogbg">
            Real estate investing wisdom from the pros.
            <p className="text-center text-sm sm:text-2xl mt-2 text-blue-400">
              VR BRICK's Real Estate Investment Blog
            </p>
          </div>
          <h1 className="text-center text-xl sm:text-2xl mt-14">
            Featured Posts
          </h1>

          <main className="grid grid-cols-1 pb-12 md:grid-cols-2 justify-center items-center max-w-5xl mx-auto gap-4">
            {blogPost.map((blog) => (
              <BlogItem blog={blog.data} id={blog.id} key={blog.id} />
            ))}
          </main>
        </>
      ) : (
        "No blog yet"
      )}
    </div>
  );
};
export default Blog;
