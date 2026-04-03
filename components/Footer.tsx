import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const navigation = {
  ourServices: [
    {
      name: "Digital Transformation",
      href: "/digital-transformation",
    },
    {
      name: "Application and Innovation",
      href: "/application-and-innovation",
    },
    {
      name: "Enterprise Security",
      href: "/enterprise-security",
    },
    {
      name: "Strategic Talent Solutions",
      href: "/strategic-talent-solutions",
    },
  ],
  company: [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ],
  legal: [
    {
      name: "Terms and Conditions",
      href: "/terms",
    },
    {
      name: "Privacy Policy",
      href: "/policy",
    },
  ],
  digitalTransformation: [
    {
      name: "Strategic Cloud Adoption & Migration",
      href: "/digital-transformation/strategic-cloud-adoption-and-migration",
    },
    {
      name: "Datacenter & Infrastructure",
      href: "/digital-transformation/datacenter-and-infrastructure",
    },
    {
      name: "Managed Cloud Solutions & FinOps",
      href: "/digital-transformation/managed-cloud-solutions-and-finOps",
    },
    {
      name: "Network Modernization",
      href: "/digital-transformation/network-modernization",
    },
    {
      name: "Data Modernization",
      href: "/digital-transformation/data-modernization",
    },
  ],
  appAndInno: [
    {
      name: "IT Modernization & Optimization",
      href: "/application-and-innovation/it-modernization-and-optimization",
    },
    {
      name: "Custom App Development & Modernization",
      href: "/application-and-innovation/custom-app-development-and-modernization",
    },
    {
      name: "AI Automation & Orchestration",
      href: "/application-and-innovation/ai-automation-and-orchestration",
    },
    {
      name: "Enterprise Applications Services (EAS)",
      href: "/application-and-innovation/enterprise-applications-services",
    },
  ],
  enterpriceSecurity: [
    {
      name: "Cyber Security & Managed Security",
      href: "/enterprise-security/cyber-security-and-managed-security",
    },
    {
      name: "Governance, Risk & Compliance Management",
      href: "/enterprise-security/governance-risk-and-compliance-management",
    },
    {
      name: "Identity and Access Management (IAM)",
      href: "/enterprise-security/identity-and-access-management",
    },
    {
      name: "Managed Security Operations (MSO) & 24/7 SOC",
      href: "/enterprise-security/managed-security-operations-and-soc",
    },
  ],
  strategicTalentSolutions: [
    {
      name: "Traditional Staffing",
      href: "/strategic-talent-solutions/traditional-staffing",
    },
    {
      name: "Offshore Staff Augmentation",
      href: "/strategic-talent-solutions/offshore-staff-augmentation",
    },
    {
      name: "Onshore Staff Augmentation",
      href: "/strategic-talent-solutions/onshore-staff-augmentation",
    },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/axalingroup",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/axalin-consultancy",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/AxalinGroup",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919003078581?text=Hi%20Axalin%2C%20I'd%20like%20to%20discuss%20a%20potential%20project",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-14 lg:px-8 lg:pt-16 border-t border-gray-900/10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              alt="Company name"
              src="/assets/logo_with_name_brand.svg"
              className="h-9"
            />
            <p className="text-sm/6 text-balance text-gray-600">
              Empowering businesses with advanced technology solutions to drive
              innovation and achieve digital transformation.
            </p>
            <ul className="space-y-2 text-sm/6 text-balance text-gray-600">
              <li className="flex">
                <MapPinIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                <span>#1, Nandanam, 5th Main Road, OMBR Layout, Bangalore</span>
              </li>
              <li className="flex">
                <EnvelopeIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                <span></span>
                <a
                  href="mailto:info@axalingroup.com"
                  className="hover:text-gray-800"
                >
                  info@axalingroup.com
                </a>
              </li>
            </ul>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid grid-cols-1 sm:grid-cols-4 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Our Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.ourServices.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900">
                Digital Transformation
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.digitalTransformation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm/6 font-semibold text-gray-900">
                Application and Innovation
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.appAndInno.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900">
                Enterprise Security
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.enterpriceSecurity.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm/6 font-semibold text-gray-900">
                Strategic Talent Solutions
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.strategicTalentSolutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 sm:mt-10 lg:mt-12">
          <p className="text-sm/6 text-gray-600">
            &copy; {new Date().getFullYear()} Axalin Consultancy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
