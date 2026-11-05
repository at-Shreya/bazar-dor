"use client";

import Link from "next/link";

export default function AuthButtons() {
  // BetterAuth add 
  const user = null;

  const handleSignOut = () => {
  };

  // Sign in and sign up
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

  // dropdown
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
        <span className="hidden font-medium sm:inline">{user.name}</span>
        <span aria-hidden="true" className="text-xs opacity-60">
          ▾
        </span>
      </div>

      <ul
        tabIndex={-1}
        className="dropdown-content menu z-50 mt-2 w-48 rounded-box border border-base-300 bg-base-100 p-2 shadow-md"
      >
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