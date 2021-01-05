<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper">
      <img src="../../../assets/banner/banner-child-1.png" />
    </div>
    <div class="main-wrapper">
      <div class="page-title">
        <div class="title">HMI</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <router-link to="/solutions" class="link">Solutions</router-link>
          <span>»</span>
          <router-link to="/solutions/2/index" class="link">HMI</router-link>
        </div>
      </div>
      <div class="page-content">
        <div class="sub-title">DEMMEL - IDENTITY MEETS FUNCTION</div>
        <div class="sub-info">
          <p>
            Human-machine interfaces or keypads and entry systems with striking
            identity and perfect functioning.
          </p>
          <p>
            Our metalTouch® technology combines metallic decoration with touch
            functions and comes with the option of back-lighting. Also available
            are stainless steel keypads for ATMs, piezo keypads for cooking
            appliances, as well as short-stroke keyboards and membrane keypads.
          </p>
          <p>
            We ensure that identity and function make your product stand out
            with an emotional impact.
          </p>
        </div>
        <div class="category-wrapper">
          <div class="item">
            <div class="title">VAS METAL KEYPADS</div>
            <div class="sub-category-wrapper">
              <div class="remark">
                <div class="remark-title">
                  Office-level comfort, but vandal-proof.
                </div>
                <p>
                  You will find our tactile metal keypads (in aluminium or
                  stainless steel) for cash and non-cash...
                </p>
              </div>
            </div>
            <div class="img">
              <img src="../../../assets/dist/products/3_index_1.jpg" />
            </div>
            <div class="btn">READ MORE</div>
          </div>
          <div class="item">
            <div class="title">FOIL KEYPADS</div>
            <div class="sub-category-wrapper">
              <div class="remark">
                <div class="remark-title">
                  Low-cost flat keypads designed to your specifications.
                </div>
                <p>
                  Drawing on our many years of experience in mechanics, screen
                  printing and assembly...
                </p>
              </div>
            </div>
            <div class="img">
              <img src="../../../assets/dist/products/3_index_2.jpg" />
            </div>
            <div class="btn" style="color:#00789e;">READ MORE</div>
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
      .sub-info {
        p {
          line-height: 30px;
        }
      }
      .category-wrapper {
        margin: 0 auto;
        width: 1290px;
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
