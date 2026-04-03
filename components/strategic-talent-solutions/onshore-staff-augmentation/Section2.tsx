import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section2() {
  const features1 = [
    {
      name: "Targeted Sourcing",
      description:
        "We leverage local networks and specialized recruitment strategies to find Multi Vendor Technology experts & Certified Professionals in specific domestic markets.",
      icon: InformationCircleIcon,
    },
    {
      name: "Cultural and Communication Vetting",
      description:
        "We prioritize candidates with proven communication skills and experience operating within domestic enterprise standards and methodologies (Agile, Scrum).",
      icon: InformationCircleIcon,
    },
  ];
  const features2 = [
    {
      name: "Adaptable Contracts",
      description:
        "Providing talent for Contingent Staffing, Contract-to-Hire, or project-specific needs to align with your budget and internal hiring policies.",
      icon: InformationCircleIcon,
    },
    {
      name: "Compliance Guaranteed",
      description:
        "Axalin manages all local employment contracts, tax obligations, and administrative overhead, ensuring full legal and HR compliance for the augmented staff.",
      icon: InformationCircleIcon,
    },
  ];
  const features3 = [
    {
      name: "Cloud Architects",
      description:
        "Experts in AWS, Azure, and Google Cloud implementation and governance.",
      icon: InformationCircleIcon,
    },
    {
      name: "Cyber Security Analysts",
      description:
        "Specialists for Managed Security Operations (MSO) and Identity and Access Management (IAM).",
      icon: InformationCircleIcon,
    },
    {
      name: "Custom Application Developers",
      description:
        "Senior developers familiar with domestic market standards and regulations.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Vetted Talent, Guaranteed Fit, and Full Compliance
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Axalin’s Onshore Augmentation Model
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Our process ensures you receive local talent that is not only
            technically proficient but also a perfect cultural and operational
            fit for your team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Precision Talent Matching
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
              Flexible Engagement and Compliance
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
              High-Demand Onshore Roles
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
