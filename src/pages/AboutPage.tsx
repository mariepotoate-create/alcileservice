import React from 'react';
import {
  CheckCircle,
  Users,
  Calendar,
  Award,
  Phone,
  Mail,
  MapPin,
  Info,
} from 'lucide-react';

// Données réutilisables
const stats = [
  { icon: Users, label: 'Apprenants formés', value: '100+' },
  { icon: Calendar, label: 'Années d’expérience', value: '24' },
];

const equipe = [
  {
    nom: 'ADJOU Rodrigue',
    formation: 'DFP/AFAP en plomberie',
    experience: '24 ans',
    domaine: 'Plomberie',
  },
  {
    nom: 'OBA Annick',
    formation: 'BAC F4 / CAP en plomberie',
    experience: '',
    domaine: 'Plomberie',
  },
  {
    nom: 'AZAH Hector',
    formation: 'BAC/ CQM/ AFAP en plomberie',
    experience: '',
    domaine: 'Plomberie',
  },
  {
    nom: 'AMOUZOUN Casimir',
    formation: 'BEPC/ AFAP en froid et climatisation',
    experience: '',
    domaine: 'Froid & climatisation',
  },
];

const testimonies = [
  {
    nom: 'Alain DOSSA',
    poste: 'C/SOSPAIP de la DESTFP',
    date: '07 Novembre 2022',
    message:
      "Grâce à cette formation, j'ai acquis de nouvelles compétences indispensables...",
  },
  {
    nom: 'Jane DOE',
    poste: 'Formateur AFAP',
    date: '15 Juin 2023',
    message: "Les méthodes pédagogiques sont claires et adaptées aux besoins réels...",
  },
];

const services = [
  'Plomberie',
  'Froid & Climatisation',
  'Électricité',
  'Maintenance',
];

const contact = [
  { icon: Phone, label: 'Téléphone', value: '+2290196940481' },
  { icon: Mail, label: 'Email', value: 'contact@example.com' },
  { icon: MapPin, label: 'Adresse', value: 'Cotonou, Bénin' },
];

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Section Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-4 border rounded-lg">
            <stat.icon className="mx-auto mb-2 text-blue-600" size={32} />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Section Équipe */}
      <section>
        <h2 className="text-xl font-bold mb-4">Notre Équipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipe.map((membre, idx) => (
            <div key={idx} className="p-4 border rounded-lg">
              <div className="font-semibold text-blue-800">{membre.nom}</div>
              <div className="text-gray-700">{membre.formation}</div>
              {membre.experience && (
                <div className="text-gray-500">{membre.experience}</div>
              )}
              <div className="mt-2 text-sm italic text-gray-400">{membre.domaine}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Services */}
      <section>
        <h2 className="text-xl font-bold mb-4">Nos Services</h2>
        <ul className="list-disc pl-6 space-y-1">
          {services.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Section Témoignages */}
      <section>
        <h2 className="text-xl font-bold mb-4">Témoignages</h2>
        <div className="space-y-6">
          {testimonies.map((t, idx) => (
            <div key={idx} className="p-4 border rounded-lg bg-gray-50">
              <div className="font-semibold">{t.nom}</div>
              <div className="text-sm text-gray-500">
                {t.poste} - {t.date}
              </div>
              <p className="mt-2 text-gray-700">{t.message}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Contact */}
      <section>
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contact.map((c, idx) => (
            <div key={idx} className="p-4 border rounded-lg flex items-center space-x-2">
              <c.icon className="text-blue-600" />
              <span>{c.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section Info */}
      <section className="p-4 border rounded-lg bg-blue-50">
        <Info className="inline mr-2 text-blue-600" />
        <span>
          Nouvelle rentrée scolaire : Lundi 15 Septembre 2025. Les inscriptions sont
          ouvertes et se poursuivent.
        </span>
      </section>
    </div>
  );
};

export default AboutPage;
