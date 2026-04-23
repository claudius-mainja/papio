import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaAward, FaHeart, FaUsers, FaStar, FaArrowRight } from 'react-icons/fa'

export default function OurStory() {
  return (
    <div className="min-h-screen bg-stone-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/OurStoryHero.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-900/50 to-amber-900/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Our <span className="text-gradient">Story</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A journey of passion, adventure, and love for Zimbabwe's incredible landscapes
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          {/* Introduction */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                From a Dream to Zimbabwe's Premier Adventure Company
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Founded with a deep love for Zimbabwe's untamed wilderness, Papio Africa Adventures began as a small operation with just one goal: to share the incredible beauty of our homeland with the world.
                </p>
                <p>
                  What started as a passion project has grown into one of Zimbabwe's most trusted adventure tourism companies, serving thousands of travelers from around the globe.
                </p>
                <p>
                  Our team of local experts brings decades of combined experience in wildlife, culture, and adventure tourism. We don't just show our clients Zimbabwe – we share our home with them.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-amber-500 rounded-3xl opacity-20"></div>
              <img 
                src="/assets/images/Ourstory-quadbiking.png" 
                alt="Papio Africa Team"
                className="relative rounded-3xl shadow-2xl w-full"
                onError={(e) => e.target.src = 'https://placehold.co/600x500/d97706/white?text=Our+Team'}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { number: '10+', label: 'Years Experience', icon: '★' },
              { number: '5000+', label: 'Happy Travelers', icon: '★' },
              { number: '50+', label: 'Destinations', icon: '★' },
              { number: '100%', label: 'Satisfaction', icon: '★' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-stone-700/50 rounded-2xl p-6 text-center border border-amber-500/20">
                <div className="text-4xl font-bold text-amber-500 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-stone-700/50 rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all">
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <FaHeart className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Passion</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every adventure we create is driven by our genuine love for Zimbabwe's landscapes, wildlife, and culture. We pour our hearts into every tour.
                </p>
              </div>

              <div className="bg-stone-700/50 rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all">
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <FaAward className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-400 leading-relaxed">
                  We strive for excellence in everything we do, from the quality of our guides to the condition of our equipment. Your safety and satisfaction are our priorities.
                </p>
              </div>

              <div className="bg-stone-700/50 rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all">
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <FaUsers className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Community</h3>
                <p className="text-stone-600 leading-relaxed">
                  We believe in giving back to the communities that make our adventures possible. Sustainable tourism benefits everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-stone-800 mb-12 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: ' Claudius Mainja', role: 'Founder & CEO', desc: '20+ years in tourism' },
                { name: 'Tinashe Moyo', role: 'Head Guide', desc: 'Wildlife specialist' },
                { name: 'Memory Siwale', role: 'Operations Manager', desc: 'Logistics expert' },
                { name: 'Blessing Dube', role: 'Adventure Lead', desc: 'Extreme sports certified' },
              ].map((member, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-6">
                  <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-amber-600">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p className="text-amber-600 font-medium text-sm">{member.role}</p>
                  <p className="text-stone-500 text-xs mt-1">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Adventure</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to experience Zimbabwe like never before? Let us show you the adventure of a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/activities/quadbiking">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-xl transition-all">
                  Start Your Adventure
                </button>
              </Link>
              <Link to="/about/contact">
                <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl transition-all hover:bg-white hover:text-green-700">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}