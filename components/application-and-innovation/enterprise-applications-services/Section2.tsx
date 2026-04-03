import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section2() {
  const features1 = [
    {
      name: "Strategic Deployment",
      description:
        "Implementing new modules or full-scale EAS systems tailored to your industry (Finance & Banking, E-commerce, Manufacturing, etc.).",
      icon: InformationCircleIcon,
    },
    {
      name: "Seamless Integration",
      description:
        "Developing robust APIs and middleware to ensure your EAS connects flawlessly with surrounding systems, including Custom Application Development and Data Modernization platforms.",
      icon: InformationCircleIcon,
    },
  ];
  const features2 = [
    {
      name: "Cloud Migration for EAS",
      description:
        "Strategically migrating your on-premise EAS systems to a Cloud Platform Partner (AWS, Azure, GCP) to improve scalability, disaster recovery, and cost efficiency.",
      icon: InformationCircleIcon,
    },
    {
      name: "Performance Tuning",
      description:
        "Optimizing database configurations, application code, and infrastructure to eliminate latency and boost transactional speeds.",
      icon: InformationCircleIcon,
    },
  ];
  const features3 = [
    {
      name: "24/7 Monitoring and Administration",
      description:
        "Providing continuous technical support, patch management, and security monitoring to maintain system stability and compliance.",
      icon: InformationCircleIcon,
    },
    {
      name: "Upgrade Management",
      description:
        "Planning and executing complex version upgrades and application enhancements with minimal disruption.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Full Lifecycle Management for SAP, Oracle, and Microsoft
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Core Enterprise Application Services
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            We provide end-to-end services, from implementation and migration to
            ongoing support and performance tuning.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Implementation and Integration
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features1.map((feature) => (
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
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Optimization and Performance Tuning
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features2.map((feature) => (
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
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Managed Services and Support
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features3.map((feature) => (
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
