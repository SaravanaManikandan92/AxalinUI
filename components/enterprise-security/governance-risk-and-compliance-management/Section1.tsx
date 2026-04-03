import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Experience-Backed Strategy",
      description:
        "Axalin, founded in 2021, guides its GRC practice with the 50+ years of combined experience that our leadership team brings from successfully managing IT and compliance for complex enterprises.",
      icon: InformationCircleIcon,
    },
    {
      name: "Focus on People, Process & Technology",
      description:
        "Our GRC solutions empower your people with clear policies, optimize processes for continuous monitoring, and leverage advanced technology for automated reporting.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Navigating Complexity with a Single, Trusted Framework
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Mandate for Integrated GRC
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            In the age of accelerated Digital Transformation and multi-cloud
            operations, managing Governance, Risk, and Compliance (GRC) as
            separate functions is inefficient and dangerous. A unified GRC
            strategy is essential for making informed decisions and protecting
            stakeholder trust.
          </p>
          <p className="mt-6 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            Why is GRC critical for a business undergoing digital
            transformation?
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            As you adopt new technologies (Cloud Adoption, Data Modernization),
            your risk profile and regulatory surface expand exponentially. GRC
            ensures that new initiatives align with your internal governance
            policies, proactively assesses risks before they occur, and
            maintains continuous adherence to all legal and industry standards.
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
