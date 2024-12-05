import config from "./config";

// 标题或重要标签 每个单词首字母大写 （Title Case）
export const TITLE_CASE = "title";
// 一般描述文本 首个单词首字母大写 （Sentence Case）
export const SENTENCE_CASE = "sentence";

/**
 * @function 格式化明文
 * @param {string} val 需格式化的数值
 * @param {string} method [title|sentence] 默认为`title`每个单词首字母大写
 * @return {string} 按照指定代码，包含货币符号的千分格式化
 * @description 只在类似情况下使用该函数。
 * @example
 * fmtText( `hello`);
 */
export const fmtText = (val, method = TITLE_CASE) => {
  // 是否为西文
  const isWestern = !config.ignore.includes(config.lgre);
  // console.log(`是否西文:`, isWestern);
  if (!isWestern) return val;
  // 西文格式化处理 首个单词首字母大写 （Sentence Case）
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  // 西文格式化处理 每个单词首字母大写 （Title Case）
  const toTitleCase = (str) =>
    str
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");
  switch (method) {
    // case constants.FMT_METHOD_TC:
    // 	// 每个单词首字母大写（Title Case）
    // 	return toTitleCase(val);
    case SENTENCE_CASE:
      // 首个单词首字母大写（Sentence Case）
      return capitalizeFirstLetter(val);

    // 如果有其他模式，在此追加。如，字符全小写。

    default:
      // 每个单词首字母大写（Title Case）
      return toTitleCase(val);
  }
};
