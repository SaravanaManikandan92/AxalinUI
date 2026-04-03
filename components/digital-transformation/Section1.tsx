import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Operational Efficiency",
      description:
        "Automate tasks and streamline workflows to cut costs and speed up market delivery.",
      icon: InformationCircleIcon,
    },
    {
      name: "Enhanced Customer Experiences",
      description:
        "Use data analytics for personalized, seamless interactions that boost loyalty.",
      icon: InformationCircleIcon,
    },
    {
      name: "Innovation and Agility",
      description:
        "Adopt AI and IoT to adapt quickly and uncover new revenue streams.",
      icon: InformationCircleIcon,
    },
    {
      name: "Scalable Growth",
      description:
        "Build flexible infrastructures to support expansion without added complexity.",
      icon: InformationCircleIcon,
    },
    {
      name: "Risk Reduction",
      description:
        "Implement robust data governance and security to mitigate digital threats.",
      icon: InformationCircleIcon,
    },
    {
      name: "Competitive Advantage",
      description:
        "Gain real-time insights to outpace competitors and drive strategic decisions.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            What is Digital Transformation?
          </h2>
          <p className="mt-6 text-lg/8 text-gray-700">
            Digital transformation integrates advanced digital technologies into
            every facet of your business, fundamentally reshaping operations,
            customer value delivery, and market competitiveness. Axalin goes
            beyond digitization by modernizing legacy systems, automating
            workflows, and fostering innovation. Our holistic approach drives
            efficiency, agility, data-driven decisions, and superior customer
            experiences for sustainable growth in a competitive digital economy.
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
