"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_home_swiper2 = common_vendor.resolveComponent("home-swiper");
  const _easycom_comment_item2 = common_vendor.resolveComponent("comment-item");
  (_easycom_home_swiper2 + _easycom_comment_item2)();
}
const _easycom_home_swiper = () => "../../components/home-swiper/home-swiper.js";
const _easycom_comment_item = () => "../../components/comment-item/comment-item.js";
if (!Math) {
  (_easycom_home_swiper + _easycom_comment_item)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const id = common_vendor.ref(0);
    common_vendor.onLoad((options) => {
      id.value = options.id;
      console.log(id.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          active: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-77240552"]]);
wx.createPage(MiniProgramPage);
