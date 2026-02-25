import { Award, Users, Clock, ThumbsUp, Heart, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Pelayanan Tulus',
    desc: 'Melayani setiap pelanggan dengan sepenuh hati, seperti melayani keluarga sendiri.',
  },
  {
    icon: Target,
    title: 'Hasil Berkualitas',
    desc: 'Mengutamakan kualitas pekerjaan dan menggunakan komponen terbaik.',
  },
  {
    icon: ThumbsUp,
    title: 'Harga Jujur',
    desc: 'Transparansi harga tanpa biaya tersembunyi, sesuai dengan masalah yang ada.',
  },
];

export function About() {
  return (
    <section id="tentang" className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image / Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 p-8 sm:p-12 text-white aspect-square sm:aspect-auto sm:min-h-[500px] flex flex-col justify-center">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.5" fill="white"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)"/>
                </svg>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6 backdrop-blur-sm">
                  <Award className="h-4 w-4 text-accent-400" />
                  <span className="text-sm font-medium">Terpercaya Sejak Hari Pertama</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                  Adit Barakah
                  <span className="block text-accent-400">Cell</span>
                </h3>

                <p className="text-base sm:text-lg text-primary-100 leading-relaxed mb-8">
                  Berawal dari kecintaan terhadap dunia teknologi, Adit Barakah Cell hadir untuk memberikan
                  solusi terbaik bagi masyarakat dalam memperbaiki dan merawat perangkat elektronik mereka.
                </p>

                {/* Stats in image */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { icon: Users, value: '1000+', label: 'Pelanggan' },
                    { icon: Clock, value: '5+', label: 'Tahun' },
                    { icon: Award, value: '100%', label: 'Dedikasi' },
                  ].map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="rounded-2xl bg-white/10 backdrop-blur-sm p-3 sm:p-4 text-center">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-1 sm:mb-2 text-accent-400" />
                        <div className="text-lg sm:text-2xl font-bold">{stat.value}</div>
                        <div className="text-[10px] sm:text-xs text-primary-200">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border-4 border-white/10" />
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full border-4 border-white/10" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 mb-4">
              <Users className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Tentang Kami</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Kenapa Memilih
              <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Adit Barakah Cell?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6">
              Kami adalah toko jasa servis dan penjualan yang berdedikasi tinggi dalam bidang teknologi.
              Dengan pengalaman bertahun-tahun, kami telah dipercaya oleh ratusan pelanggan untuk menangani
              berbagai masalah perangkat elektronik mereka.
            </p>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">
              Selain servis perangkat, kami juga menyediakan jasa instalasi jaringan komputer dan
              PLTS (Pembangkit Listrik Tenaga Surya) untuk kebutuhan rumah tangga hingga industri.
              Kami percaya bahwa setiap pelanggan berhak mendapatkan layanan terbaik dengan harga yang fair.
            </p>

            {/* Values */}
            <div className="space-y-4 sm:space-y-5">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
