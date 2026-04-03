import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section4() {
  const features = [
    {
      name: "Finance & Banking",
      description:
        "Fraud prevention and secure transactions with advanced analytics.",
      icon: InformationCircleIcon,
    },
    {
      name: "Healthcare",
      description: "Protect patient data under HIPAA with secure systems.",
      icon: InformationCircleIcon,
    },
    {
      name: "Manufacturing",
      description:
        "Secure IoT devices in supply chains for operational continuity.",
      icon: InformationCircleIcon,
    },
    {
      name: "E-commerce",
      description: "Safeguard customer data and payment systems.",
      icon: InformationCircleIcon,
    },
    {
      name: "Logistics",
      description:
        "Defend against supply chain disruptions with robust security.",
      icon: InformationCircleIcon,
    },
    {
      name: "Education",
      description:
        "Ensure safe online learning environments with secure platforms.",
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
            Customized security solutions for:
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
