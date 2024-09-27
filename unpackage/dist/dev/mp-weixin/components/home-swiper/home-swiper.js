"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_soup_varity2 = common_vendor.resolveComponent("soup-varity");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_soup_varity2 + _easycom_uni_icons2)();
}
const _easycom_soup_varity = () => "../soup-varity/soup-varity.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_soup_varity + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "home-swiper",
  props: {
    active: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.active === true ? 1 : "",
        b: __props.active !== true ? 1 : "",
        c: common_assets._imports_0$1,
        d: !__props.active
      }, !__props.active ? {} : {}, {
        e: common_vendor.p({
          type: "redo",
          size: "25",
          color: "#999"
        })
      }, {
        f: common_vendor.p({
          type: "heart",
          size: "25",
          color: "#999"
        })
      }, {
        h: common_vendor.p({
          type: "star",
          size: "25",
          color: "#999"
        })
      }, {
        j: common_vendor.p({
          type: "chatboxes",
          size: "25",
          color: "#999"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-26d99abd"]]);
wx.createComponent(Component);
