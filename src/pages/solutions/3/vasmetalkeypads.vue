<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper" :style="{backgroundImage:'url('+bannerImg+')'}"></div>
    <div class="main-wrapper">
      <div class="page-title">
        <div class="title">Vas Metal Keypads</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <router-link to="/solutions" class="link">Solutions</router-link>
          <span>»</span>
          <router-link to="/solutions/3/index" class="link">HMI</router-link>
        </div>
      </div>
      <div class="page-content">
        <div class="sub-title">Office-level comfort, but vandal-proof.</div>
        <div class="sub-info">
          <p>
            You will find our tactile metal keypads (in aluminium or stainless
            steel) for cash and non-cash applications mainly in public areas.
            They are vandal-proof and consist of very flat numerical and
            alpha-numerical entry assemblies. Our metal keypads typically
            feature in bank machines and POS terminals, ticket and
            information/internet terminals as well as other indoor and outdoor
            public applications. Robust, reliable and secure, they are also
            tamper-proof in line with the latest standards of international
            certification organization.
          </p>
        </div>
        <div class="product-list" style="width: 802px; margin: 0 auto">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in bannerList"
              :key="index"
            >
              <img :src="item.url" />
            </div>
          </div>
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from '@/components/NavBar'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'SolutionsAutoMotive',
  components: { NavBar },
  data() {
    return {
      bannerImg: require('../../../assets/banner/tastatur-2.jpeg'),
      bannerList: [
        {
          url: require('../../../assets/p_1_1.jpg')
        },
        {
          url: require('../../../assets/p_1_4.jpg')
        },
        {
          url: require('../../../assets/p_3_14.jpg')
        },
      ],
    }
  },
  mounted() {
    Swiper('.product-list', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 3,
      spaceBetween: 30,
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  position: relative;
  overflow: hidden;
  .nav-bar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }
  .banner-wrapper {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    z-index: 1;
    height: 300px;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position-y: 48% !important;
    background-blend-mode: soft-light;
    background-color: #3c3c3b;
  }
  .main-wrapper {
    margin-top: 400px;
    z-index: 2;
    position: relative;
    background-color: #fff;
    .page-title {
      width: 1080px;
      margin: 0 auto;
      padding-top: 40px;
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 30px;
        color: #00789e;
      }
      .page-map {
        color: #666;
        .link {
          color: #666;
          text-decoration: none;
        }
      }
    }
    .page-content {
      width: 1080px;
      margin: 0 auto;
      padding-top: 30px;
      padding-bottom: 80px;
      .sub-title {
        color: #00789e;
        font-size: 18px;
      }
      .sub-info {
        p {
          line-height: 30px;
        }
      }
      .category-wrapper {
        margin: 0 auto;
        width: 1080px;
        overflow: hidden;
        padding-top: 70px;
        margin-bottom: 100px;
        padding-bottom: 10px;
        .item {
          float: left;
          width: 306px;
          height: 390px;
          -moz-box-shadow: 0px 0px 5px #999;
          -webkit-box-shadow: 0px 0px 5px #999;
          box-shadow: 0px 0px 5px #999;
          position: relative;
          margin-left: 177px;
          overflow: hidden;
          &:first-child {
            margin-left: 5px;
          }
          .btn {
            border: 3px solid #00789e;
            position: absolute;
            padding: 5px 0;
            width: 120px;
            color: #fff;
            text-align: center;
            top: 70%;
            left: 50%;
            margin-left: -60px;
            cursor: pointer;
            display: none;
            animation-name: zoomIn;
            animation-duration: 1s;
          }
          &:hover {
            .sub-category-wrapper {
              display: block;
              animation-name: bounceIn;
              animation-duration: 1s;
              .remark {
                padding: 0 20px;
                line-height: 30px;
                .remark-title {
                  color: #00789e;
                  font-size: 14px;
                }
              }
            }
            .btn {
              display: block;
            }
          }
          .title {
            color: #00789e;
            font-size: 20px;
            height: 70px;
            line-height: 70px;
            text-align: center;
            cursor: pointer;
          }
          .sub-category-wrapper {
            position: relative;
            display: none;
            animation-name: fadeInDown;
            background-color: #fff;
            margin-bottom: 20px;
            .sub {
              line-height: 30px;
              font-size: 16px;
              color: #000;
              text-align: center;
              cursor: pointer;
              &:hover {
                color: #00789e;
              }
            }
          }
          .img {
            &::before {
              width: 0;
              height: 0;
              border-top: 20px solid #fff;
              border-left: 153px solid transparent;
              border-right: 153px solid transparent;
              content: '';
              display: block;
              position: absolute;
              -webkit-backface-visibility: hidden;
              -moz-backface-visibility: hidden;
              backface-visibility: hidden;
            }
            img {
              width: 306px;
              height: 330px;
            }
          }
        }
      }
    }
  }
}
</style>
