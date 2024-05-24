// import Main from "@/pages/main";
import Footer from '@/components/footer/footer'
import Menu from '@/components/header/menu'
import Image from 'next/image'
import Banner from '@/components/banner/banner'
import Task from '@/components/task/task'
import OurServices from '@/components/ourServices/ourServices'
import Destination from '@/components/destination/destination'
import OurTrending from '@/components/ourTrending/ourTrending'
import AppKotok from '@/components/application/app'
import OurProject from '@/components/ourProject/ourProject'
import WhyTravel from '@/components/whyTravel/whyTravel'
import OurHappy from '@/components/ourHappy/ourHappy'
import OurPartner from '@/components/ourPartner/ourPartner'
import Subscribe from '@/components/subscribe/subscribe'

export default function Home() {
  return (
    <main className="flex vazir flex-col  w-full">
      <Menu />
      <Banner
        img="/images/banner1.png"
      />
      <Task />
{/*       <OurServices /> */}
      <Destination
        text1="Our"
        text2="Destination"
        imgTopLeft="/images/destTopLeft.jpg"
        titleTopLeft="United Kingdom"
        imgTopRight1="/images/topRight1.jpg"
        titleTopRight1="France"
        imgTopRight2="/images/topRight2.jpg"
        titleTopRight2="India"
        imgButRight1="/images/butRight1.jpg"
        titleButRight1="United States"
        imgButRight2="/images/butRight2.jpg"
        titleButRight2="Ukrain"
        imgButtomRight="/images/destButRight.jpg"
        titleButtomRight="Turkey"
      />
      <OurTrending />
      {/* <AppKotok /> */}
      <OurProject imgOurProject="/images/destButRight.jpg" />
      <WhyTravel />
      <div className="happy h-96 mx-auto w-full">
        <OurHappy />
      </div>

      <div className="partner h-48 mx-auto w-4/5">
        <OurPartner />
      </div>

      <Subscribe />

      <div className=''>
        <Footer />
      </div>
    </main>
  )
}
