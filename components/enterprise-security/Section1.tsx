import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Threat Prevention",
      description:
        "Advanced tools detect and neutralize risks before they escalate, minimizing potential damage.",
      icon: InformationCircleIcon,
    },
    {
      name: "Compliance Assurance",
      description:
        "Streamline adherence to regulations, avoiding fines and reputational harm.",
      icon: InformationCircleIcon,
    },
    {
      name: "Rapid Incident Response",
      description:
        "Reduce downtime with structured recovery plans and forensic analysis.",
      icon: InformationCircleIcon,
    },
    {
      name: "Cost Savings",
      description:
        "Proactive security reduces breach-related expenses and optimizes resource allocation.",
      icon: InformationCircleIcon,
    },
    {
      name: "Enhanced Trust",
      description:
        "Build customer and partner confidence through transparent, secure practices.",
      icon: InformationCircleIcon,
    },
    {
      name: "Scalable Protection",
      description:
        "Adapt security measures to growing business needs without compromising efficacy.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            What is Enterprise Security?
          </h2>
          <p className="mt-6 text-lg/8 text-gray-700">
            Enterprise security is a multifaceted framework designed to protect
            an organization's digital ecosystem from internal and external
            threats. It involves deploying advanced technologies for threat
            detection, securing networks, ensuring regulatory compliance, and
            managing incident responses. At Axalin, we provide holistic,
            end-to-end solutions that not only defend against cyberattacks but
            also integrate security into business strategies, promoting secure
            innovation, data privacy, and operational continuity for long-term
            success.
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
