<template>
  <view class="varity-body">
    <view class="content-title" v-if="varity">
      <view class="title-icon">
        <image src="https://mp-339600a7-3daf-4731-809f-df53cd041b7e.cdn.bspapp.com/chicken-soup/xinlingjitang.png"
          mode=""></image>
      </view>
      <view class="content-text">
        心灵鸡汤
      </view>
    </view>
    <view class="content-title" v-else>
      <view class="title-icon">
        <image src="https://mp-339600a7-3daf-4731-809f-df53cd041b7e.cdn.bspapp.com/chicken-soup/heart.png" mode="">
        </image>
      </view>
      <view class="content-text">
        毒鸡汤
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "soup-varity",
    data() {
      return {
        varity: true
      };
    }
  }
</script>

<style lang="scss" scoped>
  .content-title {
    height: 56rpx;
    justify-content: center;
    width: fit-content; //背景颜色只显示在文字范围
    display: flex;
    align-items: center;
    font-size: 26rpx;
    // font-weight: 400;
    letter-spacing: normal;
    padding: 0 20rpx;
    border-radius: 56rpx;
    background-color: #FFF3f7;


    .title-icon {
      margin-right: 10rpx;
      display: flex;
      align-items: center;

      image {
        width: 45rpx;
        height: 45rpx;
      }
    }
  }

  .content-title:nth-child(2) {
    background-color: #EDFDF0;

    image {
      width: 36rpx;
      height: 36rpx;
    }
  }
</style>