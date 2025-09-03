import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight, Users, Award, Building, TrendingUp, Play, Star, MessageCircle, Phone, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const stats = [
  { label: 'Étudiants formés', value: '100+', icon: Users },
  { label: 'Formateurs experts', value: '20+', icon: Users },
  { label: 'Années d’expérience', value: '10+', icon: Users },
];

  const carouselImages = [
    'https://i.ibb.co/vxR0L7b7/2a8c0742-6b61-4de3-a322-aa1c10fed30b.jpg',
    'https://i.ibb.co/6RYxQnBm/a3bafccc-c8cc-47b3-9585-811c0586dee3.jpg',
    'https://i.ibb.co/YTcfSRf6/9847a980-8ed7-4555-beeb-09124c961dc8.jpg',
    'https://i.ibb.co/1GvjB9nk/4ad63978-960d-40af-ba1e-54d630a38f92.jpg',
    'https://i.ibb.co/TqMc5gf3/09d3aa19-2887-4adf-b211-1b25c27256fc.jpg',
    'https://i.ibb.co/XZQdJdPL/9499727e-e2ec-45cd-8d24-eda3d6122782.jpg'
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const trainings = [
    {
      title: 'Électricité',
      description: 'Installation et maintenance électrique résidentielle et industrielle',
      image: 'https://i.ibb.co/0jFHrQM6/de126d56-dcec-406e-837e-308c08844ed2.jpg',
      slug: 'electricite'
    },
    {
      title: 'Plomberie',
      description: 'Installation et réparation de systèmes de plomberie',
      image: 'https://i.ibb.co/PZn7ZL7d/556c4870-52e0-4e80-bc41-39f2a76262bf.jpg',
      slug: 'plomberie'
    },
    {
      title: 'Froid & Climatisation',
      description: 'Installation et maintenance de systèmes de climatisation',
      image: 'https://i.ibb.co/YTcfSRf6/9847a980-8ed7-4555-beeb-09124c961dc8.jpg',
      slug: 'froid-climatisation'
    },
    {
      title: 'Menuiserie Bois & Alu',
      description: 'Fabrication et pose de menuiseries intérieures et extérieures',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'menuiserie'
    },
    {
      title: 'Peinture & Décoration',
      description: 'Techniques de peinture et décoration intérieure/extérieure',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'peinture'
    },
    {
      title: 'Informatique',
      description: 'Bureautique, maintenance informatique et développement web',
      image: 'https://i.ibb.co/5gHwRcv1/35416d4d-ee3f-4205-b407-36de000656c9.jpg',
      slug: 'informatique'
    },
  ];

  const testimonials = [
    {
      name: 'HOUNYEMIN EXPÉDIT',
      role: 'Électricité',
      content: 'Grâce à ALCILE SERVICES, j\'ai acquis des compétences solides qui m\'ont permis de créer ma propre entreprise d\'électricité.',
      rating: 5
    },
    {
      name: 'CHOADATON FÉLICITÉ',
      role: 'Plombérie',
      content: 'La formation pratique sur chantiers réels m\'a donné une expérience précieuse pour mon insertion professionnelle.',
      rating: 5
    },
    {
      name: 'AHLONSOU JEAN LUC',
      role: 'Froid et climatisation',
      content: 'La formation m\'a permis de maîtriser parfaitement les techniques de climatisation et de trouver rapidement un emploi.',
      rating: 5
    },
    {
      name: 'AKPOLI ANNE MARIE',
      role: 'Informatique',
      content: 'Excellente formation en bureautique et graphisme. J\'ai pu développer mes compétences et décrocher un poste dans une entreprise.',
      rating: 5
    },
    {
    name: 'LODJO Christian',
    role: 'DG Agence Nationale de Protection Sociale au Bénin',
    content:
      'Initiative noble et louable que l\'agence nationale de protection sociale (ANPS) encourage vivement. La formation des jeunes aux métiers de l\'artisanat fait partie des objectifs de l\'ARCH. Et nous sommes heureux de vous accompagner. Beaucoup de courage pour la suite.',
    rating: 5,
    isOfficial: true,
  },
  {
    name: 'Vincent FIEURY',
    role: 'Société La ROCHE Bénin',
    content:
      'Merci beaucoup pour votre initiative et votre accueil. Nous sommes impressionnés par l’énergie et le plateau technique déployés pour la formation de ces jeunes. Tous nos vœux de succès pour la suite. Le partenariat avec la Roche ne fait que commencer.',
    rating: 5,
    isOfficial: true,
  },
    {
    name: 'Alain DOSSA',
    role: 'C/SOSPAIP de la DESTFP',
    content:
      'Travaillons vite et bien pour que le Centre ALCILE SERVICE FORMATION se mette à la disposition des jeunes et de l’État Béninois. L’ambition est bonne, les perspectives sont heureuses. Si vous êtes prêts, nous embarquons avec vous. Beaucoup de courage à vous.',
    rating: 5,
    isOfficial: true,
    date: '07 Novembre 2022',
  },
  {
    name: 'Joël Bouillaud',
    role: 'Directeur ARCH Formation',
    content:
      'Initiative très intéressante qui mérite d’être encouragée et accompagnée. Former des jeunes de bon niveau à un vrai métier est une vraie contribution au développement du pays. Je souhaite bon vent au Centre ALCILE SERVICE FORMATION et qu’il s’inscrive dans le paysage de la formation professionnelle au Bénin.',
    rating: 5,
    isOfficial: true,
    date: '10 Novembre 2022',
  },
  ];

  return (
    <div className="pt-32">
      {/* Flash Info */}
      <div className="bg-gradient-to-r from-[#FAA800] to-orange-500 text-white py-3 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Texte défilant */}
            <div className="flex-1 overflow-hidden w-full sm:w-auto">
              <div className="animate-marquee whitespace-nowrap">
                <span className="text-xs sm:text-sm md:text-base font-semibold text-white drop-shadow-sm">
                  🎓 Nouvelle rentrée scolaire : Lundi 15 Septembre 2025. Les inscriptions sont ouvertes et se poursuivent.
                </span>
              </div>
            </div>
            
            {/* Boutons */}
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-white text-[#FAA800] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-xs sm:text-sm whitespace-nowrap"
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Conditions d'admission
              </Link>
              <a
                href="https://wa.me/22997462905?text=Bonjour%2C%20je%20souhaite%20m%27inscrire%20%C3%A0%20la%20nouvelle%20rentr%C3%A9e%20scolaire à Alcile."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-xs sm:text-sm whitespace-nowrap shadow-md"
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-12 sm:py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Formez-vous aux <span className="text-[#FAA800]">métiers d'avenir</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100">
                Centre de formation professionnelle agréé - 70% pratique, 30% théorie
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/formations"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-sm sm:text-base"
                >
                  Découvrir nos formations
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#00499D] transition-colors text-sm sm:text-base"
                >
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Nous contacter
                </Link>
              </div>
            </div>
            
            {/* Carrousel d'images */}
            <div className="relative">
              <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={carouselImages[currentImageIndex]}
                  alt={`Formation ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex 
                          ? 'bg-[#FAA800]' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Image counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {carouselImages.length}
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="hidden sm:grid grid-cols-6 gap-1 sm:gap-2 mt-3 sm:mt-4">
                {carouselImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg aspect-square ${
                      index === currentImageIndex 
                        ? 'ring-2 ring-[#FAA800]' 
                        : 'opacity-70 hover:opacity-100'
                    } transition-all duration-300`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#FAA800] text-white rounded-full mb-2 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#00499D] mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00499D] mb-3 sm:mb-4">
              Nos Filières de Formation
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choisissez parmi nos 6 filières de formation, toutes orientées vers l'emploi et l'entrepreneuriat
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {trainings.map((training, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <img
                    src={training.image}
                    alt={training.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#00499D] mb-2 sm:mb-3">{training.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{training.description}</p>
                  <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    Durée : {training.title === 'Informatique' ? '1 an' : '2 ans'}
                  </div>
                  <Link
                    to={`/formations/${training.slug}`}
                    className="inline-flex items-center text-sm sm:text-base text-[#FAA800] hover:text-orange-600 font-medium transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              to="/formations"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#00499D] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Voir toutes les formations
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00499D] mb-4 sm:mb-6">
                Nos Atouts
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FAA800] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">Plateaux techniques modernes</h3>
                    <p className="text-sm sm:text-base text-gray-600">Équipements professionnels et ateliers spécialisés pour chaque filière</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FAA800] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Formation sur chantiers réels</h3>
                    <p className="text-gray-600">Application pratique des compétences sur des projets concrets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FAA800] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Partenariats solides</h3>
                    <p className="text-gray-600">Réseau d'entreprises partenaires pour stages et recrutements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://i.ibb.co/TqMc5gf3/09d3aa19-2887-4adf-b211-1b25c27256fc.jpg"
                alt="Formation pratique"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-[#00499D]/20 rounded-xl flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                  <Play className="w-6 h-6 text-[#00499D] ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Témoignages
            </h2>
            <p className="text-xl text-gray-600">
              Ce que disent nos apprenants et partenaires
            </p>
          </div>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                  {testimonial.isOfficial && (
                    <div className="mb-4">
                      <span className="bg-[#00499D] text-white px-3 py-1 rounded-full text-xs font-medium">
                        Témoignage Officiel
                      </span>
                      {testimonial.date && (
                        <span className="ml-2 text-xs text-gray-500">
                          {testimonial.date}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FAA800] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-[#00499D]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-16 bg-[#00499D] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à commencer votre formation ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Rejoignez notre communauté d'apprenants et donnez un nouvel élan à votre carrière
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="inline-flex items-center px-8 py-4 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              S'inscrire maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#00499D] transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Poser une question
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D]">
              Dernières Actualités
            </h2>
            <Link
              to="/actualites"
              className="text-[#FAA800] hover:text-orange-600 font-medium"
            >
              Voir tout
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://i.ibb.co/N6rJSMzB/26bc1970-d4e2-4fc8-b8ab-3faf4d067f87.jpg"
                alt="Actualité"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-[#FAA800] font-medium mb-2">15 Nov 2024</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Nouvelle promotion d'électriciens, de plombier, de frigoristes et d'informaticiens diplômés
                </h3>
                <p className="text-gray-600 text-sm">
                  25 nouveaux électriciens viennent de terminer leur formation avec succès...
                </p>
              </div>
            </article>

            <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://i.ibb.co/W4w6qmss/la-roche-b-nin-2.jpg"
                alt="Actualité"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-[#FAA800] font-medium mb-2">10 Nov 2024</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Partenariat avec de nouvelles entreprises
                </h3>
                <p className="text-gray-600 text-sm">
                  Signature de conventions avec 5 nouvelles entreprises du BTP...
                </p>
              </div>
            </article>

            <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://i.ibb.co/ZRxpV9yc/75eba4f2-f3d7-4842-b9db-8d1b8e13bd0a.jpg"
                alt="Actualité"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-[#FAA800] font-medium mb-2">5 Nov 2024</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Modernisation des équipements informatiques
                </h3>
                <p className="text-gray-600 text-sm">
                  Acquisition de nouveaux ordinateurs pour la salle informatique...
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;