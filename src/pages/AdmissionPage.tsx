import React, { useState } from 'react';
import { CheckCircle, FileText, CreditCard, Users, Home, Calendar, Award, Target, BookOpen, Clock, Phone, Mail, MapPin, Download, AlertCircle, Info } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const AdmissionPage = () => {
  const [activeTab, setActiveTab] = useState('conditions');

  const tabs = [
    { id: 'conditions', name: 'Conditions & Documents', icon: CheckCircle },
    { id: 'frais', name: 'Frais & Paiements', icon: CreditCard },
    { id: 'processus', name: 'Processus d\'Inscription', icon: Target },
    { id: 'services', name: 'Services & Hébergement', icon: Home }
  ];

  const requirements = [
    { text: 'Être âgé de 15 à 35 ans', icon: Users, color: 'text-blue-600' },
    { text: 'Niveau minimum : CEP (Certificat d\'Études Primaires)', icon: BookOpen, color: 'text-green-600' },
    { text: 'Motivation et engagement pour le métier choisi', icon: Target, color: 'text-red-600' }
  ];

  const documents = [
    { doc: 'Fiche d\'inscription dûment remplie', required: true, note: 'À retirer au secrétariat' },
    { doc: 'Copie de l\'acte de naissance sécurisé', required: true, note: '' },
    { doc: 'Attestation ou diplôme de la dernière classe fréquentée', required: true, note: 'Copie certifiée' },
    { doc: 'Six (6) photos d\'identité récentes', required: true, note: 'Format 4x4 cm' },
    { doc: 'Deux (2) cartables à sangle', required: true, note: 'Pour les cours' },
    { doc: 'Carte de séjour pour les étrangers ou passeport', required: true, note: 'Document officiel en cours de validité' },
    { doc: 'Une (1) ramette de papier A4', required: true, note: 'Pour les supports' }
  ];

  const fees = [
    {
      category: 'Métiers du Bâtiment',
      subtitle: 'Électricité • Plomberie • Froid & Climatisation • Menuiserie (Bois & aluminium) • Peinture & décoration',
      duration: '2 ans',
      students: {
        male: {
          label: 'Garçons',
          totalFees: '390 000 FCFA',
          breakdown: {
            year1: '190 000 FCFA',
            year2: '200 000 FCFA'
          },
          installments: '3 versements par année'
        },
        female: {
          label: 'Filles',
          totalFees: '350 000 FCFA',
          breakdown: {
            year1: '170 000 FCFA',
            year2: '180 000 FCFA'
          },
          installments: '3 versements par année',
          discount: '10% de réduction'
        },
        etrangers: {
          label: 'Etrangers',
          totalFees: '450 000 FCFA',
          breakdown: {
            year1: '230 000 FCFA',
            year2: '220 000 FCFA'
          },
          installments: '3 versements par année'
        }  
      },
      additionalFees: {
        inscription: '10 000 FCFA',
        uniforme: '20 000 FCFA',
        kit: '50 000 FCFA',
        epi: '25 000 FCFA',
        tenue_sport: '2 000 FCFA',
        assurance: '2 000 FCFA'
      }
    },
    {
      category: 'Informatique',
      subtitle: 'Bureautique • Graphisme • Maintenance',
      duration: '1 an',
      students: {
        all: {
          label: 'Tous apprenants',
          totalFees: '120 000 FCFA',
          breakdown: {
            payment: 'Paiement en 3 versements'
          },
          installments: '3 versements dans l\'année'
        }
      },
      additionalFees: {
        inscription: '10 000 FCFA',
        uniforme: '20 000 FCFA',
        tenue_sport: '2 000 FCFA',
        assurance: '2 000 FCFA'
      }
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Information & Orientation',
      description: 'Rencontrez nos conseillers pour choisir la filière adaptée à votre profil et vos objectifs',
      duration: '30 minutes',
      actions: ['Entretien d\'orientation', 'Présentation des filières', 'Visite des plateaux techniques']
    },
    {
      step: 2,
      title: 'Constitution du Dossier',
      description: 'Rassemblez tous les documents requis et retirez la fiche d\'inscription',
      duration: '2-3 jours',
      actions: ['Collecte des documents', 'Remplissage de la fiche', 'Vérification du dossier']
    },
    {
      step: 3,
      title: 'Dépôt & Entretien',
      description: 'Déposez votre dossier complet et passez l\'entretien de motivation avec nos formateurs',
      duration: '1 jour',
      actions: ['Dépôt du dossier', 'Entretien de motivation', 'Test d\'aptitude (si nécessaire)']
    },
    {
      step: 4,
      title: 'Validation & Inscription',
      description: 'Réception de la confirmation d\'admission et finalisation de votre inscription',
      duration: '2-3 jours',
      actions: ['Notification d\'admission', 'Paiement des frais', 'Inscription définitive']
    }
  ];

  const services = [
    {
      title: 'Hébergement Sécurisé',
      description: 'Dortoirs modernes et sécurisés pour les apprenants de l\'intérieur du pays',
      price: '120 000 FCFA/an',
      features: ['Électricité incluse', 'Eau courante', 'Sécurité 24h/24', 'Espaces communs', 'Wifi gratuit'],
      icon: Home,
      color: 'bg-blue-500'
    },
    {
      title: 'Accompagnement Personnalisé',
      description: 'Suivi individuel tout au long de votre parcours de formation',
      price: 'Inclus',
      features: ['Orientation personnalisée', 'Soutien pédagogique', 'Aide à l\'insertion', 'Suivi post-formation', 'Coaching carrière'],
      icon: Award,
      color: 'bg-purple-500'
    }
  ];

  const paymentOptions = [
    {
      title: 'Paiement Échelonné',
      description: 'Étalez vos paiements sur la durée de formation',
      icon: '3x',
      details: ['3 versements par année', 'Pas de frais supplémentaires', 'Flexibilité de paiement']
    },
    {
      title: 'Réduction Filles',
      description: 'Encouragement à la participation féminine',
      icon: '-10%',
      details: ['10% de réduction', 'Applicable sur tous les frais', 'Promotion de l\'égalité']
    },
    {
      title: 'Aide au Financement',
      description: 'Orientation vers les organismes de financement',
      icon: '€',
      details: ['Partenaires financiers', 'Bourses disponibles', 'Accompagnement démarches']
    }
  ];

  const advantages = [
    { title: 'Formation 70% Pratique', description: 'Apprentissage sur chantiers réels', icon: '🔧' },
    { title: 'Stages Garantis', description: 'Partenariat avec 50+ entreprises', icon: '🏢' },
    { title: '85% d\'Insertion', description: 'Taux d\'emploi dans les 6 mois', icon: '📈' },
    { title: 'Accompagnement Entrepreneurial', description: 'Aide à la création d\'entreprise', icon: '💼' }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00499D] via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-slideInDown">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Conditions d'<span className="text-[#FAA800]">Admission</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-fadeInUp animate-delay-300">
              Toutes les informations pour intégrer nos formations professionnelles d'excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm animate-fadeInUp animate-delay-500">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>Processus Simplifié</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CreditCard className="w-5 h-5" />
                <span>Paiement Flexible</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span>Accompagnement Personnalisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <ScrollAnimation key={index} delay={index * 150} animation="scaleIn">
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 200}ms` }}>{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-[#00499D] mb-3 group-hover:text-[#FAA800] transition-colors duration-300">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-50 sticky top-32 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-[#00499D] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Conditions & Documents */}
        {activeTab === 'conditions' && (
          <div className="space-y-16">
            <ScrollAnimation className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#00499D] mb-4">Conditions d'Admission</h2>
              <p className="text-xl text-gray-600">Critères et documents requis pour votre inscription</p>
            </ScrollAnimation>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Requirements */}
              <ScrollAnimation animation="fadeInLeft">
                <div>
                  <h3 className="text-2xl font-bold text-[#00499D] mb-8 flex items-center">
                    <CheckCircle className="w-8 h-8 mr-3 text-[#FAA800]" />
                    Conditions d'Accès
                  </h3>
                  <div className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group" style={{ animationDelay: `${index * 100}ms` }}>
                        <requirement.icon className={`w-6 h-6 ${requirement.color} mt-1 flex-shrink-0`} />
                        <span className="text-gray-700 font-medium text-lg group-hover:text-[#00499D] transition-colors duration-300">{requirement.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              {/* Documents */}
              <ScrollAnimation animation="fadeInRight" delay={300}>
                <div>
                  <h3 className="text-2xl font-bold text-[#00499D] mb-8 flex items-center">
                    <FileText className="w-8 h-8 mr-3 text-[#FAA800]" />
                    Dossier à Constituer
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="space-y-4">
                      {documents.map((document, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 group">
                          <div className="flex items-center justify-center w-6 h-6 bg-[#FAA800] rounded-full flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 font-medium mb-1 group-hover:text-[#00499D] transition-colors duration-300">{document.doc}</p>
                            <p className="text-sm text-gray-500">{document.note}</p>
                          </div>
                          {document.required && (
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                              Obligatoire
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-1">Information importante</h4>
                          <p className="text-blue-700 text-sm">
                            Tous les documents doivent être en cours de validité. Les copies doivent être certifiées conformes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        )}

        {/* Frais & Paiements */}
        {activeTab === 'frais' && (
          <div className="space-y-16">
            <ScrollAnimation className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#00499D] mb-4">Frais de Formation</h2>
              <p className="text-xl text-gray-600">Tarifs transparents avec facilités de paiement</p>
            </ScrollAnimation>

            {/* Fees Structure */}
            <div className="space-y-12">
              {fees.map((fee, index) => (
                <ScrollAnimation key={index} delay={index * 200} animation="fadeInUp">
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-[#00499D] to-blue-700 text-white p-6">
                      <h3 className="text-2xl font-bold mb-2">{fee.category}</h3>
                      <p className="text-blue-100">{fee.subtitle}</p>
                      <div className="flex items-center space-x-4 mt-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5" />
                          <span>Durée : {fee.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        {Object.entries(fee.students).map(([key, student]) => (
                          <div key={key} className="relative">
                            {student.discount && (
                              <div className="absolute -top-3 left-4 z-10">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                  {student.discount}
                                </span>
                              </div>
                            )}
                            
                            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#FAA800] transition-colors duration-300">
                              <h4 className="text-xl font-bold text-[#00499D] mb-4">{student.label}</h4>
                              
                              <div className="text-center mb-6">
                                <div className="text-3xl font-bold text-[#FAA800] mb-2">{student.totalFees}</div>
                                <div className="text-sm text-gray-500">{student.installments}</div>
                              </div>

                              <div className="space-y-3">
                                {student.breakdown.year1 && (
                                  <>
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">1ère année :</span>
                                      <span className="font-semibold">{student.breakdown.year1}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">2ème année :</span>
                                      <span className="font-semibold">{student.breakdown.year2}</span>
                                    </div>
                                  </>
                                )}
                                {student.breakdown.payment && (
                                  <div className="text-center text-gray-600">{student.breakdown.payment}</div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-6">
                        <h4 className="font-bold text-gray-900 mb-4">Frais Généraux :</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {Object.entries(fee.additionalFees).map(([key, value]) => (
                            <div key={key} className="bg-blue-50 rounded-lg p-4 text-center">
                              <div className="font-semibold text-[#00499D] capitalize mb-1">
                                {key === 'kit' ? 'Kit de formation' : 
                                 key === 'epi' ? 'ÉPI (Équipement de Protection Individuelle)' :
                                 key.replace('_', ' ')}
                              </div>
                              <div className="text-gray-700">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Payment Options */}
            <ScrollAnimation delay={600}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#00499D] mb-8 text-center">Facilités de Paiement</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {paymentOptions.map((option, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                      <div className="w-16 h-16 bg-[#FAA800] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">{option.icon}</span>
                      </div>
                      <h4 className="font-bold text-[#00499D] mb-3 group-hover:text-[#FAA800] transition-colors duration-300">{option.title}</h4>
                      <p className="text-gray-600 mb-4">{option.description}</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        {option.details.map((detail, i) => (
                          <li key={i}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        )}

        {/* Processus d'Inscription */}
        {activeTab === 'processus' && (
          <div className="space-y-16">
            <ScrollAnimation className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#00499D] mb-4">Processus d'Inscription</h2>
              <p className="text-xl text-gray-600">4 étapes simples pour intégrer nos formations</p>
            </ScrollAnimation>

            <div className="grid lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={index} delay={index * 200} animation="fadeInUp">
                  <div className="relative group">
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#FAA800] to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                          <span className="text-white font-bold text-2xl">{step.step}</span>
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#FAA800] to-gray-300"></div>
                        )}
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <h3 className="text-xl font-bold text-[#00499D] mb-3 group-hover:text-[#FAA800] transition-colors duration-300">{step.title}</h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div className="text-sm text-[#FAA800] font-medium mb-4">⏱️ {step.duration}</div>
                        
                        <div className="space-y-2">
                          {step.actions.map((action, i) => (
                            <div key={i} className="flex items-center space-x-2 text-sm text-gray-500">
                              <CheckCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                              <span>{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Calendar */}
            <ScrollAnimation delay={800}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#00499D] mb-8 text-center flex items-center justify-center">
                  <Calendar className="w-8 h-8 mr-3 text-[#FAA800]" />
                  Calendrier des Inscriptions
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:scale-105 transition-all duration-300 group">
                    <h4 className="font-bold text-[#00499D] mb-4 text-xl">🍂 Rentrée de Septembre (Rentrée officielle)</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Ouverture des inscriptions :</span>
                        <span className="font-bold text-[#00499D]">Juin</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Clôture des inscriptions :</span>
                        <span className="font-bold text-[#00499D]">En cours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Début des cours :</span>
                        <span className="font-bold text-[#FAA800]"> 15 Septembre</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:scale-105 transition-all duration-300 group">
                    <h4 className="font-bold text-[#00499D] mb-4 text-xl">❄️ Rentrée spéciale de Janvier</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Ouverture des inscriptions :</span>
                        <span className="font-bold text-[#00499D]">Novembre</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Clôture des inscriptions :</span>
                        <span className="font-bold text-[#00499D]">Décembre</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Début des cours (rentrée spéciale Janvier):</span>
                        <span className="font-bold text-[#FAA800]">Janvier</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        )}

        {/* Services & Hébergement */}
        {activeTab === 'services' && (
          <div className="space-y-16">
            <ScrollAnimation className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#00499D] mb-4">Services & Hébergement</h2>
              <p className="text-xl text-gray-600">Des services complets pour votre réussite</p>
            </ScrollAnimation>

            {/* Images hébergement */}
            <ScrollAnimation delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="relative group">
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://i.ibb.co/gbSwZCSJ/33dc26d9-eb3d-49f3-8a24-436366cbb851.jpg"
                      alt="Hébergement Garçons"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-2">Dortoir Garçons</h3>
                      <p className="text-sm text-gray-200">Hébergement sécurisé et moderne</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://i.ibb.co/h19hMgGg/6da075b7-15e6-43b3-9c90-e76749b1e006.jpg"
                      alt="Hébergement Filles"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-2">Dortoir Filles</h3>
                      <p className="text-sm text-gray-200">Espace dédié et sécurisé</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={index} delay={index * 200} animation="scaleIn">
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className={`${service.color} p-6 text-white`}>
                      <service.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{service.title}</h3>
                      <p className="text-white/90">{service.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-[#FAA800] mb-2 group-hover:scale-110 transition-transform duration-300">{service.price}</div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Services inclus :</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Schedule & Organization */}
            <ScrollAnimation delay={600}>
              <div className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-8 text-center">Horaires & Organisation</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Clock className="w-6 h-6 mr-2" />
                      Horaires de Formation
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Lundi - Vendredi :</span>
                        <span className="font-semibold">07h30 - 18h00</span>
                      </div>
                     
                      <div className="flex justify-between items-center">
                        <span>Dimanche :</span>
                        <span className="font-semibold text-[#FAA800]">Repos</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Target className="w-6 h-6 mr-2" />
                      Organisation Pédagogique
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Cours théoriques :</span>
                        <span className="font-semibold">30%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Travaux pratiques :</span>
                        <span className="font-semibold text-[#FAA800]">70%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Stages en entreprise :</span>
                        <span className="font-semibold">Garantis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 animate-fadeInLeft">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-6">
                    Prêt à Commencer ?
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Notre équipe est là pour vous accompagner dans votre démarche d'inscription. 
                    Contactez-nous pour plus d'informations ou pour démarrer votre inscription.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-[#FAA800]" />
                      <span className="text-lg">+229 01 97 46 29 05 / 01 44 42 95 40</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-[#FAA800]" />
                      <span className="text-lg">alcileservicebtp06@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-[#FAA800]" />
                      <span className="text-lg">Ouêdo Cité Boni YAYI, Villa 69 L4, Abomey-Calavi, Bénin</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Award className="w-6 h-6 text-[#FAA800]" />
                      <span className="text-sm text-gray-600">Autorisation N°042/MESTFP/DC/SGM/DIPIQ/DESTFP/DPAF/SGSI/SA/028SGG23</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Award className="w-6 h-6 text-[#FAA800]" />
                      <span className="text-sm text-gray-600">Autorisation N°042/MESTFP/DC/SGM/DIPIQ/DESTFP/DPAF/SGSI/SA/028SGG23</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#00499D] text-white font-semibold rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <FileText className="mr-3 w-6 h-6" />
                      Commencer l'Inscription
                    </a>
                    <a
                      href="tel:+2290197462905"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#FAA800] text-white font-semibold rounded-xl hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Phone className="mr-3 w-6 h-6" />
                      Nous Appeler
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#00499D] to-blue-800 p-8 lg:p-12 text-white animate-fadeInRight">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-[#FAA800]">ALCILE SERVICE FORMATION</h3>
                    <div className="space-y-2 text-lg font-semibold">
                      <div>Qualité</div>
                      <div>Efficacité</div>
                      <div>Rigueur</div>
                    </div>
                    <div className="mt-6 text-blue-100 italic">
                      "ALCILE SERVICE FORMATION : Demain s'invente avec Nous"
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-6">Nos Atouts :</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#FAA800] mt-0.5 flex-shrink-0 animate-bounce-custom" />
                      <div>
                        <h4 className="font-semibold mb-1">Formation Pratique</h4>
                        <p className="text-blue-100 text-sm">70% de pratique sur chantiers réels</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#FAA800] mt-0.5 flex-shrink-0 animate-bounce-custom animate-delay-200" />
                      <div>
                        <h4 className="font-semibold mb-1">Insertion Professionnelle</h4>
                        <p className="text-blue-100 text-sm">85% de taux d'insertion dans les 6 mois</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#FAA800] mt-0.5 flex-shrink-0 animate-bounce-custom animate-delay-400" />
                      <div>
                        <h4 className="font-semibold mb-1">Diplômes Reconnus</h4>
                        <p className="text-blue-100 text-sm">Examen National, CQP et CQM certifiés par l'État</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#FAA800] mt-0.5 flex-shrink-0 animate-bounce-custom animate-delay-500" />
                      <div>
                        <h4 className="font-semibold mb-1">Partenariats Solides</h4>
                        <p className="text-blue-100 text-sm">Plus de 50 entreprises partenaires</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;