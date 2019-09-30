#### 移动端模板

##### 安装适配插件

- cssnano
- cssnano-preset-advanced
- postcss-aspect-ratio-mini
- postcss-import
- postcss-preset-env
- postcss-px-to-viewport
- postcss-url
- postcss-viewport-units
- postcss-write-svg

**postcss.config.js 配置**

```javascript
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": { utf8: false },
    "postcss-preset-env": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-viewport-units": {},
    cssnano: {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
};
```

**使用 toVw 插件(在组件中如需要动态计算尺寸，要用到如下方法)**

```javascript
export default num => {
  return ((window.Number(num).toFixed(5) / 375) * 100).toFixed(5) + "vw";
};
```

---

##### 通用插件

- reset.css
- babel-polyfill
- fastclick

**`main.js`中的引用方式(文件最上方引入)**

```javascript
import "reset.css";
import "babel-polyfill";
import FastClick from "fastclick";
FastClick.attach(document.body);
```

---
