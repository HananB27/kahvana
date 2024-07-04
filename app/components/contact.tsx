const Contact = () => {
    return (
        <form className="w-full flex" id="contact-segment">
            <div className="container mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h1 className="text-5xl max-w-xl font-semibold pb-1 bg-clip-text bg-gradient-to-r from-[#FF3179] to-[#0086F6] text-transparent mb-3">
                        Get in touch with us!
                    </h1>
                    <p className="text-gray-900 text-lg">
                        Looking for a software development agency that
                        specializes in custom solutions? We're here to help. Our
                        team is passionate about creating high-end software that
                        pushes boundaries and surpasses expectations. Contact us
                        to bring your business to the next level.
                    </p>
                </div>
                <div>
                    <div className="w-full mb-4">
                        <label
                            htmlFor="name"
                            className="font-semibold text-gray-900"
                        >
                            Full name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="p-3 rounded border border-gray-200 w-full mt-1"
                            value=""
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label
                            htmlFor="email"
                            className="font-semibold text-gray-900"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="john.doe@email.com"
                            className="p-3 rounded border border-gray-200 w-full mt-1"
                            value=""
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label
                            htmlFor="message"
                            className="font-semibold text-gray-900"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Your message..."
                            className="p-3 rounded border border-gray-200 w-full mt-1 resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-3 py-2 bg-gradient-to-br from-[#FF3179] to-[#0086F6] rounded-full text-white mr-2 shadow-xl hover:opacity-80"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Contact;
