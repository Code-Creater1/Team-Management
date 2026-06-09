export default function Team() {
  const employees = [
    {
      id: 1,
      name: "Syed Bilal Hashmi",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    },
    {
      id: 2,
      name: "Zubair Lodhi",
      role: "COO",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 3,
      name: "Imran",
      role: "Business Developement",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Meet Our Team
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            The People Behind Our Success
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Our talented team of designers, developers, strategists, and
            innovators work together to create exceptional digital experiences
            for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="group overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {employee.name}
                </h3>

                <p className="mt-2 text-blue-600 font-medium">
                  {employee.role}
                </p>

                <p className="mt-4 text-gray-600">
                  Dedicated to delivering excellence and helping clients achieve
                  their business goals.
                </p>

                <button className="mt-6 text-sm font-semibold text-black hover:text-blue-600">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-center text-center">
            <button className="bg-blue-500 text-white text-2xl px-10 py-3 rounded">
              <a href="/employee">Our Team</a>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
