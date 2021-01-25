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
        <div class="title">Company History</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <span>Company</span>
          <span>»</span>
          <router-link to="/company/companyhistory" class="link"
            >Company History</router-link
          >
        </div>
      </div>
      <div class="page-content">
        <div class="sub-wrapper">
          <div class="sub-info">
            <div class="ul">
              <p>
                <span class="title">2020</span
                >Over 300 metal parts for automotive industry and other apppcations in supply to Europe, North America and China.
              </p>
              <p>
                <span class="title">2018</span
                >3800㎡ new factory building was completed and put into operation.
              </p>
              <p>
                <span class="title">2017</span
                >IATF 16949 certified by Bureau Veritas and being renewed ever since.
              </p>
              <p>
                <span class="title">2015</span
                >First emblem was supplied to VW, brought the company into Tier 1 supplier.
              </p>
              <p>
                <span class="title">2014</span
                >Passed ISO14001 Environmental Management System certification and being renewed ever since.
              </p>
              <p>
                <span class="title">2013</span
                >Entry Sills introduced into the company
              </p>
              <p>
                <span class="title">2010</span
                >Membrane switch assembly fully transferred from Demmel AG to DMCC.
              </p>
              <p>
                <span class="title">2009</span
                >Metal Keyboard assembly introduced into the company.
              </p>
              <p>
                <span class="title">2008</span
                >The company was taken over 100% by Demmel Group, Germany and changed name into DMCC.
              </p>
              <p>
                <span class="title">2008</span
                >TS 16949 certified by Bureau Veritas and being renewed ever since.
              </p>
              <p>
                <span class="title">2006</span
                >First metal part for automotive industry was nominated by BOS, Germany.
              </p>
              <p>
                <span class="title">2001</span
                > The company was 100% taken over by Matino AG, Germany.
              </p>
              <p>
                <span class="title">1997</span
                >The company was first founded as Nanjing Excellent by a Taiwanese investor, a metal part supplier for colour picture tube makers.
              </p>
            </div>
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
    return {
      bannerImg: require('../../assets/banner/100_own_building_plant1.jpg'),
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
          width: 600px;
          float: left;
          p {
            line-height: 24px;
          }
          .ul {
            p {
              display: block;
              line-height: 25px;
              width: 650px;
              word-break:keep-all;
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
