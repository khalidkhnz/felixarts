import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <span className="text-gray-300 font-bold text-lg">Acme Inc.</span>
          </div>
          <p className="text-sm">
            Providing high-quality products and services since 1985.
          </p>
        </div>
        <div>
          <h4 className="text-gray-300 font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-gray-200" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-300 font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-gray-200" href="#">
                Documentation
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Support
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-300 font-bold mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-gray-200" href="#">
                Twitter
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Facebook
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 text-center">
        <p className="text-sm">© 2024 Acme Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
