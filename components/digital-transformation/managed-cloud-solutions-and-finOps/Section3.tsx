export default function Section2() {
  const areas = [
    {
      cloudPlatform: "Amazon Web Services (AWS)",
      serviceFocus:
        "Managed EC2, S3, RDS, Lambda, and cost optimization via Compute Optimizer.",
    },
    {
      cloudPlatform: "Microsoft Azure",
      serviceFocus:
        "Managed Azure VMs, Azure SQL, Azure Functions, and governance via Azure Policy.",
    },
    {
      cloudPlatform: "Google Cloud (GCP)",
      serviceFocus:
        "Managed Compute Engine, Cloud Storage, Kubernetes Engine, and resource provisioning.",
    },
    {
      cloudPlatform: "Digital Ocean",
      serviceFocus:
        "Optimized management for start-ups and mid-tier companies focused on simplicity and speed.",
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Expertise Across All Major Cloud Platforms
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Partnering for Multi-Cloud Excellence
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Axalin’s status as a partner with all major providers ensures you
            get the best solution, regardless of your platform.
          </p>
        </div>
        <div className="mt-8 flex justify-center min-w-full">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="relative divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Cloud Platform
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Service Focus
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {areas.map((area) => (
                    <tr key={area.cloudPlatform}>
                      <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                        {area.cloudPlatform}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                        {area.serviceFocus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
