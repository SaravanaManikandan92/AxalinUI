import { InformationCircleIcon } from "@heroicons/react/16/solid";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function WhoWeServe() {
  const benefits = [
    "Finance & Banking",
    "E-commerce",
    "Logistics",
    "Manufacturing",
    "Healthcare",
    "Education",
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
          <img
            alt="Who We Serve"
            src="./assets/placeholder_image.jpg"
            className="h-96 w-full flex-none rounded-2xl object-cover lg:aspect-square lg:h-auto lg:max-w-sm"
          />
          <div className="w-full flex-auto">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
              Who We Serve
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-600">
              We partner with organizations across a wide range of practice
              areas, from start-ups requiring foundational infrastructure to
              Enterprise companies needing advanced AI Automation and security
              compliance. .
            </p>
            <ul
              role="list"
              className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-950 sm:grid-cols-2"
            >
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-x-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="h-7 w-5 flex-none text-[#086ac1]"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
