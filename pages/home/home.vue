<template>
  <view class="home-layout">
    <!-- 头部背景 -->
    <view class="home-head">
      <home-head></home-head>
    </view>
    <!-- 项目主体 -->
    <view class="home-body">
      <view class="body-main">
        <swiper vertical @change="swiperChange">
          <swiper-item v-for="(item, index) in soupList" :key="index" @click="goPostDetail(index)">
            <home-swiper style="height: 100%;" :active='true'></home-swiper>
          </swiper-item>
        </swiper>
      </view>
      <!-- 下部进度条 -->
      <view class="body-process">
        <view class="process-line" :style="{width:lineWidth + '%'}">
        </view>
      </view>
    </view>
  </view>
  <!-- 弹出层 -->
  <view>
    <uni-popup ref="usePopup" type="center" border-radius="10px 10px 0 0" class="windows" @maskClick="closePopup">
      <view class="tips">
        <image src="https://mp-339600a7-3daf-4731-809f-df53cd041b7e.cdn.bspapp.com/chicken-soup/upward.png"
          mode="heightFix" @click="closePopup">
        </image>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
  import {
    computed,
    onMounted,
    ref
  } from 'vue';
  import {
    onReady
  } from "@dcloudio/uni-app"
  // 轮播事件
  const soupList = ref([0, 1, 2, 3, 4])
  const currentIndex = ref(0)
  // 轮播切换事件
  const swiperChange = (e) => {
    currentIndex.value = e.detail.current
  }
  // 计算进度条的长度
  const lineWidth = computed(() => currentIndex.value / (soupList.value.length - 1) * 100)

  // 弹出层处理
  const usePopup = ref(null)
  onReady(() => {
    const state = uni.getStorageSync("useState") || false
    if (state) return
    usePopup.value.open()
  })
  // 关闭遮罩层
  const closePopup = () => {
    usePopup.value.close()
    uni.setStorageSync("useState", true)
  }
  // 跳转详情页
  const goPostDetail = (id) => {
    uni.navigateTo({
      url: "/subpkg/detail/detail?id=" + id
    })
  }
</script>

<style lang="scss" scoped>
  .line {
    @include maxline(3) //最多显示行数
  }

  .home-layout {
    height: 100vh;
    background-color: #bddffd;
    display: flex;
    flex-direction: column;

    .home-head {
      // height: 450rpx;
    }

    .home-body {
      // 这样子系统会更具home-head的高度，自动设计home-body高度
      flex: 1;
      background-color: #fff;
      border-radius: 45rpx 45rpx 0 0;
      overflow: hidden;

      .body-main {
        height: calc(100% - 5rpx);

        swiper {
          height: 100%;

          // swiper-item {
          //   @include maxline(3) //最多显示行数
          // }
        }
      }

      // 进度条
      .body-process {
        height: 5rpx;
        width: 100%;
        background-color: #aaa;

        .process-line {
          height: 100%;
          width: 50%;
          background-color: #bde1fb;
          background: linear-gradient(to right, #BCE0FD, #bde1fb);
        }
      }
    }
  }

  // 弹窗
  .tips {

    image {
      height: 200rpx;
      transform: translateY(100rpx);
      opacity: 0;
      animation: useanimate 1.5s infinite;
    }
  }

  @keyframes useanimate {
    0% {
      transform: translateY(100rpx);
      opacity: 0;
    }

    100% {
      transform: translateY(-100rpx);
      opacity: 1;
    }
  }
</style>