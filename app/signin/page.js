import { headers } from "next/headers";
import { redirect } from "next/navigation";
import AuthCard from "@/components/auth/AuthCard";
import SignInForm from "@/components/auth/SignInForm";
import { auth } from "@/lib/auth";
import { safeRedirectPath } from "@/lib/auth-errors";

export const metadata = {
  title: "সাইন ইন — বাজার দর",
};

export default async function SignInPage({ searchParams }) {
  const params = await searchParams;
  const redirectTo = safeRedirectPath(params.redirect);

  const session = await auth.api.getSession({ headers: await headers() });
  if (session) {
    redirect(redirectTo);
  }

  return (
    <AuthCard
      title="সাইন ইন"
      subtitle="বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।"
    >
      <SignInForm
        redirectTo={redirectTo}
        loginRequired={Boolean(params.redirect)}
        socialError={Boolean(params.error)}
      />
    </AuthCard>
  );
}