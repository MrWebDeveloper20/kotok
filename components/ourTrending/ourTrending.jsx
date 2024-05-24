import React from 'react'
import OurTrndingMenu from './ourTrendingMenu'
import CardTrending from '@/components/ourTrending/cardTrending'

const OurTrending = () => {
  return (
    <div className="flex flex-col justify-start items-center w-10/12 mx-auto mt-96">
     
      <div className="menu w-full">
        <OurTrndingMenu />
      </div>

      <div className="card  flex flex-col w-full h-auto">
        <div className="cardTop  flex flex-row w-full h-auto ">
          <div className="card1 w-1/3 h-auto ">
            <CardTrending imgTrendCard='/images/card1.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>

          <div className="card2 w-1/3 h-auto ">
            <CardTrending imgTrendCard='/images/card2.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>

          <div className="card3 w-1/3 h-auto ">
            <CardTrending imgTrendCard='/images/card3.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>
        </div>

        <div className="cardBut mt-48 flex flex-row w-full h-auto ">
        <div className="card4 w-1/3 h-fit ">
            <CardTrending imgTrendCard='/images/card4.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>

          <div className="card5 w-1/3 h-auto ">
            <CardTrending imgTrendCard='/images/card5.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>

          <div className="card6 w-1/3 h-auto ">
            <CardTrending imgTrendCard='/images/card6.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTrending
