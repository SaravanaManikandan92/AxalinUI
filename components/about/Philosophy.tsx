export default function Philosophy() {
  const areas = [
    {
      pillar: "People",
      focus:
        "Providing expert guidance and Strategic Talent Solutions to bridge skill gaps and ensure successful adoption.",
      outcome: "An agile, skilled, and enabled workforce.",
    },
    {
      pillar: "Process",
      focus:
        "Streamlining workflows, implementing best practices, and enforcing Governance, Risk & Compliance (GRC) standards.",
      outcome: "Operational maturity and reduced risk.",
    },
    {
      pillar: "Technology",
      focus:
        "Leveraging Multi Vendor Technology and certified expertise to build secure, scalable, and cost-effective infrastructure.",
      outcome: "A competitive, future-proof IT environment.",
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Our Guiding Philosophy
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            People, Process & Technology
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Digital transformation is a holistic challenge. We don't just
            upgrade hardware; we align your entire operating model around three
            foundational pillars to ensure efficiency and adoption.
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
                      Pillar
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Focus
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Outcome
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {areas.map((area) => (
                    <tr key={area.pillar}>
                      <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                        {area.pillar}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                        {area.focus}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                        {area.outcome}
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
