import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Experience-Driven Quality",
      description:
        "While Axalin was founded in 2021, our commitment to mature development processes is guided by the 50+ years of combined experience our leadership team brings from delivering complex IT solutions.",
      icon: InformationCircleIcon,
    },
    {
      name: "Agile and DevOps Focus",
      description:
        "We utilize Agile methodologies and integrated DevOps practices to deliver high-quality, stable software faster.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Moving Beyond COTS: Why Custom is the New Competitive Edge
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Strategic Value of Custom Software
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Commercial Off-the-Shelf (COTS) software often forces your business
            to adapt to the tool. Custom development puts your unique
            requirements first, resulting in greater efficiency, better user
            adoption, and full ownership of your IP.
          </p>
          <p className="mt-6 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            When should my business choose custom development over COTS
            software?
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Custom development is essential when your process is your
            differentiator—when COTS solutions are too complex, too expensive,
            or lack a critical feature specific to your competitive edge. Custom
            applications allow for seamless integration with your existing
            Enterprise Applications Services (SAP, Oracle, Microsoft) and unique
            data structures.
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
