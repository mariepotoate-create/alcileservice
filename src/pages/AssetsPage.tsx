import React, { useState } from 'react';
import { Award, Building, Users, Globe, CheckCircle, ArrowRight, ExternalLink, ChevronDown, Calendar, MapPin, Wrench, Zap, Droplets, Snowflake, Settings } from 'lucide-react';

const AssetsPage = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const assets = [
    {
      title: 'Plateaux Techniques Modernes',
      description: 'Équipements professionnels dernière génération pour chaque filière de formation',
      image: 'https://i.ibb.co/TMJkVVVV/1a9025fc-a95f-4373-b11f-db8bac1da367.jpg',
      features: [
        'Machines-outils professionnelles',
        'Postes de travail individuels',
        'Équipements de sécurité conformes',
        'Maintenance régulière assurée'
      ]
    },
    {
      title: 'Formation sur Chantiers Réels',
      description: 'Application pratique des compétences sur des projets concrets avec nos partenaires',
      image: 'https://i.ibb.co/XxB2LTqw/f4b24caa-b54a-4cf1-a20d-7a0b382cc739.jpg',
      features: [
        'Projets de construction réels',
        'Encadrement par des professionnels',
        'Mise en situation concrète',
        'Apprentissage des bonnes pratiques'
      ]
    },
    {
      title: 'Partenariats Solides',
      description: 'Réseau d\'entreprises et institutions partenaires pour stages et emplois',
      image: 'https://i.ibb.co/0jFHrQM6/de126d56-dcec-406e-837e-308c08844ed2.jpg',
      features: [
        'Plus de 50 entreprises partenaires',
        'Stages garantis pour tous',
        'Recrutements réguliers',
        'Suivi post-formation'
      ]
    },
    {
      title: 'Programmes Internationaux',
      description: 'Échanges et missions à l\'étranger pour enrichir l\'expérience des apprenants',
      image: 'https://i.ibb.co/4RCL68Wj/22b63f76-7577-41c0-bb95-92db01fdfc29.jpg',
      features: [
        'Échanges européens',
        'Travaux sociaux de vacances',
        'Expérience internationale'
      ]
    }
  ];

  const projectCategories = [
    {
      id: 'electricite',
      title: 'Travaux d\'Électricité',
      icon: Zap,
      color: 'bg-yellow-500',
      projects: [
        {
          year: '2024',
          items: [
            {
              client: 'Groupe Maison et Travaux (GMT)',
              description: 'Construction de hangars en bacs aluminium + projecteurs LED au parking CNSS',
              image: 'https://i.ibb.co/0jFHrQM6/de126d56-dcec-406e-837e-308c08844ed2.jpg'
            },
            {
              client: 'Zone Sanitaire Abomey-Calavi / So-Ava',
              description: 'Maintenance et entretien du réseau électrique du Centre de Santé d\'Abomey-Calavi',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            },
            {
              client: 'Zone Sanitaire Abomey-Calavi / So-Ava',
              description: 'Maintenance du réseau électrique du Centre de Santé de Kpota',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            },
            {
              client: 'Direction Départementale du Cadre de Vie et des Transports du Littoral',
              description: 'Prestations d\'électricité sur le nouveau site immeuble IBOUKOULE',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            }
          ]
        },
        {
          year: '2023',
          items: [
            {
              client: 'Zone Sanitaire Abomey-Calavi / So-Ava',
              description: 'Travaux d\'électricité au Centre de Santé de Hêvié et Bureau de Zone Abomey-Calavi So-Ava',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            },
            {
              client: 'Zone Sanitaire Abomey-Calavi / So-Ava',
              description: 'Reprise des installations électriques monophasées sécurisées au profit du Centre de Santé de Togba',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            }
          ]
        },
        {
          year: '2022',
          items: [
            {
              client: 'PNHG-Bénin',
              description: 'Travaux d\'électricité dans le cadre du projet de logements sociaux à Ouêdo',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            }
          ]
        },
        {
          year: '2021',
          items: [
            {
              client: 'AGROFAZ Sarl',
              description: 'Travaux d\'électricité, fourniture et installation d\'un groupe électrogène 70 KVA + inverseur dans une usine',
              image: 'https://i.ibb.co/vvwc16sh/c92d6e07-2007-407e-90ab-4504a079bfe2.jpg'
            }
          ]
        },
        {
          year: '2011',
          items: [
            {
              client: 'FEDOL TRIANGLE',
              description: 'Extension ligne moyenne tension, construction ligne basse tension et éclairage public',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            }
          ]
        },
        {
          year: '2009',
          items: [
            {
              client: 'AGROFAZ Sarl',
              description: 'Travaux d\'électricité pour bâtiment R+2 à usage domestique à AGLA',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            }
          ]
        }
      ]
    },
    {
      id: 'groupes',
      title: 'Travaux de Groupes Électrogènes',
      icon: Settings,
      color: 'bg-orange-500',
      projects: [
        {
          year: '2024',
          items: [
            {
              client: 'Mairie de Zakpota',
              description: 'Accord-cadre (3 ans) pour réparation, entretien et maintenance d\'un groupe électrogène 22 KVA',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            },
            {
              client: 'Mairie de Zakpota',
              description: 'Réparation groupe électrogène 22 KVA',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            },
            {
              client: 'Centre de Santé Abomey-Calavi',
              description: 'Entretien et maintenance des groupes électrogènes',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            }
          ]
        },
        {
          year: '2023',
          items: [
            {
              client: 'Zone Sanitaire de Bassila',
              description: 'Entretien et maintenance groupes électrogènes 80 KVA, 20 KVA, TGBT + inverseur',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            }
          ]
        },
        {
          year: '2022',
          items: [
            {
              client: 'Zone Sanitaire de Bassila',
              description: 'Entretien et maintenance groupes électrogènes 80 KVA, 20 KVA, TGBT + inverseur',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            }
          ]
        },
        {
          year: '2013',
          items: [
            {
              client: 'ETS SUCCES PLUS',
              description: 'Installation groupe électrogène 70 KVA + inverseur manuel (bloc opératoire, Hôpital de Zone Aplahoué)',
              image: 'https://i.ibb.co/S71VSsP6/ce6cdf11-0f3f-4202-90d0-a6080f97cffd.jpg'
            }
          ]
        }
      ]
    },
    {
      id: 'plomberie',
      title: 'Travaux de Plomberie',
      icon: Droplets,
      color: 'bg-blue-500',
      projects: [
        {
          year: '2024',
          items: [
            {
              client: 'Direction Départementale Cadre de Vie et Transports du Littoral',
              description: 'Réparations et maintenance plomberie',
              image: 'https://i.ibb.co/60BQYSzK/2b56c957-9af2-411c-8531-6b38421ec333.jpg'
            },
            {
              client: 'Zone Sanitaire Abomey-Calavi / So-Ava',
              description: 'Vidanges fosses septiques et puisards (Centre de Santé)',
              image: 'https://i.ibb.co/60BQYSzK/2b56c957-9af2-411c-8531-6b38421ec333.jpg'
            }
          ]
        },
        {
          year: '2023',
          items: [
            {
              client: 'Zone Sanitaire Abomey-Calavi / So-Ava',
              description: 'Vidange fosses septiques (Centre de Santé de Calavi)',
              image: 'https://i.ibb.co/60BQYSzK/2b56c957-9af2-411c-8531-6b38421ec333.jpg'
            },
            {
              client: 'Zone Sanitaire Abomey-Calavi / So-Ava',
              description: 'Installation de 2 points d\'eau + réparation 4 toilettes (Maternité du Centre de Santé de Calavi)',
              image: 'https://i.ibb.co/60BQYSzK/2b56c957-9af2-411c-8531-6b38421ec333.jpg'
            },
            {
              client: 'Centre de Santé de Kpota',
              description: 'Maintenance plomberie système hydrique',
              image: 'https://i.ibb.co/60BQYSzK/2b56c957-9af2-411c-8531-6b38421ec333.jpg'
            }
          ]
        },
        {
          year: '2022',
          items: [
            {
              client: 'PNHG-Bénin',
              description: 'Travaux de plomberie pour logements sociaux à Ouêdo',
              image: 'https://i.ibb.co/60BQYSzK/2b56c957-9af2-411c-8531-6b38421ec333.jpg'
            }
          ]
        }
      ]
    },
    {
      id: 'froid',
      title: 'Travaux de Froid et Climatisation',
      icon: Snowflake,
      color: 'bg-cyan-500',
      projects: [
        {
          year: '2024',
          items: [
            {
              client: 'Bureau de Zone Sanitaire Bassila',
              description: 'Entretien climatiseurs et réfrigérateurs',
              image: 'https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              client: 'Centre de Santé de Kpota',
              description: 'Réparation et maintenance climatiseurs et réfrigérateurs',
              image: 'https://i.ibb.co/60BQYSzK/2b56c957-9af2-411c-8531-6b38421ec333.jpg'
            },
            {
              client: 'Centre de Santé de Togba',
              description: 'Fourniture + installation 3 climatiseurs (1,5 CV) et brasseurs',
              image: 'https://i.ibb.co/60BQYSzK/2b56c957-9af2-411c-8531-6b38421ec333.jpg'
            }
          ]
        },
        {
          year: '2023',
          items: [
            {
              client: 'Bureau de Zone Sanitaire Bassila',
              description: 'Entretien climatiseurs et réfrigérateurs',
              image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              client: 'Bureau de Zone Sanitaire Bassila',
              description: 'Fourniture climatiseur',
              image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              client: 'Centre de Santé de Kpota',
              description: 'Fourniture + installation 2 climatiseurs (2 CV)',
              image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
          ]
        },
        {
          year: '2022',
          items: [
            {
              client: 'PNHG-Bénin',
              description: 'Travaux de climatisation (logements sociaux, Ouêdo)',
              image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              client: 'Hôpital de Zone Bassila',
              description: 'Entretien climatiseurs',
              image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
          ]
        }
      ]
    },
    {
      id: 'autres',
      title: 'Autres Travaux',
      icon: Wrench,
      color: 'bg-purple-500',
      projects: [
        {
          year: '2024',
          items: [
            {
              client: 'Direction Départementale Cadre de Vie et Transports Littoral',
              description: 'Fourniture + pose cloison mi-panneau, mi-vitré (Immeuble IBIKOULE)',
              image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              client: 'Centre de Santé de Godomey',
              description: 'Fourniture + pose extincteurs',
              image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              client: 'Centre de Santé d\'Abomey-Calavi',
              description: 'Confection + livraison bac à échéancier',
              image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              client: 'Centre de Santé d\'Akassato',
              description: 'Fourniture + reconditionnement extincteurs',
              image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
          ]
        },
        {
          year: '2023',
          items: [
            {
              client: 'Direction Départementale Cadre de Vie et Transports Atlantique',
              description: 'Fourniture + pose grilles de sécurité (portes et fenêtres) + rayons de rangement',
              image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              client: 'AGROFAZ Sarl',
              description: 'Construction ouvrage de franchissement + aménagements connexes (piste Gogounou - Zougou Kpantrossi)',
              image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              client: 'AGROFAZ Sarl',
              description: 'Extension bureaux + rénovation laboratoire SRL de Cotonou',
              image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
          ]
        },
        {
          year: '2022',
          items: [
            {
              client: 'Entreprise LE BUFFLE',
              description: 'Construction d\'un module de 3 classes + bureau + magasin + équipements + bloc de latrines (4 cabines) + clôture (EPP Tori-Cada Gare, Commune de Tori-Bossito)',
              image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
          ]
        }
      ]
    }
  ];

  const majorProjects = [
    {
      title: 'Le siège du 4e arrondissement de Ouidah R+1',
      description: 'Construction complète d\'un bâtiment administratif moderne',
      image: 'https://i.ibb.co/XZQdJdPL/9499727e-e2ec-45cd-8d24-eda3d6122782.jpg',
      year: '2023',
      type: 'Construction'
    },
    {
      title: 'Les logements sociaux de Ouêdo sous le Président TALON Patrice',
      description: 'Projet de logements sociaux dans le cadre du programme gouvernemental',
      image: 'https://i.ibb.co/Wv4Bz7Y9/fb60851b-b8df-4449-a119-301e84c0e99d.jpg',
      year: '2022',
      type: 'Logements'
    },
    {
      title: 'Maison du DG AGROFAZ R+1',
      description: 'Construction résidentielle haut de gamme avec finitions modernes',
      image: 'https://i.ibb.co/HJxWLrW/53137180-1ba8-456d-9e4c-2ec91f991761.jpg',
      year: '2021',
      type: 'Résidentiel'
    },
    {
      title: 'Entretien et maintenance des centres de santé',
      description: 'Maintenance des réseaux d\'eau, d\'électricité et de la chaîne de froid des centres de santé de la zone sanitaire d\'Abomey-Calavi',
      image: 'https://i.ibb.co/YTcfSRf6/9847a980-8ed7-4555-beeb-09124c961dc8.jpg',
      year: '2024',
      type: 'Maintenance'
    }
  ];

  const localPartners = [
    {
      name: 'ENTREPRISE ALCILE SERVICE BTP',
      sector: 'BTP',
      description: 'Entreprise partenaire dirigée par AZA G. Alfred',
      logo: ''
    },
    {
      name: 'ETS LES LUMIERES ANGELIQUES',
      sector: 'Électricité',
      description: 'Partenaire dirigé par KPADONOU Calixte',
      logo: ''
    },
    {
      name: 'ETS PAULUSCO FROID',
      sector: 'Froid & Climatisation',
      description: 'Partenaire dirigé par BADA Paul',
      logo: ''
    },
    {
      name: 'ETS CLPS',
      sector: 'BTP',
      description: 'Partenaire dirigé par EZIN Romain',
      logo: ''
    },
    {
      name: 'ETS ELECTRO HOUSSOU',
      sector: 'Électricité',
      description: 'Partenaire dirigé par HOUSSOU Eric',
      logo: ''
    },
    {
      name: 'ETS DECLIC',
      sector: 'Électricité',
      description: 'Partenaire dirigé par DJOHOUNNON Léon',
      logo: ''
    },
    {
      name: 'ETS ETEC - CONSTRUCTION',
      sector: 'Construction',
      description: 'Partenaire dirigé par AGBOTON G. Mathieu',
      logo: ''
    },
    {
      name: 'ETS MARGUELO SARL',
      sector: 'BTP',
      description: 'Partenaire dirigé par AGUESSI Marius',
      logo: ''
    },
    {
      name: 'SOCIETE LA ROCHE',
      sector: 'Construction',
      description: 'Partenaire dirigé par Mr Vincent (Responsable Commercial)',
      logo: 'https://i.ibb.co/Gf0SZQFN/download.png'
    }
  ];

  const internationalPartners = [
    {
      name: 'CFA Lyon Métropole',
      country: 'France',
      description: 'Centre de formation partenaire pour les échanges étudiants',
      programs: ['Échanges étudiants', 'Formation formateurs', 'Missions techniques']
    },
    {
      name: 'BTP Education Belgique',
      country: 'Belgique',
      description: 'Coopération pour la modernisation des programmes',
      programs: ['Mise à jour programmes', 'Équipements modernes', 'Certifications']
    },
    {
      name: 'Compagnons du Devoir',
      country: 'France',
      description: 'Partenariat pour les travaux sociaux de vacances',
      programs: ['Chantiers solidaires', 'Échanges culturels', 'Perfectionnement']
    },
    {
      name: 'Technical College Munich',
      country: 'Allemagne',
      description: 'Collaboration en formation technique avancée',
      programs: ['Technologies nouvelles', 'Échanges professeurs', 'Recherche appliquée']
    }
  ];

  const toggleProject = (categoryId: string) => {
    setExpandedProject(expandedProject === categoryId ? null : categoryId);
  };

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-[#FAA800]">Atouts</span> & Partenariats
            </h1>
            <p className="text-xl text-blue-100">
              Découvrez les atouts qui font la force d'ALCILE SERVICES et notre réseau de partenaires locaux et internationaux.
            </p>
          </div>
        </div>
      </section>

      {/* Main Assets */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Nos Atouts Majeurs
            </h2>
            <p className="text-xl text-gray-600">
              Ce qui nous distingue dans la formation professionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {assets.map((asset, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#00499D]/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00499D] mb-3">{asset.title}</h3>
                  <p className="text-gray-600 mb-4">{asset.description}</p>
                  <ul className="space-y-2">
                    {asset.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Projets Majeurs Réalisés
            </h2>
            <p className="text-xl text-gray-600">
              Quelques-uns de nos projets phares qui illustrent notre expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {majorProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FAA800] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#00499D] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00499D] mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Projets Détaillés par Filière
            </h2>
            <p className="text-xl text-gray-600">
              Historique complet de nos réalisations techniques
            </p>
          </div>

          <div className="space-y-6">
            {projectCategories.map((category) => (
              <div key={category.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <button
                  onClick={() => toggleProject(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#00499D]">{category.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {category.projects.reduce((total, year) => total + year.items.length, 0)} projets réalisés
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${
                    expandedProject === category.id ? 'rotate-180' : ''
                  }`} />
                </button>

                {expandedProject === category.id && (
                  <div className="border-t border-gray-200 p-6">
                    <div className="space-y-8">
                      {category.projects.map((yearGroup, yearIndex) => (
                        <div key={yearIndex}>
                          <div className="flex items-center space-x-3 mb-4">
                            <Calendar className="w-5 h-5 text-[#FAA800]" />
                            <h4 className="text-lg font-bold text-[#00499D]">{yearGroup.year}</h4>
                          </div>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {yearGroup.items.map((project, projectIndex) => (
                              <div key={projectIndex} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                                  <img
                                    src={project.image}
                                    alt={project.client}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <h5 className="font-semibold text-[#00499D] mb-2 text-sm">{project.client}</h5>
                                <p className="text-gray-600 text-xs leading-relaxed">{project.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Partenaires Locaux
            </h2>
            <p className="text-xl text-gray-600">
              Un réseau solide d'entreprises partenaires au Bénin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#00499D]">{partner.name}</h3>
                    <div className="text-sm text-[#FAA800] font-medium">{partner.sector}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{partner.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="inline-flex items-center text-[#00499D] hover:text-blue-700 font-medium text-sm">
                    En savoir plus
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00499D] mb-4">
              Impact de Nos Partenariats
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FAA800] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#00499D] mb-2">50+</div>
              <div className="text-gray-600">Entreprises Partenaires</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FAA800] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#00499D] mb-2">85%</div>
              <div className="text-gray-600">Taux d'Insertion</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FAA800] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#00499D] mb-2">4</div>
              <div className="text-gray-600">Pays Partenaires</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FAA800] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#00499D] mb-2">200+</div>
              <div className="text-gray-600">Projets Réalisés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
            Rejoignez Notre Réseau
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Vous êtes une entreprise et souhaitez devenir partenaire ? Contactez-nous pour explorer les opportunités de collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-[#00499D] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Devenir Partenaire
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              Voir la Galerie
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetsPage;