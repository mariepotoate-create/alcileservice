import React from 'react';
import { Award, Users, Target, Heart, CheckCircle, MapPin, Calendar, Trophy, Building, Globe, TrendingUp, Star, Eye, Handshake, AlertCircle } from 'lucide-react';

const AboutPage: React.FC = () => {

  // Données centralisées pour une meilleure gestion
  const data = {
    values: [
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
    ],
    stats: [
      { label: 'Années d\'Expérience', value: '14+', icon: Calendar, color: 'text-blue-600' },
      { label: 'Apprenants Formés', value: '100+', icon: Users, color: 'text-green-600' },
      { label: 'Partenaires Entreprises', value: '50+', icon: Building, color: 'text-purple-600' },
      { label: 'Taux d\'Insertion', value: '85%', icon: TrendingUp, color: 'text-orange-600' }
    ],
    leadership: [
      {
        name: 'AZA Alfred Gontrand',
        role: 'Directeur Fondateur & Président',
        description: 'Visionnaire et entrepreneur passionné, il a créé ALCILE SERVICES avec pour mission de former des professionnels qualifiés et de contribuer au développement économique du Bénin.',
        experience: '25+ ans d\'expérience',
        speciality: 'Leadership & Vision Stratégique',
        initials: 'AG',
        color: 'bg-blue-100 text-[#00499D]'
      },
      {
        name: 'VIEYRA Mathilde',
        role: 'Marraine du Centre',
        description: 'Figure emblématique et conseillère stratégique, elle apporte son expertise et sa sagesse pour guider le développement du centre. Son soutien indéfectible inspire toute l\'équipe dans la poursuite de l\'excellence.',
        experience: 'Plus de 40 ans d\'expérience',
        speciality: 'Conseil & Mentorat',
        initials: 'VM',
        color: 'bg-purple-100 text-purple-600'
      },
      {
        name: 'AZAH Alcile Lauréat',
        role: 'Président du Conseil d\'Administration (PCA)',
        description: 'Leader du conseil d\'administration, il supervise la gouvernance et les orientations stratégiques du centre. Son expertise en gestion et sa vision moderne contribuent au rayonnement d\'ALCILE SERVICES.',
        experience: '8 ans d\'expérience',
        speciality: 'Gouvernance & Stratégie',
        initials: 'AL',
        color: 'bg-green-100 text-green-600'
      }
    ],
    administrativeStaff: [
      { name: 'HOUENOU Bénédicte', role: 'Directrice Pédagogique', description: 'Supervision pédagogique et qualité', borderColor: 'border-blue-500' },
      { name: 'BESSANH S. Annette', role: 'Secrétaire Administrative', description: 'Administration générale', borderColor: 'border-green-500' },
      { name: 'AMOUSSOU C. Donatien', role: 'Surveillant général', description: 'Coordination des formations', borderColor: 'border-purple-500' },
      { name: 'BELLO Mamoudou', role: 'Comptable', description: 'Gestion financière et comptabilité', borderColor: 'border-red-500' },
      { name: 'HOUNKPONOU M. Béranger', role: 'Assistant Comptable', description: 'Support comptable et financier', borderColor: 'border-indigo-500' },
      { name: 'AZAH Daniel Victor', role: 'Directeur Technique', description: 'Équipements et infrastructures', borderColor: 'border-cyan-500' },
      { name: 'AZAH Daniel Hector', role: 'Conducteur des Travaux', description: 'Supervision des chantiers école', borderColor: 'border-orange-500' },
      { name: 'HAMA Abariki', role: 'Gardien', description: 'Sécurité et surveillance', borderColor: 'border-gray-500' }
    ],
    teachingStaff: [
      {
        title: 'Électricité', icon: '⚡', color: 'bg-blue-50 to-blue-100',
        members: [
          { name: 'AZOCLI Didier Isaac', specialty: 'CAPET, Professeur certifié', experience: '30 ans d\'expérience' },
          { name: 'AZA Alfred G.', specialty: 'BEPC, DFFP/AFAP Électrotechnicien', experience: '28 ans d\'expérience' },
          { name: 'ADANMITONDE Antoine', specialty: 'DFP/AFAP Électrotechnicien', experience: '15 ans d\'expérience' },
          { name: 'AZAH Daniel Victor', specialty: 'Licence génie électrique et industriel', experience: '5 ans d\'expérience' },
          { name: 'ZEVOUNOU Donald', specialty: 'Licence génie électrique & énergie renouvelable', experience: '8 ans d\'expérience' }
        ]
      },
      {
        title: 'Plomberie', icon: '🔧', color: 'bg-green-50 to-green-100',
        members: [
          { name: 'ADJOU Rodrigue', specialty: 'DFP/AFAP', experience: '24 ans d\'expérience' },
          { name: 'EGLOUI Landry', specialty: 'Bac technique plomberie sanitaire', experience: '5 ans d\'expérience' },
          { name: 'OBA Annick', specialty: 'BAC F4 / CAP en plomberie', experience: '10 ans d\'expérience' },
          { name: 'AZAH Daniel Hector', specialty: 'Bac + CQM + attestation apprentissage', experience: '4 ans d\'expérience' }
        ]
      },
      {
        title: 'Froid & Climatisation', icon: '❄️', color: 'bg-cyan-50 to-cyan-100',
        members: [
          { name: 'DJITRINOU Hermann', specialty: 'DTI froid & climatisation', experience: '19 ans d\'expérience' },
          { name: 'HOUESSINON Narcisse', specialty: 'DTI froid & climatisation', experience: '15 ans d\'expérience' },
          { name: 'AMOUZOUN Casimir', specialty: 'BEPC / AFAP en froid et climatisation', experience: '30 ans d\'expérience' }
        ]
      },
      {
        title: 'Peinture & Décoration', icon: '🎨', color: 'bg-purple-50 to-purple-100',
        members: [
          { name: 'OUENSAVI Ouens Auriak', specialty: 'Bac + CQP/CQM/DFFP/AFAP', experience: '8 ans d\'expérience' },
          { name: 'AGBEGNON Gérard Djohounko', specialty: 'BEPC + CQP/CQM/DFFP/AFAP', experience: '17 ans d\'expérience' }
        ]
      },
      {
        title: 'Informatique', icon: '💻', color: 'bg-indigo-50 to-indigo-100',
        members: [
          { name: 'GBEDJI Rovassol', specialty: 'Bac + DIFP opérateur de saisie PAO', experience: '19 ans d\'expérience' },
          { name: 'BESSANH SETTIN Annette', specialty: 'Formatrice informatique', experience: 'Expérience professionnelle' }
        ]
      }
    ],
    partners: [
      { name: 'ALCILE SERVICE BTP', director: 'AZA G. Alfred', description: 'Entreprise mère du centre de formation', borderColor: 'border-[#FAA800]' },
      { name: 'COBEDIMEN Sarl', director: 'AÏKPON Lucien', description: 'Matériaux électricité & froid', borderColor: 'border-blue-500' },
      { name: '2MHC', director: 'METOGNON VICTORIN', description: 'Tuyaux et raccords plomberie et électricité', borderColor: 'border-green-500' },
      { name: 'La ROCHE Bénin', director: 'Partenaire international', description: 'Construction et travaux publics', borderColor: 'border-red-500' },
      { name: 'INGCO Bénin', director: 'Hussein W.', description: 'Matériels et équipements', borderColor: 'border-purple-500' },
      { name: 'BÂTIMAT Bénin', director: 'Mohamed Chahine', description: 'Maison du sol au plafond', borderColor: 'border-yellow-500' },
      { name: 'JAFCO Bénin', director: 'JALIS Daniel', description: 'Finition du bâtiment', borderColor: 'border-indigo-500' },
      { name: 'ORT BÂTIMENT', director: 'Spécialiste énergie', description: 'Énergie solaire photovoltaïque', borderColor: 'border-orange-500' },
      { name: 'SOLAR SOLUTION', director: 'BOKPE Jordane', description: 'Énergie renouvelable et formation', borderColor: 'border-cyan-500' }
    ],
    associations: [
      { name: 'Association des Plombiers Professionnels (APPC-AC)', president: 'AGBESSI Maxime', description: 'Réseau professionnel plomberie Abomey-Calavi' },
      { name: 'Collectif des Électriciens Bâtiment (COLEBAT-BÉNIN)', president: 'ASSA Thimoté Gaudens', description: 'Spécialistes en électricité bâtiment' },
      { name: 'Association des Peintres Bâtiment (APBD-CAC)', president: 'HONVO A. Paulin', description: 'Professionnels de la peinture et décoration' },
      { name: 'Association des Frigoristes Professionnels (AFPAB)', president: 'HOUNKADJI Mathieu', description: 'Experts en froid et climatisation' }
    ],
    timeline: [
      { year: '2020', title: 'Création du Centre', description: 'Fondation d\'ALCILE SERVICES avec une vision claire de l\'excellence' },
      { year: '2023', title: 'Agrément Officiel', description: 'Reconnaissance par le Ministère de la Formation Professionnelle' },
      { year: '2023', title: 'Partenariats Internationaux', description: 'Collaboration avec l\'ONG internationale Greening Africa Together' },
      { year: '2023', title: 'Certification Qualité', description: 'Obtention de la certification qualité pour nos formations' },
      { year: '2024', title: 'Développement Partenariats', description: 'Extension du réseau de partenaires entreprises' },
      { year: '2025', title: 'Extension des Filières', description: 'Modernisation et extension de nos programmes de formation' },
      { year: '2025', title: '100 Diplômés CQP/CQM', description: 'Franchissement du cap des 100 diplômés certifiés (2023-2025)' }
    ],
    certifications: [
      { title: 'Agrément Ministériel', authority: 'Ministère de l\'Enseignement Technique et de la Formation Professionnelle', year: '2023', status: 'Actif', icon: CheckCircle },
      { title: 'Certification Qualité', authority: 'Direction Générale de l\'Enseignement Technique', year: '2023', status: 'Actif', icon: CheckCircle },
      { title: 'Partenariat International', authority: 'ONG internationale Greening Africa Together', year: '2024', status: 'Actif', icon: CheckCircle }
    ]
  };

  const AboutSection = ({ title, subtitle, children }) => (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );

  const ValueCard = ({ value }) => (
    <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className={`inline-flex items-center justify-center w-16 h-16 ${value.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <value.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-[#00499D] mb-3">{value.title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
    </div>
  );

  const StatCard = ({ stat }) => (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded-full mb-3 md:mb-4 group-hover:bg-[#FAA800] transition-colors duration-300">
        <stat.icon className={`w-7 h-7 md:w-8 md:h-8 ${stat.color} group-hover:text-white transition-colors duration-300`} />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-[#00499D] mb-1">{stat.value}</div>
      <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
    </div>
  );

  const MemberCard = ({ member, initialColor }) => (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-4 md:mb-6">
        <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#00499D] to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3`}>
          <span className="text-white font-bold text-xl md:text-2xl">{member.initials}</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-[#00499D] mb-1">{member.name}</h3>
        <div className="text-[#FAA800] font-semibold text-sm md:text-base mb-1">{member.role}</div>
        <div className="text-xs text-gray-500 mb-4">{member.experience}</div>
      </div>
      <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">{member.description}</p>
      <div className="text-center">
        <span className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium ${initialColor}`}>{member.speciality}</span>
      </div>
    </div>
  );

  const StaffCard = ({ person }) => (
    <div className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${person.borderColor}`}>
      <h4 className="font-bold text-[#00499D] mb-2">{person.name}</h4>
      <p className={`text-blue-600 font-medium mb-2 text-sm`}>{person.role}</p>
      <p className="text-gray-600 text-xs md:text-sm">{person.description}</p>
    </div>
  );

  const TeamCard = ({ title, icon, color, members }) => (
    <div className={`bg-gradient-to-br ${color} rounded-2xl p-6 md:p-8`}>
      <h3 className="text-xl md:text-2xl font-bold text-[#00499D] mb-6 flex items-center">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FAA800] rounded-full flex items-center justify-center mr-3 md:mr-4">
          <span className="text-white font-bold text-2xl">{icon}</span>
        </div>
        Filière {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-bold text-[#00499D] mb-2 text-base md:text-lg">{member.name}</h4>
            <p className="text-sm text-[#FAA800] font-medium mb-2">{member.specialty}</p>
            <p className="text-gray-600 text-xs md:text-sm">{member.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const PartnerCard = ({ partner }) => (
    <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 ${partner.borderColor}`}>
      <h4 className="font-bold text-[#00499D] mb-2">{partner.name}</h4>
      <p className="text-sm text-[#FAA800] font-medium mb-2">{partner.director.includes('Partenaire') ? partner.director : `Dirigeant : ${partner.director}`}</p>
      <p className="text-gray-600 text-sm">{partner.description}</p>
    </div>
  );

  const TimelineItem = ({ achievement, index }) => (
    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}>
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-12 text-right' : 'pl-8 md:pl-12'}`}>
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className={`flex items-center space-x-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
            <Calendar className="w-6 h-6 text-[#FAA800]" />
            <span className="font-bold text-[#00499D] text-xl md:text-2xl">{achievement.year}</span>
          </div>
          <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">{achievement.title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{achievement.description}</p>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="w-8 h-8 bg-[#FAA800] rounded-full border-4 border-white shadow-lg"></div>
      </div>
      <div className="w-full md:w-1/2"></div>
    </div>
  );

  const CertificationCard = ({ cert }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <cert.icon className="w-8 h-8 text-[#FAA800] flex-shrink-0" />
        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {cert.status}
        </span>
      </div>
      <h3 className="text-xl font-bold text-[#00499D] mb-3">{cert.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed text-sm">{cert.authority}</p>
      <div className="text-[#FAA800] font-semibold">Depuis {cert.year}</div>
    </div>
  );

  return (
    <div className="pt-24 sm:pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00499D] via-blue-700 to-blue-900 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              À <span className="text-[#FAA800]">Propos</span> d'ALCILE SERVICE
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
              Centre de formation professionnelle d'excellence, pionnier dans la formation aux métiers du BTP et de l'informatique au Bénin
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 md:px-4 md:py-2 rounded-full">
                <Trophy className="w-4 h-4 md:w-5 md:h-5" />
                <span>Centre Agréé</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 md:px-4 md:py-2 rounded-full">
                <Star className="w-4 h-4 md:w-5 md:h-5" />
                <span>Excellence Reconnue</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 md:px-4 md:py-2 rounded-full">
                <Globe className="w-4 h-4 md:w-5 md:h-5" />
                <span>Partenariats Internationaux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <AboutSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {data.stats.map((stat, index) => <StatCard key={index} stat={stat} />)}
        </div>
      </AboutSection>
      <hr className="my-0 border-gray-200" />

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4 md:mb-6">Notre Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                  Former des professionnels qualifiés et compétents dans les métiers du BTP et de l'informatique, en privilégiant une approche pédagogique innovante et pratique qui garantit l'employabilité de nos apprenants.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nous contribuons activement au développement économique du Bénin en formant une main-d'œuvre qualifiée, adaptée aux besoins du marché et capable de créer de la valeur ajoutée.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#00499D] mb-4">Notre Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Devenir le centre de référence en Afrique de l'Ouest pour la formation professionnelle dans les métiers techniques, reconnu pour l'excellence de ses programmes et l'insertion réussie de ses diplômés.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-[#00499D]" />
                  <span className="font-semibold text-[#00499D] text-sm md:text-base">Formation d'Excellence</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                  <Handshake className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-600 text-sm md:text-base">Insertion Garantie</span>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co/XZQdJdPL/9499727e-e2ec-45cd-8d24-eda3d6122782.jpg"
                  alt="ALCILE SERVICES - Formation professionnelle"
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00499D]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Excellence & Innovation</h4>
                  <p className="text-blue-100 text-sm">Formation pratique sur équipements modernes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-0 border-gray-200" />

      {/* Values */}
      <AboutSection title="Nos Valeurs Fondamentales" subtitle="Plus de 30 entreprises et associations partenaires pour vos stages et votre insertion professionnelle">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data.values.map((value, index) => <ValueCard key={index} value={value} />)}
        </div>
      </AboutSection>
      <hr className="my-0 border-gray-200" />

      {/* Leadership Team */}
      <AboutSection title="Équipe de Supervision" subtitle="Une supervision expérimentée et engagée pour votre réussite">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.leadership.map((member, index) => (
            <MemberCard key={index} member={member} initialColor={member.color} />
          ))}
        </div>
      </AboutSection>
      <hr className="my-0 border-gray-200" />

      {/* Administrative Staff */}
      <AboutSection title="Équipe Administrative" subtitle="Une équipe administrative dédiée à votre accompagnement">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.administrativeStaff.map((person, index) => <StaffCard key={index} person={person} />)}
        </div>
      </AboutSection>
      <hr className="my-0 border-gray-200" />

      {/* Teaching Staff */}
      <AboutSection title="Nos Formateurs Experts" subtitle="Des maîtres artisans expérimentés, diplômés de l'Enseignement Technique et de la Formation Professionnelle">
        <div className="space-y-8 md:space-y-12">
          {data.teachingStaff.map((team, index) => <TeamCard key={index} {...team} />)}
        </div>
        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
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
      </AboutSection>
      <hr className="my-0 border-gray-200" />

      {/* Partners */}
      <AboutSection title="Entreprises Partenaires Principales" subtitle="Nos partenaires stratégiques pour l'équipement et la formation">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.partners.map((partner, index) => <PartnerCard key={index} partner={partner} />)}
        </div>
        <div className="mt-12 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#00499D] mb-6 flex items-center">
            <Users className="w-6 h-6 md:w-8 md:h-8 mr-3 text-[#FAA800]" />
            Associations Professionnelles Partenaires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.associations.map((assoc, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-[#00499D] mb-2 text-base md:text-lg">{assoc.name}</h4>
                <p className="text-sm text-[#FAA800] font-medium mb-2">Président : {assoc.president}</p>
                <p className="text-gray-600 text-sm">{assoc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AboutSection>
      <hr className="my-0 border-gray-200" />

      {/* Timeline */}
      <AboutSection title="Notre Parcours" subtitle="5 années d'excellence au service de la formation professionnelle">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#FAA800] to-[#00499D] hidden md:block"></div>
          <div className="space-y-12">
            {data.timeline.map((achievement, index) => (
              <TimelineItem key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </AboutSection>
      <hr className="my-0 border-gray-200" />

      {/* Certifications */}
      <AboutSection title={<>Agréments & <span className="text-[#FAA800]">Certifications</span></>} subtitle={<>Reconnaissances officielles de notre excellence<br /><span className="text-gray-500 text-xs md:text-sm mt-2 block">Autorisation N°042/MESTFP/DC/SGM/DIPIQ/DESTFP/DPAF/SGSI/SA/028SGG23</span></>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.certifications.map((cert, index) => <CertificationCard key={index} cert={cert} />)}
        </div>
      </AboutSection>
      <hr className="my-0 border-gray-200" />

      {/* Location */}
      <AboutSection title="Notre Localisation" subtitle="Au cœur d'Abomey-Calavi, facilement accessible">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 md:p-8 lg:p-12">
              <div className="flex items-start space-x-4 mb-6 md:mb-8">
                <MapPin className="w-8 h-8 text-[#FAA800] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-[#00499D] mb-2 md:mb-4">Adresse Complète</h3>
                  <p className="text-lg text-gray-700 mb-2 md:mb-4">
                    Ouêdo Cité Boni YAYI<br />
                    Villa 69 L4<br />
                    Abomey-Calavi<br />
                    République du Bénin
                  </p>
                  <p className="text-gray-500 text-sm md:text-base mb-4 md:mb-6">
                    <strong>Coordonnées GPS :</strong> 6°27'31.5"N 2°16'45.0"E
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            <div className="h-64 sm:h-96 lg:h-auto">
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
      </AboutSection>
      <hr className="my-0 border-gray-200" />

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#00499D] mb-4 md:mb-6">
            Rejoignez l'Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            Faites partie de la prochaine génération de professionnels formés par ALCILE SERVICES. Votre avenir commence ici.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a
              href="/formations"
              className="inline-flex items-center px-6 md:px-10 py-3 md:py-4 bg-[#00499D] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-base md:text-lg shadow-lg hover:shadow-xl"
            >
              <Award className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6" />
              Découvrir nos Formations
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 md:px-10 py-3 md:py-4 bg-[#FAA800] text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-base md:text-lg shadow-lg hover:shadow-xl"
            >
              <Users className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6" />
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;