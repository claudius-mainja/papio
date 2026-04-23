export const activities = [
  {
    id: 'quadbiking',
    name: 'Quad Biking Adventures',
    slug: 'quadbiking',
    description: 'Experience the wild beauty of Zimbabwe\'s landscapes on four wheels with our thrilling quad biking adventures.',
    longDescription: 'Our quad biking adventures offer an exhilarating way to explore the diverse terrains around Victoria Falls. From scenic trails through the bush to challenging paths with stunning viewpoints, our guided tours cater to both beginners and experienced riders.',
    highlights: ['1-Hour Quick Thrill', '2-Hour Extended Adventure', 'Scenic Trails', 'Wildlife Spotting', 'Professional Guides', 'Safety Equipment Included'],
    image: '/assets/images/QuadbikeHero.png',
    heroImage: '/assets/images/QuadbikeHero.png',
    packages: [
      {
        id: 'qb-1hr',
        name: '1-Hour Adventure Tour',
        duration: '60 minutes',
        price: 60,
        location: 'Victoria Falls',
        description: 'Perfect for beginners and those short on time. Experience the thrill of quad biking through scenic trails.',
        included: ['Professional guide', 'Safety briefing', 'Helmet & gear', 'Water bottle'],
        highlights: ['Scenic bush trails', 'Beginner-friendly', 'Photo opportunities']
      },
      {
        id: 'qb-2hr',
        name: '2-Hour Extended Experience',
        duration: '120 minutes',
        price: 120,
        location: 'Victoria Falls',
        description: 'Dive deeper into the wilderness with our comprehensive quad biking experience.',
        included: ['Professional guide', 'Safety briefing', 'Helmet & gear', 'Refreshments', 'Photo stops'],
        highlights: ['Diverse terrain', 'Wildlife viewing', 'Panoramic viewpoints', 'Extended exploration']
      }
    ],
    testimonials: [
      { name: 'Tom Anderson', location: 'USA', rating: 5, text: 'Best adrenaline rush ever! The guides were professional and the views were incredible.' },
      { name: 'Lisa Johnson', location: 'Australia', rating: 5, text: 'Amazing experience! First time on a quad bike and they made me feel completely safe.' },
      { name: 'Mark Wilson', location: 'UK', rating: 5, text: 'Perfect mix of adventure and scenery. The wildlife we spotted while riding was an added bonus.' }
    ]
  },
  {
    id: 'tour',
    name: 'Tour Experiences',
    slug: 'tour',
    description: 'Discover the best of Zimbabwe with our carefully curated tour experiences.',
    longDescription: 'Our tour experiences are designed to showcase the best of Zimbabwe\'s natural wonders and cultural heritage. Whether you want to explore the magnificent Victoria Falls, discover ancient ruins, or immerse yourself in local culture, our expert guides will create unforgettable memories.',
    highlights: ['Guided Falls Tours', 'Cultural Experiences', 'Historical Sites', 'Scenic Routes', 'Expert Guides', 'Small Groups'],
    image: '/assets/images/tourhero.png',
    heroImage: '/assets/images/tourhero.png',
    packages: [
      {
        id: 'tour-vf',
        name: 'Victoria Falls Guided Tour',
        duration: '3-4 hours',
        price: 75,
        location: 'Victoria Falls',
        description: 'Explore the world\'s largest waterfall with our expert guides.',
        included: ['Expert guide', 'Park fees', 'Hotel transfers', 'Water bottle'],
        highlights: ['All major viewpoints', 'Rainforest walk', 'Photography tips']
      },
      {
        id: 'tour-great-zim',
        name: 'Great Zimbabwe Expedition',
        duration: 'Full day',
        price: 120,
        location: 'Masvingo',
        description: 'Journey to the ancient city of Great Zimbabwe and explore the mysterious ruins.',
        included: ['Expert historian guide', 'Lunch', 'Park fees', 'Transport'],
        highlights: ['Ancient ruins', 'Cultural insights', 'Lake views']
      }
    ],
    testimonials: [
      { name: 'Jennifer Blake', location: 'Canada', rating: 5, text: 'Our guide was incredibly knowledgeable. The falls tour exceeded all expectations!' },
      { name: 'Peter Davies', location: 'UK', rating: 5, text: 'The Great Zimbabwe tour was a highlight of our trip. The history came alive!' },
      { name: 'Maria Santos', location: 'Portugal', rating: 5, text: 'Well-organized tours with passionate guides. Every moment was worth it.' }
    ]
  },
  {
    id: 'air',
    name: 'Air Adventures',
    slug: 'air',
    description: 'Soar above Zimbabwe\'s spectacular landscapes with our air adventures.',
    longDescription: 'Experience Africa from a different perspective with our air adventures. From scenic helicopter flights over Victoria Falls to micro-light adventures over the bush, our air tours offer unparalleled views.',
    highlights: ['Helicopter Tours', 'Micro-light Flights', 'Scenic Aerial Views', 'Photo Opportunities', 'Professional Pilots', 'Safety First'],
    image: '/assets/images/airhero.png',
    heroImage: '/assets/images/airhero.png',
    packages: [
      {
        id: 'air-heli-15',
        name: '15-Minute Helicopter Flight',
        duration: '15 minutes',
        price: 150,
        location: 'Victoria Falls',
        description: 'Get a bird\'s eye view of the magnificent Victoria Falls.',
        included: ['Professional pilot', 'Safety briefing', 'Souvenir photos available'],
        highlights: ['The Falls from above', 'Batoka Gorge', 'Rainbow views']
      },
      {
        id: 'air-heli-30',
        name: '30-Minute Ultimate Flight',
        duration: '30 minutes',
        price: 250,
        location: 'Victoria Falls',
        description: 'Extended helicopter tour covering Victoria Falls, the Zambezi River, and the Batoka Gorge.',
        included: ['Professional pilot', 'Extended flight time', 'Photo opportunities'],
        highlights: ['Full Falls panorama', 'Gorge views', 'River meanders', 'Wildlife spotting']
      }
    ],
    testimonials: [
      { name: 'Chris Taylor', location: 'USA', rating: 5, text: 'The helicopter flight was the most amazing thing I\'ve ever done. Seeing the falls from above is indescribable!' },
      { name: 'Sophie Martin', location: 'France', rating: 5, text: 'Worth every penny! The pilot was fantastic and the views were once in a lifetime.' },
      { name: 'Ahmed Hassan', location: 'UAE', rating: 5, text: 'Incredible experience! The 30-minute flight was perfect. Don\'t miss this!' }
    ]
  },
  {
    id: 'river',
    name: 'River Adventures',
    slug: 'river',
    description: 'Navigate the mighty Zambezi River with our exciting river adventures.',
    longDescription: 'The Zambezi River offers some of the most thrilling water-based adventures in Africa. From the adrenaline-pumping white water rafting through the Batoka Gorge to relaxing sunset cruises, our river adventures cater to all preferences.',
    highlights: ['White Water Rafting', 'Sunset Cruises', 'Kayaking', 'River Boarding', 'Fishing Trips', 'Professional Guides'],
    image: '/assets/images/riverhero.png',
    heroImage: '/assets/images/riverhero.png',
    packages: [
      {
        id: 'river-rafting',
        name: 'White Water Rafting',
        duration: 'Full day',
        price: 140,
        location: 'Victoria Falls',
        description: 'Tackle the rapids of the Zambezi River on this world-class white water rafting adventure.',
        included: ['Expert guide', 'All equipment', 'Lunch', 'Hotel transfers'],
        highlights: ['Class V rapids', 'Gorge views', 'Adrenaline rush']
      },
      {
        id: 'river-sunset',
        name: 'Sunset Zambezi Cruise',
        duration: '2-3 hours',
        price: 65,
        location: 'Victoria Falls',
        description: 'Relax on a luxury sunset cruise along the Zambezi River.',
        included: ['Drinks & snacks', 'Expert captain', 'Hotel transfers', 'Guide'],
        highlights: ['African sunset', 'Hippo & crocodile spotting', 'Drinks included']
      }
    ],
    testimonials: [
      { name: 'Alex Rivera', location: 'Mexico', rating: 5, text: 'The white water rafting was absolutely epic! The guides knew exactly when to push us and when to calm us down.' },
      { name: 'Nina Patel', location: 'India', rating: 5, text: 'The sunset cruise was so romantic and peaceful. Saw hippos and crocodiles - amazing!' },
      { name: 'John Smith', location: 'New Zealand', rating: 5, text: 'Best rafting in the world! The rapids were intense but our guides kept us safe.' }
    ]
  },
  {
    id: 'adrenaline',
    name: 'Adrenaline Adventures',
    slug: 'adrenaline',
    description: 'Get your heart racing with our extreme adventures - bungee jumping, gorge swinging, and more.',
    longDescription: 'For thrill-seekers, Victoria Falls is the ultimate adventure destination. Our adrenaline adventures offer some of the most exciting experiences in Africa, from the iconic bungee jump off Victoria Falls Bridge to the 110-meter abseil into the Batoka Gorge.',
    highlights: ['Bungee Jumping', 'Gorge Swinging', 'Abseiling', 'Flying Fox', 'Zip Lining', 'World-Class Safety'],
    image: '/assets/images/AdrenalineHero.png',
    heroImage: '/assets/images/AdrenalineHero.png',
    packages: [
      {
        id: 'adrenaline-bungee',
        name: 'Victoria Falls Bungee Jump',
        duration: '2 hours',
        price: 160,
        location: 'Victoria Falls',
        description: 'Take the plunge from the iconic Victoria Falls Bridge - 111 meters above the Zambezi River.',
        included: ['Professional instructor', 'All equipment', 'Certificate', 'Photos available'],
        highlights: ['111m drop', 'Bridge views', 'Iconic location']
      },
      {
        id: 'adrenaline-swing',
        name: 'Gorge Swing',
        duration: '3 hours',
        price: 140,
        location: 'Victoria Falls',
        description: 'Swing through the Batoka Gorge on this thrilling experience.',
        included: ['Professional instructor', 'Safety gear', 'Transfers', 'Certificate'],
        highlights: ['120m swing', 'Gorge views', 'Multiple swings']
      }
    ],
    testimonials: [
      { name: 'Ryan Cooper', location: 'USA', rating: 5, text: 'The bungee jump was absolutely insane! The view before jumping is terrifying but amazing.' },
      { name: 'Emma Brown', location: 'Australia', rating: 5, text: 'Gorge swing was the highlight of my Africa trip! The instructors made it so much fun.' },
      { name: 'Daniel Lee', location: 'South Korea', rating: 5, text: 'Must do! The adrenaline rush is incredible. The team is super professional and safe.' }
    ]
  },
  {
    id: 'safari',
    name: 'Safari Adventures',
    slug: 'safari',
    description: 'Experience Africa\'s wildlife with our safari adventures in Zimbabwe.',
    longDescription: 'Zimbabwe offers some of the best safari experiences in Africa. From the elephant-rich plains of Hwange to the shores of Lake Kariba, our safari adventures bring you face-to-face with the Big Five and more.',
    highlights: ['Big Five Encounters', 'Elephant Herds', 'Walking Safaris', 'Night Drives', 'Bird Watching', 'Expert Guides'],
    image: '/assets/images/safarihero.png',
    heroImage: '/assets/images/safarihero.png',
    packages: [
      {
        id: 'safari-hwange',
        name: 'Hwange Full Day Safari',
        duration: 'Full day',
        price: 180,
        location: 'Hwange',
        description: 'Explore Hwange National Park with chances to see elephants, lions, leopards, and more.',
        included: ['Expert guide', 'Game drives', 'Lunch', 'Park fees', 'Transfers'],
        highlights: ['Big Five', 'Large elephant herds', 'Diverse wildlife']
      },
      {
        id: 'safari-walking',
        name: 'Walking Safari Adventure',
        duration: '3-4 hours',
        price: 90,
        location: 'Victoria Falls / Hwange',
        description: 'Experience the bush on foot with our guided walking safaris.',
        included: ['Professional guide', 'Safety equipment', 'Refreshments', 'Transfers'],
        highlights: ['Close wildlife encounters', 'Bush skills', 'Smaller groups']
      }
    ],
    testimonials: [
      { name: 'William Foster', location: 'UK', rating: 5, text: 'Saw the Big Five in one day! Our guide was exceptional at finding wildlife.' },
      { name: 'Sarah Green', location: 'South Africa', rating: 5, text: 'The walking safari was incredible. Feeling the bush on foot is a completely different experience.' },
      { name: 'Kevin O\'Brien', location: 'Ireland', rating: 5, text: 'Hwange exceeded all expectations. The elephant encounters were magical.' }
    ]
  }
]