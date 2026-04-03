import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section2() {
  const features1 = [
    {
      name: "Endpoint Protection",
      description:
        "We deploy and manage next-generation Endpoint Detection and Response (EDR) solutions, utilizing partners like Sentinel One, to detect and block threats on laptops, servers, and virtual machines before they execute.",
      icon: InformationCircleIcon,
    },
    {
      name: "Security Information and Event Management (SIEM)",
      description:
        "We aggregate security data from every source—cloud logs, network devices, applications—into platforms like Splunk for centralized correlation and analysis.",
      icon: InformationCircleIcon,
    },
    {
      name: "Vulnerability Scanning",
      description:
        "Continuous scanning and monitoring of infrastructure and applications to identify weaknesses and prioritize remediation based on risk.",
      icon: InformationCircleIcon,
    },
  ];
  const features2 = [
    {
      name: "24/7/365 Monitoring",
      description:
        "Our certified SOC analysts monitor your environment non-stop, providing rapid initial triage of alerts, eliminating false positives, and escalating true threats immediately.",
      icon: InformationCircleIcon,
    },
    {
      name: "Threat Intelligence",
      description:
        "We integrate global threat intelligence feeds into our platform, allowing us to proactively search for indicators of compromise (IOCs) relevant to your industry.",
      icon: InformationCircleIcon,
    },
  ];
  const features3 = [
    {
      name: "Containment and Eradication",
      description:
        "Upon confirmed threat detection, we immediately activate automated and manual response procedures to contain the attack and prevent lateral movement.",
      icon: InformationCircleIcon,
    },
    {
      name: "Forensics and Recovery",
      description:
        "We assist with digital forensics to determine the source and scope of the incident, and coordinate recovery efforts using continuity tools like Acronis for data restoration.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Comprehensive Coverage Across Your Digital Landscape
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin MSO Framework: Detect, Analyze, Respond
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Our MSO service is built on three pillars, providing deep visibility
            and actionable security intelligence across your environment.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Threat Detection and Hunting
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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
              Incident Triage and Analysis
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
              Rapid Response and Remediation
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
