import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Tag, ArrowRight, Filter } from 'lucide-react';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les événements' },
    { id: 'portes-ouvertes', name: 'Portes ouvertes' },
    { id: 'ceremonies', name: 'Cérémonies' },
    { id: 'formations', name: 'Formations spéciales' },
    { id: 'partenariats', name: 'Partenariats' },
    { id: 'international', name: 'International' }
  ];

  const months = [
    { id: 'all', name: 'Tous les mois' },
    { id: '2024-12', name: 'Décembre 2024' },
    { id: '2025-01', name: 'Janvier 2025' },
    { id: '2025-02', name: 'Février 2025' },
    { id: '2025-03', name: 'Mars 2025' }
  ];

  const events = [
    {
      id: 1,
      title: 'Journée Portes Ouvertes 2025',
      description: 'Découvrez nos formations, visitez nos plateaux techniques et rencontrez nos formateurs lors de notre grande journée portes ouvertes.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-01-18',
      time: '08:00 - 16:00',
      location: 'Campus ALCILE SERVICES, Abomey-Calavi',
      category: 'portes-ouvertes',
      capacity: '500 visiteurs',
      price: 'Gratuit',
      status: 'upcoming',
      featured: true
    },
    {
      id: 2,
      title: 'Cérémonie de Remise des Diplômes',
      description: 'Célébration officielle pour nos nouveaux diplômés de la session 2024-2025.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-02-15',
      time: '10:00 - 12:00',
      location: 'Salle des Fêtes, Abomey-Calavi',
      category: 'ceremonies',
      capacity: '300 personnes',
      price: 'Sur invitation',
      status: 'upcoming',
      featured: true
    },
    {
      id: 3,
      title: 'Mission Internationale - Chantiers Solidaires France',
      description: 'Programme d\'échange avec des centres de formation français pour travaux sociaux de vacances.',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-03-10',
      time: 'Programme de 2 semaines',
      location: 'Lyon, France',
      category: 'international',
      capacity: '15 apprenants sélectionnés',
      price: 'Prise en charge totale',
      status: 'upcoming',
      featured: true
    },
    {
      id: 4,
      title: 'Formation Spéciale : Énergies Renouvelables',
      description: 'Formation courte sur l\'installation de panneaux solaires et l\'éolien domestique.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-01-25',
      time: '3 jours - 08:00 - 17:00',
      location: 'Atelier Électricité, ALCILE SERVICES',
      category: 'formations',
      capacity: '20 participants',
      price: '50 000 FCFA',
      status: 'upcoming',
      featured: false
    },
    {
      id: 5,
      title: 'Signature Partenariat avec SOBEBAT',
      description: 'Cérémonie de signature d\'une convention de partenariat pour l\'insertion de nos diplômés.',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-12-20',
      time: '14:00 - 16:00',
      location: 'Siège SOBEBAT, Cotonou',
      category: 'partenariats',
      capacity: '50 invités',
      price: 'Sur invitation',
      status: 'past',
      featured: false
    },
    {
      id: 6,
      title: 'Atelier : Entrepreneuriat dans le BTP',
      description: 'Formation pratique sur la création et la gestion d\'une entreprise du BTP.',
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-02-08',
      time: '1 jour - 08:00 - 17:00',
      location: 'Salle de conférence, ALCILE SERVICES',
      category: 'formations',
      capacity: '30 participants',
      price: '25 000 FCFA',
      status: 'upcoming',
      featured: false
    },
    {
      id: 7,
      title: 'Exposition des Travaux d\'Étudiants',
      description: 'Présentation des meilleurs projets réalisés par nos apprenants durant l\'année.',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-03-20',
      time: '2 jours - 09:00 - 18:00',
      location: 'Campus ALCILE SERVICES',
      category: 'ceremonies',
      capacity: '200 visiteurs',
      price: 'Gratuit',
      status: 'upcoming',
      featured: false
    },
    {
      id: 8,
      title: 'Sortie Pédagogique - Visite d\'Entreprises',
      description: 'Visite guidée d\'entreprises partenaires pour découvrir les métiers en situation réelle.',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-02-20',
      time: '1 jour - 08:00 - 17:00',
      location: 'Entreprises partenaires, Cotonou',
      category: 'formations',
      capacity: '40 apprenants',
      price: 'Inclus dans la formation',
      status: 'upcoming',
      featured: false
    },
    {
      id: 9,
      title: 'Journée Culturelle - Fête des Métiers',
      description: 'Célébration des métiers du BTP et de l\'informatique avec démonstrations, concours et animations.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-03-15',
      time: '1 jour - 09:00 - 18:00',
      location: 'Campus ALCILE SERVICES',
      category: 'evenements',
      capacity: '500 participants',
      price: 'Gratuit',
      status: 'upcoming',
      featured: false
    },
    {
      id: 10,
      title: 'Forum Emploi BTP-Informatique',
      description: 'Rencontres entre nos diplômés, entreprises partenaires et recruteurs du secteur.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-01-30',
      time: '1 jour - 08:00 - 16:00',
      location: 'Campus ALCILE SERVICES',
      category: 'partenariats',
      capacity: '300 participants',
      price: 'Gratuit',
      status: 'upcoming',
      featured: false
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesMonth = selectedMonth === 'all' || event.date.startsWith(selectedMonth);
    return matchesCategory && matchesMonth;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.status === 'past');
  const featuredEvents = upcomingEvents.filter(event => event.featured);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">À venir</span>;
      case 'past':
        return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">Passé</span>;
      default:
        return null;
    }
  };

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FAA800]">Événements</span>
            </h1>
            <p className="text-xl text-blue-100">
              Découvrez tous nos événements : portes ouvertes, cérémonies, formations spéciales et missions internationales.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#00499D] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Calendar className="w-5 h-5 text-gray-600" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D]"
              >
                {months.map(month => (
                  <option key={month.id} value={month.id}>{month.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#00499D] mb-8">Événements à la Une</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredEvents.slice(0, 2).map((event, index) => (
                <article key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FAA800] text-white px-3 py-1 rounded-full text-xs font-medium uppercase">
                        À la une
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      {getStatusBadge(event.status)}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Tag className="w-4 h-4 text-[#FAA800]" />
                        <span className="text-sm text-gray-600 capitalize">
                          {categories.find(c => c.id === event.category)?.name}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-[#00499D]">{event.price}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-[#FAA800]" />
                        <span>{new Date(event.date).toLocaleDateString('fr-FR', { 
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-[#FAA800]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-[#FAA800]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-[#FAA800]" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-[#00499D] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      {event.status === 'upcoming' ? 'S\'inscrire' : 'Voir les photos'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#00499D] mb-8">Prochains Événements</h2>
          
          {upcomingEvents.filter(e => !e.featured).length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.filter(e => !e.featured).map((event) => (
                <article key={event.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      {getStatusBadge(event.status)}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Tag className="w-4 h-4 text-[#FAA800]" />
                        <span className="text-xs text-gray-600 capitalize">
                          {categories.find(c => c.id === event.category)?.name}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-[#00499D]">{event.price}</div>
                    </div>
                    
                    <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                    
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <Calendar className="w-4 h-4 text-[#FAA800]" />
                        <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <MapPin className="w-4 h-4 text-[#FAA800]" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                    
                    <button className="w-full px-4 py-2 bg-[#FAA800] text-white font-medium rounded-lg hover:bg-orange-600 transition-colors text-sm">
                      Voir détails
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun événement à venir</h3>
              <p className="text-gray-600">Revenez bientôt pour découvrir nos prochains événements.</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#00499D] mb-8">Événements Passés</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastEvents.map((event) => (
                <article key={event.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute top-2 right-2">
                      {getStatusBadge(event.status)}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs text-gray-600 mb-3">
                      <Calendar className="w-3 h-3 text-[#FAA800]" />
                      <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <button className="inline-flex items-center text-[#FAA800] hover:text-orange-600 font-medium text-sm">
                      Voir photos
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#00499D] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ne Manquez Aucun Événement
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour être informé de tous nos événements et activités
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FAA800]"
            />
            <button className="px-8 py-3 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;