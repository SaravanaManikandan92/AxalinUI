import { CalendarDateRangeIcon } from "@heroicons/react/20/solid";

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <img
        alt="Digital Transformation"
        src="./assets/digital-transformation.png"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black opacity-60 rounded-lg inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      />
      <div className="py-24 sm:py-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Unlock Digital Excellence with Axalin's Transformation Services
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              Axalin empowers organizations from startups to enterprises with
              over 50 years of combined IT leadership experience. By blending
              technical expertise with business insight, we focus on people,
              processes, and technology to drive innovation across industries
              like finance, e-commerce, logistics, manufacturing, healthcare,
              and education.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-x-2 rounded-md bg-[#08549c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#086ac1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#08549c]"
              >
                <CalendarDateRangeIcon
                  aria-hidden="true"
                  className="-ml-0.5 size-5"
                />
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
