import { useRegister } from "../hooks/useRegister";
import RegisterForm from "../components/forms/RegisterForm";
import React from "react";

const RegisterPage: React.FC = () => {
  const {
    email,
    username,
    fullname,
    password,
    handleChange,
    handleSubmit,
    isLoading,
    error,
  } = useRegister();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 px-6">
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
    </main>
  );
};
export default RegisterPage;
