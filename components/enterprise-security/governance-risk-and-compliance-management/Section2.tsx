import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section2() {
  const features1 = [
    {
      name: "Policy Design and Implementation",
      description:
        "Developing clear, actionable IT governance policies that guide decision-making for cloud adoption, data handling, and network security.",
      icon: InformationCircleIcon,
    },
    {
      name: "Security Governance",
      description:
        "Establishing security committees, defining roles and responsibilities, and ensuring security standards are consistently applied across all service offerings (including Managed Cloud Solutions and Datacenter Services).",
      icon: InformationCircleIcon,
    },
    {
      name: "Vendor Risk Management",
      description:
        "Establishing standards and oversight for third-party partners and suppliers to mitigate supply chain risks.",
      icon: InformationCircleIcon,
    },
  ];
  const features2 = [
    {
      name: "Enterprise Risk Assessment",
      description:
        "Identifying, quantifying, and prioritizing technological and operational risks across the entire organization.",
      icon: InformationCircleIcon,
    },
    {
      name: "Proactive Risk Mitigation",
      description:
        "Developing strategic controls and response plans to address high-priority risks, moving from reactive responses to proactive planning.",
      icon: InformationCircleIcon,
    },
    {
      name: "Continuous Monitoring",
      description:
        "Utilizing security analytics platforms like Splunk to provide real-time visibility and alerting on potential risks and deviations from the baseline.",
      icon: InformationCircleIcon,
    },
  ];
  const features3 = [
    {
      name: "Regulatory Mapping and Adherence",
      description:
        "Ensuring strict compliance with industry-specific and global regulations (e.g., HIPAA for Healthcare, PCI for E-commerce, GDPR, ISO 27001).",
      icon: InformationCircleIcon,
    },
    {
      name: "Audit Readiness and Support",
      description:
        "Preparing all necessary documentation, running internal audits, and providing expert support during external regulatory reviews.",
      icon: InformationCircleIcon,
    },
    {
      name: "Automated Compliance Checks",
      description:
        "Integrating automated tools into your infrastructure (especially in Cloud and Network Modernization) to continuously scan configurations and flag non-compliant settings instantly.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Unified Solutions for Governance, Risk, and Compliance
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Axalin's Three Pillars of GRC
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Our services cover the full GRC lifecycle, ensuring no critical area
            is overlooked in your digital landscape.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Governance (G)
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features1.map((feature) => (
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
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Risk Management (R)
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
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
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Compliance (C)
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
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
