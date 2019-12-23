import { Swipe, SwipeItem, Button, PullRefresh, Tag } from "vant";

export default {
  install(Vue) {
    Vue.use(Swipe)
      .use(SwipeItem)
      .use(PullRefresh)
      .use(Tag)
      .use(Button);
  }
};
