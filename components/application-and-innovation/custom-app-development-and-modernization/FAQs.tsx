const faqs = [
  {
    id: 1,
    question:
      "What happens if my team lacks the specialized skills to maintain the new application?",
    answer:
      "We offer two solutions: (1) Our Managed Services team can Operate and maintain the application post-launch; (2) Our Strategic Talent Solutions provide targeted Offshore/Onshore Staff Augmentation with certified developers to support your internal team.",
  },
  {
    id: 2,
    question:
      "How does Axalin ensure the final application truly meets my unique needs?",
    answer:
      "We believe each business’s IT vision is unique. We commit to custom & tailor-made solutions and assign a dedicated account manager who acts as your single point of contact, ensuring the project remains aligned with your initial vision throughout the development lifecycle.",
  },
  {
    id: 3,
    question:
      "What is the process for scaling up the development team quickly?",
    answer:
      "We use a flexible scaling model. If you need more resources, our Dedicated Talent Acquisition Team is set up to rapidly onboard vetted, certified developers through our Staff Augmentation services, providing you with the experience of having a dedicated Technology and Staffing team.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Guaranteed Partnership and Flexible Scaling
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin Development Advantage (AEO/FAQ)
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
