import { useState } from "react";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const setters: {
      [key: string]: React.Dispatch<React.SetStateAction<string>>;
    } = {
      email: setEmail,
      username: setUsername,
      fullname: setFullname,
      password: setPassword,
    };

    if (setters[name]) setters[name](value);
  };
  

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!username || !password || !email || !fullname) {
        throw new Error("All fields are required");
      }

      const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          fullname: fullname,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail || "Registration failed. Please try again."
        );
      }

      const data = await response.json();

      // Dispatch login action with the new data structure
      dispatch(
        login({
          user: data.user,
          accessToken: data.access,
          refreshToken: data.refresh,
        })
      );

      setUsername("");
      setEmail("");
      setFullname("");
      setPassword("");

      // Navigate to dashboard after successful registration
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    username,
    fullname,
    password,
    handleChange,
    handleSubmit,
    isLoading,
    error,
  };
};
