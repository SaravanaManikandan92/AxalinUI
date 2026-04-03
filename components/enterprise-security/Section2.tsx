import { InformationCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Section1() {
  const features = [
    {
      name: "Information and Cyber Security",
      description:
        "Implement multi-layered defenses including firewalls, encryption, intrusion detection systems, and vulnerability scanning to combat evolving cyber threats effectively.",
      icon: InformationCircleIcon,
      href: "/enterprise-security/cyber-security-and-managed-security",
    },
    {
      name: "Governance, Risk & Compliance",
      description:
        "Develop comprehensive frameworks for risk assessment, policy enforcement, and audit readiness, ensuring alignment with global standards like GDPR and NIST.",
      icon: InformationCircleIcon,
      href: "/enterprise-security/governance-risk-and-compliance-management",
    },
    {
      name: "Identity and Access Management",
      description:
        "Secure user identities with multi-factor authentication, role-based access controls, and privileged access management to prevent unauthorized breaches.",
      icon: InformationCircleIcon,
      href: "/enterprise-security/identity-and-access-management",
    },
    {
      name: "Managed Security Operations",
      description:
        "Offer 24/7 security operations center (SOC) services for real-time monitoring, threat hunting, and automated responses to maintain vigilant protection.",
      icon: InformationCircleIcon,
      href: "/enterprise-security/managed-security-operations-and-soc",
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Our Enterprise Security Services
          </h2>
          <p className="mt-6 text-lg/8 text-gray-700">
            Leveraging partnerships with top security tools like Acronis,
            Sentinel One, Okta, DataDog, New Relic, and Armis, Axalin delivers
            certified professionals and custom solutions. Our flexible models,
            including BOT, ensure seamless integration, with our CoE providing
            expert contributions for tailored, high-impact security strategies.
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
