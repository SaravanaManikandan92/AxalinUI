import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Financial Efficiency",
      description:
        "Converting CapEx to OpEx, eliminating waste, and reducing the Total Cost of Ownership (TCO).",
      icon: InformationCircleIcon,
    },
    {
      name: "Operational Agility",
      description:
        "Enabling quick pivots, supporting remote work, and accelerating time-to-market for new products.",
      icon: InformationCircleIcon,
    },
    {
      name: "Security and Resilience",
      description:
        "Building a robust, Zero Trust foundation that protects against modern threats.",
      icon: InformationCircleIcon,
    },
    {
      name: "Our Experience",
      description:
        "While Axalin was founded in 2021, our strategies are built upon the deep industry knowledge and proven methods derived from the 50+ years of combined experience of our leadership team.",
      icon: InformationCircleIcon,
    },
    {
      name: "The Approach",
      description:
        "We focus on People, Process & Technology, ensuring that the technology modernization is matched by updated operational processes and empowered teams.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            The Cost of Standing Still: Why Legacy IT Fails
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Why Modernization is Essential for Survival
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Enterprises relying on outdated systems face escalating maintenance
            costs, security vulnerabilities, and a severe loss of competitive
            agility. Axalin provides a strategic, holistic approach to
            modernization focused on three core outcomes:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl px-6 sm:mt-20 md:mt-24 lg:px-8 lg:max-w-5xl">
          <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
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
