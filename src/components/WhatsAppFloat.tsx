import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 3000);
      return () => clearTimeout(tooltipTimer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative animate-fade-in-up bg-white rounded-2xl shadow-2xl p-3 sm:p-4 max-w-[240px] sm:max-w-xs border border-gray-100">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <X className="h-3 w-3 text-gray-600" />
          </button>
          <p className="text-xs sm:text-sm text-gray-700 font-medium">
            👋 Ada yang bisa kami bantu? Chat kami di WhatsApp ya!
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/6283854299035?text=Halo%20Adit%20Barakah%20Cell%2C%20saya%20ingin%20bertanya"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-110 transition-all duration-300 animate-pulse-glow"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
