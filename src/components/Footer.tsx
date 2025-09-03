import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Linkedin, Twitter, Youtube, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Barre drapeau du Bénin */}
      <div className="h-2 flex">
        <div className="flex-1 bg-green-500"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-red-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <ScrollAnimation animation="fadeInLeft">
            <div className="col-span-1 lg:col-span-1">
            <div className="mb-4">
              <Logo variant="light" size="md" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Centre de formation professionnelle agréé par l'État, spécialisé dans les métiers du BTP et de l'informatique.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#FAA800] hover:scale-125 cursor-pointer transition-all duration-300" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-[#FAA800] hover:scale-125 cursor-pointer transition-all duration-300" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#FAA800] hover:scale-125 cursor-pointer transition-all duration-300" />
              <MessageCircle className="w-5 h-5 text-gray-400 hover:text-[#FAA800] hover:scale-125 cursor-pointer transition-all duration-300" />
            </div>
            </div>
          </ScrollAnimation>

          {/* Quick links */}
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div>
            <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/formations" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Nos formations</Link></li>
              <li><Link to="/admission" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Conditions d'admission</Link></li>
              <li><Link to="/diplomes" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Diplômes & Carrières</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">À propos</Link></li>
              <li><Link to="/galerie" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Galerie</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Contact</Link></li>
            </ul>
            </div>
          </ScrollAnimation>

          {/* Formations */}
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div>
            <h3 className="font-semibold text-lg mb-4">Formations</h3>
            <ul className="space-y-2">
              <li><Link to="/formations/electricite" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Électricité</Link></li>
              <li><Link to="/formations/plomberie" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Plomberie</Link></li>
              <li><Link to="/formations/froid-climatisation" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Froid & Climatisation</Link></li>
              <li><Link to="/formations/menuiserie" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Menuiserie</Link></li>
              <li><Link to="/formations/peinture" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Peinture & Décoration</Link></li>
              <li><Link to="/formations/informatique" className="text-gray-300 hover:text-[#FAA800] hover:translate-x-2 transition-all duration-300">Informatique</Link></li>
            </ul>
            </div>
          </ScrollAnimation>

          {/* Contact info */}
          <ScrollAnimation animation="fadeInRight" delay={600}>
            <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FAA800] mt-0.5" />
                <div className="text-sm text-gray-300">
                  Ouêdo Cité Boni YAYI, Villa 69 L4<br />
                  ABOMEY-CALAVI, Bénin
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FAA800]" />
                <div className="text-sm text-gray-300">+229 01 97 46 29 05 / 01 44 42 95 40 / 01 96 94 04 81</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FAA800]" />
                <div className="text-sm text-gray-300">alcileservicebtp06@gmail.com</div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#FAA800] mt-0.5" />
                <div className="text-sm text-gray-300">
                  Lun - Ven: 7h30 - 18h00<br />
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-[#FAA800] transition-all duration-300"
                />
                <button className="px-4 py-2 bg-[#FAA800] text-white rounded-r-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300">
                  S'abonner
                </button>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom bar */}
        <ScrollAnimation delay={800}>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <span>© 2025 ALCILE SERVICE BTP-FORMATION. Tous droits réservés.</span>
              <div className="flex space-x-4">
                <Link to="/mentions-legales" className="hover:text-[#FAA800] transition-colors">
                  Mentions légales
                </Link>
                <Link to="/confidentialite" className="hover:text-[#FAA800] transition-colors">
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Site créé par <span className="text-[#FAA800] font-medium">Rénato TCHOBO</span>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;