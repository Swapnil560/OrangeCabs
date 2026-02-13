import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, FileText, Share2, Link, Twitter, Facebook, Home, Building, Mountain, Sparkles, Bus, Instagram } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "Exploring Northeast India",
    image: "/src/assets/blogs/hero.png",
    excerpt: "Discover the hidden gems of Northeast India with our travel guide.",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "Kaziranga Safari Experience",
    image: "/blogs/6.png",
    excerpt: "Experience wildlife like never before at Kaziranga National Park.",
    date: "March 10, 2024"
  },
  {
    id: 3,
    title: "Tawang Monastery Journey",
    image: "/blogs/2.png",
    excerpt: "A spiritual journey to one of the largest monasteries in India.",
    date: "March 5, 2024"
  },
  {
    id: 4,
    title: "Island Adventures",
    image: "/blogs/3.png",
    excerpt: "Explore the beautiful islands of Northeast India.",
    date: "February 28, 2024"
  },
  {
    id: 5,
    title: "Coastal Escapes",
    image: "/blogs/5.png",
    excerpt: "Discover serene coastal destinations in the region.",
    date: "February 20, 2024"
  },
  {
    id: 6,
    title: "Travel Tips",
    image: "/src/assets/blogs/mark.png",
    excerpt: "Essential tips for traveling in Northeast India.",
    date: "February 15, 2024"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <img 
          src="/blogs/1.png" 
          alt="Guwahati hero background" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">GUWAHATI</div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Top Places to Visit in Guwahati</h1>
          <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8">A local guide to temples, culture, viewpoints, and day trips in the Gateway to the Northeast.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
              <span>Updated Dec 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
              <span>6 to 8 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="pt-8 md:pt-16 pb-8 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 lg:order-1 order-2">
            {/* Spiritual Sanctuaries */}
            <div className="mb-8 md:mb-12" id="spiritual">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 flex items-center gap-2">
                <Home className="w-5 h-5 md:w-6 md:h-6 text-orange-500" /> Spiritual Sanctuaries
              </h2>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Discover the divine energy of the City of Temples, home to ancient shakti peethas and hilltop shrines.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Kamakhya Temple_ The Shakti Peetha.png" 
                      alt="Kamakhya Temple: The Shakti Peetha" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Kamakhya Temple: The Shakti Peetha</h3>
                    <p className="text-gray-700 text-sm">One of the oldest and most revered centers of Tantric practices.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Umananda Temple_ Peacock Island.png" 
                      alt="Umananda Temple: Peacock Island" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Umananda Temple: Peacock Island</h3>
                    <p className="text-gray-700 text-sm">Located on the smallest inhabited river island in the world.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Basistha Ashram_ Vedic Serenity.png" 
                      alt="Basistha Ashram: Vedic Serenity" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Basistha Ashram: Vedic Serenity</h3>
                    <p className="text-gray-700 text-sm">A peaceful ashram situated where three streams meet.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Navagraha Temple_ Celestial Hill.png" 
                      alt="Navagraha Temple: Celestial Hill" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Navagraha Temple: Celestial Hill</h3>
                    <p className="text-gray-700 text-sm">Dedicated to the nine celestial bodies of Hindu astronomy.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Purva Tirupati Sri Balaji.png" 
                      alt="Purva Tirupati Sri Balaji" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Purva Tirupati Sri Balaji</h3>
                    <p className="text-gray-700 text-sm">A modern architectural marvel dedicated to Lord Venkateswara.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Lankeshwar Temple_ Hilltop Views.png" 
                      alt="Lankeshwar Temple: Hilltop Views" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Lankeshwar Temple: Hilltop Views</h3>
                    <p className="text-gray-700 text-sm">Situated on a hillock providing panoramic views of the city.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Temples */}
            <div className="mb-8 md:mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/ISKCON Guwahati_ White Marble.png" 
                      alt="ISKCON Guwahati: White Marble" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">ISKCON Guwahati: White Marble</h3>
                    <p className="text-gray-700 text-sm">A pristine white marble temple dedicated to Lord Krishna.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Sukreswar Temple_ River Ghats.png" 
                      alt="Sukreswar Temple: River Ghats" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Sukreswar Temple: River Ghats</h3>
                    <p className="text-gray-700 text-sm">Famous for having one of the largest Shiva Lingas in India.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nature & Wildlife */}
            <div className="mb-8 md:mb-12" id="nature">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 flex items-center gap-2">
                <Mountain className="w-5 h-5 md:w-6 md:h-6 text-orange-500" /> Nature & Wildlife
              </h2>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Escape the city bustle and immerse yourself in the lush greenery and diverse wildlife of Assam.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/pobitra.png" 
                      alt="Pobitora Wildlife Sanctuary" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Pobitora Wildlife Sanctuary</h3>
                    <p className="text-gray-700 text-sm">Highest density of one-horned rhinoceros in the world.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/bheel.png" 
                      alt="Deepor Beel: Ramsar Site" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Deepor Beel: Ramsar Site</h3>
                    <p className="text-gray-700 text-sm">A permanent freshwater lake and bird sanctuary.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/assam state zoo.png" 
                      alt="Assam State Zoo: Botanical Gardens" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Assam State Zoo: Botanical Gardens</h3>
                    <p className="text-gray-700 text-sm">Home to the Assam State Zoo and Botanical Garden.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/rani.png" 
                      alt="Rani Reserve Forest" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Rani Reserve Forest</h3>
                    <p className="text-gray-700 text-sm">Known for its population of wild elephants and butterflies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Nature Spots */}
            <div className="mb-8 md:mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/chnadubi lake.png" 
                      alt="Chandubi Lake: Natural Lagoon" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Chandubi Lake: Natural Lagoon</h3>
                    <p className="text-gray-700 text-sm">A natural lagoon formed during the 1897 earthquake.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/sarania hill.png" 
                      alt="Sarania Hill: Gandhi Mandap" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Sarania Hill: Gandhi Mandap</h3>
                    <p className="text-gray-700 text-sm">Offering one of the best sunset views over the city.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/shradhanjali kanan.png" 
                      alt="Shraddhanjali Kanan" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Shraddhanjali Kanan</h3>
                    <p className="text-gray-700 text-sm">A popular park for evening walks and musical fountains.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/digha.png" 
                      alt="Dighalipukhuri: Historic Pond" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Dighalipukhuri: Historic Pond</h3>
                    <p className="text-gray-700 text-sm">An elongated pond believed to be dug by King Bhagadatta.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Museums & Culture */}
            <div className="mb-8 md:mb-12" id="museums">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 md:w-6 md:h-6 text-orange-500" /> Museums & Culture
              </h2>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Dive deep into the rich tapestry of Assamese history, science, and traditional arts.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/assam sate mesuem.png" 
                      alt="Assam State Museum" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Assam State Museum</h3>
                    <p className="text-gray-700 text-sm">Showcasing the region's unique tribal culture and history.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/sankardev.png" 
                      alt="Srimanta Sankaradeva Kalakshetra" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Srimanta Sankaradeva Kalakshetra</h3>
                    <p className="text-gray-700 text-sm">A grand cultural institution promoting Assamese heritage.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Museums */}
            <div className="mb-8 md:mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/planetarium.png" 
                      alt="Guwahati Planetarium" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Guwahati Planetarium</h3>
                    <p className="text-gray-700 text-sm">A hub for astronomical education and sky watching sessions.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/science centre.png" 
                      alt="Regional Science Centre" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Regional Science Centre</h3>
                    <p className="text-gray-700 text-sm">Interactive science exhibits perfect for family visits.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/war.png" 
                      alt="War Memorial: Dighalipukhuri" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">War Memorial: Dighalipukhuri</h3>
                    <p className="text-gray-700 text-sm">A tribute to the brave soldiers who sacrificed for the nation.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/northbook.png" 
                      alt="Northbrook Gate" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Northbrook Gate</h3>
                    <p className="text-gray-700 text-sm">A colonial-era gate built to welcome Viceroy Lord Northbrook.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Family & Recreation */}
            <div className="mb-8 md:mb-12" id="recreation">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-orange-500" /> Family & Recreation
              </h2>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                From river cruises to amusement parks, find the perfect spot for leisure and entertainment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/grand cruise.png" 
                      alt="Alfresco Grand Cruise" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Alfresco Grand Cruise</h3>
                    <p className="text-gray-700 text-sm">Dining and cultural performances on the Brahmaputra.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Nehru Park.png" 
                      alt="Nehru Park" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Nehru Park</h3>
                    <p className="text-gray-700 text-sm">Located in the heart of the city, famous for its sculptures.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Recreation */}
            <div className="mb-8 md:mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Accoland_ Amusement Park.png" 
                      alt="Accoland: Amusement Park" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Accoland: Amusement Park</h3>
                    <p className="text-gray-700 text-sm">The largest water amusement park in the North East.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Brahmaputra River Heritage Centre.png" 
                      alt="Brahmaputra River Heritage Centre" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Brahmaputra River Heritage Centre</h3>
                    <p className="text-gray-700 text-sm">A beautifully restored colonial bungalow turned cultural hub.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Dreamland Amusement Park.png" 
                      alt="Dreamland Amusement Park" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Dreamland Amusement Park</h3>
                    <p className="text-gray-700 text-sm">A fun getaway with rides and skies for children.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Guwahati Ropeway.png" 
                      alt="Guwahati Ropeway" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Guwahati Ropeway</h3>
                    <p className="text-gray-700 text-sm">India's longest river ropeway connecting to North Guwahati.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopping & Lifestyle */}
            <div className="mb-8 md:mb-12" id="shopping">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 md:w-6 md:h-6 text-orange-500" /> Shopping & Lifestyle
              </h2>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Experience the local vibe, shop for silk, and enjoy the culinary delights of the city.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Fancy Bazar.png" 
                      alt="Fancy Bazar: Shopper's Paradise" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Fancy Bazar: Shopper's Paradise</h3>
                    <p className="text-gray-700 text-sm">The commercial heart of the city for clothes, food, and handicrafts.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Pan Bazar.png" 
                      alt="Pan Bazar" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Pan Bazar</h3>
                    <p className="text-gray-700 text-sm">Known for bookshops and traditional Assamese silk.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Shopping & Dining */}
            <div className="mb-8 md:mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/GS Road.png" 
                      alt="GS Road: Urban Hub" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">GS Road: Urban Hub</h3>
                    <p className="text-gray-700 text-sm">The modern face of Guwahati with malls and restaurants.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Cafe Hendrix.png" 
                      alt="Cafe Hendrix" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Cafe Hendrix</h3>
                    <p className="text-gray-700 text-sm">A legendary live music venue celebrating blues and rock.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Paradise Restaurant.png" 
                      alt="Paradise Restaurant" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Paradise Restaurant</h3>
                    <p className="text-gray-700 text-sm">Famous for its authentic Assamese Parampara Thali.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/blog/Terra Mayaa.png" 
                      alt="Terra Mayaa" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">Terra Mayaa</h3>
                    <p className="text-gray-700 text-sm">A popular lounge and restaurant with great city views.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 lg:order-2 order-1">
            {/* Table of Contents */}
            <div className="bg-white border border-gray-300 rounded-lg p-4 md:p-6 mb-6 md:mb-8 mt-6 lg:mt-12">
              <h3 className="text-base md:text-lg font-semibold text-black mb-3 md:mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 md:w-5 md:h-5 text-orange-500" /> On this page
              </h3>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <li><a href="#spiritual" className="text-orange-400 hover:text-orange-300 transition-colors">Spiritual Sanctuaries</a></li>
                <li><a href="#nature" className="text-gray-700 hover:text-orange-400 transition-colors">Nature & Wildlife</a></li>
                <li><a href="#museums" className="text-gray-700 hover:text-orange-400 transition-colors">Museums & Culture</a></li>
                <li><a href="#recreation" className="text-gray-700 hover:text-orange-400 transition-colors">Family & Recreation</a></li>
                <li><a href="#shopping" className="text-gray-700 hover:text-orange-400 transition-colors">Shopping & Lifestyle</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
