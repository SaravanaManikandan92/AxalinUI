const faqs = [
  {
    id: 1,
    question: "What development methodologies does Axalin use?",
    answer:
      "We employ agile, Scrum, and DevOps for flexible, collaborative development with frequent iterations.",
  },
  {
    id: 2,
    question: "How do you ensure application security?",
    answer:
      "Security is baked in from design (DevSecOps), with regular audits, encryption, and compliance checks.",
  },
  {
    id: 3,
    question: "Can you handle large-scale enterprise apps?",
    answer:
      "Yes, our expertise in SAP and Oracle makes us ideal for complex, integrated systems.",
  },
  {
    id: 4,
    question: "What is AI orchestration in applications?",
    answer:
      "It coordinates multiple AI processes for automated, efficient workflows across systems.",
  },
  {
    id: 5,
    question: "How long is a custom development project?",
    answer:
      "Projects range from 3-9 months, depending on complexity, with milestones for transparency.",
  },
  {
    id: 6,
    question: "Do you offer post-development support?",
    answer:
      "Yes, including maintenance, updates, and scaling to ensure long-term success.",
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
