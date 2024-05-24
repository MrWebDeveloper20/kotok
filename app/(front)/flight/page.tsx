import Footer from "@/components/footer/footer";
import Menu from "@/components/header/menu";
import OurPartner from "@/components/ourPartner/ourPartner";
import Banner from "@/components/banner/banner";
import FlightTask from '@/components/flightTask/flightTask'
import TravelHack from '@/components/travelHack/travelHack'
import Destination from '@/components/destination/destination'
import PopularFlight from '@/components/popularFlight/PopularFlight'

export default function Home() {
  return  (
    <main className="flex min-h-screen flex-col items-center justify-between w-full ">
      
      <Menu />
      <div className="banner relative">
        <Banner img='/images/Bannerflight1.png' />
      </div>

      <div className="flighttask w-full h-20">
        <FlightTask />
      </div>

      <div className="TravelHack w-full h-80">
        <TravelHack />
      </div>

      <div className="destination w-full my-5">
       
        <Destination 
        text1="Popular destination from tehran"
        text2=""
        imgTopLeft="/images/flightdestination1.png"
        titleTopLeft="Frakfurt"
        imgTopRight1="/images/flightdestination2.png"
        titleTopRight1="Dubai"
        imgTopRight2="/images/flightdestination3.png"
        titleTopRight2="Istanbul"
        imgButRight1="/images/flightdestination2.png"
        titleButRight1="Dubai"
        imgButRight2="/images/flightdestination3.png"
        titleButRight2="Istanbul"
        imgButtomRight="/images/flightdestination1.png"
        titleButtomRight="Frakfurt"
        />
      </div>

      <div className="popularMFlight w-full">
        <PopularFlight />
      </div>

      <div className="partner mb-60 h-48 mx-auto w-4/5">
        <OurPartner/>
      </div>
        
      <Footer />      
    </main>
  )   
  
}