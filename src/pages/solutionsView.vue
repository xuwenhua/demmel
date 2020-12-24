<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper">
      <img src="../assets/banner/banner-child-1.png" />
    </div>
    <div class="main-wrapper">
      <div class="page-title">
        <div class="title">HMI</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <router-link to="/solutions" class="link">Solutions</router-link>
          <span>»</span>
          <router-link to="/solutions/1" class="link">HMI</router-link>
        </div>
      </div>
      <div class="page-content">
        <div class="sub-title">BUSINESS DIVISIONS OF DEMMEL</div>
        <div class="sub-info">
          <p>When it’s about your brand identity.</p>
          <p>
            In recent years, we have been able to create added value for our
            customers in the automotive industry with innovations such as the
            back-injection of emblems or illumination of decorative parts.
          </p>
          <p>
            Also highly in demand due to the success of mobile touch devices are
            our decorative control elements with slider or touch functions.
            Simply ask us about solutions tailored to you.
          </p>
          <p>
            Thanks to synergy effects, we can coordinate electronics and metal
            components within the Demmel Group.
          </p>
          <img src="../assets/banner/banner2.jpg" alt="" />
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
import NavBar from "@/components/NavBar";

export default {
  name: "Solutions",
  components: { NavBar },
  data() {
    return {};
  },
};
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
      .category-wrapper {
        margin: 0 auto;
        width: 1290px;
        overflow: hidden;
        padding-top: 70px;
        .item {
          float: left;
          width: 310px;
          height: 400px;
          border: 1px solid #b7b7b7;
          position: relative;
          margin-left: 177px;
          &:first-child {
            margin-left: 0;
          }
          &:hover {
            .sub-category-wrapper {
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
            padding-bottom: 30px;
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
            img {
              width: 310px;
              height: 330px;
            }
          }
        }
      }
      .sub-info {
        img {
          display: block;
          max-width: 1290px;
        }
      }
    }
  }
}
</style>
