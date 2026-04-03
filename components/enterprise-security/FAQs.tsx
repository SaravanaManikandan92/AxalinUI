const faqs = [
  {
    id: 1,
    question: "How quickly can Axalin respond to a security incident?",
    answer:
      "Our incident response teams activate within minutes, following IR plans to contain, eradicate, and recover with minimal impact.",
  },
  {
    id: 2,
    question: "What security standards does Axalin comply with?",
    answer:
      "We support GDPR, HIPAA, PCI-DSS, SOC 2, and more, integrating them into our services for comprehensive protection.",
  },
  {
    id: 3,
    question: "Is enterprise security suitable for small businesses?",
    answer:
      "Yes, our scalable solutions start with essentials and grow, making robust security accessible to startups.",
  },
  {
    id: 4,
    question: "How do you stay ahead of evolving threats?",
    answer:
      "Through continuous threat intelligence, CoE research, and partnerships with tools like Sentinel One for real-time updates.",
  },
  {
    id: 5,
    question: "What is the cost structure for your security services?",
    answer:
      "Flexible pricing based on scope; contact us for a tailored quote emphasizing value and ROI.",
  },
  {
    id: 6,
    question: "Can you integrate with existing security systems?",
    answer:
      "Absolutely, our experts specialize in hybrid integrations for seamless enhancements.",
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
