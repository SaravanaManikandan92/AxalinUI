import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section2() {
  const features1 = [
    {
      name: "How can Axalin lower my cloud bill?",
      description:
        "Axalin implements a proactive FinOps (Cloud Financial Operations) model. We continuously analyze usage, enforce right-sizing, manage reserved instances and savings plans, and implement automated policies to eliminate waste, guaranteeing you pay only for what you need.",
      icon: InformationCircleIcon,
    },
  ];
  const features2 = [
    {
      name: "24/7 Proactive Monitoring and Support",
      description:
        "We utilize advanced tools like DataDog and Newrelic to provide comprehensive monitoring of infrastructure, applications, and performance metrics. Our global team provides 24/7/365 support and incident response, ensuring issues are detected and resolved—often before you even know they exist.",
      icon: InformationCircleIcon,
    },
    {
      name: "Security and Governance Management",
      description:
        "We enforce enterprise-grade cloud security best practices, including Identity and Access Management (IAM) governed by partners like Okta. We manage and deploy next-generation security tools like Sentinel One to protect workloads and endpoints within the cloud environment, ensuring continuous compliance.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Continuous Optimization: Performance, Security, and Cost Control
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Core Managed Cloud Services and FinOps
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Our services are built around a robust framework designed to
            maximize the ROI of your multi-cloud investment.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Cloud Cost Management (FinOps)
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
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
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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
      </div>
    </div>
  );
}
