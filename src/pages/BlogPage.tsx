import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, BookOpen, TrendingUp } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const tags = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'conseils', name: 'Conseils' },
    { id: 'metiers', name: 'Métiers' },
    { id: 'technique', name: 'Technique' },
    { id: 'carrieres', name: 'Carrières' },
    { id: 'entreprendre', name: 'Entreprendre' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 conseils pour réussir sa formation en électricité',
      excerpt: 'Découvrez les meilleures pratiques pour optimiser votre apprentissage et réussir votre formation d\'électricien.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Maître Komlan AKPOVI',
      date: '2024-11-12',
      readTime: '5 min',
      tags: ['conseils', 'metiers'],
      featured: true
    },
    {
      id: 2,
      title: 'Les métiers du BTP qui recrutent au Bénin',
      excerpt: 'Analyse du marché de l\'emploi dans le BTP et présentation des métiers les plus demandés par les employeurs.',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Service Relations Entreprises',
      date: '2024-11-08',
      readTime: '7 min',
      tags: ['carrieres', 'metiers'],
      featured: false
    },
    {
      id: 3,
      title: 'Comment créer son entreprise de plomberie ?',
      excerpt: 'Guide complet pour lancer son activité d\'artisan plombier : démarches, équipements, clientèle.',
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Mme Rachelle HOUNGBO',
      date: '2024-11-05',
      readTime: '8 min',
      tags: ['entreprendre', 'conseils'],
      featured: true
    },
    {
      id: 4,
      title: 'Les nouvelles technologies en climatisation',
      excerpt: 'Découverte des innovations récentes dans le domaine de la climatisation et de la réfrigération.',
      image: 'https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Département Technique',
      date: '2024-11-02',
      readTime: '6 min',
      tags: ['technique', 'metiers'],
      featured: false
    },
    {
      id: 5,
      title: 'Menuiserie moderne : entre tradition et innovation',
      excerpt: 'Comment allier savoir-faire traditionnel et techniques modernes dans le métier de menuisier.',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Atelier Menuiserie',
      date: '2024-10-30',
      readTime: '5 min',
      tags: ['technique', 'metiers'],
      featured: false
    },
    {
      id: 6,
      title: 'L\'importance de la formation continue',
      excerpt: 'Pourquoi continuer à se former tout au long de sa carrière professionnelle dans le BTP.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Direction Pédagogique',
      date: '2024-10-28',
      readTime: '4 min',
      tags: ['conseils', 'carrieres'],
      featured: false
    },
    {
      id: 7,
      title: 'Informatique : les compétences les plus recherchées',
      excerpt: 'Panorama des compétences informatiques les plus demandées sur le marché de l\'emploi béninois.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Département Informatique',
      date: '2024-10-25',
      readTime: '6 min',
      tags: ['carrieres', 'technique'],
      featured: true
    },
    {
      id: 8,
      title: 'Sécurité sur les chantiers : bonnes pratiques',
      excerpt: 'Rappel des règles de sécurité essentielles à respecter sur tous les chantiers du BTP.',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Responsable Sécurité',
      date: '2024-10-22',
      readTime: '7 min',
      tags: ['conseils', 'technique'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const popularPosts = [
    { title: 'Guide du débutant en électricité', views: '2.1k' },
    { title: 'Créer son entreprise de BTP', views: '1.8k' },
    { title: 'Les outils indispensables du plombier', views: '1.5k' },
    { title: 'Formation continue : pourquoi ?', views: '1.2k' }
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FAA800]">Blog</span>
            </h1>
            <p className="text-xl text-blue-100">
              Conseils, techniques et actualités des métiers du BTP et de l'informatique par nos experts.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag.id}
                    onClick={() => setSelectedTag(tag.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTag === tag.id
                        ? 'bg-[#00499D] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D]"
                />
              </div>
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#00499D] mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Articles en vedette
                </h2>
                
                <div className="space-y-8">
                  {featuredPosts.slice(0, 2).map((post, index) => (
                    <article key={post.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${index === 0 ? 'lg:flex' : ''}`}>
                      <div className={`${index === 0 ? 'lg:w-1/2' : ''} relative h-64 ${index === 0 ? 'lg:h-auto' : ''} overflow-hidden`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#FAA800] text-white px-3 py-1 rounded-full text-xs font-medium uppercase">
                            Vedette
                          </span>
                        </div>
                      </div>
                      <div className={`p-6 ${index === 0 ? 'lg:w-1/2' : ''}`}>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className={`font-bold text-gray-900 mb-3 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="bg-blue-100 text-[#00499D] px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <button className="inline-flex items-center text-[#00499D] hover:text-blue-700 font-medium">
                            Lire l'article
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Posts */}
            <div>
              <h2 className="text-2xl font-bold text-[#00499D] mb-6">Tous les Articles</h2>
              
              {regularPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {regularPosts.map((post) => (
                    <article key={post.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="bg-blue-100 text-[#00499D] px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <User className="w-4 h-4" />
                            <span className="truncate">{post.author}</span>
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
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Newsletter */}
              <div className="bg-[#00499D] text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Newsletter Blog</h3>
                <p className="text-blue-100 mb-4">
                  Recevez nos derniers articles directement par email.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FAA800]"
                  />
                  <button className="w-full px-4 py-2 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#00499D] mb-4">Articles Populaires</h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#FAA800] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="text-xs text-gray-500">{post.views} vues</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#00499D] mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(1).map(tag => (
                    <button
                      key={tag.id}
                      onClick={() => setSelectedTag(tag.id)}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 hover:bg-[#00499D] hover:text-white transition-colors"
                    >
                      #{tag.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;