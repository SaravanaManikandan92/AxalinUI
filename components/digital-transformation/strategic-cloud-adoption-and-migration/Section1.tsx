import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function ServicesSection() {
  const features = [
    {
      name: "Custom & Tailor-Made Solutions",
      description:
        "We start with a deep-dive assessment to understand your unique IT vision. We don't use templates—we design a strategy that aligns perfectly with your business goals.",
      icon: InformationCircleIcon,
    },
    {
      name: "Multi-Cloud Expertise",
      description:
        "As partners with Amazon Web Services (AWS), Microsoft Azure, Google Cloud, and Digital Ocean, we guarantee the right platform fit for your workload.",
      icon: InformationCircleIcon,
    },
    {
      name: "Risk Mitigation",
      description:
        "Our phased approach minimizes operational risk and ensures business continuity throughout the entire migration process.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Move Beyond Lift-and-Shift: The Axalin Difference
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Why Your Cloud Journey Needs Axalin
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Cloud migration is more than moving servers; it's about
            re-architecting for efficiency and speed. Leveraging our leadership
            team's 50+ years of combined experience in IT service delivery, we
            provide a structured methodology that ensures you capture the
            maximum value of the cloud.
          </p>
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
