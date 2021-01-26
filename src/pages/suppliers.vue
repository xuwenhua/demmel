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
        <div class="title">Suppliers</div>
        <div class="page-map">
          <router-link to="/" class="link">Demmel</router-link>
          <span>»</span>
          <router-link to="/suppliers" class="link">Suppliers</router-link>
        </div>
      </div>
      <div class="page-content">
        <div class="sub-wrapper">
          <div class="sub-info">
            <p>
              Our joint task is to further optimise value-creation chains, drive
              innovations and guarantee reliability. Only then can we meet the
              expectations and requirements of our customers and secure our
              competitiveness in terms of function, quality and price. We select
              suppliers according to objective and transparent criteria. We
              constantly evaluate their performance according to defined
              principles.
            </p>
            <p>
              We are a reliable, high-performance partner for our customers.
              Naturally, we also expect these values from our suppliers. We are
              willing to help suppliers to make continuous improvement. We are
              committed to developing together with the best suppliers. Only
              with exceptional performance will we be jointly able to rise to
              the challenges of the future.
            </p>
            <p>
              We want to inform existing and future delivery partners of our
              procurement processes and give you the opportunity to communicate
              directly with us in an uncomplicated and fast manner. We look
              forward to communicating with you.
            </p>
            <div style="overflow: hidden">
              <div style="float: left; width: 680px">
                <p style="margin-top: 0">
                  Our general range of procurement includes:
                </p>
                <p>
                  <b style="color: #00789e">Raw material:</b> Carbon steel (CRS
                  & HRS), Stainless steel, Aluminium and Granules
                </p>
                <p>
                  <b style="color: #00789e">Purchased part:</b> Welding nut,
                  Screw nut, Rivet nut, circuit board, Rubber and PCB
                </p>
                <p>
                  <b style="color: #00789e">Surface treatment:</b> KTL, Zinc,
                  Powder, ZnNi, ZnFe, Znic Flake
                </p>
                <p>
                  <b style="color: #00789e">Tooling:</b> metal tooling, plastic
                  tooling, inspection gauge, fixture
                </p>
                <p style="margin-bottom: 0">
                  <b style="color: #00789e">Others:</b> Packaging materials,
                  protective materials
                </p>
              </div>
              <div style="float: left; margin-left: 40px; width: 320px">
                <img src="../assets/suppliers-img.jpg" width="320" />
              </div>
            </div>
            <p>
              We expect proven competence in their business area and a
              reliable quality from our partner with the requirement of being
              certified in ISO 9001, IATF16949, ISO14001, and EMAS etc.,
              alternatively, comparable quality assurance programs.
            </p>
            <p style="margin-bottom: 80px">
              Other important evaluation criteria include but not limited to
              best delivery performance with absolute adherence to deadlines and
              knowledge, application of the current regulations, standards and
              test procedures. The ability to communicate flexibly with short
              distances, quick decision-making and short response times to
              changing requirements fits our standards and work style.
            </p>
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
    return { bannerImg: require('../assets/banner/100_fot_contract.jpg') }
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
    margin-top: 400px;
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
          width: 1080px;
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
          width: 250px;
          img {
            width: 250px;
          }
        }
      }
    }
  }
}
</style>
