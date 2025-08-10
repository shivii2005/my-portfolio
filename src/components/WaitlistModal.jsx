import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const WaitlistModal = ({ isOpen, setIsOpen, sendEmail }) => {
    const formRef = useRef();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4 backdrop-blur-sm bg-black/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative bg-[#f8f8f8] dark:bg-[#1a1a1a] text-[#222] dark:text-white rounded-xl shadow-xl w-full max-w-5xl mx-auto overflow-hidden flex flex-col md:flex-row max-h-screen overflow-y-auto"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        {/* Close Icon */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                        >
                            <IoMdClose className="text-xl sm:text-2xl" />
                        </button>

                        {/* Left Panel - Info */}
                        <div className="flex-1 p-5 sm:p-6 bg-[#7b7b7b] dark:bg-[#7b7b7b]">
                            <h2 className="text-2xl font-bold dark:text-black mt-4 md:mt-10 md:ml-[30%] tracking-wide">
                                Contact Info
                            </h2>
                            <p className="text-base text-gray-800 dark:text-gray-200 mt-3 md:mt-5 md:ml-14 tracking-wide leading-relaxed">
                                Have a question or idea? Let’s connect!
                            </p>

                            <div className="mt-6 md:mt-8 md:ml-10 space-y-6 text-black dark:text-white text-base tracking-wide">
                                {/* Location */}
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
                                    </svg>
                                    <span>Patna, Bihar</span>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.6 10.8c1.6 3.3 4.3 6 7.6 7.6l2.5-2.5c.3-.3.8-.4 1.2-.3 1.3.4 2.7.6 4.1.6.7 0 1.3.6 1.3 1.3V22c0 .7-.6 1.3-1.3 1.3C9.5 23.3.7 14.5.7 3.3 0 2.6.6 2 1.3 2H6c.7 0 1.3.6 1.3 1.3 0 1.4.2 2.8.6 4.1.1.4 0 .8-.3 1.2L6.6 10.8z" />
                                    </svg>
                                    <span>+91-9234977191</span>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12.713l11.985-7.713v15H.015v-15zM12 1L.015 8l11.985 7.713L24 8 12 1z" />
                                    </svg>
                                    <span>shivangigoutam06@gmail.com</span>
                                </div>
                            </div>
                        </div>


                        {/* Right Panel - Form */}
                        <form
                            ref={formRef}
                            onSubmit={(e) => {
                                e.preventDefault();
                                sendEmail(e, formRef);
                            }}
                            className="flex-1 p-5 sm:p-6 flex flex-col gap-4 pb-8"
                        >
                            <h2 className="text-2xl font-bold tracking-wide">Get in Touch</h2>

                            {/* Name + Email */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="mb-1 text-sm font-medium text-black dark:text-white">Full Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-black dark:focus:border-white"
                                    />
                                </div>

                                <div className="flex-1">
                                    <label className="mb-1 text-sm font-medium text-black dark:text-white">Email Address</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-black dark:focus:border-white"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="mt-2">
                                <label className="mb-1 text-sm font-medium text-black dark:text-white">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Enter subject"
                                    className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-black dark:focus:border-white"
                                />
                            </div>

                            {/* Message */}
                            <div className="mt-2">
                                <label className="mb-1 text-sm font-medium text-black dark:text-white">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Type your message here"
                                    className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-black dark:focus:border-white"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-4 w-full px-6 py-2 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-full border border-black dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-inherit dark:hover:text-inherit transition-all duration-300 shadow-md"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WaitlistModal;
