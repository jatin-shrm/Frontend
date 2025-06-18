import { useState } from "react";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "identifier") setIdentifier(value);
    if (name === "password") setPassword(value);
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!identifier || !password) {
        throw new Error("Username and password are required");
      }

      const response = await fetch("http://127.0.0.1:8000/api/auth/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username_field: identifier,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed. Please try again.");
      }

      const data = await response.json();
      
      // Dispatch login action with the new data structure
      dispatch(login({
        user: data.user,
        accessToken: data.access,
        refreshToken: data.refresh
      }));

      setIdentifier("");
      setPassword("");
      
      // Navigate to dashboard after successful login
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    identifier,
    password,
    handleChange,
    handleSubmit,
    isLoading,
    error,
  };
};
