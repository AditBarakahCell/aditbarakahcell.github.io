import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram, Github, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat Toko',
    details: ['Jl. Sunan Giri Gg. No.103', 'Gresik, Jawa Timur, Indonesia'],
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Phone,
    title: 'Telepon / WhatsApp',
    details: ['083-854-299-035', 'Bisa WA & Telepon'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    details: ['Senin - Sabtu: 08.00 - 21.00', 'Minggu: 09.00 - 17.00'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['aditbarakahcell@gmail.com', 'Balas dalam 24 jam'],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
  },
];

const socialLinks = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/6283854299035',
    color: 'bg-green-500 hover:bg-green-600',
    desc: 'Chat langsung',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/adit_99_service/',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    desc: '@aditbarakahcell',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/aditbarakahcell',
    color: 'bg-gray-800 hover:bg-gray-900',
    desc: 'Website kami',
  },
];

export function Contact() {
  return (
    <section id="kontak" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 mb-4">
            <Phone className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Hubungi Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Siap Membantu
            <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Kapan Saja
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-500">
            Jangan ragu untuk menghubungi kami. Konsultasi gratis untuk semua layanan!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl bg-white p-4 sm:p-5 border border-gray-100 hover:shadow-lg hover:border-transparent transition-all duration-300 group"
                >
                  <div className={`flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                    {item.details.map((line) => (
                      <p key={line} className="text-xs sm:text-sm text-gray-500">{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">Ikuti Kami</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${social.color} text-white shadow-lg hover:scale-110 transition-all duration-300`}
                      title={social.label}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map & CTA */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map placeholder */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-video sm:min-h-[350px] border border-gray-200">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-primary-100 flex items-center justify-center mb-4 animate-pulse-glow">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Lokasi Adit Barakah Cell</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-sm">
                  Temukan toko kami dengan mudah. Klik tombol di bawah untuk membuka di Google Maps.
                </p>
                <a
                  href="https://maps.google.com/?q=Adit+Barakah+Cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-105 transition-all duration-300"
                >
                  <MapPin className="h-4 w-4" />
                  Buka Google Maps
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Decorative map grid */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9ca3af" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapgrid)"/>
              </svg>
            </div>

            {/* Quick Action Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/6285xxxxxxxxx?text=Halo%20Adit%20Barakah%20Cell%2C%20saya%20ingin%20konsultasi%20tentang%20servis"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 p-4 sm:p-5 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base">Chat WhatsApp</div>
                  <div className="text-xs sm:text-sm text-green-100">Balas cepat & konsultasi gratis</div>
                </div>
              </a>

              <a
                href="tel:083854299035"
                className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 p-4 sm:p-5 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base">Telepon Langsung</div>
                  <div className="text-xs sm:text-sm text-primary-100">Hubungi kami sekarang</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
