export default function Section2() {
  const areas = [
    {
      practiceArea: "Cloud & DevOps",
      rolesPlaced:
        "AWS/Azure/GCP Architects, DevOps Engineers, Cloud Security Specialists",
    },
    {
      practiceArea: "Data & AI",
      rolesPlaced:
        "Data Scientists, Data Engineers, BI Developers, AI/ML Engineers",
    },
    {
      practiceArea: "Cyber Security",
      rolesPlaced:
        "SOC Analysts, IAM Specialists, GRC Consultants, Penetration Testers",
    },
    {
      practiceArea: "Application Development",
      rolesPlaced:
        "Full-Stack Developers (Java, .NET, Python), Custom App Developers, UI/UX Designers",
    },
    {
      practiceArea: "Enterprise Applications",
      rolesPlaced:
        "SAP Consultants (FICO, SD, MM), Oracle DBAs, Microsoft Dynamics Experts",
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Expertise in Hard-to-Find IT Roles
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Our Specialized IT Recruitment Focus
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Our Dedicated Talent Acquisition Team specializes exclusively in the
            technology sector. We understand the nuanced requirements of modern
            IT roles, enabling us to match candidates based on specific skills,
            not just keywords.
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
                      Practice Area
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Example Roles Placed
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {areas.map((area) => (
                    <tr key={area.practiceArea}>
                      <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                        {area.practiceArea}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                        {area.rolesPlaced}
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
