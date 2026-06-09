export default function TeamDashboard() {
  const employees = [
    { id: 1, name: "John Smith", role: "CEO" },
    { id: 2, name: "Sarah Johnson", role: "UI/UX Designer" },
    { id: 3, name: "Michael Brown", role: "Frontend Developer" },
    { id: 4, name: "Emma Wilson", role: "Backend Developer" },
    { id: 5, name: "David Lee", role: "Project Manager" },
    { id: 6, name: "Olivia Taylor", role: "Marketing Lead" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-blue-600 font-medium">
            Meet Our Team
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            The People Behind Our Company
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl">
            Our talented professionals work together to deliver
            exceptional solutions for our clients.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-500">Employees</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold">12</h3>
            <p className="text-gray-500">Departments</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold">150+</h3>
            <p className="text-gray-500">Projects</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold">98%</h3>
            <p className="text-gray-500">Satisfaction</p>
          </div>
        </div>

        {/* Employee Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>

              <h3 className="font-bold text-lg">
                {employee.name}
              </h3>

              <p className="text-gray-500">
                {employee.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}