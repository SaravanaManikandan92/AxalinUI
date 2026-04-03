import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section() {
  const features = [
    {
      name: "The Power of Experience",
      description:
        "Our strategies are powered by a leadership team with 50+ years of combined experience in IT service delivery, ensuring every solution is built on a proven foundation.",
      icon: InformationCircleIcon,
    },
    {
      name: "Undivided Attention and Customization",
      description:
        "We believe each client is important to us, and we treat you as such. You will receive a dedicated account manager who acts as your single point of contact. This manager ensures you get custom & tailor-made solutions, not generic packages. We are just one call away, providing the experience of having a dedicated Technology and Staffing team set apart to work solely for you.",
      icon: InformationCircleIcon,
    },
    {
      name: "Certified Multi-Vendor Experts",
      description:
        "We are Multi Vendor Technology experts—not tied to a single platform. As partners with SAP, Oracle, Microsoft, AWS, Azure, and Okta, we recommend the right technology for your specific business goal, every time.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Why Axalin?
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Your Unique Competitive Advantage
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            We eliminate the impersonal service and risk associated with larger
            firms by combining mature expertise with a commitment to
            personalized partnership:
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
