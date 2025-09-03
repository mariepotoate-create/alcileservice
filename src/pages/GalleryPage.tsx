import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Download, Share2, Eye } from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'Tout voir', count: 48 },
    { id: 'plateaux', name: 'Plateaux Techniques', count: 12 },
    { id: 'chantiers', name: 'Chantiers & Pratique', count: 15 },
    { id: 'vie', name: 'Vie au Centre', count: 10 },
    { id: 'evenements', name: 'Événements', count: 8 },
    { id: 'videos', name: 'Vidéos', count: 3 }
  ];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://i.ibb.co/Y4XLtzYz/96de9937-d08c-4b74-803a-ddb27f49523e.jpg',
      thumbnail: 'https://i.ibb.co/Y4XLtzYz/96de9937-d08c-4b74-803a-ddb27f49523e.jpg',
      title: 'Atelier de construction - Formation pratique',
      description: 'Nos apprenants en action sur un chantier école',
      category: 'chantiers',
      date: '2024-11-10',
      views: 127
    },
    {
      id: 2,
      type: 'image',
      src: 'https://i.ibb.co/SDJysTPp/37550eeb-d636-47d9-8f5b-ca6e1a10d6cf.jpg',
      thumbnail: 'https://i.ibb.co/SDJysTPp/37550eeb-d636-47d9-8f5b-ca6e1a10d6cf.jpg',
      title: 'Plateau technique électricité',
      description: 'Équipements modernes pour la formation en électricité',
      category: 'plateaux',
      date: '2024-11-08',
      views: 95
    },
    {
      id: 3,
      type: 'video',
      src: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',

      title: 'Formation menuiserie - Techniques avancées',
      description: 'Démonstration des techniques de menuiserie par nos formateurs',
      category: 'videos',
      date: '2024-11-05',
      duration: '5:32',
      views: 203
    },
    {
      id: 4,
      type: 'image',
      src: 'https://i.ibb.co/TDGzzTjH/f604783d-cc61-4241-8fdc-478b9368b202.jpg',
      thumbnail: 'https://i.ibb.co/TDGzzTjH/f604783d-cc61-4241-8fdc-478b9368b202.jpg',
      title: 'Atelier plomberie',
      description: 'Formation pratique en installation sanitaire',
      category: 'plateaux',
      date: '2024-11-03',
      views: 88
    },
    {
      id: 5,
      type: 'image',
      src: 'https://i.ibb.co/GmkQX2t/e720087e-65b3-4af8-9495-43b035cbee31.jpg',
      thumbnail: 'https://i.ibb.co/GmkQX2t/e720087e-65b3-4af8-9495-43b035cbee31.jpg',
      title: 'Journée portes ouvertes 2024',
      description: 'Grande affluence lors de notre journée portes ouvertes',
      category: 'evenements',
      date: '2024-10-28',
      views: 156
    },
    {
      id: 6,
      type: 'image',
      src: 'https://i.ibb.co/Mx95Mhqp/34e6e688-b63f-4c2c-9afb-f6db5400ac4d.jpg',
      thumbnail: 'https://i.ibb.co/Mx95Mhqp/34e6e688-b63f-4c2c-9afb-f6db5400ac4d.jpg',
      title: 'Salle informatique moderne',
      description: 'Nouveaux équipements informatiques pour nos formations',
      category: 'plateaux',
      date: '2024-10-25',
      views: 72
    },
    {
      id: 7,
      type: 'image',
      src: 'https://i.ibb.co/39pBFGfP/f29e62e8-d0db-432e-b361-fff774e6d0c0.jpg',
      thumbnail: 'https://i.ibb.co/39pBFGfP/f29e62e8-d0db-432e-b361-fff774e6d0c0.jpg',
      title: 'Formation froid et climatisation',
      description: 'Installation et maintenance de systèmes de climatisation',
      category: 'chantiers',
      date: '2024-10-22',
      views: 110
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Atelier peinture et décoration',
      description: 'Apprentissage des techniques de peinture décorative',
      category: 'plateaux',
      date: '2024-10-20',
      views: 84
    },
    {
      id: 9,
      type: 'image',
      src: 'https://i.ibb.co/HD8w1BnG/86b33891-0ec2-4e77-883a-68b56f316b32.jpg',
      thumbnail: 'https://i.ibb.co/8Dw40ks6/8669b886-ca38-4cba-bc0d-d98b855446fc.jpg',
      title: 'Cérémonie de remise des diplômes',
      description: 'Moment émouvant de la remise des certificats 2024',
      category: 'evenements',
      date: '2024-09-30',
      views: 298
    },
    {
      id: 10,
      type: 'video',
      src: 'https://i.ibb.co/qSvhqcF/79e8aa70-328e-4611-a9a0-1c247d78cf67.jpg',
      thumbnail: 'https://i.ibb.co/qSvhqcF/79e8aa70-328e-4611-a9a0-1c247d78cf67.jpg',
      title: 'Témoignage - Succès de nos diplômés',
      description: 'Anciens étudiants partagent leur expérience professionnelle',
      category: 'videos',
      date: '2024-09-25',
      duration: '8:15',
      views: 445
    },
    {
      id: 11,
      type: 'image',
      src: 'https://i.ibb.co/sp7f815G/374c0124-ac71-4fe9-855d-bc3ec92cd41e.jpg',
      thumbnail: 'https://i.ibb.co/sp7f815G/374c0124-ac71-4fe9-855d-bc3ec92cd41e.jpg',
      title: 'Vie étudiante - Moments de détente',
      description: 'Nos apprenants lors d\'une pause conviviale',
      category: 'vie',
      date: '2024-09-20',
      views: 156
    },
    {
      id: 12,
      type: 'image',
      src: 'https://i.ibb.co/G4ZXdCTx/78ec3415-0456-4493-ae9a-fcf28886dc75.jpg',
      thumbnail: 'https://i.ibb.co/G4ZXdCTx/78ec3415-0456-4493-ae9a-fcf28886dc75.jpg',
      title: 'Chantier école - Rénovation complète',
      description: 'Projet de rénovation mené par nos apprenants',
      category: 'chantiers',
      date: '2024-09-15',
      views: 189
    }
  ];

  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const openLightbox = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  const navigateMedia = (direction) => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredMedia.length) % filteredMedia.length
      : (currentIndex + 1) % filteredMedia.length;
    
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  const handleKeyPress = (e) => {
    if (!lightboxOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateMedia('prev');
    if (e.key === 'ArrowRight') navigateMedia('next');
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, currentIndex]);

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FAA800]">Galerie</span> Photos & Vidéos
            </h1>
            <p className="text-xl text-blue-100">
              Découvrez en images nos plateaux techniques, nos apprenants en action, et tous les moments forts de la vie à ALCILE SERVICES.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#00499D] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedia.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.type === 'video' ? (
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-[#00499D] ml-1" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Eye className="w-6 h-6 text-[#00499D]" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    {item.type === 'video' ? (
                      <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                        <Play className="w-3 h-3" />
                        <span>{item.duration}</span>
                      </div>
                    ) : (
                      <div className="bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                        PHOTO
                      </div>
                    )}
                  </div>

                  {/* Views */}
                  <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{item.views}</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#00499D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                  <div className="text-xs text-gray-500">
                    {new Date(item.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMedia.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Eye className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun média trouvé</h3>
              <p className="text-gray-600">Cette catégorie ne contient pas encore de contenu.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && selectedMedia && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateMedia('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateMedia('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Media Content */}
            <div className="max-w-4xl max-h-[80vh] relative">
              {selectedMedia.type === 'video' ? (
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Vidéo : {selectedMedia.title}</p>
                      <p className="text-sm text-gray-300 mt-2">Durée : {selectedMedia.duration}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}
            </div>

            {/* Media Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-bold mb-2">{selectedMedia.title}</h3>
                <p className="text-gray-300 mb-4">{selectedMedia.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <span>{new Date(selectedMedia.date).toLocaleDateString('fr-FR')}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{selectedMedia.views} vues</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {filteredMedia.length}
            </div>
          </div>
        </div>
      )}

      {/* Load More */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-[#00499D] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Charger plus de médias
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
            Venez Découvrir Nos Installations
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Visitez notre centre lors de nos journées portes ouvertes pour découvrir de vos propres yeux nos équipements et notre pédagogie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              Prochaines Portes Ouvertes
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-[#00499D] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;