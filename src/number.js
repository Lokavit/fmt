import config from "./config";
/**
 * @function 按照lgre格式化百分数
 * @param {string} val 需格式化的数值
 * @param {string} locale [lg-re]
 * @return {string} 格式化后的百分数
 * @description 只在类似情况下使用该函数。
 * @example
 * fmtPercent(1.35);
 */
export const fmtPercent = (val, locale = config.lgre) => {
  const fmt = new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: config.decimal,
  });
  return fmt.format(val / 100);
};
