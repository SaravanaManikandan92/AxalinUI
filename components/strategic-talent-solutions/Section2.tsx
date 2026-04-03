import { InformationCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Section2() {
  const features = [
    {
      name: "Traditional Staffing",
      description:
        "Permanent or contract placements of vetted IT specialists, including developers, analysts, and managers, through rigorous screening processes.",
      icon: InformationCircleIcon,
      href: "/strategic-talent-solutions/traditional-staffing",
    },
    {
      name: "Offshore Staff Augmentation",
      description:
        "Cost-efficient remote teams from global talent pools, providing extended hours and specialized skills without geographical limitations.",
      icon: InformationCircleIcon,
      href: "/strategic-talent-solutions/offshore-staff-augmentation",
    },
    {
      name: "Onshore Staff Augmentation",
      description:
        "Local experts for direct collaboration, ensuring cultural alignment and hands-on support for critical projects.",
      icon: InformationCircleIcon,
      href: "/strategic-talent-solutions/onshore-staff-augmentation",
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Our Strategic Talent Solutions Services
          </h2>
          <p className="mt-6 text-lg/8 text-gray-700">
            With a dedicated acquisition team and BOT models, Axalin connects
            certified professionals across IT and ITES, with CoE support for
            high-quality talent solutions.
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
                  {feature.description}{" "}
                  <Link
                    href={feature.href}
                    className="font-medium text-[#08549c] hover:text-[#086ac1]"
                  >
                    More details
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
