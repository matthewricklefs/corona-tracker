import React, { Component } from "react";
import ImageSlider from '../picture-carousel/ImageSlider'
import {SliderData} from '../picture-carousel/SliderData'

export default class Home extends Component {
  render() {
    return (
     <div>
       <ImageSlider slides={SliderData}/>
    </div>
    )
  } 
}
