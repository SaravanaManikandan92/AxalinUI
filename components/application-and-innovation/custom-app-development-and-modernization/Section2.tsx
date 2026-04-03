import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section2() {
  const features1 = [
    {
      name: "Deep Business Insight",
      description:
        "We work closely with your stakeholders to define user stories, architecture blueprints, and a Minimum Viable Product (MVP) scope.",
      icon: InformationCircleIcon,
    },
    {
      name: "UX/UI Focus",
      description:
        "Designing intuitive and accessible user interfaces that maximize productivity and user satisfaction.",
      icon: InformationCircleIcon,
    },
  ];
  const features2 = [
    {
      name: "Microservices and Containers",
      description:
        "Breaking down monolithic applications into flexible microservices managed by containerization technologies like Kubernetes.",
      icon: InformationCircleIcon,
    },
    {
      name: "Serverless Development",
      description:
        "Leveraging cloud services (AWS Lambda, Azure Functions) to build cost-effective, auto-scaling applications that align with your Cloud Adoption and Migration strategy.",
      icon: InformationCircleIcon,
    },
    {
      name: "Technology Expertise",
      description:
        "Proficiency across major stacks, including Java, Python, .NET, Node.js, and modern front-end frameworks.",
      icon: InformationCircleIcon,
    },
  ];
  const features3 = [
    {
      name: "Automated Testing",
      description:
        "Implementing automated testing across unit, integration, and performance layers to ensure code stability.",
      icon: InformationCircleIcon,
    },
    {
      name: "Continuous Integration/Continuous Delivery (CI/CD)",
      description:
        "Deploying code changes rapidly and reliably using pipelines integrated with tools like Atlassian and cloud-native services.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Building Applications That Are Scalable and Future-Proof
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Axalin’s Cloud-Native Development Framework
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            We follow a rigorous, collaborative process designed for
            transparency, speed, and quality from concept to launch and beyond.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              Discovery and Design
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
              Cloud-Native Development and Architecture
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
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
              Quality Assurance (QA) and Deployment
            </p>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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
