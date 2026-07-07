import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

import postService from "../services/post.service";
import { Button, Container } from "../components";

export default function Post() {
  const [post, setPost] = useState(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData && post.owner?._id === userData._id;

  useEffect(() => {
    if (!slug) {
      navigate("/");
      return;
    }

    const fetchPost = async () => {
      try {
        const data = await postService.getPost(slug);

        if (data) {
          setPost(data);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    };

    fetchPost();
  }, [slug, navigate]);

  const deletePost = async () => {
    try {
      const success = await postService.deletePost(post._id);

      if (success) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-semibold text-gray-600">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <Container>
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {/* Hero Image */}
          <img
            src={post.featuredImage?.url}
            alt={post.title}
            className="w-full h-[420px] object-cover"
          />

          {/* Content */}
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  {post.title}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-gray-500 text-sm">
                  <span>
                    By{" "}
                    <strong className="text-gray-700">
                      {post.owner?.name}
                    </strong>
                  </span>

                  <span className="text-gray-300">•</span>

                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
              </div>

              {isAuthor && (
                <div className="flex gap-3">
                  <Link to={`/edit-post/${post.slug}`}>
                    <Button
                      bgColor="bg-blue-600"
                      className="hover:opacity-90 transition"
                    >
                      Edit
                    </Button>
                  </Link>

                  <Button
                    bgColor="bg-red-600"
                    onClick={deletePost}
                    className="hover:opacity-90 transition"
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>

            <hr className="my-8 border-gray-200" />

            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600">
              {parse(post.content)}
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
