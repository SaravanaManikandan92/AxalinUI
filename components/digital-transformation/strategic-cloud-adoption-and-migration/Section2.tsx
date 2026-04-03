import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function ServicesSection() {
  const features = [
    {
      name: "Assess & Strategize",
      action:
        "Inventory IT assets, define TCO (Total Cost of Ownership), and select the right cloud model (Public, Private, or Hybrid).",
      result:
        "A comprehensive Cloud Adoption Strategy and ROI projection tailored to your specific needs.",
      icon: InformationCircleIcon,
    },
    {
      name: "Plan & Design",
      action:
        "Detailed architecture design, security blueprint (including integrating partners like Okta and SentinelOne), and compliance mapping.",
      result:
        "A secure, scalable, and compliant architecture built for the future.",
      icon: InformationCircleIcon,
    },
    {
      name: "Migrate & Execute",
      action:
        "Utilizing proven methodologies (Re-host, Re-platform, Re-factor) and the right tools for fast, reliable data and application transfer. ",
      result:
        "Minimal downtime and a seamless transition to the new environment.",
      icon: InformationCircleIcon,
    },
    {
      name: "Optimize & Govern",
      action:
        "Implementing FinOps to continuously optimize cloud spend, establishing robust governance, and automating scaling.",
      result:
        "An efficient, high-performing, and controlled cloud environment, ready for growth.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            The Four Phases of a Successful Cloud Journey
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Our End-to-End Cloud Adoption Framework
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            We simplify the complexity of cloud migration into a clear,
            actionable roadmap, ensuring a secure and optimized final state.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
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
                <dt className="inline font-semibold text-gray-900">Action:</dt>{" "}
                <dd className="inline">{feature.action}</dd>
                <div className="mt-2 text-base/7 text-gray-700">
                  <dt className="inline font-semibold text-gray-900">
                    Result:
                  </dt>{" "}
                  <dd className="inline">{feature.result}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
