import { InformationCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Section1() {
  const features = [
    {
      name: "Modernization and Optimization",
      description:
        "Revamp legacy applications with cloud-native architectures, microservices, and performance tuning to extend lifespan and enhance functionality.",
      icon: InformationCircleIcon,
      href: "/application-and-innovation/it-modernization-and-optimization",
    },
    {
      name: "Custom Application Development",
      description:
        "Design and build bespoke software from scratch, incorporating agile methodologies, DevOps practices, and rigorous testing for reliable, user-focused outcomes.",
      icon: InformationCircleIcon,
      href: "/application-and-innovation/custom-app-development-and-modernization",
    },
    {
      name: "AI Automation and Orchestration",
      description:
        "Deploy AI models for intelligent automation, process orchestration, and predictive analytics to streamline operations and enable smart decision-making.",
      icon: InformationCircleIcon,
      href: "/application-and-innovation/ai-automation-and-orchestration",
    },
    {
      name: "Enterprise Applications Services",
      description:
        "Manage, customize, and integrate large-scale systems like ERP and CRM, ensuring seamless interoperability and ongoing support.",
      icon: InformationCircleIcon,
      href: "/application-and-innovation/enterprise-applications-services",
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Our Application and Innovation Services
          </h2>
          <p className="mt-6 text-lg/8 text-gray-700">
            Partnered with SAP, Oracle, Microsoft, Splunk, and Atlassian, Axalin
            delivers certified developers and BOT models. Our CoE drives
            innovation for sustained impact.
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
