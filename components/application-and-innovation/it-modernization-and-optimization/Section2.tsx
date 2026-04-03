export default function Section2() {
  const areas = [
    {
      serviceArea: "Cloud",
      focus:
        "Cost & Scalability: Right-sizing cloud resources and applying FinOps principles post-migration.",
      keyTech: "AWS, Azure, GCP, Multi-Cloud",
    },
    {
      serviceArea: "Data",
      focus:
        "Insight & Intelligence: Unifying data silos to support advanced analytics and AI Automation.",
      keyTech: "Data Lakehouse, Cloud Data Platforms",
    },
    {
      serviceArea: "Network",
      focus:
        "Speed & Flexibility: Implementing intelligent, software-defined connectivity to eliminate bottlenecks.",
      keyTech: "SD-WAN, SDN, Zero Trust Network Access",
    },
    {
      serviceArea: "Infrastructure",
      focus:
        "Efficiency & Resilience: Consolidating and virtualizing on-premise hardware via Datacenter Services.",
      keyTech: "Hyper-V, VMware, Server Virtualization",
    },
    {
      serviceArea: "Applications",
      focus:
        "Agility & Performance: Re-factoring monolithic applications into modern, cloud-native microservices.",
      keyTech: "Custom Application Development, DevOps",
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Comprehensive Transformation Across Your Entire Enterprise
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Our Integrated Modernization and Optimization Service Areas
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Axalin’s approach covers all foundational elements of your IT
            estate, ensuring modernization is seamless and interconnected.
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
                      Service Area
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Focus of Optimization
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Key Technologies
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {areas.map((area) => (
                    <tr key={area.serviceArea}>
                      <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                        {area.serviceArea}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                        {area.focus}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                        {area.keyTech}
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
