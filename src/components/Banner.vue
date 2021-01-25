<template>
  <div class="banner" :style="{ height: clientHeight }">
    <div class="swiper-container" :style="{ height: clientHeight }">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in bannerList"
          :key="index"
        >
          <img :src="item.url" style="width: 100%;height: auto;"/>
          <!-- <div class="left-title">
            <div class="big-title">YOU SEE</div>
            <div class="small-title">{{item.leftTitle}}</div>
          </div>
          <div class="right-title">
            <div class="big-title">We SEE</div>
            <div class="small-title">{{item.rightTitle}}</div>
            <div class="info-btn">Read More</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'Banner',
  data() {
    return {
      bannerList: [
        {
          url: require('../assets/banner/banner1.jpeg'),
          leftTitle: 'a Car',
          rightTitle: 'a branding challenge',
        },
      ],
      clientHeight: '',
    }
  },
  mounted() {
    Swiper('.swiper-container', {})
  },
  created() {
    this.initHeight()
  },
  methods: {
    initHeight() {
      this.clientHeight = document.documentElement.clientHeight - 100 + 'px'
    },
  },
}
</script>
<style lang="scss" scoped>
.swiper-container {
  height: 1080px;
  .swiper-wrapper {
    .swiper-slide {
      position: relative;
      display: flex;
      justify-content: center;
      overflow: hidden;
      &:hover {
        .left-title,
        .right-title {
          display: block;
        }
      }
      .left-title,
      .right-title {
        animation-name: fadeIn;
        animation-duration: 1s;
        width: 310px;
        height: 100%;
        color: #fff;
        background: rgba($color: #000000, $alpha: 0.4);
        position: absolute;
        z-index: 2;
        .big-title {
          font-size: 30px;
          line-height: 50px;
        }
        .small-title {
          font-size: 20px;
        }
        display: none;
      }
      .left-title {
        left: 0;
        &::after {
          border-top: 300px solid transparent;
          border-left: 20px solid rgba($color: #000000, $alpha: 0.4);
          border-bottom: 300px solid transparent;
          top: 0;
          right: -40px;
          content: '';
          display: block;
          position: absolute;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          backface-visibility: hidden;
          width: 20px;
        }
        .big-title {
          text-align: right;
          padding-right: 30px;
          padding-top: 200px;
          animation-name: fadeInLeft;
          animation-duration: 0.6s;
        }
        .small-title {
          text-align: right;
          padding-right: 30px;
          padding-top: 10px;
          animation-name: fadeInLeft;
          animation-duration: 1s;
        }
      }
      .right-title {
        right: 0;
        &::before {
          border-top: 300px solid transparent;
          border-right: 20px solid rgba($color: #000000, $alpha: 0.4);
          border-bottom: 300px solid transparent;
          top: 0;
          left: -40px;
          content: '';
          display: block;
          position: absolute;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          backface-visibility: hidden;
          width: 20px;
        }
        .big-title {
          text-align: left;
          padding-left: 30px;
          padding-top: 200px;
          animation-name: fadeInRight;
          animation-duration: 0.6s;
        }
        .small-title {
          text-align: left;
          padding-left: 30px;
          padding-top: 10px;
          animation-name: fadeInRight;
          animation-duration: 1s;
        }
        .info-btn {
          margin-left: 30px;
          margin-top: 30px;
          display: block;
          width: 86px;
          text-align: center;
          height: 30px;
          line-height: 30px;
          border: 1px solid #fff;
          color: #fff;
          font-size: 13px;
          border-radius: 3px;
          cursor: pointer;
          animation-name: fadeInRight;
          animation-duration: 1s;
        }
      }
    }
  }
}
.banner {
  height: 1080px;
}
</style>
