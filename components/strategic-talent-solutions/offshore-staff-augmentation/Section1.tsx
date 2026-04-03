import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function ServicesSection() {
  const features = [
    {
      name: "Cost Efficiency",
      description:
        "Accessing expert talent in high-value, lower-cost global markets, significantly reducing salary and overhead expenses.",
      icon: InformationCircleIcon,
    },
    {
      name: "Rapid Scalability",
      description:
        "Instantly scaling your team up or down based on project demand, aligning perfectly with our Flexible Engagement Model.",
      icon: InformationCircleIcon,
    },
    {
      name: "Global Expertise",
      description:
        "Tapping into deep, niche skill sets (e.g., specialized Cloud or AI Automation engineers) that may be scarce or overly expensive locally.",
      icon: InformationCircleIcon,
    },
    {
      name: "Our Commitment",
      description:
        "We ensure the quality of every placed professional is backed by the 50+ years of combined experience of our leadership team in IT service delivery.",
      icon: InformationCircleIcon,
    },
    {
      name: "Integrated Solutions",
      description:
        "Offshore resources are fully prepared to support our core Digital Transformation services, including Custom Application Development and Data Modernization.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Scale Smarter: Bridging Talent Gaps and Reducing Costs
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Strategic Advantage of Offshore Augmentation
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            In today's competitive IT landscape, finding specialized skills
            quickly and affordably is a constant challenge. Offshore Staff
            Augmentation solves this by providing:
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
