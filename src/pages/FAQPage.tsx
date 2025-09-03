import React, { useState } from 'react';
import { ChevronDown, Search, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les questions' },
    { id: 'admissions', name: 'Admissions' },
    { id: 'formations', name: 'Formations' },
    { id: 'frais', name: 'Frais & Paiements' },
    { id: 'diplomes', name: 'Diplômes' },
    { id: 'hebergement', name: 'Hébergement' },
    { id: 'stages', name: 'Stages & Emploi' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'admissions',
      question: 'Quelles sont les conditions d\'admission ?',
      answer: 'Pour intégrer nos formations, vous devez être âgé(e) de 15 à 35 ans, avoir le niveau CEP minimum et présenter un extrait de casier judiciaire. Une motivation pour le métier choisi est également requise.'
    },
    {
      id: 2,
      category: 'formations',
      question: 'Combien de temps durent les formations ?',
      answer: 'La durée varie selon la filière : Peinture & Décoration (2 ans), Électricité et Plomberie (2 ans), Menuiserie (2 ans), Froid & Climatisation (2 ans), Informatique (1 an).'
    },
    {
      id: 3,
      category: 'frais',
      question: 'Quels sont les frais de formation ?',
      answer: 'Les frais varient en fonction de la filière choisie. Consultez la page filière pour plus d\'informations.'
    },
    {
      id: 4,
      category: 'diplomes',
      question: 'Quels diplômes sont délivrés ?',
      answer: 'Nous délivrons des CQP (Certificat de Qualification Professionnelle), CQM (Certificat de Qualification aux Métiers) et AFFP (Attestation de Fin de Formation Professionnelle), tous reconnus par l\'État.'
    },
    {
      id: 5,
      category: 'formations',
      question: 'La formation est-elle vraiment 70% pratique ?',
      answer: 'Oui, notre pédagogie privilégie la pratique avec des travaux sur chantiers réels, l\'utilisation d\'équipements professionnels et des mises en situation concrètes. 70% du temps est consacré aux travaux pratiques.'
    },
    {
      id: 6,
      category: 'hebergement',
      question: 'Proposez-vous un hébergement ?',
      answer: 'Oui, nous disposons de dortoirs sécurisés pour les apprenants venant de l\'intérieur du pays au tarif de 120 000 FCFA par an. L\'hébergement comprend l\'électricité, l\'eau et la sécurité 24h/24.'
    },
    {
      id: 7,
      category: 'stages',
      question: 'Y a-t-il des stages en entreprise ?',
      answer: 'Absolument ! Tous nos programmes incluent des stages pratiques dans nos entreprises partenaires. Nous avons plus de 50 partenaires qui accueillent régulièrement nos apprenants.'
    },
    {
      id: 8,
      category: 'admissions',
      question: 'Comment s\'inscrire ?',
      answer: 'L\'inscription se fait en 4 étapes : constitution du dossier, entretien de motivation, validation d\'admission, et début de la formation. Vous pouvez nous contacter pour démarrer le processus.'
    },
    {
      id: 9,
      category: 'formations',
      question: 'Les cours ont-ils lieu en journée uniquement ?',
      answer: 'Non, nous proposons des horaires flexibles : formations en journée, soirée ou weekend pour s\'adapter aux contraintes de chacun, notamment pour les personnes déjà en activité.'
    },
    {
      id: 10,
      category: 'diplomes',
      question: 'Les diplômes sont-ils reconnus à l\'étranger ?',
      answer: 'Nos diplômes sont reconnus au niveau national et dans la sous-région UEMOA. Pour une reconnaissance internationale, des équivalences peuvent être demandées selon les pays.'
    },
    {
      id: 11,
      category: 'stages',
      question: 'Quel est le taux d\'insertion professionnelle ?',
      answer: 'Notre taux d\'insertion est de 85% dans les 6 mois suivant l\'obtention du diplôme. 25% de nos diplômés créent leur propre entreprise avec notre accompagnement.'
    },
    {
      id: 12,
      category: 'frais',
      question: 'Existe-t-il des bourses ou des aides ?',
      answer: 'Nous proposons des réductions selon profil (filles, groupes, paiement anticipé). Nous pouvons aussi vous orienter vers des organismes de financement de la formation professionnelle.'
    },
    {
      id: 13,
      category: 'formations',
      question: 'Peut-on changer de filière en cours de formation ?',
      answer: 'Un changement est possible durant les 2 premiers mois, sous réserve de places disponibles dans la nouvelle filière et avec l\'accord de l\'équipe pédagogique.'
    },
    {
      id: 14,
      category: 'hebergement',
      question: 'Les dortoirs sont-ils mixtes ?',
      answer: 'Non, nous avons des dortoirs séparés pour les hommes et les femmes, avec des espaces communs (réfectoire, salle d\'étude) où tous peuvent se retrouver.'
    },
    {
      id: 15,
      category: 'admissions',
      question: 'Y a-t-il une limite d\'âge ?',
      answer: 'L\'âge limite est fixé à 35 ans pour favoriser l\'insertion professionnelle. Des dérogations exceptionnelles peuvent être accordées selon le profil et la motivation.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Questions <span className="text-[#FAA800]">Fréquentes</span>
            </h1>
            <p className="text-xl text-blue-100">
              Trouvez rapidement les réponses aux questions les plus courantes sur nos formations, admissions et services.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Search */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#00499D] mb-4">Rechercher</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher une question..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D]"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#00499D] mb-4">Catégories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[#00499D] text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-[#00499D] text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Question non trouvée ?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Notre équipe est là pour vous aider personnellement.
                </p>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-[#FAA800] text-white rounded-lg hover:bg-orange-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat en ligne</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-[#00499D] transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>Nous appeler</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-[#00499D] transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>Nous écrire</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#00499D]">
                  {selectedCategory === 'all' 
                    ? 'Toutes les questions' 
                    : categories.find(c => c.id === selectedCategory)?.name
                  }
                </h2>
                <div className="text-sm text-gray-500">
                  {filteredFAQs.length} question{filteredFAQs.length > 1 ? 's' : ''} trouvée{filteredFAQs.length > 1 ? 's' : ''}
                </div>
              </div>

              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <div key={faq.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                          openAccordion === faq.id ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {openAccordion === faq.id && (
                        <div className="px-6 pb-4 border-t border-gray-100">
                          <p className="text-gray-600 pt-4 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune question trouvée</h3>
                  <p className="text-gray-600 mb-4">Essayez de modifier vos critères de recherche ou contactez-nous directement.</p>
                  <button className="inline-flex items-center px-6 py-3 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Nous contacter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#00499D] mb-8 text-center">
            Questions les plus populaires
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.slice(0, 6).map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{faq.answer}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      setSelectedCategory(faq.category);
                      setOpenAccordion(faq.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="text-[#FAA800] hover:text-orange-600 font-medium text-sm"
                  >
                    Lire la réponse complète →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
            Besoin d'aide personnalisée ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-[#00499D] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              <Phone className="mr-2 w-5 h-5" />
              +229 01 97 46 29 05
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              <Mail className="mr-2 w-5 h-5" />
              alcileservicebtp06@gmail.com
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;