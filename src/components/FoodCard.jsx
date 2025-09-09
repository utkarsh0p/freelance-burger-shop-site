import React from 'react'

import { burger,cardBackground,crusburgBrandingCard} from '../constants'
import SlideButton from './SlideButton'
const FoodCard = ({img,foodItem,itemAbout}) => {
  return (
    <div className="padding-responsive">
        <div className="flex w-full auto relative flex-col border-2 bg"
        style={{backgroundImage:`url(${cardBackground})`}}>
            <div className="img-container w-[50%]">
                <img className="w-full" h-auto src={burger} alt="food-item" />
            </div>
            <div className="bg-green-200 md:absolute md:top-[100%] md:left-0 md:right-0 flex justify-center flex-col items-center">
                <h2 className="text-2xl font-body font-extrabold">Burgers</h2>
                <p className="text-xl font-body">Crips and delicious</p>
                <div>
                    <SlideButton value="burgers" url="" nav="/menu" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoodCard