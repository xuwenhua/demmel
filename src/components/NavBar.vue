<template>
  <div class="nav-bar">
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="nav-list">
      <div
        :class="
          currentUrl.indexOf(item.title.toLowerCase()) > -1
            ? 'item active'
            : 'item'
        "
        v-for="(item, index) in navList"
        :key="index"
      >
        <div
          class="title"
          @click="handleUrl(item)"
          @mouseover="showNavBarImg(item)"
          @mouseout="resetNavBarImg"
        >
          {{ item.title }}
        </div>
        <div class="hover-wrapper">
          <div class="child-wrapper" v-show="item.children">
            <div
              class="child-item"
              v-for="(citem, cindex) in item.children"
              :key="cindex"
            >
              <div
                class="child-title"
                @mouseover="showNavBarImg(citem, true)"
                @mouseout="resetNavBarImg"
                @click="handleUrl(citem)"
              >
                {{ citem.title }}
              </div>
            </div>
            <!-- <div class="child-bottom">
              <img src="../assets/nav-bg/bottom-bg.png" alt="" />
            </div> -->
          </div>
          <div class="child-wrapper three" v-show="childItem.length > 0">
            <div
              class="child-item"
              v-for="(item, index) in childItem"
              :key="index"
              @mouseover="showNavBarChildImg(item)"
              @mouseout="resetNavBarImg"
              @click="handleUrl(index)"
            >
              <div class="child-title">{{ item.title }}</div>
            </div>
            <!-- <div class="child-bottom">
              <img src="../assets/nav-bg/bottom-bg.png" alt="" />
            </div> -->
          </div>
          <div class="item-bg" v-show="background">
            <img :src="background" />
          </div>
        </div>
      </div>
    </div>
    <div class="right-wrapper">
      <div class="lang">
        <img src="../assets/zh.png" />
      </div>
      <div class="search-wrapper">
        <input type="text" class="keyword" placeholder="Search" />
        <div class="btn">
          <img src="../assets/search.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'NavBar',
  data() {
    return {
      navList: [
        {
          title: 'HOME',
          url: '/',
        },
        {
          title: 'SOLUTIONS',
          url: '/solutions',
          background: require('../assets/dist/100_fot_car_city_night@2x.png'),
          children: [
            {
              title: 'HMI',
              url: '/solutions/1',
              background: require('../assets/dist/100_fot_car_city_night@2x.png'),
            },
            {
              title: 'AUTOMOTIVE',
              url: '/solutions/2',
              background: require('../assets/dist/100_own_emblem_bmw.png'),
              children: [
                {
                  title: 'EMBLEMS',
                  url: '/solutions/2/1',
                  background: require('../assets/dist/100_own_emblem_bmw.png'),
                },
                {
                  title: 'ENTRY SILLS',
                  url: '/solutions/2/2',
                  background: require('../assets/dist/100_own_emblem_bmw.png'),
                },
              ],
            },
            {
              title: 'METAL PARTS',
              url: '/solutions/3',
              background: require('../assets/dist/item-bg.png'),
              children: [
                {
                  title: 'PROFILE',
                  url: '/solutions/3/1',
                  background: require('../assets/dist/item-bg.png'),
                },
                {
                  title: 'BRACKETS',
                  url: '/solutions/3/2',
                  background: require('../assets/dist/item-bg.png'),
                },
                {
                  title: 'BURNING HOUSE',
                  url: '/solutions/3/3',
                  background: require('../assets/dist/item-bg.png'),
                },
                {
                  title: 'ASSEMBLIES',
                  url: '/solutions/3/4',
                  background: require('../assets/dist/item-bg.png'),
                },
              ],
            },
          ],
        },
        {
          title: 'COMPANY',
          background: require('../assets/dist/100_own_building_plant1.png'),
          children: [
            {
              title: 'COMPANY HISTORY',
              url: '/company/1',
              background: require('../assets/dist/100_own_building_plant1.png'),
            },
            {
              title: 'QUALITY',
              url: '/company/2',
              background: require('../assets/dist/100_own_building_plant1.png'),
            },
            {
              title: 'ENVIRONMENT',
              url: '/company/3',
              background: require('../assets/dist/100_own_building_plant1.png'),
            },
            {
              title: 'VISION & VALUES',
              url: '/company/4',
              background: require('../assets/dist/100_own_building_plant1.png'),
            },
          ],
        },
        {
          title: 'CONTACT',
          url: '/contact',
        },
      ],
      background: '',
      childItem: [],
    }
  },
  computed: {
    currentUrl() {
      return this.$route.fullPath
    },
  },
  methods: {
    showNavBarImg(item, child) {
      this.childItem = []
      this.background = item.background
      if (child && item.children) {
        this.childItem = item.children
      }
      if (!item.children || item.title === 'COMPANY') {
        this.childItem = []
      }
    },
    showNavBarChildImg(item) {
      this.background = item.background
    },
    resetNavBarImg() {
      // this.background = ''
      // this.childItem = []
    },
    handleUrl(item) {
      if (item.url) {
        this.$router.push(item.url)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.nav-bar {
  height: 100px;
  line-height: 100px;
  background-color: #fff;
  padding: 0 45px;
  -moz-box-shadow: 0px 1px 2px #949494;
  -webkit-box-shadow: 0px 1px 2px #949494;
  box-shadow: 0px 1px 2px #949494;
  font-weight: 500;
  &:after {
    content: '';
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }
  .logo {
    width: 225px;
    height: 100px;
    float: left;
    position: relative;
    img {
      width: 225px;
      height: 56px;
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -28px;
    }
  }
  .nav-list {
    float: left;
    font-size: 20px;
    color: #000000;
    margin-left: 30px;
    &:after {
      content: '';
      height: 0;
      line-height: 0;
      display: block;
      visibility: hidden;
      clear: both;
    }
    .item {
      text-align: center;
      float: left;
      cursor: pointer;
      position: relative;
      .title {
        width: 180px;
        text-align: center;
        cursor: pointer;
      }
      &:hover,
      &.active {
        .title {
          color: #00789e;
        }
      }
      &:hover {
        .hover-wrapper {
          display: block !important;
        }
      }
      .hover-wrapper {
        display: none;
        overflow: hidden;
        width: 980px;
        position: absolute;
        left: 50%;
        margin-left: -395px;
        font-weight: normal;
      }
      .child-wrapper {
        display: block;
        height: 250px;
        position: relative;
        margin-top: 2px;
        background-color: #fff;
        padding: 15px 0;
        float: left;
        margin-right: 22px;
        &.three {
          .child-item {
            width: 160px;
          }
        }
        &.three::before {
          border-top: 140px solid #ffffff;
          border-left: 20px solid transparent;
          border-bottom: 140px solid #ffffff;
          top: 0;
          left: -20px;
          content: '';
          display: block;
          position: absolute;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          backface-visibility: hidden;
          width: 0;
        }
        &::after {
          border-top: 140px solid transparent;
          border-left: 20px solid #ffffff;
          border-bottom: 140px solid transparent;
          top: 0;
          right: -20px;
          content: '';
          display: block;
          position: absolute;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          backface-visibility: hidden;
          width: 0;
        }
        .child-item {
          // height: 40px;
          width: 170px;
          line-height: 40px;
          font-size: 17px;
          text-align: left;
          padding-left: 25px;
          color: #9e9e9e;
          background-color: #fff;
          cursor: pointer;
          &:hover,
          &.active {
            .child-title {
              color: #000;
            }
            & > .sub-wrapper {
              display: block;
            }
          }
          .child-title {
            cursor: pointer;
          }
        }
      }
      .item-bg {
        display: block;
        width: auto;
        height: 280px;
        line-height: 1;
        margin-top: 2px;
        margin-left: -20px;
        float: left;
        overflow: hidden;
        position: relative;
        img {
          width: auto;
          height: 280px;
        }
      }
    }
  }
  .right-wrapper {
    float: right;
    height: 100px;
    position: relative;
    overflow: hidden;
    width: 247px;
    .lang {
      width: 45px;
      height: 30px;
      img {
        width: 45px;
        height: 30px;
        position: absolute;
        top: 50%;
        margin-top: -15px;
      }
    }
    .search-wrapper {
      height: 28px;
      border: 1px solid #a8a8a8;
      position: absolute;
      top: 50%;
      left: 65px;
      margin-top: -15px;
      width: 180px;
      overflow: hidden;
      .keyword {
        width: 142px;
        height: 24px;
        line-height: 24px;
        float: left;
        padding: 2px 4px;
        border: 0;
        outline: none;
        font-size: 14px;
      }
      .btn {
        float: left;
        width: 18px;
        height: 18px;
        line-height: 1;
        padding: 6px;
        background-color: #a8a8a8;
        cursor: pointer;
        img {
          height: 18px;
          width: 18px;
        }
      }
    }
  }
}
</style>
