const isProduction = process.env.NODE_ENV === "production";
const resolve = dir => require("path").join(__dirname, dir);

const cdn = {
  css: ["//at.alicdn.com/t/font_1568144_nice0sm9az.css"],
  js: [
    // "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js",
    // "https://cdn.jsdelivr.net/npm/vant@2.2/lib/vant.min.js"
  ]
};

module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].cdn = cdn;
      return args;
    });

    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"))
      .set("plugins", resolve("src/plugins"))
      .set("assets", resolve("src/assets"));
  },
  css: {
    loaderOptions: {
      less: {
        data: `
          @import "@/assets/less/var.scss";
        `,
        modifyVars: {
          hack: `true; @import "${resolve("./src/assets/less/var")}";`
        }
      }
    }
  }
};
