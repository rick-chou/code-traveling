/**
 * @param 7f0c1001
 * @description 时间
 * @description 前两位表示星期
 * @description 中间四位是小时分钟
 * @description 最后两位是开关
 */

var _ = require('lodash');

const timeStr = '7f0c10017f1010017f0c10017f1010017f0c10017f101001';

/**
 *
 * @param {string} timeStr
 */
const _formatTimeStr = timeStr => {
  const timeArr = _.chunk([...timeStr], 8).map(item => item.join(''));
  return timeArr.map(item => {
    return [parseInt(item.slice(2, 4), 16), parseInt(item.slice(4, 6), 16)].join(':');
  });
};

/**
 *
 * @param {string} sourceTime 原始时间字符串
 * @param {string} newTime 添加的新时间字符串
 * @returns
 */
const _sortTimeStr = (sourceTime, newTime) => {
  const timeArr = _.chunk([...(sourceTime + newTime)], 8).map(item => item.join(''));
  return timeArr.sort((a, b) => parseInt(a.slice(2, 6), 16) - parseInt(b.slice(2, 6), 16)).join('');
};

console.log(`_formatTimeStr`, _formatTimeStr(timeStr));
console.log(`_sortTimeStr`, _sortTimeStr(timeStr, '7f010001'));
