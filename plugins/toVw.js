/**
 * js动态计算尺寸的时候，用此函数转义下得到的尺寸
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
export default num => {
  return ((window.Number(num).toFixed(5) / 375) * 100).toFixed(5) + "vw";
};
