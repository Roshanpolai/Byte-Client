// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Container, PostCard, Button, PostListItem } from "../components";
// import postService from "../services/post.service";

// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const data = await postService.getPosts();

//         setPosts(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load posts.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   // Loading
//   if (loading) {
//     return (
//       <div className="min-h-[70vh] flex items-center justify-center">
//         <div className="text-center">
//           <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading posts...</p>
//         </div>
//       </div>
//     );
//   }

//   // Error
//   if (error) {
//     return (
//       <div className="min-h-[70vh] flex items-center justify-center">
//         <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
//           <h2 className="text-xl font-semibold text-red-600">
//             Something went wrong
//           </h2>

//           <p className="text-gray-500 mt-2">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   // Empty
//   if (posts.length === 0) {
//     return (
//       <div className="min-h-[70vh] flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-900">No Posts Yet</h1>

//           <p className="text-gray-500 mt-3 mb-6">
//             Be the first one to publish a blog.
//           </p>

//           <Link to="/add-post">
//             <Button
//               bgColor="bg-blue-600"
//               className="font-semibold px-6 py-3 hover:opacity-90 transition"
//             >
//               Write the First Post
//             </Button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero Section — minimal editorial, no color block */}
//       <section className="border-b border-gray-100">
//         <Container>
//           <div className="py-16 lg:py-24 max-w-2xl">
//             <span className="inline-block text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
//               Welcome to Byte Blog
//             </span>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
//               Discover Amazing Stories &amp; Ideas
//             </h1>

//             <p className="text-lg text-gray-500 mb-8 leading-relaxed">
//               Read articles, tutorials and developer experiences written by our
//               community. Learn something new every day.
//             </p>

//             <div className="flex gap-4">
//               <Link to="/all-posts">
//                 <Button
//                   bgColor="bg-blue-600"
//                   className="font-semibold px-5 py-2.5 hover:opacity-90 transition"
//                 >
//                   Explore Posts
//                 </Button>
//               </Link>
//               <Link to="/add-post">
//                 <Button
//                   bgColor="bg-transparent"
//                   textColor="text-blue-600"
//                   className="font-semibold px-5 py-2.5 border border-gray-200 hover:bg-gray-50 transition"
//                 >
//                   Write a Post
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Latest Posts */}
//       <Container>
//         <div className="py-10">
//           <div className="flex items-end justify-between mb-6">
//             <div>
//               <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
//                 Latest Posts
//               </span>
//               <h2 className="text-2xl font-extrabold text-gray-900 mt-1">
//                 Recent Articles
//               </h2>
//             </div>
//             <span className="text-sm text-gray-400 font-medium pb-1">
//               {posts.length} Posts
//             </span>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {posts.map((post) => (
//               <PostCard key={post._id} {...post} />
//             ))}
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, PostListItem, Button } from "../components";
import postService from "../services/post.service";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getPosts();

        setPosts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold text-red-600">
            Something went wrong
          </h2>

          <p className="text-gray-500 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  // Empty
  if (posts.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">No Posts Yet</h1>

          <p className="text-gray-500 mt-3 mb-6">
            Be the first one to publish a blog.
          </p>

          <Link to="/add-post">
            <Button
              bgColor="bg-blue-600"
              className="font-semibold px-6 py-3 hover:opacity-90 transition"
            >
              Write the First Post
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section — minimal editorial, no color block */}
      <section className="border-b border-gray-100">
        <Container>
          <div className="py-16 lg:py-24 max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Welcome to Byte Blog
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Discover Amazing Stories &amp; Ideas
            </h1>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Read articles, tutorials and developer experiences written by our
              community. Learn something new every day.
            </p>

            <div className="flex gap-4">
              <Link to="/all-posts">
                <Button
                  bgColor="bg-blue-600"
                  className="font-semibold px-5 py-2.5 hover:opacity-90 transition"
                >
                  Explore Posts
                </Button>
              </Link>
              <Link to="/add-post">
                <Button
                  bgColor="bg-transparent"
                  textColor="text-blue-600"
                  className="font-semibold px-5 py-2.5 border border-gray-200 hover:bg-gray-50 transition"
                >
                  Write a Post
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest Posts */}
      <Container>
        <div className="py-10">
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                Latest Posts
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-1">
                Recent Articles
              </h2>
            </div>
            <span className="text-sm text-gray-400 font-medium pb-1">
              {posts.length} Posts
            </span>
          </div>

          <div className="flex flex-col">
            {posts.map((post) => (
              <PostListItem key={post._id} {...post} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;