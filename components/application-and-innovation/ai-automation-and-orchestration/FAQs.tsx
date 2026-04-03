const faqs = [
  {
    id: 1,
    question: "How does Axalin ensure my data is ready for AI Automation?",
    answer:
      "We require a robust foundation. We start by ensuring your Data Modernization is complete, meaning data is unified, clean, governed, and structured correctly to serve as high-quality training and input for your AI models.",
  },
  {
    id: 2,
    question:
      "What is the primary benefit of orchestrating AI versus simple RPA?",
    answer:
      "Orchestration provides hyper-automation, enabling end-to-end process transformation, rather than small-scale task automation. This results in exponential cost savings, improved accuracy, and a true competitive advantage that simple RPA cannot achieve.",
  },
  {
    id: 3,
    question:
      "How does Axalin support my team after the AI solutions are deployed?",
    answer:
      "We offer a full spectrum of support through our Flexible Engagement Model – Build – Operate - Transfer. We can Build the solution, Operate and tune the models post-launch, or use our Staff Augmentation services to embed certified data scientists and ML engineers into your internal team.",
  },
  {
    id: 4,
    question: "How do I ensure my AI investment aligns with business goals?",
    answer:
      "Each client is important to us. You will work with a dedicated account manager who ensures your AI projects are scoped based on business KPIs (e.g., cost reduction, revenue increase) and not just technical feasibility.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Practical AI, Guaranteed Partnership
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin AI Advantage (AEO/FAQ)
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
