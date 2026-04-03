import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Section1() {
  const features = [
    {
      name: "Expertise in Action",
      description:
        "Our leadership team's 50+ years of combined experience in IT service delivery guides our IAM practice, ensuring solutions are robust, scalable, and user-friendly.",
      icon: InformationCircleIcon,
    },
    {
      name: "Security Partner Focus",
      description:
        "We specialize in deploying solutions built on platforms from industry leaders like Okta to deliver enterprise-grade identity control.",
      icon: InformationCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Why Identity is the Foundation of Modern Security
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Identity Crisis in Modern IT
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            In a world defined by cloud services, remote work, and multi-vendor
            applications, the user identity—not the network perimeter—is the
            primary control point for security. Without a centralized IAM
            strategy, businesses face unnecessary complexity, compliance
            failures, and significant risk of data breaches.
          </p>
          <p className="mt-6 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            How does IAM relate to the Zero Trust model?
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            IAM is the engine of Zero Trust. The Zero Trust principle is "Never
            trust, always verify." IAM solutions like Single Sign-On (SSO) and
            Multi-Factor Authentication (MFA) provide the necessary verification
            tools to implement that philosophy across every cloud application,
            network, and device.
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
