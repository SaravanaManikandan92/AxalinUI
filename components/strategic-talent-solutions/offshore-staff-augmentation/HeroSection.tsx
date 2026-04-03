export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <img
        alt="Offshore Staff Augmentation"
        src="../assets/offshore-staff-augmentation.png"
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
              Offshore Staff Augmentation: High-Quality Talent, Maximized Value
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              Gain immediate access to a vast global pool of highly-skilled,
              certified IT professionals while drastically reducing your
              operational costs. Axalin provides a seamless, governed process to
              integrate dedicated offshore talent directly into your existing
              teams and workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
