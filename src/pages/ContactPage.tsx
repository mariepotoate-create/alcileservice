import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Linkedin, MessageCircle, Youtube } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    attachments: null
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ type: 'success', message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.' });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        attachments: null
      });
      setFormStatus({ type: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: [
        'Ouêdo Cité Boni YAYI Villa 69 L 4 Abomey Calavi Bénin',
        'République du Bénin'
      ]
    },
    {
      icon: Phone,
      title: 'Téléphones',
      details: [
        '+229 01 44 42 95 40 (Direction)',
        '+229 01 96 94 04 81 (Admissions)',
        '+229 01 97 46 29 05 (WhatsApp)'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'alcileservicebtp06@gmail.com',
      ]
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: [
        'Lundi - Vendredi : 7h 30 - 18h00',
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'bg-blue-600' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'bg-red-600' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'bg-blue-700' },
    { icon: MessageCircle, name: 'WhatsApp', url: '#', color: 'bg-green-600' }
  ];

  const quickActions = [
    {
      title: 'Demande d\'admission',
      description: 'Informations sur les conditions et procédures d\'inscription',
      action: 'S\'inscrire',
      color: 'bg-[#FAA800]',
      whatsappMessage: 'Bonjour,\n\nJe souhaite obtenir des informations sur les conditions et procédures d\'inscription à ALCILE SERVICE.\n\nPouvez-vous me renseigner sur :\n- Les conditions d\'admission\n- Les documents à fournir\n- Les frais de formation\n- Les dates d\'inscription\n\nMerci pour votre aide.\n\nCordialement'
    },
    {
      title: 'Visite guidée',
      description: 'Découvrez nos plateaux techniques et nos formations',
      action: 'Programmer',
      color: 'bg-[#00499D]',
      whatsappMessage: 'Bonjour,\n\nJe souhaite programmer une visite guidée d\'ALCILE SERVICE pour découvrir :\n- Vos plateaux techniques\n- Vos formations\n- Vos équipements\n\nPouvez-vous me proposer des créneaux disponibles ?\n\nMerci.\n\nCordialement'
    },
    {
      title: 'Partenariat entreprise',
      description: 'Collaboration pour stages, emplois ou formations',
      action: 'Collaborer',
      color: 'bg-green-600',
      whatsappMessage: 'Bonjour,\n\nNous sommes intéressés par un partenariat avec ALCILE SERVICE pour :\n- Accueillir des stagiaires\n- Recruter vos diplômés\n- Collaborer sur des formations\n\nPouvons-nous discuter des modalités de collaboration ?\n\nCordialement'
    }
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00499D] to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FAA800]">Contactez-nous</span>
            </h1>
            <p className="text-xl text-blue-100">
              Notre équipe est à votre écoute pour répondre à toutes vos questions sur nos formations, admissions et services.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold text-[#00499D] mb-6">Informations de Contact</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#FAA800] rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity`}
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Actions Rapides</h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white">
                      <h4 className="font-medium text-gray-900 mb-2">{action.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{action.description}</p>
                      <a
                        href={`https://wa.me/2290197462905?text=${encodeURIComponent(action.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full px-4 py-2 ${action.color} text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium text-center`}
                      >
                        {action.action}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-12">
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#00499D] mb-6">Envoyez-nous un Message</h2>
              
              {formStatus.message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  formStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D] focus:ring-1 focus:ring-[#00499D]"
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D] focus:ring-1 focus:ring-[#00499D]"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D] focus:ring-1 focus:ring-[#00499D]"
                      placeholder="+229 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D] focus:ring-1 focus:ring-[#00499D]"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="admission">Demande d'admission</option>
                      <option value="information">Demande d'information</option>
                      <option value="visite">Visite guidée</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D] focus:ring-1 focus:ring-[#00499D]"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <div>
                  <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-2">
                    Pièces jointes
                  </label>
                  <input
                    type="file"
                    id="attachments"
                    name="attachments"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00499D] focus:ring-1 focus:ring-[#00499D]"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Formats acceptés : PDF, DOC, DOCX, JPG, PNG (max 5MB)
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-[#FAA800] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le Message</span>
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-[#00499D] mb-2">Notre Localisation</h2>
                <p className="text-gray-600">
                  Situés au cœur d'Abomey-Calavi, facilement accessible en transport public
                </p>
              </div>
              <div className="h-96 bg-gray-200 relative">
                {/* Placeholder for Google Maps */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#00499D] mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Carte Google Maps Interactive</p>
                    <p className="text-sm text-gray-500">Ouedo cité Boni Yayi Villa 69 L9, Abomey-Calavi</p>
                  </div>
                </div>
                {/* Overlay with contact info */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <h3 className="font-semibold text-[#00499D] mb-2">ALCILE SERVICES</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Ouedo cité Boni Yayi Villa 69 L9</p>
                    <p>Abomey-Calavi, Bénin</p>
                    <p className="text-[#FAA800] font-medium">+229 01 97 46 29 05</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-[#00499D] mb-3">Transport Public</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Taxi-moto dans la zone : Disponible 24h/24</li>
                  <li>• Parking gratuit disponible</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-semibold text-[#00499D] mb-3">Points de Repère</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Ouêdo Cité Boni YAYI, Villa 69 L4</li>
                  <li>• À 150m du carrefour Cité Yayi-Talon à droite en quittant Cotonou</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <section className="py-16 bg-[#00499D] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'aide urgente ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Notre service d'urgence est disponible pour les apprenants en difficulté
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2290197462905"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Urgence : +229 01 97 46 29 05
            </a>
            <a
              href="https://wa.me/2290197462905"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp 24h/24
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;