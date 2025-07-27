"use client";

import { signIn } from "next-auth/react";

export default function Page() {
  return (
    <main className="w-full flex">
      {/* Kiri - Gambar dan info */}
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <img src="/logo.svg" width={150} alt="Logo" />
          <div className="mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Start growing your business quickly
            </h3>
            <p className="text-gray-300">
              Create an account and get access to all features for 30-days. No
              credit card required.
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              {/* Avatar dummy */}
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="avatar"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="avatar"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5">
                Join 5,000+ users
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>

      {/* Kanan - Tombol Sign Up */}
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0 text-center">
          <h2 className="text-2xl font-semibold">Sign Up to your account</h2>
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up with Google
          </button>
        </div>
      </div>
    </main>
  );
}
