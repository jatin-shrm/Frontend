import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface RegisterFormProps {
  email: string;
  username: string;
  fullname: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  error: string | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  email,
  username,
  fullname,
  password,
  onChange,
  onSubmit,
  isLoading,
  error,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-lg mx-auto p-8 bg-white/90 rounded-2xl shadow-2xl space-y-6 animate-fade-in"
    >
      <div className="flex flex-col items-center mb-4">
        <FaUserCircle className="text-5xl text-blue-500 mb-2 drop-shadow" />
        <h2 className="text-2xl font-bold text-gray-800">Nice to meet you!</h2>
        <p className="text-sm text-gray-500">Create your account</p>
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
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
          autoComplete="email"
        />
      </div>
      <div>
        <label
          htmlFor="identifier"
          className="block mb-1 font-semibold text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onChange}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
          autoComplete="username"
        />
      </div>

      <div>
        <label
          htmlFor="identifier"
          className="block mb-1 font-semibold text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={fullname}
          onChange={onChange}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transitio"
          required
          autoComplete="fullname"
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
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transitio"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-[1.02] hover:from-blue-600 hover:to-pink-600 transition-all duration-200 active:scale-95"
        disabled={isLoading}
      >
        {isLoading ? "Registering..." : "Register"}
      </button>
      <p className="text-base text-gray-800 text-center">
        Already have an account?{" "}
        <Link to="/" className="text-blue-500 underline">
          Log In
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
