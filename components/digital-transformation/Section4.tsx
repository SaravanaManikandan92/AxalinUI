import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section4() {
  const features = [
    {
      name: "Finance & Banking",
      description:
        "Enhance compliance and fraud detection with real-time analytics.",
      icon: InformationCircleIcon,
    },
    {
      name: "E-commerce",
      description:
        "Optimize supply chains with real-time inventory management.",
      icon: InformationCircleIcon,
    },
    {
      name: "Logistics",
      description: "Implement IoT for tracking and predictive maintenance.",
      icon: InformationCircleIcon,
    },
    {
      name: "Manufacturing",
      description: "Automate production with smart factory solutions.",
      icon: InformationCircleIcon,
    },
    {
      name: "Healthcare",
      description: "Secure patient data and enable telemedicine platforms.",
      icon: InformationCircleIcon,
    },
    {
      name: "Education",
      description: "Create virtual learning environments with cloud tools.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Industries We Serve
          </h2>
          <p className="mt-6 text-lg/8 text-gray-700">
            Axalin tailors digital transformation to meet sector-specific needs:
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
