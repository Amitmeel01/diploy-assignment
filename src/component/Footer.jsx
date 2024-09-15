import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        {/* Top section with Social Icons */}
        <div className="flex justify-end mb-8">
          <div className="flex space-x-2">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Company Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Gelato</h2>
            <p className="text-sm mb-4">
              Gelato has created the world’s largest network for local production and distribution of customized products. Together we bring creativity to life – and into business.
            </p>
            <button className="bg-white text-black font-semibold py-2 px-4 rounded mb-4">
              Get started
            </button>
            <div className="flex space-x-4">
              <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="App Store" />
              <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </div>
          </div>

          {/* Print on demand Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Print on demand</h3>
            <ul>
              <li className="mb-2 text-sm">What is print on demand?</li>
              <li className="mb-2 text-sm">Product catalog</li>
              <li className="mb-2 text-sm">Shipping and delivery</li>
              <li className="mb-2 text-sm">Dropshipping products</li>
              <li className="mb-2 text-sm">Pro sellers</li>
              <li className="mb-2 text-sm">Returns policy</li>
              <li className="mb-2 text-sm">Global, yet local</li>
              <li className="mb-2 text-sm">Support</li>
            </ul>
          </div>

          {/* Integrations Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Integrations</h3>
            <ul>
              <li className="mb-2 text-sm">Shopify</li>
              <li className="mb-2 text-sm">Etsy</li>
              <li className="mb-2 text-sm">WooCommerce</li>
              <li className="mb-2 text-sm">Wix</li>
              <li className="mb-2 text-sm">Squarespace</li>
              <li className="mb-2 text-sm">API</li>
            </ul>
          </div>

          {/* Start Selling Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Start selling</h3>
            <ul>
              <li className="mb-2 text-sm">Embroidery</li>
              <li className="mb-2 text-sm">Print on demand t-shirts</li>
              <li className="mb-2 text-sm">Print on demand hoodies</li>
              <li className="mb-2 text-sm">Custom products</li>
              <li className="mb-2 text-sm">Custom merchandise</li>
              <li className="mb-2 text-sm">Print on demand UK</li>
              <li className="mb-2 text-sm">Print on demand France</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2 text-sm">About Gelato</li>
              <li className="mb-2 text-sm">Leadership team</li>
              <li className="mb-2 text-sm">Blog</li>
              <li className="mb-2 text-sm">Customer Stories</li>
              <li className="mb-2 text-sm">Partners</li>
              <li className="mb-2 text-sm">Careers</li>
              <li className="mb-2 text-sm">Affiliates program</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-wrap justify-between items-center">
            {/* Legal Links */}
            <ul className="flex space-x-4 text-gray-400 text-sm mt-4 lg:mt-0">
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookie policy</a></li>
              <li><a href="#">API terms</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>

            {/* Language Selector */}
            <div className="mt-4 lg:mt-0">
            <select className="bg-gray-800 text-gray-400 border border-gray-600 p-2 rounded">
  <option>English</option>
  <option>English (Canada)</option>
  <option>English (United Kingdom)</option>
  <option>English (Australia)</option>
  <option>English (India)</option>
  <option>日本語 (Japanese)</option>
  <option>Français (French)</option>
  <option>Español (Spanish)</option>
  <option>Italiano (Italian)</option>
  <option>Deutsch (German)</option>
  <option>Norsk (Norwegian)</option>
  <option>Svenska (Swedish)</option>
  <option>Tiếng Việt (Vietnamese)</option>
  <option>Nederlands (Dutch)</option>
  <option>Dansk (Danish)</option>
</select>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
