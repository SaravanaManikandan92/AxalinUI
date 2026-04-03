export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <img
        alt="Datacenter and Infrastructure"
        src="../assets/datacenter-and-infrastructure.png"
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
              Optimize Your Core Infrastructure: Strategic Datacenter Services
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              Axalin modernizes your on-premise, co-located, and private cloud
              infrastructure, ensuring it is secure, highly resilient, and
              seamlessly integrated with your overall digital strategy. We make
              your datacenter a foundation, not a bottleneck.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
