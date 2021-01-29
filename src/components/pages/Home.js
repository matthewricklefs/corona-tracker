import React, { Component } from "react";
import ImageSlider from '../picture-carousel/ImageSlider'
import {SliderData} from '../picture-carousel/SliderData'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'

export default class Home extends Component {
  render() {
    return (
     <div className="slider-container">
       <ImageSlider slides={SliderData}/>
       <img src={img1} alt="corona"></img>
       <img src={img2} alt="corona"></img>
       <img src={img3} alt="corona"></img>
    </div>
    )
  } 
}
