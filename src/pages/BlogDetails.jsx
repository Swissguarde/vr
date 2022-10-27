import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import Spinner from "../components/Spinner";

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    const fetchBlogDetails = async () => {
      const docRef = doc(db, "blog", params.blogId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlogDetails(docSnap.data());
        setLoading(false);
      }
    };
    fetchBlogDetails();
  }, [params.blogId]);
  console.log(loading);

  if (loading) {
    <Spinner />;
  }

  console.log(blogDetails);

  return (
    <div className="">
      {loading ? (
        <Spinner />
      ) : blogDetails ? (
        <>
          <div className="p-8">
            <img
              src={blogDetails.image}
              className="object-cover w-full h-96 brightness-50 rounded-md"
              alt=""
            />
          </div>

          <div className="mt-10 max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-4xl font-semibold">
              {blogDetails.blogTitle}
            </h2>
            <p className="mt-6 text-gray-400 italic">{blogDetails.author}</p>
          </div>

          <div className="my-10 max-w-3xl mx-auto text-center p-8">
            {blogDetails.content}
          </div>
        </>
      ) : (
        "No"
      )}
    </div>
  );
};
export default BlogDetails;
