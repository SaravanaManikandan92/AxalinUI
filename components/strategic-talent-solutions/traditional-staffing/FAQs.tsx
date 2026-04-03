const faqs = [
  {
    id: 1,
    question: "How quickly can Axalin fill a critical IT position?",
    answer:
      "Our Dedicated Talent Acquisition Team operates 24/7, maintaining a robust pipeline of pre-vetted candidates. This allows us to rapidly identify and submit candidates, often within 24-48 hours for contract roles, drastically reducing your time-to-hire.",
  },
  {
    id: 2,
    question: "How does Axalin ensure the quality of the candidates provided?",
    answer:
      "We use a rigorous, multi-stage vetting process that includes: technical screenings by subject matter experts (SMEs), behavioral interviews, and reference checks. We prioritize finding candidates that align with both the technical role and your company culture.",
  },
  {
    id: 3,
    question: "Does Axalin offer Offshore or Onshore Staffing solutions?",
    answer:
      "Yes. Traditional Staffing focuses on localized or direct placement, but our full service includes Offshore Staff Augmentation and Onshore Staff Augmentation to give you maximum flexibility in sourcing global talent efficiently.",
  },
  {
    id: 4,
    question:
      "What is the benefit of having a dedicated account manager for staffing?",
    answer:
      "Each client is important to us, and we treat you as such. Your dedicated account manager acts as your single point of contact, ensuring that our staffing efforts are perfectly aligned with your immediate project needs and long-term GRC and talent strategies.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Speed, Quality, and Undivided Attention
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin Staffing Advantage (FAQ)
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
