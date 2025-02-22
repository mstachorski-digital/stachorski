import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Linke Seite - Logo und Text */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2"
              tabIndex={0}
              aria-label="Zur Startseite"
            >
              <Image
                src="michael_stachorski_logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-medium text-gray-900">
                michael stachorski
              </span>
            </Link>
          </div>

          {/* Rechte Seite - Navigation und CTA */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-6">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  tabIndex={0}
                  aria-label={`Gehe zu ${item}`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 
                         transition-colors focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:ring-offset-2"
              tabIndex={0}
              aria-label="Call to Action"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
