"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TopNav } from "@/components/TopNav";

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      alert(`Successfully ${isLogin ? "logged in" : "registered"}! Redirecting to dashboard...`);
      router.push("/onboarding");
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleGoogleSignIn = () => {
    alert("This would initiate Google OAuth sign-in flow.");
    router.push("/onboarding");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <TopNav />
      <div className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {isLogin ? "Welcome back!" : "Create your account"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <button
              onClick={handleGoogleSignIn}
              className="group relative flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M5.27 9.76A7.08 7.08 0 0 1 12 5c1.62 0 3.06.55 4.21 1.45l3.15-3.15A11.96 11.96 0 0 0 12 0 12 12 0 0 0 1.24 5.88l4.03 3.88z"/>
                  <path fill="#34A853" d="M16.04 18.01A7.03 7.03 0 0 1 12 19c-2.69 0-5-1.5-6.18-3.76l-4.02 3.8A11.9 11.9 0 0 0 12 24c3.19 0 6.07-1.24 8.21-3.32l-4.17-2.67z"/>
                  <path fill="#4A90E2" d="M12 12c1.71 0 3.25.61 4.47 1.82l3.5-3.5A11.84 11.84 0 0 0 12 5c-2.07 0-4.01.53-5.71 1.5l4.13 4.13c1.36-1.36 2.58-2.86 3.58-4.63z"/>
                  <path fill="#FBBC05" d="M5.82 14.12l-.95.97 3.44 3.27 4.12-4.12-.89-.83-3.46-3.28-4.26 4.09z"/>
                </svg>
              </span>
              Continue with Google
            </button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with email</span>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <button type="button" className="text-sm text-blue-600 hover:text-blue-500">Forgot password?</button>
                </div>
              )}

              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isLogin ? "Sign in" : "Create account"}
              </button>
            </form>

            <p className="text-xs text-center text-gray-500">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}