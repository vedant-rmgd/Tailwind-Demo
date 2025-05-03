function App() {
  return (
    // navbar
    <>
      {/* navbar */}
      <nav className="bg-violet-300 w-full h-14 flex justify-between items-center px-4">
        <div className="w-11 h-11 rounded-full flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg?20211017183441"
            alt=""
          />
        </div>
        <ul className="md:flex hidden gap-10 font-medium text-lg">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="aboutUs">About Us</a>
          </li>
          <li>
            <a href="contectus">Contact Us</a>
          </li>
        </ul>
        <button className="hidden md:block bg-sky-500 text-white py-1.5 px-4.5 font-bold rounded-md hover:bg-sky-400">
          Login
        </button>
        <div className="w-9 h-9 md:hidden ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
            alt=""
          />
        </div>
      </nav>

      {/* header */}
      <header className="w-full h-auto">
        <img
          className="hidden md:block"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
          alt=""
        />
        <img
          className="md:hidden"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
          alt=""
        />
      </header>

      {/* hero */}
      <div className="h-auto w-full flex flex-col flex-wrap items-center justify-center p-8">
        <div className="w-full h-auto flex flex-col flex-wrap items-center justify-center">
          <p className="text-yellow-400 font-bold md:text-5xl text-3xl">
            "Pure Hardwork, No Shortcuts!"
          </p>
          <div className="bg-amber-600 md:w-30 w-25 h-[3px] mt-7 rounded-2xl"></div>
        </div>

        <div className="w-full h-auto flex justify-evenly items-center md:mt-16 mt-10">
          <div className="flex flex-col justify-center items-center p-2">
            <div className="md:w-30 w-20 md:h-30 h-20 overflow-hidden rounded-full flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://img.freepik.com/free-vector/education-business-logo-template-branding-design-vector-education-center-text_53876-143349.jpg?semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center text-center md:mt-5 mt-3">
              <p className="text-white md:text-2xl text-xl font-bold">600+</p>
              <p className=" text-gray-400 md:text-xl text-lg font-bold">
                Different Courses!!!
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:w-30 w-20 md:h-30 h-20 overflow-hidden rounded-full flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://thumbs.dreamstime.com/b/student-icon-vector-education-collection-thin-line-outline-illustration-linear-symbol-use-web-mobile-apps-logo-143262743.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center text-center md:mt-5 mt-3">
              <p className="text-white md:text-2xl text-xl font-bold">
                700,000+
              </p>
              <p className=" text-gray-400 md:text-xl text-lg font-bold">
                Students Enrolled
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:w-30 w-20 md:h-30 h-20 overflow-hidden rounded-full flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtehFYJAw3iKMCkXNh9ugXoubfDQzKmmlcQ&s"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center text-center md:mt-5 mt-3">
              <p className="text-white md:text-2xl text-xl font-bold">
                10,000+
              </p>
              <p className=" text-gray-400 md:text-xl text-lg font-bold">
                Successful Transition
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* hero-2 */}
      <div className="h-auto w-full flex flex-col flex-wrap items-center justify-center p-8">
        <div className="w-full h-auto flex flex-col flex-wrap items-center justify-center text-center">
          <p className="text-yellow-400 font-bold md:text-5xl text-3xl">
            "Our Products"
          </p>
          <div className="bg-amber-600 md:w-30 w-25 h-[3px] mt-7 rounded-2xl"></div>
        </div>

        <div className="w-full h-auto flex flex-wrap justify-evenly items-center md:mt-16 mt-10">
          <div className="md:max-w-2xs max-w-3xs flex mb-3 flex-col justify-center items-center px-5 py-7 border-2 border-white rounded-2xl">
            <div className="md:w-20 w-20 md:h-20 h-20 overflow-hidden rounded-full flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://img.freepik.com/free-vector/education-business-logo-template-branding-design-vector-education-center-text_53876-143349.jpg?semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center text-center md:mt-5 mt-3">
              <p className="text-white md:text-2xl text-xl font-bold">600+</p>
              <p className=" text-gray-400 md:text-xl text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                quasi?
              </p>
            </div>
          </div>

          <div className="md:max-w-2xs max-w-3xs flex mb-3 flex-col justify-center items-center px-5 py-7 border-2 border-white rounded-2xl">
            <div className="md:w-20 w-20 md:h-20 h-20 overflow-hidden rounded-full flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://thumbs.dreamstime.com/b/student-icon-vector-education-collection-thin-line-outline-illustration-linear-symbol-use-web-mobile-apps-logo-143262743.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center text-center md:mt-5 mt-3">
              <p className="text-white md:text-2xl text-xl font-bold">
                700,000+
              </p>
              <p className=" text-gray-400 md:text-xl text-lg font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium, illo.
              </p>
            </div>
          </div>

          <div className="md:max-w-2xs max-w-3xs flex mb-3 flex-col justify-center items-center px-5 py-7 border-2 border-white rounded-2xl">
            <div className="md:w-20 w-20 md:h-20 h-20 overflow-hidden rounded-full flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtehFYJAw3iKMCkXNh9ugXoubfDQzKmmlcQ&s"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center text-center md:mt-5 mt-3">
              <p className="text-white md:text-2xl text-xl font-bold">
                10,000+
              </p>
              <p className=" text-gray-400 md:text-xl text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantiumr.
              </p>
            </div>
          </div>

          <div className="md:max-w-2xs max-w-3xs flex mb-3 flex-col justify-center items-center px-5 py-7 border-2 border-white rounded-2xl">
            <div className="md:w-20 w-20 md:h-20 h-20 overflow-hidden rounded-full flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtehFYJAw3iKMCkXNh9ugXoubfDQzKmmlcQ&s"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center text-center md:mt-5 mt-3">
              <p className="text-white md:text-2xl text-xl font-bold">
                10,000+
              </p>
              <p className=" text-gray-400 md:text-xl text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                suscipit?
              </p>
            </div>
          </div>
          {/* md:w-[250px] w-[150px] */}
          <div className="md:max-w-2xs max-w-3xs flex mb-3 flex-col justify-center items-center px-5 py-7 border-2 border-white rounded-2xl">
            <div className="md:w-20 w-20 md:h-20 h-20 overflow-hidden rounded-full flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtehFYJAw3iKMCkXNh9ugXoubfDQzKmmlcQ&s"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center text-center md:mt-5 mt-3">
              <p className="text-white md:text-2xl text-xl font-bold">
                10,000+
              </p>
              <p className=" text-gray-400 md:text-xl text-lg font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, laborum?
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-black text-white py-6 border-t-2 border-white">
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm">&copy; 2025 YourCompany. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="hover:underline">
              Privacy Policy
            </a>
            <a href="#" class="hover:underline">
              Terms of Service
            </a>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
