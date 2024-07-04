const Simplify = () =>{

    return(
        <div className="w-full py-10 bg-gray-900 flex">
      <div className="container mx-auto px-5 grid gap-10 grid-cols-1 md:grid-cols-2">
        <div className="my-auto">
          <h1 className="text-white text-5xl font-semibold mb-3">
            Simplify Processes With Our Services
          </h1>
          <p className="text-gray-300 text-xl mb-5">
            Our team of experts will help you work smarter, not harder, so you
            can focus on what matters most - growing your business. Ready to
            simplify your life? Contact us today.
          </p>
          <div>
            <a href="#contact-segment" className="px-4 py-2.5 text-lg bg-gradient-to-br from-[#FF3179] to-[#0086F6] rounded-full text-white mr-2 shadow-xl hover:opacity-80">Contact us</a>
            <button className="px-4 py-2.5 text-lg bg-white rounded-full text-gray-900 shadow-xl hover:opacity-80">View more</button>
          </div>
        </div>
        <div className="my-auto">
           
          <img className="w-full" src="/simplify.png" alt=""/>
        </div>
      </div>
    </div>
    )

}

export default Simplify;