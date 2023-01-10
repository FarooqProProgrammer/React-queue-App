import React from 'react'
import "./About.css"
import Logo from "../../assets/UserLogo.png"
import AboutPicture from "../../assets/cbimage.png"
const About = () => {
  return (
<section class="About py-12 bg-white-100">
    <div class="container mx-auto px-4">
      <h2 class="text-5xl font-bold mb-4">About Us</h2>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 px-4 mb-8">
          <img src={Logo} alt="About Us" class="rounded-lg shadow-lg"/>
        </div>
        <div class="w-full md:w-1/2 px-4 mb-8">
          <h3 class="text-2xl font-bold mb-4">Our Story</h3>
          <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, ipsum at auctor mollis, velit massa ultricies ipsum, non bibendum urna velit vel lacus.</p>
          <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, ipsum at auctor mollis, velit massa ultricies ipsum, non bibendum urna velit vel lacus.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About