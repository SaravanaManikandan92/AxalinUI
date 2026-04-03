import { CalendarDaysIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function CTA() {
  return (
    <>
      <div className="bg-white">
        <div className="px-6 py-14 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Trusted by Others
            </h2>
            <h2 className="mt-6 text-base/7 font-semibold text-[#08549c]">
              <a
                target="_blank"
                href="https://www.techimply.com/profile/axalin-consultancy"
              >
                Techimply Portfolio & Reviews
              </a>
            </h2>
            <div className="mt-6 flex items-center justify-center">
              <div className="mx-auto mt-6 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none">
                <a
                  target="_blank"
                  href="https://www.techimply.com/profile/axalin-consultancy"
                >
                  <Image
                    src="/assets/review/top-it-services-companies_Badge6.svg"
                    alt="Techimply Portfolio & Reviews"
                    width={142}
                    height={142}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.techimply.com/profile/axalin-consultancy"
                >
                  <Image
                    src="/assets/review/view_profile_Badge3.svg"
                    alt="Techimply Portfolio & Reviews"
                    width={142}
                    height={142}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.techimply.com/profile/axalin-consultancy"
                >
                  <Image
                    src="/assets/review/read_our_review_Badge6.svg"
                    alt="Techimply Portfolio & Reviews"
                    width={142}
                    height={142}
                  />
                </a>
              </div>
            </div>
            <h2 className="mt-10 text-base/7 font-semibold text-[#08549c]">
              <a
                target="_blank"
                href="https://selectedfirms.co/agency/axalin-consultancy"
              >
                SelectedFirms Portfolio & Reviews
              </a>
            </h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="mx-auto grid max-w-lg grid-cols-1 items-center sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none">
                <a
                  target="_blank"
                  href="https://selectedfirms.co/agency/axalin-consultancy"
                >
                  <Image
                    src="/assets/review/digital-transformation.webp"
                    alt="SelectedFirms Portfolio & Reviews"
                    width={240}
                    height={240}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://selectedfirms.co/agency/axalin-consultancy"
                >
                  <Image
                    src="/assets/review/it-services-companies.webp"
                    alt="SelectedFirms Portfolio & Reviews"
                    width={240}
                    height={240}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://selectedfirms.co/agency/axalin-consultancy"
                >
                  <Image
                    src="/assets/review/staff-augmentation.webp"
                    alt="SelectedFirms Portfolio & Reviews"
                    width={240}
                    height={240}
                  />
                </a>
              </div>
            </div>
            <h2 className="mt-10 text-base/7 font-semibold text-[#08549c]">
              <a
                target="_blank"
                href="https://techbehemoths.com/company/axalin-consultancy-services"
              >
                Trusted on Tech Behemoths
              </a>
            </h2>
            <div className="mt-4 flex items-center justify-center">
              <a
                target="_blank"
                href="https://techbehemoths.com/company/axalin-consultancy-services"
              >
                <Image
                  src="/assets/review/tech_behemoths.jpeg"
                  alt="Trusted on Tech Behemoths"
                  width={240}
                  height={240}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="px-6 py-14 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Ready to Solve Your Biggest IT Challenges?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
              Stop settling for generic solutions that fail to address your
              unique business logic and financial pressures. Let us show you
              what a personalized, results-driven partnership looks like.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="inline-flex rounded-md bg-[#08549c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#086ac1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#08549c]"
              >
                <CalendarDaysIcon className="mr-1 h-5 w-5" />
                Schedule a free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
