// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

import emailJS from '@emailjs/browser';
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();

  const [ isSuccess, setIsSuccess ] = useState(false)
  const [ isError, setIsError ] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailJS.sendForm('service_8w4cs5j', 'template_mq0mgki', form.current, '4yb8-srd-3oV_vcFC')
    .then((result) => {
      console.log(result.text);
      setIsSuccess(true);
    }, (error) => {
      console.log(error.text);
      setIsError(true);
    });
    e.target.reset()
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:text-left">
        {/* text form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="mt-1 mb-12 text-center h2 md:mt-0"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="flex flex-col flex-1 w-full gap-6 mx-auto -mt-10 md:mt-0"
          >
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder="name" className="input" name="name" required/>
              <input type="email" placeholder="email" className="input" name="email" required/>
            </div>
            <input type="text" placeholder="Subject" className="input" name="subject" />
            <textarea className="textarea" placeholder="Message" name="message" required></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let&apos;s talk</span>
              <BsArrowRight className="translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
            </button>
          </motion.form>
          {isSuccess && <span className="p-4 mt-2 mb-4 text-sm text-green-100 bg-green-500 rounded-lg">Thanks for contacting me!, </span>}
          {isError && <span className="p-4 mt-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">An error occurred. Please try again.</span>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
