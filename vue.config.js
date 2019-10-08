const isProduction = process.env.NODE_ENV === "production";

const cdn = {
  css: ["xxx.css", "sss.js"],
  js: ["xxxx.js", "sss.js"]
};

module.exports = {
  chainWebpack: config => {
    // config
    //   .entry("index")
    //   .add("")
    //   .end();
  }
};
