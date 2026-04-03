import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Experience-Driven Strategy",
      description:
        "While Axalin was founded in 2021, our strategy is built upon the 50+ years of combined experience that our leadership team brings from successfully managing large-scale IT and data projects.",
      icon: InformationCircleIcon,
    },
    {
      name: "Custom Blueprint",
      description:
        "We approach each client with custom & tailor-made solutions, ensuring your new data platform is designed specifically for your industry expertise (Finance & Banking, E-commerce, Healthcare, etc.).",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            The Bottleneck: Legacy Data Systems
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Why Your Data Needs to be Modernized
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            In the digital age, data is your most valuable asset, yet most
            enterprises struggle with systems that are too slow, too rigid, and
            too fragmented to extract real value.
          </p>
          <p className="mt-6 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            What does Data Modernization involve?
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Data Modernization is the strategic overhaul of your entire data
            ecosystem—including databases, data warehouses, and data lakes—to be
            cloud-ready, scalable, and capable of supporting advanced analytics.
            It is the necessary first step before leveraging Business
            Intelligence and AI.
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
