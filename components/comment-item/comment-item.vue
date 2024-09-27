<template>
  <view class="commentItem">
    <view class="item-left">头像</view>
    <view class="item-right">
      <view class="right-top">
        <view class="userName">个人信息</view>
        <view class="userClick">点赞</view>
      </view>
      <view class="right-bottom">评论详情</view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "comment-item",
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss" scoped>
  .commentItem {
    display: flex;
    flex-direction: column;

    // 左边头像信息
    .item-left {}
  }
</style>