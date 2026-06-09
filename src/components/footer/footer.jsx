import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3">
              <a
                class="text-white text-[23px] -ml-2 md:m-0 md:text-[30px] font-semibold md:font-bold"
                href="/"
              >
                BawdicSoft
              </a>
              {/* <div className="h-10 w-10 rounded-lg bg-blue-600"></div>
              <h2 className="text-2xl font-bold">DevCompany</h2> */}
            </div>

            <p className="mt-4 text-slate-400 leading-relaxed">
              We build modern websites, web applications, and digital
              experiences that help businesses grow online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Web Development</li>
              <li>E-Commerce</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>

            <ul className="space-y-3 text-slate-400">
              <li>hello@devcompany.com</li>
              <li>+1 (123) 456-7890</li>
              <li>New York, USA</li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-400"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-blue-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2026 Bawdicsoft. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-slate-500">
            <Link href="/privacy-policy">Privacy Policy</Link>

            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
