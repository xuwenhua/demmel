<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper">
      <img src="../assets/banner/100_fot_contact.jpeg" />
    </div>
    <div class="main-wrapper">
      <div class="page-title">
        <div class="title">Contact</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <router-link to="/contact" class="link">Contact</router-link>
        </div>
      </div>
      <div class="page-content">
        <div class="sub-wrapper">
          <div class="sub-info">
            <p style="color: #00789e; font-weight: bold">
              Demmel Metal Components (Nanjing) Co., Ltd.
            </p>
            <p>
              <b style="color: #00789e">Company Address:</b> No.7 Heng Tong Da
              Dao Nanjing Economic-Technology Development Zone China,210038
            </p>
            <p><b style="color: #00789e">Tel:</b> +86 25 85802378</p>
            <p><b style="color: #00789e">Fax:</b> +86 25 85801159</p>
            <a href="http://www.demmel.cn">www.demmel.cn</a>
          </div>
          <div class="sub-pic">
            <baidu-map
              class="bm-view"
              :center="location"
              :scroll-wheel-zoom="true"
              :zoom="zoom"
            >
              <bm-marker
                :position="{ lng: 118.86895, lat: 32.151562 }"
                :dragging="true"
                animation="BMAP_ANIMATION_BOUNCE"
              >
                <bm-label
                  content="Demmel Metal Components (Nanjing) Co., Ltd, China"
                  :labelStyle="{ color: 'red', fontSize: '16px' }"
                  :offset="{ width: -165, height: 30 }"
                />
              </bm-marker>
            </baidu-map>
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
  name: 'Solutions',
  components: { NavBar },
  data() {
    return {
      location: {
        lng: 118.86895,
        lat: 32.151562,
      },
      zoom: 14,
    }
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
    display: flex;
    justify-content: center;
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
          width: 580px;
          float: left;
          p {
            line-height: 18px;
          }
        }
        .sub-pic {
          float: right;
          width: 500px;
          .bm-view {
            width: 500px;
            height: 400px;
          }
        }
      }
    }
  }
}
</style>
