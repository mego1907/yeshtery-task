import React, { Component } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import "./product-slider.scss"

export default class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      thumbsSwiper: null
    }
  }

  render() {
    const { images } = this.props;

    return (
      <>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          // navigation={true}
          thumbs={{ swiper: this.state.thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {
            images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <Swiper
          onSwiper={(val) => this.setState({ ...this.state, thumbsSwiper: val })}
          spaceBetween={9}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          navigation={true}
        >
          {
            images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </>
    )
  }
}
