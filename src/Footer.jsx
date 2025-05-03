import React from 'react'

function Footer() {
  return (
    <div>
        <footer class="bg-black text-white py-6 border-t-2 border-white">
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="w-11 h-11 rounded-full flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg?20211017183441"
            alt=""
          />
        </div>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="hover:underline">
              Privacy Policy!
            </a>
            <a href="#" class="hover:underline">
              Terms of Service!
            </a>
            <a href="#" class="hover:underline">
              Contact!
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer