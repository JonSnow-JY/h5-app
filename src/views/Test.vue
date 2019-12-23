<template lang="html">
  <div class="">
    1212121
  </div>
</template>

<script>
export default {
  name: "",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
    console.log(
      this._.isEqual(
        { a: 1, b: [{ a: 1, b: { a: 1 } }] },
        { a: 1, b: [{ a: 1, b: { a: 1 } }] }
      )
    );
  },
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
