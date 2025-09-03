import React, { useState } from 'react';
import { Calendar, Tag, User, ArrowRight, Search } from 'lucide-react';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Toutes les actualités' },
    { id: 'formations', name: 'Formations' },
    { id: 'diplomes', name: 'Diplômes' },
    { id: 'partenariats', name: 'Partenariats' },
    { id: 'evenements', name: 'Événements' }
  ];

  const news = [
    {
      id: 1,
      title: 'Nouvelle promotion de lauréats de nos différentes filières diplômés',
      excerpt: 'Les lauréats de nos différentes filières viennent de terminer leur formation avec succès et sont prêts à intégrer le marché du travail.',
      image: 'https://i.ibb.co/HD8w1BnG/86b33891-0ec2-4e77-883a-68b56f316b32.jpg',
      category: 'diplomes',
      author: 'Direction Pédagogique',
      date: '2024-08-24',
      featured: true
    },
    {
      id: 2,
      title: 'Séance d\'orientation des nouveaux bacheliers dans la commune de Tori',
      excerpt: 'Session d\'information et d\'orientation pour les nouveaux bacheliers de la commune de Tori sur nos filières de formation.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'evenements',
      author: 'Service Orientation',
      date: '2025-07-24',
      featured: true
    },
    {
      id: 3,
      title: 'Vacances métiers : immersion des jeunes en informatique',
      excerpt: 'Programme spécial d\'immersion pour découvrir les métiers de l\'informatique pendant les vacances scolaires.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'formations',
      author: 'Département Informatique',
      date: '2025-07-15',
      featured: false
    },
    {
      id: 4,
      title: 'Journées portes ouvertes',
      excerpt: 'Découvrez nos formations, visitez nos plateaux techniques et rencontrez nos formateurs lors de nos journées portes ouvertes.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'evenements',
      author: 'Communication',
      date: '2025-01-18',
      featured: true
    },
    {
      id: 5,
      title: 'Partenariat avec de nouvelles entreprises du BTP',
      excerpt: 'Signature de conventions avec 5 nouvelles entreprises pour faciliter l\'insertion professionnelle de nos apprenants.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'partenariats',
      author: 'Service Relations Entreprises',
      date: '2024-11-10',
      featured: false
    },
    {
      id: 6,
      title: 'Modernisation des équipements informatiques',
      excerpt: 'Acquisition de nouveaux ordinateurs et logiciels pour améliorer la qualité de la formation en informatique.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'formations',
      author: 'ALCILE SERVICES',
      date: '2024-11-05',
      featured: false
    },
    {
      id: 7,
      title: 'Formation en froid et climatisation : nouvelles méthodes',
      excerpt: 'Introduction de nouvelles techniques écologiques dans notre programme de formation en climatisation.',
      image: 'https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'formations',
      author: 'Département Technique',
      date: '2024-10-20',
      featured: false
    },
    {
      id: 8,
      title: 'Mission internationale : échange avec la France',
      excerpt: 'Nos meilleurs apprenants participent à un programme d\'échange avec des centres de formation français.',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'partenariats',
      author: 'Relations Internationales',
      date: '2024-10-15',
      featured: false
    },
    {
      id: 9,
      title: 'Atelier menuiserie : nouvelles machines',
      excerpt: 'Installation de machines à bois dernière génération pour améliorer la formation en menuiserie.',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'formations',
      author: 'Atelier Menuiserie',
      date: '2024-10-10',
      featured: false
    },
    {
      id: 10,
      title: 'Cérémonie de remise des diplômes 2024',
      excerpt: '150 nouveaux diplômés célébrés lors d\'une cérémonie officielle en présence des autorités locales.',
      image: 'https://i.ibb.co/HD8w1BnG/86b33891-0ec2-4e77-883a-68b56f316b32.jpg',
      category: 'diplomes',
      author: 'Direction',
      date: '2024-09-30',
      featured: false
    }
  ];

  const filteredNews = news.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FAA800]">Actualités</span>
            </h1>
            <p className="text-xl text-blue-100">
              Suivez l'actualité d'ALCILE SERVICES : formations, diplômes, partenariats et événements.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#00499D] mb-8">À la Une</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.slice(0, 2).map((article, index) => (
                <article key={article.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${index === 0 ? 'lg:col-span-2' : ''}`}>
                  <div className={`${index === 0 ? 'md:flex' : ''}`}>
                    <div className={`${index === 0 ? 'md:w-1/2' : ''} relative h-64 ${index === 0 ? 'md:h-auto' : ''} overflow-hidden`}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#FAA800] text-white px-3 py-1 rounded-full text-xs font-medium uppercase">
                          À la une
                        </span>
                      </div>
                    </div>
                    <div className={`p-6 ${index === 0 ? 'md:w-1/2' : ''}`}>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Tag className="w-4 h-4" />
                          <span className="capitalize">{categories.find(c => c.id === article.category)?.name}</span>
                        </div>
                      </div>
                      <h3 className={`font-bold text-gray-900 mb-3 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <button className="inline-flex items-center text-[#00499D] hover:text-blue-700 font-medium">
                          Lire la suite
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#00499D]">Toutes les Actualités</h2>
            <div className="text-sm text-gray-500">
              {filteredNews.length} article{filteredNews.length > 1 ? 's' : ''} trouvé{filteredNews.length > 1 ? 's' : ''}
            </div>
          </div>

          {regularNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((article) => (
                <article key={article.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tag className="w-4 h-4" />
                        <span className="capitalize">{categories.find(c => c.id === article.category)?.name}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span className="truncate">{article.author}</span>
                      </div>
                      <button className="inline-flex items-center text-[#FAA800] hover:text-orange-600 font-medium text-sm">
                        Lire
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun article trouvé</h3>
              <p className="text-gray-600">Essayez de modifier vos critères de recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* TikTok Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00499D] mb-4">
              Nos Actualités sur <span className="text-[#FAA800]">TikTok</span>
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez la vie quotidienne d'ALCILE SERVICES, nos formations en action et nos partenariats
            </p>
          </div>

          {/* TikTok Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { url: 'https://www.tiktok.com/@alcileservices', title: 'Formation pratique' },
              { url: 'https://www.tiktok.com/@alcileservices', title: 'Atelier électricité' },
              { url: 'https://www.tiktok.com/@alcileservices', title: 'Cours théorique' },
              { url: 'https://www.facebook.com/alcileservices', title: 'Plateau technique' }
            ].map((video, index) => (
              <div key={index} className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#00499D] to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-4">📱</div>
                    <h3 className="font-bold mb-2">{video.title}</h3>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#FAA800] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Voir sur {video.url.includes('tiktok') ? 'TikTok' : 'Facebook'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://www.tiktok.com/@alcileservices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FAA800] hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg"
            >
              Suivez-nous sur TikTok
            </a>
            <a
              href="https://www.facebook.com/alcileservices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg ml-4"
            >
              Suivez-nous sur Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
