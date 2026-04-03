import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Contract/Contingent Staffing",
      description:
        "For project-based work, skill gaps, or covering temporary demands.",
      icon: InformationCircleIcon,
    },
    {
      name: "Contract-to-Hire",
      description:
        "A flexible model to evaluate a candidate's fit before committing to direct employment.",
      icon: InformationCircleIcon,
    },
    {
      name: "Direct Hire/Permanent Placement",
      description:
        "Sourcing and placing candidates for your long-term, core positions.",
      icon: InformationCircleIcon,
    },
    {
      name: "Dedicated Focus",
      description:
        "We serve start-ups, mid-tier, and Enterprise companies across a wide range of practice areas, including Human Resources. ",
      icon: InformationCircleIcon,
    },
    {
      name: "Experience-Backed Vetting",
      description:
        "Our quality process is informed by our leadership team's 50+ years of combined experience in IT service delivery, ensuring we only present candidates who meet our high standards.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Beyond Recruiting: Our Strategic Approach to Staffing
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Foundation of Strategic Talent Solutions
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Filling a role quickly is one thing; filling it with talent that
            drives long-term impact is another. Our Traditional Staffing service
            is the cornerstone of our Strategic Talent Solutions, ensuring every
            hire aligns with your organizational growth and IT vision. We offer
            flexible staffing solutions tailored to your business needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
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
