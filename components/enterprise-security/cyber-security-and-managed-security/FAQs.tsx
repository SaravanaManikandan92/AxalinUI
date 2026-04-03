const faqs = [
  {
    id: 1,
    question:
      "How does Axalin ensure continuous compliance with industry regulations?",
    answer:
      "We integrate compliance enforcement into our security frameworks. We perform regular audits and align our governance with standards like HIPAA, GDPR, and ISO, providing the necessary documentation and evidence management required for your regulatory needs.",
  },
  {
    id: 2,
    question:
      "What makes Axalin's 24/7 support different from other providers?",
    answer:
      "We believe each client is important to us, and we treat you as such. You will have a dedicated account manager who serves as your single point of contact for all security concerns. This provides the experience of having a dedicated Technology and Staffing team set apart to work for you.",
  },
  {
    id: 3,
    question:
      "Can Axalin help us recover if we are already dealing with an incident?",
    answer:
      "Yes. We offer Incident Response services focused on containment, eradication, and recovery. We also integrate robust backup and recovery solutions, leveraging partners like Acronis, to ensure rapid business continuity after an attack.",
  },
  {
    id: 4,
    question: "Can Axalin help fill security skill gaps in my internal team?",
    answer:
      "Absolutely. Through our Strategic Talent Solutions, we offer Offshore and Onshore Staff Augmentation to instantly provide certified security analysts, engineers, and architects to support your in-house operations.",
  },
  {
    id: 5,
    question: "How do we start a security project with Axalin?",
    answer:
      "We use a Flexible Engagement Model – Build – Operate - Transfer. We can start with a security assessment (Build), manage your security infrastructure 24/7 (Operate), or transfer expertise back to your team (Transfer).",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Trusted Partnerships. Guaranteed Attention.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin Security Advantage (FAQ)
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
