import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Reply, Users, TrendingUp, Calendar, Search, Filter, Plus } from 'lucide-react';

const ForumPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Toutes les discussions', count: 127 },
    { id: 'general', name: 'Général', count: 35 },
    { id: 'formations', name: 'Formations', count: 28 },
    { id: 'stages', name: 'Stages & Emploi', count: 22 },
    { id: 'technique', name: 'Questions Techniques', count: 19 },
    { id: 'admission', name: 'Admission', count: 15 },
    { id: 'alumni', name: 'Anciens Étudiants', count: 8 }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Comment bien préparer son stage en électricité ?',
      author: 'Jean-Baptiste K.',
      category: 'stages',
      replies: 12,
      likes: 8,
      lastActivity: '2024-11-15',
      isHot: true,
      isPinned: false,
      snippet: 'Je commence mon stage la semaine prochaine dans une entreprise d\'électricité. Quels sont vos conseils pour bien me préparer ?',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50'
    },
    {
      id: 2,
      title: 'Partage d\'expérience : création de mon entreprise de plomberie',
      author: 'Marie A.',
      category: 'alumni',
      replies: 25,
      likes: 18,
      lastActivity: '2024-11-14',
      isHot: true,
      isPinned: true,
      snippet: 'Diplômée depuis 2 ans, je viens de créer mon entreprise. Je partage mon expérience et réponds à vos questions !',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=50'
    },
    {
      id: 3,
      title: 'Question sur le programme de formation en froid et climatisation',
      author: 'Pierre D.',
      category: 'formations',
      replies: 7,
      likes: 4,
      lastActivity: '2024-11-13',
      isHot: false,
      isPinned: false,
      snippet: 'Bonjour, j\'aimerais avoir plus de détails sur le programme de formation en climatisation, notamment sur les fluides frigorigènes.',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=50'
    },
    {
      id: 4,
      title: 'Conseils pour réussir les examens pratiques',
      author: 'Sophie R.',
      category: 'general',
      replies: 15,
      likes: 12,
      lastActivity: '2024-11-12',
      isHot: false,
      isPinned: true,
      snippet: 'Les examens approchent ! Quels sont vos meilleurs conseils pour bien se préparer aux épreuves pratiques ?',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50'
    },
    {
      id: 5,
      title: 'Outils indispensables pour un menuisier débutant',
      author: 'Komlan M.',
      category: 'technique',
      replies: 20,
      likes: 16,
      lastActivity: '2024-11-11',
      isHot: false,
      isPinned: false,
      snippet: 'Quels sont les outils de base qu\'un menuisier débutant doit absolument avoir ? Budget approximatif ?',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50'
    },
    {
      id: 6,
      title: 'Témoignage : mon expérience avec les partenaires étrangers',
      author: 'Rachelle H.',
      category: 'alumni',
      replies: 9,
      likes: 14,
      lastActivity: '2024-11-10',
      isHot: false,
      isPinned: false,
      snippet: 'J\'ai eu la chance de participer à une mission en France. Je partage cette belle expérience avec vous.',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=50'
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.snippet.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const pinnedDiscussions = filteredDiscussions.filter(d => d.isPinned);
  const regularDiscussions = filteredDiscussions.filter(d => !d.isPinned);

  const stats = [
    { label: 'Discussions', value: '127', icon: MessageCircle },
    { label: 'Membres actifs', value: '89', icon: Users },
    { label: 'Messages aujourd\'hui', value: '24', icon: TrendingUp }
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FAA800]">Forum</span> Communautaire
            </h1>
            <p className="text-xl text-blue-100">
              Espace d'échanges entre candidats, apprenants, alumni et formateurs. Partagez vos expériences et trouvez des réponses à vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FAA800] text-white rounded-full mb-2">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-[#00499D]">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* New Discussion Button */}
              <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                <Plus className="w-5 h-5" />
                <span>Nouvelle Discussion</span>
              </button>

              {/* Search */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#00499D] mb-4">Rechercher</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher une discussion..."
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
                      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[#00499D] text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20'
                          : 'bg-gray-200'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Forum Rules */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#00499D] mb-4">Règles du Forum</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Respectez les autres membres</li>
                  <li>• Restez courtois dans vos échanges</li>
                  <li>• Utilisez les bonnes catégories</li>
                  <li>• Pas de spam ou de publicité</li>
                  <li>• Aidez la communauté à grandir</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#00499D]">
                {selectedCategory === 'all' 
                  ? 'Toutes les Discussions' 
                  : categories.find(c => c.id === selectedCategory)?.name
                }
              </h2>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D]">
                  <option value="recent">Plus récents</option>
                  <option value="popular">Plus populaires</option>
                  <option value="replies">Plus de réponses</option>
                </select>
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Pinned Discussions */}
            {pinnedDiscussions.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#00499D] mb-4 flex items-center">
                  <span className="bg-[#FAA800] text-white px-2 py-1 rounded text-xs mr-2">ÉPINGLÉ</span>
                  Discussions importantes
                </h3>
                <div className="space-y-4">
                  {pinnedDiscussions.map((discussion) => (
                    <div key={discussion.id} className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <img
                              src={discussion.avatar}
                              alt={discussion.author}
                              className="w-8 h-8 rounded-full"
                            />
                            <div>
                              <h3 className="font-semibold text-lg text-gray-900 hover:text-[#00499D] cursor-pointer">
                                {discussion.title}
                              </h3>
                              <div className="flex items-center space-x-3 text-sm text-gray-500">
                                <span>Par {discussion.author}</span>
                                <span>•</span>
                                <span>{new Date(discussion.lastActivity).toLocaleDateString('fr-FR')}</span>
                                <span className="bg-blue-100 text-[#00499D] px-2 py-1 rounded text-xs">
                                  {categories.find(c => c.id === discussion.category)?.name}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{discussion.snippet}</p>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Reply className="w-4 h-4" />
                            <span>{discussion.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{discussion.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Discussions */}
            <div className="space-y-4">
              {regularDiscussions.map((discussion) => (
                <div key={discussion.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={discussion.avatar}
                          alt={discussion.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-lg text-gray-900 hover:text-[#00499D] cursor-pointer">
                              {discussion.title}
                            </h3>
                            {discussion.isHot && (
                              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                                🔥 POPULAIRE
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <span>Par {discussion.author}</span>
                            <span>•</span>
                            <span>{new Date(discussion.lastActivity).toLocaleDateString('fr-FR')}</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {categories.find(c => c.id === discussion.category)?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{discussion.snippet}</p>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-[#00499D] rounded-full mb-1">
                          <Reply className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{discussion.replies}</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-100 text-green-600 rounded-full mb-1">
                          <ThumbsUp className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{discussion.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-8 space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Précédent</button>
              <button className="px-4 py-2 bg-[#00499D] text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Suivant</button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-[#00499D] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Échangez avec d'autres apprenants, partagez vos expériences et développez votre réseau professionnel
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            <Plus className="mr-2 w-5 h-5" />
            Créer un Compte
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForumPage;