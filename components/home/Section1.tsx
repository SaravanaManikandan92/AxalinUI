import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section() {
  const features = [
    {
      name: "Unpredictable Spend and Wastage",
      description:
        "Are you tired of exploding cloud bills that lack transparency? We solve this with disciplined FinOps (Cloud Financial Operations) to ensure you pay only for what you need.",
      icon: InformationCircleIcon,
    },
    {
      name: "Security Anxiety and Risk",
      description:
        "You lack 24/7 coverage and worry about compliance and hidden risks in your multi-cloud environment. We build a Zero Trust framework to protect every asset.",
      icon: InformationCircleIcon,
    },
    {
      name: "Slow Innovation and Talent Gaps",
      description:
        "Your highly-paid internal teams are stuck in maintenance or you can’t find the right specialist. We deploy experts and modern architecture to accelerate your competitive pace.",
      icon: InformationCircleIcon,
    },
    {
      name: "Fragmented Data and Lost Insight",
      description:
        "Data silos across different systems prevent accurate forecasting and block high-value initiatives like AI Automation. We unify your core systems and data streams.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            The Business Pain
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Why IT Fails to Deliver on the Bottom Line
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            You know technology is the key to growth, but often, it feels like
            the biggest drain on resources. We specifically target the critical
            frustrations hindering your bottom line:
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
