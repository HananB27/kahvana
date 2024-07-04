const About = () => {

    return (
        <div className="w-full flex">
      <div className="container mx-auto py-20 px-4 max-w-xl">
        <a href="/begind-the-scenes" className="flex items-center text-xl cursor-pointer hover:underline">
          About Us <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
        </a>
        <br/>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="col-span-2 flex flex-col justify-center items-center">
            <h1 className="text-5xl max-w-xl font-semibold pb-1 bg-clip-text bg-gradient-to-r from-[#FF3179] to-[#0086F6] text-transparent mb-14">
              We're Award-winning Web Development Agency
            </h1>
            <div className="max-w-xl bg-gradient-to-b from-[#FF3179] to-[#0086F6] pl-1 mb-14">
              <div className="w-full h-full bg-white pl-12">
                <p className="text-lg text-gray-900">
                  We're like the Avengers of product design and development,
                  minus the superhero suits, but with all the skills to save the
                  day for your business. With a long list of accolades under our
                  belt, we're not just another software development agency.
                  We're the ones who bring ideas to life. So, sit back, relax,
                  and let us handle everything.
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-3 gap-5 whitespace-nowrap">
              <div className="flex flex-col items-center justify-center">
                <p className="text-3xl md:text-5xl font-semibold text-gray-900 mb-3">
                  100%
                </p>
                <p className="text-base md:text-xl text-gray-600">
                  Clients Satisfactions
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-3xl md:text-5xl font-semibold text-gray-900 mb-3">
                  95%
                </p>
                <p className="text-base md:text-xl text-gray-600">Success Rating</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-3xl md:text-5xl font-semibold text-gray-900 mb-3">
                  13
                </p>
                <p className="text-base md:text-xl text-gray-600">
                  Project Complete
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About;