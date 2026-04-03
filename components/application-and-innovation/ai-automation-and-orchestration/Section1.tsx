import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Prerequisite for Success",
      description:
        "Successful AI relies on clean, unified data. Our services integrate tightly with our Data Modernization framework to ensure your data is ready to fuel intelligent automation.",
      icon: InformationCircleIcon,
    },
    {
      name: "Experience-Backed Strategy",
      description:
        "Our leadership's 50+ years of combined experience in IT service delivery ensures we build AI solutions that are governed, scalable, and fully integrated with your existing Enterprise Applications Services (e.g., SAP, Oracle, Microsoft).",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Why Automation Needs Orchestration to Deliver ROI
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Strategic Shift to Orchestrated AI
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Isolated robotic process automation (RPA) tools solve small
            problems, but true digital transformation requires orchestrating
            multiple AI and ML models into end-to-end intelligent workflows.
            This approach drives hyper-automation across complex, multi-system
            processes.
          </p>
          <p className="mt-6 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            What is the difference between AI Automation and AI Orchestration?
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            AI Automation uses technologies like Machine Learning and Generative
            AI to perform specific tasks (e.g., classifying emails). AI
            Orchestration integrates and coordinates multiple automation and
            human tasks across various systems (e.g., automatically processing a
            loan application from initial form intake through document
            verification and final approval).
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
