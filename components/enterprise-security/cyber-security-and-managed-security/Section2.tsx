import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section2() {
  const features1 = [
    {
      name: "Proactive Threat Hunting",
      description:
        "We leverage advanced EDR (Endpoint Detection and Response) tools like Sentinel One to continuously monitor, analyze, and neutralize threats before they cause damage.",
      icon: InformationCircleIcon,
    },
    {
      name: "24/7 Security Operations",
      description:
        "Our Security Operations Center (SOC) provides round-the-clock monitoring and incident triage, acting as your dedicated defense force.",
      icon: InformationCircleIcon,
    },
    {
      name: "Security Analytics (SIEM)",
      description:
        "We utilize technologies like Splunk to aggregate and analyze security data across your entire infrastructure, identifying hidden vulnerabilities and attack patterns.",
      icon: InformationCircleIcon,
    },
  ];
  const features2 = [
    {
      name: "Managed Identity",
      description:
        "Secure access is the new security perimeter. We deploy and manage IAM solutions, leveraging partners like Okta, to provide secure, single sign-on access while strictly enforcing conditional access policies based on user context and risk.",
      icon: InformationCircleIcon,
    },
    {
      name: "Multi-Factor Authentication (MFA)",
      description:
        "Implementing and managing MFA across all critical systems to prevent unauthorized access.",
      icon: InformationCircleIcon,
    },
  ];
  const features3 = [
    {
      name: "Cloud Security Posture Management (CSPM)",
      description:
        "Automated scanning and governance of your AWS, Azure, and GCP environments to correct misconfigurations that leave you exposed.",
      icon: InformationCircleIcon,
    },
    {
      name: "Vulnerability and Patch Management",
      description:
        "Continuous scanning to identify software vulnerabilities and managing patch deployment to minimize your attack surface.",
      icon: InformationCircleIcon,
    },
    {
      name: "Asset Visibility",
      description:
        "Utilize tools like Armis to gain complete visibility into all connected devices, especially IoT and unmanaged assets within your Datacenter Services and network.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            End-to-End Protection, Detection, and Response
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Axalin's Core Cyber Security Pillars
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            We offer a comprehensive suite of services built around proactive
            defense and rapid response capabilities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Managed Detection and Response (MDR)
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
              Identity and Access Management (IAM)
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
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Cloud and Infrastructure Security
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
