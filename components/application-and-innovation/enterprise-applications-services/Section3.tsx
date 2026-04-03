import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Data Unification",
      description:
        "We ensure the transactional data from your EAS feeds smoothly into your modern data platforms for high-level Business Intelligence and AI Automation and Orchestration.",
      icon: InformationCircleIcon,
    },
    {
      name: "Identity Security",
      description:
        "Integrating EAS access with your central Identity and Access Management (IAM) solution (Okta) to enforce Zero Trust security policies across your core systems.",
      icon: InformationCircleIcon,
    },
    {
      name: "Atlassian Integration",
      description:
        "Connecting EAS processes with development and service management platforms (Atlassian) to streamline change requests and issue tracking. ",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Unifying Your Digital Ecosystem
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Integration Advantage
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Enterprise applications cannot exist in a vacuum. Axalin ensures
            your EAS supports your wider digital goals:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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
