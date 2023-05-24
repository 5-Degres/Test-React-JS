const navigation = [
  { name: "Charte de bonne conduite", href: "#" },
  { name: "Conditions générales d'utilisation", href: "/cgu" },
  { name: "Contactez-nous", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-900/10 sticky top-[100vh] font-mono">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-12 lg:px-8">
        <nav className="-mb-6 md:flex md:justify-center md:space-x-12 text-center" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} 5D-Covoit - Agence 5 Degrés Paris
        </p>
      </div>
    </footer>
  );
};

export default Footer;
