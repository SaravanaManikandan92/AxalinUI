import { InformationCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Section2() {
  const features1 = [
    {
      name: "Cloud Adoption and Migration",
      description:
        "Guaranteed efficiency and scale. Strategic migration and cost-optimized management across AWS, Azure, and GCP.",
      icon: InformationCircleIcon,
      href: "/digital-transformation/strategic-cloud-adoption-and-migration",
    },
    {
      name: "Managed Cloud Solutions",
      description:
        "Predictable costs. 24/7 managed services with continuous FinOps (cost optimization) and governance.",
      icon: InformationCircleIcon,
      href: "/digital-transformation/managed-cloud-solutions-and-finOps",
    },
    {
      name: "Network Modernization",
      description:
        "High-speed agility. Implementation of SD-WAN and intelligent networks to eliminate bottlenecks.",
      icon: InformationCircleIcon,
      href: "/digital-transformation/network-modernization",
    },
    {
      name: "Data Modernization",
      description:
        "Data-driven advantage. Unifying data silos, building data platforms, and preparing data for AI Automation.",
      icon: InformationCircleIcon,
      href: "/digital-transformation/data-modernization",
    },
    {
      name: "Datacenter Services",
      description:
        "Resilient core. Modernization, virtualization, and strategic consolidation of on-premise infrastructure.",
      icon: InformationCircleIcon,
      href: "/digital-transformation/datacenter-and-infrastructure",
    },
  ];
  const features2 = [
    {
      name: "Information and Cyber Security",
      description:
        "Proactive defense. Security assessments, threat hunting, and multi-environment protection.",
      icon: InformationCircleIcon,
      href: "/enterprise-security/cyber-security-and-managed-security",
    },
    {
      name: "Managed Security Operations (MSO)",
      description:
        "Continuous coverage. 24/7 monitoring and rapid incident response using tools like Sentinel One and Splunk.",
      icon: InformationCircleIcon,
      href: "/enterprise-security/managed-security-operations-and-soc",
    },
    {
      name: "Identity and Access Management (IAM)",
      description:
        "Secured access. Access control, Okta integration, and Multi-Factor Authentication (MFA) for Zero Trust implementation.",
      icon: InformationCircleIcon,
      href: "/enterprise-security/identity-and-access-management",
    },
    {
      name: "Governance, Risk & Compliance (GRC)",
      description:
        "Unbreakable compliance. Enterprise risk management, security awareness, and regulatory mapping (HIPAA, ISO).",
      icon: InformationCircleIcon,
      href: "/enterprise-security/governance-risk-and-compliance-management",
    },
  ];
  const features3 = [
    {
      name: "Custom Application Development",
      description:
        "Unique competitive edge. Building cloud-native web and mobile solutions tailored to your specific business logic.",
      icon: InformationCircleIcon,
      href: "/application-and-innovation/custom-app-development-and-modernization",
    },
    {
      name: "AI Automation and Orchestration",
      description:
        "Hyper-efficiency and ROI. Deploying intelligent workflows, Machine Learning, and Generative AI to automate core processes.",
      icon: InformationCircleIcon,
      href: "/application-and-innovation/ai-automation-and-orchestration",
    },
    {
      name: "Enterprise Applications Services",
      description:
        "Core system reliability. Expert management, integration, and optimization for systems like SAP, Oracle, and Microsoft.",
      icon: InformationCircleIcon,
      href: "/application-and-innovation/enterprise-applications-services",
    },
    {
      name: "Modernization & Optimization",
      description:
        "Performance acceleration. Legacy application modernization, DevOps implementation, and performance engineering.",
      icon: InformationCircleIcon,
      href: "/application-and-innovation/it-modernization-and-optimization",
    },
  ];
  const features4 = [
    {
      name: "Traditional Staffing",
      description:
        "Rapid skill acquisition. Permanent, contract-to-hire, and executive placement for critical IT roles.",
      icon: InformationCircleIcon,
      href: "/strategic-talent-solutions/traditional-staffing",
    },
    {
      name: "Onshore Staff Augmentation",
      description:
        "Local expertise and seamless fit. Deploying local experts for critical, compliance-sensitive roles.",
      icon: InformationCircleIcon,
      href: "/strategic-talent-solutions/onshore-staff-augmentation",
    },
    {
      name: "Offshore Staff Augmentation",
      description:
        "Cost-effective scale. Accessing high-quality global talent to expand your team affordably and quickly.",
      icon: InformationCircleIcon,
      href: "/strategic-talent-solutions/offshore-staff-augmentation",
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Our Integrated Service Pillars
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Driving Business Value
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Our solutions are built around four core service pillars, ensuring
            that your technology investments translate directly into business
            value.
          </p>
        </div>
        <div className="overflow-hidden bg-white mt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                    Digital Transformation
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-700">
                    Transform your IT foundation to drive operational
                    efficiency, agility, and cost control. This pillar focuses
                    on the core infrastructure and data architecture necessary
                    for sustained growth, ensuring your systems are ready for
                    the cloud, AI, and scale.{" "}
                    <Link
                      href="/digital-transformation"
                      className="font-medium text-[#08549c] hover:text-[#086ac1]"
                    >
                      More details
                    </Link>
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {features1.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute top-1 left-1 size-5 text-[#08549c]"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">
                          {feature.description}{" "}
                          <Link
                            href={feature.href}
                            className="font-medium text-[#08549c] hover:text-[#086ac1]"
                          >
                            Read more
                          </Link>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="flex align-middle">
                <img
                  alt="Product screenshot"
                  src="./assets/placeholder_image.jpg"
                  width={256}
                  height={256}
                  className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-150 md:-ml-4 lg:-ml-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Enterprise Security
            </p>
            <p className="mt-6 text-lg/8 text-gray-700">
              Protect your business with a proactive, end-to-end security
              posture that eliminates risk and guarantees compliance. We replace
              perimeter defense with a comprehensive Zero Trust model, backed by
              24/7 expert monitoring.{" "}
              <Link
                href="/enterprise-security"
                className="font-medium text-[#08549c] hover:text-[#086ac1]"
              >
                More details
              </Link>
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features2.map((feature) => (
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
                    Read more
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Application and Innovations
            </p>
            <p className="mt-6 text-lg/8 text-gray-700">
              Build, modernize, and integrate the software that drives your
              unique competitive edge and accelerates time-to-market. We ensure
              your applications are flexible, high-performing, and seamlessly
              connected to your core systems and data.{" "}
              <Link
                href="/application-and-innovation"
                className="font-medium text-[#08549c] hover:text-[#086ac1]"
              >
                More details
              </Link>
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features3.map((feature) => (
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
                    Read more
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden bg-white mt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex align-middle">
                <img
                  alt="Product screenshot"
                  src="./assets/placeholder_image.jpg"
                  width={256}
                  height={256}
                  className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-150 md:-ml-4 lg:-ml-0"
                />
              </div>
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                    Strategic Talent Solutions
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-700">
                    Access the right expertise immediately with flexible
                    staffing models that reduce recruitment costs and accelerate
                    project timelines. We eliminate the burden of recruiting and
                    ensure you have access to specialized certified experts
                    exactly when you need them.{" "}
                    <Link
                      href="/strategic-talent-solutions"
                      className="font-medium text-[#08549c] hover:text-[#086ac1]"
                    >
                      More details
                    </Link>
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {features4.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute top-1 left-1 size-5 text-[#08549c]"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">
                          {feature.description}{" "}
                          <Link
                            href={feature.href}
                            className="font-medium text-[#08549c] hover:text-[#086ac1]"
                          >
                            Read more
                          </Link>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
