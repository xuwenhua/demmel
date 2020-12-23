<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper">
      <img src="../assets/banner/banner-child-2.png" />
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
            <p style="color: #00789e">Demmel AG</p>
            <p>Gruntenweg 14. D-88175 Scheidegg Germany</p>
            <p>Tel:+49 8381919</p>
            <p>Fax:+49 8381919</p>
            <p>www.demmel.de</p>
            <p style="margin-top: 30px; color: #00789e;font-weight:bold;">
              Demmel Metal Components (Nanjing) Co., Ltd.
            </p>
            <p>
              No.7 Heng Tong Da Dao Nanjing Economic-Technology Development Zone
              China,210038
            </p>
            <p>Tel:+86 25 85802378</p>
            <p>Fax:+86 25 85801159</p>
            <p>www.demmel.cn</p>
          </div>
          <div class="sub-pic">
            <img src="../assets/dist/company2.jpg" />
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
import NavBar from '@/components/NavBar'

export default {
  name: 'Solutions',
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
            line-height: 18px;
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
