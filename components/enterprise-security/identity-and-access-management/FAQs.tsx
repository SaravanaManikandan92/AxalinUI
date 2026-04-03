const faqs = [
  {
    id: 1,
    question:
      "Why does Axalin prioritize using partners like Okta for IAM solutions?",
    answer:
      "We partner with industry leaders because they provide best-in-class security features and continuous innovation. As certified experts with these platforms, we ensure your deployment is maximized, integrating seamlessly with your Managed Cloud Solutions and other security partners like Sentinel One and Splunk.",
  },
  {
    id: 2,
    question:
      "How does Axalin ensure my IAM project stays on budget and on schedule?",
    answer:
      "Our commitment is undivided: Each client is important to us, and we treat you as such. You will be assigned a dedicated account manager who provides consistent, single-point-of-contact support, ensuring transparent project communication and delivery.",
  },
  {
    id: 3,
    question: "Can Axalin help me manage my IAM system after deployment?",
    answer:
      "Yes. We offer a Flexible Engagement Model – Build – Operate - Transfer. We can Build your IAM system, fully Operate it for a defined period, or provide specialized Staff Augmentation (Onshore or Offshore) to integrate with and support your in-house team.",
  },
  {
    id: 4,
    question:
      "How do you handle compliance requirements with your IAM services?",
    answer:
      "IAM is inherently tied to compliance (e.g., HIPAA, SOC 2). Our solutions include audit-ready reporting, automated access reviews, and policy enforcement to help you meet regulatory mandates efficiently and continuously.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Certified Okta Expertise. Dedicated Support.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin IAM Advantage (FAQ)
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
