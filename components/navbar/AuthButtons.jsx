"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function AuthButtons() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    document.activeElement?.blur();

    const { error } = await authClient.signOut();
    if (error) {
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে।");
    router.push("/");
    router.refresh();
  };

  if (isPending) {
    return (
      <div className="flex items-center gap-2" aria-label="লোড হচ্ছে">
        <div className="skeleton size-8 rounded-full" />
        <div className="skeleton hidden h-4 w-20 sm:block" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/signin" className="btn btn-ghost btn-sm text-primary sm:btn-md">
          সাইন ইন
        </Link>
        <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">
          সাইন আপ
        </Link>
      </div>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm gap-2 px-2 sm:btn-md"
      >
        {user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.image}
            alt={user.name}
            className="size-8 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="grid size-8 place-items-center rounded-full bg-primary/15 font-semibold text-primary">
            {user.name?.charAt(0) ?? "?"}
          </span>
        )}
        <span className="hidden max-w-32 truncate font-medium sm:inline">
          {user.name}
        </span>
        <span aria-hidden="true" className="text-xs opacity-60">
          ▾
        </span>
      </div>

      <ul
        tabIndex={-1}
        className="dropdown-content menu z-50 mt-2 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow-md"
      >
        <li className="menu-title truncate px-3 text-xs font-normal">{user.email}</li>
        <li>
          <Link href="/my-profile">আমার প্রোফাইল</Link>
        </li>
        <li>
          <button type="button" onClick={handleSignOut} className="text-error">
            সাইন আউট
          </button>
        </li>
      </ul>
    </div>
  );
}