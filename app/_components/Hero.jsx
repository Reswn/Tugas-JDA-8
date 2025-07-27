"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-16 lg:py-24">
      {/* Text Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Spend Wisely, Live Freely{" "}
          <strong className="text-indigo-600">Optimize Your</strong> Budget
        </h1>

        <p className="mt-4 text-base text-gray-700 sm:text-lg">
          Take control of your finances. Track your expenses, manage budgets,
          and reach your financial goals with clarity and confidence.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-4xl mt-10 px-4">
        <Image
          src="/dashboard.png"
          alt="dashboard"
          width={1000}
          height={700}
          className="w-full h-auto rounded-xl border-2"
        />
      </div>
    </section>
  );
};

export default Hero;
