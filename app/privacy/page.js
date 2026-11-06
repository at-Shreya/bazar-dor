import Link from "next/link";

export const metadata = {
  title: "গোপনীয়তা নীতি — বাজার দর",
  description: "বাজার দর কী তথ্য সংগ্রহ করে এবং কীভাবে ব্যবহার করে",
};

const sections = [
  {
    title: "আমরা কী তথ্য সংগ্রহ করি",
    points: [
      "ইমেইল দিয়ে সাইন আপ করলে: আপনার নাম, ইমেইল ঠিকানা এবং পাসওয়ার্ড। পাসওয়ার্ড সরাসরি সংরক্ষণ করা হয় না, নিরাপদভাবে hash করে রাখা হয়।",
      "Google বা GitHub দিয়ে সাইন ইন করলে: সেখান থেকে শুধু আপনার নাম, ইমেইল ঠিকানা এবং প্রোফাইল ছবি নেওয়া হয়।",
      "সাইন ইন অবস্থা মনে রাখার জন্য একটি session cookie ব্যবহার করা হয়।",
    ],
  },
  {
    title: "তথ্য কেন ব্যবহার করা হয়",
    points: [
      "আপনাকে সাইন ইন করানো এবং পণ্যের বিস্তারিত দামের মতো সুরক্ষিত পেজ দেখানোর জন্য।",
      "আমার প্রোফাইল পেজে আপনার নাম, ইমেইল ও ছবি দেখানোর জন্য।",
      "আপনার তথ্য বিক্রি করা হয় না, বিজ্ঞাপনে ব্যবহার করা হয় না এবং অন্য কারও সাথে শেয়ার করা হয় না।",
    ],
  },
  {
    title: "তথ্য কোথায় রাখা হয়",
    points: [
      "অ্যাকাউন্টের তথ্য MongoDB Atlas ডেটাবেসে সংরক্ষিত থাকে এবং সাইটটি Vercel-এ চলে।",
      "পণ্যের দামের তথ্য একটি পাবলিক API থেকে আসে; সেখানে আপনার কোনো ব্যক্তিগত তথ্য পাঠানো হয় না।",
    ],
  },
  {
    title: "আপনার নিয়ন্ত্রণ",
    points: [
      "আমার প্রোফাইল পেজ থেকে যেকোনো সময় নিজের নাম বদলাতে পারবেন।",
      "সাইন আউট করলে এই ডিভাইস থেকে আপনার session মুছে যায়।",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-10">
      <article className="space-y-6 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
        <header>
          <h1 className="text-2xl font-bold sm:text-3xl">গোপনীয়তা নীতি</h1>
          <p className="mt-2 text-sm text-base-content/65">
            বাজার দর একটি শিক্ষামূলক প্রজেক্ট, যেখানে বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের
            দাম দেখানো হয়। এই পেজে বলা আছে সাইটটি আপনার কী তথ্য রাখে এবং কেন।
          </p>
        </header>

        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-2 text-lg font-semibold">{section.title}</h2>
            <ul className="list-disc space-y-1.5 pl-5 text-base-content/80">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}

        <p className="border-t border-base-300 pt-4 text-sm">
          <Link href="/" className="text-primary hover:underline">
            ← হোম পেজে ফিরে যান
          </Link>
        </p>
      </article>
    </main>
  );
}