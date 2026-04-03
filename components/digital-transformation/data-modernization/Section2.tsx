import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section2() {
  const features1 = [
    {
      name: "Legacy Data Migration",
      description:
        "Securely and seamlessly migrate data from costly, rigid on-premise systems (like traditional data warehouses) to the cloud. Consolidate scattered data sources into a single, reliable source of truth.",
      icon: InformationCircleIcon,
    },
    {
      name: "Cloud Data Warehouse/Lakehouse Architecture",
      description:
        "Build scalable and flexible Cloud Data Platforms on AWS, Microsoft Azure, or Google Cloud, ensuring cost-effective storage and rapid processing. Utilize advanced data engineering techniques to optimize data flow and access for both operational and analytical use cases.",
      icon: InformationCircleIcon,
    },
    {
      name: "Real-Time Data Integration",
      description:
        "Implement ETL/ELT pipelines to ensure continuous, real-time data ingestion, enabling immediate decision-making and operational responsiveness.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            From Silos to a Unified Data Lakehouse
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Building Your Cloud Data Platform
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            We leverage our partnership status with the world’s leading cloud
            providers to design and implement a modern, future-proof data
            architecture.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Core Platform Services
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
      </div>
    </div>
  );
}
