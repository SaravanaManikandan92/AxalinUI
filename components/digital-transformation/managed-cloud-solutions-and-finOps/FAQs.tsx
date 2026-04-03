const faqs = [
  {
    id: 1,
    question: "What is Axalin's engagement model for Managed Cloud Solutions?",
    answer:
      "We use a Flexible Engagement Model – Build – Operate - Transfer. We can deploy and optimize your new cloud environment, operate it 24/7, and then optionally transfer full knowledge and control back to your team when you are ready.",
  },
  {
    id: 2,
    question: "Will I have a dedicated contact person?",
    answer:
      "Yes. Our USP is customer attention: Each client is important to us, and we treat you as such. You will have a dedicated account manager who provides consistent, single-point-of-contact support, giving you the experience of having a dedicated Technology and Staffing team set apart to work for you.",
  },
  {
    id: 3,
    question:
      "Can you help with our IT staffing needs while managing the cloud?",
    answer:
      "Absolutely. Our Strategic Talent Solutions offer Offshore and Onshore Staff Augmentation to instantly fill any skill gaps your internal team may have in managing your cloud environment alongside our services.",
  },
  {
    id: 4,
    question: "What is FinOps, and how quickly will I see results?",
    answer:
      "FinOps (Cloud Financial Operations) is a cultural practice combining finance, technology, and business to manage cloud spending. Axalin focuses on quick wins (right-sizing and resource cleanup) that often yield noticeable cost reductions within the first 30-60 days, followed by continuous, long-term optimization.",
  },
  {
    id: 5,
    question:
      "Which specific security services are included in the Managed Cloud offering?",
    answer:
      "Our managed solutions include continuous cloud security posture management (CSPM), identity and access management (Okta integration), vulnerability scanning, patch management, and automated enforcement of security policies across your cloud environment.",
  },
  {
    id: 6,
    question:
      "What is the typical response time for critical incidents under your 24/7 monitoring?",
    answer:
      "We guarantee a rapid response with defined SLAs based on severity. Our proactive monitoring with tools like DataDog and Newrelic means we often intervene to resolve issues automatically or notify you within minutes of a critical alert.",
  },
  {
    id: 7,
    question:
      "How does Axalin handle multi-cloud environments (AWS, Azure, GCP)?",
    answer:
      "We are Multi Vendor Technology experts trained and certified across all major platforms. We utilize centralized management tools and unified governance frameworks to provide consistent security, cost control, and operational visibility across all your cloud providers.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Your Dedicated, Just-One-Call-Away Team
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Axalin’s Partnership Advantage (AEO/FAQ)
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
