"use client";

import { useFormState } from "react-dom";
import { useState } from "react";

import { signup, login } from "@/actions/auth-actions";

function SignupForm({ onToggle }) {
  const [formState, formAction] = useFormState(signup, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-8">
          <img
            src="/images/auth-icon.jpg"
            alt="A lock icon"
            className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg"
          />
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-600 mt-2">Sign up to get started</p>
        </div>

        <form action={formAction} noValidate className="space-y-6">
          <div>
            <label
              htmlFor="signup-email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="signup-email"
              className="block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-gray-900 bg-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="signup-password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="signup-password"
              className="block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-gray-900 bg-white"
              placeholder="Enter your password (min 8 characters)"
            />
          </div>

          {formState.errors && (
            <div className="bg-red-50 border border-red-400 rounded-md p-4">
              <ul className="list-none text-red-600 text-sm">
                {Object.keys(formState.errors).map((error) => (
                  <li key={error} className="flex items-center">
                    <span className="mr-2">•</span>
                    {formState.errors[error]}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
          >
            Create Account
          </button>

          <button
            type="button"
            onClick={onToggle}
            className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
          >
            Login with existing account
          </button>
        </form>
      </div>
    </div>
  );
}

function LoginForm({ onToggle }) {
  const [formState, formAction] = useFormState(login, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-8">
          <img
            src="/images/auth-icon.jpg"
            alt="A lock icon"
            className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg"
          />
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <form action={formAction} noValidate className="space-y-6">
          <div>
            <label
              htmlFor="login-email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="login-email"
              className="block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-gray-900 bg-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="login-password"
              className="block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-gray-900 bg-white"
              placeholder="Enter your password"
            />
          </div>

          {formState.errors && (
            <div className="bg-red-50 border border-red-400 rounded-md p-4">
              <ul className="list-none text-red-600 text-sm">
                {Object.keys(formState.errors).map((error) => (
                  <li key={error} className="flex items-center">
                    <span className="mr-2">•</span>
                    {formState.errors[error]}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={onToggle}
            className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
          >
            Create new account instead
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AuthForm() {
  const [isLoginMode, setIsLoginMode] = useState(false);

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <>
      {isLoginMode ? (
        <LoginForm onToggle={toggleMode} />
      ) : (
        <SignupForm onToggle={toggleMode} />
      )}
    </>
  );
}
