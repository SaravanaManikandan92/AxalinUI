import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function ServicesSection() {
  const features = [
    {
      name: "Expert Guidance",
      description:
        "Our approach is guided by our leadership team's 50+ years of combined experience in IT service delivery.",
      icon: InformationCircleIcon,
    },
    {
      name: "Built for Multi-Cloud",
      description:
        "We ensure your new network provides optimized, low-latency access to our partners like AWS, Azure, and Google Cloud.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Why Traditional Networks Can't Keep Up
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Bottleneck of Legacy Networks
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Legacy network architecture—often based on outdated hardware, rigid
            configurations, and high-cost MPLS circuits—cannot handle the
            demands of the modern enterprise. They are too slow, too complex to
            manage, and lack the necessary security for cloud-first strategies.
          </p>
          <p className="mt-6 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            Why is Network Modernization critical for digital transformation?
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Network Modernization is the necessary pre-cursor to successful
            Cloud Adoption and Migration and Data Modernization. You need a
            dynamic network capable of prioritizing critical traffic, securing
            every connection point, and flexing instantly to meet application
            demand.
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
