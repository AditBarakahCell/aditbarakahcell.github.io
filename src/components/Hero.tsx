import { ChevronDown, Smartphone, Laptop, Monitor, Wifi, Sun } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Smartphone className="h-16 w-16 text-primary-300" />
        </div>
        <div className="absolute top-40 right-20 animate-float delay-200">
          <Laptop className="h-20 w-20 text-primary-300" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float delay-400">
          <Monitor className="h-18 w-18 text-primary-300" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-300">
          <Wifi className="h-14 w-14 text-primary-300" />
        </div>
        <div className="absolute bottom-1/3 right-10 animate-float delay-500">
          <Sun className="h-16 w-16 text-accent-400" />
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary-700/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center pt-20 sm:pt-24">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-sm mb-6 sm:mb-8">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-primary-200">Buka Setiap Hari • Siap Melayani Anda</span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
          Adit Barakah
          <span className="block bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent">
            Cell
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-10 px-2">
          Solusi terpercaya untuk <span className="text-white font-semibold">servis HP, Laptop & Komputer</span>,
          serta jasa <span className="text-white font-semibold">instalasi Jaringan</span> dan{' '}
          <span className="text-accent-400 font-semibold">PLTS (Tenaga Surya)</span>.
          Berpengalaman, cepat, dan harga bersahabat.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#layanan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
          >
            Lihat Layanan Kami
          </a>
          <a
            href="#kontak"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/5 px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up delay-400 mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
          {[
            { value: '5+', label: 'Tahun Pengalaman' },
            { value: '1000+', label: 'Pelanggan Puas' },
            { value: '24/7', label: 'Siap Melayani' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#layanan"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <span className="text-xs hidden sm:block">Scroll ke bawah</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
