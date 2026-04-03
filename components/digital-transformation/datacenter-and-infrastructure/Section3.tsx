import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section3() {
  const features = [
    {
      name: "Disaster Recovery (DR) Planning",
      description:
        "Develop and rigorously test comprehensive DR plans, including automated failover and failback procedures.",
      icon: InformationCircleIcon,
    },
    {
      name: "High Availability (HA) Cluster Implementation",
      description:
        "Design and deploy active-active or active-passive clusters for mission-critical systems.",
      icon: InformationCircleIcon,
    },
    {
      name: "Backup and Recovery Management",
      description:
        "Integrate and manage industry-leading backup solutions, including those leveraging partners like Acronis, ensuring rapid data recovery from any incident.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Engineered for Zero Downtime
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            High Availability and Business Resilience
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Business continuity is non-negotiable. We build resilience directly
            into your datacenter architecture, ensuring that critical
            applications and data are always available.
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
