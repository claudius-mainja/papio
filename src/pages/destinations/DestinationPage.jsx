import { useParams, Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiMapPin, FiClock, FiArrowRight, FiStar, FiCalendar, FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { destinations } from '../../data/destinations'
import { activities } from '../../data/activities'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

export default function DestinationPage() {
  const { slug } = useParams()
  const destination = destinations.find(d => d.slug === slug)
  
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Destination Not Found</h1>
          <Link to="/" className="text-amber-600 hover:underline">Return Home</Link>
        </div>
      </div>
    )
  }

  const relatedActivities = activities.filter(a => 
    a.id === 'safari' || a.id === 'tour' || a.id === 'river'
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section - Green Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 via-green-900 to-green-950">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${destination.heroImage || destination.image}')` }} />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 bg-green-900/70 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30">
            <FiMapPin className="text-amber-400" />
            <span className="text-amber-400 font-medium">{destination.region}, {destination.country}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">{destination.name}</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">{destination.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Overview */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">About {destination.name}</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">{destination.longDescription}</p>
              
              <h3 className="text-xl font-bold text-stone-800 mb-4">Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {destination.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-green-200">
                    <FiCheck className="text-green-600" />
                    <span className="text-stone-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info Card - Green Theme */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-8 border border-amber-500/30 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Info</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-amber-400" />
                    <span className="text-gray-200">{destination.region}, Zimbabwe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiClock className="text-amber-400" />
                    <span className="text-gray-200">{destination.tourCount} Tours Available</span>
                  </div>
                  <div className="flex items-center gap-3 pt-2 border-t border-green-600">
                    <span className="text-amber-400 font-bold text-2xl">From</span>
                    <span className="text-white font-bold text-3xl">${destination.priceFrom}</span>
                  </div>
                </div>

                <Link to="/about/contact" className="block">
                  <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Location Map</h2>
            <div className="h-96 rounded-3xl overflow-hidden shadow-xl">
              <MapContainer 
                center={[destination.location.lat, destination.location.lng]} 
                zoom={10} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[destination.location.lat, destination.location.lng]}>
                  <Popup>
                    <div className="text-center">
                      <strong>{destination.name}</strong>
                      <p>{destination.region}, Zimbabwe</p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Activities in this Destination - Gold Theme */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Activities in {destination.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.activities.slice(0, 6).map((activityId, idx) => {
                const activity = activities.find(a => a.id === activityId)
                if (!activity) return null
                return (
                  <Link key={idx} to={`/activities/${activity.slug}`} className="group">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-amber-400 transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={activity.image} 
                          alt={activity.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => e.target.src = 'https://placehold.co/400x300/d97706/white?text=Activity'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {activity.packages?.[0] ? `From $${activity.packages[0].price}` : 'View Activity'}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-stone-800 group-hover:text-amber-600 transition-colors">{activity.name}</h3>
                        <p className="text-sm text-stone-500 line-clamp-2 mt-1">{activity.description}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Testimonial */}
          {destination.testimonial && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Traveler Experience</h2>
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-8 border border-amber-500/30">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className={i < destination.testimonial.rating ? 'text-yellow-400' : 'text-green-400'} />
                  ))}
                </div>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">"{destination.testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                    {destination.testimonial.name.split(' ')[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{destination.testimonial.name.split(' ')[0]} {destination.testimonial.name.split(' ')[1]?.charAt(0)}.</p>
                    <p className="text-gray-400 text-sm">{destination.testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore {destination.name}?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you plan your perfect adventure to {destination.name}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@papioafricaadventures.com?subject=Booking+Inquiry+for+{destination.name}" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105">
                <FiCalendar className="mr-2" /> Book Now
              </a>
              <a href="https://wa.me/263773615333" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105">
                <FaWhatsapp className="mr-2" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}