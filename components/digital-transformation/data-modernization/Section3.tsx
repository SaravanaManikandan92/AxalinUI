import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section3() {
  const features = [
    {
      name: "Fueling AI Automation",
      description:
        "We structure and prepare your clean, accessible data for consumption by machine learning and Generative AI models. This ensures your AI Automation and Orchestration solutions produce accurate, reliable, and actionable business insights.",
      icon: InformationCircleIcon,
    },
    {
      name: "Business Intelligence (BI) Enablement",
      description:
        "We deploy modern BI tools (like Power BI or Tableau) on top of your new platform, empowering all departments with self-service analytics and visualization capabilities.",
      icon: InformationCircleIcon,
    },
    {
      name: "Data Governance and Quality",
      description:
        "Implementation of robust governance frameworks to manage data access, ensure regulatory compliance, and guarantee data quality—making your data trustworthy for decision-making.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Preparing Your Data for the Future of Intelligence
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            AI Readiness and Advanced Analytics
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            A modernized data platform is the engine for the next era of
            business intelligence and AI.
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
