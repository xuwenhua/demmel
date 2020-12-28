<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper">
      <Banner />
    </div>
    <div class="main-wrapper">
      <div class="category-wrapper">
        <div class="item">
          <div class="title">AUTOMOTIVE</div>
          <div class="sub-category-wrapper">
            <div class="sub">EMBLEMS</div>
            <div class="sub">ENTRY SILLS</div>
          </div>
          <div class="img">
            <img src="../assets/dist/item1.jpg" />
          </div>
          <div class="btn">READ MORE</div>
        </div>
        <div class="item">
          <div class="title">METAL PARTS</div>
          <div class="sub-category-wrapper">
            <div class="sub">BRACKETS</div>
            <div class="sub">PROFILES</div>
            <div class="sub">BURNER FRAME</div>
          </div>
          <div class="img">
            <img src="../assets/dist/item3.jpg" />
          </div>
        </div>
        <div class="item">
          <div class="title">HMI</div>
          <div class="img">
            <img src="../assets/dist/item2.jpg" />
          </div>
        </div>
      </div>
      <div class="index-about">
        <div class="title">ABOUT DEMMEL CN</div>
        <div class="txt">
          Demmel CN is a subsidiary of Demmel Group, Germany. It develops,
          manufactures and supplies high end decorative parts, metal parts and
          input devices. Our customers include the automotive industry as well
          as its suppliers, the mechanical engineering industry and electrical
          appliance manufacturers.
        </div>
        <div class="txt">
          Continuous innovation is the key to creating unique characteristics
          that set a company apart from its competitors and give it the edge.
          With a long standing experience and supply competence, we are ready to
          deliver to the world and to satisfy our customers up to their
          expectation.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from '@/components/NavBar'
import Banner from '@/components/Banner'

export default {
  name: 'Index',
  components: { NavBar, Banner },
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
    min-height: 900px;
    margin-top: 1010px;
    z-index: 2;
    position: relative;
    background-color: #fff;
    .category-wrapper {
      margin: 0 auto;
      width: 1290px;
      overflow: hidden;
      padding-top: 70px;
      .item {
        float: left;
        width: 306px;
        height: 396px;
        -moz-box-shadow: 0px 0px 5px #999;
        -webkit-box-shadow: 0px 0px 5px #999;
        box-shadow: 0px 0px 5px #999;
        position: relative;
        margin-left: 177px;
        overflow: hidden;
        &:first-child {
          margin-left: 5px;
        }
        &:hover {
          .sub-category-wrapper {
            display: block;
            animation-name: bounceIn;
            animation-duration: 1s;
          }
        }
        .title {
          color: #00789e;
          font-size: 20px;
          height: 60px;
          line-height: 60px;
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
    .index-about {
      width: 1210px;
      margin: 0 auto;
      margin-top: 70px;
      padding: 40px;
      padding-bottom: 60px;
      -moz-box-shadow: 0px 0px 5px #999;
      -webkit-box-shadow: 0px 0px 5px #999;
      box-shadow: 0px 0px 5px #999;
      .title {
        font-size: 20px;
        color: #00789e;
        line-height: 20px;
        margin-bottom: 30px;
      }
      .txt {
        font-size: 14px;
        line-height: 20px;
        margin-top: 10px;
      }
    }
  }
}
</style>
