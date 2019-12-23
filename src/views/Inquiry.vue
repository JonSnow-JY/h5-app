<template lang="html">
  <div class="inquiry" flex="dir:top box:first">
    <div class="">
      <!-- 上面三模块 -->
      <dl class="van-hairline--bottom" flex="box:last">
        <dt>语音询价</dt>
        <dd>
          <i class="icon iconfont icon-huatong"></i>
        </dd>
      </dl>
      <dl class="van-hairline--bottom" flex="box:last">
        <dt>电话询价</dt>
        <dd>
          <i class="icon iconfont icon-dianhua"></i>
        </dd>
      </dl>
      <dl flex="box:last">
        <dt>在线询价</dt>
        <dd>
          <i class="icon iconfont icon-iconfonticonfonti2copycopy"></i>
        </dd>
      </dl>
      <div class="hi-btn" flex="cross:center box:last">
        <span>历史询价</span>
        <van-tag round>清空</van-tag>
      </div>
    </div>
    <!-- 滚动的内容 -->
    <div class="scroll-content" flex="dir:top box:mean">
      <van-pull-refresh
        class="pull-refresh-box"
        v-model="isLoading"
        @refresh="onRefresh"
      >
        <!-- 路线 -->
        <div v-for="n in 2" :key="n" class="same-card van-hairline--surround">
          <div
            class="card-top van-hairline--bottom"
            flex="cross:center box:last"
          >
            <span>2019-12-17 16:37:13</span>
            <van-tag plain type="primary">发货</van-tag>
          </div>
          <div class="card-bottom" flex="cross:center box:last">
            <div class="address-detail" flex="cross:center">
              <div class="ad-same ad-start">
                <p class="city">北京市</p>
                <p class="area">房山区</p>
              </div>
              <i class="icon iconfont icon-xiangyoujiaohuan"></i>
              <div class="ad-same ad-end">
                <p class="city">北京市</p>
                <p class="area">房山区</p>
              </div>
            </div>
            <div class="goods-detail">
              木材 55吨
            </div>
          </div>
        </div>
        <!-- 语音 -->
        <div class="same-card van-hairline--surround">
          <div class="card-top van-hairline--bottom" flex="cross:center">
            <span>2019-12-17 16:37:13</span>
          </div>
          <div class="card-bottom"></div>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
  name: "inquiry",
  mixins: [],
  components: {},
  props: {},
  data() {
    return { count: 0, isLoading: false };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.inquiry {
  background: @bg;
  min-height: 100vh;
  dl {
    background: #fff;
    line-height: 54px;
    padding: 0 @padding;
    font-size: 16px;
    i {
      font-size: 20px;
      color: @green;
      font-weight: bold;
    }
  }
  .hi-btn {
    padding: 8px @padding;
  }
  .scroll-content {
    .pull-refresh-box {
      min-height: 100%;
      overflow: scroll;

      .same-card {
        background: #fff;
        margin: @padding-1;
        border-radius: 4px;
        overflow: hidden;
        &:nth-child(2) {
          margin-top: 0;
        }
        .card-top {
          padding: @padding-1 @padding;
          font-size: 14px;
        }
        .card-bottom {
          padding: @padding-1 @padding;
          .address-detail {
            color: @green;
            .ad-same {
              p {
                color: @green;
                text-align: center;
                &:first-child {
                  font-size: 18px;
                  line-height: 30px;
                }
                &:last-child {
                  font-size: 14px;
                  line-height: 22px;
                }
              }
            }
            i {
              padding: 0 @padding;
            }
          }
        }
      }
    }
  }
}
</style>
