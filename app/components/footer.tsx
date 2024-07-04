const Footer =()=>{

    return(
        <div className="w-full py-10 flex bg-gray-900">
      <div className="container mx-auto px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center mb-10 sm:mb-0">
          <img src="/logo.png" className="h-12" alt=""/>
          <h1 className="text-white text-2xl ml-2">kahvana</h1>
        </div>
        <img src="/eu.png" className="h-32" alt=""/>
      </div>

        <div className="flex flex-col sm:flex-row sm:gap-28 w-full">
          <div className="sm:my-12 my-5 text-gray-400 text-sm">
            <h6 className="text-base text-gray-300 font-semibold mb-3">
              Navigation
            </h6>
            <ul>
              <li className="mb-1 hover:underline"><a href="/">Home</a></li>
              <li className="mb-1 hover:underline">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="mb-1 hover:underline">
                <a href="/behind-the-scenes">Behind The Scenes</a>
              </li>
              <li className="mb-1 hover:underline"><a href="/blog">Blog</a></li>
              <li className="mb-1 hover:underline">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sm:my-12 my-5 text-gray-400 text-sm">
            <h6 className="text-base text-gray-300 font-semibold mb-3">Social</h6>
            <ul>
              <li className="mb-1 hover:underline">
                <a href="https://www.facebook.com/profile.php?id=100089760095975&amp;mibextid=ZbWKwL">Facebook</a>
              </li>
              <li className="mb-1 hover:underline">
                <a href="https://instagram.com/kahvanainc?igshid=YmM0MjE2YWMzOA==">Instagram</a>
              </li>
              <li className="mb-1 hover:underline">
                <a href="https://www.linkedin.com/company/kahvana/">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="sm:my-12 my-5 text-gray-400 text-sm">
            <h6 className="text-base text-gray-300 font-semibold mb-3">
              Something More
            </h6>
            <ul>
              <li className="mb-1">Home</li>
              <li className="mb-1">About</li>
              <li className="mb-1">Blog</li>
              <li className="mb-1">Our Team</li>
              <li className="mb-1">Contact</li>
              <li className="mb-1">Portfolio</li>
            </ul>
          </div> 
        </div>

        <div className="border-t border-gray-700 py-2 flex items-center">
          <p className="text-xs text-gray-400 mr-auto">Copyright 2023</p>

          <a href="/terms" className="text-gray-400 text-sm mr-3 hover:underline cursor-pointer whitespace-nowrap">Terms &amp; Conditions</a>
          <a href="/privacy" className="text-gray-400 text-sm hover:underline cursor-pointer whitespace-nowrap">Privacy Policy</a>
        </div>

        <br/>

        <p className="text-[10px] text-gray-500 text-center">This website was created and maintained with the financial support of the European Union and the German Federal Ministry for Economic Cooperation and Development. Its contents are the sole responsibility of The Municipality of The Center of Sarajevo and do not necessarily reflect the views of the European Union or German Federal Ministry for Economic Cooperation and Development.</p></div>
    </div>
    )

}

export default Footer;