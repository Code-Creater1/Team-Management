
"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EmployeeProfile() {
  const { id } = useParams();

  const [employee, setEmployee] = useState([]);
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
    "https://images.unsplash.com/photo-1521119989659-a83eee488004",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004",
  ];

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await res.json();

        const foundEmployee = data.find(
          (emp) => emp.id === Number(id)
        );

        // transform API data into UI format
        const formatted = foundEmployee
          ? {
              id: foundEmployee.id,
              name: foundEmployee.name,
              email: foundEmployee.email,
              location: foundEmployee.address.city,
              phone: foundEmployee.phone,
              company: foundEmployee.company.name,
              website: foundEmployee.website,
              // image: employeeImages[index % employeeImages.length],
              image: `https://images.unsplash.com/photo-1560250097-0b93528c311a`,
            }
          : null;

        setEmployee(formatted);
      } catch (error) {
        console.error("Error fetching employee:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-lg">
        Loading employee profile...
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Employee not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
  {/* Cover Photo */}
  <div
    className="h-100 w-full bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000')",
    }}
  />

  {/* Profile Section */}
  <div className="relative px-6 lg:px-16">
    {/* Avatar + Info */}
    <div className="-mt-32 flex flex-col lg:flex-row gap-8 items-start">

      <img
        src={employee.image}
        alt={employee.name}
        className="w-56 h-56 rounded-full border-2 border-white object-cover shadow-xl"
      />

      <div className="pt-20">
        <h1 className="text-5xl font-bold text-gray-200">
          {employee.name}
        </h1>

        <p className="text-xl text-blue-600 mt-2">
          {employee.company}
        </p>

        <p className="text-gray-500 mt-1">
          Employee ID #{employee.id}
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl">
            Follow
          </button>

          <button className="bg-gray-200 px-8 py-3 rounded-xl">
            Message
          </button>
        </div>
      </div>
    </div>

    {/* Information Section */}
    <div className="grid lg:grid-cols-3 gap-8 mt-12 pb-12">

      {/* Left Sidebar */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">
          Contact Information
        </h2>

        <div className="space-y-4">
          <p>📧 {employee.email}</p>
          <p>📞 {employee.phone}</p>
          <p>📍 {employee.location}</p>
          <p>🌐 {employee.website}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold mb-4">
          About
        </h2>

        <p className="text-gray-600 leading-8">
          {employee.name} is a professional working at
          {` ${employee.company}`}. Based in
          {` ${employee.location}`}, they contribute to the
          organization through dedication, innovation,
          teamwork, and leadership.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-50 p-5 rounded-xl">
            <h3 className="font-semibold">Company</h3>
            <p>{employee.company}</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl">
            <h3 className="font-semibold">Location</h3>
            <p>{employee.location}</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl">
            <h3 className="font-semibold">Phone</h3>
            <p>{employee.phone}</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl">
            <h3 className="font-semibold">Website</h3>
            <p>{employee.website}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</main>
  );
}






