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
          <div style="overflow: hidden">
            <div class="sub-info" style="float: left; width: 700px">
              <p>
                We have effective IATF16949:2016 and quality tools e.g. APQP,
                FMEA, PPAP, MSA, SPC etc.. Besides, with decades of experience
                in on-site audits by different customers, we finally earn their
                recognition and cooperation.
              </p>
              <p>
                We have one professional quality team, beyond that, necessary
                inspection and test equipment. We also establish measurement
                center to monitor manufacture process, moveover, performance
                laboratory to verify product performance to meet customers’
                special requirements, aiming at providing customers with
                satisfactory products and services.
              </p>
              <p>
                We uphold the concept of "lean management, quality comes first,
                continuous improvement, accomplish customer", invariably take
                quality as the foundation, and mobilize all employees to
                participate in quality management. Our products have been
                continuously sold to Europe, America and domestic well-known
                customers, achieving strong competitiveness in the market over
                the years.
              </p>
              <p>
                We will adhere to the path of sustainable development,
                continuous pursuit of product progress and quality excellence.
              </p>
            </div>
            <div style="float: right; width: 310px; padding-right: 2px">
              <img
                src="../../assets/quality.jpg"
                style="width: 310px; border: 1px solid #f3f3f3"
              />
            </div>
          </div>
          <div style="overflow: hidden">
            <div class="sub-pic" style="width: 51%; float: left;padding-right: 0;">
              <div style="padding-bottom: 10px;padding-right:6px; overflow: hidden">
                <img src="../../assets/quality1.jpg" style="margin-bottom:8px;" />
                <img src="../../assets/quality2.jpg" />
              </div>
              <div style="padding-bottom: 10px;padding-right:6px; overflow: hidden">
                <img src="../../assets/quality3.jpg" style="margin-bottom:8px;" />
                <img src="../../assets/quality6.jpg" />
              </div>
            </div>
            <div
              class="sub-pic"
              style="width: 46%; margin-left: 10px; float: left"
            >
              <img src="../../assets/quality5.jpg" />
              <img src="../../assets/quality4.jpg" />
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
      bannerImg: require('../../assets/banner/100_own_building_plant2.jpg'),
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
            text-align:justify;
            text-justify:inter-ideograph;
            word-wrap:break-word;
            word-break:break-all;
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
          padding-right: 6px;
          padding-bottom: 6px;
          img {
            float: left;
            width: 49%;
            -moz-box-shadow: 2px 2px 5px #666; /* 老的 Firefox */
            box-shadow: 2px 2px 5px #666;
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
