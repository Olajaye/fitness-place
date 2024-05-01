import { SelecetedPage } from '@/Shared/type'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'


type Props = {
  icon: JSX.Element,
  title: string,
  description: string,
  setSelectedPage: (value:SelecetedPage)=>void
  
}

const childVariant = {
  hidden: {
    opacity: 0,
    scale: 0.2
  },
  visible: {
    opacity: 1,
    scale: 1
  }
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center box-border md:w-[350px] md:h-[350px]'>
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-100 p-4'>
          {icon}
        </div>
      </div>
      <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
         <AnchorLink
            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
            onClick={() => setSelectedPage(SelecetedPage.ContactUs)}
            href={`#${SelecetedPage.Benefits}`}
          >
           <p>Learn more</p>
          </AnchorLink>
    </motion.div>
  )
}

export default Benefit
