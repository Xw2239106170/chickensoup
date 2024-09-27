"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_home_head2 = common_vendor.resolveComponent("home-head");
  const _easycom_home_swiper2 = common_vendor.resolveComponent("home-swiper");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_home_head2 + _easycom_home_swiper2 + _easycom_uni_popup2)();
}
const _easycom_home_head = () => "../../components/home-head/home-head.js";
const _easycom_home_swiper = () => "../../components/home-swiper/home-swiper.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_home_head + _easycom_home_swiper + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const soupList = common_vendor.ref([0, 1, 2, 3, 4]);
    const currentIndex = common_vendor.ref(0);
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
    };
    const lineWidth = common_vendor.computed(() => currentIndex.value / (soupList.value.length - 1) * 100);
    const usePopup = common_vendor.ref(null);
    common_vendor.onReady(() => {
      const state = common_vendor.index.getStorageSync("useState") || false;
      if (state)
        return;
      usePopup.value.open();
    });
    const closePopup = () => {
      usePopup.value.close();
      common_vendor.index.setStorageSync("useState", true);
    };
    const goPostDetail = (id) => {
      common_vendor.index.navigateTo({
        url: "/subpkg/detail/detail?id=" + id
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(soupList.value, (item, index, i0) => {
          return {
            a: "07e72d3c-1-" + i0,
            b: index,
            c: common_vendor.o(($event) => goPostDetail(index), index)
          };
        }),
        b: common_vendor.p({
          active: true
        }),
        c: common_vendor.o(swiperChange),
        d: lineWidth.value + "%",
        e: common_vendor.o(closePopup),
        f: common_vendor.sr(usePopup, "07e72d3c-2", {
          "k": "usePopup"
        }),
        g: common_vendor.o(closePopup),
        h: common_vendor.p({
          type: "center",
          ["border-radius"]: "10px 10px 0 0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"]]);
wx.createPage(MiniProgramPage);
