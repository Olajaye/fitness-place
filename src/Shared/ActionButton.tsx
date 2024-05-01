import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelecetedPage } from './type'

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelecetedPage)=>void
}

const ActionButtin = ( {children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
      onClick={() => setSelectedPage(SelecetedPage.ContactUs)}
      href={`${SelecetedPage.ContactUs}`}
    >
     {children}
    </AnchorLink>
  )
}

export default ActionButtin