"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17.3 4.8 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

const PROVIDERS = [
  { id: "google", label: "Google দিয়ে চালিয়ে যান", Icon: GoogleIcon },
  { id: "github", label: "GitHub দিয়ে চালিয়ে যান", Icon: GitHubIcon },
];

export default function SocialLoginButtons({ redirectTo = "/" }) {
  const [loadingProvider, setLoadingProvider] = useState(null);

  const handleSocialLogin = async (provider) => {
    setLoadingProvider(provider);

    const separator = redirectTo.includes("?") ? "&" : "?";

    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: `${redirectTo}${separator}auth=social`,
      errorCallbackURL: "/signin",
    });

    if (error) {
      toast.error("সোশ্যাল লগইন শুরু করা যায়নি। আবার চেষ্টা করুন।");
      setLoadingProvider(null);
    }
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {PROVIDERS.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => handleSocialLogin(id)}
          disabled={loadingProvider !== null}
          className="btn btn-outline whitespace-nowrap border-base-300 bg-base-100 px-3 text-sm font-medium hover:border-primary/40 hover:bg-base-200"
        >
          {loadingProvider === id ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            <Icon />
          )}
          {label}
        </button>
      ))}
    </div>
  );
}