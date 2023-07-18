<template>
  <div class="main">
  <div style="clear: both;background-color: white">
    <div class="index_body">
      <section class="top_banner">
        <img src="@/assets/section01.jpg" alt="">
        <div class="banner_body">
          <div class="slogan">
            <span>666</span>
            <span>雨天小助手</span>
          </div>
          <img src="@/assets/banner01.png" alt="" style="width: 40%;float: right">
        </div>
        <img @click="scroll2" class="index_down" src="@/assets/index__down.png" alt="↓">
      </section>
      <section class="intro">
        <div class="intro_main">
          <div class="intro_left">
            <img src="@/assets/intro.png" alt="">
          </div>
          <div class="intro_right">
            <div class="intro_font">雨你同在，</div><br>
            <div class="intro_font">好聚好散。</div><br>
            <div class="intro_font">不能送你一场雨，</div><br>
            <div class="intro_font">那就在雨里送你。</div><br>
            <div class="intro_font">你为别人风里雨里，</div><br>
            <div class="intro_font">我来为你遮风挡雨。</div><br>
            <div class="intro_font">只能陪你走一小段，</div><br>
            <div class="intro_font">那就选有风雨的这一段。</div>
          </div>
        </div>
      </section>
      <section class="index_business" id="business">
        <div class="index_business-main">
          <div class="index_business-title">
            <div class="title" >业务布局</div>
            <div class="subtitle">Business Layout</div>
          </div>
              <!--轮播图-->
          <div class="index_business-body">
            <swiper
                :loop="true"
                :modules="modules"
                :scrollbar="{ draggable: true , hide :false}"
                class="mySwiper">
              <swiper-slide class="swiper-slide">
                <div class="swiper-item">
                  <img src="@/assets/swiper-item01.png" alt="">
                  <span class="swiper-item-title">共享雨伞</span>
                  <span class="swiper-item-subtitle">让生活更美好</span>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
              <swiper-slide class="swiper-slide">Slide 3</swiper-slide>
            </swiper>
          </div>
        </div>
      </section>
      <section class="one-screen">
        <swiper
            :loop="true"
            :modules="modules"
        >
          <swiper-slide class="swiper-slide screenImg01">
            <div class="tech-body">
              <div class="tech-body-title">普惠</div>
              <div style="width: 300px;text-align: left;margin-left: 20px">坚持以用户为中心，</div>
              <div style="width: 330px;text-align: left;margin-left: 20px">提供更多可负担的选择。</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide screenImg02">
            <div class="tech-body">
              <div class="tech-body-title">安全</div>
              <div style="width: 300px;text-align: left;margin-left: 20px">严守安全防线，</div>
              <div style="width: 330px;text-align: left;margin-left: 20px">为每一程保驾护航。</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide screenImg03">
            <div class="tech-body">
              <div class="tech-body-title">科技</div>
              <div style="width: 300px;text-align: left;margin-left: 20px">推动共享计划，</div>
              <div style="width: 330px;text-align: left;margin-left: 20px">为用户提供极致体验。</div>
            </div>
          </swiper-slide>
        </swiper>
      </section>
      <section class="duty">
        <div class="duty_main">
          <div class="duty_top">
            <div class="duty_title">
              <div class="title" id="business">社会责任</div>
              <div class="subtitle">Social Responsibility</div>
            </div>
          </div>
          <div class="duty-statistics">
            <div>
              <img class="duty-earth" src="@/assets/earth.gif" alt="地球">
            <div style="font-size: xx-large;color: #008cff">共享出行为地球减负</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  </div>
</template>

<script>


import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css/pagination";
import 'swiper/css';
import {Pagination ,Scrollbar } from "swiper/modules";
import 'swiper/css/scrollbar';

export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    scroll2(){
      const targetElement = document.getElementById('business');
      const topPosition = targetElement?.offsetTop || 1000;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
      // console.log(document.getElementById('business').offset().top)
    }
  },
  setup() {
    return {
      modules: [Pagination,Scrollbar],

    };
  },
};
function scroll2() {

}
</script>

<style scoped>
.top_banner{
  width: 100%;
  min-width: 12rem;
  height: 100%;
  background: url("@/assets/section01.jpg");
  position: relative;
  background-size: cover;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
}
.top_banner::after {
  content: " ";
  position: absolute;
  background: #000;
  left: 0;
  top: 0;
  opacity: .5;
  width: 100%;
  height: 853.750px;
}
.top_banner img {
  object-fit: fill;
  width: 100%;
  height: 100%;
  position: relative;
}
.top_banner .banner_body{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 50%;
  min-width: 12rem;
  z-index: 3;
  display: flex;
}
.top_banner .banner_body .slogan{
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: .68rem;
  font-weight: 500;
  width: 50%;
}
.top_banner .banner_body .slogan span{
  font-size: xxx-large;
  text-align: left;
  width: 100%;
  margin-top: 10px;
}
.top_banner .index_down{
  position: absolute;
  bottom: .81rem;
  width: 3%;
  height: 2%;
  left: 50%;
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  animation: toggleMove .8s infinite;
  z-index: 5;
  cursor: pointer
}
.intro{
  margin-top: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  height: 500px;
  box-sizing: border-box;
  background: #f5f8fb;
}
.intro_main{
  height: 100%;
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: row;

}
.intro_left{
  margin-top: 50px;
  position: relative;
  width: 320px;
}
.intro_right{
  margin-top: 50px;
  margin-left: 230px;
  width: 300px;
  height: 100%;
}
.intro_font{
  font-size: large;
  margin: 10px auto;
}
.index_business{
  position: relative;
  display: flex;
  justify-content: center;
  height: 500px;
  box-sizing: border-box;
}
.index_business-main{
  height: 100%;
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.index_business-title{
  margin-bottom: 50px;
}
.title{
  margin-top: 2rem;
  font-size: 1.8rem;
  color: #333;
  text-align: left;
}
.subtitle{
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
  text-align: left;
}
.index_business-body{
  position: relative;
  height: 200px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 80px;
}
.swiper {
  width: 100%;
  height: 100%;
}
.index_business .swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.index_business-body img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-item{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.swiper-item img{
  width: 135px;
  height: 135px;
}
.swiper-item-title{
  font-size: 1.2rem;
  color: #333;
  margin-top: 5px;
  margin-bottom: 5px;
}
.swiper-item-subtitle{
  text-align: center;
  width: 100%;
  font-size: .8rem;
}
.screenImg01{
  background: url("@/assets/screen01.png");
}
.screenImg02{
  background: url("@/assets/screen02.jpg");
}
.screenImg03{
  background: url("@/assets/screen03.png");
}
.one-screen .swiper-slide{
  height: 100vh;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  cursor: pointer;
  transition: background-size .4s ease;
}
.tech-body{
  position: absolute;
  left: 200px;
  top: 20vh;
  color: #fff;
  font-size: 30px;
}
.tech-body-title{
  font-size: 50px;
  width: 130px;
  color: #fff;
  margin-bottom: 20px;
}
.duty{
  position: relative;
  display: flex;
  justify-content: center;
  height: 550px;
  box-sizing: border-box;
}
.duty_main{
  height: 100%;
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.duty_top{
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.duty_title{

}
</style>