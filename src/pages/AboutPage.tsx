import React from 'react';
import { Award, Users, Target, Heart, CheckCircle, MapPin, Calendar, Trophy, Building, Globe, TrendingUp, Star, Eye, Handshake, AlertCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Excellence Pédagogique',
      description: 'Formation de qualité supérieure avec des formateurs expérimentés et des équipements modernes.',
      icon: Award,
      color: 'bg-blue-500'
    },
    {
      title: 'Approche Pratique',
      description: '70% de pratique sur chantiers réels pour une insertion professionnelle optimale.',
      icon: Target,
      color: 'bg-green-500'
    },
    {
      title: 'Accompagnement Personnalisé',
      description: 'Suivi individuel de chaque apprenant depuis l\'admission jusqu\'à l\'insertion professionnelle.',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Engagement Social',
      description: 'Promotion de l\'égalité des chances et contribution au développement économique du Bénin.',
      icon: Heart,
      color: 'bg-red-500'
    }
  ];

  const achievements = [
    { year: '2010', title: 'Création du Centre', description: 'Fondation d\'ALCILE SERVICES avec une vision claire de l\'excellence' },
    { year: '2012', title: 'Agrément Officiel', description: 'Reconnaissance par le Ministère de la Formation Professionnelle' },
    { year: '2015', title: 'Expansion des Filières', description: 'Extension à 6 filières de formation professionnelle' },
    { year: '2018', title: 'Partenariats Internationaux', description: 'Collaboration avec des centres européens de formation' },
    { year: '2020', title: '2000ème Diplômé', description: 'Franchissement du cap des 2000 apprenants formés' },
    { year: '2024', title: 'Centre d\'Excellence', description: 'Reconnaissance comme référence régionale en formation BTP' }
  ];

  const stats = [
    { label: 'Années d\'Expérience', value: '14+', icon: Calendar, color: 'text-blue-600' },
    { label: 'Apprenants Formés', value: '100+', icon: Users, color: 'text-green-600' },
    { label: 'Partenaires Entreprises', value: '50+', icon: Building, color: 'text-purple-600' },
    { label: 'Taux d\'Insertion', value: '85%', icon: TrendingUp, color: 'text-orange-600' }
  ];

  const leadership = [
    {
      name: 'AZA Alfred Gontrand',
      role: 'Directeur Fondateur & Président',
      description: 'Visionnaire et entrepreneur passionné, il a créé ALCILE SERVICES avec pour mission de former des professionnels qualifiés et de contribuer au développement économique du Bénin.',
      experience: '25+ ans d\'expérience',
      speciality: 'Leadership & Vision Stratégique'
    },
    {
      name: 'HOUENOU Bénédicte',
      role: 'Directrice Pédagogique',
      description: 'Responsable de l\'innovation pédagogique et de la qualité des formations. Elle supervise l\'élaboration des programmes et l\'évaluation des compétences.',
      experience: '15+ ans d\'expérience',
      speciality: 'Pédagogie & Innovation'
    },
    {
      name: 'AZAH Daniel Victor',
      role: 'Directeur Technique',
      description: 'Expert en équipements techniques et modernisation des plateaux de formation. Il assure la maintenance et l\'évolution de nos infrastructures.',
      experience: '5+ ans d\'expérience',
      speciality: 'Ingénierie & Équipements'
    }
  ];

  const certifications = [
    {
      title: 'Agrément Ministériel',
      authority: 'Ministère de l\'Enseignement Technique et de la Formation Professionnelle',
      year: '2012',
      status: 'Actif'
    },
    {
      title: 'Certification Qualité',
      authority: 'Direction Générale de l\'Enseignement Technique',
      year: '2020',
      status: 'Renouvelé'
    },
    {
      title: 'Partenariat International',
      authority: 'Union Européenne - Programme de Coopération',
      year: '2018',
      status: 'Actif'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00499D] via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              À <span className="text-[#FAA800]">Propos</span> d'ALCILE SERVICE
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Centre de formation professionnelle d'excellence, pionnier dans la formation aux métiers du BTP et de l'informatique au Bénin
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Trophy className="w-5 h-5" />
                <span>Centre Agréé</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Star className="w-5 h-5" />
                <span>Excellence Reconnue</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Globe className="w-5 h-5" />
                <span>Partenariats Internationaux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:bg-[#FAA800] transition-colors duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color} group-hover:text-white transition-colors duration-300`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#00499D] mb-2">
                  {stat.label === 'Années d\'Expérience' ? '5+' : stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-[#00499D] mb-6">Notre Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Former des professionnels qualifiés et compétents dans les métiers du BTP et de l'informatique, 
                  en privilégiant une approche pédagogique innovante et pratique qui garantit l'employabilité 
                  de nos apprenants.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nous contribuons activement au développement économique du Bénin en formant une main-d'œuvre 
                  qualifiée, adaptée aux besoins du marché et capable de créer de la valeur ajoutée.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#00499D] mb-4">Notre Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Devenir le centre de référence en Afrique de l'Ouest pour la formation professionnelle 
                  dans les métiers techniques, reconnu pour l'excellence de ses programmes et l'insertion 
                  réussie de ses diplômés.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-[#00499D]" />
                  <span className="font-semibold text-[#00499D]">Formation d'Excellence</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                  <Handshake className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-600">Insertion Garantie</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co/XZQdJdPL/9499727e-e2ec-45cd-8d24-eda3d6122782.jpg"
                  alt="ALCILE SERVICES - Formation professionnelle"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00499D]/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Excellence & Innovation</h4>
                  <p className="text-blue-100">Formation pratique sur équipements modernes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00499D] mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 30 entreprises et associations partenaires pour vos stages et votre insertion professionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${value.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#00499D] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00499D] mb-4">Équipe de Supervision</h2>
            <p className="text-xl text-gray-600">Une supervision expérimentée et engagée pour votre réussite</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AZA Alfred Gontrand */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#00499D] to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">AG</span>
                </div>
                <h3 className="text-xl font-bold text-[#00499D] mb-1">AZA Alfred Gontrand</h3>
                <div className="text-[#FAA800] font-semibold mb-2">Directeur Fondateur & Président</div>
                <div className="text-sm text-gray-500 mb-4">25+ ans d'expérience</div>
              </div>
              
              <p className="text-gray-600 text-center mb-4 leading-relaxed">
                Visionnaire et entrepreneur passionné, il a créé ALCILE SERVICES avec pour mission de former des professionnels qualifiés et de contribuer au développement économique du Bénin.
              </p>
              
              <div className="text-center">
                <span className="inline-block bg-blue-100 text-[#00499D] px-3 py-1 rounded-full text-sm font-medium">
                  Leadership & Vision Stratégique
                </span>
              </div>
            </div>

            {/* VIEYRA Mathilde */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#00499D] to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">VM</span>
                </div>
                <h3 className="text-xl font-bold text-[#00499D] mb-1">VIEYRA Mathilde</h3>
                <div className="text-[#FAA800] font-semibold mb-2">Marraine du Centre</div>
                <div className="text-sm text-gray-500 mb-4">Plus de 40 ans d'expérience</div>
              </div>
              
              <p className="text-gray-600 text-center mb-4 leading-relaxed">
                Figure emblématique et conseillère stratégique, elle apporte son expertise et sa sagesse pour guider le développement du centre. Son soutien indéfectible inspire toute l'équipe dans la poursuite de l'excellence.
              </p>
              
              <div className="text-center">
                <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                  Conseil & Mentorat
                </span>
              </div>
            </div>

            {/* AZAH Alcile Lauréat */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#00499D] to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">AL</span>
                </div>
                <h3 className="text-xl font-bold text-[#00499D] mb-1">AZAH Alcile Lauréat</h3>
                <div className="text-[#FAA800] font-semibold mb-2">Président du Conseil d'Administration (PCA)</div>
                <div className="text-sm text-gray-500 mb-4">8 ans d'expérience</div>
              </div>
              
              <p className="text-gray-600 text-center mb-4 leading-relaxed">
                Leader du conseil d'administration, il supervise la gouvernance et les orientations stratégiques du centre. Son expertise en gestion et sa vision moderne contribuent au rayonnement d'ALCILE SERVICES.
              </p>
              
              <div className="text-center">
                <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  Gouvernance & Stratégie
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administrative Staff */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00499D] mb-4">Équipe Administrative</h2>
            <p className="text-xl text-gray-600">Une équipe administrative dédiée à votre accompagnement</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-[#00499D] mb-2">HOUENOU Bénédicte</h4>
              <p className="text-blue-600 font-medium mb-2">Directrice Pédagogique</p>
              <p className="text-gray-600 text-sm">Supervision pédagogique et qualité</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <h4 className="font-bold text-[#00499D] mb-2">BESSANH S. Annette</h4>
              <p className="text-green-600 font-medium mb-2">Secrétaire Administrative</p>
              <p className="text-gray-600 text-sm">Administration générale</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-[#00499D] mb-2">AMOUSSOU C. Donatien</h4>
              <p className="text-purple-600 font-medium mb-2">Surveillant général</p>
              <p className="text-gray-600 text-sm">Coordination des formations</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
              <h4 className="font-bold text-[#00499D] mb-2">BELLO Mamoudou</h4>
              <p className="text-red-600 font-medium mb-2">Comptable</p>
              <p className="text-gray-600 text-sm">Gestion financière et comptabilité</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-[#00499D] mb-2">HOUNKPONOU M. Béranger</h4>
              <p className="text-indigo-600 font-medium mb-2">Assistant Comptable</p>
              <p className="text-gray-600 text-sm">Support comptable et financier</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-cyan-500">
              <h4 className="font-bold text-[#00499D] mb-2">AZAH Daniel Victor</h4>
              <p className="text-cyan-600 font-medium mb-2">Directeur Technique</p>
              <p className="text-gray-600 text-sm">Équipements et infrastructures</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-[#00499D] mb-2">AZAH Daniel Hector</h4>
              <p className="text-orange-600 font-medium mb-2">Conducteur des Travaux</p>
              <p className="text-gray-600 text-sm">Supervision des chantiers école</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-gray-500">
              <h4 className="font-bold text-[#00499D] mb-2">HAMA Abariki</h4>
              <p className="text-gray-600 font-medium mb-2">Gardien</p>
              <p className="text-gray-600 text-sm">Sécurité et surveillance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00499D] mb-4">Nos Formateurs Experts</h2>
            <p className="text-xl text-gray-600">Des maîtres artisans expérimentés, diplômés de l'Enseignement Technique et de la Formation Professionnelle</p>
          </div>

          <div className="space-y-12">
            {/* Électricité */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#00499D] mb-6 flex items-center">
                <div className="w-12 h-12 bg-[#FAA800] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">⚡</span>
                </div>
                Filière Électricité
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">AZOCLI Didier Isaac</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">CAPET, Professeur certifié</p>
                  <p className="text-gray-600 text-sm">30 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">AZA Alfred G.</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">BEPC, DFFP/AFAP Électrotechnicien</p>
                  <p className="text-gray-600 text-sm">28 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">ADANMITONDE Antoine</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">DFP/AFAP Électrotechnicien</p>
                  <p className="text-gray-600 text-sm">15 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">AZAH Daniel Victor</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">Licence génie électrique et industriel</p>
                  <p className="text-gray-600 text-sm">5 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">ZEVOUNOU Donald</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">Licence génie électrique & énergie renouvelable</p>
                  <p className="text-gray-600 text-sm">8 ans d'expérience</p>
                </div>
              </div>
            </div>

            {/* Plomberie */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#00499D] mb-6 flex items-center">
                <div className="w-12 h-12 bg-[#FAA800] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">🔧</span>
                </div>
                Filière Plomberie
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">ADJOU Rodrigue</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">DFP/AFAP</p>
                  <p className="text-gray-600 text-sm">24 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">EGLOUI Landry</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">Bac technique plomberie sanitaire</p>
                  <p className="text-gray-600 text-sm">5 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">OBA Annick</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">BAC F4 / CAP en plomberie</p>
                  <p className="text-gray-600 text-sm">10 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">AZAH Daniel Hector</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">Bac + CQM + attestation apprentissage</p>
                  <p className="text-gray-600 text-sm">4 ans d'expérience</p>
                </div>
              </div>
            </div>

            {/* Froid & Climatisation */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#00499D] mb-6 flex items-center">
                <div className="w-12 h-12 bg-[#FAA800] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">❄️</span>
                </div>
                Filière Froid & Climatisation
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">DJITRINOU Hermann</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">DTI froid & climatisation</p>
                  <p className="text-gray-600 text-sm">19 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">HOUESSINON Narcisse</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">DTI froid & climatisation</p>
                  <p className="text-gray-600 text-sm">15 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">AMOUZOUN Casimir</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">BEPC / AFAP en froid et climatisation</p>
                  <p className="text-gray-600 text-sm">30 ans d'expérience</p>
                </div>
              </div>
            </div>

            {/* Peinture & Décoration */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#00499D] mb-6 flex items-center">
                <div className="w-12 h-12 bg-[#FAA800] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">🎨</span>
                </div>
                Filière Peinture & Décoration
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">OUENSAVI Ouens Auriak</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">Bac + CQP/CQM/DFFP/AFAP</p>
                  <p className="text-gray-600 text-sm">8 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">AGBEGNON Gérard Djohounko</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">BEPC + CQP/CQM/DFFP/AFAP</p>
                  <p className="text-gray-600 text-sm">17 ans d'expérience</p>
                </div>
              </div>
            </div>

            {/* Informatique */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#00499D] mb-6 flex items-center">
                <div className="w-12 h-12 bg-[#FAA800] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">💻</span>
                </div>
                Filière Informatique
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">GBEDJI Rovassol</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">Bac + DIFP opérateur de saisie PAO</p>
                  <p className="text-gray-600 text-sm">19 ans d'expérience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-[#00499D] mb-2">BESSANH SETTIN Annette</h4>
                  <p className="text-sm text-[#FAA800] font-medium mb-2">Formatrice informatique</p>
                  <p className="text-gray-600 text-sm">Expérience professionnelle</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">Formation Pratique Renforcée</h4>
                <p className="text-yellow-800 text-sm">
                  Nos maîtres artisans partenaires accueillent également nos apprenants directement sur les chantiers et en stage pour une formation pratique optimale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00499D] mb-4">Entreprises Partenaires Principales</h2>
            <p className="text-xl text-gray-600">Nos partenaires stratégiques pour l'équipement et la formation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#FAA800]">
              <h4 className="font-bold text-[#00499D] mb-2">ALCILE SERVICE BTP</h4>
              <p className="text-sm text-[#FAA800] font-medium mb-2">Dirigeant : AZA G. Alfred</p>
              <p className="text-gray-600 text-sm">Entreprise mère du centre de formation</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <h4 className="font-bold text-[#00499D] mb-2">COBEDIMEN Sarl</h4>
              <p className="text-sm text-[#FAA800] font-medium mb-2">DG : AÏKPON Lucien</p>
              <p className="text-gray-600 text-sm">Matériaux électricité & froid</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <h4 className="font-bold text-[#00499D] mb-2">2MHC</h4>
              <p className="text-sm text-[#FAA800] font-medium mb-2">DG : METOGNON VICTORIN</p>
              <p className="text-sm text-[#FAA800] font-medium mb-2">Usine de fabrication</p>
              <p className="text-gray-600 text-sm">Tuyaux et raccords plomberie et électricité</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
              <h4 className="font-bold text-[#00499D] mb-2">La ROCHE Bénin</h4>
              <p className="text-sm text-[#FAA800] font-medium mb-2">Partenaire international</p>
              <p className="text-gray-600 text-sm">Construction et travaux publics</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <h4 className="font-bold text-[#00499D] mb-2">INGCO Bénin</h4>
              <p className="text-sm text-[#FAA800] font-medium mb-2">DG : Hussein W.</p>
              <p className="text-gray-600 text-sm">Matériels et équipements</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-500">
              <h4 className="font-bold text-[#00499D] mb-2">BÂTIMAT Bénin</h4>
              <p className="text-sm text-[#FAA800] font-medium mb-2">DG : Mohamed Chahine</p>
              <p className="text-gray-600 text-sm">Maison du sol au plafond</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
              <h4 className="font-bold text-[#00499D] mb-2">JAFCO Bénin</h4>
              <p className="text-sm text-[#FAA800] font-medium mb-2">DG : JALIS Daniel</p>
              <p className="text-gray-600 text-sm">Finition du bâtiment</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <h4 className="font-bold text-[#00499D] mb-2">ORT BÂTIMENT</h4>
              <p className="text-sm text-[#FAA800] font-medium mb-2">Spécialiste énergie</p>
              <p className="text-gray-600 text-sm">Énergie solaire photovoltaïque</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-cyan-500">
              <h4 className="font-bold text-[#00499D] mb-2">SOLAR SOLUTION</h4>
              <p className="text-sm text-[#FAA800] font-medium mb-2">DG : BOKPE Jordane</p>
              <p className="text-gray-600 text-sm">Énergie renouvelable et formation</p>
            </div>
          </div>

          {/* Associations Professionnelles */}
          <div className="mt-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#00499D] mb-6 flex items-center">
              <Users className="w-8 h-8 mr-3 text-[#FAA800]" />
              Associations Professionnelles Partenaires
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-[#00499D] mb-2">Association des Plombiers Professionnels (APPC-AC)</h4>
                <p className="text-sm text-[#FAA800] font-medium mb-2">Président : AGBESSI Maxime</p>
                <p className="text-gray-600 text-sm">Réseau professionnel plomberie Abomey-Calavi</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-[#00499D] mb-2">Collectif des Électriciens Bâtiment (COLEBAT-BÉNIN)</h4>
                <p className="text-sm text-[#FAA800] font-medium mb-2">Président : ASSA Thimoté Gaudens</p>
                <p className="text-gray-600 text-sm">Spécialistes en électricité bâtiment</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-[#00499D] mb-2">Association des Peintres Bâtiment (APBD-CAC)</h4>
                <p className="text-sm text-[#FAA800] font-medium mb-2">Président : HONVO A. Paulin</p>
                <p className="text-gray-600 text-sm">Professionnels de la peinture et décoration</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-[#00499D] mb-2">Association des Frigoristes Professionnels (AFPAB)</h4>
                <p className="text-sm text-[#FAA800] font-medium mb-2">Président : HOUNKADJI Mathieu</p>
                <p className="text-gray-600 text-sm">Experts en froid et climatisation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00499D] mb-4">Notre Parcours</h2>
            <p className="text-xl text-gray-600">5 années d'excellence au service de la formation professionnelle</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#FAA800] to-[#00499D]"></div>
            
            <div className="space-y-12">
              {[
                { year: '2020', title: 'Création du Centre', description: 'Fondation d\'ALCILE SERVICES avec une vision claire de l\'excellence' },
                { year: '2023', title: 'Agrément Officiel', description: 'Reconnaissance par le Ministère de la Formation Professionnelle' },
                { year: '2023', title: 'Partenariats Internationaux', description: 'Collaboration avec l\'ONG internationale Greening Africa Together' },
                { year: '2023', title: 'Certification Qualité', description: 'Obtention de la certification qualité pour nos formations' },
                { year: '2024', title: 'Développement Partenariats', description: 'Extension du réseau de partenaires entreprises' },
                { year: '2025', title: 'Extension des Filières', description: 'Modernisation et extension de nos programmes de formation' },
                { year: '2025', title: '100 Diplômés CQP/CQM', description: 'Franchissement du cap des 100 diplômés certifiés (2023-2025)' }
              ].map((achievement, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className={`flex items-center space-x-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <Calendar className="w-6 h-6 text-[#FAA800]" />
                        <span className="font-bold text-[#00499D] text-2xl">{achievement.year}</span>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">{achievement.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-[#FAA800] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00499D] mb-4">Agréments & <span className="text-[#FAA800]">Certifications</span></h2>
            <p className="text-xl text-gray-600">Reconnaissances officielles de notre excellence</p>
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm">
                Autorisation N°042/MESTFP/DC/SGM/DIPIQ/DESTFP/DPAF/SGSI/SA/028SGG23
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <CheckCircle className="w-8 h-8 text-[#FAA800] flex-shrink-0" />
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Actif
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#00499D] mb-3">Agrément Ministériel</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Ministère de l'Enseignement Technique et de la Formation Professionnelle</p>
              <div className="text-[#FAA800] font-semibold">Depuis 2023</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <CheckCircle className="w-8 h-8 text-[#FAA800] flex-shrink-0" />
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Actif
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#00499D] mb-3">Certification Qualité</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Direction Générale de l'Enseignement Technique</p>
              <div className="text-[#FAA800] font-semibold">Depuis 2023</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <CheckCircle className="w-8 h-8 text-[#FAA800] flex-shrink-0" />
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Actif
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#00499D] mb-3">Partenariat International</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">ONG internationale Greening Africa Together</p>
              <div className="text-[#FAA800] font-semibold">Depuis 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00499D] mb-4">Notre Localisation</h2>
            <p className="text-xl text-gray-600">Au cœur d'Abomey-Calavi, facilement accessible</p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-start space-x-4 mb-8">
                  <MapPin className="w-8 h-8 text-[#FAA800] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-2xl text-[#00499D] mb-4">Adresse Complète</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Ouêdo Cité Boni YAYI<br />
                      Villa 69 L4<br />
                      Abomey-Calavi<br />
                      République du Bénin
                    </p>
                    <p className="text-gray-500 mb-6">
                      <strong>Coordonnées GPS :</strong> 6°27'31.5"N 2°16'45.0"E
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-[#00499D] mb-3 flex items-center">
                      <Building className="w-5 h-5 mr-2" />
                      Accès
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Eau</li>
                      <li>• Accès moto</li>
                      <li>• Parking gratuit</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-bold text-[#00499D] mb-3 flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Repères
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Ouêdo Cité Boni YAYI</li>
                      <li>• Villa 69 L4</li>
                      <li>• Face Terrain de football</li>
                      <li>• Abomey-Calavi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="h-96 lg:h-auto">
                <iframe
                  src="https://www.google.com/maps?q=6.458759,2.279168&hl=fr&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00499D] mb-6">
            Rejoignez l'Excellence
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Faites partie de la prochaine génération de professionnels formés par ALCILE SERVICES. 
            Votre avenir commence ici.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/formations"
              className="inline-flex items-center px-10 py-4 bg-[#00499D] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              <Award className="mr-3 w-6 h-6" />
              Découvrir nos Formations
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-[#FAA800] text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              <Users className="mr-3 w-6 h-6" />
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;