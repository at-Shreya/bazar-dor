"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function AuthToastListener() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const authStatus = searchParams.get("auth");

  useEffect(() => {
    if (authStatus !== "social") return;

    toast.success("সফলভাবে সাইন ইন হয়েছে। স্বাগতম!", { id: "social-signin" });

    const params = new URLSearchParams(searchParams.toString());
    params.delete("auth");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [authStatus, searchParams, router, pathname]);

  return null;
}