import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const FormationsPage = () => {
  const trainings = [
    {
      title: 'Électricité Générale',
      description: 'Formation complète en installation, dépannage et maintenance des installations électriques',
      image: 'https://i.ibb.co/0jFHrQM6/de126d56-dcec-406e-837e-308c08844ed2.jpg',
      duration: '2 ans',
      level: 'CEP à BAC+',
      slug: 'electricite',
      highlights: ['Installation', 'Maintenance', 'Câblage', 'Sécurité']
    },
    {
      title: 'Plomberie Générale',
      description: 'Maîtrisez l’installation sanitaire, le dépannage et la maintenance des réseaux de plomberie',
      image: 'https://i.ibb.co/PZn7ZL7d/556c4870-52e0-4e80-bc41-39f2a76262bf.jpg',
      duration: '2 ans',
      level: 'CEP à BAC+',
      slug: 'plomberie',
      highlights: ['Sanitaire', 'Raccordements', 'Entretien', 'Réparation']
    },
    {
      title: 'Froid & Climatisation',
      description: 'Installation, maintenance et réparation de systèmes de climatisation et réfrigération, maintenan',
      image: 'https://i.ibb.co/Z11YxQwv/froid-et-climatisation.jpg',
      duration: '2 ans',
      level: 'CEP à BAC+',
      slug: 'froid-climatisation',
      highlights: ['Climatisation', 'Réfrigération', 'Dépannage', 'Chargement gaz']
    },
    {
      title: 'Menuiserie Bois & Aluminium',
      description: 'Conception, fabrication et pose de structures bois et aluminium',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2 ans',
      level: 'CEP à BAC+',
      slug: 'menuiserie',
      highlights: ['Bois', 'Aluminium', 'Serrurerie', 'Pose']
    },
    {
      title: 'Peinture & Décoration',
      description: 'Techniques de peinture professionnelle et décoration intérieure/extérieure',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2 ans',
      level: 'CEP à BAC+',
      slug: 'peinture',
      highlights: ['Peinture bâtiment', 'Finitions', 'Effets décoratifs', 'Colorimétrie']
    },
    {
      title: 'Informatique (Bureautique & Graphisme)',
      description: 'Formation pratique en bureautique, secrétariat et logiciels graphiques professionnels',
      image: 'https://i.ibb.co/5gHwRcv1/35416d4d-ee3f-4205-b407-36de000656c9.jpg',
      duration: '1 an',
      level: 'CEP à BAC+',
      slug: 'informatique',
      highlights: ['Word / Excel / PowerPoint', 'Publisher', 'Photoshop', 'InDesign']
    },
  ];

  const methodology = [
    {
      title: '70% Pratique',
      description: 'Apprentissage intensif sur le terrain, en atelier et sur chantiers réels',
      icon: '🔧'
    },
    {
      title: '30% Théorie',
      description: 'Des bases solides en cours pour bien comprendre les notions techniques',
      icon: '📚'
    },
    {
      title: 'Stages en entreprise',
      description: 'Stage professionnel garanti en entreprise à la fin de la formation',
      icon: '🏢'
    },
    {
      title: 'Équipements modernes',
      description: 'Plateaux techniques équipés d’outils professionnels et de sécurité',
      icon: '🛠️'
    },
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl animate-slideInDown">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-[#FAA800]">Formations</span>
            </h1>
            <p className="text-xl text-blue-100 animate-fadeInUp animate-delay-300">
              Découvrez nos 6 filières professionnelles certifiées par l’État, axées sur la pratique, l’insertion et l’entrepreneuriat.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Notre Approche Pédagogique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une pédagogie active basée sur des expériences concrètes et un encadrement rigoureux
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 150} animation="fadeInUp">
                <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 200}ms` }}>{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#00499D] mb-3 group-hover:text-[#FAA800] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Nos Filières de Formation
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le métier qui correspond à vos ambitions et formez-vous avec des professionnels certifiés
            </p>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <ScrollAnimation key={index} delay={index * 200} animation="fadeInUp">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <img
                      src={training.image}
                      alt={training.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-[#00499D] group-hover:text-[#FAA800] transition-colors duration-300">{training.title}</h3>
                      <span className="bg-[#FAA800] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {training.level}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{training.description}</p>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="w-5 h-5 text-[#FAA800] group-hover:animate-pulse-custom" />
                      <span className="text-sm text-gray-600">{training.duration}</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Points clés :</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {training.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/formations/${training.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-[#00499D] text-white font-semibold rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      Voir les détails
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00499D] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideInDown">
            Prêt à vous former ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto animate-fadeInUp animate-delay-200">
            Consultez les conditions d'admission ou contactez-nous pour plus d'informations sur les frais et pièces à fournir
          </p>
          </ScrollAnimation>
          <ScrollAnimation delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="inline-flex items-center px-8 py-4 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <Award className="mr-2 w-5 h-5" />
              Conditions d'admission
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#00499D] hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Nous contacter
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default FormationsPage;
