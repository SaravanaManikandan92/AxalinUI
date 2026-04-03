"use client";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChatBubbleBottomCenterTextIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const solutions = [
  {
    name: "Digital Transformation",
    description:
      "Discover Axalin's digital transformation services: Integrate cutting-edge technologies to revolutionize your business operations, boost customer engagement, and achieve sustainable growth. Specializing in cloud adoption, datacenter optimization, managed cloud, network modernization, and data strategies for industries like finance, healthcare, and e-commerce.",
    href: "/digital-transformation",
    icon: ChartPieIcon,
  },
  {
    name: "Application and Innovation",
    description:
      "Axalin's application and innovation services craft bespoke software, AI-driven automation, and app modernization to elevate efficiency and user experiences. Tailored for logistics, education, and manufacturing with partnerships like SAP, Oracle, and Microsoft.",
    href: "/application-and-innovation",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Enterprise Security",
    description:
      "Axalin's enterprise security services deliver proactive threat detection, governance, risk management, and compliance solutions. Protect your assets in banking, manufacturing, and healthcare with end-to-end security from certified experts partnered with Okta, Sentinel One, and more.",
    href: "/enterprise-security",
    icon: FingerPrintIcon,
  },
  {
    name: "Strategic Talent Solutions",
    description:
      "Axalin's strategic talent solutions provide expert IT staffing, offshore and onshore augmentation to align skilled professionals with your goals. Ideal for healthcare, finance, and e-commerce, with flexible models for growth.",
    href: "/strategic-talent-solutions",
    icon: SquaresPlusIcon,
  },
];

const services = {
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
};

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative isolate z-10 bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Axalin Consultancy</span>
            <Image
              src="/assets/logo_brand.svg"
              alt="Axalin Logo"
              width={60}
              height={6}
            />
            <Image
              src="/assets/newname.svg"
              alt="Axalin"
              width={170}
              height={100}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm/6 font-semibold text-gray-900">
            Home
          </a>
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Solutions
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-16 bg-white transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5"
              />
              <div className="relative bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {solutions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-gray-600 group-hover:text-[#08549c]"
                        />
                      </div>
                      <a
                        href={item.href}
                        className="mt-6 block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          <Popover>
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Services
              <ChevronDownIcon aria-hidden="true" className="size-5" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-16 bg-white transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5"
              />
              <div className="relative bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 sm:gap-x-8">
                    <div>
                      <h3 className="text-sm/6 font-medium text-gray-500">
                        Digital Transformation
                      </h3>
                      <div className="mt-6 flow-root">
                        <div className="-my-2">
                          {services.digitalTransformation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm/6 font-medium text-gray-500">
                        Application and Innovation
                      </h3>
                      <div className="mt-6 flow-root">
                        <div className="-my-2">
                          {services.appAndInno.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm/6 font-medium text-gray-500">
                        Enterprise Security
                      </h3>
                      <div className="mt-6 flow-root">
                        <div className="-my-2">
                          {services.enterpriceSecurity.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm/6 font-medium text-gray-500">
                        Strategic Talent Solutions
                      </h3>
                      <div className="mt-6 flow-root">
                        <div className="-my-2">
                          {services.strategicTalentSolutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          <a href="/blogs" className="text-sm/6 font-semibold text-gray-900">
            Blogs
          </a>
          <a href="/about" className="text-sm/6 font-semibold text-gray-900">
            Company
          </a>
          <a href="/contact" className="text-sm/6 font-semibold text-gray-900">
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact"
            className="inline-flex items-center gap-x-2 rounded-md bg-[#08549c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#086ac1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#08549c]"
          >
            <ChatBubbleBottomCenterTextIcon
              aria-hidden="true"
              className="-ml-0.5 size-5"
            />
            Let's Talk
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Axalin Consultancy</span>
              <Image
                src="/assets/logo_brand.svg"
                alt="Axalin Logo"
                width={60}
                height={6}
              />
              <Image
                src="/assets/newname.svg"
                alt="Axalin"
                width={170}
                height={100}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Solutions
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...solutions].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Digital Transformation
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services.digitalTransformation].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Application and Innovation
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services.appAndInno].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Enterprise Security
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services.enterpriceSecurity].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Strategic Talent Solutions
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services.strategicTalentSolutions].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-x-2 rounded-md bg-[#08549c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#086ac1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#08549c]"
                >
                  <ChatBubbleBottomCenterTextIcon
                    aria-hidden="true"
                    className="-ml-0.5 size-5"
                  />
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
