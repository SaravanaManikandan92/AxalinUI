import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section5() {
  const features = [
    {
      name: "Personalized Attention",
      description:
        "Dedicated account managers and tailor-made solutions prioritize your business.",
      icon: InformationCircleIcon,
    },
    {
      name: "Proven Expertise",
      description:
        "50+ years of IT experience with certifications in AWS, Azure, and more.",
      icon: InformationCircleIcon,
    },
    {
      name: "Flexible Models",
      description: "BOT allows internal capability building with CoE support.",
      icon: InformationCircleIcon,
    },
    {
      name: "Multi-Vendor Mastery",
      description:
        "Partnerships with leading cloud platforms ensure best-fit solutions.",
      icon: InformationCircleIcon,
    },
    {
      name: "Commitment to Success",
      description: "Focus on measurable outcomes like cost savings and growth.",
      icon: InformationCircleIcon,
    },
    {
      name: "Trustworthy Support",
      description:
        "One-call access to dedicated teams acting as your extension.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Why Choose Axalin for Digital Transformation?
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#08549c]">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
