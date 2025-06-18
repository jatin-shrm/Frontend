import LoginForm from "../components/forms/LoginForm";
import { useLogin } from "../hooks/useLogin";
import React from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { identifier, password, handleChange, handleSubmit, isLoading, error } =
    useLogin();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <LoginForm
          identifier={identifier}
          password={password}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};
export default LoginPage;