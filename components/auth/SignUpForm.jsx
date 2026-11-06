"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { authErrorMessage } from "@/lib/auth-errors";
import SocialLoginButtons from "./SocialLoginButtons";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    // Validation
    if (!name) {
      toast.error("আপনার নাম লিখুন।");
      return;
    }
    if (!EMAIL_PATTERN.test(email)) {
      toast.error("সঠিক ইমেইল ঠিকানা লিখুন।");
      return;
    }
    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("দুটো পাসওয়ার্ড মেলেনি।");
      return;
    }

    setLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });

    if (error) {
      toast.error(authErrorMessage(error));
      setLoading(false);
      return;
    }

    await authClient.signOut();

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে! এবার সাইন ইন করুন।");
    router.push("/signin");
    router.refresh();
  };

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">নাম</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="যেমন: রহিম উদ্দিন"
            className="input w-full border-base-300 bg-base-100"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">ইমেইল</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="input w-full border-base-300 bg-base-100"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">পাসওয়ার্ড</span>
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            className="input w-full border-base-300 bg-base-100"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">পাসওয়ার্ড নিশ্চিত করুন</span>
          <input
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="আবার লিখুন"
            className="input w-full border-base-300 bg-base-100"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full shadow-sm"
        >
          {loading && <span className="loading loading-spinner loading-sm" />}
          {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
        </button>
      </form>

      <div className="divider my-1 text-xs text-base-content/50">অথবা</div>

      <SocialLoginButtons />

      <p className="text-center text-sm text-base-content/70">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="font-medium text-primary hover:underline">
          সাইন ইন করুন
        </Link>
      </p>
    </div>
  );
}