import menuData from "../data/menuData";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.id || 1);

  // Helper function to get item image URL from public folder
  const getItemImageUrl = (imageName) => {
    return `/images/${imageName}`;
  };

  // Fallback images based on category
  const getCategoryFallbackImage = (categoryName) => {
    const categoryLower = categoryName.toLowerCase();
    if (categoryLower.includes('starter') || categoryLower.includes('appetizer')) {
      return "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    }
    if (categoryLower.includes('main') || categoryLower.includes('course')) {
      return "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    }
    if (categoryLower.includes('dessert') || categoryLower.includes('sweet')) {
      return "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    }
    return "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section - Mobile Optimized */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Restaurant Menu
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Discover our premium selection
            </p>
          </div>

          {/* Category Tabs - Mobile Scrollable */}
          <div className="mt-4 sm:mt-6 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 sm:space-x-3 min-w-max px-4 sm:px-0 justify-center sm:justify-center">
              {menuData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {menuData
          .filter((category) => category.id === activeCategory)
          .map((category) => (
            <section key={category.id} className="animate-fade-in">
              {/* Category Header */}
              <div className="mb-6 sm:mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {category.category}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto rounded-full"></div>
              </div>

              {/* Premium Menu Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    {/* Image Container with Premium Overlay */}
                    <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                      <img
                        src={getItemImageUrl(item.image)}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          e.target.src = getCategoryFallbackImage(category.category);
                        }}
                        loading="lazy"
                      />
                      
                      {/* Premium Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Price Badge - Premium Design */}
                      <div className="absolute top-4 right-4 bg-white/98 backdrop-blur-md text-gray-900 font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-xl border border-gray-200/50 transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-sm sm:text-base">₹{item.price}</span>
                      </div>

                      {/* Premium Badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        PREMIUM
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 lg:p-7">
                      {/* Item Name */}
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                        {item.name}
                      </h3>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>

                      {/* Action Section */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {/* Star Rating Indicator */}
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <span className="text-xs sm:text-sm font-semibold text-gray-600">4.8</span>
                          </div>
                        </div>

                        {/* Order Button - Premium Design */}
                        <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl active:scale-95">
                          Add to Cart
                        </button>
                      </div>
                    </div>

                    {/* Premium Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/0 via-amber-400/0 to-amber-400/0 group-hover:from-amber-400/5 group-hover:via-amber-400/10 group-hover:to-amber-400/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </section>
          ))}
      </main>

      {/* Footer - Mobile Optimized */}
      <footer className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base text-gray-300 mb-2">
            Thank you for choosing us
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mb-4">
            Restaurant Menu | www.yourwebhere.com
          </p>
          <Link
            to="/qr"
            className="inline-block mt-4 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Print QR Code
          </Link>
        </div>
      </footer>

    </div>
  );
};

export default Menu;
