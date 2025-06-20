import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface LoginFormProps {
  identifier: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  error: string | null;
  children?: React.ReactNode;
}

const LoginForm: React.FC<LoginFormProps> = ({
  identifier,
  password,
  onChange,
  onSubmit,
  isLoading,
  error,
  children,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-lg mx-auto p-8 bg-white/90 rounded-2xl shadow-2xl space-y-6 animate-fade-in"
    >
      <div className="flex flex-col items-center mb-4">
        <FaUserCircle className="text-5xl text-blue-500 mb-2 drop-shadow" />
        <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
        <p className="text-sm text-gray-500">Login to your account</p>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded text-sm text-center">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="identifier"
          className="block mb-1 font-semibold text-gray-700"
        >
          Email or Username
        </label>
        <input
          type="text"
          id="identifier"
          name="identifier"
          value={identifier}
          onChange={onChange}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
          autoComplete="username"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-1 font-semibold text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
          autoComplete="current-password"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-[1.02] hover:from-blue-600 hover:to-pink-600 transition-all duration-200 active:scale-95"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
      <p className="text-base text-gray-800 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 underline">
          Sign up
        </Link>
      </p>

      {children && children}
    </form>
  );
};

export default LoginForm;
