const faqs = [
  {
    id: 1,
    question:
      "How quickly can I expect a response after filling out the consultation form?",
    answer:
      "We prioritize connecting you with the right expert quickly. You should receive a personal outreach from your dedicated account manager and a subject matter expert within 4–8 business hours to confirm the details and schedule your initial strategic assessment.",
  },
  {
    id: 2,
    question:
      "What is the cost of the initial consultation or strategic assessment?",
    answer:
      "The initial assessment is zero-obligation and complimentary. We believe in providing value upfront. This session is designed for our experts to understand your challenges and craft a custom, tailor-made solution before any commitment is required.",
  },
  {
    id: 3,
    question:
      "What information should I have ready for the initial consultation?",
    answer:
      'To make the session productive, it helps if you can briefly share your primary goal (e.g., "reduce cloud costs," "improve security posture," "need a Java development team") and any current pain points related to that goal.',
  },
  {
    id: 4,
    question:
      'What does having a "dedicated account manager" mean in practice?',
    answer:
      "It means you have one single point of contact who is accountable for your success. Your dedicated account manager is a strategic partner, not just a salesperson. They manage the internal Axalin team, coordinate expertise across our service pillars (Security, Cloud, Talent), and ensure your project stays aligned with your business goals. We promise: you'll never get lost in a corporate support queue.",
  },
  {
    id: 5,
    question: "How does Axalin's expertise compare to larger consulting firms?",
    answer:
      "Axalin offers the same high-level expertise, backed by our leadership's 50+ years of combined experience, but with a commitment to personalized service that larger firms cannot match. We provide custom solutions and undivided attention, ensuring your project receives the priority it deserves.",
  },
  {
    id: 6,
    question: "How does the Flexible Engagement Model work?",
    answer:
      "Our model is Build – Operate - Transfer. We can: Build your new system (e.g., cloud environment or custom app). Operate it to confirm stabilization and initial optimization. Transfer the knowledge and ownership back to your internal team, supported by documentation and training.",
  },
  {
    id: 7,
    question:
      "Does Axalin offer technical support for existing client infrastructure?",
    answer:
      "Yes. For existing clients, technical support is handled through our Managed Services offerings. You should contact your Dedicated Account Manager or use the specific technical support contact information provided upon project completion.",
  },
  {
    id: 8,
    question: "Are your experts certified in multiple technologies?",
    answer:
      "Absolutely. We are Multi Vendor Technology experts & Certified Professionals. Our team holds certifications across all major platforms, including AWS, Microsoft Azure, Google Cloud, and application/security partners like SAP, Okta, and Sentinel One. This ensures we recommend the right technology for your needs, every time.",
  },
  {
    id: 9,
    question:
      "I am looking for a job at Axalin or want to join a client team. Where should I inquire?",
    answer:
      "Please use the dedicated Careers & Staffing email address on our contact page. Our Dedicated Talent Acquisition Team handles all inquiries for internal Axalin roles and placements through our Strategic Talent Solutions.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Frequently Asked Questions (FAQ)
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
