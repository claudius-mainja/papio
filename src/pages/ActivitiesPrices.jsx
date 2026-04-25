import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock, FiMapPin, FiCheck } from 'react-icons/fi'
import { activities } from '../data/activities'

export default function ActivitiesPrices() {
  const featuredQuadbike = activities.find(a => a.id === 'quadbiking')
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 via-green-900 to-green-950">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/QuadbikeHero.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-900/50 to-green-800/70" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 heading-underline">
            Activities <span className="text-amber-500 heading-decor">&</span> Prices
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            View all our adventure activities and their prices. All prices are inclusive of park fees and transfers.
          </p>
        </div>
      </section>

      {/* Featured Quadbike Section */}
      {featuredQuadbike && (
        <section className="py-16 bg-gradient-to-br from-green-700 via-green-800 to-amber-900 relative">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/assets/images/QuadbikeHero.png')" }} />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 font-medium mb-4">
                FEATURED ACTIVITY
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 heading-underline">
                <span className="text-amber-500 heading-decor">Quad Biking</span> Adventures
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredQuadbike.packages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden card-3d">
                  <div className="relative h-48">
                    <img 
                      src={pkg.id === 'qb-1hr' ? '/assets/images/QB1.png' : '/assets/images/QB2.png'} 
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-amber-600 px-3 py-1 rounded-lg text-sm font-bold">{pkg.duration}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stone-800 mb-2">{pkg.name}</h3>
                    <p className="text-stone-600 text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-amber-600">${pkg.price}</span>
                        <span className="text-stone-500 text-sm">/person</span>
                      </div>
                      <Link 
                        to={`/activities/${featuredQuadbike.slug}`}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all hover:scale-105"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Activities by Category */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          {activities.filter(a => a.id !== 'quadbiking').map((activity) => (
            <div key={activity.id} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2 heading-underline">
                  {activity.name}
                </h2>
                <p className="text-stone-600">{activity.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activity.packages.map((pkg) => (
                  <div key={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100 card-3d">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-stone-800">{pkg.name}</h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <FiClock className="w-4 h-4" />
                          <span>{pkg.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-stone-600 text-sm mb-4">{pkg.description}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-stone-500 mb-4">
                        <FiMapPin className="w-4 h-4 text-amber-500" />
                        <span>{pkg.location}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-amber-600">${pkg.price}</span>
                          <span className="text-stone-500 text-xs block">Inclusive of park fees & transfers</span>
                        </div>
                        <Link 
                          to={`/activities/${activity.slug}`}
                          className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
                        >
                          View <FiArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Adventure?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to book any of these exciting activities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/263773615333" className="bg-white text-green-700 font-bold py-3 px-8 rounded-xl hover:scale-105 transition-all">
              WhatsApp Us
            </a>
            <a href="mailto:info@papioafricaadventures.com" className="bg-amber-500 text-white font-bold py-3 px-8 rounded-xl hover:scale-105 transition-all">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}