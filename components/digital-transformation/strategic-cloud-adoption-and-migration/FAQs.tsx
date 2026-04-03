const faqs = [
  {
    id: 1,
    question: "How does Axalin ensure our project stays on track? ",
    answer:
      "Every client receives a dedicated account manager who serves as your single point of contact, providing consistent communication and oversight, ensuring your project aligns with your original vision.",
  },
  {
    id: 2,
    question: "What is Axalin's approach to skill transfer?",
    answer:
      "We offer a Flexible Engagement Model – Build – Operate - Transfer, allowing our experts to manage your new cloud environment initially, and then transition knowledge back to your internal team for long-term self-sufficiency.",
  },
  {
    id: 3,
    question:
      "How does Axalin ensure the security of my data during migration?",
    answer:
      "We integrate security at every stage. We establish secure connections using VPNs and private links, implement encryption protocols (in transit and at rest), and leverage partner technologies like Okta for identity management and SentinelOne for workload protection, ensuring full compliance and data integrity throughout the process.",
  },
  {
    id: 4,
    question:
      "How does the 'Flexible Engagement Model – Build – Operate - Transfer' work for cloud migration?",
    answer:
      "Our model offers maximum flexibility. We can Build your new cloud environment, Operate it for a defined period to ensure stability and optimization, and then smoothly Transfer operational control and knowledge to your internal team, ensuring long-term self-sufficiency.",
  },
  {
    id: 5,
    question: "Which cloud platforms does Axalin specialize in for migration?",
    answer:
      "We are Multi Vendor Technology experts and partners with all major platforms, including Amazon Web Services (AWS), Microsoft Azure, Google Cloud (GCP), and Digital Ocean. This ensures we recommend and build the platform that is the absolute best technical and cost fit for your specific workloads.",
  },
  {
    id: 6,
    question: "How do you help us manage cloud costs after migration (FinOps)?",
    answer:
      "Post-migration, we implement continuous FinOps (Cloud Financial Operations) practices. This includes continuous monitoring with tools like DataDog and Newrelic, right-sizing resources, managing Reserved Instances/Savings Plans, and automating resource shutdowns to ensure cost efficiency is sustained.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Certified Expertise. Dedicated Partnership.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Axalin's Commitment (FAQ)
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
