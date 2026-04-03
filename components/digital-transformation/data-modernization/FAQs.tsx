const faqs = [
  {
    id: 1,
    question:
      "What specific technology expertise does Axalin provide for Data Modernization?",
    answer:
      "We are Multi Vendor Technology experts & Certified Professionals across the entire data ecosystem, including all major Cloud Platform Partners and security/tool partners like Splunk and DataDog, ensuring a secure and efficient platform.",
  },
  {
    id: 2,
    question:
      "How does Axalin manage the complexity of a Data Modernization project?",
    answer:
      "Our commitment is undivided: Each client is important to us, and we treat you as such. You will be assigned a dedicated account manager who provides consistent, single-point-of-contact support, giving you the experience of having a dedicated Technology and Staffing team set apart to work solely for your success.",
  },
  {
    id: 3,
    question: "What happens after the new data platform is built?",
    answer:
      "We offer a Flexible Engagement Model – Build – Operate - Transfer. We can continue to manage and optimize the platform post-deployment, or fully transfer knowledge to your team, supported by our Strategic Talent Solutions for any necessary Staff Augmentation.",
  },
  {
    id: 4,
    question:
      "How does Data Modernization directly impact my ability to use AI/ML?",
    answer:
      "Data Modernization is essential for AI Readiness. AI models require clean, unified, and easily accessible data. We eliminate silos and structure your data (often in a Data Lakehouse model) so it can be fed directly to your AI Automation and Orchestration solutions, ensuring accurate and meaningful results.",
  },
  {
    id: 5,
    question:
      "How do you handle data governance and compliance during the process?",
    answer:
      "We implement robust governance frameworks to manage data quality, privacy, and regulatory compliance (e.g., GDPR, HIPAA). This includes setting up access controls, managing metadata, and ensuring audit trails are in place across your new data platform.",
  },
  {
    id: 6,
    question:
      "What is the benefit of a 'Data Lakehouse' architecture over a traditional Data Warehouse?",
    answer:
      "A Data Lakehouse unifies the best of both. It offers the high-speed query performance and governance of a data warehouse, while also handling massive volumes of unstructured and semi-structured data (like a data lake), making it highly flexible and cost-effective for modern analytics.",
  },
  {
    id: 7,
    question:
      "Can Axalin provide data engineers or analysts to support the new platform?",
    answer:
      "Yes. Through our Strategic Talent Solutions, we provide targeted Staff Augmentation (Onshore or Offshore) to quickly onboard data engineers, BI developers, and data scientists who are fully familiar with the cloud-native platforms we implement.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Experience, Dedication, and Strategic Partnership
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
