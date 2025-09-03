import { MessageCircle } from "lucide-react";

const WhatsAppAssistant = () => {
  const phoneNumber = "+2290197462905"; // ton numéro WhatsApp avec indicatif
  const defaultMessage = "Bonjour\nPrière de nous renseigner sur les filières de votre centre de formation professionnelle.\n\nBien cordialement"; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 hover:scale-110 hover:shadow-xl animate-bounce-custom"
      title="Discuter sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppAssistant;
