import React, { useState } from 'react';

import  "./slider.css";

//components
import dataSlider from "../Slider/dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider() {

  const[slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
        setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length){
        setSlideIndex(1)
    }
  }
  
  const prevSlide = () => {
if (slideIndex !== 1) {
    setSlideIndex(slideIndex - 1)
} else if (slideIndex === 1){
   setSlideIndex(dataSlider.length)
}
  }
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return(
                    <div  
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                         >
                        <img 
                        src={'../../../img/istockphoto-1208657520-612x612.jpeg'}
                        alt=""
                        />
                    </div>)
})}
             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
             <BtnSlider moveSlide={nextSlide} direction={"next"}/>
  
     
        </div>
    )
}