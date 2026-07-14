"use client";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-green-700">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mt-8"
        />

        <button
          className="w-full mt-6 bg-green-700 text-white p-3 rounded-lg"
        >
          Send Reset Link
        </button>

      </div>

    </div>
  );
}