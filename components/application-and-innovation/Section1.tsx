import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Boosted Efficiency",
      description:
        "Automate workflows to eliminate bottlenecks and accelerate processes.",
      icon: InformationCircleIcon,
    },
    {
      name: "Superior User Experiences",
      description:
        "Create intuitive interfaces for increased satisfaction and retention.",
      icon: InformationCircleIcon,
    },
    {
      name: "Innovation Acceleration",
      description:
        "Harness AI for new product development and market disruption.",
      icon: InformationCircleIcon,
    },
    {
      name: "Cost Optimization",
      description:
        "Modernize legacy systems to reduce maintenance costs and improve ROI.",
      icon: InformationCircleIcon,
    },
    {
      name: "Scalability and Flexibility",
      description:
        "Build apps that adapt to growth and technological advancements.",
      icon: InformationCircleIcon,
    },
    {
      name: "Data-Driven Insights",
      description:
        "Integrate analytics for real-time decisions and predictive capabilities.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            What is Application and Innovation?
          </h2>
          <p className="mt-6 text-lg/8 text-gray-700">
            Application and innovation services encompass the design,
            development, and deployment of advanced software solutions using
            emerging technologies like AI, machine learning, and blockchain.
            Axalin helps organizations modernize applications, automate
            processes, and innovate products to achieve competitive advantages.
            This involves not just coding but strategic alignment, user-centric
            design, and continuous iteration to deliver high-value, scalable
            applications that transform business operations.
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
