const faqs = [
  {
    id: 1,
    question: "What makes Axalin's Datacenter Services different?",
    answer:
      "Our core value is undivided attention and custom solutions. Each client is important to us, and we assign a dedicated account manager just for you. This commitment provides you with the experience of having a dedicated Technology and Staffing team, just one call away.",
  },
  {
    id: 2,
    question: "Can Axalin help with staff augmentation for my Datacenter team?",
    answer:
      "Yes. Through our Strategic Talent Solutions, we offer both Onshore and Offshore Staff Augmentation to fill skill gaps in your in-house team, ensuring the expertise needed to manage your modern datacenter environment.",
  },
  {
    id: 3,
    question: "How can we scale our services with Axalin?",
    answer:
      "We use a Flexible Engagement Model – Build – Operate - Transfer. We can build and operate your new infrastructure, then transfer the knowledge and operational control back to your team when you're ready.",
  },
  {
    id: 4,
    question:
      "What is Axalin's expertise in dealing with legacy datacenter equipment?",
    answer:
      "Our leadership team, with 50+ years of combined experience, specializes in IT service delivery and legacy systems. We perform detailed assessments to identify viable virtualization targets, and then we strategically consolidate and retire outdated hardware, lowering your TCO and complexity.",
  },
  {
    id: 5,
    question: "How does Axalin ensure high availability and disaster recovery?",
    answer:
      "We design and implement robust High Availability (HA) clusters and create tiered Disaster Recovery (DR) plans. We leverage partners like Acronis for advanced backup and recovery solutions, ensuring your critical systems can failover rapidly and your business continuity is guaranteed.",
  },
  {
    id: 6,
    question: "Can Axalin help manage my datacenter remotely?",
    answer:
      "Yes. We provide comprehensive Managed Infrastructure Services, including 24/7 remote monitoring and patch management. This allows your internal IT team to focus on strategic initiatives while we maintain the health, security, and performance of your physical assets.",
  },
  {
    id: 7,
    question:
      "How can Axalin's Strategic Talent Solutions support my datacenter team?",
    answer:
      "We offer Onshore and Offshore Staff Augmentation. We can quickly deploy qualified, certified professionals to fill specific skill gaps in your in-house team, particularly for complex hardware, virtualization, or networking management.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Your Dedicated Technology Team
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin Group Value Proposition (FAQ)
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
