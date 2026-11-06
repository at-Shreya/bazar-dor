"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm({ currentName }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();

    // Validation
    if (!name) {
      toast.error("নাম খালি রাখা যাবে না।");
      return;
    }
    if (name.length > 50) {
      toast.error("নাম ৫০ অক্ষরের মধ্যে রাখুন।");
      return;
    }
    if (name === currentName) {
      toast("নাম আগের মতোই আছে, কিছু বদলানো হয়নি।", { icon: "ℹ️" });
      return;
    }

    setLoading(true);

    const { error } = await authClient.updateUser({ name });

    if (error) {
      toast.error("তথ্য আপডেট করা যায়নি। আবার চেষ্টা করুন।");
      setLoading(false);
      return;
    }

    toast.success("আপনার তথ্য সফলভাবে আপডেট হয়েছে।");
    router.push("/my-profile");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">নাম</span>
        <input
          type="text"
          name="name"
          defaultValue={currentName}
          autoComplete="name"
          maxLength={50}
          placeholder="যেমন: রহিম উদ্দিন"
          className="input w-full border-base-300 bg-base-100"
        />
      </label>

      <div className="flex flex-col-reverse gap-3 sm:flex-row">
        <Link href="/my-profile" className="btn btn-ghost sm:flex-1">
          বাতিল
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary shadow-sm sm:flex-2"
        >
          {loading && <span className="loading loading-spinner loading-sm" />}
          {loading ? "আপডেট হচ্ছে..." : "তথ্য আপডেট করুন"}
        </button>
      </div>
    </form>
  );
}