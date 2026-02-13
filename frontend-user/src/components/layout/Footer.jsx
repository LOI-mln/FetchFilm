function Footer() {
    const footerLinks = {
    "À propos": ["Qui sommes-nous", "Emplois", "Presse"],
    Aide: ["FAQ", "Centre d'aide", "Compte", "Contact"],
    Légal: ["Confidentialité", "Conditions d'utilisation", "Mentions légales"],
    Réseaux: ["Facebook", "Twitter", "Instagram", "YouTube"],
    };

    const socialIcons = [
    { name: "Facebook", logo: "f" },
    { name: "Twitter", logo: "𝕏" },
    { name: "Instagram", logo: "📷" },
    { name: "YouTube", logo: "▶" },
    ];

  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([key, value]) => (
          <div key={key}>
            <h3 className="font-bold mb-4 text-gray-300">
              {key}
          </h3>
            <ul className="space-y-2">
              {value.map(link => (
                <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {link}
                </a>
                </li> ))}
            </ul>
          </div>
        ))}
        </div>
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialIcons.map((socialIcon, index) => (
            <a key={index} href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors" aria-label={socialIcon.name}>
              <span className="text-xl">{socialIcon.logo}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            © 2026 FetchFilm - Projet pédagogique IUT Informatique - Limoges
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;