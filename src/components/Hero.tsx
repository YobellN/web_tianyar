export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-300/10 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-600/60"></div>
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Selamat Datang di
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Desa Tianyar
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay max-w-3xl mx-auto leading-relaxed">
              Menjelajahi Keindahan Alam, Budaya, dan Tradisi Bali yang Autentik di Jantung Karangasem
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
              <button className="btn-primary text-white px-10 py-4 rounded-full font-semibold text-lg shadow-blue">
                Jelajahi Desa
              </button>
              <button className="btn-secondary text-white px-10 py-4 rounded-full font-semibold text-lg shadow-cream">
                Lihat Wisata
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}