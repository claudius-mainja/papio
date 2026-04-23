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
        name: 'Tour of Victoria Falls',
        duration: '3-4 hours',
        price: 25,
        parkFees: 50,
        location: 'Victoria Falls',
        description: 'Witness the awe-inspiring power of Victoria Falls, one of the Seven Natural Wonders of the World. Feel the mist on your face as you explore multiple viewpoints of this magnificent cascade.',
        included: ['Expert guide', 'Park fees', 'Hotel transfers', 'Water bottle'],
        highlights: ['All major viewpoints', 'Rainforest walk', 'Photography tips']
      },
      {
        id: 'tour-village',
        name: 'African Village Tour',
        duration: '3-4 hours',
        price: 68,
        parkFees: 50,
        location: 'Victoria Falls',
        description: 'Immerse yourself in authentic African culture. Visit traditional villages, meet local families, and discover age-old customs, crafts, and storytelling traditions that have been passed down through generations.',
        included: ['Village guide', 'Cultural activities', 'Traditional lunch', 'Hotel transfers'],
        highlights: ['Authentic cultural encounters', 'Traditional crafts', 'Local families']
      },
      {
        id: 'tour-lunch',
        name: 'Papio Home Lunch',
        duration: '2-3 hours',
        price: 25,
        location: 'Victoria Falls',
        description: 'Savor authentic African cuisine in a warm, family setting. Enjoy traditional dishes prepared with fresh, local ingredients while sharing stories and laughter with your hosts in their welcoming home.',
        included: ['Traditional meal', 'Family experience', 'Hotel transfers'],
        highlights: ['Authentic cuisine', 'Family setting', 'Local ingredients']
      },
      {
        id: 'tour-boma',
        name: 'Boma Dinner & Drum Show',
        duration: '4-5 hours',
        price: 75,
        location: 'Victoria Falls',
        description: 'Experience an unforgettable evening under the African stars. Enjoy a traditional feast accompanied by rhythmic drum performances and cultural dances, with convenient transfers included.',
        included: ['Dinner', 'Drum show', 'Cultural performance', 'Transfers'],
        highlights: ['African stars', 'Traditional feast', 'Drum performances']
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
        id: 'air-heli-12',
        name: 'Quick Discovery Flight',
        duration: '12-13 minutes',
        price: 150,
        parkFees: 25,
        location: 'Victoria Falls',
        description: 'Perfect for first-time flyers, this helicopter adventure gives you an incredible overview of Victoria Falls and the surrounding landscape. Witness the power and beauty of the falls from above.',
        included: ['Professional pilot', 'Safety briefing', 'Souvenir photos available'],
        highlights: ['The Falls from above', 'Batoka Gorge', 'Rainbow views']
      },
      {
        id: 'air-heli-25',
        name: 'Extended Adventure Flight',
        duration: '25 minutes',
        price: 284,
        parkFees: 30,
        location: 'Victoria Falls',
        description: 'Our most comprehensive helicopter experience. Enjoy extended flight time with multiple viewpoints of Victoria Falls, the Zambezi River, and the surrounding national parks.',
        included: ['Professional pilot', 'Extended flight time', 'Photo opportunities'],
        highlights: ['Full Falls panorama', 'Gorge views', 'River meanders', 'Wildlife spotting']
      },
      {
        id: 'air-micro-12',
        name: 'Microlight Discovery (Zambia)',
        duration: '12-15 minutes',
        price: 179,
        parkFees: 6,
        location: 'Livingstone, Zambia',
        description: 'Experience the thrill of open-air flying with our microlight adventures. Feel the wind as you soar over Victoria Falls from the Zambian side, offering unique perspectives and incredible photo opportunities.',
        included: ['Professional pilot', 'Safety briefing', 'Photo opportunities'],
        highlights: ['Open-air flight', 'Zambian perspective', 'Unique viewpoints']
      },
      {
        id: 'air-micro-25',
        name: 'Extended Microlight Adventure',
        duration: '25-30 minutes',
        price: 360,
        parkFees: 6,
        location: 'Livingstone, Zambia',
        description: 'Our ultimate microlight experience offers extended flight time for the complete aerial tour. Perfect for photography enthusiasts and those seeking the most comprehensive microlight adventure over Victoria Falls.',
        included: ['Professional pilot', 'Extended flight', 'Photography time'],
        highlights: ['Complete aerial tour', 'Photography enthusiasts', 'Extended exploration']
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
        id: 'river-sunset',
        name: 'Zambezi Sunset Cruise',
        duration: '2-3 hours',
        price: 40,
        parkFees: 10,
        location: 'Victoria Falls',
        description: 'Watch the African sun paint the sky in brilliant colors as you cruise along the Zambezi River. Perfect for couples and families seeking a peaceful evening on the water with stunning views of the Victoria Falls spray.',
        included: ['Drinks & snacks', 'Expert captain', 'Hotel transfers', 'Guide'],
        highlights: ['African sunset', 'Hippo & crocodile spotting', 'Drinks included']
      },
      {
        id: 'river-luxury',
        name: 'Zambezi Luxury Sunset Cruise',
        duration: '2.5-3 hours',
        price: 74,
        parkFees: 10,
        location: 'Victoria Falls',
        description: 'Elevate your river experience with our premium sunset cruise. Enjoy enhanced comfort, exclusive seating, premium beverages, and gourmet snacks as you witness one of nature\'s most spectacular displays.',
        included: ['Premium drinks', 'Gourmet snacks', 'Luxury seating', 'Hotel transfers'],
        highlights: ['Premium experience', 'Gourmet snacks', 'Exclusive seating']
      },
      {
        id: 'river-dinner',
        name: 'Dinner Cruise',
        duration: '3-4 hours',
        price: 75,
        parkFees: 10,
        location: 'Victoria Falls',
        description: 'Combine the romance of a sunset cruise with a delicious dinner aboard our floating restaurant. Savor carefully prepared cuisine while the Zambezi River provides the perfect backdrop for an unforgettable evening.',
        included: ['Full dinner', 'Drinks', 'Live entertainment', 'Hotel transfers'],
        highlights: ['Romantic evening', 'Floating restaurant', 'Fine cuisine']
      },
      {
        id: 'river-island',
        name: 'Livingstone Island Experiences',
        duration: '2-3 hours',
        price: 95,
        parkFees: 25,
        location: 'Livingstone Island',
        description: 'Visit the legendary Livingstone Island in Zambia, where Dr. David Livingstone first viewed the Victoria Falls. Choose from breakfast, lunch, or high tea experiences on this exclusive island at the edge of the falls.',
        included: ['Island experience', 'Meals included', 'Park fees', 'Transfers'],
        highlights: ['Historical site', 'Exclusive location', 'Multiple meal options']
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
        id: 'adrenaline-rafting',
        name: 'White Water Rafting',
        duration: 'Full day',
        price: 120,
        parkFees: 10,
        location: 'Victoria Falls',
        description: 'Navigate the mighty Zambezi River\'s Grade 5 rapids. An unforgettable journey through one of the world\'s most spectacular river systems.',
        included: ['Expert guide', 'All equipment', 'Lunch', 'Hotel transfers'],
        highlights: ['Grade V rapids', 'Gorge views', 'Adrenaline rush']
      },
      {
        id: 'adrenaline-swing',
        name: 'Gorge Swing',
        duration: '2 hours',
        price: 105,
        parkFees: 3,
        location: 'Victoria Falls',
        description: 'Take the leap of faith with a 120-meter free fall followed by a massive swing across the gorge. Pure adrenaline rush!',
        included: ['Professional instructor', 'Safety gear', 'Certificate', 'Transfers'],
        highlights: ['120m swing', 'Gorge views', 'Multiple swings']
      },
      {
        id: 'adrenaline-tandem',
        name: 'Tandem Gorge Swing',
        duration: '2 hours',
        price: 158,
        parkFees: 3,
        location: 'Victoria Falls',
        description: 'Share the ultimate thrill with your partner. Experience the gorge swing together in this unforgettable tandem adventure.',
        included: ['Professional instructor', 'Safety gear', 'Certificate', 'Transfers'],
        highlights: ['Shared experience', '120m swing', 'Couples adventure']
      },
      {
        id: 'adrenaline-zip',
        name: 'Zip Line',
        duration: '1 hour',
        price: 84,
        parkFees: 3,
        location: 'Victoria Falls',
        description: 'Soar across the gorge at high speed on our thrilling zip line. Experience breathtaking views as you glide through the air.',
        included: ['Professional instructor', 'Safety gear', 'Transfers'],
        highlights: ['High speed', 'Gorge views', 'Adrenaline rush']
      },
      {
        id: 'adrenaline-flyingfox',
        name: 'Flying Fox',
        duration: '45 minutes',
        price: 53,
        parkFees: 3,
        location: 'Victoria Falls',
        description: 'Perfect for first-time adventurers. Enjoy a gentler but equally exciting ride across the beautiful Victoria Falls gorge.',
        included: ['Professional instructor', 'Safety gear', 'Transfers'],
        highlights: ['Beginner-friendly', 'Gorge views', 'Exciting ride']
      },
      {
        id: 'adrenaline-canopy',
        name: 'Canopy Tour',
        duration: '90 minutes',
        price: 64,
        parkFees: 3,
        location: 'Victoria Falls',
        description: 'Explore the rainforest canopy with multiple zip lines and platforms. A perfect blend of adventure and nature discovery.',
        included: ['Professional guide', 'Safety equipment', 'Transfers'],
        highlights: ['Rainforest canopy', 'Multiple zip lines', 'Nature discovery']
      },
      {
        id: 'adrenaline-highwire',
        name: 'Highwire Pass',
        duration: 'Half day',
        price: 163,
        parkFees: 3,
        location: 'Victoria Falls',
        description: 'The ultimate adrenaline package combining multiple high-wire activities. For the true thrill-seekers who want it all.',
        included: ['Professional instructor', 'All activities', 'Certificate', 'Transfers'],
        highlights: ['Multiple activities', 'Premium package', 'True thrill-seekers']
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
        id: 'safari-chobe',
        name: 'Full Day Chobe Trip',
        duration: 'Full day',
        price: 181,
        parkFees: 25,
        location: 'Chobe, Botswana',
        description: 'Experience the legendary Chobe National Park with its massive elephant herds and diverse wildlife. A full day of river cruises and game drives awaits.',
        included: ['Expert guide', 'Game drives', 'River cruise', 'Lunch', 'Park fees', 'Transfers'],
        highlights: ['Massive elephant herds', 'River cruise', 'Full day adventure']
      },
      {
        id: 'safari-elephant',
        name: 'Elephant Encounter',
        duration: '4 hours',
        price: 126,
        parkFees: 10,
        location: 'Victoria Falls',
        description: 'Get up close with these gentle giants in their natural habitat. Learn about elephant behavior and conservation efforts.',
        included: ['Expert guide', 'Elephant interaction', 'Park fees', 'Transfers'],
        highlights: ['Close encounters', 'Conservation education', 'Gentle giants']
      },
      {
        id: 'safari-art',
        name: 'Elephant Art',
        duration: '3 hours',
        price: 158,
        parkFees: 10,
        location: 'Victoria Falls',
        description: 'Witness the incredible artistic abilities of elephants as they create unique paintings. A truly mesmerizing cultural experience.',
        included: ['Elephant art show', 'Artwork included', 'Park fees', 'Transfers'],
        highlights: ['Artistic elephants', 'Unique experience', 'Take home artwork']
      },
      {
        id: 'safari-game',
        name: 'Game Drive',
        duration: '3-4 hours',
        price: 71,
        parkFees: 15,
        location: 'Victoria Falls',
        description: 'Explore the African wilderness in open vehicles. Spot lions, leopards, buffalo, and other magnificent wildlife.',
        included: ['Expert guide', 'Open vehicle', 'Park fees', 'Transfers'],
        highlights: ['Open vehicle', 'Big Five opportunities', 'Expert guides']
      },
      {
        id: 'safari-night',
        name: 'Night Drive & Bush Dinner',
        duration: 'Evening',
        price: 158,
        parkFees: 5,
        location: 'Victoria Falls',
        description: 'Experience the African night with nocturnal wildlife viewing followed by a traditional bush dinner under the stars.',
        included: ['Night game drive', 'Bush dinner', 'Park fees', 'Transfers'],
        highlights: ['Nocturnal wildlife', 'Bush dinner', 'Star-filled skies']
      },
      {
        id: 'safari-horse',
        name: 'Horse Back Safari',
        duration: '2-3 hours',
        price: 95,
        parkFees: 20,
        location: 'Victoria Falls',
        description: 'Explore the African bush on horseback for a unique perspective of wildlife and landscapes. Perfect for adventure seekers.',
        included: ['Experienced guide', 'Horse rental', 'Park fees', 'Transfers'],
        highlights: ['Unique perspective', 'Horseback riding', 'Wildlife encounters']
      },
      {
        id: 'safari-croc',
        name: 'Crocodile Cage Dive',
        duration: '1 hour',
        price: 70,
        parkFees: 0,
        location: 'Victoria Falls',
        description: 'Experience the ultimate adrenaline rush with our safe crocodile cage diving experience. Face these ancient predators up close.',
        included: ['Safety equipment', 'Professional diver', 'No park fees'],
        highlights: ['Close encounters', 'Safe cage', 'Ancient predators']
      }
    ],
    testimonials: [
      { name: 'William Foster', location: 'UK', rating: 5, text: 'Saw the Big Five in one day! Our guide was exceptional at finding wildlife.' },
      { name: 'Sarah Green', location: 'South Africa', rating: 5, text: 'The walking safari was incredible. Feeling the bush on foot is a completely different experience.' },
      { name: 'Kevin O\'Brien', location: 'Ireland', rating: 5, text: 'Hwange exceeded all expectations. The elephant encounters were magical.' }
    ]
  }
]