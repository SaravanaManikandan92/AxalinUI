const faqs = [
  {
    id: 1,
    question:
      "What type of expertise does Axalin have in Network Modernization?",
    answer:
      "We are Multi Vendor Technology experts & Certified Professionals across key networking and security platforms. We design and deploy solutions that are proven to scale and secure the enterprise.",
  },
  {
    id: 2,
    question: "How will Axalin handle the transition to a new network?",
    answer:
      "We use a Flexible Engagement Model – Build – Operate - Transfer. Our team will meticulously plan and build the new network alongside the old, operate it to ensure stability, and then transfer full operational control and knowledge to your team. We can also provide Staff Augmentation to support the new environment.",
  },
  {
    id: 3,
    question: "How does Axalin ensure a successful project?",
    answer:
      "We believe each client is important to us, and we treat you as such. You will receive a dedicated account manager who provides consistent, personalized support. This level of attention delivers the experience of having a dedicated Technology and Staffing team set apart to work solely for you.",
  },
  {
    id: 4,
    question:
      "How does Axalin ensure network security during a modernization project?",
    answer:
      "Security is paramount. We move to a Zero Trust Architecture, meaning every device and user is verified regardless of location. We implement granular network segmentation and use visibility tools like Armis to monitor and secure all endpoints, including IoT devices.",
  },
  {
    id: 5,
    question:
      "What are the main benefits of moving from traditional MPLS to SD-WAN?",
    answer:
      "The primary benefits are cost savings, increased agility, and better application performance. SD-WAN allows you to use cheaper broadband connections, provides centralized control, and intelligently routes traffic to prioritize critical applications like VoIP and cloud access.",
  },
  {
    id: 6,
    question: "Can Axalin help modernize our internal campus network (LAN)?",
    answer:
      "Yes. Our services cover both Wide Area Network (WAN) modernization and Local Area Network (LAN) upgrades, including implementing Software-Defined Networking (SDN) principles to automate provisioning, enhance security, and ensure seamless WiFi coverage.",
  },
  {
    id: 7,
    question:
      "How does Axalin's Flexible Engagement Model apply to the network?",
    answer:
      "We can Build your new SD-WAN/SDN solution, Operate it for a stabilization period, and then Transfer the knowledge and operational skills to your team. We can also provide Staff Augmentation to assist with ongoing maintenance or complex troubleshooting.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-[#08549c]">
            Certified Expertise. Undivided Attention.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            The Axalin Group Value Proposition (AEO/FAQ)
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
