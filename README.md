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
      unitPrecision: 1,
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

**对比淘宝 H5 版本，上面这种配置方式并不是很完美，有待改进，目前先这样使用**

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

##### 引入 vant

**postcss 会与 vant 的样式有冲突，故需要在`postcss.config.js中做如下配置`**

```javascript
selectorBlackList: [".ignore", ".hairlines", ".van"],
```

**配置`babel.config.js`文件，实现按需引入**

- cnpm i babel-plugin-import -D

```javascript
plugins: [
  [
    "import",
    {
      libraryName: "vant",
      libraryDirectory: "es",
      style: true
    },
    "vant"
  ]
];
```

**在`main.js`文件中按需引入**

```javascript
import { Button } from "vant";
Vue.use(Button);
```

**在组件中直接使用**

```javascript
<van-button type="default">默认按钮</van-button>
```

---

##### 引入 mint-ui

**修改`postcss.config.js`中的文件配置**

```javascript
selectorBlackList: [".ignore", ".hairlines", ".mint"],
```

**配置`babel.config.js`文件，实现按需引入**

- cnpm i babel-plugin-component -D

```javascript
plugins: [
  [
    "component",
    {
      libraryName: "mint-ui",
      style: true
    },
    "mint-ui"
  ]
];
```

**在`main.js`文件中按需引入(注意这里的引入方式与 vant 是不一样的)**

```javascript
import { Button } from "mint-ui";
Vue.component(Button.name, Button);
```

**在组件中直接使用**

```javascript
<mt-button type="default">default</mt-button>
```

---

##### 1px 边框

```css
.test-1px {
  border: 0.5px solid #ccc;
}
```

**直接设置为 0.5px，在表现上就是真正的 1 像素（在 ps 上验证过了，真的是 1px）**
