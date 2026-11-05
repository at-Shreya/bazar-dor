import Image from "next/image";
import BanglaDate from "@/components/navbar/BanglaDate";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 px-6 py-8 shadow-sm sm:px-10 sm:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative grid items-center gap-8 md:grid-cols-[3fr_2fr]">
        
        <div className="text-center md:text-left">
          
          <BanglaDate className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm" />

          
          <h1 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          
          <p className="mx-auto mt-4 max-w-xl text-base-content/70 sm:text-lg md:mx-0">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          
          <a href="#সব-পণ্য" className="btn btn-primary mt-6 shadow-sm sm:btn-lg">
            সব পণ্য দেখুন
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <Image
            src="/bazar-hero.png"
            alt="সবজি ও ফলভর্তি বাজারের ঝুড়ি"
            width={315}
            height={263}
            preload
            className="h-auto w-56 sm:w-64 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}