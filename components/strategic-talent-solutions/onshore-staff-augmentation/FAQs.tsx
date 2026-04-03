const faqs = [
  {
    id: 1,
    question:
      "Who handles the management and oversight of the Onshore Augmentation staff?",
    answer:
      "The augmented staff member reports directly to your internal project lead, functioning as a seamless extension of your team. Axalin handles all administrative and HR support. You retain full control over project direction and IP.",
  },
  {
    id: 2,
    question:
      "How does Axalin ensure a swift and efficient Onboarding process?",
    answer:
      "We use a standardized, rapid onboarding process to ensure your augmented staff has all necessary certifications and is ready to integrate instantly into your workflows and platforms, like Atlassian, on day one.",
  },
  {
    id: 3,
    question:
      "Can Onshore Staff Augmentation support my security and compliance needs?",
    answer:
      "Yes. Onshore staff are often preferred for projects involving sensitive data or strict regulatory requirements, such as GRC initiatives, due to their inherent compliance with local privacy laws (HIPAA, domestic financial regulations, etc.).",
  },
  {
    id: 4,
    question:
      "Who is my main point of contact at Axalin during the augmentation period?",
    answer:
      "Each client is important to us, and we treat you as such. You will have a dedicated account manager who provides consistent, single-point-of-contact support, guaranteeing you the experience of having a dedicated Technology and Staffing team set apart to work for you.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Your Dedicated Local Talent Partner
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin Talent Advantage (FAQ)
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-16 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base/7 font-semibold text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
