<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper" :style="{backgroundImage:'url('+bannerImg+')'}"></div>
    <div class="main-wrapper">
      <div class="page-title">
        <div class="title">Quality</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <span>Company</span>
          <span>»</span>
          <router-link to="/company/quality" class="link">Quality</router-link>
        </div>
      </div>
      <div class="page-content">
        <div class="sub-wrapper">
          <div style="overflow:hidden">
            <div class="sub-info" style="float:left;width: 700px;">
              <p>
                Our quality control lab is equipped with necessary measuring devices to fulfill full dimension measurement.
              </p>
              <p>
                Quick inspection jigs are widely designed and used to improve  inspection efficiency and
                measure of precision.
              </p>
              <p>
                Setting up first piece and last piece system to verify  process stability, to meet the <br/>requirement of traceability.
              </p>
              <p>
                System Audit, Process Audit, Product Audit in periodically base to keep continuously <br/>improvement on quality system.
              </p>
              <p>
                Our test lab is equipped with the necessary test devices to monitor and verify the customer <br/>requirement to be fully satisfied.
              </p>
              <p>
                Follow up the product quality performance actively and timely from
                production line to customer.
              </p>
              <p>
                The tools of APQP/PPAP/FMEA/SPC/MSA are continuously used to meet customers' special requirement.
              </p>
            </div>
            <div style="float:right;width:310px;padding-right:2px;">
              <img src="../../assets/quality.jpg" style="width: 310px;border:1px solid #f3f3f3;">
            </div>
          </div>
          <div style="overflow:hidden;">
            <div class="sub-pic" style="width:51%;float:left;">
              <div style="padding-bottom: 10px;overflow:hidden;">
                <img src="../../assets/quality1.jpg" />
                <img src="../../assets/quality2.jpg" />
              </div>
              <div style="padding-bottom: 10px;overflow:hidden;">
                <img src="../../assets/quality3.jpg" />
                <img src="../../assets/quality6.jpg" />
              </div>
            </div>
            <div class="sub-pic" style="width:46%;margin-left: 10px;float:left;">
              <img src="../../assets/quality4.jpg" />
              <img src="../../assets/quality5.jpg" />
            </div>
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
    background-position-y: 48% !important;
    background-blend-mode: soft-light;
    background-color: #3c3c3b;
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
          img {
            float: left;
            width: 49%;
            &:last-child {
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>
