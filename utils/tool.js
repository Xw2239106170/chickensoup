// 获取当前星期
export const backTodayWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const days = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return days[dayOfWeek]
}