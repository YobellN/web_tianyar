export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Selamat Datang di
            <span className="block text-amber-300 mt-2">Desa Tianyar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up max-w-3xl mx-auto">
            Menjelajahi Keindahan Alam, Budaya, dan Tradisi Bali yang Autentik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
              Jelajahi Desa
            </button>
            <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-200">
              Lihat Wisata
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}