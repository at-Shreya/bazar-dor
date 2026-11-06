import Link from "next/link";
import ProfileHeader from "@/components/profile/ProfileHeader";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";
import UserAvatar from "@/components/profile/UserAvatar";
import { requireSession } from "@/lib/session";

export const metadata = {
  title: "তথ্য আপডেট — বাজার দর",
};

export default async function UpdateProfilePage() {
  const { user } = await requireSession("/my-profile/update");

  return (
    <main className="mx-auto w-full max-w-2xl space-y-6 px-4 py-8 sm:py-10">
      <Link href="/my-profile" className="text-sm text-base-content/60 hover:text-primary">
        ← আমার প্রোফাইলে ফিরে যান
      </Link>

      <ProfileHeader
        title="তথ্য আপডেট করুন"
        subtitle="আপনার নাম বদলাতে নিচের ফর্মটি পূরণ করুন।"
      />

      <section className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-6">
        <div className="mb-6 flex min-w-0 items-center gap-4 rounded-2xl bg-base-200/60 p-4">
          <UserAvatar user={user} className="size-12 text-xl" />
          <div className="min-w-0">
            <p className="text-xs text-base-content/60">বর্তমান নাম</p>
            <p className="truncate font-semibold">{user.name}</p>
          </div>
        </div>

        <UpdateProfileForm currentName={user.name} />
      </section>
    </main>
  );
}