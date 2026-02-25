import { Smartphone, Laptop, Monitor, Wifi, Sun, Cpu, HardDrive, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Servis HP / Smartphone',
    description: 'Perbaikan layar, baterai, konektor charger, software, flashing, dan berbagai masalah HP lainnya. Semua merek dilayani.',
    features: ['Ganti LCD/Touchscreen', 'Ganti Baterai', 'Perbaikan Software', 'Unlock & Flashing'],
    color: 'from-blue-500 to-cyan-500',
    shadowColor: 'shadow-blue-500/20',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Laptop,
    title: 'Servis Laptop',
    description: 'Perbaikan hardware dan software laptop. Install ulang, upgrade RAM/SSD, perbaikan engsel, keyboard, dan lainnya.',
    features: ['Install Ulang OS', 'Upgrade RAM & SSD', 'Perbaikan Hardware', 'Cleaning & Repaste'],
    color: 'from-violet-500 to-purple-500',
    shadowColor: 'shadow-violet-500/20',
    bgColor: 'bg-violet-50',
  },
  {
    icon: Monitor,
    title: 'Servis Komputer / PC',
    description: 'Rakit PC, perbaikan desktop, install software, recovery data, dan maintenance rutin komputer Anda.',
    features: ['Rakit PC Custom', 'Perbaikan Hardware', 'Recovery Data', 'Maintenance Rutin'],
    color: 'from-emerald-500 to-teal-500',
    shadowColor: 'shadow-emerald-500/20',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: Wifi,
    title: 'Instalasi Jaringan',
    description: 'Pemasangan dan konfigurasi jaringan LAN, WiFi, MikroTik, CCTV, serta troubleshooting jaringan internet.',
    features: ['Setting MikroTik', 'Instalasi WiFi & LAN', 'Pasang CCTV', 'Troubleshooting'],
    color: 'from-orange-500 to-amber-500',
    shadowColor: 'shadow-orange-500/20',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Sun,
    title: 'Instalasi PLTS',
    description: 'Pemasangan Pembangkit Listrik Tenaga Surya (PLTS) untuk rumah, kantor, dan industri. Hemat energi, ramah lingkungan.',
    features: ['PLTS On-Grid', 'PLTS Off-Grid', 'Maintenance Panel', 'Konsultasi Gratis'],
    color: 'from-yellow-500 to-orange-500',
    shadowColor: 'shadow-yellow-500/20',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Cpu,
    title: 'Servis Elektronik Lainnya',
    description: 'Perbaikan printer, speaker, power bank, dan perangkat elektronik lainnya. Kami siap membantu!',
    features: ['Servis Printer', 'Perbaikan Speaker', 'Servis Power Bank', 'Konsultasi Gratis'],
    color: 'from-pink-500 to-rose-500',
    shadowColor: 'shadow-pink-500/20',
    bgColor: 'bg-pink-50',
  },
];

export function Services() {
  return (
    <section id="layanan" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 mb-4">
            <Zap className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Layanan Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Solusi Lengkap untuk
            <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Kebutuhan Teknologi Anda
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-500">
            Kami menyediakan berbagai layanan servis dan instalasi dengan kualitas terbaik dan harga yang bersahabat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-3xl bg-white p-6 sm:p-8 border border-gray-100 hover:border-transparent ${service.shadowColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`mb-5 sm:mb-6 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg ${service.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-5 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 sm:gap-3">
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover gradient border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 rounded-2xl sm:rounded-full bg-gradient-to-r from-primary-50 to-primary-100 p-4 sm:px-8 sm:py-4 border border-primary-200">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-800">Garansi Servis</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-primary-300" />
            <div className="flex items-center gap-2">
              <HardDrive className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-800">Spare Part Original</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-primary-300" />
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-800">Pengerjaan Cepat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
