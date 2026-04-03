import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Experience and Focus",
      description:
        "Our strategy is guided by the 50+ years of combined experience our leadership team brings to enterprise security, ensuring a mature and proven approach to threat management.",
      icon: InformationCircleIcon,
    },
    {
      name: "Cost-Effective Defense",
      description:
        "Gain the capabilities of a world-class SOC team without the capital expense or hiring burden, freeing your internal IT team to focus on core business initiatives.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            The Complexity and Cost of In-House Security Operations
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Challenge of Running Your Own SOC
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Building and maintaining an effective, 24/7 Security Operations
            Center (SOC) is prohibitively expensive and requires constantly
            recruiting scarce, high-level talent. Without continuous coverage,
            even a small gap can lead to a catastrophic breach.
          </p>
          <p className="mt-6 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            What is Managed Security Operations (MSO) or Managed Detection and
            Response (MDR)?
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            MSO/MDR is the outsourcing of security monitoring, detection, and
            incident response to specialized experts. Axalin provides a
            dedicated, 24/7/365 service that leverages advanced tools to hunt
            for hidden threats, analyze security telemetry, and contain attacks
            the moment they are detected.
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
