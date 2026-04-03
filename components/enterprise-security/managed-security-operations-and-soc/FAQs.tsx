const faqs = [
  {
    id: 1,
    question:
      "How does Axalin ensure my MSO service is always aligned with my business?",
    answer:
      "We believe each client is important to us, and we treat you as such. You will have a dedicated account manager who provides consistent, single-point-of-contact support. This personalized attention ensures our security efforts align perfectly with your risk tolerance and operational needs.",
  },
  {
    id: 2,
    question: "How do you manage security across our multi-cloud environment?",
    answer:
      "We are Multi Vendor Technology experts certified in AWS, Azure, and GCP. Our MSO platform uses unified cloud security posture management (CSPM) and centralized log collection to provide a single, consistent security view across all your cloud platforms and on-premise Datacenter Services.",
  },
  {
    id: 3,
    question: "Can Axalin help with asset visibility and IoT security?",
    answer:
      "Yes. We integrate technologies like Armis to gain comprehensive visibility into all connected assets, including unmanaged IoT devices, ensuring these non-traditional endpoints are monitored and secured as part of your overall MSO framework.",
  },
  {
    id: 4,
    question: "How does MSO integrate with my internal IT staff?",
    answer:
      "Our MSO is designed for collaboration. We handle the heavy lifting of 24/7 monitoring, while your internal team focuses on strategic vulnerability remediation and internal policy enforcement. We can also provide Staff Augmentation to backfill any specialized security roles.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Undivided Attention. Certified Expertise.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin Advantage in Security Operations (FAQ)
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
