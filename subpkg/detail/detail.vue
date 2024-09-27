<template>
  <view class="detail-main">
    <view class="detail-content">
      <home-swiper :active="false"></home-swiper>
    </view>

    <view class="detail-comment">
      <view class="list">
        <view class="row">
          <comment-item></comment-item>
        </view>
      </view>
    </view>

    <view class="detail-interactive">
      <view class="interactive-input">
        <input type="text" placeholder="评价一下..." />
      </view>
      <view class="interactive-submit">
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    onReady,
    onLoad
  } from '@dcloudio/uni-app'
  import {
    ref
  } from 'vue';
  // 获得传入参数
  const id = ref(0)
  onLoad((options) => {
    id.value = options.id
    console.log(id.value)
  })
</script>

<style lang="scss" scoped>
  .detail-main {

    .detail-content {
      margin-top: 3vh;
      border-bottom: 10rpx solid #f7f7f7;
    }

    // 评论发布
    .detail-interactive {
      border-top: 1px solid #e4e4e4;
      padding: 18rpx 20rpx;
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;

      .interactive-input {
        input {
          font-size: 25rpx;
          padding-left: 20rpx;
          height: 70rpx;
          border-radius: 50rpx;
          background-color: #f5f5f5;
        }
      }

      .interactive-submit {}
    }
  }
</style>