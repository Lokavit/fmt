import config from "./config";

/**
 * @function 格式化时分秒
 * @param {} timestamp 时间戳
 * @param {string} timezone lgre时区
 * @description
 * @example
 * fmtCurrency(`13579.00`);
 */
export const fmtToHMS = (timestamp, timezone = config.timezone) => {
  const date = new Date(timestamp);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 24小时制
    timeZone: timezone.timeZone,
  };
  return date.toLocaleTimeString(curLocale, options);
};
