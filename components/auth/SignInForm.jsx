"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { authErrorMessage } from "@/lib/auth-errors";
import SocialLoginButtons from "./SocialLoginButtons";

export default function SignInForm({ redirectTo, loginRequired, socialError }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loginRequired) {
        toast("এই পেজ দেখতে আগে সাইন ইন করুন।", {
        id: "login-required",
        icon: "🔒",
      });
    }
    if (socialError) {
      toast.error("সোশ্যাল লগইন সম্পন্ন হয়নি। আবার চেষ্টা করুন।", {
        id: "social-error",
      });
    }
  }, [loginRequired, socialError]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    // Validation
    if (!email || !password) {
      toast.error("ইমেইল ও পাসওয়ার্ড দুটোই লিখুন।");
      return;
    }

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });

    if (error) {
      toast.error(authErrorMessage(error));
      setLoading(false);
      return;
    }

    toast.dismiss("login-required");
    toast.success("সফলভাবে সাইন ইন হয়েছে। স্বাগতম!");
    router.replace(redirectTo);
    router.refresh();
  };

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
            autoComplete="current-password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            className="input w-full border-base-300 bg-base-100"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full shadow-sm"
        >
          {loading && <span className="loading loading-spinner loading-sm" />}
          {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
        </button>
      </form>

      <div className="divider my-1 text-xs text-base-content/50">অথবা</div>

      <SocialLoginButtons redirectTo={redirectTo} />

      <p className="text-center text-sm text-base-content/70">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="font-medium text-primary hover:underline">
          সাইন আপ করুন
        </Link>
      </p>
    </div>
  );
}