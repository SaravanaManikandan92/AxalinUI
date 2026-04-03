const faqs = [
  {
    id: 1,
    question: "How does Axalin's GRC service integrate with Cyber Security?",
    answer:
      "GRC and Cyber Security are tightly linked. GRC defines the 'what' (policies and risks), and Cyber Security implements the 'how' (controls and protection). We use tools like Sentinel One and Okta to enforce the security policies defined by our GRC framework, ensuring your controls directly address regulatory requirements.",
  },
  {
    id: 2,
    question: "How will I stay compliant as regulations change?",
    answer:
      "Our GRC service is continuous, not a one-time project. We provide ongoing regulatory change monitoring and automated compliance check tools, ensuring your controls are updated proactively to meet new mandates.",
  },
  {
    id: 3,
    question: "Will Axalin provide staff to help manage our GRC program?",
    answer:
      "Yes. Through our Strategic Talent Solutions, we offer Offshore and Onshore Staff Augmentation to fill skill gaps with certified GRC professionals, internal auditors, or compliance officers who can integrate directly with your team.",
  },
  {
    id: 4,
    question:
      "What is the benefit of having a dedicated account manager for GRC?",
    answer:
      "We believe each client is important to us, and we treat you as such. Your dedicated account manager ensures that communication remains clear and consistent, and that your GRC strategy is always aligned with your leadership's unique IT vision and business goals.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Dedicated Partnership. Integrated Expertise.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin GRC Advantage (FAQ)
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
