import { useRegister } from "../hooks/useRegister";
import RegisterForm from "../components/forms/RegisterForm";
import React from "react";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const { email,username,fullname, password, handleChange, handleSubmit, isLoading, error } =
    useRegister();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <RegisterForm
          email={email}
          username={username}
          fullname={fullname}
          password={password}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />
        <p>
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 underline">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
};
export default RegisterPage;
