import Image from "next/image";

const Hero = () =>{

    return(
        <div className="flex w-full justify-center py-60">
            <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-2 px-5 gap-x-10 gap-y-20">
            <div className="my-auto">
                <h1 className="text-gray-900 text-6xl font-semibold mb-4 text-center md:text-left">End-to-End Services for Startups & Companies</h1>
                <p className="text-xl text-gray-600 mb-6 text-center md:text-left">At Kahvana Software we skillfully combine state-of-the-art technology with a touch of creativity, a hint of humor, and an abundance of passion. We're referring to solutions of such exceptional quality that they will exhilarate your senses and leave you with exquisite satisfaction!</p>
                <div className="flex justify-center md:justify-start w-full">
                    <button className="px-4 py-2.5 text-lg bg-gradient-to-br from-[#FF3179] to-[#0086F6] rounded-full text-white mr-2 shadow-xl hover:opacity-80">Contact us</button>
                    <button className="rounded-full bg-black text-white  px-4 py-1">View more</button>
                </div>
            </div>
            <div className="my-auto">

            <Image
            src={"/nakav-frajer.png"}
            alt=""
            width={500}
            height={500}
            className="w-full"
            ></Image>
            </div>
            </div>
        </div>
    )

}

export default Hero;