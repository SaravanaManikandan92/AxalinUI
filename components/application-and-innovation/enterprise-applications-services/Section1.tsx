import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Integration Failures",
      description:
        "Data silos and inconsistent workflows between critical systems.",
      icon: InformationCircleIcon,
    },
    {
      name: "Performance Bottlenecks",
      description:
        "Slow applications due to improper configuration or aging infrastructure.",
      icon: InformationCircleIcon,
    },
    {
      name: "Cost Overruns",
      description: "Unoptimized licensing and excessive maintenance costs.",
      icon: InformationCircleIcon,
    },
    {
      name: "Our Expertise",
      description:
        "We are proud to be Multi Vendor Technology experts and partners with key application providers: SAP, Oracle, and Microsoft.",
      icon: InformationCircleIcon,
    },
    {
      name: "Experience-Driven Approach",
      description:
        "Our leadership team's 50+ years of combined experience in IT service delivery ensures we bring mature governance and proven optimization strategies to your core systems.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Why Core Systems Require Specialized Management
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Mandate for Optimized Enterprise Applications
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Enterprise applications like SAP, Oracle, and Microsoft Dynamics are
            complex, resource-intensive, and critical for business functions
            (Finance, HR, Supply Chain). Without specialized expertise,
            businesses face:
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
