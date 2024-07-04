const Talent = () =>{

    return(
        <div className="w-full bg-gray-900 hidden 2xl:flex">
      <div className="container mx-auto py-20 px-4 relative flex">
        <div className="bg-gradient-to-r from-[#FF3179] to-[#0086F6] h-[40rem] w-[40rem] rounded ml-auto">
        </div>
        <div className="absolute top-0 left-0 flex flex-col h-full py-10">
          <p className="text-2xl text-gray-400 uppercase">We are...</p>
          <div className="my-auto uppercase">
            <h1 className="text-white text-[10rem] font-bold -mb-20 whitespace-nowrap">
              Probably Most
            </h1>
            <h1 className="text-white text-[10rem] font-bold ml-72 -mb-20">
              Talented
            </h1>
            <h1 className="text-white text-[10rem] font-bold">Dev Team</h1>
          </div>
          <p className="text-2xl text-gray-400 uppercase text-right">
            ... you'll ever meet!
          </p>
        </div>
      </div>
    </div>
    )

}

export default Talent;