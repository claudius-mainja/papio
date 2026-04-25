import { Link } from 'react-router-dom'
import { FiCheck, FiArrowRight, FiShield, FiHeart, FiGlobe } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

export default function StyleOfTravel() {
  const travelStyles = [
    {
      id: 'adventure',
      title: 'Adventure Seeker',
      description: 'For those who crave adrenaline and excitement',
      image: '/assets/images/QuadbikeHero.png',
      activities: ['Quad Biking', 'White Water Rafting', 'Bungee Jumping', 'Gorge Swinging'],
    },
    {
      id: 'wildlife',
      title: 'Wildlife Enthusiast',
      description: 'Discover Africa\'s incredible animal kingdom',
      image: '/assets/images/safarihero.png',
      activities: ['Safari Drives', 'Walking Safaris', 'Bird Watching', 'Game Drives'],
    },
    {
      id: 'cultural',
      title: 'Culture Explorer',
      description: 'Immerse yourself in rich local traditions',
      image: '/assets/images/tourhero.png',
      activities: ['Heritage Tours', 'Village Visits', 'Artisan Workshops', 'Historical Sites'],
    },
    {
      id: 'luxury',
      title: 'Luxury Traveler',
      description: 'Experience Zimbabwe in comfort and style',
      image: '/assets/images/riverhero.png',
      activities: ['Private Tours', 'Luxury Lodges', 'Helicopter Tours', 'Fine Dining'],
    }
  ]

  const whyChooseUs = [
    {
      title: 'Safety First',
      description: 'All activities follow strict safety protocols. Our guides are certified and equipment is regularly inspected.'
    },
    {
      title: 'Local Expertise',
      description: 'Our team of local guides knows every trail, waterfall, and wildlife spot. We show you the hidden gems.'
    },
    {
      title: 'Sustainable Tourism',
      description: 'We\'re committed to responsible travel that benefits local communities and protects wildlife.'
    },
    {
      title: 'Personalized Service',
      description: 'Every traveler is unique. We tailor our tours to your interests, fitness level, and preferences.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Green Background with Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 via-green-900 to-green-950">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/OurStyle1.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-transparent to-green-800/60" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 heading-underline">
            Style of <span className="text-amber-500 heading-decor">Travel</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Your adventure, your way. Discover the travel style that suits you best
          </p>
        </div>
      </section>

      {/* Travel Styles */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 heading-underline">
              Find Your <span className="text-amber-600 heading-decor">Travel Style</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Whether you're an adrenaline junkie or prefer a relaxed cultural experience, we have something for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {travelStyles.map((style, idx) => (
              <div 
                key={style.id}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 card-3d"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 image-3d-hover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-2 heading-decor">{style.title}</h3>
                  <p className="text-stone-600 mb-6">{style.description}</p>
                  
                  <h4 className="font-bold text-stone-800 mb-3">Popular Activities:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {style.activities.map((activity, i) => (
                      <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {activity}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/activities/${style.id === 'adventure' ? 'adrenaline' : style.id === 'wildlife' ? 'safari' : 'tour'}`}
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                  >
                    Explore This Style <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Green Theme */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-green-900 to-green-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 heading-underline">
              The Papio Africa <span className="text-amber-500 heading-decor">Difference</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              What sets us apart from other tour operators in Zimbabwe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all card-3d">
                <h3 className="text-xl font-bold text-white mb-3 heading-decor">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 heading-underline">
              How It <span className="text-amber-500 heading-decor">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Planning your adventure is easy with Papio Africa
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Choose Your Adventure', desc: 'Browse our destinations and activities' },
              { step: '2', title: 'Customize Your Trip', desc: 'Tell us your preferences and dates' },
              { step: '3', title: 'Get a Quote', desc: 'We\'ll create a personalized itinerary' },
              { step: '4', title: 'Adventure Awaits', desc: 'Book and prepare for the journey of a lifetime' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6 heading-underline">
                What\'s Included in Your Adventure
              </h2>
              <div className="space-y-4">
                {[
                  'Professional certified guides',
                  'All entrance fees and park tickets',
                  'Quality safety equipment',
                  'Comfortable transportation',
                  'Delicious local cuisine',
                  '24/7 customer support',
                  'Flexible cancellation policy',
                  'Travel insurance coordination'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <FiCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/images/papio lunch.png" 
                alt="What's Included"
                className="rounded-3xl shadow-2xl image-3d-hover"
                onError={(e) => e.target.src = 'https://placehold.co/600x500/d97706/white?text=Adventure+Awaits'}
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today and let\'s plan your perfect Zimbabwe experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/activities/quadbiking">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-105">
                Explore Activities
              </button>
            </Link>
            <Link to="/about/contact">
              <button className="border-2 border-white text-white font-semibold py-4 px-10 rounded-xl transition-all hover:bg-white hover:text-green-700">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}