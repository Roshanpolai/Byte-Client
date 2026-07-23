import React, { useEffect, useState } from "react";
import { Container, PostListItem } from "../components";
import postService from "../services/post.service";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getPosts();
        setPosts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-10">
      <Container>
        <div className="mb-8">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            Browse
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
            All Posts
          </h1>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-500">No posts found.</p>
        ) : (
          <div className="flex flex-col">
            {posts.map((post) => (
              <PostListItem key={post._id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;