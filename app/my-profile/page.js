import Link from "next/link";
import SignOutButton from "@/components/auth/SignOutButton";
import ProfileHeader from "@/components/profile/ProfileHeader";
import UserAvatar from "@/components/profile/UserAvatar";
import { requireSession } from "@/lib/session";

export const metadata = {
  title: "আমার প্রোফাইল — বাজার দর",
};

const joinedDateFormatter = new Intl.DateTimeFormat("bn-BD", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Dhaka",
});

export default async function MyProfilePage() {
  const { user } = await requireSession("/my-profile");

  const infoRows = [
    { label: "নাম", value: user.name },
    { label: "ইমেইল", value: user.email },
    {
      label: "অ্যাকাউন্ট খোলার তারিখ",
      value: joinedDateFormatter.format(new Date(user.createdAt)),
    },
  ];

  return (
    <main className="mx-auto w-full max-w-2xl space-y-6 px-4 py-8 sm:py-10">
      <ProfileHeader
        title="আমার প্রোফাইল"
        subtitle="আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।"
      />

      <section className="flex flex-col gap-4 rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex min-w-0 items-center gap-4">
          <UserAvatar user={user} />
          <div className="min-w-0">
            <p className="truncate text-lg font-semibold sm:text-xl">{user.name}</p>
            <p className="truncate text-sm text-base-content/65">{user.email}</p>
          </div>
        </div>
        <SignOutButton />
      </section>

      <section className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-6">
        <h2 className="mb-4 text-lg font-bold">তথ্য</h2>

        <dl className="divide-y divide-base-300 rounded-2xl border border-base-300">
          {infoRows.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <dt className="text-sm text-base-content/60">{row.label}</dt>
              <dd className="break-all font-medium sm:text-right">{row.value}</dd>
            </div>
          ))}
        </dl>

        <Link href="/my-profile/update" className="btn btn-primary mt-5 w-full shadow-sm">
          তথ্য আপডেট করুন
        </Link>
      </section>
    </main>
  );
}