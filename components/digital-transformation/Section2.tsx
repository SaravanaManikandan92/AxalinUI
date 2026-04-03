import { InformationCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Section1() {
  const features = [
    {
      name: "Cloud Adoption and Migration",
      description:
        "Seamless cloud transitions with assessments, migration roadmaps, and execution, ensuring data integrity and scalability.",
      icon: InformationCircleIcon,
      href: "/digital-transformation/strategic-cloud-adoption-and-migration",
    },
    {
      name: "Datacenter Services",
      description:
        "Optimize on-premise or hybrid datacenters with automation, improving energy efficiency and disaster recovery.",
      icon: InformationCircleIcon,
      href: "/digital-transformation/datacenter-and-infrastructure",
    },
    {
      name: "Managed Cloud Solutions",
      description:
        "24/7 monitoring, maintenance, and cost optimization for agile, secure cloud environments.",
      icon: InformationCircleIcon,
      href: "/digital-transformation/managed-cloud-solutions-and-finOps",
    },
    {
      name: "Network Modernization",
      description:
        "Upgrade networks with SDN and zero-trust architectures for enhanced connectivity and security.",
      icon: InformationCircleIcon,
      href: "/digital-transformation/network-modernization",
    },
    {
      name: "Data Modernization",
      description:
        "Transform data silos into actionable insights with analytics, AI, and compliant data lakes.",
      icon: InformationCircleIcon,
      href: "/digital-transformation/data-modernization",
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Our Digital Transformation Services
          </h2>
          <p className="mt-6 text-lg/8 text-gray-700">
            Axalin’s comprehensive offerings reinvent business models and
            enhance customer journeys. Partnered with AWS, Microsoft Azure,
            Google Cloud, and Digital Ocean, we deliver certified professionals
            through flexible models like Build-Operate-Transfer (BOT). Our
            Center of Excellence (CoE) ensures tailor-made solutions for your IT
            vision.
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
