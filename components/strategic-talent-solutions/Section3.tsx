import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section3() {
  const features = [
    {
      name: "Assessment",
      description: "Understand your needs to align talent with goals.",
      icon: InformationCircleIcon,
    },
    {
      name: "Sourcing",
      description: "Identify and vet candidates from global pools.",
      icon: InformationCircleIcon,
    },
    {
      name: "Onboarding",
      description: "Seamless integration with training and support.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                How We Deliver Strategic Talent Solutions
              </h2>
              <p className="mt-6 text-lg/8 text-gray-700">
                Our process includes needs assessment, talent sourcing,
                interviews, onboarding, and performance monitoring. We provide
                training and BOT transition plans for internal team building.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-[#08549c]"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex align-middle">
            <img
              alt="Product screenshot"
              src="./assets/placeholder_image.jpg"
              width={256}
              height={256}
              className="w-1xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-150 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
