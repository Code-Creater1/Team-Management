export default function Hero() {
  return (
    <section className="relative overflow-hidden text-black">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium">
              🚀 Professional Web Development Services
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
              We Transform Your
              <span className="block text-blue-600">Cluttered Space</span>
              Into a Peaceful Retreat.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We design and develop high-performance websites, web applications,
              e-commerce stores, and custom digital solutions that help
              businesses attract customers and increase revenue.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Get Free Consultation
              </button>

              <button className="px-8 py-4 rounded-xl border font-semibold hover:bg-gray-50 transition">
                View Portfolio
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-white">
              <div>
                <p className="text-2xl font-bold text-white">150+</p>
                <p>Projects Delivered</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">98%</p>
                <p>Client Satisfaction</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p>Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="rounded-3xl border bg-white p-8 shadow-2xl">
              <div className="space-y-5">
                <div className="h-4 w-32 bg-blue-100 rounded"></div>
                <div className="h-4 w-full bg-gray-100 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-100 rounded"></div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="h-32 rounded-2xl bg-blue-50"></div>
                  <div className="h-32 rounded-2xl bg-indigo-50"></div>
                </div>

                <div className="h-40 rounded-2xl bg-gray-50"></div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-8 top-12 bg-white rounded-2xl shadow-lg p-4">
              <p className="font-semibold">⚡ Fast Performance</p>
            </div>

            <div className="absolute -right-6 bottom-10 bg-white rounded-2xl shadow-lg p-4">
              <p className="font-semibold">📱 Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
