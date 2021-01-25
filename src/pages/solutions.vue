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
        <div class="title">Solutions</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <router-link to="/solutions" class="link">Solutions</router-link>
        </div>
      </div>
      <div class="page-content">
        <div class="sub-title">BUSINESS DIVISIONS OF DEMMEL</div>
        <div class="sub-info">
          <p>
            As a renowned hi-tech company, Demmel group have been producing
            innovative solutions for 130 years, giving products a distinctive
            identity. That includes input devices and decorative parts for
            kitchen appliances, ATMs, touch solutions in mechanical engineering,
            decorative parts and functional parts for the automotive industry.
            Every day, millions of people come into contact with our products
            and rely on their quality and precision.
          </p>
        </div>
        <div class="category-wrapper">
          <div class="item">
            <div class="title">AUTOMOTIVE</div>
            <div class="sub-category-wrapper">
              <div class="sub" @click="handleUrl('/solutions/1/emblems')">EMBLEMS</div>
              <div class="sub" @click="handleUrl('/solutions/1/entrysills')">ENTRY SILLS</div>
            </div>
            <div class="img">
              <img src="../assets/dist/item1.jpg" />
            </div>
            <div class="btn" @click="handleUrl('/solutions/1/index')">READ MORE</div>
          </div>
          <div class="item">
            <div class="title">METAL PARTS</div>
            <div class="sub-category-wrapper">
              <div class="sub" @click="handleUrl('/solutions/2/brackets')">BRACKETS</div>
              <div class="sub" @click="handleUrl('/solutions/2/profiles')">PROFILES</div>
              <div class="sub" @click="handleUrl('/solutions/2/burnerframe')">BURNER FRAME</div>
            </div>
            <div class="img">
              <img src="../assets/dist/item3.jpg" />
            </div>
            <div class="btn" style="color:#00789e;" @click="handleUrl('/solutions/2/index')">READ MORE</div>
          </div>
          <div class="item">
            <div class="title">HMI</div>
            <div class="sub-category-wrapper">
              <div class="sub" @click="handleUrl('/solutions/3/vasmetalkeypads')">VAS METAL KEYPADS</div>
              <div class="sub" @click="handleUrl('/solutions/3/foilkeypads')">FOIL KEYPADS</div>
            </div>
            <div class="img">
              <img src="../assets/dist/item2.jpg" />
            </div>
            <div class="btn" @click="handleUrl('/solutions/3/index')">READ MORE</div>
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
    return {}
  },
  methods: {
    handleUrl(url) {
      if (url) {
        this.$router.push(url)
      }
    },
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
          margin-left: 78px;
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
