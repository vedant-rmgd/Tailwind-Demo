import React from 'react'

function Footer() {
  return (
    <div>
        <footer class="bg-black text-white py-6 border-t-2 border-white">
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm">&copy; 2025 YourCompany. All rights reserved.</p>
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