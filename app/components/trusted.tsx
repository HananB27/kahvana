import Image from "next/image";

const Trusted = () => {
    return (
        <div className="w-full bg-gray-900 flex py-10">
            <div className="container mx-auto px-5 grid gap-10 grid-cols-1 lg:grid-cols-2">
                <div className="my-auto">
                    <p className="text-gray-400 text-lg uppercase">
                        Dare To Dream Big!
                    </p>
                    <h1 className="text-white text-5xl font-semibold my-5">
                        Trusted by many
                    </h1>
                    <p className="text-gray-300 text-xl mb-5">
                        Dreaming big is just the beginning! Turn your dreams
                        into reality through our services. From visionary
                        product design to cutting-edge mobile app development,
                        transformative IoT solutions to seamless cloud
                        integration, captivating marketing campaigns to
                        data-driven strategies - we are your partner in
                        redefining possibilities.
                    </p>
                    <a href="#contact-segment" className="px-4 py-2.5 text-lg bg-gradient-to-br from-[#FF3179] to-[#0086F6] rounded-full text-white mr-2 shadow-xl hover:opacity-80">Contact us</a>
                    <button className="px-4 py-2.5 text-lg bg-white rounded-full text-gray-900 shadow-xl hover:opacity-80">View more</button>
                </div>
                <div className="my-auto">
                <a href="https://www.linkedin.com/in/darko-ivanovic-mne/" target="_blank" className="w-full bg-gray-700 rounded shadow-sm p-4 flex mb-4 cursor-pointer hover:bg-gray-600">
            <Image className="h-20 w-20 rounded-full mr-5" width={50} height={50} src="/efvQMXDanOVMikfoCRV3N23aO1juR9Ix4pdvirO1.jpg" alt=""/>
            <div>
              <h4 className="text-white text-xl font-medium">Darko Ivanović</h4>
              <h5 className="text-sm text-white">CEO @ Digital Den Hub</h5>
              <p className="italic text-gray-200 text-lg font-thin">
                - The serious work of young individuals, armed with deep
                knowledge in both technology and business, is nothing short of
                inspiring. Their dedication and insatiable thirst for innovation
                fuel a new wave of transformative ideas, reshaping industries
                and pushing boundaries. I like to call them Avengers for your
                business - coming out and saving the day.
              </p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/asim-avdagic-249a4b46/" className="w-full bg-gray-700 rounded shadow-sm p-4 flex mb-4 2xl:ml-20 cursor-pointer hover:bg-gray-600">
            <Image className="h-20 w-20 rounded-full mr-5" src="/asim-avdagic.jpg" alt="" width={100} height={100}/>
            <div>
              <h4 className="text-white text-xl font-medium">Asim Avdagić</h4>
              <h5 className="text-sm text-white">CEO @ Bamcard d.d.</h5>
              <p className="italic text-gray-200 text-lg font-thin">
                - From humble beginnings, fueled by unwavering dedication and an
                unshakable faith, Kahvana transforming dreams into reality and
                proving that starting from zero is merely an opportunity to soar
                to limitless heights.
              </p>
            </div>
          </a>
          <a href="https://chat.openai.com" target="_blank" className="w-full bg-gray-700 rounded shadow-sm p-4 flex cursor-pointer hover:bg-gray-600">
            <Image className="h-20 w-20 rounded-full mr-5" src="/ChatGPT_logo.svg.png" alt="" width={100} height={100}/>
            <div>
              <h4 className="text-white text-xl font-medium">ChatGPT</h4>
              <h5 className="text-sm text-white">AI Language Model @ OpenAI</h5>
              <p className="italic text-gray-200 text-lg font-thin">
                - As an AI language model, I don't possess personal opinions or
                experiences, but I can confidently say that interacting with
                this company's website has been an enlightening and engaging
                experience ... they definitely didn't tell me to say this to
                you.
              </p>
            </div>
          </a>
                </div>
            </div>
        </div>
    );
};

export default Trusted;
