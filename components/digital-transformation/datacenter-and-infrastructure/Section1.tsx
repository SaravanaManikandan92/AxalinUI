import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Custom & Tailor-Made Solutions",
      description:
        "We approach each client with custom solutions, understanding that your datacenter’s IT vision is unique.",
      icon: InformationCircleIcon,
    },
    {
      name: "Decades of Expertise",
      description:
        "Our leadership team brings 50+ years of combined experience in IT service delivery to your infrastructure project.",
      icon: InformationCircleIcon,
    },
    {
      name: "Strategic Integration",
      description:
        "We architect your datacenter to easily connect with partners like AWS, Microsoft Azure, and Google Cloud, through solutions like AWS Outposts or Azure Stack.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            The Foundation of a Successful Hybrid Strategy
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Critical Role of Datacenter Services in Digital Transformation
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            While the Public Cloud offers immense scalability, a robust,
            modernized, and efficiently managed datacenter remains the strategic
            core for many enterprises. This is particularly true for workloads
            with strict compliance, high-performance computing, or unique
            security needs.
          </p>
          <p className="mt-6 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            Do I still need Datacenter Services if I use the Cloud?
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Absolutely. Modern business relies on a Hybrid IT Model. Axalin's
            Datacenter Services ensure your on-premise assets complement your
            public cloud investment, creating a unified, flexible, and
            cost-effective operational environment.
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
