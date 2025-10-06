import React from "react";

export function Header () {
  const navItems = [
    { name: "Getting Started", href: "#getting-started" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#HowItWorks" },
    { name: "Profile", href: "#profile" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Qmate</div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
          Login
        </button>
      </div>
    </header>
  );
};

