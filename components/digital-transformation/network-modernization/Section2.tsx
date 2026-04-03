import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section2() {
  const features1 = [
    {
      name: "Centralized Control",
      description:
        "Move away from manual configurations to a centralized management interface that drastically simplifies WAN operations.",
      icon: InformationCircleIcon,
    },
    {
      name: "Optimized Performance",
      description:
        "Intelligently direct traffic over the best path—whether MPLS, broadband, or 5G—to ensure high-priority applications (like VoIP and SaaS) always perform optimally.",
      icon: InformationCircleIcon,
    },
    {
      name: "Cost Reduction",
      description:
        "Dramatically reduce operational expenses by leveraging more cost-effective internet links instead of expensive, fixed-capacity circuits.",
      icon: InformationCircleIcon,
    },
  ];
  const features2 = [
    {
      name: "Network Automation",
      description:
        "Automate routine tasks and network provisioning, reducing the risk of human error and accelerating deployment times.",
      icon: InformationCircleIcon,
    },
    {
      name: "Flexibility and Scalability",
      description:
        "Deploy flexible virtual network functions (VNFs) and easily adjust network capacity to meet the demands of dynamic workloads, containers, and microservices.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Implementing Intelligent, Software-Defined Connectivity
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Core Network Modernization Pillars
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Axalin focuses on implementing cutting-edge technologies that
            transform your network from a cost center into a strategic asset.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Software-Defined Wide Area Network (SD-WAN)
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
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
              Software-Defined Networking (SDN)
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
      </div>
    </div>
  );
}
