<template>
  <view class="homeHead">
    <view class="statusBar" :style="{height:getStatusBarHeight() + 'px'}"></view>
    <view class="titleBar" :style="{height:getTitleBarHeight() + 'px'}">今日份鸡汤来咯~~</view>
    <view class="content">
      <view class="time">
        <view class="time-left">
          <uni-dateformat :date="Date.now()" format='dd'></uni-dateformat>
        </view>
        <view class="time-right">
          <view class="year">
            <uni-dateformat :date="Date.now()" format='yyyy年MM'></uni-dateformat>
          </view>
          <view class="week">
            {{backTodayWeek()}}
          </view>
        </view>
      </view>
      <view class="pic">
        <image src="../../static/images/headPic.png" mode=""></image>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    getStatusBarHeight,
    getTitleBarHeight,
    getNavBarHeight
  } from '@/utils/system.js'
  import {
    backTodayWeek
  } from "@/utils/tool.js"
</script>

<style lang="scss">
  .homeHead {
    // 径向渐变色
    background:
      radial-gradient(50% 200px at left top, #95E0DC, transparent),
      radial-gradient(50% 200px at right top, #D3CBFC, transparent);

    .statusBar {}

    .titleBar {
      display: flex;
      align-items: center;
      padding-left: 50rpx;

    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 50rpx;
      height: 28vh;


      .time {
        display: flex;
        align-items: center;
        letter-spacing: 2rpx;
        font-family: 'Pacifico', cursive;

        .week {
          font-weight: bold;
          font-size: 40rpx;
        }

        .time-left {
          margin-right: 10rpx;
          font-size: 110rpx;
          font-weight: bold;
        }
      }

      .pic {
        height: 82%;
        width: 50%;

        image {
          height: 100%;
          width: 100%;
        }
      }
    }

  }
</style>