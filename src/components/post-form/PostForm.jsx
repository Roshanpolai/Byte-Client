import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button, Input, RTE, Select } from "../index";
import postService from "../../services/post.service";

export default function PostForm({ post }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();

  const submit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("status", data.status);

      if (data.image && data.image[0]) {
        formData.append("featuredImage", data.image[0]);
      }

      let response;

      if (post) {
        response = await postService.updatePost(post._id, formData);
      } else {
        response = await postService.createPost(formData);
      }

      if (response) {
        navigate(`/post/${response.slug}`);
      }
    } catch (error) {
      console.error("Post Submission Error:", error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
    }

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8"
    >
      {/* Left Section */}
      <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-md border p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {post ? "Edit Blog Post" : "Create New Blog"}
        </h2>

        <p className="text-gray-500 mb-8">
          Write and publish your thoughts with a beautiful editor.
        </p>

        <div className="space-y-6">
          <Input
            label="Title"
            placeholder="Enter blog title..."
            {...register("title", {
              required: true,
            })}
          />

          <Input
            label="Slug"
            readOnly
            placeholder="Auto Generated"
            className="bg-gray-100"
            {...register("slug")}
          />

          <RTE
            label="Content"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-md border p-6 h-fit sticky top-24">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Publish Settings
        </h3>

        <Input
          label="Featured Image"
          type="file"
          accept="image/*"
          {...register("image", {
            required: !post,
          })}
        />

        {post && (
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-600 mb-2">
              Current Image
            </p>

            <img
              src={post.featuredImage?.url}
              alt={post.title}
              className="rounded-xl w-full h-56 object-cover border"
            />
          </div>
        )}

        <div className="mt-6">
          <Select
            label="Status"
            options={["active", "inactive"]}
            {...register("status", {
              required: true,
            })}
          />
        </div>

        <Button
          type="submit"
          bgColor={post ? "bg-green-600" : "bg-blue-600"}
          className="w-full mt-8 py-3 text-lg font-semibold hover:opacity-90 transition"
        >
          {post ? "Update Post" : "Publish Post"}
        </Button>
      </div>
    </form>
  );
}