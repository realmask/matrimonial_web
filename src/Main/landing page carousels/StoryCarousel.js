
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 
const pictures = [
    {
        name:"image1",
        url:"/image1.jpg",
        coupleName:"Rihan & Sonali",
        story:"It was an overall satisfactory experience in Marriage Bureo. I have finally found my life partner through this platform and happily......"

    },
    {
        name:"image2",
        url:"/image2.jpg",
        coupleName:"Arman & Riya",
        story:"It was an overall satisfactory experience in Marriage Bureo. I have finally found my life partner through this platform and happily married. Thank you..",
    },
    {
        name:"image3",
        url:"/js1.jpg",
        coupleName:"Biren Barodia & Aparna Pital",
        story:"matrimonial.com is the best matrimonial web site. I found my soul-mate through matrimonial.com. Thank you very much Jeevansathi Team, who guided me time to time regarding the best way to find my partner",
    },
    {
        name:"image4",
        url:"/js3.jpg",
        coupleName:"Rajesh Gupta & Shipra Agarwal",
        story:"Her father expressed the interest and then we accepted. After that we met twice and decided to get knotted. We did roka ceremony on 17th May 2015. Got engaged on 7 June 2015 and got married on 25th July 2015. I found my life partner on metrimonial. Thanks metrimonial...",
    }
]
 class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade:false,
      arrows:false,
      autoplay:true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      classNames:"slides"
    };
    return (
      <div className="slider-elements">
        <Slider {...settings} >
            {
                pictures.map((photos ,index )=>{
                   return(
                       <div className="slider-images" key={index}>
                         
                           <img className =" images" width="250" height="200" src={photos.url} alt={photos.name}/>
                           <p className="couple-name">{photos.coupleName}</p>
                           <p className="couple-story">{photos.story}</p>
                       </div> 
                   )
                })
            }

        </Slider>
        
      </div>
    );
  }
}


export default SimpleSlider;
/*  */