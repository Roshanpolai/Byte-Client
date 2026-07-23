import React from "react";
import { Link } from "react-router-dom";

function PostListItem({ slug, title, content, featuredImage, owner, createdAt }) {
  const plainText = content ? content.replace(/<[^>]+>/g, "") : "";
  const excerpt =
    plainText.length > 140 ? plainText.slice(0, 140).trim() + "..." : plainText;

  return (
    <article className="flex flex-col sm:flex-row items-start gap-6 py-8 border-b border-gray-100">
      {/* Left: Text content */}
      <div className="flex-1 order-2 sm:order-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block text-xs font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            BLOG
          </span>
          <span className="text-sm text-gray-400">
            {createdAt && new Date(createdAt).toLocaleDateString()}
          </span>
        </div>

        <Link to={`/post/${slug}`} className="group">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug group-hover:text-blue-600 transition mb-3">
            {title}
          </h2>
        </Link>

        {excerpt && (
          <p className="text-gray-500 leading-relaxed mb-4 max-w-2xl">
            {excerpt}
          </p>
        )}

        <div className="flex items-center gap-4">
          <Link
            to={`/post/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            Read More
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <span className="text-sm text-gray-400">
            — {owner?.name || "Unknown Author"}
          </span>
        </div>
      </div>

      {/* Right: Image */}
      {featuredImage?.url && (
        <Link
          to={`/post/${slug}`}
          className="order-1 sm:order-2 w-full sm:w-56 h-40 shrink-0 rounded-xl overflow-hidden border border-gray-100"
        >
          <img
            src={featuredImage.url}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </Link>
      )}
    </article>
  );
}

export default PostListItem;