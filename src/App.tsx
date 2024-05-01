import { useEffect, useState } from "react"
import Navbar from "@/Components/navbar"
import { SelecetedPage } from "@/Shared/type"
import Home from "@/Components/Home"
import Benefits from "@/Components/Benefits"
import OurClasses from "@/Components/OurClasses"
import ContactUs from "@/Components/ContactUs"
import Footer from "@/Components/Footer"



function App() {
  const [selectedPage, setSelectedPage] = useState<SelecetedPage>(SelecetedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelecetedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  },[])
  return (
    <div className="bg-gray-2">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div> 
  )
}
 
export default App
