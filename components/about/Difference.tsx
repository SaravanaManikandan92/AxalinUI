import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Difference() {
  const features = [
    {
      name: "Undivided Attention",
      description:
        "You receive a dedicated account manager who serves as your single point of contact for all services. We are just one call away, providing you with the experience of having a dedicated Technology and Staffing team set apart to work solely for you.",
      icon: InformationCircleIcon,
    },
    {
      name: "Custom & Tailor-Made Solutions",
      description:
        "We understand that each business’s IT vision is unique. We never use one-size-fits-all packages, instead designing every solution to precisely fit your operational needs and strategic goals.",
      icon: InformationCircleIcon,
    },
    {
      name: "Certified Multi-Vendor Expertise",
      description:
        "Our team of Multi Vendor Technology experts is certified across all major platforms, including AWS, Azure, Okta, SAP, and Oracle. This means we recommend the best technology for you, not just the easiest for us.",
      icon: InformationCircleIcon,
    },
    {
      name: "Flexible Engagement Model",
      description:
        "Our Build – Operate - Transfer model minimizes risk during complex projects, allowing us to manage implementation, ensure stabilization, and seamlessly transfer knowledge back to your team.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            The Axalin Difference
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Why We Are Your Dedicated Partner
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            We believe each client is important to us, and we treat you as such.
            This commitment is the heart of our service model and the reason
            mid-tier and Enterprise companies choose Axalin.
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
