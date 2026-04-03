import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section3() {
  const features = [
    {
      name: "Managed Cloud Solutions",
      description:
        "24/7 monitoring and active management with tools like DataDog and Newrelic to prevent performance degradation and cost creep.",
      icon: InformationCircleIcon,
    },
    {
      name: "Managed Security Operations (MSO)",
      description:
        "Proactive threat hunting and incident response using Sentinel One and Splunk to keep your Zero Trust perimeter secure.",
      icon: InformationCircleIcon,
    },
    {
      name: "IT Governance, Risk & Compliance (GRC)",
      description:
        "Implementing automated controls to ensure your optimized environment maintains regulatory adherence continuously.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Continuous Optimization Through Managed Services
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Optimization Outcome: Sustained Performance
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Modernization is an ongoing process. Once your infrastructure is
            modernized, we ensure its sustained efficiency and security through
            our continuous Managed Services model.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
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
