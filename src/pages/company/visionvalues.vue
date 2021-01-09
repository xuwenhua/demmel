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
        <div class="title">Vision & Values</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <span>Company</span>
          <span>»</span>
          <router-link to="/company/visionvalues" class="link">Vision & Values</router-link>
        </div>
      </div>
      <div class="page-content">
        <div class="sub-wrapper">
          <div class="sub-info">
            <p>
              <b style="color:#00789e">Personal</b>, for human contact is the basis for every business relation, not only for internal DMCC but also for all external relations.
            </p>
            <p>
              <b style="color:#00789e">Commitment</b>, for proving the best and constant  performance, not only in goods but also in service.
            </p>
            <p>
              <b style="color:#00789e">Excellence</b>, for surpassing customersi expectations and always being open to their needs and further improvement.
            </p>
            <p>
              <b style="color:#00789e">Visionary</b>, for setting high business and environmental standards, granting a global support to our customers and helping to visualise their ideas.
            </p>
          </div>
          <div class="sub-pic">
            <img src="../../assets/visionvalues1.jpg" />
            <img src="../../assets/visionvalues2.jpg" />
            <img src="../../assets/visionvalues3.jpg" />
            <img src="../../assets/visionvalues4.jpg" />
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
      .sub-wrapper {
        overflow: hidden;
        .sub-info {
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
          overflow: hidden;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          img {
            width: 260px;
          }
        }
      }
    }
  }
}
</style>
