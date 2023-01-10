import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer class="py-12 bg-gray-800 text-white">
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/4 px-4 mb-8">
                  <h3 class="text-xl font-bold mb-2">About Us</h3>
                  <p class="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, ipsum at auctor mollis, velit massa ultricies ipsum, non bibendum urna velit vel lacus.</p>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-8">
                  <h3 class="text-xl font-bold mb-2">Quick Links</h3>
                  <ul class="list-reset text-gray-400 mb-4">
                    <li class="mb-2"><a href="#" class="text-white hover:text-gray-400">Home</a></li>
                    <li class="mb-2"><a href="#" class="text-white hover:text-gray-400">About Us</a></li>
                    <li class="mb-2"><a href="#" class="text-white hover:text-gray-400">Services</a></li>
                    <li class="mb-2"><a href="#" class="text-white hover:text-gray-400">Contact Us</a></li>
                  </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-8">
                  <h3 class="text-xl font-bold mb-2">Contact Us</h3>
                  <p class="text-gray-400 mb-4">123 Main Street<br/>Anytown, USA 12345</p>
                  <p class="text-gray-400 mb-4">info@example.com<br/>555-555-1212</p>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-8">
                  <h3 class="text-xl font-bold mb-2">Follow Us</h3>
                  <ul class="list-reset text-gray-400 mb-4">
                    <li class="mb-2"><a href="#" class="text-white hover:text-gray-400">Facebook</a></li>
                    <li class="mb-2"><a href="#" class="text-white hover:text-gray-400">Twitter</a></li>
                    <li class="mb-2"><a href="#" class="text-white hover:text-gray-400">Instagram</a></li>
                    <li class="mb-2"><a href="#" class="text-white hover:text-gray-400">LinkedIn</a></li>
                  </ul>
                </div>

                </div>
                </div>
                </footer>
    </div>
  )
}

export default Footer