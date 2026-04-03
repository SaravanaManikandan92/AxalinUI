export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <img
        alt="Managed Cloud Solutions and FinOps"
        src="../assets/managed-cloud-solutions-and-finOps.png"
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
              Effortless Cloud Operations: Comprehensive Managed Cloud Solutions
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              Don't just exist in the cloud—thrive there. Axalin's Managed Cloud
              Solutions remove the burden of day-to-day management, ensuring
              your AWS, Azure, and GCP environments are continuously optimized
              for performance, security, and cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
