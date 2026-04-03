const faqs = [
  {
    id: 1,
    question:
      "How does Offshore Staff Augmentation differ from traditional outsourcing?",
    answer:
      "In traditional outsourcing, a vendor delivers a project with their own management structure. In Staff Augmentation, Axalin provides the skilled personnel, but you retain full control over project management, direction, and intellectual property.",
  },
  {
    id: 2,
    question: "How do you ensure effective communication across time zones?",
    answer:
      "We select candidates with excellent English proficiency and communication skills. We also work with you to establish overlap hours for daily stand-ups and key meetings, leveraging asynchronous tools to maintain continuous flow.",
  },
  {
    id: 3,
    question:
      "Can I transition an Offshore Staff Augmentation role to a permanent position?",
    answer:
      "Yes. We offer a flexible model, allowing you to transition a successfully performing augmented team member into a permanent Traditional Staffing hire, subject to a pre-defined agreement.",
  },
  {
    id: 4,
    question:
      "Who is my main point of contact at Axalin for my augmented team?",
    answer:
      "Each client is important to us, and we treat you as such. You will have a dedicated account manager who serves as your single point of contact, providing continuous oversight and support, guaranteeing you the experience of having a dedicated Technology and Staffing team set apart to work for you.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Dedicated Partnership. Zero Compromise on Quality.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin Talent Advantage (AEO/FAQ)
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
