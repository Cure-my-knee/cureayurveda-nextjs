 import { MessageCircle } from 'lucide-react';

export default function FaqContact() {
  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#82a133] rounded-full mb-4">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Can't find what you're looking for?
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          If your question isn't listed above, don't hesitate to reach out. Our support team is here to help!
        </p>
      </div>

      <button
        onClick={handleContactUs}
        className="inline-flex items-center gap-2 bg-[#82a133] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <MessageCircle className="w-5 h-5" />
        Contact Us
      </button>

      <div className="mt-4 text-sm text-gray-500">
        We typically respond within 24 hours
      </div>
    </div>
  );
}
