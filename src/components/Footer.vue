<template>
  <div class="footer">
    <div class="wrapper">
      <div class="half">
        <div class="item">Number of visitors 006666</div>
        <div class="item">Number of visitors today 221</div>
      </div>
      <div class="half">
        <div class="item">
          <img src="../assets/email.png" alt="">
          marketing@demmel.cn
        </div>
        <div class="item">&copy;Demmel CN 2020</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {},
}
</script>
<style lang="scss" scoped>
  .footer {
    background-color: #4B4B4B;
    color: #fff;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
    .wrapper {
      max-width: 1290px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .half {
        flex: 1;
        overflow: hidden;
        &:first-child {
          .item {
            float: left;
            margin-left: 60px;
          }
        }
        .item {
          display: flex;
          align-items: center;
          margin-right: 60px;
          float: right;
          img {
            width: 19px;
            height: 14px;
            margin-right: 4px;
          }
        }
      }
    }
  }
</style>
