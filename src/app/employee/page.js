"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Team() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const employeeImages = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004",
  ];

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await res.json();

        const formattedEmployees = data.map((user, index) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          company: user.company.name,
          location: user.address.city,
          website: user.website,
          phone: user.phone,
          image: employeeImages[index % employeeImages.length],
          // image: `https://i.pravatar.cc/400?img=${index + 1}`,
        }));

        setEmployees(formattedEmployees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Loading Team...
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Meet Our Team
          </span>

          <h1 className="mt-4 text-5xl font-bold text-gray-900">
            The People Behind Our Success
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Our talented professionals collaborate to create innovative
            solutions and deliver exceptional experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {employee.name}
                </h3>

                <p className="text-blue-600 font-medium mt-2">
                  {employee.company}
                </p>

                <p className="text-gray-500 mt-2">📍 {employee.location}</p>

                <p className="text-gray-500 truncate">✉️ {employee.email}</p>

                <p className="text-gray-500 truncate">📞 {employee.phone}</p>

                <Link
                  href={`/employee/${employee.id}`}
                  className="inline-flex items-center mt-6 text-blue-600 font-semibold hover:text-blue-800"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
