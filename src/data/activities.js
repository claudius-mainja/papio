export const activities = [
  // Quadbiking - Keep existing as featured
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

  // Safari Activities
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
        name: 'Chobe Day Trip',
        duration: 'Full day',
        price: 200,
        location: 'Chobe, Botswana',
        description: 'Experience the legendary Chobe National Park with its massive elephant herds and diverse wildlife.',
        included: ['Expert guide', 'Game drives', 'River cruise', 'Lunch', 'Park fees', 'Transfers'],
        highlights: ['Massive elephant herds', 'River cruise', 'Full day adventure']
      },
      {
        id: 'safari-night',
        name: 'Night Game Drive',
        duration: 'Evening',
        price: 207,
        location: 'Victoria Falls',
        description: 'Experience the African night with nocturnal wildlife viewing followed by incredible sightings.',
        included: ['Night game drive', 'Professional guide', 'Park fees', 'Transfers'],
        highlights: ['Nocturnal wildlife', 'Unique experience', 'Expert guides']
      },
      {
        id: 'safari-zambezi',
        name: 'Zambezi Game Drive',
        duration: '3-4 hours',
        price: 135,
        location: 'Victoria Falls',
        description: 'Explore the African wilderness along the Zambezi River with chances to see hippos, crocodiles, and more.',
        included: ['Expert guide', 'Game drive', 'Park fees', 'Transfers'],
        highlights: ['River views', 'Wildlife encounters', 'Professional guides']
      },
      {
        id: 'safari-walk',
        name: 'Nature Walk',
        duration: '2-3 hours',
        price: 140,
        location: 'Victoria Falls',
        description: 'Explore the bush on foot with our guided nature walks. Experience wildlife up close and learn about plants and tracks.',
        included: ['Professional guide', 'Safety equipment', 'Transfers'],
        highlights: ['Bush experience', 'Wildlife tracking', 'Learn nature']
      },
      {
        id: 'safari-bird',
        name: 'Bird Watching Safari',
        duration: '3-4 hours',
        price: 194,
        location: 'Victoria Falls',
        description: 'Discover over 400 species of birds with our specialized bird watching safari tours.',
        included: ['Expert birder guide', 'Binoculars', 'Field guide', 'Transfers'],
        highlights: ['400+ bird species', 'Expert guides', 'Rare sightings']
      }
    ],
    testimonials: [
      { name: 'William Foster', location: 'UK', rating: 5, text: 'Saw the Big Five in one day! Our guide was exceptional at finding wildlife.' },
      { name: 'Sarah Green', location: 'South Africa', rating: 5, text: 'The walking safari was incredible. Feeling the bush on foot is a completely different experience.' },
      { name: 'Kevin O\'Brien', location: 'Ireland', rating: 5, text: 'Hwange exceeded all expectations. The elephant encounters were magical.' }
    ]
  },

  // River Activities
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
        name: 'Sunset Cruise',
        duration: '2-3 hours',
        price: 75,
        location: 'Victoria Falls',
        description: 'Watch the African sun paint the sky in brilliant colors as you cruise along the Zambezi River.',
        included: ['Drinks & snacks', 'Expert captain', 'Hotel transfers', 'Guide'],
        highlights: ['African sunset', 'Hippo & crocodile spotting', 'Drinks included']
      },
      {
        id: 'river-luxury',
        name: 'Luxury Cruise',
        duration: '2.5-3 hours',
        price: 81,
        location: 'Victoria Falls',
        description: 'Elevate your river experience with our premium sunset cruise with enhanced comfort and premium beverages.',
        included: ['Premium drinks', 'Gourmet snacks', 'Luxury seating', 'Hotel transfers'],
        highlights: ['Premium experience', 'Gourmet snacks', 'Exclusive seating']
      },
      {
        id: 'river-dinner',
        name: 'Dinner Cruise',
        duration: '3-4 hours',
        price: 122,
        location: 'Victoria Falls',
        description: 'Combine the romance of a sunset cruise with a delicious dinner aboard our floating restaurant.',
        included: ['Full dinner', 'Drinks', 'Live entertainment', 'Hotel transfers'],
        highlights: ['Romantic evening', 'Floating restaurant', 'Fine cuisine']
      },
      {
        id: 'river-sunrise',
        name: 'Sunrise Cruise',
        duration: '2-3 hours',
        price: 105,
        location: 'Victoria Falls',
        description: 'Start your day with a magical sunrise cruise on the Zambezi River with stunning morning views.',
        included: ['Breakfast', 'Coffee & drinks', 'Expert captain', 'Hotel transfers'],
        highlights: ['Morning magic', 'Sunrise views', 'Breakfast included']
      },
      {
        id: 'river-lunch',
        name: 'Lunch Cruise',
        duration: '2-3 hours',
        price: 105,
        location: 'Victoria Falls',
        description: 'Enjoy a delicious lunch while cruising the Zambezi River with beautiful scenery.',
        included: ['Full lunch', 'Drinks', 'Expert captain', 'Hotel transfers'],
        highlights: ['Lunch on the water', 'Beautiful scenery', 'Relaxing experience']
      },
      {
        id: 'river-canoe',
        name: 'Canoeing Trip',
        duration: '3-4 hours',
        price: 196,
        location: 'Victoria Falls',
        description: 'Paddle your way through the Zambezi River on an exciting canoeing adventure.',
        included: ['Canoe & equipment', 'Professional guide', 'Lunch', 'Transfers'],
        highlights: ['Active adventure', 'River paddling', 'Wildlife viewing']
      },
      {
        id: 'river-rafting',
        name: 'White Water Rafting',
        duration: 'Full day',
        price: 173,
        location: 'Victoria Falls',
        description: 'Navigate the mighty Zambezi River\'s Grade 5 rapids for an unforgettable adventure.',
        included: ['Expert guide', 'All equipment', 'Lunch', 'Hotel transfers'],
        highlights: ['Grade V rapids', 'Gorge views', 'Adrenaline rush']
      },
      {
        id: 'river-fishing',
        name: 'Fishing Trip',
        duration: '4-5 hours',
        price: 165,
        location: 'Victoria Falls',
        description: 'Catch the legendary Tiger Fish on the Zambezi River with our guided fishing trips.',
        included: ['Fishing equipment', 'Expert guide', 'Refreshments', 'Transfers'],
        highlights: ['Tiger fishing', 'Expert guides', 'Unique experience']
      }
    ],
    testimonials: [
      { name: 'Alex Rivera', location: 'Mexico', rating: 5, text: 'The sunset cruise was so romantic and peaceful. Saw hippos and crocodiles - amazing!' },
      { name: 'Nina Patel', location: 'India', rating: 5, text: 'The white water rafting was absolutely epic! The guides knew exactly when to push us and when to calm us down.' },
      { name: 'John Smith', location: 'New Zealand', rating: 5, text: 'Best fishing trip ever! Caught multiple Tiger Fish.' }
    ]
  },

  // Air Activities
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
        id: 'air-heli-short',
        name: 'Helicopter Short Flight',
        duration: '12-15 minutes',
        price: 202,
        location: 'Victoria Falls',
        description: 'Get a bird\'s eye view of the magnificent Victoria Falls on this thrilling helicopter ride.',
        included: ['Professional pilot', 'Safety briefing', 'Souvenir photos available'],
        highlights: ['The Falls from above', 'Batoka Gorge', 'Rainbow views']
      },
      {
        id: 'air-heli-long',
        name: 'Helicopter Long Flight',
        duration: '25-30 minutes',
        price: 365,
        location: 'Victoria Falls',
        description: 'Our most comprehensive helicopter experience with extended flight time over Victoria Falls and the Zambezi River.',
        included: ['Professional pilot', 'Extended flight time', 'Photo opportunities'],
        highlights: ['Full Falls panorama', 'Gorge views', 'River meanders', 'Wildlife spotting']
      },
      {
        id: 'air-micro-short',
        name: 'Microlight Short Flight',
        duration: '12-15 minutes',
        price: 220,
        location: 'Livingstone, Zambia',
        description: 'Experience the thrill of open-air flying with our microlight adventures over Victoria Falls.',
        included: ['Professional pilot', 'Safety briefing', 'Photo opportunities'],
        highlights: ['Open-air flight', 'Zambian perspective', 'Unique viewpoints']
      },
      {
        id: 'air-micro-long',
        name: 'Microlight Long Flight',
        duration: '25-30 minutes',
        price: 378,
        location: 'Livingstone, Zambia',
        description: 'Our ultimate microlight experience for the complete aerial tour over Victoria Falls.',
        included: ['Professional pilot', 'Extended flight', 'Photography time'],
        highlights: ['Complete aerial tour', 'Photography enthusiasts', 'Extended exploration']
      }
    ],
    testimonials: [
      { name: 'Chris Taylor', location: 'USA', rating: 5, text: 'The helicopter flight was the most amazing thing I\'ve ever done. Seeing the falls from above is indescribable!' },
      { name: 'Sophie Martin', location: 'France', rating: 5, text: 'Worth every penny! The pilot was fantastic and the views were once in a lifetime.' },
      { name: 'Ahmed Hassan', location: 'UAE', rating: 5, text: 'Incredible experience! The 30-minute flight was perfect.' }
    ]
  },

  // Adrenaline Activities
  {
    id: 'adrenaline',
    name: 'Adrenaline Adventures',
    slug: 'adrenaline',
    description: 'Get your heart racing with our extreme adventures - bungee jumping, gorge swinging, and more.',
    longDescription: 'For thrill-seekers, Victoria Falls is the ultimate adventure destination. Our adrenaline adventures offer some of the most exciting experiences in Africa.',
    highlights: ['Bungee Jumping', 'Gorge Swinging', 'Zipline', 'Flying Fox', 'Tandem Experiences', 'World-Class Safety'],
    image: '/assets/images/AdrenalineHero.png',
    heroImage: '/assets/images/AdrenalineHero.png',
    packages: [
      {
        id: 'adrenaline-bungee',
        name: 'Bungee Jumping',
        duration: '2 hours',
        price: 194,
        location: 'Victoria Falls Bridge',
        description: 'Take the plunge from the iconic Victoria Falls Bridge - 111 meters above the Zambezi River.',
        included: ['Professional instructor', 'All equipment', 'Certificate', 'Photos available'],
        highlights: ['111m drop', 'Bridge views', 'Iconic location']
      },
      {
        id: 'adrenaline-swing',
        name: 'Gorge Swing',
        duration: '2 hours',
        price: 135,
        location: 'Victoria Falls',
        description: 'Take the leap of faith with a 120-meter free fall followed by a massive swing across the gorge.',
        included: ['Professional instructor', 'Safety gear', 'Certificate', 'Transfers'],
        highlights: ['120m swing', 'Gorge views', 'Multiple swings']
      },
      {
        id: 'adrenaline-zipline',
        name: 'Zipline',
        duration: '1 hour',
        price: 110,
        location: 'Victoria Falls',
        description: 'Soar across the gorge at high speed on our thrilling zip line experience.',
        included: ['Professional instructor', 'Safety gear', 'Transfers'],
        highlights: ['High speed', 'Gorge views', 'Adrenaline rush']
      },
      {
        id: 'adrenaline-tandem-swing',
        name: 'Tandem Gorge Swing',
        duration: '2 hours',
        price: 193,
        location: 'Victoria Falls',
        description: 'Share the ultimate thrill with your partner on the tandem gorge swing.',
        included: ['Professional instructor', 'Safety gear', 'Certificate', 'Transfers'],
        highlights: ['Shared experience', '120m swing', 'Couples adventure']
      },
      {
        id: 'adrenaline-tandem-zipline',
        name: 'Tandem Zipline',
        duration: '1 hour',
        price: 160,
        location: 'Victoria Falls',
        description: 'Double the fun with our tandem zip line experience racing side by side.',
        included: ['Professional instructor', 'Safety gear', 'Transfers'],
        highlights: ['Tandem experience', 'High speed', 'Race together']
      },
      {
        id: 'adrenaline-flyingfox',
        name: 'Flying Fox',
        duration: '45 minutes',
        price: 70,
        location: 'Victoria Falls',
        description: 'Perfect for first-time adventurers. Enjoy a gentler but equally exciting ride across the gorge.',
        included: ['Professional instructor', 'Safety gear', 'Transfers'],
        highlights: ['Beginner-friendly', 'Gorge views', 'Exciting ride']
      }
    ],
    testimonials: [
      { name: 'Ryan Cooper', location: 'USA', rating: 5, text: 'The bungee jump was absolutely insane! The view before jumping is terrifying but amazing.' },
      { name: 'Emma Brown', location: 'Australia', rating: 5, text: 'Gorge swing was the highlight of my Africa trip! The instructors made it so much fun.' },
      { name: 'Daniel Lee', location: 'South Korea', rating: 5, text: 'Must do! The adrenaline rush is incredible.' }
    ]
  },

  // Tours Activities
  {
    id: 'tour',
    name: 'Tour Experiences',
    slug: 'tour',
    description: 'Discover the best of Zimbabwe with our carefully curated tour experiences.',
    longDescription: 'Our tour experiences are designed to showcase the best of Zimbabwe\'s natural wonders and cultural heritage.',
    highlights: ['Guided Falls Tours', 'Cultural Experiences', 'Historical Sites', 'Scenic Routes', 'Expert Guides', 'Small Groups'],
    image: '/assets/images/tourhero.png',
    heroImage: '/assets/images/tourhero.png',
    packages: [
      {
        id: 'tour-falls-zim',
        name: 'Guided Falls - Zimbabwe',
        duration: '3-4 hours',
        price: 90,
        location: 'Victoria Falls, Zimbabwe',
        description: 'Witness the awe-inspiring power of Victoria Falls from the Zimbabwean side with our expert guides.',
        included: ['Expert guide', 'Park fees', 'Hotel transfers', 'Water bottle'],
        highlights: ['Zimbabwean views', 'Rainforest walk', 'Photography tips']
      },
      {
        id: 'tour-falls-zam',
        name: 'Guided Falls - Zambia',
        duration: '3-4 hours',
        price: 75,
        location: 'Livingstone, Zambia',
        description: 'Experience Victoria Falls from the Zambian side with stunning views and expert commentary.',
        included: ['Expert guide', 'Park fees', 'Transfers', 'Water bottle'],
        highlights: ['Zambian perspective', 'Devil\'s Pool access', 'Livingstone Island']
      },
      {
        id: 'tour-bridge',
        name: 'Bridge Tour',
        duration: '1-2 hours',
        price: 76,
        location: 'Victoria Falls Bridge',
        description: 'Walk across the iconic Victoria Falls Bridge with guided historical commentary.',
        included: ['Expert guide', 'Bridge access', 'Historical commentary', 'Photo opportunities'],
        highlights: ['Historic bridge', 'Border crossing views', 'Engineering marvel']
      },
      {
        id: 'tour-city',
        name: 'City Tour',
        duration: '3-4 hours',
        price: 50,
        location: 'Victoria Falls Town',
        description: 'Explore Victoria Falls town with its markets, shops, and local culture.',
        included: ['Expert guide', 'Hotel pickups', 'Market visits', 'Shopping assistance'],
        highlights: ['Local culture', 'Shopping opportunities', 'Market exploration']
      }
    ],
    testimonials: [
      { name: 'Jennifer Blake', location: 'Canada', rating: 5, text: 'Our guide was incredibly knowledgeable. The falls tour exceeded all expectations!' },
      { name: 'Peter Davies', location: 'UK', rating: 5, text: 'The city tour was a great way to experience local life. Loved the markets!' },
      { name: 'Maria Santos', location: 'Portugal', rating: 5, text: 'Well-organized tours with passionate guides. Every moment was worth it.' }
    ]
  },

  // Animal Interactions
  {
    id: 'animal-interactions',
    name: 'Animal Interactions',
    slug: 'animal-interactions',
    description: 'Get up close and personal with Africa\'s magnificent wildlife.',
    longDescription: 'Experience unforgettable encounters with Africa\'s wildlife. From walking with lions to riding elephants, create memories that will last a lifetime.',
    highlights: ['Lion Walk', 'Cheetah Walk', 'Elephant Ride', 'Horse Riding', 'Expert Handlers', 'Conservation Focus'],
    image: '/assets/images/Elephant Encounter.png',
    heroImage: '/assets/images/safarihero.png',
    packages: [
      {
        id: 'animal-lion',
        name: 'Lion Walk',
        duration: '2-3 hours',
        price: 170,
        location: 'Victoria Falls',
        description: 'Walk with African lions in their natural habitat with experienced handlers.',
        included: ['Professional handler', 'Safety briefing', 'Photo opportunities', 'Transfers'],
        highlights: ['Lion encounter', 'Expert handlers', 'Unforgettable experience']
      },
      {
        id: 'animal-cheetah',
        name: 'Cheetah Walk',
        duration: '2-3 hours',
        price: 170,
        location: 'Victoria Falls',
        description: 'Experience the speed and grace of cheetahs on this amazing walking safari.',
        included: ['Professional handler', 'Safety briefing', 'Photo opportunities', 'Transfers'],
        highlights: ['Cheetah encounter', 'Speed demonstration', 'Conservation education']
      },
      {
        id: 'animal-elephant',
        name: 'Elephant Ride',
        duration: '2-3 hours',
        price: 170,
        location: 'Victoria Falls',
        description: 'Ride on the back of African elephants through the bush.',
        included: ['Elephant ride', 'Experienced handler', 'Photo opportunities', 'Transfers'],
        highlights: ['Elephant ride', 'Gentle giants', 'Bush experience']
      },
      {
        id: 'animal-horse',
        name: 'Horse Riding',
        duration: '2-3 hours',
        price: 155,
        location: 'Victoria Falls',
        description: 'Explore the African bush on horseback for a unique perspective of wildlife.',
        included: ['Horse & tack', 'Experienced guide', 'All skill levels', 'Transfers'],
        highlights: ['Bush riding', 'Wildlife viewing', 'All skill levels']
      }
    ],
    testimonials: [
      { name: 'Emma Watson', location: 'UK', rating: 5, text: 'Walking with the lions was the most incredible experience of my life!' },
      { name: 'Mike Johnson', location: 'USA', rating: 5, text: 'The elephant ride was amazing. The handlers were so knowledgeable.' },
      { name: 'Sarah Connor', location: 'Australia', rating: 5, text: 'Horse riding through the bush was magical. Saw so much wildlife!' }
    ]
  },

  // Cultural Experience
  {
    id: 'cultural',
    name: 'Cultural Experience',
    slug: 'cultural',
    description: 'Immerse yourself in authentic African culture and traditions.',
    longDescription: 'Discover the rich cultural heritage of Zimbabwe through our authentic cultural experiences. From traditional dinners to village visits, connect with local communities.',
    highlights: ['Boma Dinner', 'Village Visits', 'Simunye Experience', 'Traditional Entertainment', 'Local Cuisine', 'Authentic Experiences'],
    image: '/assets/images/Boma Dinner.png',
    heroImage: '/assets/images/african village tour.png',
    packages: [
      {
        id: 'cultural-boma',
        name: 'Boma Dinner',
        duration: '3-4 hours',
        price: 85,
        location: 'Victoria Falls',
        description: 'Experience an unforgettable evening under the African stars with traditional food and drum performances.',
        included: ['Traditional dinner', 'Drum show', 'Cultural dance', 'Transfers'],
        highlights: ['African stars', 'Traditional feast', 'Drum performances']
      },
      {
        id: 'cultural-village',
        name: 'Cultural Village Visits',
        duration: '3-4 hours',
        price: 75,
        location: 'Victoria Falls',
        description: 'Visit traditional African villages and experience authentic local culture and customs.',
        included: ['Village guide', 'Cultural activities', 'Traditional lunch', 'Transfers'],
        highlights: ['Authentic villages', 'Local families', 'Cultural immersion']
      },
      {
        id: 'cultural-simunye',
        name: 'Simunye Experience',
        duration: '2-3 hours',
        price: 68,
        location: 'Victoria Falls',
        description: 'Experience the Simunye cultural show with traditional singing, dancing, and storytelling.',
        included: ['Cultural show', 'Interactive activities', 'Traditional snacks', 'Transfers'],
        highlights: ['Traditional show', 'Interactive experience', 'Local culture']
      }
    ],
    testimonials: [
      { name: 'Lisa Brown', location: 'Canada', rating: 5, text: 'The Boma dinner was the highlight of our trip! The food and entertainment were amazing.' },
      { name: 'James Miller', location: 'UK', rating: 5, text: 'Village visit was so authentic. We felt like part of the family.' },
      { name: 'Anna Schmidt', location: 'Germany', rating: 5, text: 'The cultural experiences gave us such a deep understanding of local life.' }
    ]
  },

  // Devils Pool
  {
    id: 'devils-pool',
    name: 'Devils Pool Experience',
    slug: 'devils-pool',
    description: 'Swim in the legendary Devil\'s Pool at the edge of Victoria Falls.',
    longDescription: 'Experience the ultimate adrenaline of swimming in the natural rock pool at the edge of Victoria Falls. Located on Livingstone Island, this is a once-in-a-lifetime experience.',
    highlights: ['Devil\'s Pool Access', 'Edge of the Falls', 'Breakfast/Lunch/High Tea', 'Unique Experience', 'Professional Guides', 'Safety First'],
    image: '/assets/images/devilspool.png',
    heroImage: '/assets/images/VicFallshero.png',
    packages: [
      {
        id: 'devils-breakfast',
        name: 'Breakfast Slot',
        duration: '2-3 hours',
        price: 195,
        location: 'Livingstone Island, Zambia',
        description: 'Start your day with a swim in Devil\'s Pool followed by a delicious breakfast at the edge of Victoria Falls.',
        included: ['Devil\'s Pool access', 'Breakfast', 'Island tour', 'Park fees', 'Transfers'],
        highlights: ['Morning swim', 'Breakfast with views', 'Edge of the falls']
      },
      {
        id: 'devils-lunch',
        name: 'Lunch Slot',
        duration: '3-4 hours',
        price: 250,
        location: 'Livingstone Island, Zambia',
        description: 'Enjoy lunch while swimming in the legendary Devil\'s Pool overlooking Victoria Falls.',
        included: ['Devil\'s Pool access', 'Full lunch', 'Island tour', 'Park fees', 'Transfers'],
        highlights: ['Lunch experience', 'Pool access', 'Full day memory']
      },
      {
        id: 'devils-hightea',
        name: 'High Tea Slot',
        duration: '3-4 hours',
        price: 230,
        location: 'Livingstone Island, Zambia',
        description: 'Experience the unique high tea at the edge of Victoria Falls followed by Devil\'s Pool access.',
        included: ['Devil\'s Pool access', 'High tea', 'Island tour', 'Park fees', 'Transfers'],
        highlights: ['High tea experience', 'Afternoon adventure', 'Memorable experience']
      }
    ],
    testimonials: [
      { name: 'David Chen', location: 'Singapore', rating: 5, text: 'Swimming in Devil\'s Pool was absolutely incredible! Such a unique experience.' },
      { name: 'Rebecca Taylor', location: 'UK', rating: 5, text: 'The lunch slot was perfect. Great food and amazing views of the falls.' },
      { name: 'Tom Wilson', location: 'Australia', rating: 5, text: 'The high tea experience was so elegant. Can\'t believe I swam at the edge of the falls!' }
    ]
  }
]