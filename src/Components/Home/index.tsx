import { SelecetedPage } from '@/Shared/type'
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/Shared/ActionButton';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';




type Props = {
  setSelectedPage: (value:SelecetedPage)=>void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px")
  return (
    <section id='home'
      className=' bg-gray-20 py-10 md:h-full md:pb-0'
    >
      {/* image and main header */}
      <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6' >
        {/* main header */}
        <motion.div
          className='z-10 mt-32 md:basis-3/5'
          onViewportEnter={()=>setSelectedPage(SelecetedPage.Home)}
        >
          {/* headings */}
          <motion.div
            className='md:-mt-20'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, staggerChildren: 2 }}
            variants={{
              hidden: { opacity: 0, x:-50 },
              visible:{opacity:1, x:0}
            }}
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                <img src={HomePageText} alt="homepage-page-text" />
              </div>
            </div>
            <p className='mt-8 text-md'>
               Welcome to <span className='text-primary-500'>EVOGYM</span> Get ready to ignite your fitness journey and unleash your potential like never before! Our dedicated team is here to support and motivate your every step of the way. Whether you're a seasoned athlete or just starting out, we're committed to helping you crush your goals and become the best version of yourself. Let's sweat, grind, and achieve greatness together! 💪 
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className='mt-8 flex items-center gap-8'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.5 }}
            transition={{delay:0.2, duration: 0.5 }}
            variants={{
              hidden: {opacity: 0, x:-50 },
              visible:{opacity:1, x:0}
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
            onClick={() => setSelectedPage(SelecetedPage.ContactUs)}
            href={`#${SelecetedPage.ContactUs}`}
          >
           <p>Learn more</p>
          </AnchorLink>
          </motion.div>
          
        </motion.div>
        {/* image */}
        <motion.div
          className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: {opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1  }
            }}
        >
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </motion.div>
      </div>
      {/* Sponsores */}
      {isAboveMediumScreens && (
        <div className='h-[i50px] w-full bg-primary-100 py-10 '>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center justify-between gap-8'>
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home