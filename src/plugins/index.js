import Vue from "vue";

const files = require.context("./modules", false, /\.js$/);

files.keys().map(item => {
  Vue.use(files(item).default);
});
