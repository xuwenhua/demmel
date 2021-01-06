<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper">
      <img src="../../assets/banner/banner-child-3.jpg" />
    </div>
    <div class="main-wrapper">
      <div class="page-title">
        <div class="title">Quality</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <router-link to="/company/quality" class="link">Quality</router-link>
        </div>
      </div>
      <div class="page-content">
        <div class="sub-wrapper">
          <div class="sub-info">
            <p>
              Our quality control lab is equipped with necessary measuring devices to fulfill full dimension measurement.
            </p>
            <p>
              Quick inspection jigs are widely designed and used to improve  inspection efficiency and
              measure of precision.
            </p>
            <p>
              Setting up first piece and last piece system to verify  process stability, to meet the requirement of traceability.
            </p>
            <p>
              System Audit, Process Audit, Product Audit in periodically base to keep continuously improvement on quality system.
            </p>
            <p>
              Our test lab is equipped with the necessary test devices to monitor and verify the customer requirement to be fully satisfied.
            </p>
            <p>
              Follow up the product quality performance actively and timely from
              production line to customer.
            </p>
            <p>
              The tools of APQP/PPAP/FMEA/SPC/MSA are continuously used to meet customers' special requirement.
            </p>
          </div>
          <div class="sub-pic">
            <img src="../../assets/company.jpg" />
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
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  position: relative;
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
  }
  .main-wrapper {
    min-height: 362px;
    margin-top: 362px;
    z-index: 2;
    position: relative;
    background-color: #fff;
    .page-title {
      width: 1290px;
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
      width: 1290px;
      margin: 0 auto;
      padding-top: 30px;
      .sub-title {
        color: #00789e;
        font-size: 18px;
      }
      .sub-wrapper {
        overflow: hidden;
        .sub-info {
          width: 800px;
          float: left;
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
          width: 400px;
          img {
            width: 400px;
          }
        }
      }
    }
  }
}
</style>
