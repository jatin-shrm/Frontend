import React from "react";

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
      className="max-w-sm mx-auto p-4 border rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Register</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="identifier" className="block mb-1 font-medium">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="identifier" className="block mb-1 font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="identifier" className="block mb-1 font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={fullname}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block mb-1 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
