<template>
  <view class="home-swiper">
    <view class="content">
      <!-- 鸡汤类别 -->
      <soup-varity></soup-varity>
      <text class="content-main" :class="{line: active === true, word: active !== true}">
        爱情诚可贵，自由价更高
        若为自由故，两者皆可抛
        爱情诚可贵，自由价更高
        若为自由故，两者皆可抛
        爱情诚可贵，自由价更高
        若为自由故，两者皆可抛
      </text>
      <view class="content-author">
        <view class="author-info">
          <view class="info-main">
            <view class="author-avatar">
              <image src="/static/images/defAvatar.png" mode="aspectFill"></image>
            </view>
            <view class="author-name">
              徐多多
            </view>
          </view>
          <view class="author-from">
            摘自：红楼梦
          </view>
          <view class="see" v-if="!active">
            22 人看过
          </view>
        </view>
      </view>
    </view>
    <view class="info">
      <view class="info-left">
        <view class="item">
          <uni-icons type="redo" size="25" color="#999"></uni-icons>
        </view>
      </view>
      <view class="info-right">
        <view class="item">
          <uni-icons type="heart" size="25" color="#999" v-if="true"></uni-icons>
          <uni-icons type="heart-filled" size="25" color="#dd524d" v-else></uni-icons>
          <text>1314</text>
        </view>
        <view class="item">
          <uni-icons type="star" size="25" color="#999" v-if="true"></uni-icons>
          <uni-icons type="star-filled" size="25" color="#f0ad4e" v-else></uni-icons>
          <text>520</text>
        </view>
        <view class="item">
          <uni-icons type="chatboxes" size="25" color="#999"></uni-icons>
          <text>250</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    defineProps
  } from 'vue';
  defineProps({
    active: {
      type: Boolean,
      default: true
    }
  })
</script>

<style lang="scss" scoped>
  .line {
    letter-spacing: 10rpx;
    line-height: 80rpx;
    font-size: 50rpx;
    @include maxline(3) //最多显示行数
  }

  .word {
    padding: 20rpx 0;
    font-size: 45rpx;
    letter-spacing: 5rpx;
    line-height: 50rpx;
  }

  .see {
    color: #4f4f4f;
    font-size: 25rpx;
    font-family: 'Pacifico', cursive;
    position: absolute;
    right: 30rpx;
    bottom: 0rpx;

  }

  .home-swiper {
    height: 100%;

    .content {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: calc(100% - 130rpx);
      padding: 0 30rpx;

      // 种类
      .content-main {
        // font-size: 50rpx;
        font-weight: lighter;
        width: 100%;
        // letter-spacing: 10rpx;
        // line-height: 80rpx;
        font-family: 'Pacifico', cursive, 'Arial', 'Helvetica', sans-serif;
        // @include maxline(3) //最多显示行数
      }

      // 作者
      .content-author {
        position: relative;

        .author-line {
          width: 70rpx;
          height: 2rpx;
          background-color: #3D3d3d;
          margin-bottom: 10rpx;
        }

        .author-info {
          display: flex;
          flex-direction: column;

          .author-avatar {
            height: 40rpx;
            width: 40rpx;

            image {
              height: 40rpx;
              width: 40rpx;
            }
          }

          .info-main {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20rpx;

            .author-avatar {
              margin-right: 10rpx;
            }

            .author-name {
              font-size: 25rpx;
              letter-spacing: 5rpx;
            }
          }

          .author-from {
            color: #4f4f4f;
            font-size: 25rpx;
            font-family: 'Pacifico', cursive;
          }
        }
      }
    }

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 130rpx;
      padding: 0 30rpx;

      .item {
        display: flex;
        align-items: center;
        padding: 10rpx 15rpx;
        color: #999;

        text {
          font-size: 25rpx;
        }
      }

      .info-left {
        padding-left: 0;

        .item:last-child {
          padding-right: 0;
        }
      }

      .info-right {
        display: flex;
      }
    }
  }
</style>