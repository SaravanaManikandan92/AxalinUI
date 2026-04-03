const faqs = [
  {
    id: 1,
    question: "How does Axalin screen candidates?",
    answer:
      "Through background checks, skill assessments, certifications verification, and client-specific interviews.",
  },
  {
    id: 2,
    question: "What is the BOT model in staffing?",
    answer:
      "Build-Operate-Transfer: We build and operate your team, then transfer ownership for internal control.",
  },
  {
    id: 3,
    question: "Can you handle high-volume staffing needs?",
    answer:
      "Yes, our dedicated team scales to meet demands, from single roles to full teams.",
  },
  {
    id: 4,
    question: "How do you ensure talent retention?",
    answer:
      "By focusing on cultural fit, ongoing support, and development opportunities.",
  },
  {
    id: 5,
    question: "What is the turnaround time for staffing?",
    answer:
      "Typically 1-4 weeks, depending on role complexity and requirements.",
  },
  {
    id: 6,
    question: "Do you offer specialized talent for emerging tech?",
    answer:
      "Absolutely, including AI, cloud, and cybersecurity experts from our certified pool.",
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
