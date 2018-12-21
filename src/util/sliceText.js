/**
 * テキストを切り取る
 *
 * @param {String} text - 切り取られるテキスト
 * @param {Number} start - 切り取る位置
 * @param {Number} end - 切り取り終了の位置
 * @returns {String} 切り足られた結果のテキスト
 */
export default function sliceText(text, start, end) {
  return text.slice(start, end);
}
