import React from 'react';
import { Award, TrendingUp, Users, Building, CheckCircle } from 'lucide-react';

const DiplomaPage = () => {
  const diplomas = [
    {
      name: 'CQP (Certificat de Qualification Professionnelle)',
      level: 'Niveau 3',
      duration: '2 ans',
      description: 'Certification reconnue par l\'État attestant de compétences professionnelles spécifiques',
      recognition: 'Ministère de l\'Enseignement Technique et de la Formation Professionnelle'
    },
    {
      name: 'CQM (Certificat de Qualification aux Métiers)',
      level: 'Niveau 4',
      duration: '2 ans',
      description: 'Qualification avancée pour exercer un métier avec autonomie et expertise',
      recognition: "Ministère de l'Enseignement Technique et de la Formation Professionnelle, Chambre des Métiers et de l'Artisanat du Bénin, Ministère des petites et moyennes entreprises",

    },
    {
      name: 'AFFP (Attestation de Fin de Formation Professionnelle)',
      level: 'Tous niveaux',
      duration: '2 ans',
      description: 'Attestation délivrée en fin de formation validant les acquis',
      recognition: 'ALCILE SERVICES BTP-FORMATION (Centre agréé)'
    }
  ];

  const careerPaths = [
    {
      sector: 'Secteur privé',
      opportunities: [
        'Entreprises du BTP',
        'Sociétés de services techniques',
        'PME spécialisées',
        'Multinationales'
      ],
      percentage: '60%'
    },
    {
      sector: 'Entrepreneuriat',
      opportunities: [
        'Création d\'entreprise',
        'Artisanat spécialisé',
        'Services techniques',
        'Commerce de matériaux'
      ],
      percentage: '25%'
    },
    {
      sector: 'Secteur public',
      opportunities: [
        'Collectivités locales',
        'Ministères techniques',
        'Projets de développement',
        'ONG internationales'
      ],
      percentage: '15%'
    }
  ];

  const support = [
    {
      title: 'Accompagnement à l\'insertion',
      description: 'Aide à la recherche d\'emploi, préparation aux entretiens',
      icon: Users
    },
    {
      title: 'Réseau de partenaires',
      description: 'Mise en relation avec nos entreprises partenaires',
      icon: Building
    },
    {
      title: 'Appui à la création d\'entreprise',
      description: 'Formation en gestion, aide aux formalités',
      icon: TrendingUp
    },
    {
      title: 'Suivi post-formation',
      description: 'Accompagnement durant les 6 premiers mois',
      icon: Award
    }
  ];

  const statistics = [
    { label: 'Taux d\'insertion', value: '85%', color: 'text-green-600' },
    { label: 'Création d\'entreprise', value: '25%', color: 'text-blue-600' },
    { label: 'Poursuite d\'études', value: '15%', color: 'text-purple-600' },
    { label: 'Satisfaction employeurs', value: '92%', color: 'text-orange-600' }
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Diplômes & <span className="text-[#FAA800]">Carrières</span>
            </h1>
            <p className="text-xl text-blue-100">
              Découvrez les certifications délivrées par notre centre et les opportunités de carrière qui s'offrent à vous après votre formation.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diplomas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Nos Diplômes et Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Des certifications reconnues par l'État pour une insertion professionnelle réussie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diplomas.map((diploma, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-[#FAA800] rounded-full mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#00499D] mb-2 text-center">
                  {diploma.name}
                </h3>
                {diploma.duration && (
                  <div className="text-center mb-4">
                    <span className="text-gray-500">({diploma.duration})</span>
                  </div>
                )}
                <p className="text-gray-600 text-sm mb-4">{diploma.description}</p>
                <div className="border-t pt-4">
                  <div className="text-xs text-gray-500 font-medium">Reconnaissance :</div>
                  <div className="text-sm text-green-600">{diploma.recognition}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Débouchés Professionnels
            </h2>
            <p className="text-xl text-gray-600">
              Nos diplômés s'insèrent dans différents secteurs d'activité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {careerPaths.map((path, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-[#00499D] mb-2">{path.sector}</h3>
                  <div className="text-3xl font-bold text-[#FAA800]">{path.percentage}</div>
                  <div className="text-sm text-gray-500">de nos diplômés</div>
                </div>
                <ul className="space-y-3">
                  {path.opportunities.map((opportunity, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-[#00499D] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Accompagnement
            </h2>
            <p className="text-xl text-blue-100">
              Nous vous accompagnons dans votre insertion professionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {support.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-[#FAA800] rounded-full mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Témoignages de Réussite
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les parcours inspirants de nos anciens apprenants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#FAA800] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JB</span>
                </div>
                <div>
                  <div className="font-semibold text-[#00499D]">Jean-Baptiste KOUDJO</div>
                  <div className="text-sm text-gray-500">CQM Électricité - 2023</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                "Après ma formation, j'ai créé mon entreprise d'électricité. Aujourd'hui, j'emploie 5 personnes et je réalise des projets dans tout Cotonou."
              </p>
              <div className="text-sm font-medium text-green-600">
                Entrepreneur - Électricité KOUDJO SARL
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#FAA800] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MA</span>
                </div>
                <div>
                  <div className="font-semibold text-[#00499D]">Marie ADJOVI</div>
                  <div className="text-sm text-gray-500">CQP Informatique - 2023</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                "Recrutée directement par une multinationale grâce à mes compétences en développement web. Je forme maintenant les nouveaux arrivants."
              </p>
              <div className="text-sm font-medium text-blue-600">
                Développeuse Senior - TechCorp Bénin
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#FAA800] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">PD</span>
                </div>
                <div>
                  <div className="font-semibold text-[#00499D]">Pierre DOSSOU</div>
                  <div className="text-sm text-gray-500">CQM Plomberie - 2022</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                "Chef d'équipe dans une grande entreprise de BTP. Ma formation pratique m'a donné une longueur d'avance sur le terrain."
              </p>
              <div className="text-sm font-medium text-purple-600">
                Chef d'équipe - SOBEBAT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
            Votre Avenir Commence Ici
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez nos formations qualifiantes et donnez un nouvel élan à votre carrière professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/formations"
              className="inline-flex items-center px-8 py-4 bg-[#00499D] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Découvrir nos formations
            </a>
            <a
              href="/admission"
              className="inline-flex items-center px-8 py-4 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              S'inscrire maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiplomaPage;