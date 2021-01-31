<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper" :style="{backgroundImage:'url('+bannerImg+')'}"></div>
    <div class="main-wrapper">
      <div class="page-title">
        <div class="title">Vision & Values</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <span>Company</span>
          <span>»</span>
          <router-link to="/company/visionvalues" class="link">Vision & Values</router-link>
        </div>
      </div>
      <div class="page-content">
        <div class="sub-wrapper">
          <div class="sub-pic">
            <div class="item">
              <img src="../../assets/visionvalues1.jpg" />
              <p style="font-size:14px;">
                <b style="color:#00789e">Personal</b> in internal Demmel CN and external relations
              </p>
            </div>
            <div class="item">
              <img src="../../assets/visionvalues2.jpg" />
              <p style="font-size:14px;">
                <b style="color:#00789e">Trustworthy</b> in goods and services by providing best and constant  performance
              </p>
            </div>
            <div class="item">
              <img src="../../assets/visionvalues3.jpg" />
              <p style="font-size:14px;">
                <b style="color:#00789e">Superior</b> in being open to customers' needs and surpassing their expectations
              </p>
            </div>
            <div class="item">
              <img src="../../assets/visionvalues4.jpg" />
              <p style="font-size:14px;">
                <b style="color:#00789e">Visionary</b> in setting high business and environmental standards to help visualising customers' ideas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from '@/components/NavBar'

export default {
  name: 'CompanyHistory',
  components: { NavBar },
  data() {
    return {
      bannerImg: require('../../assets/banner/100_own_building_plant2.jpg')
    }
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
    background-position-y: -50px !important;
    background-blend-mode: soft-light;
  }
  .main-wrapper {
    min-height: 362px;
    margin-top: 362px;
    z-index: 2;
    position: relative;
    background-color: #fff;
    .page-title {
      width: 1160px;
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
      width: 1160px;
      margin: 0 auto;
      padding-top: 30px;
      padding-bottom: 100px;
      .sub-title {
        color: #00789e;
        font-size: 18px;
      }
      .sub-wrapper {
        overflow: hidden;
        .sub-info {
          p {
            line-height: 24px;
            word-wrap: break-word;
            word-break: normal;
          }
          ul {
            li {
              line-height: 35px;
              width: 800px;
              word-wrap: break-word;
              word-break: normal;
              .title {
                color: #00789e;
                padding-right: 10px;
                font-weight: bold;
              }
            }
          }
        }
        .sub-pic {
          overflow: hidden;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          img {
            width: 230px;
            border: 4px solid #f3f3f3;
            display: block;
            margin: 0 auto;
            -moz-box-shadow: 2px 2px 5px #666; /* 老的 Firefox */
            box-shadow: 2px 2px 5px #666;
          }
          .item {
            width: 230px;
            margin: 0 30px;
          }
        }
      }
    }
  }
}
</style>
