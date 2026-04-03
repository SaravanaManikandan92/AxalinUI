const faqs = [
  {
    id: 1,
    question: "What is the initial step in digital transformation with Axalin?",
    answer:
      "We begin with a comprehensive assessment of your IT infrastructure, processes, and goals to craft a personalized roadmap.",
  },
  {
    id: 2,
    question: "How does Axalin ensure minimal disruption during migrations?",
    answer:
      "Our phased approach includes pilot testing, rollback plans, and parallel operations for business continuity.",
  },
  {
    id: 3,
    question: "Are your services compliant with global regulations?",
    answer:
      "Yes, we adhere to GDPR, HIPAA, PCI-DSS, and ISO 27001, embedding compliance in every project.",
  },
  {
    id: 4,
    question: "Can startups afford Axalin’s digital transformation services?",
    answer:
      "Absolutely, our scalable, flexible pricing models deliver high-quality transformation for startups with quick wins.",
  },
  {
    id: 5,
    question: "What sets Axalin apart from other providers?",
    answer:
      "Our client focus, dedicated teams, multi-vendor expertise, and CoE-driven innovations ensure effective solutions.",
  },
  {
    id: 6,
    question: "How do you measure transformation success?",
    answer:
      "We track ROI, system uptime, user adoption, and growth indicators through regular audits and reports.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Frequently Asked Questions
          </h2>
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
