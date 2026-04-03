const faqs = [
  {
    id: 1,
    question:
      "How does Axalin ensure my project is custom and not a template approach?",
    answer:
      "We believe each business’s IT vision is unique. We start with a comprehensive assessment to understand your specific challenges and future goals, ensuring the solution we design is genuinely custom & tailor-made—not a generic package.",
  },
  {
    id: 2,
    question:
      "How does the 'Flexible Engagement Model' help with large modernization projects?",
    answer:
      "Our Build – Operate - Transfer model offers maximum flexibility. We can Build the new infrastructure, Operate it to stabilize performance and prove value, and then Transfer the knowledge back to your team, supported by Offshore/Onshore Staff Augmentation as needed.",
  },
  {
    id: 3,
    question: "Who will manage my modernization project on a daily basis?",
    answer:
      "Each client is important to us, and we treat you as such. You will have a dedicated account manager just for you. This ensures you have a single point of contact and receive the experience of having a dedicated Technology and Staffing team set apart to work solely for your success.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Guaranteed Custom Solutions and Undivided Attention
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin Value Proposition (FAQ)
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
