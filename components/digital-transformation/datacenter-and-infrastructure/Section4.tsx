import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section4() {
  const features = [
    {
      name: "24/7 Monitoring and Support",
      description:
        "Proactive monitoring with tools like DataDog and Newrelic to anticipate and resolve issues before they impact your business.",
      icon: InformationCircleIcon,
    },
    {
      name: "Patch and Life Cycle Management",
      description:
        "Automated patching, firmware updates, and hardware refresh planning to maintain peak performance and security compliance.",
      icon: InformationCircleIcon,
    },
    {
      name: "Security and Compliance Management",
      description:
        "Ensure your physical and virtual infrastructure meets industry compliance standards (e.g., ISO, HIPAA, PCI) with integrated security solutions like Sentinel One.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Outsource Complexity, Retain Control
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Axalin’s Managed Datacenter Services (24/7 Support)
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Free your internal IT staff from the demanding routine of
            infrastructure management. Our Managed Services provide full
            operational coverage for your datacenter assets.
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
