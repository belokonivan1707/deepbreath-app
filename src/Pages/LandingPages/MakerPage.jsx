// // import React, { Component } from "react";
// // import Slider from "react-slick";

// // export class MakerPage extends Component {
// //   render() {
// //     const settings = {
// //       customPaging: function(i) {
// //         return (
// //           <a>
// //             <img src={`https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg`} />
// //           </a>
// //         );
// //       },
// //       dots: true,
// //       dotsClass: "slick-dots slick-thumb",
// //       infinite: true,
// //       speed: 500,
// //       slidesToShow: 1,
// //       slidesToScroll: 1
// //     };
// //     return (
// //       <div>
// //         <h2>Custom Paging</h2>
// //         <Slider {...settings}>
// //           <div>
// //             <img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'} />
// //           </div>
// //           <div>
// //             <img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'} />
// //           </div>
// //           <div>
// //             <img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'} />
// //           </div>
// //           <div>
// //             <img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'} />
// //           </div>
// //         </Slider>
// //       </div>
// //     );
// //   }
// // }

// import React, { Component } from 'react'
// import Slider from 'react-slick'

// export class MakerPage extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       nav1: null,
//       nav2: null,
//     }
//   }

//   componentDidMount() {
//     this.setState({
//       nav1: this.slider1,
//       nav2: this.slider2,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Slider Syncing (AsNavFor)</h2>
//         <h4>First Slider</h4>
//         <Slider asNavFor={this.state.nav2} ref={(slider) => (this.slider1 = slider)}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//         <h4>Second Slider</h4>
//         <Slider
//           asNavFor={this.state.nav1}
//           ref={(slider) => (this.slider2 = slider)}
//           slidesToShow={3}
//           swipeToSlide={true}
//           focusOnSelect={true}
//         >
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     )
//   }
// }

// import React from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props
//   return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props
//   return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />
// }

// export const MakerPage = () => {
//   const setting = {
//     dots: true,
//     dotsClass: 'slick-dots slick-thumb',
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   }

//   return (
//     <>
//       <Slider {...setting}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </>
//   )
// }
import Slider from 'react-slick'
import { useState } from 'react'
import {
  Container,
  SlickImgWrapp,
  ImgInSlickSlider,
  ImgWrSmall,
  ImgInSlickSliderSmall,
} from '../../Pages/LandingPages/styled'

export function MakerPage({ props }) {
  const { info, pictures } = sliderData
  const [state, setState] = useState({ oldSlide: 0, activeSlide: 0, activeSlide2: 0 })

  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: '100px',
    beforeChange: (current, next) => setState({ activeSlide: next }),
  }

  return (
    <>
      <p>
        activeSlide: <strong>{state.activeSlide}</strong>
      </p>
      <Container>
      {<div></div>}
        <Slider {...settings}>
          {pictures.map((item) => {
            return (
              <SlickImgWrapp key={item.id}>
                <ImgWrSmall>
                  <ImgInSlickSliderSmall src={item.src} />
                </ImgWrSmall>
              </SlickImgWrapp>
            )
          })}
        </Slider>
      </Container>
    </>
  )
}

const sliderData = {
  info: {
    title: 'Get discovered with the right community',
    text: 'Reach a diverse global community of food lovers by running bespoke experiences.',
    textBtn: 'Let’s start!',
  },

  pictures: [
    {
      id: 1,
      src: 'https://dogcentr.ru/wp-content/uploads/2014/05/1161.jpg',
    },
    {
      id: 2,
      src: 'https://petstime.ru/wp-content/uploads/2021/03/haski4.jpg',
    },
    {
      id: 3,
      src: 'https://sobaky.info/wp-content/uploads/2019/10/samye-opasnye.jpg',
    },
  ],
}
