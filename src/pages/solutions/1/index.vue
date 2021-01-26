<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div
      class="banner-wrapper"
      :style="{ backgroundImage: 'url(' + bannerImg + ')' }"
    ></div>
    <div class="main-wrapper">
      <div class="page-title">
        <div class="title">Automotive Identity</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <router-link to="/solutions" class="link">Solutions</router-link>
          <span>»</span>
          <router-link to="/solutions/1/index" class="link"
            >Automotive Identity</router-link
          >
        </div>
      </div>
      <div class="page-content">
        <div class="sub-title">DEMMEL - WE CREATE IDENTITY</div>
        <div class="sub-info">
          <p>Whenever it's about your brand.</p>
          <p>
            In Automotive, we are able to add value to your brand applying smart
            technical solutions, i.e by integrating LED into your trim pieces or
            emblems using modern back- molding and ultrasonic welding processes.
          </p>
          <p>
            Ask us for any individual solution you may have in mind. Within the
            Demmel Group, we have decades of worthy expertise in Metal,
            Electronics, Printing, and Design.
          </p>
        </div>
        <div class="category-wrapper">
          <div class="item">
            <div class="title" @click="handleUrl('/solutions/1/emblems')">
              EMBLEMS
            </div>
            <div class="sub-category-wrapper">
              <div class="remark">
                <div
                  class="remark-title"
                  @click="handleUrl('/solutions/1/emblems')"
                >
                  DEMMEL - WE CREATE IDENTITY
                </div>
              </div>
            </div>
            <div class="img">
              <img src="../../../assets/dist/products/1_index_1.jpg" />
            </div>
            <!-- <div class="btn" @click="handleUrl('/solutions/1/emblems')">READ MORE</div> -->
          </div>
          <div class="item">
            <div class="title" @click="handleUrl('/solutions/1/entrysills')">
              ENTRY SILLS
            </div>
            <div class="sub-category-wrapper">
              <div class="remark">
                <div
                  class="remark-title"
                  @click="handleUrl('/solutions/1/entrysills')"
                >
                  DEMMEL - WE CREATE IDENTITY
                </div>
              </div>
            </div>
            <div class="img">
              <img src="../../../assets/dist/products/1_index_2.jpg" />
            </div>
            <!-- <div class="btn" @click="handleUrl('/solutions/1/entrysills')">READ MORE</div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="footer-wrapper">
      <Footer />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from '@/components/NavBar'

export default {
  name: 'SolutionsAutoMotive',
  components: { NavBar },
  data() {
    return {
      bannerImg: require('../../../assets/banner/100_fot_bmw_sw.jpeg'),
    }
  },
  methods: {
    handleUrl(url) {
      if (url) {
        this.$router.push(url)
      }
    },
  },
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
    min-height: 362px;
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
            top: 50%;
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
                  cursor: pointer;
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
