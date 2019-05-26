<template>
  <div class="wrap">
    <swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper" v-if="banner.length!=0">
      <swiper-slide v-for="(item,index) in banner" :key="index">
        <img :src="item.image" alt=""/>
      </swiper-slide>
      <!--小圆点 -->
      <div class="swiper-pagination" v-for="(item,index) in banner" :key="index" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css";
  import {swiper, swiperSlide} from "vue-awesome-swiper";

  export default {
    data() {
      return{
        imgIndex: 4,
        banner:[
          {image:'/static/img/1.jpg'},
          {image:'/static/img/2.jpg'},
          {image:'/static/img/3.jpg'},
          {image:'/static/img/4.jpg'},
        ],
        swiperOption: {
          notNextTick: true,
          //循环
          loop: true,
          //设定初始化时slide的索引
          initialSlide: 0,
          //自动播放
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          //效果
          effect : 'fade',

          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //分页器设置
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets"
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }

  }
</script>

<style scoped>
  .wrap{
    padding: 20px 0;
  }
  .swiper-wrap{
    max-width: 1280px;
    max-height: 460px;
  }
  .swiper-wrap img{
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px){
    .swiper-button-prev{
      display: none;
    }
    .swiper-button-next{
      display: none;
    }
  }
</style>
