<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper" :style="{backgroundImage:'url('+bannerImg+')'}"></div>
    <div class="main-wrapper">
      <div class="page-title">
        <div class="title">Environment</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <span>Company</span>
          <span>»</span>
          <router-link to="/company/environment" class="link"
            >Environment</router-link
          >
        </div>
      </div>
      <div class="page-content">
        <div class="sub-wrapper">
          <div class="sub-info">
            <p>
              Demmel developed an environment management system for all its
              important operating areas, and the company holds ISO14001
              certification.
            </p>
            <p>
              We continually improve our certifications in response to market
              and customer demands. You can find our current environmental
              certificates at the bottom of the website.
            </p>
            <p>
              Here's how our Environment Management System ensures us to meet our
              environmental protection obligations:
            </p>
            <p>
              Monitoring, analysis and evaluation of our environmental impact
            </p>
            <p>
              Consideration of environmental impacts on Demmel CN plants
            </p>
            <p>
              Compliance with local and national legal requirements in the
              Demmel CN plants
            </p>
            <p>
              Communication and constructive cooperation internally as well as
              externally
            </p>
            <p>
              Training, education and motivation of our employees to act in an
              eco-friendly manner.
            </p>
          </div>
          <div class="sub-pic">
            <img src="../../assets/environment.jpg" />
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
      padding-bottom: 60px;
      .sub-title {
        color: #00789e;
        font-size: 18px;
      }
      .sub-wrapper {
        overflow: hidden;
        .sub-info {
          float: left;
          width: 800px;
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
          float: right;
          border: 2px solid #f3f3f3;
          img {
            width: 250px;
          }
        }
      }
    }
  }
}
</style>
