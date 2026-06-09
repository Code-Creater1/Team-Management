export default function Statistics() {
  const stats = [
    {
      number: "250+",
      label: "Projects Completed",
      desc: "Successfully delivered websites and web applications.",
    },
    {
      number: "120+",
      label: "Happy Clients",
      desc: "Businesses trust us for digital solutions.",
    },
    {
      number: "8+",
      label: "Years Experience",
      desc: "Building modern and scalable web products.",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      desc: "Long-term relationships with our customers.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-2xl">
            Our Achievements
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Numbers That Speak For Us
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We help startups, businesses, and enterprises build high-performing
            digital products that drive growth.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-blue-600">
                {item.number}
              </h3>

              <h4 className="mt-4 text-xl font-semibold text-slate-900">
                {item.label}
              </h4>

              <p className="mt-3 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl bg-slate-900 text-white p-10 md:p-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold">
                Ready to Build Your Next Project?
              </h3>

              <p className="mt-3 text-slate-300 max-w-xl">
                Let's create a fast, scalable, and modern web solution tailored
                to your business needs.
              </p>
            </div>

            <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
