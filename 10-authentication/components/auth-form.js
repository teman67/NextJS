"use client";

import { useFormState } from "react-dom";
import { useState } from "react";

import { signup, login } from "@/actions/auth-actions";

function SignupForm({ onToggle }) {
  const [formState, formAction] = useFormState(signup, {});

  return (
    <>
      <form id="auth-form" action={formAction} noValidate>
        <div>
          <img src="/images/auth-icon.jpg" alt="A lock icon" />
        </div>
        <p>
          <label htmlFor="signup-email">Email</label>
          <input type="email" name="email" id="signup-email" />
        </p>
        <p>
          <label htmlFor="signup-password">Password</label>
          <input type="password" name="password" id="signup-password" />
        </p>
        {formState.errors && (
          <ul id="form-errors">
            {Object.keys(formState.errors).map((error) => (
              <li key={error}>{formState.errors[error]}</li>
            ))}
          </ul>
        )}
        <p>
          <button type="submit">Create Account</button>
        </p>
        <p>
          <button type="button" onClick={onToggle}>
            Login with existing account
          </button>
        </p>
      </form>
    </>
  );
}

function LoginForm({ onToggle }) {
  const [formState, formAction] = useFormState(login, {});

  return (
    <>
      <form id="auth-form" action={formAction} noValidate>
        <div>
          <img src="/images/auth-icon.jpg" alt="A lock icon" />
        </div>
        <p>
          <label htmlFor="login-email">Email</label>
          <input type="email" name="email" id="login-email" />
        </p>
        <p>
          <label htmlFor="login-password">Password</label>
          <input type="password" name="password" id="login-password" />
        </p>
        {formState.errors && (
          <ul id="form-errors">
            {Object.keys(formState.errors).map((error) => (
              <li key={error}>{formState.errors[error]}</li>
            ))}
          </ul>
        )}
        <p>
          <button type="submit">Login</button>
        </p>
        <p>
          <button type="button" onClick={onToggle}>
            Create new account instead
          </button>
        </p>
      </form>
    </>
  );
}

export default function AuthForm() {
  const [isLoginMode, setIsLoginMode] = useState(false);

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div>
      {isLoginMode ? (
        <LoginForm onToggle={toggleMode} />
      ) : (
        <SignupForm onToggle={toggleMode} />
      )}
    </div>
  );
}
