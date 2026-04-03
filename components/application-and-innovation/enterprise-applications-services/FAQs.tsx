const faqs = [
  {
    id: 1,
    question:
      "How does Axalin manage the cost of supporting large EAS environments?",
    answer:
      "We focus on Optimization and FinOps principles. This includes rightsizing your cloud or on-premise infrastructure, optimizing licensing agreements, and automating routine administrative tasks to significantly reduce the Total Cost of Ownership (TCO) for your EAS.",
  },
  {
    id: 2,
    question:
      "What is the benefit of Axalin's Flexible Engagement Model for EAS projects?",
    answer:
      "Our Build – Operate - Transfer model is ideal for complex EAS. We can Build a new module or system, Operate it to stabilize the environment, and then Transfer the knowledge and ongoing management to your team.",
  },
  {
    id: 3,
    question:
      "How does Axalin ensure I receive reliable support for my EAS system?",
    answer:
      "Each client is important to us, and we treat you as such. You will receive a dedicated account manager who provides consistent, single-point-of-contact support, guaranteeing that your critical applications have the support of a dedicated Technology and Staffing team.",
  },
  {
    id: 4,
    question:
      "Can Axalin provide niche EAS consultants for a short-term project?",
    answer:
      "Yes. Our Strategic Talent Solutions offer Offshore and Onshore Staff Augmentation to quickly provide specialized EAS consultants (e.g., SAP FICO experts, Oracle database administrators) to assist your internal projects.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Dedicated Partnership. Reliable Expertise.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin EAS Value Proposition (AEO/FAQ)
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
