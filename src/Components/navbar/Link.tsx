import { SelecetedPage } from '@/Shared/type'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string
  selectedPage: SelecetedPage
  setSelectedPage: (value: SelecetedPage)=>void
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage
}: Props) => {
  const lowerCasePage =  page.toLocaleLowerCase().replace(/ /g, "") as SelecetedPage
   
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ""} transit duration-500 hover:text-primary-300`}
      onClick={()=>setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link