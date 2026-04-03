import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function ServicesSection() {
  const features = [
    {
      name: "Experience-Backed Strategy",
      description:
        "While Axalin was founded in 2021, our strategy is underpinned by the 50+ years of combined experience our leadership team brings from navigating complex IT and security landscapes.",
      icon: InformationCircleIcon,
    },
    {
      name: "Integrated Solutions",
      description:
        "We ensure security is integrated, not bolted on, aligning with your ongoing Cloud Adoption and Migration and Data Modernization efforts.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Moving Beyond the Perimeter: Why Traditional Defenses Fail
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The New Reality of Cyber Risk
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Today's enterprise operates in a distributed, multi-cloud
            environment where the traditional network perimeter no longer
            exists. This shift creates massive security gaps, making your
            organization vulnerable to sophisticated attacks.
          </p>
          <p className="mt-6 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            What is a Zero Trust security framework?
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Zero Trust is a security model that operates on the principle:
            "Never trust, always verify." It assumes every user, device, and
            application attempting to access resources—whether inside or outside
            the network—is a potential threat. Axalin engineers this framework
            to protect your most critical assets granularly.
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
