export const destinations = [
  {
    id: 'victoria-falls',
    name: 'Victoria Falls',
    slug: 'victoria-falls',
    description: 'Known as "The Smoke that Thunders," Victoria Falls is one of the world\'s most spectacular natural wonders.',
    longDescription: 'Victoria Falls, locally known as Mosi-oa-Tunya ("The Smoke that Thunders"), is a spectacular waterfall on the Zambezi River at the border between Zimbabwe and Zambia. At 1,708 meters wide and 108 meters high, it is one of the largest and most spectacular waterfalls in the world.',
    location: { lat: -17.9244, lng: 25.8572 },
    country: 'Zimbabwe',
    region: 'Matabeleland North',
    highlights: ['World\'s Largest Waterfall', 'Adventure Capital of Africa', 'UNESCO World Heritage Site', 'Devil\'s Pool Swimming'],
    image: '/assets/images/vicfalls-landing.png',
    heroImage: '/assets/images/VicFallshero.png',
    activities: ['helicopter-tours', 'white-water-rafting', 'bungee-jumping', 'sunset-cruise', 'abseiling', 'gorge-swing'],
    testimonial: {
      name: 'Sarah Mitchell',
      location: 'United Kingdom',
      rating: 5,
      text: 'An absolutely mind-blowing experience! The team at Papio Africa made our Victoria Falls trip unforgettable.'
    },
    tourCount: 12,
    priceFrom: 65
  },
  {
    id: 'hwange',
    name: 'Hwange National Park',
    slug: 'hwange',
    description: 'Home to the Big Five and one of Africa\'s largest elephant populations, Hwange offers premier safari experiences.',
    longDescription: 'Hwange National Park is the largest national park in Zimbabwe, covering approximately 14,650 square kilometers. The park is renowned for its large elephant herds, diverse wildlife, and over 400 species of birds.',
    location: { lat: -18.7322, lng: 26.9389 },
    country: 'Zimbabwe',
    region: 'Matabeleland North',
    highlights: ['Big Five Safaris', 'Large Elephant Herds', 'Walking Safaris', 'Game Drives'],
    image: '/assets/images/matobo-landing.png',
    heroImage: '/assets/images/safarihero.png',
    activities: ['game-drives', 'walking-safari', 'night-drives', 'bird-watching'],
    testimonial: {
      name: 'James Richardson',
      location: 'South Africa',
      rating: 5,
      text: 'Witnessing the elephant herds at Hwange was magical. Papio Africa arranged an incredible guided safari.'
    },
    tourCount: 8,
    priceFrom: 150
  },
  {
    id: 'masvingo',
    name: 'Masvingo',
    slug: 'masvingo',
    description: 'Home to the ancient Great Zimbabwe ruins, Masvingo offers a unique blend of historical exploration and natural beauty.',
    longDescription: 'Masvingo is a historic town in southeastern Zimbabwe, best known as the home of Great Zimbabwe - the ruins of an ancient city that was once the capital of the Kingdom of Zimbabwe.',
    location: { lat: -20.0637, lng: 30.8257 },
    country: 'Zimbabwe',
    region: 'Masvingo',
    highlights: ['Great Zimbabwe Ruins', 'Lake Mutirikwe', 'Rock Art Sites', 'Cultural Tours'],
    image: '/assets/images/manaPools-landing.png',
    heroImage: '/assets/images/tourhero.png',
    activities: ['great-zimbabwe-tour', 'lake-tours', 'cultural-visits', 'rock-art-tours'],
    testimonial: {
      name: 'Emily Chang',
      location: 'Canada',
      rating: 5,
      text: 'The Great Zimbabwe ruins were beyond impressive. Learning about the history made this journey into the past come alive.'
    },
    tourCount: 5,
    priceFrom: 80
  },
  {
    id: 'kariba',
    name: 'Kariba',
    slug: 'kariba',
    description: 'Famous for its massive dam and houseboat holidays, Kariba offers unique lake-based adventures.',
    longDescription: 'Kariba is a town in northern Zimbabwe, famous for its massive dam - Kariba Dam - which created one of the world\'s largest man-made lakes, Lake Kariba.',
    location: { lat: -16.5187, lng: 28.7833 },
    country: 'Zimbabwe',
    region: 'Mashonaland North',
    highlights: ['Houseboat Holidays', 'Tiger Fishing', 'Matusadona Safaris', 'Sunset Cruises'],
    image: '/assets/images/river-island.png',
    heroImage: '/assets/images/riverhero.png',
    activities: ['houseboat-tours', 'fishing-tours', 'game-drives', 'sunset-cruises'],
    testimonial: {
      name: 'Michael Thompson',
      location: 'Australia',
      rating: 5,
      text: 'The houseboat experience in Kariba was phenomenal. Waking up to hippos and crocodiles nearby was magical!'
    },
    tourCount: 6,
    priceFrom: 200
  },
  {
    id: 'nyanga',
    name: 'Nyanga',
    slug: 'nyanga',
    description: 'Known as the "Adventure Capital of Zimbabwe," Nyanga offers mountain hiking and scenic waterfalls.',
    longDescription: 'Nyanga is a town in Zimbabwe\'s Eastern Highlands, known for its stunning mountain scenery, rolling hills, and waterfalls.',
    location: { lat: -18.2167, lng: 32.7500 },
    country: 'Zimbabwe',
    region: 'Manicaland',
    highlights: ['Mountain Hiking', 'Mtarazi Falls', 'Trout Fishing', 'Scenic Drives'],
    image: '/assets/images/Ourstory-wilderness.png',
    heroImage: '/assets/images/promise-bg.png',
    activities: ['mountain-hiking', 'waterfall-tours', 'trout-fishing', 'scenic-drives'],
    testimonial: {
      name: 'David Park',
      location: 'USA',
      rating: 5,
      text: 'The hiking in Nyanga was incredible! The views from the top were worth every step.'
    },
    tourCount: 4,
    priceFrom: 75
  },
  {
    id: 'gweru',
    name: 'Gweru',
    slug: 'gweru',
    description: 'Zimbabwe\'s third-largest city offers cultural experiences and colonial history.',
    longDescription: 'Gweru is the capital of Midlands Province and Zimbabwe\'s third-largest city, serving as a commercial and administrative center with a rich colonial history.',
    location: { lat: -19.4500, lng: 29.8167 },
    country: 'Zimbabwe',
    region: 'Midlands',
    highlights: ['Colonial History', 'Cultural Sites', 'Midlands Landscape', 'Local Markets'],
    image: '/assets/images/african village tour.png',
    heroImage: '/assets/images/OurStyle1.png',
    activities: ['city-tours', 'cultural-visits', 'market-tours', 'historical-tours'],
    testimonial: {
      name: 'Anna Schmidt',
      location: 'Germany',
      rating: 4,
      text: 'Gweru offered us a genuine glimpse into Zimbabwean life. The local markets were authentic and unforgettable.'
    },
    tourCount: 3,
    priceFrom: 50
  },
  {
    id: 'harare',
    name: 'Harare',
    slug: 'harare',
    description: 'Zimbabwe\'s vibrant capital city offers a mix of modern amenities and colonial architecture.',
    longDescription: 'Harare is the capital and largest city of Zimbabwe, known for its spacious boulevards and lush gardens, offering a blend of modern African culture and colonial-era architecture.',
    location: { lat: -17.8252, lng: 31.0335 },
    country: 'Zimbabwe',
    region: 'Harare',
    highlights: ['Botanical Gardens', 'Vibrant Nightlife', 'Shopping Districts', 'Historical Sites'],
    image: '/assets/images/papio lunch.png',
    heroImage: '/assets/images/stylle 2.png',
    activities: ['city-tours', 'museum-visits', 'shopping-tours', 'food-tours'],
    testimonial: {
      name: 'Robert Chen',
      location: 'Singapore',
      rating: 4,
      text: 'Harare surprised us with its beautiful gardens and vibrant culture. The city tour covered all the highlights.'
    },
    tourCount: 4,
    priceFrom: 45
  }
]