import Image from "next/image";

const Areas = () =>{

    return(
        <div className="w-full bg-white flex py-20">
      <div className="container mx-auto px-5 grid gap-20 grid-cols-1 md:grid-cols-2">
        <div className="my-auto">
          <img src="/ciko.png" className="w-full" alt=""/>
        </div>
        <div className="my-auto">
          <h4 className="text-gray-500 text-lg uppercase">What We Do</h4>
          <h1 className="text-gray-900 text-5xl font-semibold mb-7">
            Areas Of Our Work
          </h1>
          <ul className="text-4xl bg-clip-text bg-gradient-to-r from-[#FF3179] to-[#0086F6] text-transparent">
            <li className="border-l border-gray-900 pl-5 mb-5 cursor-pointer hover:border-l-2">
              Product Design
            </li>
            <li className="border-l border-gray-900 pl-5 mb-5 cursor-pointer hover:border-l-2">
              Mobile &amp; Web Development
            </li>
            <li className="border-l border-gray-900 pl-5 mb-5 cursor-pointer hover:border-l-2">
              Digital Marketing
            </li>
            <li className="border-l border-gray-900 pl-5 mb-5 cursor-pointer pb-1 hover:border-l-2">
              Big Data &amp; Analytics
            </li>
            <li className="border-l border-gray-900 pl-5 mb-5 cursor-pointer pb-1 hover:border-l-2">
              Support &amp; Maintenance
            </li>
          </ul>
        </div>
      </div>
    </div>
    )

}

export default Areas;