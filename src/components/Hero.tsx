export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/70 to-blue-800/70"></div>
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Selamat Datang di Desa Tianyar
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
            Menjelajahi Keindahan Alam, Budaya, dan Tradisi Bali yang Autentik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Jelajahi Desa
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
              Lihat Wisata
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}