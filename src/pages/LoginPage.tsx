import LoginForm from "../components/forms/LoginForm";
import { useLogin } from "../hooks/useLogin";
import React from "react";

const LoginPage: React.FC = () => {
  const { identifier, password, handleChange, handleSubmit, isLoading, error } =
    useLogin();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 px-6">
      <LoginForm
        identifier={identifier}
        password={password}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
      
    </main>
  );
};
export default LoginPage;