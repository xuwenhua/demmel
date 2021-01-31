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
                >Supplied to Europe, North America and China with over 300 metal parts in automotive industry and other applications.
              </p>
              <p>
                <span class="title">2018</span
                >Expanded 3800㎡ new factory building.
              </p>
              <p>
                <span class="title">2017</span
                >IATF 16949 certified by Bureau Veritas and being renewed ever since.
              </p>
              <p>
                <span class="title">2015</span
                >Being SVW Tier 1 with first emblem.
              </p>
              <p>
                <span class="title">2014</span
                >ISO-14001 certified and being renewed ever since.
              </p>
              <p>
                <span class="title">2013</span
                >Brought in entry sills.
              </p>
              <p>
                <span class="title">2010</span
                >Brought in membrane switch assembly.
              </p>
              <p>
                <span class="title">2009</span
                >Brought in keyboard assembly.
              </p>
              <p>
                <span class="title">2008</span
                >100% taken over by Demmel Group in Germany.
              </p>
              <p>
                <span class="title">2008</span
                >TS 16949 certified by Bureau Veritas and being renewed ever since.
              </p>
              <p>
                <span class="title">2006</span
                >Nominated by BOS Germany for first metal part in car industry.
              </p>
              <p>
                <span class="title">2001</span
                >100% taken over by Matino AG Germany.
              </p>
              <p>
                <span class="title">1997</span
                >First founded as Nanjing Excellent by a Taiwanese investor, a metal part supplier for colour picture tube makers.
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
