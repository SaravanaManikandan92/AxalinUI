export default function OurStory() {
  const values = [
    {
      name: "Vision",
      description:
        "Guiding organizations to harness their fullest potential through transformative IT solutions.",
    },
    {
      name: "Mission",
      description:
        "To empower organizations through innovative IT solutions, strategic guidance, and expert support, enabling them to harness technology's full potential and achieve sustainable growth in an ever-evolving digital landscape.",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl py-14 sm:py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-[#08549c]">Our Story</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Experience Meets Innovation
        </p>
        <p className="mt-6 text-lg/8 text-gray-700">
          Axalin was Founded in 2021 to address the gap between large-scale,
          impersonal IT service providers and the need for high-touch, custom
          solutions. Our mission is built on a foundation of profound
          experience.
        </p>
        <p className="mt-6 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
          50+ Years of Combined Expertise
        </p>
        <p className="mt-6 text-lg/8 text-gray-700">
          Our leadership team brings over five decades of successful
          implementations and strategic guidance in IT service delivery. This
          ensures every solution we design is backed by mature process and
          proven, real-world results.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {values.map((value) => (
          <div key={value.name}>
            <dt className="font-semibold text-gray-900">{value.name}</dt>
            <dd className="mt-1 text-gray-600">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
