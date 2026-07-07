import React from "react";
import { Link } from "react-router-dom";

function PostCard({ slug, title, featuredImage, owner, createdAt }) {
  return (
    <Link to={`/post/${slug}`} className="group">
      <article className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300">
        <div className="overflow-hidden">
          <img
            src={featuredImage?.url}
            alt={title}
            className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Blog
            </span>
            <span className="text-xs text-gray-400">
              {createdAt && new Date(createdAt).toLocaleDateString()}
            </span>
          </div>

          <h2 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition min-h-[3.5rem]">
            {title}
          </h2>

          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <div>
              <p className="font-semibold text-sm text-gray-800">
                {owner?.name}
              </p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
            <span className="text-blue-600 font-medium text-sm">Read →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;
