import { Wrench, Heart, ArrowUp, Smartphone, Laptop, Monitor, Wifi, Sun } from 'lucide-react';

const services = [
  { icon: Smartphone, label: 'Servis HP' },
  { icon: Laptop, label: 'Servis Laptop' },
  { icon: Monitor, label: 'Servis Komputer' },
  { icon: Wifi, label: 'Instalasi Jaringan' },
  { icon: Sun, label: 'Instalasi PLTS' },
];

const quickLinks = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#tentang', label: 'Tentang Kami' },
  { href: '#kontak', label: 'Kontak' },
];

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#beranda" className="inline-flex items-center gap-3 group mb-4">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/30">
                <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">Adit Barakah</span>
                <span className="text-xs font-semibold text-primary-400 tracking-widest uppercase leading-tight">Cell</span>
              </div>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Solusi terpercaya untuk servis perangkat elektronik dan instalasi jaringan & PLTS.
              Melayani dengan sepenuh hati.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Menu</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary-500/50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Layanan</h3>
            <ul className="space-y-2.5">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.label}>
                    <a
                      href="#layanan"
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary-500/60" />
                      {service.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Kontak</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>📍 Jl. Sunan Giri Gg. No.103</p>
              <p>📱 083-854-299-035</p>
              <p>✉️ aditbarakahcell@gmail.com</p>
              <p>🕐 Senin - Sabtu: 08.00 - 21.00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Adit Barakah Cell. All rights reserved. Made with{' '}
            <Heart className="inline h-3 w-3 text-red-500 fill-red-500" /> di Indonesia
          </p>
          <a
            href="#beranda"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-xs font-medium text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
          >
            Kembali ke atas
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
