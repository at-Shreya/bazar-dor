"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
      setLoading(false);
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে।");
    router.push("/");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={loading}
      className="btn btn-outline btn-error btn-sm sm:btn-md"
    >
      {loading ? (
        <span className="loading loading-spinner loading-sm" />
      ) : (
        <span aria-hidden="true">↩</span>
      )}
      সাইন আউট
    </button>
  );
}