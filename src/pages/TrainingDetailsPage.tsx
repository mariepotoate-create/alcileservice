import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Award, CheckCircle, BookOpen, Wrench, Target, TrendingUp } from 'lucide-react';

const TrainingDetailsPage = () => {
  const { slug } = useParams();

  const trainingsData = {
    electricite: {
      title: 'Électricité Générale',
      description: 'Formation complète en installation, dépannage et maintenance des installations électriques',
      image: 'https://i.ibb.co/0jFHrQM6/de126d56-dcec-406e-837e-308c08844ed2.jpg',
      duration: '2 ans',
      capacity: '25 apprenants max',
      level: 'CEP à BAC+',
      objectives: [
        'Maîtriser les techniques d\'installation électrique',
        'Effectuer la maintenance préventive et curative',
        'Respecter les normes de sécurité électrique',
        'Diagnostiquer et réparer les pannes',
        'Lire et interpréter les schémas électriques'
      ],
      program: [
        {
          module: 'Bases de l\'électricité',
          content: 'Lois fondamentales, courant continu et alternatif, mesures électriques'
        },
        {
          module: 'Installation électrique domestique',
          content: 'Câblage, tableaux électriques, prises et éclairage'
        },
        {
          module: 'Électricité industrielle',
          content: 'Moteurs, automatismes, variateurs de vitesse'
        },
        {
          module: 'Sécurité électrique',
          content: 'Normes, protection des personnes, premiers secours'
        }
      ],
      skills: [
        'Installation de circuits électriques',
        'Maintenance d\'équipements électriques',
        'Lecture de schémas techniques',
        'Utilisation d\'appareils de mesure',
        'Respect des normes de sécurité'
      ],
      career: [
        'Électricien du bâtiment',
        'Électricien industriel',
        'Technicien de maintenance',
        'Chef d\'équipe électricité',
        'Entrepreneur en électricité'
      ],
      equipment: [
        'Multimètres et appareils de mesure',
        'Outillage électrique professionnel',
        'Tableaux électriques d\'exercice',
        'Équipements de protection individuelle'
      ]
    },
    plomberie: {
      title: 'Plomberie Générale',
      description: 'Maîtrisez l\'installation sanitaire, le dépannage et la maintenance des réseaux de plomberie',
      image: 'https://i.ibb.co/PZn7ZL7d/556c4870-52e0-4e80-bc41-39f2a76262bf.jpg',
      duration: '2 ans',
      capacity: '25 apprenants max',
      level: 'CEP à BAC+',
      objectives: [
        'Installer des réseaux de plomberie',
        'Effectuer les raccordements sanitaires',
        'Diagnostiquer et réparer les fuites',
        'Installer des équipements sanitaires',
        'Respecter les normes d\'hygiène'
      ],
      program: [
        {
          module: 'Bases de la plomberie',
          content: 'Matériaux, outils, techniques de base'
        },
        {
          module: 'Installation sanitaire',
          content: 'Évacuation, alimentation, équipements sanitaires'
        },
        {
          module: 'Chauffage et eau chaude',
          content: 'Chaudières, ballons, radiateurs'
        },
        {
          module: 'Dépannage et maintenance',
          content: 'Diagnostic, réparation, entretien'
        }
      ],
      skills: [
        'Soudure et assemblage de tuyaux',
        'Installation d\'équipements sanitaires',
        'Détection et réparation de fuites',
        'Lecture de plans de plomberie',
        'Respect des normes sanitaires'
      ],
      career: [
        'Plombier installateur',
        'Plombier dépanneur',
        'Technicien en chauffage',
        'Chef d\'équipe plomberie',
        'Entrepreneur en plomberie'
      ],
      equipment: [
        'Outils de soudure et cintrage',
        'Équipements de détection de fuites',
        'Installations sanitaires complètes',
        'Matériaux de plomberie variés'
      ]
    },
    'froid-climatisation': {
      title: 'Froid & Climatisation',
      description: 'Installation, maintenance et réparation de systèmes de climatisation et réfrigération',
      image: 'https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2 ans',
      capacity: '25 apprenants max',
      level: 'CEP à BAC+',
      objectives: [
        'Installer des systèmes de climatisation',
        'Effectuer la maintenance préventive',
        'Diagnostiquer les pannes frigorifiques',
        'Manipuler les fluides frigorigènes',
        'Respecter l\'environnement'
      ],
      program: [
        {
          module: 'Thermodynamique appliquée',
          content: 'Principes du froid, cycles frigorifiques'
        },
        {
          module: 'Installation climatisation',
          content: 'Pose, raccordement, mise en service'
        },
        {
          module: 'Fluides frigorigènes',
          content: 'Manipulation, récupération, recyclage'
        },
        {
          module: 'Maintenance et dépannage',
          content: 'Diagnostic, réparation, optimisation'
        }
      ],
      skills: [
        'Installation de systèmes frigorifiques',
        'Manipulation des fluides frigorigènes',
        'Diagnostic électronique',
        'Soudure sur cuivre',
        'Respect des normes environnementales',
        'Entretien et dépannage d\'appareils électroménagers tels que lave-linge, réfrigérateur, congélateur et cuisinière.',
      ],
      career: [
        'Technicien frigoriste',
        'Installateur climatisation',
        'Dépanneur froid commercial',
        'Chef d\'équipe froid',
        'Entrepreneur en climatisation'
      ],
      equipment: [
        'Stations de récupération de fluides',
        'Manifolds et manomètres',
        'Équipements de soudure',
        'Systèmes de climatisation d\'étude'
      ]
    },
    menuiserie: {
      title: 'Menuiserie Bois & Aluminium',
      description: 'Conception, fabrication et pose de structures bois et aluminium',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2 ans',
      capacity: '25 apprenants max',
      level: 'CEP à BAC+',
      objectives: [
        'Fabriquer des menuiseries bois et alu',
        'Effectuer la pose et l\'ajustement',
        'Utiliser les machines à bois',
        'Lire les plans techniques',
        'Respecter les finitions'
      ],
      program: [
        {
          module: 'Travail du bois',
          content: 'Essences, techniques d\'usinage, assemblages'
        },
        {
          module: 'Menuiserie aluminium',
          content: 'Profilés, découpe, assemblage'
        },
        {
          module: 'Machines et outillage',
          content: 'Scie, raboteuse, toupie, sécurité'
        },
        {
          module: 'Pose et finition',
          content: 'Installation, réglages, finitions'
        }
      ],
      skills: [
        'Usinage du bois et de l\'aluminium',
        'Assemblage traditionnel et moderne',
        'Utilisation de machines-outils',
        'Lecture de plans techniques',
        'Finitions et ajustements'
      ],
      career: [
        'Menuisier d\'atelier',
        'Menuisier poseur',
        'Agenceur',
        'Chef d\'équipe menuiserie',
        'Entrepreneur menuiserie'
      ],
      equipment: [
        'Machines à bois professionnelles',
        'Outillage de menuiserie',
        'Établis et serrage',
        'Matériaux bois et aluminium'
      ]
    },
    peinture: {
      title: 'Peinture & Décoration',
      description: 'Techniques de peinture professionnelle et décoration intérieure/extérieure',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2 ans',
      capacity: '25 apprenants max',
      level: 'CEP à BAC+',
      objectives: [
        'Maîtriser les techniques de peinture',
        'Préparer les supports',
        'Réaliser des finitions décoratives',
        'Conseiller sur les couleurs',
        'Respecter l\'environnement'
      ],
      program: [
        {
          module: 'Préparation des supports',
          content: 'Nettoyage, ponçage, rebouchage, primaire'
        },
        {
          module: 'Techniques de peinture',
          content: 'Rouleau, pinceau, pistolet, effets'
        },
        {
          module: 'Décoration et finitions',
          content: 'Papier peint, enduits décoratifs'
        },
        {
          module: 'Colorimétrie',
          content: 'Mélange des couleurs, harmonies'
        }
      ],
      skills: [
        'Application de peintures diverses',
        'Préparation de supports',
        'Techniques décoratives',
        'Conseil en couleurs',
        'Utilisation d\'équipements modernes'
      ],
      career: [
        'Peintre en bâtiment',
        'Décorateur d\'intérieur',
        'Façadier',
        'Chef d\'équipe peinture',
        'Entrepreneur peinture'
      ],
      equipment: [
        'Pistolets et compresseurs',
        'Échafaudages et nacelles',
        'Outillage de préparation',
        'Gamme complète de peintures'
      ]
    },
    informatique: {
      title: 'Informatique (Bureautique & Graphisme)',
      description: 'Formation pratique en bureautique, secrétariat et logiciels graphiques professionnels',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '1 an',
      capacity: '25 apprenants max',
      level: 'CEP à BAC+',
      objectives: [
        'Maîtriser la suite Office',
        'Créer des documents professionnels',
        'Utiliser les logiciels graphiques',
        'Gérer les bases de données',
        'Naviguer sur Internet efficacement'
      ],
      program: [
        {
          module: 'Bureautique avancée',
          content: 'Word, Excel, PowerPoint, Outlook'
        },
        {
          module: 'Publication assistée',
          content: 'Publisher, mise en page, impression'
        },
        {
          module: 'Graphisme et retouche',
          content: 'Photoshop, InDesign, création visuelle'
        },
        {
          module: 'Internet et communication',
          content: 'Navigation, email, réseaux sociaux'
        }
      ],
      skills: [
        'Maîtrise de Microsoft Office',
        'Création de supports visuels',
        'Retouche d\'images',
        'Mise en page professionnelle',
        'Communication numérique'
      ],
      career: [
        'Secrétaire bureautique',
        'Assistant administratif',
        'Opérateur de saisie',
        'Graphiste junior',
        'Entrepreneur services informatiques'
      ],
      equipment: [
        'Ordinateurs récents',
        'Logiciels professionnels',
        'Imprimantes et scanners',
        'Connexion Internet haut débit'
      ]
    }
  };

  const training = trainingsData[slug as keyof typeof trainingsData];

  if (!training) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Formation non trouvée</h1>
          <Link to="/formations" className="text-[#FAA800] hover:text-orange-600">
            Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${training.image})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="mb-6">
              <Link to="/formations" className="text-blue-200 hover:text-white">
                Formations
              </Link>
              <span className="mx-2 text-blue-200">/</span>
              <span className="text-white">{training.title}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{training.title}</h1>
            <p className="text-xl text-blue-100 mb-8">{training.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span>{training.duration}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Users className="w-5 h-5" />
                <span>{training.capacity}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span>{training.level}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Objectives */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-[#FAA800]" />
                <h2 className="text-2xl font-bold text-[#00499D]">Objectifs de la formation</h2>
              </div>
              <ul className="space-y-3">
                {training.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Program */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-8 h-8 text-[#FAA800]" />
                <h2 className="text-2xl font-bold text-[#00499D]">Programme détaillé</h2>
              </div>
              <div className="space-y-6">
                {training.program.map((module, index) => (
                  <div key={index} className="border-l-4 border-[#FAA800] pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{module.module}</h3>
                    {module.duration && (
                      <span className="text-[#FAA800] font-medium block mb-2">
                        {module.duration}
                      </span>
                    )}
                    <p className="text-gray-600">{module.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Wrench className="w-8 h-8 text-[#FAA800]" />
                <h2 className="text-2xl font-bold text-[#00499D]">Compétences acquises</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {training.skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Career */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-8 h-8 text-[#FAA800]" />
                <h2 className="text-2xl font-bold text-[#00499D]">Débouchés professionnels</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {training.career.map((job, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold text-gray-900">{job}</h3>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* CTA Card */}
              <div className="bg-[#00499D] text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Intéressé par cette formation ?</h3>
                <p className="text-blue-100 mb-6">
                  Consultez les conditions d'admission et commencez votre inscription.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/admission"
                    className="block w-full px-6 py-3 bg-[#FAA800] text-white text-center font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    S'inscrire maintenant
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-3 border-2 border-white text-white text-center font-semibold rounded-lg hover:bg-white hover:text-[#00499D] transition-colors"
                  >
                    Poser une question
                  </Link>
                </div>
              </div>

              {/* Equipment */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#00499D] mb-4">Équipements disponibles</h3>
                <ul className="space-y-2">
                  {training.equipment.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related trainings */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#00499D] mb-4">Autres formations</h3>
                <div className="space-y-3">
                  {Object.entries(trainingsData)
                    .filter(([key]) => key !== slug)
                    .slice(0, 3)
                    .map(([key, data]) => (
                      <Link
                        key={key}
                        to={`/formations/${key}`}
                        className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-medium text-gray-900 mb-1">{data.title}</h4>
                        <div className="text-sm text-gray-500 flex items-center space-x-3">
                          <span>{key === 'informatique' ? '1 an' : '2 ans'}</span>
                          <span>{data.level}</span>
                        </div>
                      </Link>
                    ))}
                </div>
                <Link
                  to="/formations"
                  className="inline-flex items-center mt-4 text-[#FAA800] hover:text-orange-600 font-medium"
                >
                  Voir toutes les formations
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetailsPage;
