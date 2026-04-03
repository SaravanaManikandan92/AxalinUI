import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Exploding Cloud Costs (The 'Bill Shock')",
      description:
        "Unoptimized resources and underutilized capacity lead to wasteful spending.",
      icon: InformationCircleIcon,
    },
    {
      name: "Security and Compliance Gaps",
      description:
        "A rapidly evolving threat landscape requires 24/7 vigilance and specialized security tools.",
      icon: InformationCircleIcon,
    },
    {
      name: "Lack of Internal Bandwidth",
      description:
        "Your skilled engineering team is stuck on maintenance instead of focusing on innovation.",
      icon: InformationCircleIcon,
    },
    {
      name: "The Axalin Solution",
      description:
        "We act as your dedicated Technology and Staffing team, leveraging our Multi Vendor Technology experts & Certified Professionals to guarantee efficiency.",
      icon: InformationCircleIcon,
    },
    {
      name: "50+ Years of Experience",
      description:
        "Our leadership brings decades of collective experience to apply proven Managed Services frameworks to your cloud environment.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Why In-House Cloud Management Often Falls Short
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Challenge of Unmanaged Cloud
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            The public cloud offers unparalleled agility, but managing it
            effectively is complex and resource-intensive. Without expert
            governance, organizations frequently face three major issues:
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
