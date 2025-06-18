import React from "react";

interface LoginFormProps {
  identifier: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  error: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({
  identifier,
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
      <h2 className="text-xl font-semibold text-center">Login</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="identifier" className="block mb-1 font-medium">
          Email or Username
        </label>
        <input
          type="text"
          id="identifier"
          name="identifier"
          value={identifier}
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
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
