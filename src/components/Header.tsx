// Header.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from './Logo';
import {
  ChevronDown,
  Menu as MenuIcon,
  X,
  Facebook,
  Linkedin,
  Twitter,
  Home,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    if (isMenuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  const menuItems = [
    { name: "ACCUEIL", path: "/", icon: Home },
    {
      name: "FORMATION",
      path: "/formations",
      submenu: [
        { name: "Filières", path: "/formations" },
        { name: "Électricité", path: "/formations/electricite" },
        { name: "Plomberie", path: "/formations/plomberie" },
        { name: "Froid & Climatisation", path: "/formations/froid-climatisation" },
        { name: "Menuiserie Bois & Alu", path: "/formations/menuiserie" },
        { name: "Peinture & Décoration", path: "/formations/peinture" },
        { name: "Informatique", path: "/formations/informatique" },
      ],
    },
    {
      name: "ADMISSION",
      path: "/admission",
      submenu: [
        { name: "Conditions d'admission", path: "/admission" },
        { name: "Frais de formation", path: "/admission" },
        { name: "Diplômes & Carrières", path: "/diplomes" },
      ],
    },
    { name: "À PROPOS", path: "/about" },
    {
      name: "ACTUALITÉS",
      path: "/actualites",
      submenu: [
        { name: "Actualités", path: "/actualites" },
        { name: "Blog", path: "/blog" },
        { name: "Événements", path: "/evenements" },
        { name: "FAQ", path: "/faq" },
        { name: "Forum", path: "/forum" },
      ],
    },
    { name: "ATOUTS", path: "/atouts" },
    { name: "GALERIE", path: "/galerie" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-[#00499D]"
      }`}
      role="banner"
    >
      {/* Barre drapeau du Bénin */}
      <div className="h-1 flex">
        <div className="flex-1 bg-green-500"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-red-500"></div>
      </div>
      
      {/* Top bar */}
      <div className={`${isScrolled ? "hidden" : "block"} bg-[#00499D] border-b border-blue-600`}>
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Drapeau du Bénin */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg">
                🇧🇯
              </div>
              <div className="text-white text-sm">
                <div className="font-medium">RÉPUBLIQUE DU BÉNIN</div>
                
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-transparent text-white border border-blue-400 px-3 py-1 rounded">
                <option value="fr">FRANÇAIS</option>
                <option value="en">ENGLISH</option>
              </select>
              <div className="flex space-x-2">
                <Facebook className="w-5 h-5 text-white hover:text-[#FAA800] cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-white hover:text-[#FAA800] cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-white hover:text-[#FAA800] cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={`${isScrolled ? "bg-white text-gray-800" : "bg-[#00499D] text-white"} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center space-x-3" aria-label="Accueil">
              <Logo variant={isScrolled ? 'dark' : 'light'} size="md" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6" role="navigation" aria-label="Menu principal">
              {menuItems.map((item) => {
                const ItemIcon = (item as any).icon as React.ComponentType<{ className?: string }>;
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => (item.submenu ? setActiveDropdown(item.name) : setActiveDropdown(null))}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                        location.pathname === item.path
                          ? "bg-[#FAA800] text-white"
                          : isScrolled
                          ? "text-gray-700 hover:text-[#00499D] hover:bg-blue-50"
                          : "text-white hover:text-[#FAA800] hover:bg-blue-600"
                      }`}
                    >
                      {item.icon && <ItemIcon className="w-4 h-4" />}
                      <span className="font-medium text-xs xl:text-sm">{item.name}</span>
                      {item.submenu && <ChevronDown className="w-4 h-4" />}
                    </Link>

                    {/* Desktop dropdown animé */}
                    <AnimatePresence>
                      {item.submenu && activeDropdown === item.name && (
                        <motion.div
                          key={`desktop-sub-${item.name}`}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#00499D] hover:translate-x-2 transition-all duration-300"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              className="xl:hidden p-2"
              onClick={() => {
                setIsMenuOpen((s) => !s);
                setActiveDropdown(null);
              }}
              aria-label="Ouvrir le menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
              ) : (
                <MenuIcon className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white xl:hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Header mobile */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <Logo variant="dark" size="md" />
              <button onClick={() => setIsMenuOpen(false)} aria-label="Fermer le menu">
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Contenu mobile */}
            <div className="px-4 py-6 space-y-4 overflow-y-auto h-[calc(100vh-4rem)]">
              {menuItems.map((item) => {
                const ItemIcon = (item as any).icon as React.ComponentType<{ className?: string }>;
                const isOpen = activeDropdown === item.name;

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => {
                        if (item.submenu) {
                          setActiveDropdown(isOpen ? null : item.name);
                        } else {
                          setIsMenuOpen(false);
                          navigate(item.path);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                        location.pathname === item.path
                          ? "bg-[#FAA800] text-white"
                          : "text-gray-700 hover:bg-blue-50 hover:text-[#00499D]"
                      }`}
                      aria-expanded={!!item.submenu ? isOpen : undefined}
                    >
                      <div className="flex items-center space-x-2">
                        {item.icon && <ItemIcon className="w-4 h-4" />}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      {item.submenu && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-[#00499D]" : "text-gray-500"
                          }`}
                        />
                      )}
                    </button>

                    {/* Sous-menu mobile accordéon */}
                    <AnimatePresence initial={false}>
                      {item.submenu && isOpen && (
                        <motion.div
                          key={`submenu-${item.name}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="ml-6 mt-2 space-y-1 border-l border-gray-200 pl-3 overflow-hidden"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-[#00499D] hover:translate-x-2 transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;