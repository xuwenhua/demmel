<template>
  <div class="content">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="banner-wrapper">
      <img src="../assets/banner/banner-child-3.jpg" />
    </div>
    <div class="main-wrapper">
      <div class="page-title">
        <div class="title">Company</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <router-link to="/company/1" class="link"
            >Company History</router-link
          >
        </div>
      </div>
      <div class="page-content">
        <div class="sub-title">Facts of DMCC</div>
        <div class="sub-wrapper">
          <div class="sub-info">
            <p>
              DMCC is committed to develop, manufacture and supply high-end
              metal parts and assemblies to the selected industrial customers in
              mechanics, electronics, and automotive industry.
            </p>
            <p>
              With many years of experiences in metal work and close
              co-operation with the world famous companies, DMCC becomes a
              reliable world–wide supplier with product development,
              manufacturing, sales and service.
            </p>
            <ul>
              <li>First founded as Matino in 2001</li>
              <li>Land -24,932 m2; factory building -14,261 m2</li>
              <li>Demmel took over Matino-Nanjing since Dec. 1, 2008</li>
              <li>Sales in 2018: RMB 47mil，target for 2019: RMB 49 mil.</li>
              <li>
                Core business: metal parts and assembly production, Employees:75
              </li>
              <li>
                Customer: Mainly in Europe , North America and China, export
                over 60%
              </li>
            </ul>
          </div>
          <div class="sub-pic">
            <img src="../assets/dist/company.jpg" />
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
      .sub-wrapper {
        overflow: hidden;
        .sub-info {
          width: 800px;
          float: left;
          p {
            line-height: 24px;
          }
          ul {
            li {
              line-height: 25px;
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
