// image
import Image from 'next/image'

// components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'
import { HiArrowDown } from 'react-icons/hi2'

const Home = () => {
  return (
    <div className='bg-primary/68 h-full'> 
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'>Hello My name is<br/>{' '}
          <span className='text-accent'> Ravindu Umayanga</span>
          </motion.h1>
          {/* subtitile */}
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            lorem ipauma dokor dkha dhabba hsvava suvdacc cauicac
            accentcad advba dahy iuhA oias iuhaod iuabc agcs auvsa.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* practicles */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut '}}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
