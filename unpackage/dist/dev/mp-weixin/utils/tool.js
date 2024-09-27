"use strict";
const backTodayWeek = () => {
  const today = /* @__PURE__ */ new Date();
  const dayOfWeek = today.getDay();
  const days = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  return days[dayOfWeek];
};
exports.backTodayWeek = backTodayWeek;
