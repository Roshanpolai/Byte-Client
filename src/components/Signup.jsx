import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service.js";
import { login } from "../store/authSlice.js";
import { Button, Input, Logo } from "./index.js";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  // Runs when the user submits the form
  const create = async (data) => {
    setError("");
    setLoading(true);
    try {
      const account = await authService.createAccount(data);

      if (account) {
        const currentUser = await authService.getCurrentUser();

        if (currentUser) dispatch(login(currentUser));

        navigate("/");
      }
    } catch (error) {
      const status = error.response?.status;

      if (status === 409) {
        setError(
          "An account with this email already exists. Try signing in instead."
        );
      } else if (status === 400) {
        setError("Please check your details and try again.");
      } else {
        setError(error.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="mx-auto w-full max-w-lg bg-white rounded-2xl shadow-md p-10 border border-gray-100">
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900 leading-tight">
          Sign up to create account
        </h2>

        <p className="mt-2 text-center text-base text-gray-500">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-blue-600 transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {error && (
          <p className="text-red-600 bg-red-50 border border-red-100 rounded-lg mt-6 py-3 px-4 text-center text-sm">
            {error}
          </p>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button
              type="submit"
              bgColor="bg-blue-600"
              disabled={loading}
              className="w-full py-3 font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;