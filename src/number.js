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

/**
 * @function 格式化数字值
 * @param {string} str 需格式化的字符串
 * @param {number} decimal 保留小数位数
 * @return {string} 格式化为指定小数位数的string类型数值
 * @description 通常用于不限制位数或指定位数的数值。
 * @example
 * fmtNumber(`0.000013579`)
 * .fmtNumber(`13579.111111`, 5)
 */
export const fmtNumber = (str, decimal = -1) => {
  // 非数字 135.00
  str = !str || isNaN(str) ? "0.00" : str;
  // 四舍五入到指定小数位：或原样输出
  return decimal > -1 ? parseFloat(str).toFixed(decimal) : str;
};

/**
 * @function 格式化加密货币,统一使用美元的千分符形式。
 * @param {string} str 需格式化的字符串
 * @param {string} locale lgre
 * @return {string} 'en-US'千分格式化
 * @description 因为USDT 与美元1:1。多数情况，交易所会选择在显示价格时，即使是整数价格，也保留两位小数
 * @example
 * fmtCrypto(`13579.00`);
 * fmtCrypto(`13579.11`);
 * fmtCrypto(`13579.1111`);
 * fmtCrypto(fmtNumber(`13579.111111`, 5));
 */
export const fmtCrypto = (str, locale = config.lgre) => {
  // console.log(`fmtCrypto:`, str)
  // 合法值
  str = !str || isNaN(str) ? 0 : str;
  // 处理为指定小数位数的字符串
  str = typeof str == "string" ? str : str.toString();
  // console.log(`fmtCrypto:`, str)
  // 整数和小数部分
  const [intPart, decimalPart = ""] = str.split(".");
  // 小数位数最大值
  const mx = decimalPart.length;
  // console.log(`fmtCrypto:`, mx)
  // // 再把整数和小数拼起来。
  // const temp = intPart + '.' + decimalPart;
  // console.log(`fmtCrypto:`, temp)
  return (
    new Intl.NumberFormat(locale, {
      style: "decimal", // 用于以特定货币格式化数字。
      minimumFractionDigits: 0,
      maximumFractionDigits: mx, // 显示最多位小数
    }).format(intPart) + (decimalPart ? "." + decimalPart : "")
  );
};

/**
 * @function 格式化传入值为指定货币格式
 * @param {string} str 需格式化的字符串
 * @param {string} currency 货币代码
 * @param {string} locale lgre
 * @return {string} 按照指定代码，包含货币符号的千分格式化
 * @description
 * @example
 * fmtCurrency(`13579.00`);
 * fmtCurrency(`13579.11`);
 * fmtCurrency(`13579.1111`);
 * fmtCurrency(fmtNumber(`13579.111111`, 5));
 */
export const fmtCurrency = (
  str,
  currency = config.currency,
  locale = config.lgre
) => {
  // console.log(`fmtCurrency:`, str)
  // 转为字符串
  str = typeof str == "string" ? str : str.toString();
  // 获取整数和小数部分
  const [intPart, decimalPart = ""] = str.split(".");
  // 当前货币
  //   const curCurrency = localize[locale].currency;
  // console.log(`fmtCurrency curCurrency:`, curCurrency);
  // 小数位数最小值。传入值小数部分的长度&& 小数*1是否＞0
  //   const min = decimalPart.length > 0 && decimalPart * 1 > 0 ? 0 : 2;
  // console.log(`fmtCurrency min:`, min);
  // 小数位数最大值
  const max = decimalPart.length || config.decimal;
  // console.log(`fmtCurrency max:`, max)
  // 再把整数和小数拼起来。
  const temp = intPart + "." + decimalPart;
  // console.log(`fmtCurrency temp:`, temp);
  return new Intl.NumberFormat(locale, {
    style: "currency", // 用于以特定货币格式化数字。
    // 指定要使用的货币代码（如 'USD'、'EUR'、'CNY' 等）
    currency: currency,
    // 定义货币的显示形式（如 'symbol' 显示符号，'code' 显示货币代码，'name' 显示货币名称）。
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: max, // 显示最多位小数
    // unit: "kilometer-per-hour", // 单位
  }).format(temp);
  // .format(intPart) + (decimalPart ? '.' + decimalPart : '')
};

/**
 * @function 格式化量值(整数)如股票购买的股数
 * @param {number} num 需格式化的数值
 * @param {string} locale 货币代码
 * @return {string} 按照指定代码，包含货币符号的千分格式化
 * @description 只在类似情况下使用该函数。
 * @example
 * fmtQTY(`13579.00`);
 * fmtQTY(`13579`);
 */
export const fmtQTY = (num, locale = config.lgre) => {
  num = !num || isNaN(num) ? 0 : Number(num);
  return new Intl.NumberFormat(locale, {
    style: "decimal", // 用于普通数字
    minimumFractionDigits: 0,
    maximumFractionDigits: 0, // 显示最多位小数
    useGrouping: true, // 是否使用千位分隔符，默认为 true
  }).format(num);
};
